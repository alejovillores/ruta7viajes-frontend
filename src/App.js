import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main-container'>
        <Sidebar/>
        <Search/>
        
      </div>

    </div>
  );
}

export default App;
