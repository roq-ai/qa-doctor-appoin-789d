import * as yup from 'yup';

export const patientValidationSchema = yup.object().shape({
  dob: yup.date().nullable(),
  gender: yup.string().nullable(),
  medical_history: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
