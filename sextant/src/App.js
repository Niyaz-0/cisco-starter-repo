import './App.css';
import React, { useEffect, version } from 'react'
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {

  const [data, setData] = React.useState({});

  useEffect(() => {
    const response = fetch(`https://api.ipify.org?format=json`)
    .then((res) => res.json())
    .then((data) => setData(data))  
    .catch( err => console.error(err))
} , [])

  return (
   <>
    <Banner />
    <div className='cards-container'>
      <Exhibit title="Public IPv4" metric={data.ip} />
      <Exhibit title="Public IPv6" metric={data.ip} />
      <Exhibit title="Latency" metric="3.8s"/>
    </div>
   </>
  );
}

export default App;
