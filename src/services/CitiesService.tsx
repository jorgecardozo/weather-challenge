import axios, { AxiosResponse } from 'axios';
import { Weather } from '../store/types/types';
import { apiCities } from '../axios';

export class CitiesService {
  static getCurrentCities(city: string): Promise<AxiosResponse<any>> {
    return apiCities.get<any>(`/cities?minPopulation=1000000&namePrefix=${city}`);
  }
}
