import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Camerafeed from '../../screen/Camerafeed/Camerafeed';
import Home from '../../screen/Home/Home';
import Statistics from '../../screen/Statistics/Statistics';
import Settings from '../../screen/Settings/Settings';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/diagramm',
        element: <Statistics />,
    },
    {
        path: '/settings',
        element: <Settings />,
    },
    {
        path: '/camera',
        element: <Camerafeed />,
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
