import React from 'react';
// import { lazy } from 'react';

// project imports
// import Loadable from 'component/Loadable';
import MainLayout from 'layout/MainLayout';
import StudentDashboard from 'views/Student/Dashboard';

// ==============================|| AUTHENTICATION ROUTES ||============================== //

const StudentRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/student-dashboard',
      element: <StudentDashboard />
    }
  ]
};

export default StudentRoutes;
