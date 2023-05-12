import { FC } from 'react';
import './Score.css';

interface ScoreProps {
    color: string;
    icon: string;
    title: string;
    score: number;
}

const Score:FC<ScoreProps> = (props) => {
    const {color, icon, title, score} = {...props};
    return (
        <div className={`score__summary-item score__summary-${color}`}>
            <div className='score__summary-left'>
                <img className='score__summary-item__icon' src={icon} alt="icon" />
                <h3 className='score__summary-label'>{title}</h3>
            </div>
            <h3 className='score__summary-score'><span>{score}</span> / 100</h3>
        </div>
    );
}

export default Score;