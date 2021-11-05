import React, { useEffect, useState } from 'react'
import { Splash } from './pages/Splash';
import { Routes } from './routes/Routes';
import './styles/App.css';

const App = () => {

  const [state, setState] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setState(false)
    }, 1000)

  }, [])

  return (
    <>
      { state ? <Splash /> : <Routes /> }
    </>
  )
}

export default App;