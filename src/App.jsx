import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReadTheDocs from './ReadTheDocs'

function CountWidget({ valueToShow, suffix }) { 
  // const candy = "apple";
  // const [costume, setCostume] = useState();
  const [candy, setCandy] = useState("apple");
  // const [street, setStreet] = useState({address: "1t12g24g", trickOrTreat: true});
  // setCostume("vampire")
  // function swapCandy() {
  //   if(candy === "apple"){
  //     return "chocolate";
  //   } else if(candy === "chocolate"){
  //     return "apple";
  //   }
  // }
  return (
    <div>
      count is {valueToShow}, {suffix}
      <p>I ate so much candy!: {candy}</p>
      {/* <button onClick={() => let newCandy=swapCandy(); setCandy(newCandy)}> */}
      <button onClick={() => setCandy(
       candy==="apple"? "chocolate":candy==="chocolate"? "apple": "chocolate")}>
        		Click me to add candy!
      </button>

      {/* <Halloween></Halloween> */}
    </div>
  )
}

// function Halloween(){
//   return(
//     <p>
//       halloween is awesome {candy}
//     </p>
//   )
// }

function CountButton({ count, buttonIsClicked }) {
  return (
    <button className="count-button" onClick={buttonIsClicked}>
      <CountWidget valueToShow={count} />
    </button>
  )
}

function App() {
  const [count, setCount] = useState(0)

  function decrementCount() {  
    setCount((count) => count - 1) 
  }
  
  const incrementCount = () => setCount((count) => count + 1)

  useEffect(() => {
    if (count > 10) {
      document.body.style.backgroundColor = 'lightblue';
    } else {
      document.body.style.backgroundColor = '';
    }
  }, [count]); // Effect runs whenever 'count' changes

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
        <button onClick={incrementCount}>
          <CountWidget valueToShow={count} suffix="POWER UP!" />
        </button>
        <CountButton 
          count={count} 
          buttonIsClicked={decrementCount} 
        />
        <CountWidget valueToShow={count} suffix="man!"/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <ReadTheDocs />
    </>
  )
}

export default App
