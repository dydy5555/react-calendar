    

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