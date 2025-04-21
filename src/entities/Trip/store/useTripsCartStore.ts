import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
import { ITripWithQuntity } from "../models";
import { immer } from "zustand/middleware/immer";
import { TImmerStateCreator } from "shared";

interface ITripsCartStore {
    tripsCart: ITripWithQuntity[];

    removeTripFromCart: (id: ITripWithQuntity['id']) => void,
    addTripToCart: (trip: ITripWithQuntity) => void,
    increaseQuantityTripToCart: (id: ITripWithQuntity['id']) => void,
    reduceQuantityTripToCart: (id: ITripWithQuntity['id']) => void,
    setQuantityTripToCart: (id: ITripWithQuntity['id'], quantity: number) => void,
}

const useTripsCartSlice: TImmerStateCreator<ITripsCartStore> = (set)=> ({
    tripsCart: [],
    
    removeTripFromCart: (id) => set((state) => {
        const findedTripIndex = state.tripsCart.findIndex((trip) => trip.id === id)
        if (findedTripIndex !== -1) state.tripsCart.splice(findedTripIndex, 1)
    }),
    addTripToCart: (trip) => set((state) => {
        const existTripWithSameId = state.tripsCart.find((tripCart) => tripCart.id === trip.id);
        if (existTripWithSameId) console.log('Невозможно добавить путевку в корзину');
        else state.tripsCart.push(trip);
    }),
    increaseQuantityTripToCart: (id) => set((state) => {
        const findedTrip = state.tripsCart.find((trip) => trip.id === id);
        if (findedTrip) findedTrip.quantity += 1;
    }),
    reduceQuantityTripToCart: (id) => set((state) => {
        const findedTrip = state.tripsCart.find((trip) => trip.id === id);
        if (findedTrip) findedTrip.quantity -= 1;
    }),
    setQuantityTripToCart: (id, quantity) => set((state) => {
        const findedTrip = state.tripsCart.find((trip) => trip.id === id);
        if (findedTrip) findedTrip.quantity = quantity;
    }),
})

export const useTripsCartStore = create<ITripsCartStore>()(
    persist(immer(useTripsCartSlice), {
        name: 'tripsCartStorage',
        storage: createJSONStorage(() => localStorage),
    })
)