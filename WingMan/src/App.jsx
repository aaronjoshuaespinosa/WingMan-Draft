import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import { Route, Routes, useNavigate } from 'react-router-dom'

// import { Test } from './test.jsx' // kANINA

//
import TestingLang from './test.jsx'


function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  const handleAJ = () => {
    navigate("/aj", { replace: true })
  }

  return (

    <>
      <h1 className="text-red-800 text-xs mt-10" onClick={handleAJ}>Navigate to AJ</h1>

      <Routes>
        <Route path="/aj" element={<TestingLang/>}></Route>
      </Routes>
    </>



  )
}

export default App
