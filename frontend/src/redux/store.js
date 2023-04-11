import { configureStore } from "@reduxjs/toolkit";
import adsSlice from "./slice/adsSlice";
import filterSlice from "./slice/filterSlice";
import userSlice from "./slice/userSlice";
import utilSlice from "./slice/utilSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        util: utilSlice,
        ads: adsSlice,
        filter:filterSlice
    }
})

export default store