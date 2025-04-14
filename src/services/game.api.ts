import { api } from './api';

const gameApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getGames: builder.query<any[], void>({
      query: () => '/games',
      providesTags: ['Game'],
    }),
    getGameById: builder.query<any, string>({
      query: (id) => `/games/${id}`,
      providesTags: (result, error, id) => [{ type: 'Game', id }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetGamesQuery,
  useGetGameByIdQuery,
} = gameApi;