import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/pro-regular-svg-icons';
import usePageTitle from '@app/hooks/usePageTitle';

function PageNotFound() {
  const navigate = useNavigate();
  usePageTitle('404');
  return (
    <Stack
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      spacing="4rem"
      sx={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <Typography
        sx={{
          fontSize: '1.6rem',
        }}
      >
        Page Not Found
      </Typography>

      <Button
        variant="outlined"
        sx={{
          width: '20%',
          fontSize: '1.4rem',
        }}
        onClick={() => navigate(-1)}
      >
        <FontAwesomeIcon
          icon={faArrowLeftLong}
          fontSize="1.6rem"
          style={{
            marginRight: '1.6rem',
          }}
        />
        Back
      </Button>
    </Stack>
  );
}

export default PageNotFound;
