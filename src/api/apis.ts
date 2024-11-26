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
export * from './projectAttributeTemplatesApi';
import { ProjectAttributeTemplatesApi } from './projectAttributeTemplatesApi';
export * from './projectAttributesApi';
import { ProjectAttributesApi } from './projectAttributesApi';
export * from './projectConfigurationsApi';
import { ProjectConfigurationsApi } from './projectConfigurationsApi';
export * from './projectSectionsApi';
import { ProjectSectionsApi } from './projectSectionsApi';
export * from './projectSettingsApi';
import { ProjectSettingsApi } from './projectSettingsApi';
export * from './projectTestPlanAttributesApi';
import { ProjectTestPlanAttributesApi } from './projectTestPlanAttributesApi';
export * from './projectTestPlansApi';
import { ProjectTestPlansApi } from './projectTestPlansApi';
export * from './projectWorkItemsApi';
import { ProjectWorkItemsApi } from './projectWorkItemsApi';
export * from './projectsApi';
import { ProjectsApi } from './projectsApi';
export * from './searchApi';
import { SearchApi } from './searchApi';
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
export * from './usersApi';
import { UsersApi } from './usersApi';
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

export const APIS = [AttachmentsApi, AutoTestsApi, BackgroundJobsApi, ConfigurationsApi, CustomAttributeTemplatesApi, CustomAttributesApi, NotificationsApi, ParametersApi, ProjectAttributeTemplatesApi, ProjectAttributesApi, ProjectConfigurationsApi, ProjectSectionsApi, ProjectSettingsApi, ProjectTestPlanAttributesApi, ProjectTestPlansApi, ProjectWorkItemsApi, ProjectsApi, SearchApi, SectionsApi, TagsApi, TestPlansApi, TestPointsApi, TestResultsApi, TestRunsApi, TestSuitesApi, UsersApi, WebhooksApi, WebhooksLogsApi, WorkItemsApi, WorkItemsCommentsApi];
