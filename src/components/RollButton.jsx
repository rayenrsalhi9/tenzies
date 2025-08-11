export default function RollButton({ action, setDice }) {

  function handleClick() {
    const newDice = action()
    setDice(newDice)
  }

  return (
    <button className="roll-btn" onClick={handleClick}>
        Roll
    </button>
  )
}
