import * as React from 'react';
import AuthenticationLayout from '@app/layouts/authentication-layout/AuthenticationLayout';
import ResetPassword from '@app/static/svg/resetPassword.svg';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/pro-regular-svg-icons';
import usePageTitle from '@app/hooks/usePageTitle';
import Typography from '@mui/material/Typography';
import PasswordInput from '@app/shared-components/password-input/PasswordInput';
import { useAuthenticationContext } from '@app/context-providers/authentication-context-provider/AuthenticationContextProvider';
import PasswordResetSuccessDialog from '../components/PasswordResetSuccessDialog';
import _ from 'lodash';
import { Field, Form, Formik } from 'formik';
import { resetPasswordValidationSchema } from '../utilities/validation-schemas/authentication-validation-schema';

function SetNewPassword() {
  usePageTitle('Reset Password');
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    newPassword: '',
    newPasswordConfirmation: '',
  });
  const [open, setOpen] = React.useState(false);

  const authContext = useAuthenticationContext();

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

    authContext.setNewPasswordHandler(
      {
        password: values.newPassword,
        confirmPassword: values.newPasswordConfirmation,
      },
      (reponseStatus) => {
        if (reponseStatus === 200) {
          setOpen(true);
          setTimeout(() => {
            navigate('/');
          }, 3000);
        }
      }
    );
    return false;
  };

  return (
    <AuthenticationLayout svg={ResetPassword}>
      <PasswordResetSuccessDialog show={open} onCancel={() => setOpen(false)} />
      <Stack direction="column" spacing={2} alignItems="center">
        <Typography color="#782878" fontSize="1.4rem">
          Set New Password
        </Typography>
        <Typography
          fontSize="12px"
          textAlign="center"
          width="80%"
          marginLeft="auto"
          marginRight="auto"
        >
          You new password must be different from previously used passwords
        </Typography>
      </Stack>
      <Formik
        initialValues={{
          password1: '',
          password2: '',
        }}
        validationSchema={resetPasswordValidationSchema}
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
                as={PasswordInput}
                id="password1"
                name="password1"
                placeholder="New Password"
                type="password"
                error={touched.password1 && Boolean(errors.password1)}
                helperText={touched.password1 && errors.password1}
              />
              <Field
                as={PasswordInput}
                id="password2"
                name="password2"
                placeholder="Confirm Password"
                type="password"
                error={touched.password2 && Boolean(errors.password2)}
                helperText={touched.password2 && errors.password2}
              />
              <Button type="submit" onClick={handleSubmit} fullWidth>
                Reset Password
              </Button>
              <Button
                onClick={() => navigate('/')}
                variant="text"
                fullWidth
                startIcon={<FontAwesomeIcon icon={faArrowLeftLong} fontSize="1.8rem" />}
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

export default SetNewPassword;
