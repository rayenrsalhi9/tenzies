import { useState } from 'react'
import Header from "./components/Header"
import Die from "./components/Die"
import RollButton from "./components/RollButton"

export default function App() {

  const [dice, setDice] = useState(generateAllNewDice)

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

  return (
    <div className="container">
        
        <Header />

        <section className="numbers-grid">
          { dice.map(el => <Die key={el.id} die={el} setDice={setDice} />) }
        </section>
        
        <RollButton action={generateAllNewDice} setDice={setDice} />

    </div>
  )
}
