import React, { useEffect } from 'react';

const WebSocketComponent = () => {
  useEffect(() => {
    const socket = new WebSocket('ws://127.0.0.1:64245/');

    socket.addEventListener('open', function (event) {
      console.log('WebSocket connected.');
      socket.send('Hello Server!');
    });

    socket.addEventListener('message', function (event) {
      console.log('Message from server:', event.data);
    });

    socket.addEventListener('error', function (event) {
      console.error('WebSocket error:', event);
    });

    socket.addEventListener('close', function (event) {
      console.log('WebSocket connection closed.');
    });

    // Clean up the WebSocket connection on component unmount
    return () => {
      socket.close();
    };
  }, []); // This effect will run only once when the component mounts on the client-side

  return null; // This component doesn't render anything
};

export default WebSocketComponent;