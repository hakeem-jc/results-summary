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
          <h2 className='results__subtitle'>Great</h2>
          <p className='results__text'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>

        <div className='results__summary'>
          <h1 className='results__title'>Summary</h1>
          <Score title={"Reaction"} color={'red'} icon={iconReaction} score={80}/>
          <Score title={"Memory"} color={'yellow'} icon={iconMemory} score={92}/>
          <Score title={"Verbal"} color={'green'} icon={iconVerbal} score={61}/>
          <Score title={"Visual"} color={'purple'} icon={iconVisual} score={72}/>
          <button>Continue</button>
        </div>
      </section>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </main>
  )
}

export default App;
