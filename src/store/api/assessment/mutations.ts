// import {
//   AnswerDTO,
//   CodeDTO,
//   EventRequestDTO,
//   PaginationRequestCandidateAssessmentV1Filter,
//   ResponseDTOBoolean,
//   ResponseDTOCandidateAssessment,
//   ResponseDTOListTestCaseResultDTO,
//   ResponseDTOPaginationResponseCandidateAssessment,
//   ResponseDTOString,
//   RichText,
//   UpdateCandidateAssessmentQuestionStatusDTO,
// } from "@/api/interviewQueueAPIV1.schemas";
// import { HTTPMethods } from "@/constants/httpMethods";
// import {
//   clearAssessmentQuestionOption,
//   nextQuestion,
//   setAssessmentQuestionAnswer,
//   setAssessmentQuestionOption,
// } from "@/store/assessment";
// import { interviewQAPI } from "..";

// export const assessmentMutations = interviewQAPI.injectEndpoints({
//   overrideExisting: false,
//   endpoints: (builder) => ({
//     putStartCandidateAssessment: builder.mutation<
//       ResponseDTOCandidateAssessment,
//       string
//     >({
//       query: (invitationUrlHash) => ({
//         url: `/candidate-assessments/${invitationUrlHash}/start`,
//         method: HTTPMethods.PUT,
//       }),
//     }),
//     PostGetCandidateAssessments: builder.mutation<
//       ResponseDTOPaginationResponseCandidateAssessment,
//       PaginationRequestCandidateAssessmentV1Filter
//     >({
//       query: (body) => ({
//         url: `/candidate-assessments/get-all`,
//         method: HTTPMethods.POST,
//         body: body,
//       }),
//     }),
//     putResumeCandidateAssessment: builder.mutation<
//       ResponseDTOCandidateAssessment,
//       string
//     >({
//       query: (invitationUrlHash) => ({
//         url: `/candidate-assessments/${invitationUrlHash}/resume`,
//         method: HTTPMethods.PUT,
//       }),
//     }),
//     putSubmitAnswer: builder.mutation<
//       ResponseDTOBoolean,
//       { invitationUrlHash: string; questionId: string; answerDTO: AnswerDTO }
//     >({
//       query: ({ invitationUrlHash, questionId, answerDTO }) => ({
//         url: `/candidate-assessments/${invitationUrlHash}/question/${questionId}/answer`,
//         method: HTTPMethods.PUT,
//         body: answerDTO,
//       }),
//       async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//         await queryFulfilled;
//         // Dispatch the selected options and answer
//         dispatch(
//           setAssessmentQuestionOption(arg.answerDTO.selectedOptions || [])
//         );
//         dispatch(setAssessmentQuestionAnswer(arg.answerDTO.answer as RichText));
//         dispatch(nextQuestion());
//       },
//     }),
//     putClearAnswer: builder.mutation<
//       ResponseDTOBoolean,
//       {
//         invitationUrlHash: string;
//         questionId: string;
//       }
//     >({
//       query: ({ invitationUrlHash, questionId }) => ({
//         url: `/candidate-assessments/${invitationUrlHash}/question/${questionId}/clear`,
//         method: HTTPMethods.PUT,
//       }),
//       async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
//         await queryFulfilled;
//         dispatch(clearAssessmentQuestionOption());
//       },
//     }),
//     putCandidateAssessmentQuestionStatus: builder.mutation<
//       UpdateCandidateAssessmentQuestionStatusDTO,
//       {
//         invitationUrlHash: string;
//         questionId: string;
//       } & UpdateCandidateAssessmentQuestionStatusDTO
//     >({
//       query: ({ invitationUrlHash, questionId, ...body }) => ({
//         url: `/candidate-assessments/${invitationUrlHash}/question/${questionId}/status`,
//         method: HTTPMethods.PUT,
//         body,
//       }),
//     }),
//     putAcceptInvitation: builder.mutation<
//       ResponseDTOCandidateAssessment,
//       string
//     >({
//       query: (invitationUrlHash) => ({
//         url: `/candidate-assessments/${invitationUrlHash}/accept-invite`,
//         method: HTTPMethods.PUT,
//       }),
//     }),
//     putSubmitAssessment: builder.mutation<ResponseDTOBoolean, string>({
//       query: (invitationUrlHash) => ({
//         url: `/candidate-assessments/${invitationUrlHash}/submit`,
//         method: HTTPMethods.PUT,
//       }),
//     }),
//     putAssessmentEvents: builder.mutation<
//       ResponseDTOBoolean,
//       {
//         invitationUrlHash: string;
//         body: EventRequestDTO;
//       }
//     >({
//       query: ({ invitationUrlHash, body }) => ({
//         url: `/candidate-assessments/${invitationUrlHash}/events`,
//         method: HTTPMethods.POST,
//         body,
//       }),
//     }),
//     // Programming question assessment
//     putInterpretCode: builder.mutation<
//       ResponseDTOString,
//       {
//         invitationUrlHash: string;
//         questionId: string;
//         codeDTO: CodeDTO;
//       }
//     >({
//       query: ({ invitationUrlHash, questionId, codeDTO }) => ({
//         url: `/candidate-assessments/${invitationUrlHash}/question/${questionId}/code/interpret`,
//         method: HTTPMethods.PUT,
//         body: codeDTO,
//       }),
//       extraOptions: { maxRetries: 1 },
//     }),
//     putSubmitCode: builder.mutation<
//       ResponseDTOListTestCaseResultDTO,
//       {
//         invitationUrlHash: string;
//         questionId: string;
//         codeDTO: CodeDTO;
//       }
//     >({
//       query: ({ questionId, invitationUrlHash, codeDTO }) => ({
//         url: `/candidate-assessments/${invitationUrlHash}/question/${questionId}/code/submit`,
//         method: HTTPMethods.PUT,
//         body: codeDTO,
//       }),
//       extraOptions: { maxRetries: 1 },
//     }),
//   }),
// });

// export const {
//   usePostGetCandidateAssessmentsMutation,
//   usePutStartCandidateAssessmentMutation,
//   usePutResumeCandidateAssessmentMutation,
//   usePutSubmitAnswerMutation,
//   usePutCandidateAssessmentQuestionStatusMutation,
//   usePutClearAnswerMutation,
//   usePutAcceptInvitationMutation,
//   usePutSubmitAssessmentMutation,
//   usePutAssessmentEventsMutation,
//   usePutInterpretCodeMutation,
//   usePutSubmitCodeMutation,
// } = assessmentMutations;
