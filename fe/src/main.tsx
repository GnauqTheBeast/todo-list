import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { routes } from './routes/Routes';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);