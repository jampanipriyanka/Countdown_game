import './App.css';
import TimerChallenge from './components/TimerCallenges';
import Player from './components/player';

function App() {
  return (
    <>
      <Player></Player>
      <div id='challenges'>
        <TimerChallenge title='Easy' targetTime={1} />
        <TimerChallenge title='Not Easy' targetTime={5} />
        <TimerChallenge title='Getting Tough' targetTime={10} />
        <TimerChallenge title='Pros Only' targetTime={15} />
      </div>
    </>
  );
}

export default App;
