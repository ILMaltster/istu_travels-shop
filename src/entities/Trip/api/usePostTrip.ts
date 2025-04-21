import axios from 'axios'
import useSWRMutation from 'swr/mutation'

export interface IOrderTrip {
    phone: string,
    fio: string,
    trips:
    {
        tripId: string,
        quantity: number
    }[]

}

const createOrder = async (_url: string, { arg }: { arg: IOrderTrip }) => {
    return axios.post(`${process.env.REACT_APP_BACK_URL}/order/create`, JSON.stringify(arg), {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    })
}

export const usePostTrip = (onSuccess: () => void) => {
    return useSWRMutation(`/order/create`, createOrder, {
        onSuccess,
    })
}