import React, { useEffect, useState } from 'react'

export default function Latency() {

    const [latency, setLatency] = useState(null);

    useEffect(() => {
      const socket = new WebSocket('ws://localhost:55455');
  
      socket.onopen = () => {
        console.log('Connected to WebSocket server');
      };

      socket.onmessage = (message) => {
        const packetTimestamp = parseInt(message.data, 10);
        const currentTime = Date.now(); 
        const packetLatency = currentTime - packetTimestamp;
        setLatency(packetLatency); 
      };
      socket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      socket.onclose = () => {
        console.log('WebSocket connection closed');
      };

 }, []);

  return (
    <h1>
        {latency !== null ? `${latency} ms` : "Loading..."}
    </h1>
  )
}
