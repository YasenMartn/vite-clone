import { configureStore } from "@reduxjs/toolkit";
import { cardsApi } from "./apiSlice";
import appSlice from "./appSlice";

export default configureStore({
    reducer:{
        app: appSlice,
        [cardsApi.reducerPath]: cardsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware),
})