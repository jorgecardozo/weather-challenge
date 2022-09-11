import { CitiesService } from "../../services/CitiesService"
import { currentCitiesSlice } from "../slices/CurrentCities/currentCitiesSlice";
import { AppDispatch } from "../store";

export const fetchCurrentCities = (payload: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(currentCitiesSlice.actions.fetchCurrentCities())
        const res = await CitiesService.getCurrentCities(payload);

        console.log("response: ", res)
    
        if (res.status === 200) {
            console.log("success: ", res)
            dispatch(currentCitiesSlice.actions.fetchCurrentCitiesSuccess(res))
        }
        else {
            dispatch(currentCitiesSlice.actions.fetchCurrentCitiesError(res))
        }
    } catch (error) {
        console.log("Error", error)
    }
} 