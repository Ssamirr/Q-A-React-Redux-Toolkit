import React from 'react'
import { useSelector } from 'react-redux'

function Answers() {
    const stateAnswers = useSelector(state => state.questions.answers)
    const stateQuestions = useSelector(state => state.questions.questions)
    console.log(stateAnswers)
    return (
        <>
            <div className='answers-page'>
                {stateQuestions.length
                    ?
                    React.Children.toArray(
                        stateQuestions.map(item => (
                            <div className='q-a'>
                                <h1 className='header-q-a'>{item.item}({item.rate})</h1>
                                {stateAnswers.filter(q => q.id === item.id).length === 0 ?
                                    <span className='empty-answer'>There is no answer yet</span>
                                    :
                                    <ul className='answers-list'>
                                        {
                                            React.Children.toArray(
                                                stateAnswers.map(answ => (
                                                    item.id === answ.id &&
                                                    <li>{answ.answer}</li>
                                                ))
                                            )
                                        }
                                    </ul>
                                }
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