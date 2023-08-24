interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Office Manager', 'Healthcare Provider', 'Receptionist'],
  tenantName: 'Organization',
  applicationName: 'QA Doctor Appointment System v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
