export interface ITrip{
    id:string;
    title:string;
    country: {
        id: string;
        name: string;
    };
    price:number;
    description: string,
    imageUrl?: string;
    duration: number;
}

export interface ITripWithQuntity extends ITrip{
    quantity: number;
}

export interface ITripResponse
{
    id: string;
    countryId: string,
    title: string,
    price: number,
    image: string,
    description: string,
    duration: number
}

export interface ITripFilterItem {
    categoryId: string;
    name: string;
    quantity: number;
}