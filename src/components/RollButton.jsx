export default function RollButton({ action, setDice, isGameWon }) {

  function handleClick() {
    const newDice = action()
    
    isGameWon ?
    setDice(newDice) :
    setDice(prev => prev.map((el, index) => el.isFixed ? el : newDice[index]))
  }

  return (
    <button className="roll-btn" onClick={handleClick}>
        { isGameWon ? 'New Game' : 'Roll'}
    </button>
  )
}
