import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "./slice/userSlice"


const reducer = {
    user: userSlice.reducer
}

export default configureStore({
    reducer,
    devTools: false
})