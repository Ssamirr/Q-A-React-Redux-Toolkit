import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProjectLayout from '../components/ProjectLayout'
import Answers from '../pages/Answers'
import QuestionAnswer from '../pages/QuestionAnswer'
import Questions from '../pages/Questions'


function ProjectRoutes() {
    return (
        <Routes>
            <Route path='/' element={<ProjectLayout />}>
                <Route index element={<QuestionAnswer />}></Route>
                <Route path="/questions" element={<Questions />}></Route>
                <Route path="/answers" element={<Answers />}></Route>
            </Route>
        </Routes>
    )
}

export default ProjectRoutes