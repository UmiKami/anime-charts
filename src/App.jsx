import './styles/CSS/main.css'
import AnimeCard from './AnimeInfo';

function App() {
  return (
    <div className="App">
      <h1 className='page-header'>Anime Charts | Current Count: 100</h1>
      <div className="card-container">
        <AnimeCard/>
      </div>
    </div>
  );
}

export default App;
