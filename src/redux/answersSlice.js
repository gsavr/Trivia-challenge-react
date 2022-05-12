import { createSlice } from "@reduxjs/toolkit";

//initial state for redux store answers
const initialState = {
  answers: [],
  correct_answers: 0,
};

//slice contains reducers - and action creators
const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    //add question to answer list and mark as correct or incorrect
    answerAdd(state, action) {
      //ok to write mutating code inside of slice
      state.answers.push(action.payload);
      if (action.payload.correct) {
        state.correct_answers++;
      }
    },
    answersLoading(state, action) {
      return {
        ...state,
        status: "loading",
      };
    },
    //clear out questions and correct answers when going back to home page
    answersClear(state) {
      state.answers = [];
      state.correct_answers = 0;
    },
  },
});

//export dispatch hook functions
export const { answerAdd, answersLoading, answersClear } = answersSlice.actions;
//export combined reducer to redux store
export default answersSlice.reducer;
