import './App.css';

function App() {
  return (
    <div className="App">
      <img src='Octocat.png' height={300} width={350} alt='img'></img>
      <h1 className='playlistName'>
        Playlist
      </h1>
      <h1 className='userName'>
        Jack Hildebrand
      </h1>
      <h1 className='updated'>
        UPDATED MONDAY
      </h1>
      <button className='playButton'><span className='icon'></span><a href='#'></a>Play</button>
      <button className='shuffleButton'><i className='shuffleIcon'></i>Shuffle</button>
      <hr></hr>
      <div className='wrapper'>
        <div className='centered'>
          <p className='song'>song 1</p>
          <div className='left'>
            <img src='Octocat.png' alt='song' height={75} width={90}></img>
          </div>
        </div>
      </div>
      <hr></hr>
      <p className='song'>song 2</p>
      <hr></hr>
      <p className='song'>song 3</p>
      <hr></hr>
      <p className='song'>song 4</p>
      <hr></hr>
      <p className='song'>song 5</p>
      <hr></hr>
      <p className='song'>song 6</p>
      <hr></hr>
      <p className='song'>song 7</p>
      <hr></hr>
      <p className='song'>song 8</p>
    </div>
  );
}

export default App;
