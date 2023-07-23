import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/rootLayout/RootLayout';
import CollegeDetails from '../pages/collegeDetails/CollegeDetails';
import Home from '../pages/home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'college-details', element: <CollegeDetails /> },
    ],
  },
]);

export default router;
