import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
  return (
   <>
    <Banner />
    <div className='cards-container'>
      <Exhibit title="Public IP" metric="192.168.1.3"/>
      <Exhibit title="Latency" metric="3.8s"/>
    </div>
   </>
  );
}

export default App;
