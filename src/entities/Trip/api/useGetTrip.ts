import useSWR from "swr"
import { ITrip } from "../models"
import axios from "axios"

export const useGetTrip = (id: string) => {
    return useSWR<ITrip>(`trip/${id}`, () => {
        return axios.get(`${process.env.REACT_APP_BACK_URL}/trip/${id}`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        }).then((res) => res.data)
    })
}