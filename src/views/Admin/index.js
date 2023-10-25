import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Box, Button } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

//project import
import ReportCard from './ReportCard';
import { gridSpacing } from 'config.js';

// assets
import MonetizationOnTwoTone from '@mui/icons-material/MonetizationOnTwoTone';
import DescriptionTwoTone from '@mui/icons-material/DescriptionTwoTone';
import ThumbUpAltTwoTone from '@mui/icons-material/ThumbUpAltTwoTone';
import CalendarTodayTwoTone from '@mui/icons-material/CalendarTodayTwoTone';
import DvrIcon from '@mui/icons-material/Dvr';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { useNavigate } from 'react-router';

// ==============================|| DASHBOARD DEFAULT ||============================== //

const Admin = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Grid container spacing={gridSpacing}>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <Box mb={2}>
        <Button onClick={() => navigate('/admin/notice')} startIcon={<AddIcon />} variant="outlined" color="primary">
          Add Notice
        </Button>
      </Box>
      &nbsp; &nbsp;
      <Box mb={2}>
        <Button onClick={() => navigate('/notice')} startIcon={<ViewHeadlineIcon />} variant="outlined" color="primary">
          Attendance
        </Button>
      </Box>
      &nbsp; &nbsp;
      <Box mb={2}>
        <Button onClick={() => navigate('/result')} startIcon={<DvrIcon />} variant="outlined" color="primary">
          Results
        </Button>
      </Box>
      &nbsp; &nbsp;
      <Box mb={2}>
        <Button onClick={() => navigate('/admin/transport')} startIcon={<EmojiTransportationIcon />} variant="outlined" color="primary">
          Transport
        </Button>
      </Box>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary="30+"
              secondary="All Teachers"
              color={theme.palette.warning.main}
              // footerData="10% changes on profit"
              iconPrimary={MonetizationOnTwoTone}
              // iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary="150+"
              secondary="All Students"
              color={theme.palette.error.main}
              // footerData="28% task performance"
              iconPrimary={CalendarTodayTwoTone}
              // iconFooter={TrendingDownIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary="290+"
              secondary="All Parents"
              color={theme.palette.success.main}
              // footerData="10k daily views"
              iconPrimary={DescriptionTwoTone}
              // iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <ReportCard
              primary="50"
              secondary="All Activities"
              color={theme.palette.primary.main}
              // footerData="1k download in App store"
              iconPrimary={ThumbUpAltTwoTone}
              // iconFooter={TrendingUpIcon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Admin;
