// import {
//   BaseQueryFn,
//   FetchArgs,
//   FetchBaseQueryError,
//   createApi,
//   fetchBaseQuery,
//   retry,
// } from "@reduxjs/toolkit/query/react";
// import { Mutex } from "async-mutex";
// import { RootState } from "..";

// const baseQuery = fetchBaseQuery({
//   baseUrl: process.env.API_BASE_URL,
//   validateStatus(response, body) {
//     return response.status === 200 && body?.status;
//   },
//   // prepareHeaders: (headers, { getState }) => {
//   //   const {
//   //     auth: { accessToken },
//   //     langugeMulti,
//   //   } = getState() as RootState;

//   //   if (langugeMulti) {
//   //     headers.set("Accept-Language", String(langugeMulti?.lang));
//   //   }

//   //   if (accessToken && !headers.has("X-Oauth-Token")) {
//   //     headers.set("Authorization", `Bearer ${accessToken}`);
//   //   }

//   //   return headers;
//   // },
//   // paramsSerializer: (params) => {
//   //   return qs.stringify(params, {
//   //     arrayFormat: "repeat",
//   //   });
//   // },
// });

// const mutex = new Mutex();

// const baseQueryWithReAuthAndBailOut: BaseQueryFn<
//   string | FetchArgs,
//   unknown,
//   FetchBaseQueryError
// > = retry(
//   async (args, api, extraOptions) => {
//     // wait for mutex to unlock
//     await mutex.waitForUnlock();

//     let result = await baseQuery(args, api, extraOptions);

//     const reAuthCondition = result.error && result.error.status === 401;

//     // check if the error is 401
//     if (reAuthCondition) {
//       // if mutex is not locked, acquire it and recheck
//       if (!mutex.isLocked()) {
//         const release = await mutex.acquire();

//         try {
//           // Check if user is still logged in
//           const currentUser = await currentUserPromise;

//           if (currentUser) {
//             const fbToken = await currentUser.getIdToken(true);
//             const tokenResult = await currentUser.getIdTokenResult();
//             const userDetail = tokenResult.claims;

//             api.dispatch(
//               signInUser({
//                 accessToken: fbToken,
//                 currentSessionKey: userDetail.sessionKey as string,
//                 isAuthenticated: true,
//                 sub: userDetail.sub,
//                 user: userDetail as User,
//               })
//             );
//             // Update result with refetch data
//             result = await baseQuery(args, api, extraOptions);
//           } else {
//             api.dispatch(signOutUser());
//           }
//         } finally {
//           // release the mutex
//           release();
//         }
//       } else {
//         // if mutex is locked, wait for it to unlock
//         await mutex.waitForUnlock();
//         result = await baseQuery(args, api, extraOptions);
//       }
//     }

//     return result;
//   },
//   {
//     retryCondition: (error) =>
//       error.status === 429 || Number(error.status) > 500,
//   }
// );

// export const sshAPI = createApi({
//   reducerPath: "interviewQAPI",
//   baseQuery: baseQueryWithReAuthAndBailOut,
//   endpoints: () => ({}),
// });
