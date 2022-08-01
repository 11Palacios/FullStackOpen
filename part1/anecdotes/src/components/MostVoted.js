import React from 'react';
import Title from './Title';

const MostVoted = ({title, anecdote, rating}) => {
    return (
        <div>
            <Title text={title} />
            <p>{anecdote}</p>
            <p>has {rating} {rating !== 1 ? 'votes' : 'vote'}</p>
        </div>
    );
}

export default MostVoted;
