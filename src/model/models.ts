import localVarRequest from 'request';

export * from './apiV2AttachmentsPostRequest';
export * from './attachmentChangeViewModel';
export * from './attachmentChangeViewModelArrayWorkItemChangedFieldViewModel';
export * from './attachmentModel';
export * from './attachmentModelAutoTestStepResultsModel';
export * from './attachmentPutModel';
export * from './attachmentPutModelAutoTestStepResultsModel';
export * from './attachmentSubGetModel';
export * from './autoTestAverageDurationModel';
export * from './autoTestChangeViewModel';
export * from './autoTestChangeViewModelArrayWorkItemChangedFieldViewModel';
export * from './autoTestIdModel';
export * from './autoTestModel';
export * from './autoTestModelV2GetModel';
export * from './autoTestNamespaceModel';
export * from './autoTestPostModel';
export * from './autoTestPutModel';
export * from './autoTestResultsForTestRunModel';
export * from './autoTestShortModel';
export * from './autoTestStepModel';
export * from './autotestFilterModel';
export * from './autotestHistoricalResultSelectModel';
export * from './autotestResultHistoricalGetModel';
export * from './autotestResultOutcome';
export * from './autotestResultReasonSubGetModel';
export * from './autotestSelectModel';
export * from './autotestsExtractionModel';
export * from './autotestsSelectModel';
export * from './availableTestResultOutcome';
export * from './backgroundJobAttachmentModel';
export * from './backgroundJobModel';
export * from './backgroundJobState';
export * from './backgroundJobType';
export * from './booleanNullableTestPlanChangedFieldViewModel';
export * from './booleanTestPlanChangedFieldViewModel';
export * from './booleanWorkItemChangedFieldViewModel';
export * from './configurationByParametersModel';
export * from './configurationModel';
export * from './configurationPostModel';
export * from './configurationPutModel';
export * from './configurationSelectModel';
export * from './customAttributeChangeModel';
export * from './customAttributeGetModel';
export * from './customAttributeModel';
export * from './customAttributeOptionModel';
export * from './customAttributeOptionPostModel';
export * from './customAttributePostModel';
export * from './customAttributePutModel';
export * from './customAttributeSearchQueryModel';
export * from './customAttributeTemplateModel';
export * from './customAttributeTemplatePostModel';
export * from './customAttributeTemplatePutModel';
export * from './customAttributeTemplateSearchQueryModel';
export * from './customAttributeTestPlanProjectRelationPutModel';
export * from './customAttributeTypesEnum';
export * from './dateTimeRangeSelectorModel';
export * from './deletionState';
export * from './externalLinkModel';
export * from './failureCategoryModel';
export * from './failureClassModel';
export * from './failureClassRegexModel';
export * from './filterModel';
export * from './flakyBulkModel';
export * from './getXlsxTestPointsByTestPlanModel';
export * from './globalCustomAttributePostModel';
export * from './globalCustomAttributeUpdateModel';
export * from './guidExtractionModel';
export * from './guidWorkItemChangedFieldViewModel';
export * from './imageResizeType';
export * from './int32RangeSelectorModel';
export * from './int32WorkItemChangedFieldViewModel';
export * from './int64RangeSelectorModel';
export * from './int64WorkItemChangedFieldViewModel';
export * from './iterationModel';
export * from './iterationPutModel';
export * from './labelPostModel';
export * from './labelShortModel';
export * from './lastTestResultModel';
export * from './linkModel';
export * from './linkPostModel';
export * from './linkPutModel';
export * from './linkSubGetModel';
export * from './linkType';
export * from './noContentResult';
export * from './notificationModel';
export * from './notificationQueryFilterModel';
export * from './notificationTypeModel';
export * from './operation';
export * from './parameterFilterModel';
export * from './parameterGroupModel';
export * from './parameterIterationModel';
export * from './parameterModel';
export * from './parameterPostModel';
export * from './parameterPutModel';
export * from './parameterShortModel';
export * from './periodViewModel';
export * from './periodViewModelTestPlanChangedFieldViewModel';
export * from './problemDetails';
export * from './projectAttributesFilterModel';
export * from './projectCustomAttributeTemplateGetModel';
export * from './projectCustomAttributesTemplatesFilterModel';
export * from './projectExportQueryModel';
export * from './projectExportWithTestPlansPostModel';
export * from './projectModel';
export * from './projectPostModel';
export * from './projectPutModel';
export * from './projectShortestModel';
export * from './projectTestPlansFilterModel';
export * from './projectsFilterModel';
export * from './publicTestPointModel';
export * from './publicTestRunModel';
export * from './requestTypeModel';
export * from './searchAutoTestsQueryIncludesModel';
export * from './searchCustomAttributeTemplateGetModel';
export * from './searchWebhooksQueryModel';
export * from './sectionModel';
export * from './sectionMoveModel';
export * from './sectionPostModel';
export * from './sectionPutModel';
export * from './sectionRenameModel';
export * from './sectionWithStepsModel';
export * from './sharedStepChangeViewModel';
export * from './sharedStepModel';
export * from './sharedStepReferenceModel';
export * from './sharedStepReferenceSectionModel';
export * from './sharedStepReferenceSectionsQueryFilterModel';
export * from './sharedStepReferencesQueryFilterModel';
export * from './sharedStepResultModel';
export * from './shortConfiguration';
export * from './stepCommentModel';
export * from './stepModel';
export * from './stepPutModel';
export * from './stepResultModel';
export * from './stringArrayTestPlanChangedFieldViewModel';
export * from './stringArrayWorkItemChangedFieldViewModel';
export * from './stringTestPlanChangedFieldViewModel';
export * from './stringWorkItemChangedFieldViewModel';
export * from './tagShortModel';
export * from './testPlanChangeModel';
export * from './testPlanChangedFieldsViewModel';
export * from './testPlanGroupByStatus';
export * from './testPlanGroupByTestSuite';
export * from './testPlanGroupByTester';
export * from './testPlanGroupByTesterAndStatus';
export * from './testPlanLink';
export * from './testPlanModel';
export * from './testPlanPostModel';
export * from './testPlanPutModel';
export * from './testPlanShortModel';
export * from './testPlanStatusModel';
export * from './testPlanWithAnalyticModel';
export * from './testPlanWithTestSuiteTreeModel';
export * from './testPointAnalyticResult';
export * from './testPointByTestSuiteModel';
export * from './testPointChangeViewModel';
export * from './testPointChangeViewModelTestPlanChangedFieldViewModel';
export * from './testPointFilterModel';
export * from './testPointPutModel';
export * from './testPointResultModel';
export * from './testPointSelectModel';
export * from './testPointSelector';
export * from './testPointShortGetModel';
export * from './testPointShortModel';
export * from './testPointStatus';
export * from './testPointWithLastResultModel';
export * from './testPointsExtractionModel';
export * from './testResultChangeViewModel';
export * from './testResultChangeViewModelTestPlanChangedFieldViewModel';
export * from './testResultChronologyModel';
export * from './testResultHistoryReportModel';
export * from './testResultModel';
export * from './testResultOutcome';
export * from './testResultShortGetModel';
export * from './testResultShortModel';
export * from './testResultStepCommentPutModel';
export * from './testResultUpdateModel';
export * from './testResultV2GetModel';
export * from './testResultV2ShortModel';
export * from './testResultsFilterModel';
export * from './testResultsLocalFilterModel';
export * from './testResultsStatisticsGetModel';
export * from './testRunAnalyticResultModel';
export * from './testRunFillByAutoTestsPostModel';
export * from './testRunFillByConfigurationsPostModel';
export * from './testRunFillByWorkItemsPostModel';
export * from './testRunFilterModel';
export * from './testRunGroupByFailureClassModel';
export * from './testRunGroupByStatusModel';
export * from './testRunModel';
export * from './testRunSearchQueryModel';
export * from './testRunShortGetModel';
export * from './testRunShortModel';
export * from './testRunState';
export * from './testRunStatisticsErrorCategoriesGetModel';
export * from './testRunStatisticsStatusesGetModel';
export * from './testRunTestResultsPartialBulkSetModel';
export * from './testRunTestResultsSelectModel';
export * from './testRunV2GetModel';
export * from './testRunV2PostShortModel';
export * from './testRunV2PutModel';
export * from './testSuiteChangeViewModel';
export * from './testSuiteChangeViewModelTestPlanChangedFieldViewModel';
export * from './testSuiteType';
export * from './testSuiteV2GetModel';
export * from './testSuiteV2PostModel';
export * from './testSuiteV2PutModel';
export * from './testSuiteV2TreeModel';
export * from './testSuiteWithChildrenModel';
export * from './testSuiteWorkItemsSearchModel';
export * from './userRankModel';
export * from './userWithRankModel';
export * from './validateAntiForgeryTokenAttribute';
export * from './validationProblemDetails';
export * from './webHookEventType';
export * from './webHookEventTypeModel';
export * from './webHookLogModel';
export * from './webHookModel';
export * from './webHookPostModel';
export * from './workItemChangeModel';
export * from './workItemChangedAttributeViewModel';
export * from './workItemChangedFieldsViewModel';
export * from './workItemCommentModel';
export * from './workItemCommentPostModel';
export * from './workItemCommentPutModel';
export * from './workItemEntityTypes';
export * from './workItemFilterModel';
export * from './workItemIdModel';
export * from './workItemIdentifierModel';
export * from './workItemLikeModel';
export * from './workItemLinkChangeViewModel';
export * from './workItemLinkChangeViewModelArrayWorkItemChangedFieldViewModel';
export * from './workItemModel';
export * from './workItemMovePostModel';
export * from './workItemPostModel';
export * from './workItemPriorityModel';
export * from './workItemPutModel';
export * from './workItemSearchQueryModel';
export * from './workItemSelectModel';
export * from './workItemShortModel';
export * from './workItemStates';
export * from './workItemStepChangeViewModel';
export * from './workItemStepChangeViewModelArrayWorkItemChangedFieldViewModel';
export * from './workItemVersionModel';
export * from './workItemsExtractionModel';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ApiV2AttachmentsPostRequest } from './apiV2AttachmentsPostRequest';
import { AttachmentChangeViewModel } from './attachmentChangeViewModel';
import { AttachmentChangeViewModelArrayWorkItemChangedFieldViewModel } from './attachmentChangeViewModelArrayWorkItemChangedFieldViewModel';
import { AttachmentModel } from './attachmentModel';
import { AttachmentModelAutoTestStepResultsModel } from './attachmentModelAutoTestStepResultsModel';
import { AttachmentPutModel } from './attachmentPutModel';
import { AttachmentPutModelAutoTestStepResultsModel } from './attachmentPutModelAutoTestStepResultsModel';
import { AttachmentSubGetModel } from './attachmentSubGetModel';
import { AutoTestAverageDurationModel } from './autoTestAverageDurationModel';
import { AutoTestChangeViewModel } from './autoTestChangeViewModel';
import { AutoTestChangeViewModelArrayWorkItemChangedFieldViewModel } from './autoTestChangeViewModelArrayWorkItemChangedFieldViewModel';
import { AutoTestIdModel } from './autoTestIdModel';
import { AutoTestModel } from './autoTestModel';
import { AutoTestModelV2GetModel } from './autoTestModelV2GetModel';
import { AutoTestNamespaceModel } from './autoTestNamespaceModel';
import { AutoTestPostModel } from './autoTestPostModel';
import { AutoTestPutModel } from './autoTestPutModel';
import { AutoTestResultsForTestRunModel } from './autoTestResultsForTestRunModel';
import { AutoTestShortModel } from './autoTestShortModel';
import { AutoTestStepModel } from './autoTestStepModel';
import { AutotestFilterModel } from './autotestFilterModel';
import { AutotestHistoricalResultSelectModel } from './autotestHistoricalResultSelectModel';
import { AutotestResultHistoricalGetModel } from './autotestResultHistoricalGetModel';
import { AutotestResultOutcome } from './autotestResultOutcome';
import { AutotestResultReasonSubGetModel } from './autotestResultReasonSubGetModel';
import { AutotestSelectModel } from './autotestSelectModel';
import { AutotestsExtractionModel } from './autotestsExtractionModel';
import { AutotestsSelectModel } from './autotestsSelectModel';
import { AvailableTestResultOutcome } from './availableTestResultOutcome';
import { BackgroundJobAttachmentModel } from './backgroundJobAttachmentModel';
import { BackgroundJobModel } from './backgroundJobModel';
import { BackgroundJobState } from './backgroundJobState';
import { BackgroundJobType } from './backgroundJobType';
import { BooleanNullableTestPlanChangedFieldViewModel } from './booleanNullableTestPlanChangedFieldViewModel';
import { BooleanTestPlanChangedFieldViewModel } from './booleanTestPlanChangedFieldViewModel';
import { BooleanWorkItemChangedFieldViewModel } from './booleanWorkItemChangedFieldViewModel';
import { ConfigurationByParametersModel } from './configurationByParametersModel';
import { ConfigurationModel } from './configurationModel';
import { ConfigurationPostModel } from './configurationPostModel';
import { ConfigurationPutModel } from './configurationPutModel';
import { ConfigurationSelectModel } from './configurationSelectModel';
import { CustomAttributeChangeModel } from './customAttributeChangeModel';
import { CustomAttributeGetModel } from './customAttributeGetModel';
import { CustomAttributeModel } from './customAttributeModel';
import { CustomAttributeOptionModel } from './customAttributeOptionModel';
import { CustomAttributeOptionPostModel } from './customAttributeOptionPostModel';
import { CustomAttributePostModel } from './customAttributePostModel';
import { CustomAttributePutModel } from './customAttributePutModel';
import { CustomAttributeSearchQueryModel } from './customAttributeSearchQueryModel';
import { CustomAttributeTemplateModel } from './customAttributeTemplateModel';
import { CustomAttributeTemplatePostModel } from './customAttributeTemplatePostModel';
import { CustomAttributeTemplatePutModel } from './customAttributeTemplatePutModel';
import { CustomAttributeTemplateSearchQueryModel } from './customAttributeTemplateSearchQueryModel';
import { CustomAttributeTestPlanProjectRelationPutModel } from './customAttributeTestPlanProjectRelationPutModel';
import { CustomAttributeTypesEnum } from './customAttributeTypesEnum';
import { DateTimeRangeSelectorModel } from './dateTimeRangeSelectorModel';
import { DeletionState } from './deletionState';
import { ExternalLinkModel } from './externalLinkModel';
import { FailureCategoryModel } from './failureCategoryModel';
import { FailureClassModel } from './failureClassModel';
import { FailureClassRegexModel } from './failureClassRegexModel';
import { FilterModel } from './filterModel';
import { FlakyBulkModel } from './flakyBulkModel';
import { GetXlsxTestPointsByTestPlanModel } from './getXlsxTestPointsByTestPlanModel';
import { GlobalCustomAttributePostModel } from './globalCustomAttributePostModel';
import { GlobalCustomAttributeUpdateModel } from './globalCustomAttributeUpdateModel';
import { GuidExtractionModel } from './guidExtractionModel';
import { GuidWorkItemChangedFieldViewModel } from './guidWorkItemChangedFieldViewModel';
import { ImageResizeType } from './imageResizeType';
import { Int32RangeSelectorModel } from './int32RangeSelectorModel';
import { Int32WorkItemChangedFieldViewModel } from './int32WorkItemChangedFieldViewModel';
import { Int64RangeSelectorModel } from './int64RangeSelectorModel';
import { Int64WorkItemChangedFieldViewModel } from './int64WorkItemChangedFieldViewModel';
import { IterationModel } from './iterationModel';
import { IterationPutModel } from './iterationPutModel';
import { LabelPostModel } from './labelPostModel';
import { LabelShortModel } from './labelShortModel';
import { LastTestResultModel } from './lastTestResultModel';
import { LinkModel } from './linkModel';
import { LinkPostModel } from './linkPostModel';
import { LinkPutModel } from './linkPutModel';
import { LinkSubGetModel } from './linkSubGetModel';
import { LinkType } from './linkType';
import { NoContentResult } from './noContentResult';
import { NotificationModel } from './notificationModel';
import { NotificationQueryFilterModel } from './notificationQueryFilterModel';
import { NotificationTypeModel } from './notificationTypeModel';
import { Operation } from './operation';
import { ParameterFilterModel } from './parameterFilterModel';
import { ParameterGroupModel } from './parameterGroupModel';
import { ParameterIterationModel } from './parameterIterationModel';
import { ParameterModel } from './parameterModel';
import { ParameterPostModel } from './parameterPostModel';
import { ParameterPutModel } from './parameterPutModel';
import { ParameterShortModel } from './parameterShortModel';
import { PeriodViewModel } from './periodViewModel';
import { PeriodViewModelTestPlanChangedFieldViewModel } from './periodViewModelTestPlanChangedFieldViewModel';
import { ProblemDetails } from './problemDetails';
import { ProjectAttributesFilterModel } from './projectAttributesFilterModel';
import { ProjectCustomAttributeTemplateGetModel } from './projectCustomAttributeTemplateGetModel';
import { ProjectCustomAttributesTemplatesFilterModel } from './projectCustomAttributesTemplatesFilterModel';
import { ProjectExportQueryModel } from './projectExportQueryModel';
import { ProjectExportWithTestPlansPostModel } from './projectExportWithTestPlansPostModel';
import { ProjectModel } from './projectModel';
import { ProjectPostModel } from './projectPostModel';
import { ProjectPutModel } from './projectPutModel';
import { ProjectShortestModel } from './projectShortestModel';
import { ProjectTestPlansFilterModel } from './projectTestPlansFilterModel';
import { ProjectsFilterModel } from './projectsFilterModel';
import { PublicTestPointModel } from './publicTestPointModel';
import { PublicTestRunModel } from './publicTestRunModel';
import { RequestTypeModel } from './requestTypeModel';
import { SearchAutoTestsQueryIncludesModel } from './searchAutoTestsQueryIncludesModel';
import { SearchCustomAttributeTemplateGetModel } from './searchCustomAttributeTemplateGetModel';
import { SearchWebhooksQueryModel } from './searchWebhooksQueryModel';
import { SectionModel } from './sectionModel';
import { SectionMoveModel } from './sectionMoveModel';
import { SectionPostModel } from './sectionPostModel';
import { SectionPutModel } from './sectionPutModel';
import { SectionRenameModel } from './sectionRenameModel';
import { SectionWithStepsModel } from './sectionWithStepsModel';
import { SharedStepChangeViewModel } from './sharedStepChangeViewModel';
import { SharedStepModel } from './sharedStepModel';
import { SharedStepReferenceModel } from './sharedStepReferenceModel';
import { SharedStepReferenceSectionModel } from './sharedStepReferenceSectionModel';
import { SharedStepReferenceSectionsQueryFilterModel } from './sharedStepReferenceSectionsQueryFilterModel';
import { SharedStepReferencesQueryFilterModel } from './sharedStepReferencesQueryFilterModel';
import { SharedStepResultModel } from './sharedStepResultModel';
import { ShortConfiguration } from './shortConfiguration';
import { StepCommentModel } from './stepCommentModel';
import { StepModel } from './stepModel';
import { StepPutModel } from './stepPutModel';
import { StepResultModel } from './stepResultModel';
import { StringArrayTestPlanChangedFieldViewModel } from './stringArrayTestPlanChangedFieldViewModel';
import { StringArrayWorkItemChangedFieldViewModel } from './stringArrayWorkItemChangedFieldViewModel';
import { StringTestPlanChangedFieldViewModel } from './stringTestPlanChangedFieldViewModel';
import { StringWorkItemChangedFieldViewModel } from './stringWorkItemChangedFieldViewModel';
import { TagShortModel } from './tagShortModel';
import { TestPlanChangeModel } from './testPlanChangeModel';
import { TestPlanChangedFieldsViewModel } from './testPlanChangedFieldsViewModel';
import { TestPlanGroupByStatus } from './testPlanGroupByStatus';
import { TestPlanGroupByTestSuite } from './testPlanGroupByTestSuite';
import { TestPlanGroupByTester } from './testPlanGroupByTester';
import { TestPlanGroupByTesterAndStatus } from './testPlanGroupByTesterAndStatus';
import { TestPlanLink } from './testPlanLink';
import { TestPlanModel } from './testPlanModel';
import { TestPlanPostModel } from './testPlanPostModel';
import { TestPlanPutModel } from './testPlanPutModel';
import { TestPlanShortModel } from './testPlanShortModel';
import { TestPlanStatusModel } from './testPlanStatusModel';
import { TestPlanWithAnalyticModel } from './testPlanWithAnalyticModel';
import { TestPlanWithTestSuiteTreeModel } from './testPlanWithTestSuiteTreeModel';
import { TestPointAnalyticResult } from './testPointAnalyticResult';
import { TestPointByTestSuiteModel } from './testPointByTestSuiteModel';
import { TestPointChangeViewModel } from './testPointChangeViewModel';
import { TestPointChangeViewModelTestPlanChangedFieldViewModel } from './testPointChangeViewModelTestPlanChangedFieldViewModel';
import { TestPointFilterModel } from './testPointFilterModel';
import { TestPointPutModel } from './testPointPutModel';
import { TestPointResultModel } from './testPointResultModel';
import { TestPointSelectModel } from './testPointSelectModel';
import { TestPointSelector } from './testPointSelector';
import { TestPointShortGetModel } from './testPointShortGetModel';
import { TestPointShortModel } from './testPointShortModel';
import { TestPointStatus } from './testPointStatus';
import { TestPointWithLastResultModel } from './testPointWithLastResultModel';
import { TestPointsExtractionModel } from './testPointsExtractionModel';
import { TestResultChangeViewModel } from './testResultChangeViewModel';
import { TestResultChangeViewModelTestPlanChangedFieldViewModel } from './testResultChangeViewModelTestPlanChangedFieldViewModel';
import { TestResultChronologyModel } from './testResultChronologyModel';
import { TestResultHistoryReportModel } from './testResultHistoryReportModel';
import { TestResultModel } from './testResultModel';
import { TestResultOutcome } from './testResultOutcome';
import { TestResultShortGetModel } from './testResultShortGetModel';
import { TestResultShortModel } from './testResultShortModel';
import { TestResultStepCommentPutModel } from './testResultStepCommentPutModel';
import { TestResultUpdateModel } from './testResultUpdateModel';
import { TestResultV2GetModel } from './testResultV2GetModel';
import { TestResultV2ShortModel } from './testResultV2ShortModel';
import { TestResultsFilterModel } from './testResultsFilterModel';
import { TestResultsLocalFilterModel } from './testResultsLocalFilterModel';
import { TestResultsStatisticsGetModel } from './testResultsStatisticsGetModel';
import { TestRunAnalyticResultModel } from './testRunAnalyticResultModel';
import { TestRunFillByAutoTestsPostModel } from './testRunFillByAutoTestsPostModel';
import { TestRunFillByConfigurationsPostModel } from './testRunFillByConfigurationsPostModel';
import { TestRunFillByWorkItemsPostModel } from './testRunFillByWorkItemsPostModel';
import { TestRunFilterModel } from './testRunFilterModel';
import { TestRunGroupByFailureClassModel } from './testRunGroupByFailureClassModel';
import { TestRunGroupByStatusModel } from './testRunGroupByStatusModel';
import { TestRunModel } from './testRunModel';
import { TestRunSearchQueryModel } from './testRunSearchQueryModel';
import { TestRunShortGetModel } from './testRunShortGetModel';
import { TestRunShortModel } from './testRunShortModel';
import { TestRunState } from './testRunState';
import { TestRunStatisticsErrorCategoriesGetModel } from './testRunStatisticsErrorCategoriesGetModel';
import { TestRunStatisticsStatusesGetModel } from './testRunStatisticsStatusesGetModel';
import { TestRunTestResultsPartialBulkSetModel } from './testRunTestResultsPartialBulkSetModel';
import { TestRunTestResultsSelectModel } from './testRunTestResultsSelectModel';
import { TestRunV2GetModel } from './testRunV2GetModel';
import { TestRunV2PostShortModel } from './testRunV2PostShortModel';
import { TestRunV2PutModel } from './testRunV2PutModel';
import { TestSuiteChangeViewModel } from './testSuiteChangeViewModel';
import { TestSuiteChangeViewModelTestPlanChangedFieldViewModel } from './testSuiteChangeViewModelTestPlanChangedFieldViewModel';
import { TestSuiteType } from './testSuiteType';
import { TestSuiteV2GetModel } from './testSuiteV2GetModel';
import { TestSuiteV2PostModel } from './testSuiteV2PostModel';
import { TestSuiteV2PutModel } from './testSuiteV2PutModel';
import { TestSuiteV2TreeModel } from './testSuiteV2TreeModel';
import { TestSuiteWithChildrenModel } from './testSuiteWithChildrenModel';
import { TestSuiteWorkItemsSearchModel } from './testSuiteWorkItemsSearchModel';
import { UserRankModel } from './userRankModel';
import { UserWithRankModel } from './userWithRankModel';
import { ValidateAntiForgeryTokenAttribute } from './validateAntiForgeryTokenAttribute';
import { ValidationProblemDetails } from './validationProblemDetails';
import { WebHookEventType } from './webHookEventType';
import { WebHookEventTypeModel } from './webHookEventTypeModel';
import { WebHookLogModel } from './webHookLogModel';
import { WebHookModel } from './webHookModel';
import { WebHookPostModel } from './webHookPostModel';
import { WorkItemChangeModel } from './workItemChangeModel';
import { WorkItemChangedAttributeViewModel } from './workItemChangedAttributeViewModel';
import { WorkItemChangedFieldsViewModel } from './workItemChangedFieldsViewModel';
import { WorkItemCommentModel } from './workItemCommentModel';
import { WorkItemCommentPostModel } from './workItemCommentPostModel';
import { WorkItemCommentPutModel } from './workItemCommentPutModel';
import { WorkItemEntityTypes } from './workItemEntityTypes';
import { WorkItemFilterModel } from './workItemFilterModel';
import { WorkItemIdModel } from './workItemIdModel';
import { WorkItemIdentifierModel } from './workItemIdentifierModel';
import { WorkItemLikeModel } from './workItemLikeModel';
import { WorkItemLinkChangeViewModel } from './workItemLinkChangeViewModel';
import { WorkItemLinkChangeViewModelArrayWorkItemChangedFieldViewModel } from './workItemLinkChangeViewModelArrayWorkItemChangedFieldViewModel';
import { WorkItemModel } from './workItemModel';
import { WorkItemMovePostModel } from './workItemMovePostModel';
import { WorkItemPostModel } from './workItemPostModel';
import { WorkItemPriorityModel } from './workItemPriorityModel';
import { WorkItemPutModel } from './workItemPutModel';
import { WorkItemSearchQueryModel } from './workItemSearchQueryModel';
import { WorkItemSelectModel } from './workItemSelectModel';
import { WorkItemShortModel } from './workItemShortModel';
import { WorkItemStates } from './workItemStates';
import { WorkItemStepChangeViewModel } from './workItemStepChangeViewModel';
import { WorkItemStepChangeViewModelArrayWorkItemChangedFieldViewModel } from './workItemStepChangeViewModelArrayWorkItemChangedFieldViewModel';
import { WorkItemVersionModel } from './workItemVersionModel';
import { WorkItemsExtractionModel } from './workItemsExtractionModel';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AutotestResultOutcome": AutotestResultOutcome,
        "AvailableTestResultOutcome": AvailableTestResultOutcome,
        "BackgroundJobState": BackgroundJobState,
        "BackgroundJobType": BackgroundJobType,
        "CustomAttributeTypesEnum": CustomAttributeTypesEnum,
        "DeletionState": DeletionState,
        "FailureCategoryModel": FailureCategoryModel,
        "ImageResizeType": ImageResizeType,
        "LinkType": LinkType,
        "NotificationTypeModel": NotificationTypeModel,
        "RequestTypeModel": RequestTypeModel,
        "TestPlanStatusModel": TestPlanStatusModel,
        "TestPointStatus": TestPointStatus,
        "TestResultOutcome": TestResultOutcome,
        "TestRunState": TestRunState,
        "TestSuiteType": TestSuiteType,
        "WebHookEventType": WebHookEventType,
        "WebHookEventTypeModel": WebHookEventTypeModel,
        "WorkItemEntityTypes": WorkItemEntityTypes,
        "WorkItemPriorityModel": WorkItemPriorityModel,
        "WorkItemStates": WorkItemStates,
}

