import { ITripWithQuntity } from "entities/Trip/models";

export interface ITripOrder{
    id: string,
    title: string,
    imageUrl: string,
    price: number,
    sum: number,
    quantity: number,
    duration:number,
    country: string
}

export interface IUserOrders {
    id: string;
    quantity: number;
    sum: number;
    phone: string;
    fio: string;
    trips: ITripOrder[];
}