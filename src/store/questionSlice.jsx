import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
    name: 'questions',
    initialState: {
        questions: [
          
        ]
     
    },
    reducers: {
        add: (state, action) => {
            console.log(state.questions)
                state.questions.push(action.payload);
        },
        answered:(state,action)=>{
            const questionIndex=action.payload[0]
            console.log(questionIndex)
           const answerContent=action.payload[1]
              if(answerContent.length>0){
                state.questions[questionIndex].answers.push({answer:answerContent})
              }
        }
    }
})


export default questionSlice.reducer

export const { add,answered } = questionSlice.actions;