import React from 'react';
import Button from './Button';
import Title from './Title';

const AnecdoteOfTheDay = ({title, anecdote, rating, action1, text1, action2, text2}) => {
    return (
        <div>
            <Title text={title} />
            <p>{anecdote}</p>
            <p>has {rating} {rating !== 1 ? 'votes' : 'vote'}</p>
            <Button action={action1} text={text1} />
            <Button action={action2} text={text2} />
        </div>
    );
}

export default AnecdoteOfTheDay;
