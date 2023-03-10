import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'antd/dist/reset.css'
import Layout from '@pages/Layout'
import Login from '@pages/Login'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
