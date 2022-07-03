import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/pro-regular-svg-icons';
import { getItem } from '@app/utilities/localStorageControl';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [dateTime, setDateTime] = React.useState(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const dateTimeString = moment(new Date()).format(
        'ddd, MMM Do YYYY, hh:mm a'
      );
      setDateTime(dateTimeString);
    }, 1000);
    // return clearInterval(interval);
  }, []);

  return (
    <Stack
      sx={{
        padding: '3rem 0rem',
        borderBottom: '1px solid',
        borderColor: '#CCCCCC',
        paddingBottom: '5px',
        marginBottom: '3rem',
      }}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      {location.pathname !== '/admin/home' && (
        <Button
          onClick={() => navigate(-1)}
          sx={{
            width: '18%',
          }}
        >
          <FontAwesomeIcon icon={faArrowLeftLong} fontSize="14px" />
          <div
            style={{
              flexGrow: 1,
            }}
          />
          Back
        </Button>
      )}
      {location.pathname === '/admin/home' && (
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: {
              lg: '2.4rem',
              sm: '20px',
            },
          }}
        >
          Home
        </Typography>
      )}
      <Typography fontWeight={600} fontSize="1.8rem">
        Welcome Back Emmanuel Kimaswa
      </Typography>

      <Typography
        fontWeight={600}
        sx={{
          width: {
            lg: '20%',
            sm: '30%',
          },
          display: 'flex',
          justifyContent: 'end',
          fontSize: {
            lg: '17px',
            sm: '16px',
          },
        }}
      >
        {dateTime}
      </Typography>
    </Stack>
  );
}

export default Header;
