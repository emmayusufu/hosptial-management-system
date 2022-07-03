import * as Yup from 'yup';

const requiredField = 'This field must not be empty';

export const facilityOwnerValidationSchema = Yup.object().shape({
  name: Yup.string().required(requiredField),
});
