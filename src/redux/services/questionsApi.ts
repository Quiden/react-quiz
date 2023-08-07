import api from "./api.ts";
import { Question } from '../reducers/questionsReducer.ts';

export type Answer = {
  id: number,
  text: string;
}

const questionsApi = api.injectEndpoints({
    endpoints: (builder) => ({
      getAllQuestions: builder.query<Question[], number>({
        query: (limit: number | undefined = 10) => ({
          url: "questions",
          params: {
            _limit: limit
          }
        })
      })
    })
});

export const {
  useGetAllQuestionsQuery
} = questionsApi;

export default questionsApi;