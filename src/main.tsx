
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
import Project from "./pages/Project.tsx";
import CV from "./pages/CV.tsx";

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
                element: < Project/>,
            },
            {
                path: '/cv',
                element: < CV/>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);