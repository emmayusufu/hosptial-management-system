import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import NoticeBoard from './components/notice-board/NoticeBoard';
import ChatsCard from './components/chat-card/ChatCard';
import DashboardDirectory from './components/directory/Directory';
import DashboardCalendar from './components/calendar/Calendar';
import usePageTitle from '@app/hooks/usePageTitle';

function Dashboard() {
  usePageTitle('Home');
  return (
    <Box
      sx={{
        height: '100%',
      }}
    >
      <Grid container spacing={3}>
        <Grid xs={12} sm={12} item lg={5.5}>
          <NoticeBoard />
        </Grid>
        <Grid xs={12} sm={12} item lg={6.5}>
          <DashboardCalendar />
        </Grid>
        <Grid
          sx={{
            height: '50rem',
          }}
          xs={12}
          sm={12}
          item
          lg={6.5}
        >
          <DashboardDirectory />
        </Grid>
        <Grid
          sx={{
            height: '50rem',
          }}
          item
          xs={12}
          sm={12}
          lg={5.5}
        >
          <ChatsCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
