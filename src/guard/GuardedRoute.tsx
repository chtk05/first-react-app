import { Navigate, Outlet } from 'react-router-dom'

interface IGuardRouteProps {
  isRouteAccessible: boolean
  redirectRoute: string
}

const GuardedRoute = ({ isRouteAccessible, redirectRoute }: IGuardRouteProps) => {
  return isRouteAccessible ? <Outlet /> : <Navigate to={redirectRoute} replace />
}

export default GuardedRoute
