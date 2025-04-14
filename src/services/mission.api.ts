import {api} from "./api";
import {EarnTaskListResponse} from "./type";

const missionApi = api.injectEndpoints({
  endpoints: builder => ({
    // GET: /api/tasks?status=active&type=game
    getTask: builder.query<any[], {status?: string; type?: string}>({
      query: params => ({
        url: "/api/tasks",
        method: "GET",
        params, // tự map thành query string
      }),
      providesTags: ["Game"],
    }),

    // POST: /api/tasks/init
    initTask: builder.mutation<any, {taskId: string}>({
      query: body => ({
        url: "/api/tasks/init",
        method: "POST",
        body,
      }),
    }),

    // GET: /api/tasks/earn?taskId=abc&userId=xyz
    getEarnTask: builder.query<
      EarnTaskListResponse,
      {page: number; limit: number}
    >({
      query: params => ({
        url: "/api/tasks/earn",
        method: "GET",
        params,
      }),
      providesTags: ["getEarnTask"],
    }),

    // PUT: /api/tasks/start/{userTaskId}?extra=abc
    startTask: builder.mutation<any, {userTaskId: string; extra?: string}>({
      query: ({userTaskId, ...params}) => ({
        url: `/api/tasks/start/${userTaskId}`,
        method: "PUT",
        params,
      }),
      invalidatesTags: ["getEarnTask"],
    }),

    // PUT: /api/tasks/claim/{userTaskId}?reward=true
    claimTask: builder.mutation<any, {userTaskId: string}>({
      query: ({userTaskId, ...params}) => ({
        url: `/api/tasks/claim/${userTaskId}`,
        method: "PUT",
        params,
      }),
      invalidatesTags: ["getEarnTask"]
    }),
  }),
  overrideExisting: false,
});
export const {
  useGetTaskQuery,
  useInitTaskMutation,
  useGetEarnTaskQuery,
  useStartTaskMutation,
  useClaimTaskMutation,
} = missionApi;
