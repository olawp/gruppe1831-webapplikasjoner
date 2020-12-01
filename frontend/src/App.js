import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navigationBar"><h3>FG</h3> <a className="loggInn" href="/logginn">LOGG INN</a><a href="/kontakt">Kontakt</a><a href="/fagartikler">Fagartikler</a><a href="/kontorer">Kontorer</a><a href="/">Hjem</a></nav>
      <header><h1>Velkommen til FG Rørleggerservice AS</h1></header>
      <main></main>
      <footer><p className="footerInfo">Orgnr: 007 007 007</p><p className="footerInfo">lg@lgror.no</p><p className="footerInfo">99 00 00 00</p></footer>
    </div>
  );
}

export default App;
