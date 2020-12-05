/* eslint-disable no-unused-vars */
import './App.css';
import Routes from './components/routes/routes';
import Style from './styled/style';
import AuthProvider from './context/AuthProvider.jsx';

function App() {
  return (
    <Style>
      <div className="App">
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </div>
    </Style>
  );
}

export default App;
