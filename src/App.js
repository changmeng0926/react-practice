import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
import 'antd/dist/reset.css'
import { history } from '@/utils'

const Layout = lazy(() => import('@pages/LayoutComponent'))
const Login = lazy(() => import('@pages/Login'))
const Home = lazy(() => import('@pages/Home'))
const Article = lazy(() => import('@pages/Article'))
const Publish = lazy(() => import('@pages/Publish'))
const ClassComponent = lazy(() => import('@pages/LogicReuse/ClassComponent'))
const HigherOrderFunction = lazy(() => import('@pages/LogicReuse/HigherOrderFunction'))
const RenderProps = lazy(() => import('@pages/LogicReuse/RenderProps'))
const Hook = lazy(() => import('@pages/LogicReuse/Hook'))
const AutoComponent = lazy(() => import('@/components/AutoComponent'))

function App() {
  return (
    <HistoryRouter history={history}>
      <Suspense
        fallback={<div style={{ textAlign: 'center', marginTop: 200, color: '#1677ff' }}>Loading</div>}
      >
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
              <Route path="/classComponent" element={<ClassComponent />}></Route>
              <Route path="/higherOrderFunction" element={<HigherOrderFunction />}></Route>
              <Route path="/renderProps" element={<RenderProps />}></Route>
              <Route path="/hook" element={<Hook />}></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </Suspense>
    </HistoryRouter>
  )
}

export default App
