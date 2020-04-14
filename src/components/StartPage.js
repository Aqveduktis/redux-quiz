import React from 'react'
import {Link} from 'react-router-dom'


export const StartPage = () => {
  return (
    <main>
    <p>INTROPAGE</p>
    <Link to={`/questions/01`}>
        Next Question
  </Link>
    </main>
  )
}