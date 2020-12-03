import './App.css';
import Navbar from './components/layout/Navbar';
import Routes from './components/routes/routes';
import Footer from './components/layout/Footer';
import Style from './styled/style';
import AuthProvider from './context/AuthProvider.jsx';

function App() {
  return (
    <Style>
      <div className="App">
      <AuthProvider>
        <Navbar></Navbar>
        <Routes/>
        <Footer></Footer>
        </AuthProvider>
      </div>
    </Style>
  );
}

export default App;
