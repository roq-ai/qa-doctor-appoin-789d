import { AppointmentInterface } from 'interfaces/appointment';
import { HealthcareProviderInterface } from 'interfaces/healthcare-provider';
import { PatientInterface } from 'interfaces/patient';
import { ReceptionistInterface } from 'interfaces/receptionist';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  country?: string;
  appointment?: AppointmentInterface[];
  healthcare_provider?: HealthcareProviderInterface[];
  patient?: PatientInterface[];
  receptionist?: ReceptionistInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
    healthcare_provider?: number;
    patient?: number;
    receptionist?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
  country?: string;
}
