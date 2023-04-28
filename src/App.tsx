import './App.css';
import Score from './components/Score/Score';

function App() {

  return (
    <main className='app'>
      <section className='results'>
        <div className='results__info'>
          <h1 className='results__title'>Your Results</h1>
          <div className='results__score'>76 <span>of 100</span></div>
          <h2 className='results__subtitle'>Great</h2>
          <p className='results__text'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>

        <div className='results__summary'>
          <h1 className='results__title'>Summary</h1>
          <Score/>
          
        </div>
      </section>
    </main>
  )
}

export default App;
