import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {quiz} from '../reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuesionIndex])
  const userDone = useSelector((state)=> state.quiz.quizOver)

  const [answer, setAnswer] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = (event) =>{
   
    setAnswer(event.target.value)

    dispatch(
      quiz.actions.submitAnswer({
        questionId: question.id,
        answerIndex: (event.target.value),
      }))
  }
const handleNext = (e) => {
  
  dispatch(quiz.actions.goToNextQuestion())
}

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <p>{question.options[answer]}</p>
      <form onSubmit={event => event.preventdefault()}>
     <select onChange={handleSubmit}>
       {question.options.map((item, index)=>{
         return(<option value={index}>{item}</option>)
       })}
     </select>
     <button type="button" onClick={handleNext}>press me</button>
     {userDone && <Link to='/resultPage'>Finish Game</Link>}
      </form>
    </div>
  )
}
