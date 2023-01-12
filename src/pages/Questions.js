import { Modal } from 'antd';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { answer } from '../store/questionsSlice';

function Questions() {
    const [updatedItem, setUpdatedItem] = useState({ id: "", item: "" });
    const [value, setValue] = useState("");
    let dispatch = useDispatch();


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (item) => {
        setUpdatedItem({ id: item.id, item: item.item })
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    let state = useSelector(state => state.questions.questions);

    const submitQuestions = (event, item) => {
        event.preventDefault();
        console.log(item)
        let sendingAnswer = { id: item.id, question: item.item, answer: value }
        dispatch(answer(sendingAnswer));
        setValue(" ");
    }


    return (
        <div className='questions-page'>
            {state.length
                ?
                React.Children.toArray(
                    state.map(item => (
                        <div className='write-answer'>
                            <span>{item.item}</span>
                            <button onClick={() => showModal(item)}>Answer</button>
                            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <form onSubmit={(event) => submitQuestions(event, updatedItem)} >
                                    <div className='modal-list'>
                                        <span className='modal-question'>Question:{updatedItem.item}</span>
                                        <input required value={value} onChange={(e) => setValue(e.target.value)} placeholder='Answer Question' />
                                        <button>Answer</button>
                                    </div>
                                </form>
                            </Modal>
                        </div>
                    )))
                :
                <h1 className='not-list'>There are no questions</h1>
            }
        </div>
    )
}

export default Questions