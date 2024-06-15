import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
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
import PropertyCreate from './pages/PropertyCreatePage.jsx'
import Property from './pages/Property.jsx'
import FieldCreatePage from './pages/FieldCreatePage.jsx'
import FieldUpdatePage from './pages/FieldUpdatePage.jsx'
import FieldPage from './pages/FieldPage.jsx'
import LimingCalcPage from './pages/LimingCalcPage.jsx'
import LimingResultPage from './pages/LimingResultPage.jsx'
import NpkResultPage from './pages/NpkResultPage.jsx'
import NpkCalcPage from './pages/NpkCalcPage.jsx'

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
          { path: 'property/create', element: <PropertyCreate /> },
          { path: 'property', element: <Property /> },
          { path: 'field/create/:id', element: <FieldCreatePage /> },
          { path: 'field/update/:id', element: <FieldUpdatePage />},
          { path: 'field/:id', element: <FieldPage /> },
          { path: 'analysis/liming/calc', element: <LimingCalcPage /> },
          { path: 'analysis/liming/result', element: <LimingResultPage /> },
          { path: 'analysis/npk/calc', element: <NpkCalcPage /> },
          { path: 'analysis/npk/result', element: <NpkResultPage /> },
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
