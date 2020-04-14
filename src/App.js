import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { quiz } from './reducers/quiz'
import {CurrentQuestion} from './components/CurrentQuestion'
import {StartPage} from './components/StartPage'
import {ResultPage} from 'components/ResultPage'

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
        <BrowserRouter>
        <Switch>
          <Route exact path='/'>
              <StartPage />
            </Route>
            <Route exact path='/resultPage'>
              <ResultPage />
            </Route>
            <Route exact path='/questions/:questionid'>
              <CurrentQuestion />
            </Route>
        </Switch>
</BrowserRouter>
    </Provider>
  )
}