let typeMap: {[index: string]: any} = {
    "ApiV2AttachmentsPostRequest": ApiV2AttachmentsPostRequest,
    "AttachmentChangeViewModel": AttachmentChangeViewModel,
    "AttachmentChangeViewModelArrayWorkItemChangedFieldViewModel": AttachmentChangeViewModelArrayWorkItemChangedFieldViewModel,
    "AttachmentModel": AttachmentModel,
    "AttachmentModelAutoTestStepResultsModel": AttachmentModelAutoTestStepResultsModel,
    "AttachmentPutModel": AttachmentPutModel,
    "AttachmentPutModelAutoTestStepResultsModel": AttachmentPutModelAutoTestStepResultsModel,
    "AttachmentSubGetModel": AttachmentSubGetModel,
    "AutoTestAverageDurationModel": AutoTestAverageDurationModel,
    "AutoTestChangeViewModel": AutoTestChangeViewModel,
    "AutoTestChangeViewModelArrayWorkItemChangedFieldViewModel": AutoTestChangeViewModelArrayWorkItemChangedFieldViewModel,
    "AutoTestIdModel": AutoTestIdModel,
    "AutoTestModel": AutoTestModel,
    "AutoTestModelV2GetModel": AutoTestModelV2GetModel,
    "AutoTestNamespaceModel": AutoTestNamespaceModel,
    "AutoTestPostModel": AutoTestPostModel,
    "AutoTestPutModel": AutoTestPutModel,
    "AutoTestResultsForTestRunModel": AutoTestResultsForTestRunModel,
    "AutoTestShortModel": AutoTestShortModel,
    "AutoTestStepModel": AutoTestStepModel,
    "AutotestFilterModel": AutotestFilterModel,
    "AutotestHistoricalResultSelectModel": AutotestHistoricalResultSelectModel,
    "AutotestResultHistoricalGetModel": AutotestResultHistoricalGetModel,
    "AutotestResultReasonSubGetModel": AutotestResultReasonSubGetModel,
    "AutotestSelectModel": AutotestSelectModel,
    "AutotestsExtractionModel": AutotestsExtractionModel,
    "AutotestsSelectModel": AutotestsSelectModel,
    "BackgroundJobAttachmentModel": BackgroundJobAttachmentModel,
    "BackgroundJobModel": BackgroundJobModel,
    "BooleanNullableTestPlanChangedFieldViewModel": BooleanNullableTestPlanChangedFieldViewModel,
    "BooleanTestPlanChangedFieldViewModel": BooleanTestPlanChangedFieldViewModel,
    "BooleanWorkItemChangedFieldViewModel": BooleanWorkItemChangedFieldViewModel,
    "ConfigurationByParametersModel": ConfigurationByParametersModel,
    "ConfigurationModel": ConfigurationModel,
    "ConfigurationPostModel": ConfigurationPostModel,
    "ConfigurationPutModel": ConfigurationPutModel,
    "ConfigurationSelectModel": ConfigurationSelectModel,
    "CustomAttributeChangeModel": CustomAttributeChangeModel,
    "CustomAttributeGetModel": CustomAttributeGetModel,
    "CustomAttributeModel": CustomAttributeModel,
    "CustomAttributeOptionModel": CustomAttributeOptionModel,
    "CustomAttributeOptionPostModel": CustomAttributeOptionPostModel,
    "CustomAttributePostModel": CustomAttributePostModel,
    "CustomAttributePutModel": CustomAttributePutModel,
    "CustomAttributeSearchQueryModel": CustomAttributeSearchQueryModel,
    "CustomAttributeTemplateModel": CustomAttributeTemplateModel,
    "CustomAttributeTemplatePostModel": CustomAttributeTemplatePostModel,
    "CustomAttributeTemplatePutModel": CustomAttributeTemplatePutModel,
    "CustomAttributeTemplateSearchQueryModel": CustomAttributeTemplateSearchQueryModel,
    "CustomAttributeTestPlanProjectRelationPutModel": CustomAttributeTestPlanProjectRelationPutModel,
    "DateTimeRangeSelectorModel": DateTimeRangeSelectorModel,
    "ExternalLinkModel": ExternalLinkModel,
    "FailureClassModel": FailureClassModel,
    "FailureClassRegexModel": FailureClassRegexModel,
    "FilterModel": FilterModel,
    "FlakyBulkModel": FlakyBulkModel,
    "GetXlsxTestPointsByTestPlanModel": GetXlsxTestPointsByTestPlanModel,
    "GlobalCustomAttributePostModel": GlobalCustomAttributePostModel,
    "GlobalCustomAttributeUpdateModel": GlobalCustomAttributeUpdateModel,
    "GuidExtractionModel": GuidExtractionModel,
    "GuidWorkItemChangedFieldViewModel": GuidWorkItemChangedFieldViewModel,
    "Int32RangeSelectorModel": Int32RangeSelectorModel,
    "Int32WorkItemChangedFieldViewModel": Int32WorkItemChangedFieldViewModel,
    "Int64RangeSelectorModel": Int64RangeSelectorModel,
    "Int64WorkItemChangedFieldViewModel": Int64WorkItemChangedFieldViewModel,
    "IterationModel": IterationModel,
    "IterationPutModel": IterationPutModel,
    "LabelPostModel": LabelPostModel,
    "LabelShortModel": LabelShortModel,
    "LastTestResultModel": LastTestResultModel,
    "LinkModel": LinkModel,
    "LinkPostModel": LinkPostModel,
    "LinkPutModel": LinkPutModel,
    "LinkSubGetModel": LinkSubGetModel,
    "NoContentResult": NoContentResult,
    "NotificationModel": NotificationModel,
    "NotificationQueryFilterModel": NotificationQueryFilterModel,
    "Operation": Operation,
    "ParameterFilterModel": ParameterFilterModel,
    "ParameterGroupModel": ParameterGroupModel,
    "ParameterIterationModel": ParameterIterationModel,
    "ParameterModel": ParameterModel,
    "ParameterPostModel": ParameterPostModel,
    "ParameterPutModel": ParameterPutModel,
    "ParameterShortModel": ParameterShortModel,
    "PeriodViewModel": PeriodViewModel,
    "PeriodViewModelTestPlanChangedFieldViewModel": PeriodViewModelTestPlanChangedFieldViewModel,
    "ProblemDetails": ProblemDetails,
    "ProjectAttributesFilterModel": ProjectAttributesFilterModel,
    "ProjectCustomAttributeTemplateGetModel": ProjectCustomAttributeTemplateGetModel,
    "ProjectCustomAttributesTemplatesFilterModel": ProjectCustomAttributesTemplatesFilterModel,
    "ProjectExportQueryModel": ProjectExportQueryModel,
    "ProjectExportWithTestPlansPostModel": ProjectExportWithTestPlansPostModel,
    "ProjectModel": ProjectModel,
    "ProjectPostModel": ProjectPostModel,
    "ProjectPutModel": ProjectPutModel,
    "ProjectShortestModel": ProjectShortestModel,
    "ProjectTestPlansFilterModel": ProjectTestPlansFilterModel,
    "ProjectsFilterModel": ProjectsFilterModel,
    "PublicTestPointModel": PublicTestPointModel,
    "PublicTestRunModel": PublicTestRunModel,
    "SearchAutoTestsQueryIncludesModel": SearchAutoTestsQueryIncludesModel,
    "SearchCustomAttributeTemplateGetModel": SearchCustomAttributeTemplateGetModel,
    "SearchWebhooksQueryModel": SearchWebhooksQueryModel,
    "SectionModel": SectionModel,
    "SectionMoveModel": SectionMoveModel,
    "SectionPostModel": SectionPostModel,
    "SectionPutModel": SectionPutModel,
    "SectionRenameModel": SectionRenameModel,
    "SectionWithStepsModel": SectionWithStepsModel,
    "SharedStepChangeViewModel": SharedStepChangeViewModel,
    "SharedStepModel": SharedStepModel,
    "SharedStepReferenceModel": SharedStepReferenceModel,
    "SharedStepReferenceSectionModel": SharedStepReferenceSectionModel,
    "SharedStepReferenceSectionsQueryFilterModel": SharedStepReferenceSectionsQueryFilterModel,
    "SharedStepReferencesQueryFilterModel": SharedStepReferencesQueryFilterModel,
    "SharedStepResultModel": SharedStepResultModel,
    "ShortConfiguration": ShortConfiguration,
    "StepCommentModel": StepCommentModel,
    "StepModel": StepModel,
    "StepPutModel": StepPutModel,
    "StepResultModel": StepResultModel,
    "StringArrayTestPlanChangedFieldViewModel": StringArrayTestPlanChangedFieldViewModel,
    "StringArrayWorkItemChangedFieldViewModel": StringArrayWorkItemChangedFieldViewModel,
    "StringTestPlanChangedFieldViewModel": StringTestPlanChangedFieldViewModel,
    "StringWorkItemChangedFieldViewModel": StringWorkItemChangedFieldViewModel,
    "TagShortModel": TagShortModel,
    "TestPlanChangeModel": TestPlanChangeModel,
    "TestPlanChangedFieldsViewModel": TestPlanChangedFieldsViewModel,
    "TestPlanGroupByStatus": TestPlanGroupByStatus,
    "TestPlanGroupByTestSuite": TestPlanGroupByTestSuite,
    "TestPlanGroupByTester": TestPlanGroupByTester,
    "TestPlanGroupByTesterAndStatus": TestPlanGroupByTesterAndStatus,
    "TestPlanLink": TestPlanLink,
    "TestPlanModel": TestPlanModel,
    "TestPlanPostModel": TestPlanPostModel,
    "TestPlanPutModel": TestPlanPutModel,
    "TestPlanShortModel": TestPlanShortModel,
    "TestPlanWithAnalyticModel": TestPlanWithAnalyticModel,
    "TestPlanWithTestSuiteTreeModel": TestPlanWithTestSuiteTreeModel,
    "TestPointAnalyticResult": TestPointAnalyticResult,
    "TestPointByTestSuiteModel": TestPointByTestSuiteModel,
    "TestPointChangeViewModel": TestPointChangeViewModel,
    "TestPointChangeViewModelTestPlanChangedFieldViewModel": TestPointChangeViewModelTestPlanChangedFieldViewModel,
    "TestPointFilterModel": TestPointFilterModel,
    "TestPointPutModel": TestPointPutModel,
    "TestPointResultModel": TestPointResultModel,
    "TestPointSelectModel": TestPointSelectModel,
    "TestPointSelector": TestPointSelector,
    "TestPointShortGetModel": TestPointShortGetModel,
    "TestPointShortModel": TestPointShortModel,
    "TestPointWithLastResultModel": TestPointWithLastResultModel,
    "TestPointsExtractionModel": TestPointsExtractionModel,
    "TestResultChangeViewModel": TestResultChangeViewModel,
    "TestResultChangeViewModelTestPlanChangedFieldViewModel": TestResultChangeViewModelTestPlanChangedFieldViewModel,
    "TestResultChronologyModel": TestResultChronologyModel,
    "TestResultHistoryReportModel": TestResultHistoryReportModel,
    "TestResultModel": TestResultModel,
    "TestResultShortGetModel": TestResultShortGetModel,
    "TestResultShortModel": TestResultShortModel,
    "TestResultStepCommentPutModel": TestResultStepCommentPutModel,
    "TestResultUpdateModel": TestResultUpdateModel,
    "TestResultV2GetModel": TestResultV2GetModel,
    "TestResultV2ShortModel": TestResultV2ShortModel,
    "TestResultsFilterModel": TestResultsFilterModel,
    "TestResultsLocalFilterModel": TestResultsLocalFilterModel,
    "TestResultsStatisticsGetModel": TestResultsStatisticsGetModel,
    "TestRunAnalyticResultModel": TestRunAnalyticResultModel,
    "TestRunFillByAutoTestsPostModel": TestRunFillByAutoTestsPostModel,
    "TestRunFillByConfigurationsPostModel": TestRunFillByConfigurationsPostModel,
    "TestRunFillByWorkItemsPostModel": TestRunFillByWorkItemsPostModel,
    "TestRunFilterModel": TestRunFilterModel,
    "TestRunGroupByFailureClassModel": TestRunGroupByFailureClassModel,
    "TestRunGroupByStatusModel": TestRunGroupByStatusModel,
    "TestRunModel": TestRunModel,
    "TestRunSearchQueryModel": TestRunSearchQueryModel,
    "TestRunShortGetModel": TestRunShortGetModel,
    "TestRunShortModel": TestRunShortModel,
    "TestRunStatisticsErrorCategoriesGetModel": TestRunStatisticsErrorCategoriesGetModel,
    "TestRunStatisticsStatusesGetModel": TestRunStatisticsStatusesGetModel,
    "TestRunTestResultsPartialBulkSetModel": TestRunTestResultsPartialBulkSetModel,
    "TestRunTestResultsSelectModel": TestRunTestResultsSelectModel,
    "TestRunV2GetModel": TestRunV2GetModel,
    "TestRunV2PostShortModel": TestRunV2PostShortModel,
    "TestRunV2PutModel": TestRunV2PutModel,
    "TestSuiteChangeViewModel": TestSuiteChangeViewModel,
    "TestSuiteChangeViewModelTestPlanChangedFieldViewModel": TestSuiteChangeViewModelTestPlanChangedFieldViewModel,
    "TestSuiteV2GetModel": TestSuiteV2GetModel,
    "TestSuiteV2PostModel": TestSuiteV2PostModel,
    "TestSuiteV2PutModel": TestSuiteV2PutModel,
    "TestSuiteV2TreeModel": TestSuiteV2TreeModel,
    "TestSuiteWithChildrenModel": TestSuiteWithChildrenModel,
    "TestSuiteWorkItemsSearchModel": TestSuiteWorkItemsSearchModel,
    "UserRankModel": UserRankModel,
    "UserWithRankModel": UserWithRankModel,
    "ValidateAntiForgeryTokenAttribute": ValidateAntiForgeryTokenAttribute,
    "ValidationProblemDetails": ValidationProblemDetails,
    "WebHookLogModel": WebHookLogModel,
    "WebHookModel": WebHookModel,
    "WebHookPostModel": WebHookPostModel,
    "WorkItemChangeModel": WorkItemChangeModel,
    "WorkItemChangedAttributeViewModel": WorkItemChangedAttributeViewModel,
    "WorkItemChangedFieldsViewModel": WorkItemChangedFieldsViewModel,
    "WorkItemCommentModel": WorkItemCommentModel,
    "WorkItemCommentPostModel": WorkItemCommentPostModel,
    "WorkItemCommentPutModel": WorkItemCommentPutModel,
    "WorkItemFilterModel": WorkItemFilterModel,
    "WorkItemIdModel": WorkItemIdModel,
    "WorkItemIdentifierModel": WorkItemIdentifierModel,
    "WorkItemLikeModel": WorkItemLikeModel,
    "WorkItemLinkChangeViewModel": WorkItemLinkChangeViewModel,
    "WorkItemLinkChangeViewModelArrayWorkItemChangedFieldViewModel": WorkItemLinkChangeViewModelArrayWorkItemChangedFieldViewModel,
    "WorkItemModel": WorkItemModel,
    "WorkItemMovePostModel": WorkItemMovePostModel,
    "WorkItemPostModel": WorkItemPostModel,
    "WorkItemPutModel": WorkItemPutModel,
    "WorkItemSearchQueryModel": WorkItemSearchQueryModel,
    "WorkItemSelectModel": WorkItemSelectModel,
    "WorkItemShortModel": WorkItemShortModel,
    "WorkItemStepChangeViewModel": WorkItemStepChangeViewModel,
    "WorkItemStepChangeViewModelArrayWorkItemChangedFieldViewModel": WorkItemStepChangeViewModelArrayWorkItemChangedFieldViewModel,
    "WorkItemVersionModel": WorkItemVersionModel,
    "WorkItemsExtractionModel": WorkItemsExtractionModel,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
