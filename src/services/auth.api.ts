import {api} from "./api";
import { MeRespone, User } from "./type";

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<any, {email: string; password: string}>({
      query: credentials => ({
        url: "/api/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getMe: builder.query<MeRespone, string>({
      query: () => `/api/auth/me`,
      // providesTags: (result, error, id) => [{ type: 'Game', id }],
    }),
  }),
  overrideExisting: false,
});

export const {useLoginMutation, useLazyGetMeQuery} = authApi;
