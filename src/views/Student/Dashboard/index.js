import React from 'react';
import { Grid } from '@mui/material';
import StudentClassRoutine from './StudentClassRoutine';
import StudentClassInformation from './StudentClassInformation';
import StudentSubjectInformation from './StudentSubjectInformation';
import ReportCard from '../ReportCard';
import { gridSpacing } from 'config.js';
import { useTheme } from '@mui/material/styles';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import MonetizationOnTwoTone from '@mui/icons-material/MonetizationOnTwoTone';
import DescriptionTwoTone from '@mui/icons-material/DescriptionTwoTone';
import ThumbUpAltTwoTone from '@mui/icons-material/ThumbUpAltTwoTone';
import CalendarTodayTwoTone from '@mui/icons-material/CalendarTodayTwoTone';

const StudentDashboard = () => {
  const theme = useTheme();

  return (
    <div>
      <Grid container spacing={gridSpacing}>
        <Grid item lg={3} sm={6} xs={12}>
          <ReportCard
            primary="$30200"
            secondary="All Earnings"
            color={theme.palette.warning.main}
            footerData="10% changes on profit"
            iconPrimary={MonetizationOnTwoTone}
            iconFooter={TrendingUpIcon}
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <ReportCard
            primary="145"
            secondary="Task"
            color={theme.palette.error.main}
            footerData="28% task performance"
            iconPrimary={CalendarTodayTwoTone}
            iconFooter={TrendingDownIcon}
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <ReportCard
            primary="290+"
            secondary="Page Views"
            color={theme.palette.success.main}
            footerData="10k daily views"
            iconPrimary={DescriptionTwoTone}
            iconFooter={TrendingUpIcon}
          />
        </Grid>
        <Grid item lg={3} sm={6} xs={12}>
          <ReportCard
            primary="500"
            secondary="Downloads"
            color={theme.palette.primary.main}
            footerData="1k download in App store"
            iconPrimary={ThumbUpAltTwoTone}
            iconFooter={TrendingUpIcon}
          />
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <StudentClassRoutine />
        </Grid>
        <Grid item xs={12} md={6}>
          <StudentClassInformation />
        </Grid>
        <Grid item xs={12}>
          <StudentSubjectInformation />
        </Grid>
      </Grid>
    </div>
  );
};

export default StudentDashboard;
