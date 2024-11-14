import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";

// const middleWares = [logger];

// const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => [logger],
});
