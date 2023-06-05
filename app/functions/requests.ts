import axios from 'axios';
import { People, Result } from '../interfaces/people.interface';

export const getPeople = async (setPeople: React.Dispatch<React.SetStateAction<People[]>>) => {
  const people: People[] = [];
  let request: { data: Result } = await axios.get(`https://swapi.dev/api/people?page=1`);
  while (request.data.next) {
    for (let person of request.data.results) {
      person.mainSpecie = await getMainSpecie(person.species[0]);
      person.home = await getHome(person.homeworld);
      person.vehicles = await getVehicles(person.vehicles);
      people.push(person);
    };
    setPeople(people);
    request = await axios.get(request.data.next);
  };
  setPeople([...people, ...request.data.results]);
}

const getMainSpecie = async (url: string) => {
  if (!url) return 'Human';
  const request = await axios.get(url);
  return request.data.name;
}

const getHome = async (url: string) => {
  const request = await axios.get(url);
  return request.data.name;
}

const getVehicles = async (urls: string[]) => {
  const vehicles: string[] = [];
  for (let url of urls) {
    const request = await axios.get(url);
    vehicles.push(request.data.name);
  };
  return vehicles;
}