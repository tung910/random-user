import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userAPI = createApi({
	reducerPath: "user",
	baseQuery: fetchBaseQuery({ baseUrl: "https://randomuser.me/api/" }), //https://randomuser.me/api/?page=3&results=10
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: (data) => {
				return {
					url: `?page=${data.page}&results=${data.results}`,
				};
			},
		}),
	}),
});

export const { useGetUsersQuery } = userAPI;
export default userAPI;
