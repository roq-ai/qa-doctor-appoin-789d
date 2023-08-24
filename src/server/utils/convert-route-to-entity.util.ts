const mapping: Record<string, string> = {
  appointments: 'appointment',
  'healthcare-providers': 'healthcare_provider',
  organizations: 'organization',
  patients: 'patient',
  receptionists: 'receptionist',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
