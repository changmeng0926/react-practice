import { unstable_HistoryRouter as HistoryRouter, BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'antd/dist/reset.css'
import Layout from '@pages/LayoutComponent'
import Login from '@pages/Login'
import Home from '@pages/Home'
import Article from '@pages/Article'
import Publish from '@pages/Publish'
import AutoComponent from '@/components/AutoComponent'
import { history } from '@/utils'

function App() {
  return (
    <HistoryRouter history={history}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <AutoComponent>
                <Layout />
              </AutoComponent>
            }
          >
            <Route path="/" element={<Home />}></Route>
            <Route path="/article" element={<Article />}></Route>
            <Route path="/Publish" element={<Publish />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </HistoryRouter>
  )
}

export default App
