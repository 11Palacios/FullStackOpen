import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import AnecdoteOfTheDay from './components/AnecdoteOfTheDay';
import MostVoted from './components/MostVoted';
import Title from './components/Title';
import './index.css';


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const points = [1, 3, 4, 2, 0, 0]

const App = ({anecdotes, points}) => {
  const [rating, setRating] = useState(points)
  const random = Math.floor(Math.random() * 6)
  const [selected, setSelected] = useState(random)
  const [max, setMax] = useState(Math.max(...rating))
  const index = rating.indexOf(max)
  const [mostVoted, setMostVoted] = useState(index)

  const vote = () => {
    let newRating = [...rating]
    newRating[selected] += 1
    setRating(newRating)
    if(rating[selected] >= max){
      setMostVoted(selected)
      setMax(rating[selected])
      console.log(mostVoted)
    }
  }
  
  const next = () => {
    const random = Math.floor(Math.random() * 6)
    setSelected(random)
  }



  return (
    <div>
      <AnecdoteOfTheDay title='Anecdote of the day' anecdote={anecdotes[selected]} rating={rating[selected]} action1={vote} text1='vote' action2={next} text2='next anecdote' />
      <MostVoted title='Anecdote with most votes' anecdote={anecdotes[mostVoted]} rating={rating[mostVoted]} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} points={points} />
  </React.StrictMode>
);