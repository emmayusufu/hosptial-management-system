/* eslint-disable react/prop-types */
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { Formik, Form, Field } from 'formik';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/pro-solid-svg-icons';
import * as localStorageControl from '@app/utilities/localStorageControl';
import TextInput from '@app/shared-components/text-input/TextInput';
import { securityQnsValidationSchema } from '@app/container/authentication/utilities/validation-schemas/authentication-validation-schema';
import { useNavigate } from 'react-router-dom';
import { useAuthenticationContext } from '@app/context-providers/authentication-context-provider/AuthenticationContextProvider';
import _ from 'lodash';
import InvalidCredentialsDialog from '@app/container/authentication/components/InvalidCredentialsDialog';
import ChangeUsernameDialog from '../change-username-dialog/ChangeUsernameDialog';

function AnswerSecurityQuestionsDialog(props) {
  const { open, toggleDialogState } = props;

  const title = localStorageControl.getItem('profile');

  const [values, setValues] = React.useState({
    question_one: '',
    question_two: '',
    question_three: '',
  });

  const [invalidSecurityQnsAlert, setInvalidSecurityQnsAlert] = React.useState(false);
  const [openUserNameDialog, setOpenUserNameDialog] = React.useState(false);

  const authContext = useAuthenticationContext();
  const navigate = useNavigate();

  const toggleChangeUserNameDialog = () => {
    if (openUserNameDialog) {
      setOpenUserNameDialog(false);
    } else {
      setOpenUserNameDialog(true);
    }
  };

  const handleSubmit = (formValues) => {
    if (_.some(formValues, _.isEmpty)) {
      return false;
    }
    authContext.sendQuestionsResponseHandler(
      {
        answer_one: formValues.question_one,
        answer_two: formValues.question_two,
        answer_three: formValues.question_three,
      },
      (reponseStatus) => {
        if (reponseStatus !== 200) {
          // toggleDialogState('answerSecurityQuestions', false);
          // setOpenUserNameDialog(true);
          // setInvalidSecurityQnsAlert(true);
          // navigate('/set-new-password');
        }
      }
    );
    return false;
  };

  return (
    <>
      <ChangeUsernameDialog open={openUserNameDialog} toggleUserNameDialog={toggleChangeUserNameDialog} />
      <Dialog open={open} maxWidth="sm" fullWidth scroll="body">
        <InvalidCredentialsDialog
          title="Incorrect Answers "
          description="The answers you have entered are incorrect.
        Please check your answers and Try Again!"
          open={invalidSecurityQnsAlert}
          onClose={() => setInvalidSecurityQnsAlert(false)}
        />
        <Stack
          direction="column"
          alignItems="center"
          spacing={3}
          sx={{
            margin: '4rem',
          }}
        >
          <Stack
            direction="row"
            justifyContent="end"
            sx={{
              width: '100%',
            }}
          >
            <IconButton
              sx={{
                width: '30px',
                height: '30px',
              }}
              size="small"
              onClick={() => toggleDialogState('answerSecurityQuestions', false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </IconButton>
          </Stack>
          <Typography fontWeight={900} fontSize="2rem">
            {title}
          </Typography>
          <Typography fontWeight={600} fontSize="2.1rem" color="purple">
            Answer All Security Questions
          </Typography>
          <Formik
            initialValues={{
              question_one: '',
              question_two: '',
              question_three: '',
            }}
            validationSchema={securityQnsValidationSchema}
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
                    id="question_one"
                    name="question_one"
                    placeholder="What is the Middle Name of Your Mother?"
                    type="question_one"
                    error={touched.question_one && Boolean(errors.question_one)}
                    helperText={touched.question_one && errors.question_one}
                  />
                  <Field
                    as={TextInput}
                    id="question_two"
                    name="question_two"
                    placeholder="What is the Name of Your S3 Math Teacher?"
                    type="question_two"
                    error={touched.question_two && Boolean(errors.question_two)}
                    helperText={touched.question_two && errors.question_two}
                  />
                  <Field
                    as={TextInput}
                    id="question_three"
                    name="question_three"
                    placeholder="What is your Favourite Story Book?"
                    type="question_three"
                    error={touched.question_three && Boolean(errors.question_three)}
                    helperText={touched.question_three && errors.question_three}
                  />
                  <Stack direction="row" spacing={2} justifyContent="end">
                    <Button type="submit" fullWidth>
                      Submit
                    </Button>
                  </Stack>
                </Form>
              );
            }}
          </Formik>
        </Stack>
      </Dialog>
    </>
  );
}

export default AnswerSecurityQuestionsDialog;
