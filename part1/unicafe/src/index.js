import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => {
    setGood(good + 1)
  }

  const addNeutral = () => {
    setNeutral(neutral + 1)
  }

  const addBad = () => {
    setBad(bad + 1)
  }

  const all = good + neutral + bad

  const average = (good-bad) / all

  const positive = (good / all) * 100

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={addGood} >good</button><button onClick={addNeutral} >neutral</button><button onClick={addBad} >bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);