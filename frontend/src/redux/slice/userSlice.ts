import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IBudget {
    name:string,
    amount: string
}

export interface ILinkedAccounts {
    accountID: string,
    accountNo: string,
    bankName: string
}

export interface IUserSlice {
    id: string,
    email: string,
    firstname: string,     
    lastname: string,
    budget: IBudget[],
    linkedAccounts: ILinkedAccounts[]
}

const userInitialState: IUserSlice = {
    id: "",
    email: "",
    firstname: "",     
    lastname: "",
    budget: [],
    linkedAccounts: []
}


export const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        userDetails: (state, { payload }: PayloadAction<IUserSlice>) => {
            localStorage.setItem("accountId", payload.id)
            state.budget = payload.budget;
            state.email = payload.email;
            state.firstname = payload.firstname;
            state.lastname = payload.lastname;
            state.linkedAccounts = payload.linkedAccounts;
            state.id =payload.id
        },
        logout: (state, { payload }: PayloadAction<{logout: boolean}>) => {
            localStorage.removeItem("accountId")
            state.budget = userInitialState.budget;
            state.email = userInitialState.email;
            state.firstname = userInitialState.firstname;
            state.lastname = userInitialState.lastname;
            state.linkedAccounts = userInitialState.linkedAccounts;
            state.id =userInitialState.id
        }
    }
})

export const { 
    userDetails: userDetailsAction,
    logout: logoutAction,
} = userSlice.actions
