import './App.css'
import Random from './component/Random';
import Tag from './component/Tag';


function App() {

  return (
    <>
      <div className="w-full full-height flex flex-col relative background items-center">
        <h1 className="text-center my-[25px] bg-white rounded-lg uppercase w-10/12 p-3 font-bold text-2xl">
          Random GIFs Generator
        </h1>
        <div className="flex flex-col items-center w-full gap-y-6 mt-7">
          <Random />
          <Tag />
        </div>
      </div>
    </>
  );
}

export default App
