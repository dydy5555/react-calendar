// utils/socket.js

let socket = null;

export const connectWebSocket = () => {
  if (!socket) {
    socket = new WebSocket('ws://127.0.0.1:64245/');
    
    socket.addEventListener('open', function (event) {
      console.log('WebSocket connected.');
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
  }
  
  return socket;
};
