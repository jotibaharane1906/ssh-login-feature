import type { Middleware } from "@reduxjs/toolkit";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { setGlobalCodeRunning } from "../assessment";

export const errorHandler: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (isRejectedWithValue(action)) {
      const message =
        // action.payload.data.message is for requests from the backend
        // action.payload.data is for requests from the next-auth library
        action.payload.data?.message ||
        (typeof action.payload.data === "string"
          ? action.payload.data
          : "Something went wrong :(");

      // setting global loader to false
      dispatch(setGlobalCodeRunning(false));

      console.error(message);
      // toast.error(message.length > 20 ? message.slice(0, 20) + "..." : message);
      toast.error(message);
    }

    return next(action);
  };
