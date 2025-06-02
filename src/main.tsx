import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss';
import MainRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <MainRoutes />
    </StrictMode>
  </BrowserRouter>
)
