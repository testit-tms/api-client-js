export * from './attachmentsApi';
import { AttachmentsApi } from './attachmentsApi';
export * from './autoTestsApi';
import { AutoTestsApi } from './autoTestsApi';
export * from './backgroundJobsApi';
import { BackgroundJobsApi } from './backgroundJobsApi';
export * from './configurationsApi';
import { ConfigurationsApi } from './configurationsApi';
export * from './customAttributeTemplatesApi';
import { CustomAttributeTemplatesApi } from './customAttributeTemplatesApi';
export * from './customAttributesApi';
import { CustomAttributesApi } from './customAttributesApi';
export * from './notificationsApi';
import { NotificationsApi } from './notificationsApi';
export * from './parametersApi';
import { ParametersApi } from './parametersApi';
export * from './projectsApi';
import { ProjectsApi } from './projectsApi';
export * from './sectionsApi';
import { SectionsApi } from './sectionsApi';
export * from './tagsApi';
import { TagsApi } from './tagsApi';
export * from './testPlansApi';
import { TestPlansApi } from './testPlansApi';
export * from './testPointsApi';
import { TestPointsApi } from './testPointsApi';
export * from './testResultsApi';
import { TestResultsApi } from './testResultsApi';
export * from './testRunsApi';
import { TestRunsApi } from './testRunsApi';
export * from './testSuitesApi';
import { TestSuitesApi } from './testSuitesApi';
export * from './webhooksApi';
import { WebhooksApi } from './webhooksApi';
export * from './webhooksLogsApi';
import { WebhooksLogsApi } from './webhooksLogsApi';
export * from './workItemsApi';
import { WorkItemsApi } from './workItemsApi';
export * from './workItemsCommentsApi';
import { WorkItemsCommentsApi } from './workItemsCommentsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AttachmentsApi, AutoTestsApi, BackgroundJobsApi, ConfigurationsApi, CustomAttributeTemplatesApi, CustomAttributesApi, NotificationsApi, ParametersApi, ProjectsApi, SectionsApi, TagsApi, TestPlansApi, TestPointsApi, TestResultsApi, TestRunsApi, TestSuitesApi, WebhooksApi, WebhooksLogsApi, WorkItemsApi, WorkItemsCommentsApi];
