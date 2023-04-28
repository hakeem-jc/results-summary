import { FC } from 'react';
import './Score.css';

interface ScoreProps {}

const Score:FC<ScoreProps> = () => {
    return (
        <div className='score__summary-item'>
            <div className='score__summary-left'>
                <img className='score__summary-item__icon' src="https://via.placeholder.com/50" alt="icon" />
                <h3 className='score__summary-label'>Reaction</h3>
            </div>
            <h3 className='score__summary-score'><span>80</span> / 100</h3>
        </div>
    );
}

export default Score;