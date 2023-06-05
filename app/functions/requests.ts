import axios from 'axios';
import { People } from '../interfaces/people.interface';

export const getPeople = async (state: any, page: number = 1) => {
  const request = await axios.get(`https://swapi.dev/api/people?page=${page}`);
  state(request.data.results);
}

export const getPeopleById = async (state: React.Dispatch<React.SetStateAction<People>>, id: number) => {
  const request = await axios.get(`https://swapi.dev/api/people/${id}`);
  state(request.data.results);
}

export const getSpecificPeople = async (id: number, state: any) => {
  const request = await axios.get(`https://swapi.dev/api/people/${id}`);
  console.log('people', request.data)
  state(request.data);
}

export const getSpecie = async (state: any) => {
  const request = await axios.get(`https://swapi.dev/api/species/`);
  console.log('specie', request.data.results)
  state(request.data.results);
}

export const getVehicle = async (state: any) => {

}

export const getAllVehicles = async (state: any) => {

  const request = await axios.get('https://swapi.dev/api/vehicles/?page=1');

  const request2 = await axios.get('https://swapi.dev/api/vehicles/?page=2');

  const request3 = await axios.get('https://swapi.dev/api/vehicles/?page=3');

  const request4 = await axios.get('https://swapi.dev/api/vehicles/?page=4');

  const resultData = request.data.results;

  const resultData2 = resultData.concat(...request2.data.results)

  const resultData3 = resultData2.concat(...request3.data.results)

  const resultData4 = resultData3.concat(...request4.data.results)

  console.log(resultData4)

  state(resultData4);
}

