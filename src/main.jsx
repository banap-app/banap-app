import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ErrorPage from './pages/ErrorPage.jsx'
import Frame from './components/Frame.jsx'
import InitialPage from './pages/InitialPage.jsx'
import LoginPage from './pages/LoginForm.jsx'
import RegisterPage from './pages/RegistrationForm.jsx'
import MainPage from './pages/MainPage.jsx'

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
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
