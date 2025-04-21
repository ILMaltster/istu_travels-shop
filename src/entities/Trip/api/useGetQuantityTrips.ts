import useSWR from "swr"
import { ITripWithQuntity } from "../models/types"
import { IPaged } from "shared"

export const useGetQunatityTrips = () => {
    return useSWR('quantityTrips', () => {
        return new Promise<IPaged<ITripWithQuntity[]>>((resolve) => resolve({
            skip: 0,
            take: 10,
            data: [{
                country: {
                    id: "123",
                    name: '123',
                },
                description: 'Тест',
                duration: 10,
                id: '8247982435',
                imageUrl: 'Тест',
                price: 2000,
                quantity: 2,
                title: 'Москвау'
            }]
        }))
        //fetch(process.env.REACT_APP_BACK_URL)
    })
}