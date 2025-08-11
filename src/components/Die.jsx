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
          aria-label={`die with value of ${die.value}, ${die.isFixed ? 'fixed' : 'not fixed'}`  }
          aria-pressed={die.isFixed}
        >
          { die.value }
        </button>
  )
}
