import './App.scss';
import Apartaments from './components/Apartaments/Apartaments';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Ubications from './components/Ubications/Ubications';

function App() {
  return (
    <div className="App">
      <Header/>
      <Ubications/>
      <Apartaments/>
    </div>
  );
}

export default App;
