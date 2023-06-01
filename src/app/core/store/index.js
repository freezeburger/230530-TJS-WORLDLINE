import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import { rootMiddleware } from "./middleware";
import { initialState } from "./initial-state";


export const store = configureStore({
    reducer:rootReducer,
    middleware:[rootMiddleware],
    preloadedState:initialState
})


export { ActionTypes } from "./action-types";