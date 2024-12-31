import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Home from '../pages/Home';
// import About from '../pages/About';
import Tasks from '../pages/Task'; 
import NotFound from '../pages/NotFound';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      {
        index: true,
        element: <Home />,
      },
    //   {
    //     path: 'about',
    //     element: <About />,
    //   },
      {
        path: 'tasks',
        element: <Tasks />, // Route for Tasks
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
