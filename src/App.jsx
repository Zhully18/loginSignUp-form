import React from "react"
import SignUp from "./Components/LoginSample/SignUp"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./Components/LoginSample/Login"


function App() {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
