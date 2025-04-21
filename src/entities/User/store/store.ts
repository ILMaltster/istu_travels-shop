import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
import { immer } from "zustand/middleware/immer";
import { TImmerStateCreator } from "shared";

interface ITripsCartStore {
    userRole: string | null;

    setUserRole: (role: string) => void,
}

const useUserSlice: TImmerStateCreator<ITripsCartStore> = (set)=> ({
    userRole: null,
    
    setUserRole: (role:string) => set((state) => {
        state.userRole = role;
    }),
})

export const useUserLoginStore = create<ITripsCartStore>()(
    persist(immer(useUserSlice), {
        name: 'userLoginStorage',
        storage: createJSONStorage(() => localStorage),
    })
)