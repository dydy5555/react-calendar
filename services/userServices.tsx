
    const socket = new WebSocket('ws://127.0.0.1:64245/');

    // Connection opened
    socket.addEventListener('open', function (event) {
        console.log('WebSocket connected.');
        // You can send messages after the WebSocket connection is established
        socket.send('Hello Server!');
    });
    
    // Listen for messages
    socket.addEventListener('message', function (event) {
        console.log('Message from server:', event.data);
    });
    
    // Listen for errors
    socket.addEventListener('error', function (event) {
        console.error('WebSocket error:', event);
    });
    
    // Listen for connection close
    socket.addEventListener('close', function (event) {
        console.log('WebSocket connection closed.');
    });
    

export const getUsers = async ()=>{

    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    if(!res.ok){
        throw new Error ("failed to fetch API data");
    }
    return res.json();
}

export const getPosts = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    if(!res.ok){
        throw new Error ("Fialed to fetch API data")
    }
    return res.json();
}

export const getPhotos = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/photos/1")
    if(!res.ok){
        throw new Error ("Fialed to fetch API data")
    }
    return res.json();
}