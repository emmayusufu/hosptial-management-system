/* eslint-disable react/prop-types */
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { Formik, Form, Field } from 'formik';
import PasswordInput from '@app/shared-components/password-input/PasswordInput';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as localStorageControl from '@app/utilities/localStorageControl';
import { loginValidationSchema } from '@app/container/authentication/utilities/validation-schemas/authentication-validation-schema';
import InvalidCredentialsDialog from '@app/container/authentication/components/InvalidCredentialsDialog';
import { useAuthenticationContext } from '@app/context-providers/authentication-context-provider/AuthenticationContextProvider';
import { useNavigate } from 'react-router-dom';

function SessionExpiredDialog(props) {
  const { toggleDialogState, open, onClose, logOutHandler } = props;
  const authenticationContext = useAuthenticationContext();
  const [openInvalidCredentialsDialog, setOpenInvalidCredentialsDialog] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    authenticationContext.loginHandler(
      {
        username: values.username,
        password: values.password,
        fingerprint: '',
      },
      (status) => {
        if (status === 200) {
          localStorageControl.removeItem('loginFailedAttempts');
          localStorageControl.removeItem('screenLock');
          onClose();
        } else if (status === undefined) {
          let loginFailedAttempts = localStorageControl.getItem(
            'loginFailedAttempts'
          );

          if (loginFailedAttempts) {
            if (loginFailedAttempts < 2) {
              setOpenInvalidCredentialsDialog(true);
            } else {
              localStorageControl.removeItem('loginFailedAttempts');
              localStorageControl.removeItem('user');
              window.location.href = '/';
            }

            if (loginFailedAttempts !== 3) {
              loginFailedAttempts += 1;
              authenticationContext.setLoginFailedAttempts(loginFailedAttempts);
              localStorageControl.setItem(
                'loginFailedAttempts',
                loginFailedAttempts
              );
            }
          } else {
            setOpenInvalidCredentialsDialog(true);
            authenticationContext.setLoginFailedAttempts(1);
            localStorageControl.setItem('loginFailedAttempts', 1);
          }
        }
      }
    );
  };

  return (
    <Dialog open={open} maxWidth="md" fullWidth scroll="body">
      <InvalidCredentialsDialog
        title="Invalid Credentials"
        description="Please Check Your Credentials And Try Again"
        open={openInvalidCredentialsDialog}
        onClose={() => setOpenInvalidCredentialsDialog(false)}
      />
      <Stack
        direction="column"
        spacing={3}
        alignItems="center"
        sx={{
          padding: '4rem 2rem',
          backgroundColor: '#F9F9F9',
          border: '2px solid #CE0610',
        }}
      >
        <Stack
          direction="column"
          spacing={1}
          alignItems="center"
          sx={{
            width: '80%',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              border: '2px solid purple',
              borderRadius: '50%',
              width: '10rem',
              height: '10rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
            }}
          >
            <Box
              sx={{
                border: '2px solid purple',
                borderRadius: '50%',
                width: '8rem',
                height: '8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography fontSize="5rem" fontWeight={600} color="purple">
                i
              </Typography>
            </Box>
          </Box>
          <Typography color="#CE0610" fontSize="3rem" fontWeight={600}>
            Session Expired
          </Typography>
          <br />
          <Typography fontSize="1.4rem">
            Your Session has expired due to inactivity. Please enter your
            password to stay signed in or log out. Otherwise, you will be logged
            out automatically.
          </Typography>
        </Stack>
        <Formik
          initialValues={{
            username: localStorageControl.getItem('user')?.userName,
            password: '',
            fingerprint: '',
          }}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
          validateOnBlur
        >
          {({ errors, touched }) => {
            return (
              <Form
                style={{
                  width: '80%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}
              >
                <Field
                  as={PasswordInput}
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />

                <Stack direction="row" spacing={2} justifyContent="center">
                  <Button
                    onClick={() => logOutHandler()}
                    type="button"
                    fullWidth
                    variant="outlined"
                    sx={{
                      width: '25%',
                      background: 'white',
                    }}
                  >
                    Log out
                  </Button>
                  <Button
                    type="submit"
                    fullWidth
                    sx={{
                      width: '25%',
                    }}
                  >
                    Login
                  </Button>
                </Stack>
              </Form>
            );
          }}
        </Formik>
      </Stack>
    </Dialog>
  );
}

export default SessionExpiredDialog;
