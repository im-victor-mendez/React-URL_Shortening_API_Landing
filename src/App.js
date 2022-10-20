import './App.css';
import './Mobile.scss'
import BoostLinks from './components/layout/BoostLinks';
import Bottom from './components/layout/Bottom';
import Header from './components/layout/Header';
import LinkShorter from './components/layout/LinkShorter';
import Statistics from './components/layout/Statistics';
import Top from './components/layout/Top';

function App() {
  return <div className="App">
    <Header />
    <Top />
    <LinkShorter />
    <Statistics />
    <BoostLinks />
    <Bottom />
    </div>
}

export default App;
