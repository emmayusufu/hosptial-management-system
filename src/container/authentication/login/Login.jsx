/* eslint-disable react/jsx-one-expression-per-line */
import * as React from 'react';
import FingerPrint from '@app/static/svg/fingerprint.svg';
import AuthenticationLayout from '@app/layouts/authentication-layout/AuthenticationLayout';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useAuthenticationContext } from '@app/context-providers/authentication-context-provider/AuthenticationContextProvider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Formik, Form, Field } from 'formik';
import { loginValidationSchema } from '../utilities/validation-schemas/authentication-validation-schema';
import PasswordInput from '@app/shared-components/password-input/PasswordInput';
import TextInput from '@app/shared-components/text-input/TextInput';
import LoadingDialog from '../components/LoadingDialog';
import InvalidCredentialsDialog from '../components/InvalidCredentialsDialog';
import usePageTitle from '@app/hooks/usePageTitle';
import * as localStorageControl from '@app/utilities/localStorageControl';
import AccessBlockedDialog from '../components/AccessBlockedBlocked';
import moment from 'moment';

function Login() {
  usePageTitle('Login');

  const authenticationContext = useAuthenticationContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [dialogState, setDialogState] = React.useState({
    loading: false,
    invalidCredentials: false,
    accessBlocked: false,
  });

  const toggleDialogState = (key, value) => {
    setDialogState({ ...dialogState, [key]: value });
  };

  const checkInitialLogin = () => {
    const initialLoginInTime = localStorageControl.getItem('firstLogin');

    if (initialLoginInTime && moment().isSame(initialLoginInTime, 'day')) {
      localStorageControl.setItem('firstLogin', false);
    } else {
      localStorageControl.setItem('firstLogin', moment());
    }
  };

  const handleSubmit = (values) => {
    toggleDialogState('loading', true);

    toggleDialogState('loading', false);

    checkInitialLogin();
    localStorageControl.removeItem('loginFailedAttempts');
    localStorageControl.setItem('screenLock', false);
    const from = location.state?.from?.pathname || '/admin/home';

    navigate(from, { replace: true });
  };
  const screenLock = localStorageControl.getItem('screenLock');

  const handleDisabled = () => {
    const numberOfFailedAttempts = authenticationContext.loginFailedAttempts;
    if (numberOfFailedAttempts === 3 && !screenLock) {
      return true;
    }

    if (numberOfFailedAttempts === 3 && screenLock) {
      localStorageControl.removeItem('loginFailedAttempts');
      localStorageControl.removeItem('screenLock');
      return false;
    }
    return false;
  };

  return (
    <AuthenticationLayout>
      {dialogState.loading ? (
        <LoadingDialog open={dialogState.loading} />
      ) : dialogState.invalidCredentials ? (
        <InvalidCredentialsDialog
          title="Invalid Credentials"
          description="Please Check Your Credentials And Try Again"
          open={dialogState.invalidCredentials}
          onClose={() => toggleDialogState('invalidCredentials', false)}
        />
      ) : dialogState.accessBlocked ? (
        <AccessBlockedDialog
          open={dialogState.accessBlocked}
          toggleDialogState={toggleDialogState}
        />
      ) : null}

      <Typography textAlign="center" color="purple" fontSize="1.5rem">
        Member Login
      </Typography>
      <br />
      {authenticationContext.loginFailedAttempts &&
      authenticationContext.loginFailedAttempts < 3 ? (
        <Typography
          component="span"
          fontWeight={600}
          fontSize="1.3rem"
          color="red"
          letterSpacing=".8px"
        >
          {3 - authenticationContext.loginFailedAttempts} Attempts remaining
        </Typography>
      ) : null}
      <Formik
        initialValues={{
          username: '',
          password: '',
          fingerprint: '',
        }}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => {
          return (
            <Form
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
              }}
            >
              <Field
                as={TextInput}
                placeholder="Enter Username"
                id="username"
                name="username"
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
              />
              <Field
                as={PasswordInput}
                name="password"
                id="password"
                placeholder="Enter Password"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  fontSize: '12px',
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        '& .MuiSvgIcon-root': {
                          fontSize: 18,
                        },
                      }}
                    />
                  }
                  label={
                    <Typography fontSize="13px" color="black">
                      Remember Me
                    </Typography>
                  }
                />
                <Link to="/forgot-password">
                  <Typography fontSize="1.3rem" fontWeight={500} color="purple">
                    Forgot password
                  </Typography>
                </Link>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={4}>
                <Button disabled={handleDisabled()} type="submit" fullWidth>
                  Login
                </Button>
                <Typography fontSize="1.2rem" component="span">
                  OR
                </Typography>
                <div
                  style={{
                    width: '22rem',
                    cursor: 'pointer',
                  }}
                  onClick={() => navigate('fingerprint-username')}
                >
                  <img
                    src={FingerPrint}
                    alt=""
                    style={{
                      height: '100%',
                      width: '100%',
                      flexShrink: 0,
                    }}
                  />
                </div>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </AuthenticationLayout>
  );
}

export default Login;
