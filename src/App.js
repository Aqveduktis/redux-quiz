import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { game } from './reducers/game'
import { Board } from './components/Board'
import { Stats } from './components/Stats'

const reducer = combineReducers({
  game: game.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <Board />
        <Stats />
      </main>
    </Provider>
  )
}
