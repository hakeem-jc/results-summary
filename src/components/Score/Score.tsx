import { FC } from 'react';
import './Score.css';

interface ScoreProps {
    color: string;
    icon: string;
    title: string;
    score: number;
}

const Score:FC<ScoreProps> = (props) => {
    return (
        <div className='score__summary-item'>
            <div className='score__summary-left'>
                <img className='score__summary-item__icon' src={props.icon} alt="icon" />
                <h3 className='score__summary-label'>Reaction</h3>
            </div>
            <h3 className='score__summary-score'><span>{props.score}</span> / 100</h3>
        </div>
    );
}

export default Score;