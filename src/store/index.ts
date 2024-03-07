import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";

// Permite acceder al store en sus 3 diferentes etapas
const persistenceLocalStorageMiddleware = (store) => (next) => (action) => {
    console.log("store.getState() 1", store.getState())
    console.log("action", action);
    
    next(action)
    console.log("store.getState() 2", store.getState())
    localStorage.setItem("__redux__state__", JSON.stringify(store.getState()))
}

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(persistenceLocalStorageMiddleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
