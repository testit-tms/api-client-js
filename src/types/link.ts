export type LinkType =
  | 'Related'
  | 'BlockedBy'
  | 'Defect'
  | 'Issue'
  | 'Requirement'
  | 'Repository';

export interface LinkPost {
  title?: string;
  url: string;
  description?: string;
  type?: LinkType;
  hasInfo?: boolean;
}

export interface LinkPut {
  id?: string;
  title?: string;
  url: string;
  description?: string;
  type?: LinkType;
  hasInfo?: boolean;
}

export interface Link {
  id?: string;
  title?: string;
  url: string;
  description?: string;
  type?: LinkType;
  hasInfo?: boolean;
}
