import Header from '../components/Header';
import Search from '../components/Search';
import Sidebar from '../components/Sidebar';
import JourneyContainer from '../components/JourneyContainer';
import Footer from '../components/Footer';


export default function Home() {
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