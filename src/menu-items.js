// assets
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const icons = {
  NavigationOutlinedIcon: NavigationOutlinedIcon,
  HomeOutlinedIcon: HomeOutlinedIcon,
  ChromeReaderModeOutlinedIcon: ChromeReaderModeOutlinedIcon,
  HelpOutlineOutlinedIcon: HelpOutlineOutlinedIcon,
  SecurityOutlinedIcon: SecurityOutlinedIcon,
  AccountTreeOutlinedIcon: AccountTreeOutlinedIcon,
  BlockOutlinedIcon: BlockOutlinedIcon,
  AppsOutlinedIcon: AppsOutlinedIcon,
  ContactSupportOutlinedIcon: ContactSupportOutlinedIcon
};

// eslint-disable-next-line
export default {
  items: [
    {
      id: 'navigation',
      title: 'School App',
      caption: 'Dashboard',
      type: 'group',
      icon: icons['NavigationOutlinedIcon'],
      children: [
        // {
        //   id: 'sample-page',
        //   title: 'Sample Page',
        //   type: 'item',
        //   url: '/sample-page',
        //   icon: icons['ChromeReaderModeOutlinedIcon']
        // },
        {
          id: 'account',
          title: 'Account',
          type: 'collapse',
          icon: icons['SecurityOutlinedIcon'],
          children: [
            {
              id: 'account',
              title: 'Account',
              type: 'item',
              url: '/account'
              // target: true
            }
          ]
        },
        {
          id: 'admin',
          title: 'Admin',
          type: 'collapse',
          icon: icons['SecurityOutlinedIcon'],
          children: [
            {
              id: 'admin',
              title: 'Admin Func',
              type: 'item',
              url: '/admin'
              // target: true
            },
            {
              id: 'notice',
              title: 'Add Notice',
              type: 'item',
              url: '/admin/notice'
              // target: true
            },
            {
              id: 'result',
              title: 'Result',
              type: 'item',
              url: '/result'
              // target: true
            },
            {
              id: 'transport',
              title: 'Transport',
              type: 'item',
              url: '/admin/transport'
              // target: true
            }
          ]
        },
        {
          id: 'class',
          title: 'Class',
          type: 'collapse',
          icon: icons['SecurityOutlinedIcon'],
          children: [
            {
              id: 'class',
              title: 'Class',
              type: 'item',
              url: '/class'
              // target: true
            },
            {
              id: 'new-group',
              title: 'New Group & Section',
              type: 'item',
              url: '/addGroup'
              // target: true
            },
            {
              id: 'subject',
              title: 'Subject',
              type: 'item',
              url: '/subject'
              // target: true
            },
            {
              id: 'routine',
              title: 'Routine',
              type: 'item',
              url: '/routine'
              // target: true
            }
          ]
        },
        {
          id: 'dormitories',
          title: 'Dormitories',
          type: 'item',
          icon: icons['SecurityOutlinedIcon'],
          url: '/dormitories'
        },
        {
          id: 'library',
          title: 'Library',
          type: 'item',
          icon: icons['SecurityOutlinedIcon'],
          url: '/library'
        },
        {
          id: 'parent',
          title: 'Parent',
          type: 'item',
          icon: icons['SecurityOutlinedIcon'],
          url: '/parent'
        },
        {
          id: 'setting',
          title: 'Settings',
          type: 'collapse',
          icon: icons['SecurityOutlinedIcon'],
          children: [
            {
              id: 'setting',
              title: 'Settings',
              type: 'item',
              icon: icons['SecurityOutlinedIcon'],
              url: '/settings'
            },
            {
              id: 's-settings',
              title: 'System Settings',
              type: 'item',
              icon: icons['SecurityOutlinedIcon'],
              url: '/settings/app-settings'
            }
          ]
        },
        {
          id: 'student',
          title: 'Student',
          type: 'collapse',
          icon: icons['SecurityOutlinedIcon'],
          children: [
            {
              id: 'student',
              title: 'Student',
              type: 'item',
              url: '/student'
              // target: true
            },
            {
              id: 'new-student',
              title: 'New Student',
              type: 'item',
              url: '/addStudent'
              // target: true
            },
            {
              id: 'student-mark-sheet',
              title: 'Student Mark Sheet',
              type: 'item',
              url: '/student/mark-sheet'
              // target: true
            }
          ]
        },
        {
          id: 'teacher',
          title: 'Teacher',
          type: 'collapse',
          icon: icons['SecurityOutlinedIcon'],
          children: [
            {
              id: 'teacher',
              title: 'Teacher',
              type: 'item',
              url: '/teacher'
            }
          ]
        }

        // {
        //   id: 'auth',
        //   title: 'Authentication',
        //   type: 'collapse',
        //   icon: icons['SecurityOutlinedIcon'],
        //   children: [
        //     {
        //       id: 'login-1',
        //       title: 'Login',
        //       type: 'item',
        //       url: '/application/login',
        //       target: true
        //     },
        //     {
        //       id: 'register',
        //       title: 'Register',
        //       type: 'item',
        //       url: '/application/register',
        //       target: true
        //     }
        //   ]
        // }
      ]
    }
    // {
    //   id: 'utils',
    //   title: 'Utils',
    //   type: 'group',
    //   icon: icons['AccountTreeOutlinedIcon'],
    //   children: [
    //     {
    //       id: 'util-icons',
    //       title: 'Icons',
    //       type: 'item',
    //       url: 'https://mui.com/material-ui/material-icons/',
    //       icon: icons['AppsOutlinedIcon'],
    //       external: true,
    //       target: true
    //     },
    //     {
    //       id: 'util-typography',
    //       title: 'Typography',
    //       type: 'item',
    //       url: '/utils/util-typography',
    //       icon: icons['FormatColorTextOutlinedIcon']
    //     }
    //   ]
    // },
    // {
    //   id: 'support',
    //   title: 'Support',
    //   type: 'group',
    //   icon: icons['ContactSupportOutlinedIcon'],
    //   children: [
    //     {
    //       id: 'disabled-menu',
    //       title: 'Disabled Menu',
    //       type: 'item',
    //       url: '#',
    //       icon: icons['BlockOutlinedIcon'],
    //       disabled: true
    //     },
    //     {
    //       id: 'documentation',
    //       title: 'Documentation',
    //       type: 'item',
    //       url: 'https://codedthemes.gitbook.io/materially-react-material-documentation/',
    //       icon: icons['HelpOutlineOutlinedIcon'],
    //       chip: {
    //         label: 'Help?',
    //         color: 'primary'
    //       },
    //       external: true,
    //       target: true
    //     }
    //   ]
    // }
  ]
};
