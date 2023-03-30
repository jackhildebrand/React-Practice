import './App.css';

function App() {
  return (
    <div className="App">
      <img src='Octocat.png' height={300} width={350} alt='img'></img>
      <h1 className='playlistName'>
        yes
      </h1>
      <h1 className='userName'>
        Jack Hildebrand
      </h1>
      <h1 className='updated'>
        UPDATED MONDAY
      </h1>
      <button className='playButton'>Play</button>
      <button className='shuffleButton'>Shuffle</button>
      <p className='song'>Jungle</p>
      <p className='song'>way back</p>
    </div>
  );
}

export default App;
