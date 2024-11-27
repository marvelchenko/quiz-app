import React, { useContext} from 'react'
import { QuizContext } from '../Helpers/Contexts'
import { Questions } from '../Helpers/QuestionBank'

function EndScreen() {

  const {score, setScore, setGameState } = useContext(QuizContext)

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  }

  return (
    <div className='endscreen'>
     <h1>Quiz Finished</h1>
     <div className='score'>
     <h3>Your score is:</h3>
     <h3> {score} / {Questions.length} </h3>

     </div>
     <button className='endscreen-2' onClick={restartQuiz}>Main Menu</button>
    </div>
  )
}

export default EndScreen
