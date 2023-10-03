import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';

const DashboardDefault = Loadable(lazy(() => import('../views/Dashboard')));

const UtilsTypography = Loadable(lazy(() => import('../views/Utils/Typography')));

const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));
const ClassSection = Loadable(lazy(() => import('../views/Class')));
const AddClass = Loadable(lazy(() => import('../views/Class/addClass')));
const AddGroup = Loadable(lazy(() => import('../views/Class/addClass/AddGroup')));
const ViewClass = Loadable(lazy(() => import('../views/Class/viewClass')));
const AddClassRoutine = Loadable(lazy(() => import('../views/Class/addRoutine')));
const Student = Loadable(lazy(() => import('../views/Student')));
const AddStudent = Loadable(lazy(() => import('../views/Student/addStudent')));
const ViewStudent = Loadable(lazy(() => import('../views/Student/viewStudent')));
const EditStudent = Loadable(lazy(() => import('../views/Student/viewStudent/EditStudent')));
const Teacher = Loadable(lazy(() => import('../views/Teacher')));
const AddSubject = Loadable(lazy(() => import('views/Class/addSubject')));
const AddTeacher = Loadable(lazy(() => import('../views/Teacher/addTeacher')));
const ViewTeacher = Loadable(lazy(() => import('../views/Teacher/viewTeacher')));
const EditTeacher = Loadable(lazy(() => import('../views/Teacher/viewTeacher/EditTeacher')));
const Parent = Loadable(lazy(() => import('../views/Parent')));
const ParentRoutine = Loadable(lazy(() => import('../views/Parent/AddRoutine')));
const Test = Loadable(lazy(() => import('../views/Class/addExams/Test')));
const Admin = Loadable(lazy(() => import('../views/Admin')));
const Notice = Loadable(lazy(() => import('../views/Admin/addNotice')));
// const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));
// const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/dashboard/default',
      element: <DashboardDefault />
    },
    { path: '/utils/util-typography', element: <UtilsTypography /> },
    { path: '/sample-page', element: <SamplePage /> },
    { path: '/class', element: <ClassSection /> },
    { path: '/addClass', element: <AddClass /> },
    { path: '/addGroup', element: <AddGroup /> },
    { path: '/addSubject', element: <AddSubject /> },
    { path: '/viewClass', element: <ViewClass /> },
    { path: '/student', element: <Student /> },
    { path: '/addStudent', element: <AddStudent /> },
    { path: '/viewStudent', element: <ViewStudent /> },
    { path: '/editStudent', element: <EditStudent /> },
    { path: '/teacher', element: <Teacher /> },
    { path: '/addTeacher', element: <AddTeacher /> },
    { path: '/viewTeacher', element: <ViewTeacher /> },
    { path: '/editTeacher', element: <EditTeacher /> },
    { path: '/admin', element: <Admin /> },
    { path: '/parent', element: <Parent /> },
    { path: '/class/test', element: <Test /> },
    { path: '/classRoutine', element: <AddClassRoutine /> },
    { path: '/parentRoutine', element: <ParentRoutine /> },
    { path: '/notice', element: <Notice /> },
  ]
};

export default MainRoutes;
