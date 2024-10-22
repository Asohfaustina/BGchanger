import { useState } from 'react'
import './App.css'


function App() {

  const [color, setcolor] = useState("gray")
  
  return (
    <>
      <div
        className='transition ease-in-out delay-300 h-screen w-full bg-black relative '
        style={{ backgroundColor: color }}>
        <h1 className='text-white text-4xl text-center py-4 font-serif font-bold'>
          Background Color Generator
        </h1>
        <p className='text-center text-2xl '> click on buttons to change background color</p>
        <div className=' absolute flex flex-wrap w-full justify-center  bottom-0 mb-4'>
          <div className=' flex flex-wrap   rounded-3xl  bg-slate-200 p-4 gap-4 justify-center shadow-lg'>
            <button
              onClick={() => setcolor('green')}
              className='  hover:bg-green-700  p-4 text-white outline-none rounded-full shadow-lg bg-green-400  '>
              Green
            </button>
            <button
              onClick={() => setcolor('red')}
              className=' hover:bg-red-700 p-4 text-white outline-none rounded-full shadow-xl bg-red-400'>
              Red
            </button>
            <button
              onClick={() => setcolor('purple')}
              className=' hover:bg-purple-700  p-4 text-white outline-none rounded-full shadow-lg bg-purple-400 '>
              Purple
            </button>
            <button
              onClick={() => setcolor('yellow')}
              className='  hover:bg-yellow-700 p-4 text-white outline-none rounded-full shadow-lg bg-yellow-400 '>
              Yellow
            </button>
            <button
              onClick={() => setcolor('pink')}
              className=' hover:bg-pink-700  p-4 text-white outline-none rounded-full shadow-lg bg-pink-400 '>
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
