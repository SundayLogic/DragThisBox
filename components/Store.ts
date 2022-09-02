import create from "zustand";
import {devtools, persist} from "zustand/middleware";

const appStore = (set:any) => ({
    count: 0,
    inc: () => set((state:any) =>  ({count: state.count + 1})),
    dec: () => set((state:any) =>  ({count: state.count - 1})),
    del: () => set((state:any) =>  ({count: 0})),
    isActive: false,
    changeIsActive: () => set((state:any) => ({isActive: !state.isActive})),
})
const useAppStore =  create(
    devtools(
        persist(appStore, {
            name: "data"
        })
    )
)
export default useAppStore;