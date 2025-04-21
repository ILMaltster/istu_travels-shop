import useSWR from "swr"
import { ITrip } from "../models"
import { IPaged } from "shared"
import axios from "axios";

interface IFilterTrips {
    countryId: string | null;
    titleOfCity: string | null;
}

export const useGetTrips = (params: IFilterTrips) => {
    const filteredParams: Record<string, string> = {};
    for (const [key, value] of Object.entries(params)) {
      if (value !== null && value !== undefined && value !== 'Все') {
        filteredParams[key] = value;
      }
    }
    const urlParams = new URLSearchParams(filteredParams);
    const query = urlParams.toString();
    return useSWR<IPaged<ITrip[]>>(`trips/${params.countryId}${params.titleOfCity}`, (): Promise<IPaged<ITrip[]>> => {
        return axios.get(`${process.env.REACT_APP_BACK_URL}/trip/trips${query ? "?"+query: ''}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        }).then((res) => res.data)
    }
    )
}