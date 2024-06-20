import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Search from './component/Search';
import Header from './component/Header';
import Restaurant from './component/Restaurant';



function App() {
  
  return (
    <>
    <div className="container flex flex-col items-center mx-auto space-y-4">
    <Header/>
    <Search/>
    <div className="container flex flex-row flex-wrap items-center justify-center">
    <Restaurant />
    </div>
    </div>
    
    
    </>
   
  )
}

export default App
