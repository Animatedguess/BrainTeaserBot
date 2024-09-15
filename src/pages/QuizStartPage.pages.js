import React from 'react'
import QuizPageBack from '../component/QuizPageBack.Component'
import { Outlet } from 'react-router-dom'

function QuizStartPage() {
  return (
    <div>
      <QuizPageBack />
      {/* main page body */}
      <Outlet />

    </div>
  )
}

export default QuizStartPage
