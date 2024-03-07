import { createSlice } from "@reduxjs/toolkit";

export interface User {
    name: string,
    email: string,
    github: string
}

const DEFAULT_STATE = [
    {
        id: "1",
        name: "Peter F. Doe",
        email: "peter@gmail.com",
        github: "peterdev"
    },
    {
        id: "2",
        name: "Jack Lee",
        email: "",
        github: "jackdev"
    },
]

export interface UserWithId extends User {
    id: string
}

//Función que se ejecuta al cargar la página e inicializa el estado
const initialState: UserWithId[] = (() => {
    const persistedState = localStorage.getItem("__redux__state__")
    if (persistedState) {
        return JSON.parse(persistedState).users
    }
    return DEFAULT_STATE
})() 

/* const initialState: UserWithId[] = [
    {
        id: "1",
        name: "Peter F. Kennedy Doe",
        email: "peter@gmail.com",
        github: "peterdev"
      },
      {
        id: "2",
        name: "Jack Lee",
        email: "jaclee@gmail.com",
        github: "jackdev"
      },
]
 */


export const userSlice = createSlice({
    name: 'users', //nombre del slice
    initialState: initialState,
    reducers: {
        //Metodos que modifican el estado
        deleteUserById: (state, action) => {
            const id = action.payload
            return state.filter((user) => user.id !== id)
        }
    },
    
})

export default userSlice.reducer

export const {deleteUserById} = userSlice.actions