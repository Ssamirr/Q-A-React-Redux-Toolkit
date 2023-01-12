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
        updateRate: (state, action) => {
            let updateItemIndex = state.questions.findIndex(q => q.id === action.payload.id)
            state.questions[updateItemIndex] = action.payload;
        },
        answer: (state, action) => {
            state.answers.push(action.payload)
        }
    }
})

export default questionsSlice.reducer

export const { add, answer, updateRate } = questionsSlice.actions