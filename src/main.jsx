import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Navigate,
  Outlet,
} from 'react-router-dom'
import './index.css'
import Frame from './components/Frame.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import InitialPage from './pages/InitialPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import HomePage from './pages/HomePage.jsx'
import PropertyRegister from './pages/PropertyRegisterPage.jsx'
import Property from './pages/Property.jsx'
import FieldRegisterPage from './pages/FieldRegisterPage.jsx'
import FieldPage from './pages/FieldPage.jsx'
import LimingCalcPage from './pages/LimingCalcPage.jsx'
import LimingResultPage from './pages/LimingResultPage.jsx'
import NPKResultPage from './pages/NPKResultPage.jsx'
import NPKCalcPage from './pages/NPKCalcPage.jsx'

const ProtectedRoutes = () => {
  const token = localStorage.getItem('token')
  return token ? <Outlet /> : <Navigate to='/login' replace />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Frame />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <InitialPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      {
        path: '/',
        element: <ProtectedRoutes />,
        children: [
          { path: 'home', element: <HomePage /> },
          { path: 'property/create', element: <PropertyRegister /> },
          { path: 'property', element: <Property /> },
          { path: 'field/register/:id', element: <FieldRegisterPage /> },
          { path: 'field', element: <FieldPage /> },
          { path: 'analysis/liming/calc', element: <LimingCalcPage /> },
          { path: 'analysis/liming/result', element: <LimingResultPage /> },
          { path: 'analysis/npk/calc', element: <NPKCalcPage /> },
          { path: 'analysis/npk/result', element: <NPKResultPage /> },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
