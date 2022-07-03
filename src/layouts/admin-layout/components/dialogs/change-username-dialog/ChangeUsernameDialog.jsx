/* eslint-disable react/prop-types */
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { Formik, Form, Field } from 'formik';
import PasswordInput from '@app/shared-components/password-input/PasswordInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/pro-solid-svg-icons';

function ChangeUsernameDialog(props) {
  const { toggleDialogState, open, toggleUserNameDialog } = props;
  return (
    <Dialog open={open} maxWidth="sm" fullWidth scroll="body">
      <Stack
        direction="column"
        spacing={3}
        sx={{
          margin: '2rem',
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography fontSize="1.5rem">Change Username</Typography>
          <IconButton
            sx={{
              width: '30px',
              height: '30px',
            }}
            size="small"
            onClick={() => toggleUserNameDialog()}
          >
            <FontAwesomeIcon icon={faXmark} />
          </IconButton>
        </Stack>
        <Formik
          initialValues={{
            username: '',
            password: '',
            fingerprint: '',
          }}
          // validationSchema={}
          onSubmit={() => { }}
          validateOnBlur
        >
          {({ errors, touched }) => {
            return (
              <Form
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}
              >
                <Field
                  as={PasswordInput}
                  placeholder="Enter Old Username"
                  id="username"
                  name="username"
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />
                <Field
                  as={PasswordInput}
                  name="password"
                  id="password"
                  placeholder="Enter New Username"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />

                <Stack direction="row" spacing={2} justifyContent="end">
                  <Button
                    onClick={() => toggleUserNameDialog()}
                    type="button"
                    fullWidth
                    variant="outlined"
                    color="error"
                    sx={{
                      width: '10rem',
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    fullWidth
                    sx={{
                      width: '10rem',
                    }}
                  >
                    Submit
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

export default ChangeUsernameDialog;
