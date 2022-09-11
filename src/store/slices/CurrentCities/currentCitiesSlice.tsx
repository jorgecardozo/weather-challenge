import { createSlice, PayloadAction, getDefaultMiddleware } from '@reduxjs/toolkit'
import { Weather } from '../types/types'
import { AxiosResponse } from 'axios';
import { serializerCities, serializerCity } from '../../../utils/citiesSerializer';

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})

type CurrentCities = {
    cities: any,
    isLoading: boolean,
    response: Response
}

type Response = {
    status: number,
    message: string
}

const initialState: CurrentCities = {
    cities:{},
    isLoading: false,
    response: {
        status: 0,
        message: ''
    }
}

export const currentCitiesSlice = createSlice({
  name: 'current_cities',
  initialState,
  reducers: {
    fetchCurrentCities(state: any) {
      state.isLoading = true;
    },
    fetchCurrentCitiesSuccess(
      state: any,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      // console.log("action.payload", action.payload)
      const serializer = serializerCity(action.payload.data.data) 
      state.isLoading = false;
      state.cities[`${serializer.id}`] = serializer;
      // state.cities = action.payload.data.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchCurrentCitiesError(
      state: any,
      action: PayloadAction<AxiosResponse<Weather>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    addCities(
      state: any,
      action: PayloadAction<AxiosResponse<Weather>>
    ){
      // console.log('payload cities', action.payload)
      state.cities = serializerCities(action.payload)
    }
  },
});

export const { addCities } = currentCitiesSlice.actions
export default currentCitiesSlice.reducer;