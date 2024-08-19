import { useState } from 'react'
import './App.css'

import Router from './Router'

function App() {
  console.log("App Loaded")
  
  return (
    <div className='app'>
      <Router />
    </div>
  )
}

export default App
