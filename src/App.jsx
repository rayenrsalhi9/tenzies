import { useState, useEffect, useRef } from 'react'
import Header from "./components/Header"
import Die from "./components/Die"
import RollButton from "./components/RollButton"
import ReactConfetti from 'react-confetti'

export default function App() {

  const [dice, setDice] = useState(() => generateAllNewDice())
  const btnRef = useRef(null)

  function generateAllNewDice() {

    let diceArr = []

    for (let i = 0; i < 10; i++) {
      diceArr[i] = {
        id: i + 1,
        value: Math.floor(Math.random() * 6) + 1,
        isFixed: false
      }
    }

    return diceArr
  }

  const isGameWon = dice.every(el => el.isFixed && el.value === dice[0].value)

  useEffect(() => {
    if(isGameWon) btnRef.current.focus()
  }, [isGameWon])
    
  return (
    <div className="container">
        
        <Header />

        <section className="numbers-grid">
          {
            dice.map(el => <Die key={el.id} die={el} setDice={setDice} />)
          }
        </section>
        
        <RollButton 
          action={generateAllNewDice} 
          setDice={setDice} 
          isGameWon={isGameWon} 
          ref={btnRef}
        />

        { isGameWon ? <ReactConfetti /> : null }
        
        <div aria-live='polite' className='sr-only'>
          {
            isGameWon ? 
            <p>Congratulations! You won! Press "New Game" to start again.</p> :
            null
          }
        </div>

    </div>
  )
}
