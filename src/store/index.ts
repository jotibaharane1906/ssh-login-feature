// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import type { TypedUseSelectorHook } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
//   persistReducer,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { interviewQAPI } from "./api";
// import { errorHandler } from "./middleware/error";

// export type Store = ReturnType<typeof createStore>;

// export type AppDispatch = Store["dispatch"];

// const reducer = {
//   [interviewQAPI.reducerPath]: interviewQAPI.reducer,
// };

// const rootReducer = combineReducers(reducer);

// type ReducerType = {
//   [K in keyof typeof reducer]: (typeof reducer)[K] extends (
//     // eslint-disable-next-line no-unused-vars
//     ...args: any[]
//   ) => infer R
//     ? R
//     : never;
// };

// export type Flatten<T> = {
//   [K in keyof T]: T[K] extends object ? Flatten<T[K]> : T[K];
// };

// export type RootState = Flatten<ReducerType>;

// const peristConfig = {
//   key: "root",
//   version: 1,
//   whitelist: ["auth", "proctoringSettings"],
//   storage,
//   blacklist: ["proctoringSlice"],
// };

// const persistedReducer = persistReducer(peristConfig, rootReducer);

// export const createStore = (preloadedState: Partial<RootState> = {}) => {
//   return configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }).concat([interviewQAPI.middleware, errorHandler]),
//   });
// };

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
