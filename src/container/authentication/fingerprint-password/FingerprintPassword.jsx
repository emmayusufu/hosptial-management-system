import * as React from 'react';
import Layout from '@app/layouts/authentication-layout/AuthenticationLayout';
import ResetPassword from '@app/static/svg/resetPassword.svg';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/pro-regular-svg-icons';
import TextInput from '@app/shared-components/text-input/TextInput';
import usePageTitle from '@app/hooks/usePageTitle';

function FingerprintUsername() {
  usePageTitle('Fingerprint Password');
  const navigate = useNavigate();

  const [values, setValues] = React.useState({
    username: '',
  });

  const handleValuesChanged = (key) => (event) => {
    setValues({
      ...values,
      [key]: event.target.value,
    });
  };

  const handleSubmit = () => {
    navigate('/fingerprint-password');
  };

  return (
    <Layout svg={ResetPassword}>
      <Stack direction="column" spacing={1}>
        <Typography textAlign="center" color="purple" fontSize="1.5rem">
          Enter Password
        </Typography>
        <Typography textAlign="center" fontSize="1.4rem">
          Use Password To Login
        </Typography>
      </Stack>
      <br />
      <TextInput
        id="email"
        name="email"
        fullWidth
        onChange={handleValuesChanged('email')}
        placeholder="Enter Password"
        type="email"
      />
      <Button onClick={handleSubmit} fullWidth>
        Login
      </Button>
      <Button
        onClick={() => navigate('/')}
        variant="text"
        fullWidth
        startIcon={<FontAwesomeIcon icon={faArrowLeftLong} fontSize="1.8rem" />}
      >
        Back To Login
      </Button>
    </Layout>
  );
}

export default FingerprintUsername;
