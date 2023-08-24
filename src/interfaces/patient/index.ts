import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface PatientInterface {
  id?: string;
  dob?: any;
  gender?: string;
  medical_history?: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface PatientGetQueryInterface extends GetQueryInterface {
  id?: string;
  gender?: string;
  medical_history?: string;
  user_id?: string;
  organization_id?: string;
}
