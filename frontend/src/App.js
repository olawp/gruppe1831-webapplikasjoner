import './App.css';
import Navbar from './components/layout/Navbar';
import Routes from './components/routes/routes';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes/>
      <Footer></Footer>
    </div>
  );
}

export default App;
