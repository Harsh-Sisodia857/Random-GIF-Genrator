import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const API_KEY = import.meta.env.VITE_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = () => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchGIF(tag) {
    setLoading(true);
    // console.log('====================================');
    // console.log(tag);
    // console.log('====================================');
    const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }
  
  
  useEffect( () => {
    fetchGIF('');
  },[] )

  return {gif, loading, fetchGIF};
};

export default useGif;
