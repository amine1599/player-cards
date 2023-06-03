import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Players from './players'
import PlayerList from './PlayerList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>FIFA PLAYERS CARDS</h1>
       <PlayerList data={Players}/>
      </header>
    </div>
  );
}

export default App;
