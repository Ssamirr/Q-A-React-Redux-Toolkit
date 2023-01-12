import { Modal } from 'antd';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { answer, updateRate } from '../store/questionsSlice';

function Questions() {
    const [updatedItem, setUpdatedItem] = useState({ id: "", item: "", });
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
        if (value.trim().length === 0) {
            toast.warn("Please fill in the input", { autoClose: 2000 })
        } else {
            let sendingAnswer = { id: item.id, question: item.item, answer: value }
            dispatch(answer(sendingAnswer));
            toast.success("Answer is added", { autoClose: 2000 })
            setValue(" ");
            setIsModalOpen(false);
        }

    }

    const getQuestionRate = (e, item) => {
        let updateForRate = {
            id: item.id,
            item: item.item,
            rate: e.target.value
        }
        dispatch(updateRate(updateForRate));
    }


    return (
        <div className='questions-page'>
            {state.length
                ?
                React.Children.toArray(
                    state.map(item => (
                        <div className='write-answer'>
                            <div>
                                <input value={item.rate} onChange={(e) => getQuestionRate(e, item)} type="number" min={1} max={5} />
                                <span>Rate</span>
                            </div>
                            <span>{item.item}</span>
                            <button className='buttons' onClick={() => showModal(item)}>Answer</button>
                            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <form onSubmit={(event) => submitQuestions(event, updatedItem)} >
                                    <div className='modal-list'>
                                        <span className='modal-question'> <span style={{ fontWeight: "900", color: "black" }}>Question:</span> {updatedItem.item}</span>
                                        <input className='inputs' required value={value} onChange={(e) => setValue(e.target.value)} placeholder='Answer Question' />
                                        <button className='buttons'>Answer</button>
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