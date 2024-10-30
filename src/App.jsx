import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReadTheDocs from './ReadTheDocs'

function CountWidget({ valueToShow, suffix }) { 
  return (<div>count is {valueToShow}, {suffix}</div>)
}

function CountButton({ count, buttonIsClicked }) {
  return (
    <button onClick={buttonIsClicked}>
      <CountWidget valueToShow={count} />
    </button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + InceptionU</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          <CountWidget valueToShow={count} suffix="POWER UP!" />
        </button>
        <CountButton 
          count={count} 
          buttonIsClicked={() => setCount((count) => count - 1)} 
        />
        <CountWidget valueToShow={count} suffix="man!"/>
        <CountWidget valueToShow={3} suffix="woo hoo!"/>
        <CountWidget valueToShow={count} />
        <CountWidget valueToShow="hello there" />
        <CountWidget valueToShow={count} />
        <CountWidget valueToShow={count} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <ReadTheDocs />
    </>
  )
}

export default App
