import React,{useEffect} from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random =() => {
  const {gif,loading,fetchGIF} = useGif()
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