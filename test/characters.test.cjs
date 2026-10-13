const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

function load(relativePath, mocks) {
  const filename = path.resolve(__dirname, '..', relativePath);
  const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
  }).outputText;
  const loaded = new Module(filename, module);
  loaded.filename = filename;
  loaded.paths = Module._nodeModulePaths(path.dirname(filename));
  const originalRequire = loaded.require.bind(loaded);
  loaded.require = name => Object.hasOwn(mocks, name) ? mocks[name] : originalRequire(name);
  loaded._compile(compiled, filename);
  return loaded.exports;
}

const person = (name) => ({ name, species: [], homeworld: 'home', vehicles: ['vehicle'] });

test('enriches every page, including the final page, and publishes fresh arrays', async () => {
  const responses = {
    'https://swapi.dev/api/people?page=1': { results: [person('First')], next: 'page2' },
    page2: { results: [person('Last')], next: null },
    home: { name: 'Tatooine' },
    vehicle: { name: 'Speeder' },
  };
  const updates = [];
  const { getPeople } = load('app/functions/requests.ts', {
    axios: { get: async url => ({ data: structuredClone(responses[url]) }) },
  });
  await getPeople(people => updates.push(people));
  assert.equal(updates.at(-1).length, 2);
  for (const character of updates.at(-1)) {
    assert.equal(character.mainSpecie, 'Human');
    assert.equal(character.home, 'Tatooine');
    assert.deepEqual(character.vehicles, ['Speeder']);
  }
  assert.equal(updates[0].length, 1);
  assert.notEqual(updates[0], updates.at(-1));
});

test('enriches a response that contains only one page', async () => {
  const { getPeople } = load('app/functions/requests.ts', {
    axios: { get: async url => ({ data: url.includes('/people')
      ? { results: [person('Only')], next: null } : { name: 'Detail' } }) },
  });
  let people;
  await getPeople(value => { people = value; });
  assert.equal(people[0].home, 'Detail');
  assert.deepEqual(people[0].vehicles, ['Detail']);
});

test('shows the selected first and last characters', () => {
  const { default: People } = load('app/components/People/People.tsx', {
    '@/design-system/components/Loading/Loading': () => null,
    '@/design-system/components/Card/Card': () => null,
    '../PeopleInfo/PeopleInfo': ({ detailPeople }) => React.createElement('p', null, detailPeople?.name ?? 'missing'),
    './People.module.css': {},
  });
  const people = [person('First'), person('Last')];
  for (const [peopleId, expected] of [[1, 'First'], [2, 'Last']]) {
    const html = renderToStaticMarkup(React.createElement(People, {
      people, peopleId, loading: true, setPeopleId: () => {},
    }));
    assert.ok(html.includes(`<p>${expected}</p>`));
  }
});
