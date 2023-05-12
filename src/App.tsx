import './App.css';
import Score from './components/Score/Score';
import iconMemory from './assets/images/icon-memory.svg';
import iconReaction from './assets/images/icon-reaction.svg';
import iconVerbal from './assets/images/icon-verbal.svg';
import iconVisual from './assets/images/icon-visual.svg';

const App = () => {

  return (
    <main className='app__container'>
      <section className='results'>
        <div className='results__info'>
          <h1 className='results__title'>Your Results</h1>
          <div className='results__score'>76 <span>of 100</span></div>
          <div className='results__text-container'>
            <h2 className='results__subtitle'>Great</h2>
            <p className='results__text'>Your performance exceed 65% of the people conducting the test here!</p>
          </div>
        </div>

        <div className='results__summary'>
          <h1 className='summary__title'>Summary</h1>
          <div className="results__scores">
            <Score title={"Reaction"} color={'red'} icon={iconReaction} score={80}/>
            <Score title={"Memory"} color={'yellow'} icon={iconMemory} score={92}/>
            <Score title={"Verbal"} color={'green'} icon={iconVerbal} score={61}/>
            <Score title={"Visual"} color={'blue'} icon={iconVisual} score={72}/>
          </div>
          <button>Continue</button>
        </div>
      </section>

      <div className="app__attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </main>
  )
}

export default App;
