import React, { useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts'

function MainMenu() {
  const {gameState, setGameState} = useContext(QuizContext)
  return (
    <div className='menu'>
      <h1>Quiz App</h1>
    <button
    onClick={() => {
      setGameState("quiz");
    }}>Start Quiz</button>
    </div>
  )
}

export default MainMenu
