import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/questionsSlice';

function QuestionAnswer() {

  const [value, setValue] = useState("");
  const [id, setId] = useState(1)


  let dispatch = useDispatch();

  const submitQuestions = (event) => {
    let sendingQuestion = { id: id, item: value }
    event.preventDefault();
    dispatch(add(sendingQuestion));
    setValue(" ");
    setId(prev => prev + 1);
  }

  return (
    <>
      <div className='question-answer'>
        <div className='question-answer-inside'>
          <div>
            <form onSubmit={(event) => submitQuestions(event)} className='questions'>
              <h1>Add Question</h1>
              <input required value={value} onChange={(e) => setValue(e.target.value)} placeholder='Write Question' />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionAnswer