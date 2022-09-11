import { AxiosResponse } from 'axios';
import { apiCities } from '../axios';

export class CitiesService {
	static async getCurrentCities(city: string): Promise<AxiosResponse<any>> {
		return await apiCities.get<any>(
			`/cities?minPopulation=1000000&namePrefix=${city}`
		);
	}
}
