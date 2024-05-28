import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ErrorPage from './pages/ErrorPage.jsx'
import Frame from './components/Frame.jsx'
import InitialPage from './pages/InitialPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import MainPage from './pages/MainPage.jsx'
import PropertyRegister from './pages/PropertyRegisterPage.jsx'
import Property from './pages/Property.jsx'
import FieldRegisterPage1 from './pages/FieldRegisterPage1.jsx'
import FieldRegisterPage2 from './pages/FieldRegisterPage2.jsx'
import FieldRegisterPage3 from './pages/FieldRegisterPage3.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Frame />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <InitialPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'app', element: <MainPage /> },
      { path: 'property/create', element: <PropertyRegister /> },
      { path: 'property', element: <Property /> },
      { path: 'field/register/1', element: <FieldRegisterPage1 /> },
      { path: 'field/register/2', element: <FieldRegisterPage2 /> },
      { path: 'field/register/3', element: <FieldRegisterPage3 /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
