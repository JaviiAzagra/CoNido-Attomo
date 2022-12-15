import './App.scss';
import Apartaments from './components/Apartaments/Apartaments';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Instalations from './components/Instalations/Instalations';
import Line from './components/Line/Line';
import Navbar from './components/Navbar/Navbar';
import Ubications from './components/Ubications/Ubications';

function App() {
  return (
    <div className="App">
      <Header/>
      <Ubications/>
      <Apartaments/>
      <Line/>
      <Instalations/>
      <Line/>
      <Gallery/>
      <Line/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
