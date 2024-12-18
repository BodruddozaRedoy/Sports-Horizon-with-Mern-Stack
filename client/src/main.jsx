import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/MainRoutes'
import toast, { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './Context/ThemeContext'
import { UserProvider } from './Context/UserContext'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </UserProvider>
  </StrictMode>
);
