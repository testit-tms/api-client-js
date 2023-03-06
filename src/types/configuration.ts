import { Capabilities } from './capabilities';

export interface Configuration {
  description?: string;
  isActive?: boolean;
  capabilities: Capabilities;
  projectId?: string;
  isDefault?: boolean;
  name?: string;
  createdDate?: string;
  modifiedDate?: string;
  createdById?: string;
  modifiedById?: string;
  globalId?: number;
  id?: number;
  isDeleted?: boolean;
}
