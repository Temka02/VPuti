import { baseApi } from "../../shared/api/baseApi";
import { setCredentials } from "./authSlice";
import {
  type UserProfile,
  type User,
  type LoginCredentials,
  type RegisterCredentials,
  type AuthResponse,
} from "./User";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthResponse, LoginCredentials>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch (err) {
          console.error("Error in login mutation", err);
        }
      },
      invalidatesTags: ["User"],
    }),
    register: build.mutation<AuthResponse, RegisterCredentials>({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch (err) {
          console.error("Error in register mutation", err);
        }
      },
      invalidatesTags: ["User"],
    }),
    getMe: build.query<User, void>({
      query: () => "/auth/me",
      providesTags: ["User"],
    }),
    getProfile: build.query<UserProfile, void>({
      query: () => "/user/profile",
      providesTags: ["User"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLazyGetMeQuery,
  useGetProfileQuery,
} = authApi;
