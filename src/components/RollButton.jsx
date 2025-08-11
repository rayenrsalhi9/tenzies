export default function RollButton({ action, setDice, isGameWon, ref }) {

  function handleClick() {
    const newDice = action()
    
    isGameWon ?
    setDice(newDice) :
    setDice(prev => prev.map((el, index) => el.isFixed ? el : newDice[index]))
  }

  return (
    <button className="roll-btn" onClick={handleClick} ref={ref}>
        { isGameWon ? 'New Game' : 'Roll'}
    </button>
  )
}
