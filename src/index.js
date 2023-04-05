import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import App from './App'
// react query
import { QueryClient, QueryClientProvider } from "react-query"

// creating client
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)