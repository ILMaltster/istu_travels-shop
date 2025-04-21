import useSWR from "swr"
import { ITripFilterItem } from "../models/types"
import axios from "axios"

export const useGetTripsFilter = () => {
    return useSWR<ITripFilterItem[]>('tripsFilter', () => {
        return axios.get(`${process.env.REACT_APP_BACK_URL}/trip/countries`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        }).then((res) => res.data)
    })
}