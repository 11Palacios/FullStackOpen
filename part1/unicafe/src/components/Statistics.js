import React from 'react';
import Statistic from './Statistic';

const Statistics = ({good, neutral, bad}) => {

  const all = good + neutral + bad

  const average = (good-bad) / all

  const positive = (good / all) * 100

    return (
        <div>
            <h1>statistics</h1>
                {good < 1 && neutral < 1 && bad < 1 
                    ? 
                        <p>No feedback given</p>
                    :
                        <>
                            <table>
                            <tbody>
                                <Statistic text='good' value={good} />
                                <Statistic text='neutral' value={neutral} />
                                <Statistic text='bad' value={bad} />
                                <Statistic text='all' value={all} />
                                <Statistic text='average' value={average} />
                                <Statistic text='positive' value={positive} />
                            </tbody>
                                
                            </table>
                            
                    </>
                        
                }
        </div>
    );
}

export default Statistics;
