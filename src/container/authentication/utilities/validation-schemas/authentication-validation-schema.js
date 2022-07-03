import * as Yup from 'yup';

const requiredField = 'This field must not be empty';

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string().required(requiredField),
  password: Yup.string().required(requiredField),
});
export const securityQnsValidationSchema = Yup.object().shape({
  question_one: Yup.string().required(requiredField),
  question_two: Yup.string().required(requiredField),
  question_three: Yup.string().required(requiredField)
});

export const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string().required(requiredField),
});

export const resetPasswordValidationSchema = Yup.object().shape({
  password1: Yup.string().required(requiredField).matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
  ),
  password2: Yup.string().required(requiredField).oneOf([Yup.ref('password1')], 'Passwords must match'),
});
