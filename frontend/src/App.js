import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Routes from './components/routes/routes';

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
