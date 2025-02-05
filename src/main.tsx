
// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Style
import './index.css';

// Pages
import App from './App.tsx';

// Children
import Home from './pages/Home.tsx';

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            /*{
                path: '/recipe/:id',
                element: < />,
            },
            {
                path: '*',
                element: < />,
            },*/
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);