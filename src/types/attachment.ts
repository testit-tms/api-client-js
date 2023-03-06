export interface AttachmentPut {
  id: string;
}

export interface Attachment {
  fileId: string;
  type: string;
  size: number;
  name: string;
  createDate?: string;
  modifiedDate?: string;
  createdById?: string;
  modifiedById?: string;
  id?: string;
}
