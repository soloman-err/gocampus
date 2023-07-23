import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/rootLayout/RootLayout';
import CollegeDetails from '../pages/collegeDetails/CollegeDetails';
import Colleges from '../pages/colleges/Colleges';
import Home from '../pages/home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'college-details', element: <CollegeDetails /> },
      { path: 'colleges', element: <Colleges /> },
    ],
  },
]);

export default router;
