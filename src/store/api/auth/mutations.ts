import {
  CandidateRegisterRequest,
  ForgotPasswordRequest,
  LoginRequest,
  ResetPasswordRequest,
  ResponseDTOLoginResponse,
  ResponseDTORegisterResponse,
  ResponseDTOString,
} from "@/api/interviewQueueAPIV1.schemas";
import { HTTPMethods } from "@/constants/httpMethods";
import { interviewQAPI } from "..";
import { CaptchaHeader } from "./types";

const assessmentApi = interviewQAPI.injectEndpoints({
  endpoints: (builder) => ({
    loginCandidate: builder.mutation<
      ResponseDTOLoginResponse,
      LoginRequest & { recaptchaResponse: string }
    >({
      query: ({ password, recaptchaResponse, usernameOrEmail }) => ({
        url: `/auth/candidate/login`,
        method: HTTPMethods.POST,
        body: {
          password,
          usernameOrEmail,
        },
        headers: new Headers({ "X-Recaptcha-Response": recaptchaResponse }),
      }),
    }),
    registerCandidate: builder.mutation<
      ResponseDTORegisterResponse,
      CandidateRegisterRequest & CaptchaHeader
    >({
      query: ({ recaptchaResponse, ...body }) => ({
        url: `/auth/candidate/register`,
        method: HTTPMethods.POST,
        body: {
          ...body,
        },
        headers: new Headers({ "X-Recaptcha-Response": recaptchaResponse }),
      }),
    }),
    forgotPassword: builder.mutation<
      ResponseDTOString,
      ForgotPasswordRequest & CaptchaHeader
    >({
      query: ({ recaptchaResponse, ...body }) => ({
        url: `/auth/forgot-password`,
        method: HTTPMethods.POST,
        body: {
          ...body,
          recaptchaResponse,
        },
        headers: new Headers({ "X-Recaptcha-Response": recaptchaResponse }),
      }),
    }),

    resetPassword: builder.mutation<
      ResponseDTOString,
      ResetPasswordRequest & CaptchaHeader
    >({
      query: ({ recaptchaResponse, ...body }) => ({
        url: `/auth/reset-password`,
        method: HTTPMethods.POST,
        body: {
          ...body,
          recaptchaResponse,
        },
        headers: new Headers({ "X-Recaptcha-Response": recaptchaResponse }),
      }),
    }),
    googleLogin: builder.mutation<ResponseDTOLoginResponse, CaptchaHeader>({
      query: ({ recaptchaResponse }) => ({
        url: `/auth/social/login`,
        method: HTTPMethods.POST,

        headers: new Headers({
          "X-OAUTH-TOKEN": `Bearer ${recaptchaResponse}`,
        }),
      }),
    }),
  }),
});

export const {
  useLoginCandidateMutation,
  useRegisterCandidateMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGoogleLoginMutation,
} = assessmentApi;
