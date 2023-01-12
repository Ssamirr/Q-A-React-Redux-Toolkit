import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
    name: "questions",
    initialState: {
        questions: [],
        answers: []
    },
    reducers: {
        add: (state, action) => {
            state.questions.push(action.payload)
        },
        answer: (state, action) => {
            state.answers.push(action.payload)
        }
    }
})

export default questionsSlice.reducer

export const { add, answer } = questionsSlice.actions