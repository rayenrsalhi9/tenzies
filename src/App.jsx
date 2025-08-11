import Header from "./components/Header"
import Die from "./components/Die"
import RollButton from "./components/RollButton"

export default function App() {
  return (
    <div className="container">
        
        <Header />

        <section className="numbers-grid">
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
          <Die />
        </section>
        
        <RollButton />

    </div>
  )
}
