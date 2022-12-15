import './App.scss';
import Apartaments from './components/Apartaments/Apartaments';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Instalations from './components/Instalations/Instalations';
import Line from './components/Line/Line';
import Ubications from './components/Ubications/Ubications';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Ubications/>
      <Apartaments/>
      <Line/>
      <Instalations/>
      <Line/>
      <Gallery/>
      <Line/>
      <Contact/>
      <Footer/> */}
      <Home/>
    </div>
  );
}

export default App;
