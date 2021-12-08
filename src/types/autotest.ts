import { LabelPost, LabelShort } from './label';
import { Link, LinkPost, LinkPut } from './link';
import { AutotestStep } from './autotestStep';

export interface AutotestPost {
  globalId?: number;
  isDeleted?: boolean;
  id?: string;
  createdDate?: string;
  modifiedDate?: string;
  createdById?: string;
  modifiedById?: string;
  mustBeApproved?: boolean;
  externalId: string;
  links?: LinkPost[];
  projectId: string;
  name: string;
  namespace?: string;
  classname?: string;
  steps?: AutotestStep[];
  setup?: AutotestStep[];
  teardown?: AutotestStep[];
  title?: string;
  description?: string;
  labels?: LabelPost[];
}

export interface AutotestPut {
  id?: string;
  externalId: string;
  links?: LinkPost[];
  projectId: string;
  name: string;
  namespace?: string;
  classname?: string;
  steps?: AutotestStep[];
  setup?: AutotestStep[];
  teardown?: AutotestStep[];
  title?: string;
  description?: string;
  labels?: LabelPost[];
}

export interface Autotest {
  globalId?: number;
  isDeleted?: boolean;
  id?: string;
  createdDate?: string;
  modifiedDate?: string;
  createdById?: string;
  modifiedById?: string;
  mustBeApproved?: boolean;
  externalId: string;
  links?: LinkPut[];
  projectId: string;
  name: string;
  namespace?: string;
  classname?: string;
  steps?: AutotestStep[];
  setup?: AutotestStep[];
  teardown?: AutotestStep[];
  title?: string;
  description?: string;
  labels?: LabelPost[];
}

export interface AutotestGet {
  externalId?: string;
  links?: Link[];
  projectId?: string;
  name?: string;
  namespace?: string;
  classname?: string;
  steps?: AutotestStep[];
  setup?: AutotestStep[];
  teardown: AutotestStep[];
  global?: number;
  createdDate?: string;
  modifiedDate?: string;
  createdById?: string;
  modifiedById?: string;
  labels?: LabelShort[];
  id?: string;
  isDeleted?: boolean;
}

export interface AutotestQuery {
  projectId?: string;
  externalId?: string;
  globalId?: number;
  namespace?: string;
  isNamespaceNull?: boolean;
  classname?: string;
  isClassnameNull?: boolean;
  isDeleted?: boolean;
  labels?: string[];
  skip?: number;
  take?: number;
  orderBy?: string;
  searchField?: string;
  searchValue?: string;
}
