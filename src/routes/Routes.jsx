import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/rootLayout/RootLayout';
import Admission from '../pages/admission/Admission';
import CollegeDetails from '../pages/collegeDetails/CollegeDetails';
import Colleges from '../pages/colleges/Colleges';
import Error from '../pages/error/Error';
import Home from '../pages/home/Home';
import ResearchPaper from '../pages/home/research/ResearchPaper';
import Login from '../pages/login/Login';
import MyCollege from '../pages/myCollege/MyCollege';
import Profile from '../pages/profile/Profile';
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
      { path: 'profile', element: <Profile /> },
      { path: 'research-paper', element: <ResearchPaper /> },
      { path: 'my-college', element: <MyCollege /> },
    ],
  },
  {
    path: '*',
    element: <Error/>
  }
]);

export default router;
