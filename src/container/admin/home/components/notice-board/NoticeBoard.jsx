import * as React from 'react';
import './NoticeBoard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faListDots,
  faEdit,
} from '@fortawesome/pro-regular-svg-icons';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FormTextInput from '@app/shared-components/form-text-input/FormTextInput';
import FormAutoComplete from '@app/shared-components/form-autocomplete/FormAutocomplete';
import FormInput from '@app/shared-components/form-input/FormInput';

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const data = [
  {
    title: 'Upcoming staff meeting',
    status: 'Pending',
    origin: 'Triage',
    sent: {
      date: '21/02/22',
      time: '10:30 am',
    },
  },
  {
    title: 'Upcoming staff meeting',
    status: 'Overdue',
    origin: 'Triage',
    sent: {
      date: '21/02/22',
      time: '10:30 am',
    },
  },
  {
    title: 'Upcoming staff meeting',
    status: 'Pending',
    origin: 'Triage',
    sent: {
      date: '21/02/22',
      time: '10:30 am',
    },
  },
  {
    title: 'Upcoming staff meeting',
    status: 'Pending',
    origin: 'Triage',
    sent: {
      date: '21/02/22',
      time: '10:30 am',
    },
  },
  // {
  //   title: 'Upcoming staff meeting',
  //   status: 'Pending',
  //   origin: 'Triage',
  //   sent: {
  //     date: '21/02/22',
  //     time: '10:30 am',
  //   },
  // },
];

function NoticeBoard() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const toggleDialogVisibility = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          padding: '1.5rem',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          height: '50rem',
        }}
      >
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            marginBottom: '1.2rem',
          }}
        >
          <Typography fontSize="1.8rem" fontWeight={600}>
            Notice Board
          </Typography>
          <Stack direction="row" spacing="5rem">
            <Button
              sx={{
                width: {
                  lg: '20rem',
                  sx: '5rem',
                },
                height: '5rem',
                // fontSize: '14px',
              }}
              onClick={toggleDialogVisibility}
            >
              <FontAwesomeIcon
                icon={faEdit}
                fontSize="18px"
                style={{
                  marginRight: '1.5rem',
                }}
              />
              Create Notice
            </Button>
            <Stack direction="row" spacing={1} alignItems="center">
              <FontAwesomeIcon
                icon={faListDots}
                color="#0621B5"
                fontSize="18px"
              />

              <Typography color="#0621B5" fontSize="14px">
                See All
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <table>
          <thead>
            <tr className="notice-board-table-header">
              <th className="title">Title</th>
              <th className="status">Status</th>
              <th className="origin">Origin</th>
              <th className="sent">Sent</th>
              <th className="remove" />
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              const { title, sent, status, origin } = item;
              return (
                <tr key={index} className="data-rows">
                  <td className="title">{title}</td>
                  <td className="status">
                    <Chip
                      size="small"
                      sx={{
                        fontSize: '1.2rem',
                        padding: '0.5rem 0.5rem',
                        letterSpacing: '0.5px',
                        backgroundColor:
                          status === 'Pending' ? '#FF9500' : '#CE0610',
                        color: 'white',
                      }}
                      label={status}
                    />
                  </td>
                  <td className="origin">{origin}</td>
                  <td className="sent">
                    <span>{sent.date}</span>
                    <span
                      style={{
                        color: 'gray',
                      }}
                    >
                      {sent.time}
                    </span>
                  </td>
                  <td className="remove">
                    <Tooltip title="remove">
                      <button type="button">
                        <FontAwesomeIcon
                          icon={faXmark}
                          className="remove-button"
                        />
                      </button>
                    </Tooltip>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Paper>
      <Dialog
        open={isDialogOpen}
        TransitionComponent={Transition}
        onClose={toggleDialogVisibility}
        maxWidth="sm"
        fullWidth
      >
        <Stack
          direction="column"
          alignItems="center"
          sx={{
            padding: '1.8rem',
            width: '100%',
          }}
          spacing={3}
        >
          <Stack
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              width: '100%',
              padding: '0.8rem 0.2rem',
            }}
          >
            <Typography
              sx={{
                fontSize: '2rem',
                fontWeight: 600,
              }}
            >
              Create Notice
            </Typography>
            <IconButton
              sx={{
                width: '30px',
                height: '30px',
              }}
              size="small"
              onClick={toggleDialogVisibility}
            >
              <FontAwesomeIcon icon={faXmark} />
            </IconButton>
          </Stack>
          <FormInput label="Notice Title" />
          <FormAutoComplete label="Origin of notice" value="" options={[]} />
          <FormTextInput label="Message" />

          <Stack
            direction="row"
            justifyContent="end"
            spacing={2}
            sx={{
              width: '100%',
            }}
          >
            <Button
              sx={{
                width: '25%',
              }}
              onClick={toggleDialogVisibility}
              variant="outlined"
              color="error"
            >
              Cancel
            </Button>
            <Button
              sx={{
                width: '25%',
              }}
              onClick={toggleDialogVisibility}
            >
              Create
            </Button>
          </Stack>
        </Stack>
      </Dialog>
    </>
  );
}

export default NoticeBoard;
