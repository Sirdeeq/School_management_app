import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';
import NewRoute from 'views/Admin/AddTransport/New/NewRoute';
import NewDriver from 'views/Admin/AddTransport/New/NewDriver';
import NewBus from 'views/Admin/AddTransport/New/NewBus';
import TicketForm from 'views/Admin/AddTransport/New/TicketForm';
import TransactionSlip from 'views/Account/TransactionSlip';
import NewTransactionSlip from 'views/Account/TransactionSlip/NewTransactionSlip';
import ProfileSetting from 'views/Settings';

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
const Admin = Loadable(lazy(() => import('../views/Admin')));
const Notice = Loadable(lazy(() => import('../views/Admin/addNotice')));
const Test = Loadable(lazy(() => import('../views/Class/addExams/Test')));
const Exams = Loadable(lazy(() => import('../views/Class/addExams')));
const Results = Loadable(lazy(() => import('../views/Results')));
const Account = Loadable(lazy(() => import('../views/Account')));
const Library = Loadable(lazy(() => import('../views/Library')));
const Settings = Loadable(lazy(() => import('../views/Settings')));
const Dormitories = Loadable(lazy(() => import('../views/Dormitories')));
const AppSettings = Loadable(lazy(() => import('../views/Settings/AppSettings')));
const StudentMarkSheet = Loadable(lazy(() => import('../views/Student/MarkSheet')));
const Transport = Loadable(lazy(() => import('../views/Admin/AddTransport')));
// const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));
// const SamplePage = Loadable(lazy(() => import('../views/SamplePage')));

// ==============================|| MAIN ROUTES ||============================== //

const yourRoutesArray = [
  { routeName: 'Route 1' },
  { routeName: 'Route 2' }
  // Add more routes
];

const yourAccountsData = {
  accountId1: { name: 'Account1', type: 'asset', balance: 100 },
  accountId2: { name: 'Account2', type: 'liability', balance: -50 }
  // ... more accounts
};

const DummyTransactionDetails = {
  studentName: 'John Doe',
  transactionDetails: {
    date: '2023-10-16',
    amount: 50.0
  }
};

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
    { path: '/class/exams', element: <Exams /> },
    { path: '/classRoutine', element: <AddClassRoutine /> },
    { path: '/parentRoutine', element: <ParentRoutine /> },
    { path: 'admin/notice', element: <Notice /> },
    { path: '/result', element: <Results /> },
    { path: '/library', element: <Library /> },
    { path: '/student/mark-sheet', element: <StudentMarkSheet /> },
    { path: '/admin/transport', element: <Transport /> },
    { path: '/admin/transport/new-route', element: <NewRoute /> },
    { path: '/admin/transport/new-driver', element: <NewDriver /> },
    { path: '/admin/transport/new-bus', element: <NewBus /> },
    { path: '/settings/profile-settings', element: <ProfileSetting /> },
    { path: '/settings/app-settings', element: <AppSettings /> },
    { path: '/account/view-transaction', element: <TransactionSlip /> },
    { path: '/settings', element:  <Settings /> },
    { path: '/dormitories', element:  <Dormitories /> },
    
    {
      path: '/account/new-transaction',
      element: (
        <NewTransactionSlip
          studentName={DummyTransactionDetails.studentName}
          transactionDetails={DummyTransactionDetails.transactionDetails}
        />
      )
    },
    { path: '/account', element: <Account accounts={yourAccountsData} /> },
    { path: '/admin/transport/ticket-form', element: <TicketForm routes={yourRoutesArray} /> }
  ]
};

export default MainRoutes;
