import * as React from 'react';
import AuthenticationLayout from '@app/layouts/authentication-layout/AuthenticationLayout';
import ResetPassword from '@app/static/svg/resetPassword.svg';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/pro-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import TextInput from '@app/shared-components/text-input/TextInput';
import usePageTitle from '@app/hooks/usePageTitle';
import { useAuthenticationContext } from '@app/context-providers/authentication-context-provider/AuthenticationContextProvider';
import _ from 'lodash';
import InvalidCredentialsDialog from '../components/InvalidCredentialsDialog';
import { Field, Form, Formik } from 'formik';
import { securityQnsValidationSchema } from '../utilities/validation-schemas/authentication-validation-schema';

function AnswerSecurityQuestions() {
  usePageTitle('Security Questions');
  const [values, setValues] = React.useState({
    question_one: '',
    question_two: '',
    question_three: '',
  });

  const [invalidSecurityQnsAlert, setInvalidSecurityQnsAlert] = React.useState(false);

  const authContext = useAuthenticationContext();

  const handleValuesChanged = (key) => (event) => {
    setValues({
      ...values,
      [key]: event.target.value,
    });
  };

  const navigate = useNavigate();

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
          // setInvalidSecurityQnsAlert(true);
          navigate('/set-new-password');
        }
      }
    );
    return false;
  };

  return (
    <AuthenticationLayout svg={ResetPassword}>
      <InvalidCredentialsDialog
        title="Incorrect Answers "
        description="The answers you have entered are incorrect.
        Please check your answers and Try Again!"
        open={invalidSecurityQnsAlert}
        onClose={() => setInvalidSecurityQnsAlert(false)}
      />
      <div
        className="font-medium text-[15px] text-[#782878] text-[14px]"
        style={{
          textAlign: 'center',
        }}
      >
        Answer Security Questions
      </div>
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
              <Button type="submit" onClick={handleSubmit} fullWidth>
                Submit
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

export default AnswerSecurityQuestions;
