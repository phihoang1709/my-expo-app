import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {getToken} from "./tokenManager";
import {Alert} from "react-native";
// import { setUserLoggedOut } from "./authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://lottery-jfox.bamboosoft.io",
  prepareHeaders: headers => {
    const accessToken = getToken();
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

export const api = createApi({
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result.error) {
      const status = result.error.status;
      if (status === 401 || status === 419) {
        // api.dispatch(setUserLoggedOut());
      }

      showErrorAlert(status);
    }

    return result;
  },

  tagTypes: ["Auth", "Game", "Wallet", "getEarnTask"],

  endpoints: () => ({}),
});

const showErrorAlert = (
  statusCode:
    | number
    | "FETCH_ERROR"
    | "PARSING_ERROR"
    | "TIMEOUT_ERROR"
    | "CUSTOM_ERROR",
) => {
  let message = "";
  let title = "Error";

  switch (statusCode) {
    case 401:
      message = "Your session has expired. Please log in again.";
      title = "Unauthorized";
      break;
    case 403:
      message = "You don't have permission to access this resource.";
      title = "Forbidden";
      break;
    case 404:
      message = "The requested resource was not found.";
      title = "Not Found";
      break;
    case 419: // Token expired (tùy backend)
      message = "Session expired. Please log in again.";
      title = "Session Timeout";
      break;
    case 500:
      message = "Server error. Please try again later.";
      title = "Server Error";
      break;
    default:
      message = `Something went wrong. Code: ${statusCode}`;
  }

  Alert.alert(title, message, [{text: "OK", onPress: () => {}}]);
};
