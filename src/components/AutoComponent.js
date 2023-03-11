/**
 * Description：路由鉴权
 * **/
import { local } from '@/utils'
import { Navigate } from 'react-router-dom'

const { getSession } = local

function AutoComponent({ children }) {
  const token = getSession('cookie')
  return token ? <>{children}</> : <Navigate to={'/login'} replace></Navigate>
}

export default AutoComponent
