// import {
//   CandidateAssessmentStatus,
//   ResponseDTOCandidateAssessment,
//   ResponseDTOCandidateAssessmentStatus,
//   ResponseDTOListCandidateAssessment,
//   ResponseDTOListCandidateAssessmentQuestion,
//   ResponseDTOListTestCaseResultDTO,
//   ResponseDTOString,
//   ResponseDTOTestCaseResultDTO,
// } from "@/api/interviewQueueAPIV1.schemas";
// import { HTTPMethods } from "@/constants/httpMethods";
// import { interviewQAPI } from "..";

// export const assessmentQueries = interviewQAPI.injectEndpoints({
//   overrideExisting: false,
//   endpoints: (builder) => ({
//     getCandidateAssessments: builder.query<
//       ResponseDTOListCandidateAssessment,
//       {
//         status: CandidateAssessmentStatus[];
//       }
//     >({
//       query: ({ status }) => ({
//         url: `/candidate-assessments`,
//         params: { status },
//       }),
//     }),
//     getCandidateAssessment: builder.query<
//       ResponseDTOCandidateAssessment,
//       string
//     >({
//       query: (invitationUrlHash) => ({
//         url: `/candidate-assessments/${invitationUrlHash}`,
//       }),
//     }),
//     getCandidateAssessmentStatus: builder.query<
//       ResponseDTOCandidateAssessmentStatus,
//       string
//     >({
//       query: (invitationUrlHash) => ({
//         url: `/candidate-assessments/${invitationUrlHash}/status`,
//       }),
//     }),
//     // Programming Question Assessment
//     getCandidateAssessmentQuestions: builder.query<
//       ResponseDTOListCandidateAssessmentQuestion,
//       string
//     >({
//       query: (invitationUrlHash) => ({
//         url: `/candidate-assessments/${invitationUrlHash}/questions`,
//         method: HTTPMethods.GET,
//       }),
//     }),
//     getSubmissionStatus: builder.query<
//       ResponseDTOTestCaseResultDTO,
//       {
//         invitationUrlHash: string;
//         questionId: string;
//         token: string;
//       }
//     >({
//       query: ({ invitationUrlHash, questionId, token }) => ({
//         url: `/candidate-assessments/${invitationUrlHash}/question/${questionId}/code/interpret/${token}`,
//       }),
//     }),
//     getTestCaseResults: builder.query<
//       ResponseDTOListTestCaseResultDTO,
//       {
//         invitationUrlHash: string;
//         questionId: string;
//       }
//     >({
//       query: ({ invitationUrlHash, questionId }) => ({
//         url: `/candidate-assessments/${invitationUrlHash}/question/${questionId}/code/submit/status`,
//       }),
//     }),
//     getVerifyCandidateInvite: builder.query<
//       ResponseDTOString,
//       {
//         invitationUrlHash: String;
//       }
//     >({
//       query: ({ invitationUrlHash }) => ({
//         url: `/auth/candidate/${invitationUrlHash}`,
//       }),
//     }),
//   }),
// });

// export const {
//   useGetCandidateAssessmentQuery,
//   useGetCandidateAssessmentStatusQuery,
//   useGetCandidateAssessmentsQuery,
//   useLazyGetSubmissionStatusQuery,
//   useGetSubmissionStatusQuery,
//   useLazyGetTestCaseResultsQuery,
//   useGetCandidateAssessmentQuestionsQuery,
//   useGetVerifyCandidateInviteQuery,
// } = assessmentQueries;
