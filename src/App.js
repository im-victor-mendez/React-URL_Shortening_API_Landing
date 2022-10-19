import './App.css';
import BoostLinks from './components/layout/BoostLinks';
import Bottom from './components/layout/Bottom';
import Header from './components/layout/Header';
import Statistics from './components/layout/Statistics';
import Top from './components/layout/Top';

function App() {
  return <div className="App">
    <Header />
    <Top />
    <Statistics />
    <BoostLinks />
    <Bottom />
    </div>
}

export default App;
