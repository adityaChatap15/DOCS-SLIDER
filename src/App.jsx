import React from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'

function App() {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
       <Background/>
       <div className='fixed top-0 left-0 z-[3] w-full h-full bg-sky-800/50'></div>

       <Foreground/>
    </div>
  )
}

export default App
