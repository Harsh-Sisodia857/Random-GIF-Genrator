import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Spinner from './Spinner';

const apiKey = import.meta.env.VITE_APP_API_KEY;
const Random =() => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  async function fetchGIF() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
    const {data} = await axios.get(url);
    // console.log(data.data.images.downsized.url);
    const gifSource = data.data.images.downsized.url;
    setLoading(false);
    setGif(gifSource);
  }
  useEffect(() => {
    fetchGIF();
  }, [])
  
  const handleGifs = () => {
    fetchGIF();
  }
  return (
    <div className="flex flex-col items-center bg-green-500 w-6/12 rounded-xl gap-y-4 border-black">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        A Random GIF
      </h1>
      {loading ? <Spinner /> : <img src={gif} width={450} />}
      <button
        onClick={handleGifs}
        className="mb-[15px] w-5/12 text-lg py-1 bg-white"
      >
        Generate
      </button>
    </div>
  );
}

export default Random