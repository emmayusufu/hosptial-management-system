import * as React from 'react';
import AuthenticationLayout from '@app/layouts/authentication-layout/AuthenticationLayout';
import ResetPassword from '@app/static/svg/resetPassword.svg';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/pro-regular-svg-icons';
import TextInput from '@app/shared-components/text-input/TextInput';
import usePageTitle from '@app/hooks/usePageTitle';
import { useAuthenticationContext } from '@app/context-providers/authentication-context-provider/AuthenticationContextProvider';
import InvalidCredentialsDialog from '../components/InvalidCredentialsDialog';
import { Field, Form, Formik } from 'formik';
import {
  forgotPasswordValidationSchema,
} from '../utilities/validation-schemas/authentication-validation-schema';
import _ from 'lodash';

function ForgotPassword() {
  usePageTitle('Forgot password');
  const navigate = useNavigate();
  const authContext = useAuthenticationContext();

  const [invalidEmailAlert, setInvalidEmailAlert] = React.useState(false);
  const [values, setValues] = React.useState({
    email: '',
  });

  const handleValuesChanged = (key) => (event) => {
    setValues({
      ...values,
      [key]: event.target.value,
    });
  };

  const handleSubmit = (formValues) => {
    if (_.some(formValues, _.isEmpty)) {
      return false;
    }

    authContext.sendPasswordRequestEmailHandler(
      {
        email: '',
      },
      (responseStatus) => {
        if (responseStatus !== 200) {
          navigate('/answer-security-questions');
        } else {
          setInvalidEmailAlert(true);
        }
      }
    );
    return false;
  };

  return (
    <AuthenticationLayout svg={ResetPassword}>
      <InvalidCredentialsDialog
        title="Invalid Email Credentials"
        description="Please Check Your Credentials and Try Again!"
        open={invalidEmailAlert}
        onClose={() => setInvalidEmailAlert(false)}
      />
      <Stack direction="column" spacing={1}>
        <Typography
          textAlign="center"
          color="purple"
          fontSize="1.5rem"
          letterSpacing="0.5px"
        >
          Enter Email
        </Typography>
        <Typography textAlign="center" fontSize="1.35rem">
          No worries, We will Send You Reset Instructions
        </Typography>
      </Stack>

      <br />

      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={forgotPasswordValidationSchema}
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
                id="email"
                fullWidth
                name="email"
                placeholder="Enter Your Email"
                type="email"
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <Button type="submit" onClick={handleSubmit} fullWidth>
                Submit
              </Button>
              <Button
                onClick={() => navigate('/')}
                variant="text"
                fullWidth
                startIcon={
                  <FontAwesomeIcon icon={faArrowLeftLong} fontSize="1.8rem" />
                }
              >
                Back To Login
              </Button>
            </Form>
          );
        }}
      </Formik>
    </AuthenticationLayout>
  );
}

export default ForgotPassword;
