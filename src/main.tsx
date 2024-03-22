import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import ComingSoon from './pages/ComingSoon'
import NowPlaying from './pages/NowPlaying'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '',
      element: <Home />
    },
    {
      path: 'coming-soon',
      element: <ComingSoon />
    },
    {
      path: 'now-playing',
      element: <NowPlaying />
    },
    {
      path: 'movie/:movieId',
      element: <Home />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
