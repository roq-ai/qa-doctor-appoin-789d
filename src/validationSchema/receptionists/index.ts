import * as yup from 'yup';

export const receptionistValidationSchema = yup.object().shape({
  shift: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
