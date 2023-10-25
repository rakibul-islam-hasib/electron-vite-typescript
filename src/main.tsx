import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
// import Loading from './pages/Loading'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Loading from './pages/Loading';

const router = createHashRouter([
  {
    path : '/',
    element : <App />,
  }, 
  {
    path : '/loading',
    element : <Loading />,
  }
]) 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message, 'message')
})
