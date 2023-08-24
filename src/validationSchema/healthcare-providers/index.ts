import * as yup from 'yup';

export const healthcareProviderValidationSchema = yup.object().shape({
  specialization: yup.string().required(),
  experience: yup.number().integer().nullable(),
  qualification: yup.string().nullable(),
  availability: yup.boolean().nullable(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
