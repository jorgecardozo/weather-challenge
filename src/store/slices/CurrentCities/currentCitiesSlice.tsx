import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import {
	serializerCities,
	serializerCity,
} from '../../../utils/citiesSerializer';

interface CurrentCities {
	cities: any;
	isLoading: boolean;
	response: Response;
}

interface Response {
	status: number;
	message: string;
}

const initialState: CurrentCities = {
	cities: {},
	isLoading: false,
	response: {
		status: 0,
		message: '',
	},
};

export const currentCitiesSlice = createSlice({
	name: 'current_cities',
	initialState,
	reducers: {
		fetchCurrentCities(state: any) {
			state.isLoading = true;
		},
		fetchCurrentCitiesSuccess(
			state: any,
			action: PayloadAction<AxiosResponse<any>>
		) {
			const serializer = serializerCity(action.payload.data.data);
			state.isLoading = false;
			state.cities[`${serializer.id}`] = serializer;
			state.response = {
				status: action.payload.status,
				message: action.payload.statusText,
			};
		},
		fetchCurrentCitiesError(
			state: any,
			action: PayloadAction<AxiosResponse<any>>
		) {
			state.isLoading = false;
			state.response = {
				status: action.payload.status,
				message: action.payload.statusText,
			};
		},
		addCities(state: any, action: PayloadAction<AxiosResponse<any>>) {
			state.cities = serializerCities(action.payload);
		},
	},
});

export const { addCities } = currentCitiesSlice.actions;
export default currentCitiesSlice.reducer;
