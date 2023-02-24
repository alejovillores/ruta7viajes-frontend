import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Sidebar from './components/Sidebar';
import JourneyContainer from './components/JourneyContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main-container'>
        <Sidebar/>
        <div className='body-container'>
          <Search/>
          <JourneyContainer/>
        </div>
      </div>

    </div>
  );
}

export default App;
