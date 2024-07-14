import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/todoSlice";
import { getDefaultNormalizer } from "@testing-library/react";
import logger from "redux-logger";
export const store = configureStore({
    reducer: {
        todo: todoSlice,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});
