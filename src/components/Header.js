import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className='header'>
                <ul className='header-ul'>
                    <li>
                        <Link to="/">Write Question</Link>
                    </li>
                    <li>
                        <Link to="/questions">Questions</Link>
                    </li>
                    <li>
                        <Link to="/answers">Answers</Link>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Header