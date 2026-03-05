import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from "@/components/ui/toaster"



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>
    <ChakraProvider cssVarsRoot={undefined}>
    <App />
    <Toaster/>
    </ChakraProvider>

  </BrowserRouter>
  </React.StrictMode>,
)
