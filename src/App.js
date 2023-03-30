import './App.css';

function MyButton() {
  return (
    <button className='MyButton'>Play</button>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <h3 className='name'>
          yes
        </h3>
        <h3 className="user">
          Jack Hildebrand
        </h3>
        <p className="updated">
            UDATED MONDAY
        </p>
        <MyButton />
      </header>
    </div>
  );
}

export default App;
