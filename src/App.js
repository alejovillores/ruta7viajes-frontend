import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Sidebar from './components/Sidebar';
import JourneyContainer from './components/JourneyContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main-container'>
        <Sidebar/>
        <div className='body-container'>
          <Search/>
          <JourneyContainer/>
          <Footer/>
        </div>
      </div>

    </div>
  );
}

export default App;
