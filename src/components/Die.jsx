export default function Die({ die, setDice }) {

  function toggleFixed(dieId) {
    
    setDice(prev => prev.map(el => (
      el.id === dieId ? {...el, isFixed: !el.isFixed} : el
    )))

  }

  return (
        <button 
          onClick={() => toggleFixed(die.id)} 
          className={die.isFixed ? 'fixed' : ''}
        >
          { die.value }
        </button>
  )
}
