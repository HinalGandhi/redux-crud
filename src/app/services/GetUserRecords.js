// src/services/taskApi.js
import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

export const userRecordsApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com"
  }),
  endpoints: (builder) => ({
    tasks: builder.query({
      query: () => "/users"
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: "/users",
        method: "POST",
        body: task
      })
    }),
    updateTask: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: rest
      })
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE"
      })
    })
  })
});

export const {
  useTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} = userRecordsApi;