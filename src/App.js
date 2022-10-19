import './App.css';
import BoostLinks from './components/layout/BoostLinks';
import Header from './components/layout/Header';
import Statistics from './components/layout/Statistics';
import Top from './components/layout/Top';

function App() {
  return <div className="App">
    <Header />
    <Top />
    <Statistics />
    <BoostLinks />
    </div>
}

export default App;
