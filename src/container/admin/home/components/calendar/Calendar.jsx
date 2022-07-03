/* eslint-disable react/prop-types */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/pro-regular-svg-icons';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Conference',
    start: new Date('2022,4,7'),
    end: new Date('2022,4,10'),
  },
  {
    title: 'Workshop',
    start: new Date('2022,4,18'),
    end: new Date('2022,4,21'),
  },
];

function CustomToolbar() {
  const [dateTime, setDateTime] = React.useState(
    moment(new Date()).format('ddd, MMM Do YYYY')
  );
  return (
    <Stack
      sx={{
        width: '100%',
        marginBottom: '1rem',
      }}
      direction="column"
      spacing={2}
    >
      <Typography fontSize="1.8rem" fontWeight={600}>
        My Planner
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: '100%',
        }}
      >
        <ButtonGroup
          variant="outlined"
          color="primary"
          disableElevation
          sx={{
            width: '35%',
          }}
        >
          <Button fullWidth>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          <Button fullWidth>
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
          <Button fullWidth>Today</Button>
        </ButtonGroup>
        <Typography
          variant="body1"
          color="primary"
          fontWeight="bold"
          fontSize="14px"
          letterSpacing="0.3px"
        >
          {dateTime}
        </Typography>
        <ButtonGroup
          variant="outlined"
          color="primary"
          aria-label=""
          sx={{
            width: '35%',
          }}
        >
          <Button variant="contained" disableElevation fullWidth>
            Month
          </Button>
          <Button fullWidth>Week</Button>
          <Button fullWidth>Year</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}

function CustomEvent(props) {
  const { event } = props;
  return (
    <Box>
      <Typography color="white" fontSize="10.5px" letterSpacing="0.5px">
        {event.title}
      </Typography>
      {/* {event.desc && `:  ${event.desc}`} */}
    </Box>
  );
}

function CustomEventContainerWrapper(props) {
  return (
    <div
      style={{
        background: 'red',
      }}
      {...props}
    />
  );
}

function DashboardCalendar() {
  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: '2px',
        padding: '1.5rem',
        height: '50rem',
      }}
    >
      {/* My Calendar */}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        components={{
          toolbar: CustomToolbar,
          event: CustomEvent,
          eventContainerWrapper: CustomEventContainerWrapper,
        }}
      />
    </Paper>
  );
}

export default DashboardCalendar;
