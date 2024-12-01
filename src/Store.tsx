import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slice/UserSlice";
import ProfileReducer from "./slice/ProfileSlice"
import jwtReducer from "./slice/JWTSlice"


export default configureStore({
    reducer:{
        user:UserReducer,
        profile:ProfileReducer,
        jwt: jwtReducer

    }
})