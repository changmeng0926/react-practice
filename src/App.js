import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'antd/dist/reset.css'
import Layout from '@pages/LayoutComponent'
import Login from '@pages/Login'
import AutoComponent from '@/components/AutoComponent'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <AutoComponent>
                <Layout />
              </AutoComponent>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
