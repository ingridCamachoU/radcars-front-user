import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DarkModeProvider } from './context/DarkMode';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DarkModeProvider>
            <RouterProvider router={router} />
        </DarkModeProvider>
    </React.StrictMode>,
)
