// pages/index.js (or any other page)
"use client"
import React, { useEffect } from 'react';
import { connectWebSocket } from '../utils/socket';
import { getUsers, getPosts, getPhotos } from '../utils/apiUser';

const IndexPage = () => {
  useEffect(() => {
    const socket = connectWebSocket();

    // Fetch data
    getUsers()
      .then(users => {
        console.log('Users:', users);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });

    getPosts()
      .then(posts => {
        console.log('Posts:', posts);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });

    getPhotos()
      .then(photos => {
        console.log('Photos:', photos);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  return (
    <div>
      <h1>WebSocket and API Example</h1>
      {/* Your page content */}
    </div>
  );
};

export default IndexPage;
