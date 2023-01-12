import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { add } from '../store/questionsSlice';
import uuid from 'react-uuid';

function QuestionAnswer() {

  const [value, setValue] = useState("");


  let dispatch = useDispatch();

  const submitQuestions = (event) => {
    event.preventDefault();
    if (value.trim().length === 0) {
      toast.warn("Please fill in input", { autoClose: 2000 })
    } else {
      let sendingQuestion = { id: uuid(), item: value }
      dispatch(add(sendingQuestion));
      setValue(" ");
      toast.success("Question is added", { autoClose: 2000 })
    }

  }

  return (
    <>
      <div className='question-answer'>
        <div className='question-answer-inside'>
          <div>
            <form onSubmit={(event) => submitQuestions(event)} className='questions'>
              <h1>Add Question</h1>
              <input className='inputs' required value={value} onChange={(e) => setValue(e.target.value)} placeholder='Write Question' />
              <button className='buttons'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionAnswer