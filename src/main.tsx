
// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Style
import './index.css';
import 'animate.css';

// Pages
import App from './App.tsx';

// Children
import Home from './pages/Home.tsx';
import Project from "./pages/Project.tsx";
import CV from "./pages/CV.tsx";
import NotFound from "./pages/NotFound.tsx";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/project',
                element: <Project />,
            },
            {
                path: '/cv',
                element: <CV />,
            },
            {
                path: '*',
                element: <NotFound />,
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);