
import './App.css';
import Bigheader from './Components/BigHeader/Bigheader';
import Card from './Components/Cardsection/Card';
import Footer from './Components/Footer/Footer';
import Landing from './Components/landing/Landing';
import SectionMain from './Components/MAIN/Main';
import MainSection from './Components/Mainsection/MainSection';
import Meetteam from './Components/MeetTeam/Meetteam';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Landing/>
    <MainSection/>
    <SectionMain/>
    <Card/>
    <Bigheader/>
    <Meetteam/>
    <Footer/>
    </div>
  );
}

export default App;
