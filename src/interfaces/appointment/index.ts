import { UserInterface } from 'interfaces/user';
import { HealthcareProviderInterface } from 'interfaces/healthcare-provider';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  date: any;
  time: any;
  status: string;
  user_id: string;
  healthcare_provider_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  healthcare_provider?: HealthcareProviderInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  user_id?: string;
  healthcare_provider_id?: string;
  organization_id?: string;
}
