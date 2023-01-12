import React from 'react'
import { useSelector } from 'react-redux'

function Answers() {
    const stateAnswers = useSelector(state => state.questions.answers)
    const stateQuestions = useSelector(state => state.questions.questions)
    // console.log(state)
    return (
        <>
            <div className='answers-page'>
                {stateQuestions.length
                    ?
                    React.Children.toArray(
                        stateQuestions.map(item => (
                            <div className='q-a'>
                                <h1>{item.item}</h1>
                                <ul>
                                    {
                                        React.Children.toArray(
                                            stateAnswers.map(answ=>(
                                                item.id===answ.id &&
                                                <li>{answ.answer}</li>
                                            ))
                                        )
                                    }
                                </ul>
                            </div>
                        ))
                    )
                    :
                    <h1 className='not-list'>There are no questions</h1>}
            </div>
        </>
    )
}

export default Answers