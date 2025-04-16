import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import Latency from './components/Latency';
import Metric from './components/Metric';

function App() {

  return (
   <>
    <Banner />
    <div className='cards-container'>
      <Exhibit title="Public IPv4">
        <Metric url="https://api.ipify.org?format=json" />
      </Exhibit>
      <Exhibit title="Public IPv6">
        <Metric url="https://api6.ipify.org?format=json" />
      </Exhibit>
      <Exhibit title="Latency">
        <Latency />
      </Exhibit>
    </div>
   </>
  );
}

export default App;
