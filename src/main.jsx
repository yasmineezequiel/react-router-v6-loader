import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pokemon from './routes/Pokemon';
import Root, { rootLoader } from './routes/Root';
import Error from './routes/Error';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} path="/" loader={rootLoader} errorElement={<Error />}>
      <Route element={<Pokemon />} path="pokemon/:name" />
    </Route>
  )
);

// another way of creating router:
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: '/pokemon/:name',
//         element: <Pokemon />,
//         errorElement: <Error />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
