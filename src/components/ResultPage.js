import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {quiz} from '../reducers/quiz'


export const ResultPage = () => {
  const userAnswers = useSelector((state)=>state.quiz.answers)
  const dispatch = useDispatch()
const homefunction = () => {
dispatch(quiz.actions.restart)
}

  return (
    <main>
    <p>Resultpage</p>
  {userAnswers.map((answer)=>{

    return(
      <p>{`question:${answer.questionId} result:${answer.isCorrect}`}</p>
    )
  })
}
<Link to='/'><button onClick={homefunction}>go home</button></Link>
</main>
  )
}