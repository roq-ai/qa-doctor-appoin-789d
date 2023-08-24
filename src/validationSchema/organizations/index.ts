import * as yup from 'yup';

export const organizationValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  address: yup.string().nullable(),
  city: yup.string().nullable(),
  state: yup.string().nullable(),
  zip_code: yup.string().nullable(),
  name: yup.string().required(),
  country: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
