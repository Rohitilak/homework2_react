import logo from './logo.svg';
import './App.css';
import Header  from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';
import Address from './components/Address';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Main/>
    <Contact/>
    <Address/>
    <Footer/>
    </div>
  );
}

export default App;
