import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/rootLayout/RootLayout';
import Admission from '../pages/admission/Admission';
import CollegeDetails from '../pages/collegeDetails/CollegeDetails';
import Colleges from '../pages/colleges/Colleges';
import Error from '../pages/error/Error';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'college-details', element: <CollegeDetails /> },
      { path: 'colleges', element: <Colleges /> },
      { path: 'admission', element: <Admission /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
  {
    path: '*',
    element: <Error/>
  }
]);

export default router;
