import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


function Tag() {
  const [tag, setTag] = useState("");
  const { gif, loading, fetchGIF } = useGif();
  const handleGifs = () => {
    fetchGIF(tag);
  };
  const handleChange = (e) => {
    setTag(e.target.value);
  }
  return (
    <div className="flex flex-col items-center bg-blue-500 w-6/12 rounded-xl gap-y-4 border-black">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        {`Random ${tag} GIF`}
      </h1>
      {loading ? <Spinner /> : <img src={gif} width={450} />}
      <input className="mb-[3px] w-5/12 text-lg py-1 bg-white text-center" onChange={handleChange} value={tag}/>
      <button
        onClick={handleGifs}
        className="mb-[15px] w-5/12 text-lg py-1 bg-white"
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
