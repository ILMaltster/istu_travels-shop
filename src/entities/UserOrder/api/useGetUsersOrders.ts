import useSWR from "swr"
import { IPaged } from "shared"
import { IUserOrders } from "../models/types"
import axios from "axios"

export const useGetUsersOrders = () => {
    return useSWR<IPaged<IUserOrders[]>>(`admin/orders`, () => {
        return axios.get(`${process.env.REACT_APP_BACK_URL}/admin/orders`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        }).then((res) => res.data)
    })
}
