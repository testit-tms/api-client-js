import localVarRequest from 'request';

export * from './actionUpdate';
export * from './assignAttachmentApiModel';
export * from './attachmentApiResult';
export * from './attachmentChangeViewModel';
export * from './attachmentChangeViewModelArrayChangedFieldViewModel';
export * from './attachmentModel';
export * from './attachmentPutModel';
export * from './attachmentPutModelAutoTestStepResultsModel';
export * from './attachmentUpdateRequest';
export * from './autoTest';
export * from './autoTestApiResult';
export * from './autoTestAverageDurationModel';
export * from './autoTestBulkDeleteApiModel';
export * from './autoTestBulkDeleteApiResult';
export * from './autoTestChangeViewModel';
export * from './autoTestChangeViewModelArrayChangedFieldViewModel';
export * from './autoTestClassCountApiModel';
export * from './autoTestExtractionApiModel';
export * from './autoTestFilterApiModel';
export * from './autoTestFilterModel';
export * from './autoTestFlakyBulkApiModel';
export * from './autoTestIdModel';
export * from './autoTestModel';
export * from './autoTestModelV2GetModel';
export * from './autoTestNamespaceCountApiModel';
export * from './autoTestNamespaceModel';
export * from './autoTestNamespacesCountResponse';
export * from './autoTestOutcome';
export * from './autoTestPostModel';
export * from './autoTestProjectSettingsGetModel';
export * from './autoTestProjectSettingsPostModel';
export * from './autoTestPutModel';
export * from './autoTestResultHistoryApiResult';
export * from './autoTestResultHistorySelectApiModel';
export * from './autoTestResultReasonShort';
export * from './autoTestResultsForTestRunModel';
export * from './autoTestSearchApiModel';
export * from './autoTestSearchIncludeApiModel';
export * from './autoTestSelectApiModel';
export * from './autoTestSelectModel';
export * from './autoTestShortApiResult';
export * from './autoTestStep';
export * from './autoTestStepApiResult';
export * from './autoTestStepModel';
export * from './autoTestStepResult';
export * from './autoTestStepResultUpdateRequest';
export * from './autoTestStepResultsApiResult';
export * from './autoTestsExtractionModel';
export * from './autotestResultOutcome';
export * from './availableTestResultOutcome';
export * from './backgroundJobAttachmentModel';
export * from './backgroundJobFilterModel';
export * from './backgroundJobGetModel';
export * from './backgroundJobState';
export * from './backgroundJobType';
export * from './booleanChangedFieldViewModel';
export * from './booleanNullableChangedFieldViewModel';
export * from './configurationByParametersModel';
export * from './configurationExtractionModel';
export * from './configurationFilterModel';
export * from './configurationModel';
export * from './configurationPostModel';
export * from './configurationPutModel';
export * from './configurationSelectModel';
export * from './configurationShort';
export * from './configurationShortApiResult';
export * from './configurationShortModel';
export * from './createDefectApiModel';
export * from './createEmptyTestRunApiModel';
export * from './createLinkApiModel';
export * from './createTestPlanApiModel';
export * from './createTestRunAndFillByAutoTestsApiModel';
export * from './createTestRunAndFillByConfigurationsApiModel';
export * from './createTestRunAndFillByWorkItemsApiModel';
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
export * from './customAttributeTemplateValidationResult';
export * from './customAttributeTestPlanProjectRelationPutModel';
export * from './customAttributeTypesEnum';
export * from './customAttributeValidationResult';
export * from './dateTimeRangeSelectorModel';
export * from './defectApiModel';
export * from './deletionState';
export * from './externalFormAllowedValueModel';
export * from './externalFormCreateModel';
export * from './externalFormFieldModel';
export * from './externalFormLinkModel';
export * from './externalFormModel';
export * from './externalLinkModel';
export * from './externalServiceCategoryApiResult';
export * from './externalServiceMetadataApiResult';
export * from './externalServicesMetadataApiResult';
export * from './failureCategory';
export * from './failureCategoryModel';
export * from './failureClassModel';
export * from './failureClassRegexModel';
export * from './filterModel';
export * from './getExternalFormApiResult';
export * from './getXlsxTestPointsByTestPlanModel';
export * from './globalCustomAttributePostModel';
export * from './globalCustomAttributeUpdateModel';
export * from './globalSearchItemResult';
export * from './globalSearchRequest';
export * from './globalSearchResponse';
export * from './guidChangedFieldViewModel';
export * from './guidExtractionModel';
export * from './imageResizeType';
export * from './int32ChangedFieldViewModel';
export * from './int32RangeSelectorModel';
export * from './int64ChangedFieldViewModel';
export * from './int64RangeSelectorModel';
export * from './iterationApiResult';
export * from './iterationModel';
export * from './iterationPutModel';
export * from './label';
export * from './labelApiResult';
export * from './labelPostModel';
export * from './labelShortModel';
export * from './lastTestResultModel';
export * from './link';
export * from './linkApiResult';
export * from './linkModel';
export * from './linkPostModel';
export * from './linkPutModel';
export * from './linkShort';
export * from './linkShortApiResult';
export * from './linkShortModel';
export * from './linkType';
export * from './manualRerunApiResult';
export * from './manualRerunSelectTestResultsApiModel';
export * from './manualRerunTestResultApiModel';
export * from './namedEntityApiModel';
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
export * from './parameterShortApiResult';
export * from './parameterShortModel';
export * from './periodViewModel';
export * from './periodViewModelChangedFieldViewModel';
export * from './problemDetails';
export * from './projectAttributesFilterModel';
export * from './projectCustomAttributeTemplateGetModel';
export * from './projectCustomAttributesTemplatesFilterModel';
export * from './projectExternalServiceApiResult';
export * from './projectExternalServicesApiResult';
export * from './projectExtractionModel';
export * from './projectModel';
export * from './projectPostModel';
export * from './projectPutModel';
export * from './projectSelectModel';
export * from './projectShortModel';
export * from './projectShortestModel';
export * from './projectTestPlansFilterModel';
export * from './projectTypeModel';
export * from './projectsFilterModel';
export * from './publicTestPointModel';
export * from './publicTestRunModel';
export * from './requestTypeApiModel';
export * from './requestTypeModel';
export * from './rerunTestResultApiResult';
export * from './rerunTestResultModel';
export * from './rerunsModel';
export * from './searchCustomAttributeTemplateGetModel';
export * from './searchTestRunsApiModel';
export * from './searchWebhooksQueryModel';
export * from './searchWorkItemLinkUrlsApiResult';
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
export * from './sharedStepResultApiModel';
export * from './shortConfiguration';
export * from './stepCommentApiModel';
export * from './stepModel';
export * from './stepPostModel';
export * from './stepPutModel';
export * from './stepResultApiModel';
export * from './stringArrayChangedFieldViewModel';
export * from './stringChangedFieldViewModel';
export * from './stringChangedFieldWithDiffsViewModel';
export * from './stringExtractionModel';
export * from './tagApiModel';
export * from './tagExtractionModel';
export * from './tagModel';
export * from './tagPostModel';
export * from './tagPutModel';
export * from './tagSelectModel';
export * from './tagShortModel';
export * from './tagsFilterModel';
export * from './testPlanApiResult';
export * from './testPlanChangeModel';
export * from './testPlanChangedFieldsViewModel';
export * from './testPlanExtractionModel';
export * from './testPlanGroupByStatus';
export * from './testPlanGroupByTestSuite';
export * from './testPlanGroupByTester';
export * from './testPlanGroupByTesterAndStatus';
export * from './testPlanLink';
export * from './testPlanModel';
export * from './testPlanSelectModel';
export * from './testPlanShortModel';
export * from './testPlanStatus';
export * from './testPlanStatusModel';
export * from './testPlanSummaryModel';
export * from './testPlanTagApiResult';
export * from './testPlanWithAnalyticModel';
export * from './testPlanWithTestSuiteTreeModel';
export * from './testPoint';
export * from './testPointAnalyticResult';
export * from './testPointByTestSuiteModel';
export * from './testPointChangeViewModel';
export * from './testPointChangeViewModelChangedFieldViewModel';
export * from './testPointFilterModel';
export * from './testPointFilterRequestModel';
export * from './testPointResultApiResult';
export * from './testPointSelectModel';
export * from './testPointSelector';
export * from './testPointShortApiResult';
export * from './testPointShortModel';
export * from './testPointShortResponseModel';
export * from './testPointStatus';
export * from './testPointWithLastResultResponseModel';
export * from './testPointsExtractionModel';
export * from './testResultApiResult';
export * from './testResultChangeViewModel';
export * from './testResultChangeViewModelChangedFieldViewModel';
export * from './testResultChronologyModel';
export * from './testResultFailureClassApiResult';
export * from './testResultHistoryReportApiResult';
export * from './testResultOutcome';
export * from './testResultResponse';
export * from './testResultShortApiResult';
export * from './testResultShortResponse';
export * from './testResultStepCommentUpdateRequest';
export * from './testResultUpdateV2Request';
export * from './testResultV2GetModel';
export * from './testResultV2ShortModel';
export * from './testResultsExtractionApiModel';
export * from './testResultsFilterApiModel';
export * from './testResultsLocalFilterModel';
export * from './testResultsSelectApiModel';
export * from './testResultsStatisticsApiResult';
export * from './testResultsStatisticsFailureCategoriesApiResult';
export * from './testResultsStatisticsStatusesApiResult';
export * from './testRunAnalyticApiResult';
export * from './testRunApiResult';
export * from './testRunByAutoTestApiResult';
export * from './testRunExtractionApiModel';
export * from './testRunFilterApiModel';
export * from './testRunGroupByFailureClassApiResult';
export * from './testRunGroupByStatusApiResult';
export * from './testRunGroupByStatusTypeApiResult';
export * from './testRunSelectApiModel';
export * from './testRunShortApiResult';
export * from './testRunState';
export * from './testRunStatisticsFilterApiModel';
export * from './testRunTestResultsPartialBulkSetModel';
export * from './testRunTestResultsSelectModel';
export * from './testRunV2ApiResult';
export * from './testStatusApiResult';
export * from './testStatusCreateModel';
export * from './testStatusType';
export * from './testStatusUpdateModel';
export * from './testSuiteChangeViewModel';
export * from './testSuiteChangeViewModelChangedFieldViewModel';
export * from './testSuiteTestPlanApiModel';
export * from './testSuiteType';
export * from './testSuiteV2GetModel';
export * from './testSuiteV2PostModel';
export * from './testSuiteV2PutModel';
export * from './testSuiteV2TreeModel';
export * from './testSuiteWithChildrenModel';
export * from './testSuiteWorkItemsSearchModel';
export * from './updateEmptyTestRunApiModel';
export * from './updateLinkApiModel';
export * from './updateMultipleAttachmentsApiModel';
export * from './updateMultipleLinksApiModel';
export * from './updateMultipleTestRunsApiModel';
export * from './updateTestPlanApiModel';
export * from './userCustomNameValidationResponse';
export * from './userRankModel';
export * from './userWithRankModel';
export * from './validationProblemDetails';
export * from './webHookEventType';
export * from './webHookEventTypeModel';
export * from './webHookEventTypeRequest';
export * from './webHookLogModel';
export * from './webHookModel';
export * from './webHookPostModel';
export * from './webHookTestModel';
export * from './webhookBulkUpdateApiModel';
export * from './webhookResponse';
export * from './webhookVariablesType';
export * from './webhooksDeleteApiModel';
export * from './webhooksDeleteFilterApiModel';
export * from './webhooksExtractionApiModel';
export * from './webhooksFilterApiModel';
export * from './webhooksUpdateApiModel';
export * from './webhooksUpdateApiResult';
export * from './workItemChangeModel';
export * from './workItemChangedAttributeViewModel';
export * from './workItemChangedFieldsViewModel';
export * from './workItemCommentModel';
export * from './workItemCommentPostModel';
export * from './workItemCommentPutModel';
export * from './workItemEntityTypes';
export * from './workItemExtractionApiModel';
export * from './workItemExtractionModel';
export * from './workItemFilterApiModel';
export * from './workItemFilterModel';
export * from './workItemGroupGetModel';
export * from './workItemGroupModel';
export * from './workItemGroupType';
export * from './workItemIdModel';
export * from './workItemIdentifierModel';
export * from './workItemLikeModel';
export * from './workItemLinkChangeViewModel';
export * from './workItemLinkChangeViewModelArrayChangedFieldViewModel';
export * from './workItemLinkExtractionApiModel';
export * from './workItemLinkFilterApiModel';
export * from './workItemLinkFilterModel';
export * from './workItemLinkUrlApiModel';
export * from './workItemLinkUrlApiResult';
export * from './workItemLinkUrlFilterApiModel';
export * from './workItemLocalFilterModel';
export * from './workItemLocalSelectModel';
export * from './workItemModel';
export * from './workItemMovePostModel';
export * from './workItemPostModel';
export * from './workItemPriorityModel';
export * from './workItemPutModel';
export * from './workItemSearchQueryModel';
export * from './workItemSelectApiModel';
export * from './workItemSelectModel';
export * from './workItemShortApiResult';
export * from './workItemShortModel';
export * from './workItemState';
export * from './workItemStates';
export * from './workItemStepChangeViewModel';
export * from './workItemStepChangeViewModelArrayChangedFieldWithDiffsViewModel';
export * from './workItemVersionModel';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ActionUpdate } from './actionUpdate';
import { AssignAttachmentApiModel } from './assignAttachmentApiModel';
import { AttachmentApiResult } from './attachmentApiResult';
import { AttachmentChangeViewModel } from './attachmentChangeViewModel';
import { AttachmentChangeViewModelArrayChangedFieldViewModel } from './attachmentChangeViewModelArrayChangedFieldViewModel';
import { AttachmentModel } from './attachmentModel';
import { AttachmentPutModel } from './attachmentPutModel';
import { AttachmentPutModelAutoTestStepResultsModel } from './attachmentPutModelAutoTestStepResultsModel';
import { AttachmentUpdateRequest } from './attachmentUpdateRequest';
import { AutoTest } from './autoTest';
import { AutoTestApiResult } from './autoTestApiResult';
import { AutoTestAverageDurationModel } from './autoTestAverageDurationModel';
import { AutoTestBulkDeleteApiModel } from './autoTestBulkDeleteApiModel';
import { AutoTestBulkDeleteApiResult } from './autoTestBulkDeleteApiResult';
import { AutoTestChangeViewModel } from './autoTestChangeViewModel';
import { AutoTestChangeViewModelArrayChangedFieldViewModel } from './autoTestChangeViewModelArrayChangedFieldViewModel';
import { AutoTestClassCountApiModel } from './autoTestClassCountApiModel';
import { AutoTestExtractionApiModel } from './autoTestExtractionApiModel';
import { AutoTestFilterApiModel } from './autoTestFilterApiModel';
import { AutoTestFilterModel } from './autoTestFilterModel';
import { AutoTestFlakyBulkApiModel } from './autoTestFlakyBulkApiModel';
import { AutoTestIdModel } from './autoTestIdModel';
import { AutoTestModel } from './autoTestModel';
import { AutoTestModelV2GetModel } from './autoTestModelV2GetModel';
import { AutoTestNamespaceCountApiModel } from './autoTestNamespaceCountApiModel';
import { AutoTestNamespaceModel } from './autoTestNamespaceModel';
import { AutoTestNamespacesCountResponse } from './autoTestNamespacesCountResponse';
import { AutoTestOutcome } from './autoTestOutcome';
import { AutoTestPostModel } from './autoTestPostModel';
import { AutoTestProjectSettingsGetModel } from './autoTestProjectSettingsGetModel';
import { AutoTestProjectSettingsPostModel } from './autoTestProjectSettingsPostModel';
import { AutoTestPutModel } from './autoTestPutModel';
import { AutoTestResultHistoryApiResult } from './autoTestResultHistoryApiResult';
import { AutoTestResultHistorySelectApiModel } from './autoTestResultHistorySelectApiModel';
import { AutoTestResultReasonShort } from './autoTestResultReasonShort';
import { AutoTestResultsForTestRunModel } from './autoTestResultsForTestRunModel';
import { AutoTestSearchApiModel } from './autoTestSearchApiModel';
import { AutoTestSearchIncludeApiModel } from './autoTestSearchIncludeApiModel';
import { AutoTestSelectApiModel } from './autoTestSelectApiModel';
import { AutoTestSelectModel } from './autoTestSelectModel';
import { AutoTestShortApiResult } from './autoTestShortApiResult';
import { AutoTestStep } from './autoTestStep';
import { AutoTestStepApiResult } from './autoTestStepApiResult';
import { AutoTestStepModel } from './autoTestStepModel';
import { AutoTestStepResult } from './autoTestStepResult';
import { AutoTestStepResultUpdateRequest } from './autoTestStepResultUpdateRequest';
import { AutoTestStepResultsApiResult } from './autoTestStepResultsApiResult';
import { AutoTestsExtractionModel } from './autoTestsExtractionModel';
import { AutotestResultOutcome } from './autotestResultOutcome';
import { AvailableTestResultOutcome } from './availableTestResultOutcome';
import { BackgroundJobAttachmentModel } from './backgroundJobAttachmentModel';
import { BackgroundJobFilterModel } from './backgroundJobFilterModel';
import { BackgroundJobGetModel } from './backgroundJobGetModel';
import { BackgroundJobState } from './backgroundJobState';
import { BackgroundJobType } from './backgroundJobType';
import { BooleanChangedFieldViewModel } from './booleanChangedFieldViewModel';
import { BooleanNullableChangedFieldViewModel } from './booleanNullableChangedFieldViewModel';
import { ConfigurationByParametersModel } from './configurationByParametersModel';
import { ConfigurationExtractionModel } from './configurationExtractionModel';
import { ConfigurationFilterModel } from './configurationFilterModel';
import { ConfigurationModel } from './configurationModel';
import { ConfigurationPostModel } from './configurationPostModel';
import { ConfigurationPutModel } from './configurationPutModel';
import { ConfigurationSelectModel } from './configurationSelectModel';
import { ConfigurationShort } from './configurationShort';
import { ConfigurationShortApiResult } from './configurationShortApiResult';
import { ConfigurationShortModel } from './configurationShortModel';
import { CreateDefectApiModel } from './createDefectApiModel';
import { CreateEmptyTestRunApiModel } from './createEmptyTestRunApiModel';
import { CreateLinkApiModel } from './createLinkApiModel';
import { CreateTestPlanApiModel } from './createTestPlanApiModel';
import { CreateTestRunAndFillByAutoTestsApiModel } from './createTestRunAndFillByAutoTestsApiModel';
import { CreateTestRunAndFillByConfigurationsApiModel } from './createTestRunAndFillByConfigurationsApiModel';
import { CreateTestRunAndFillByWorkItemsApiModel } from './createTestRunAndFillByWorkItemsApiModel';
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
import { CustomAttributeTemplateValidationResult } from './customAttributeTemplateValidationResult';
import { CustomAttributeTestPlanProjectRelationPutModel } from './customAttributeTestPlanProjectRelationPutModel';
import { CustomAttributeTypesEnum } from './customAttributeTypesEnum';
import { CustomAttributeValidationResult } from './customAttributeValidationResult';
import { DateTimeRangeSelectorModel } from './dateTimeRangeSelectorModel';
import { DefectApiModel } from './defectApiModel';
import { DeletionState } from './deletionState';
import { ExternalFormAllowedValueModel } from './externalFormAllowedValueModel';
import { ExternalFormCreateModel } from './externalFormCreateModel';
import { ExternalFormFieldModel } from './externalFormFieldModel';
import { ExternalFormLinkModel } from './externalFormLinkModel';
import { ExternalFormModel } from './externalFormModel';
import { ExternalLinkModel } from './externalLinkModel';
import { ExternalServiceCategoryApiResult } from './externalServiceCategoryApiResult';
import { ExternalServiceMetadataApiResult } from './externalServiceMetadataApiResult';
import { ExternalServicesMetadataApiResult } from './externalServicesMetadataApiResult';
import { FailureCategory } from './failureCategory';
import { FailureCategoryModel } from './failureCategoryModel';
import { FailureClassModel } from './failureClassModel';
import { FailureClassRegexModel } from './failureClassRegexModel';
import { FilterModel } from './filterModel';
import { GetExternalFormApiResult } from './getExternalFormApiResult';
import { GetXlsxTestPointsByTestPlanModel } from './getXlsxTestPointsByTestPlanModel';
import { GlobalCustomAttributePostModel } from './globalCustomAttributePostModel';
import { GlobalCustomAttributeUpdateModel } from './globalCustomAttributeUpdateModel';
import { GlobalSearchItemResult } from './globalSearchItemResult';
import { GlobalSearchRequest } from './globalSearchRequest';
import { GlobalSearchResponse } from './globalSearchResponse';
import { GuidChangedFieldViewModel } from './guidChangedFieldViewModel';
import { GuidExtractionModel } from './guidExtractionModel';
import { ImageResizeType } from './imageResizeType';
import { Int32ChangedFieldViewModel } from './int32ChangedFieldViewModel';
import { Int32RangeSelectorModel } from './int32RangeSelectorModel';
import { Int64ChangedFieldViewModel } from './int64ChangedFieldViewModel';
import { Int64RangeSelectorModel } from './int64RangeSelectorModel';
import { IterationApiResult } from './iterationApiResult';
import { IterationModel } from './iterationModel';
import { IterationPutModel } from './iterationPutModel';
import { Label } from './label';
import { LabelApiResult } from './labelApiResult';
import { LabelPostModel } from './labelPostModel';
import { LabelShortModel } from './labelShortModel';
import { LastTestResultModel } from './lastTestResultModel';
import { Link } from './link';
import { LinkApiResult } from './linkApiResult';
import { LinkModel } from './linkModel';
import { LinkPostModel } from './linkPostModel';
import { LinkPutModel } from './linkPutModel';
import { LinkShort } from './linkShort';
import { LinkShortApiResult } from './linkShortApiResult';
import { LinkShortModel } from './linkShortModel';
import { LinkType } from './linkType';
import { ManualRerunApiResult } from './manualRerunApiResult';
import { ManualRerunSelectTestResultsApiModel } from './manualRerunSelectTestResultsApiModel';
import { ManualRerunTestResultApiModel } from './manualRerunTestResultApiModel';
import { NamedEntityApiModel } from './namedEntityApiModel';
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
import { ParameterShortApiResult } from './parameterShortApiResult';
import { ParameterShortModel } from './parameterShortModel';
import { PeriodViewModel } from './periodViewModel';
import { PeriodViewModelChangedFieldViewModel } from './periodViewModelChangedFieldViewModel';
import { ProblemDetails } from './problemDetails';
import { ProjectAttributesFilterModel } from './projectAttributesFilterModel';
import { ProjectCustomAttributeTemplateGetModel } from './projectCustomAttributeTemplateGetModel';
import { ProjectCustomAttributesTemplatesFilterModel } from './projectCustomAttributesTemplatesFilterModel';
import { ProjectExternalServiceApiResult } from './projectExternalServiceApiResult';
import { ProjectExternalServicesApiResult } from './projectExternalServicesApiResult';
import { ProjectExtractionModel } from './projectExtractionModel';
import { ProjectModel } from './projectModel';
import { ProjectPostModel } from './projectPostModel';
import { ProjectPutModel } from './projectPutModel';
import { ProjectSelectModel } from './projectSelectModel';
import { ProjectShortModel } from './projectShortModel';
import { ProjectShortestModel } from './projectShortestModel';
import { ProjectTestPlansFilterModel } from './projectTestPlansFilterModel';
import { ProjectTypeModel } from './projectTypeModel';
import { ProjectsFilterModel } from './projectsFilterModel';
import { PublicTestPointModel } from './publicTestPointModel';
import { PublicTestRunModel } from './publicTestRunModel';
import { RequestTypeApiModel } from './requestTypeApiModel';
import { RequestTypeModel } from './requestTypeModel';
import { RerunTestResultApiResult } from './rerunTestResultApiResult';
import { RerunTestResultModel } from './rerunTestResultModel';
import { RerunsModel } from './rerunsModel';
import { SearchCustomAttributeTemplateGetModel } from './searchCustomAttributeTemplateGetModel';
import { SearchTestRunsApiModel } from './searchTestRunsApiModel';
import { SearchWebhooksQueryModel } from './searchWebhooksQueryModel';
import { SearchWorkItemLinkUrlsApiResult } from './searchWorkItemLinkUrlsApiResult';
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
import { SharedStepResultApiModel } from './sharedStepResultApiModel';
import { ShortConfiguration } from './shortConfiguration';
import { StepCommentApiModel } from './stepCommentApiModel';
import { StepModel } from './stepModel';
import { StepPostModel } from './stepPostModel';
import { StepPutModel } from './stepPutModel';
import { StepResultApiModel } from './stepResultApiModel';
import { StringArrayChangedFieldViewModel } from './stringArrayChangedFieldViewModel';
import { StringChangedFieldViewModel } from './stringChangedFieldViewModel';
import { StringChangedFieldWithDiffsViewModel } from './stringChangedFieldWithDiffsViewModel';
import { StringExtractionModel } from './stringExtractionModel';
import { TagApiModel } from './tagApiModel';
import { TagExtractionModel } from './tagExtractionModel';
import { TagModel } from './tagModel';
import { TagPostModel } from './tagPostModel';
import { TagPutModel } from './tagPutModel';
import { TagSelectModel } from './tagSelectModel';
import { TagShortModel } from './tagShortModel';
import { TagsFilterModel } from './tagsFilterModel';
import { TestPlanApiResult } from './testPlanApiResult';
import { TestPlanChangeModel } from './testPlanChangeModel';
import { TestPlanChangedFieldsViewModel } from './testPlanChangedFieldsViewModel';
import { TestPlanExtractionModel } from './testPlanExtractionModel';
import { TestPlanGroupByStatus } from './testPlanGroupByStatus';
import { TestPlanGroupByTestSuite } from './testPlanGroupByTestSuite';
import { TestPlanGroupByTester } from './testPlanGroupByTester';
import { TestPlanGroupByTesterAndStatus } from './testPlanGroupByTesterAndStatus';
import { TestPlanLink } from './testPlanLink';
import { TestPlanModel } from './testPlanModel';
import { TestPlanSelectModel } from './testPlanSelectModel';
import { TestPlanShortModel } from './testPlanShortModel';
import { TestPlanStatus } from './testPlanStatus';
import { TestPlanStatusModel } from './testPlanStatusModel';
import { TestPlanSummaryModel } from './testPlanSummaryModel';
import { TestPlanTagApiResult } from './testPlanTagApiResult';
import { TestPlanWithAnalyticModel } from './testPlanWithAnalyticModel';
import { TestPlanWithTestSuiteTreeModel } from './testPlanWithTestSuiteTreeModel';
import { TestPoint } from './testPoint';
import { TestPointAnalyticResult } from './testPointAnalyticResult';
import { TestPointByTestSuiteModel } from './testPointByTestSuiteModel';
import { TestPointChangeViewModel } from './testPointChangeViewModel';
import { TestPointChangeViewModelChangedFieldViewModel } from './testPointChangeViewModelChangedFieldViewModel';
import { TestPointFilterModel } from './testPointFilterModel';
import { TestPointFilterRequestModel } from './testPointFilterRequestModel';
import { TestPointResultApiResult } from './testPointResultApiResult';
import { TestPointSelectModel } from './testPointSelectModel';
import { TestPointSelector } from './testPointSelector';
import { TestPointShortApiResult } from './testPointShortApiResult';
import { TestPointShortModel } from './testPointShortModel';
import { TestPointShortResponseModel } from './testPointShortResponseModel';
import { TestPointStatus } from './testPointStatus';
import { TestPointWithLastResultResponseModel } from './testPointWithLastResultResponseModel';
import { TestPointsExtractionModel } from './testPointsExtractionModel';
import { TestResultApiResult } from './testResultApiResult';
import { TestResultChangeViewModel } from './testResultChangeViewModel';
import { TestResultChangeViewModelChangedFieldViewModel } from './testResultChangeViewModelChangedFieldViewModel';
import { TestResultChronologyModel } from './testResultChronologyModel';
import { TestResultFailureClassApiResult } from './testResultFailureClassApiResult';
import { TestResultHistoryReportApiResult } from './testResultHistoryReportApiResult';
import { TestResultOutcome } from './testResultOutcome';
import { TestResultResponse } from './testResultResponse';
import { TestResultShortApiResult } from './testResultShortApiResult';
import { TestResultShortResponse } from './testResultShortResponse';
import { TestResultStepCommentUpdateRequest } from './testResultStepCommentUpdateRequest';
import { TestResultUpdateV2Request } from './testResultUpdateV2Request';
import { TestResultV2GetModel } from './testResultV2GetModel';
import { TestResultV2ShortModel } from './testResultV2ShortModel';
import { TestResultsExtractionApiModel } from './testResultsExtractionApiModel';
import { TestResultsFilterApiModel } from './testResultsFilterApiModel';
import { TestResultsLocalFilterModel } from './testResultsLocalFilterModel';
import { TestResultsSelectApiModel } from './testResultsSelectApiModel';
import { TestResultsStatisticsApiResult } from './testResultsStatisticsApiResult';
import { TestResultsStatisticsFailureCategoriesApiResult } from './testResultsStatisticsFailureCategoriesApiResult';
import { TestResultsStatisticsStatusesApiResult } from './testResultsStatisticsStatusesApiResult';
import { TestRunAnalyticApiResult } from './testRunAnalyticApiResult';
import { TestRunApiResult } from './testRunApiResult';
import { TestRunByAutoTestApiResult } from './testRunByAutoTestApiResult';
import { TestRunExtractionApiModel } from './testRunExtractionApiModel';
import { TestRunFilterApiModel } from './testRunFilterApiModel';
import { TestRunGroupByFailureClassApiResult } from './testRunGroupByFailureClassApiResult';
import { TestRunGroupByStatusApiResult } from './testRunGroupByStatusApiResult';
import { TestRunGroupByStatusTypeApiResult } from './testRunGroupByStatusTypeApiResult';
import { TestRunSelectApiModel } from './testRunSelectApiModel';
import { TestRunShortApiResult } from './testRunShortApiResult';
import { TestRunState } from './testRunState';
import { TestRunStatisticsFilterApiModel } from './testRunStatisticsFilterApiModel';
import { TestRunTestResultsPartialBulkSetModel } from './testRunTestResultsPartialBulkSetModel';
import { TestRunTestResultsSelectModel } from './testRunTestResultsSelectModel';
import { TestRunV2ApiResult } from './testRunV2ApiResult';
import { TestStatusApiResult } from './testStatusApiResult';
import { TestStatusCreateModel } from './testStatusCreateModel';
import { TestStatusType } from './testStatusType';
import { TestStatusUpdateModel } from './testStatusUpdateModel';
import { TestSuiteChangeViewModel } from './testSuiteChangeViewModel';
import { TestSuiteChangeViewModelChangedFieldViewModel } from './testSuiteChangeViewModelChangedFieldViewModel';
import { TestSuiteTestPlanApiModel } from './testSuiteTestPlanApiModel';
import { TestSuiteType } from './testSuiteType';
import { TestSuiteV2GetModel } from './testSuiteV2GetModel';
import { TestSuiteV2PostModel } from './testSuiteV2PostModel';
import { TestSuiteV2PutModel } from './testSuiteV2PutModel';
import { TestSuiteV2TreeModel } from './testSuiteV2TreeModel';
import { TestSuiteWithChildrenModel } from './testSuiteWithChildrenModel';
import { TestSuiteWorkItemsSearchModel } from './testSuiteWorkItemsSearchModel';
import { UpdateEmptyTestRunApiModel } from './updateEmptyTestRunApiModel';
import { UpdateLinkApiModel } from './updateLinkApiModel';
import { UpdateMultipleAttachmentsApiModel } from './updateMultipleAttachmentsApiModel';
import { UpdateMultipleLinksApiModel } from './updateMultipleLinksApiModel';
import { UpdateMultipleTestRunsApiModel } from './updateMultipleTestRunsApiModel';
import { UpdateTestPlanApiModel } from './updateTestPlanApiModel';
import { UserCustomNameValidationResponse } from './userCustomNameValidationResponse';
import { UserRankModel } from './userRankModel';
import { UserWithRankModel } from './userWithRankModel';
import { ValidationProblemDetails } from './validationProblemDetails';
import { WebHookEventType } from './webHookEventType';
import { WebHookEventTypeModel } from './webHookEventTypeModel';
import { WebHookEventTypeRequest } from './webHookEventTypeRequest';
import { WebHookLogModel } from './webHookLogModel';
import { WebHookModel } from './webHookModel';
import { WebHookPostModel } from './webHookPostModel';
import { WebHookTestModel } from './webHookTestModel';
import { WebhookBulkUpdateApiModel } from './webhookBulkUpdateApiModel';
import { WebhookResponse } from './webhookResponse';
import { WebhookVariablesType } from './webhookVariablesType';
import { WebhooksDeleteApiModel } from './webhooksDeleteApiModel';
import { WebhooksDeleteFilterApiModel } from './webhooksDeleteFilterApiModel';
import { WebhooksExtractionApiModel } from './webhooksExtractionApiModel';
import { WebhooksFilterApiModel } from './webhooksFilterApiModel';
import { WebhooksUpdateApiModel } from './webhooksUpdateApiModel';
import { WebhooksUpdateApiResult } from './webhooksUpdateApiResult';
import { WorkItemChangeModel } from './workItemChangeModel';
import { WorkItemChangedAttributeViewModel } from './workItemChangedAttributeViewModel';
import { WorkItemChangedFieldsViewModel } from './workItemChangedFieldsViewModel';
import { WorkItemCommentModel } from './workItemCommentModel';
import { WorkItemCommentPostModel } from './workItemCommentPostModel';
import { WorkItemCommentPutModel } from './workItemCommentPutModel';
import { WorkItemEntityTypes } from './workItemEntityTypes';
import { WorkItemExtractionApiModel } from './workItemExtractionApiModel';
import { WorkItemExtractionModel } from './workItemExtractionModel';
import { WorkItemFilterApiModel } from './workItemFilterApiModel';
import { WorkItemFilterModel } from './workItemFilterModel';
import { WorkItemGroupGetModel } from './workItemGroupGetModel';
import { WorkItemGroupModel } from './workItemGroupModel';
import { WorkItemGroupType } from './workItemGroupType';
import { WorkItemIdModel } from './workItemIdModel';
import { WorkItemIdentifierModel } from './workItemIdentifierModel';
import { WorkItemLikeModel } from './workItemLikeModel';
import { WorkItemLinkChangeViewModel } from './workItemLinkChangeViewModel';
import { WorkItemLinkChangeViewModelArrayChangedFieldViewModel } from './workItemLinkChangeViewModelArrayChangedFieldViewModel';
import { WorkItemLinkExtractionApiModel } from './workItemLinkExtractionApiModel';
import { WorkItemLinkFilterApiModel } from './workItemLinkFilterApiModel';
import { WorkItemLinkFilterModel } from './workItemLinkFilterModel';
import { WorkItemLinkUrlApiModel } from './workItemLinkUrlApiModel';
import { WorkItemLinkUrlApiResult } from './workItemLinkUrlApiResult';
import { WorkItemLinkUrlFilterApiModel } from './workItemLinkUrlFilterApiModel';
import { WorkItemLocalFilterModel } from './workItemLocalFilterModel';
import { WorkItemLocalSelectModel } from './workItemLocalSelectModel';
import { WorkItemModel } from './workItemModel';
import { WorkItemMovePostModel } from './workItemMovePostModel';
import { WorkItemPostModel } from './workItemPostModel';
import { WorkItemPriorityModel } from './workItemPriorityModel';
import { WorkItemPutModel } from './workItemPutModel';
import { WorkItemSearchQueryModel } from './workItemSearchQueryModel';
import { WorkItemSelectApiModel } from './workItemSelectApiModel';
import { WorkItemSelectModel } from './workItemSelectModel';
import { WorkItemShortApiResult } from './workItemShortApiResult';
import { WorkItemShortModel } from './workItemShortModel';
import { WorkItemState } from './workItemState';
import { WorkItemStates } from './workItemStates';
import { WorkItemStepChangeViewModel } from './workItemStepChangeViewModel';
import { WorkItemStepChangeViewModelArrayChangedFieldWithDiffsViewModel } from './workItemStepChangeViewModelArrayChangedFieldWithDiffsViewModel';
import { WorkItemVersionModel } from './workItemVersionModel';

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
        "ActionUpdate": ActionUpdate,
        "AutoTestOutcome": AutoTestOutcome,
        "AutotestResultOutcome": AutotestResultOutcome,
        "AvailableTestResultOutcome": AvailableTestResultOutcome,
        "BackgroundJobState": BackgroundJobState,
        "BackgroundJobType": BackgroundJobType,
        "CustomAttributeTypesEnum": CustomAttributeTypesEnum,
        "DeletionState": DeletionState,
        "ExternalServiceCategoryApiResult": ExternalServiceCategoryApiResult,
        "FailureCategory": FailureCategory,
        "FailureCategoryModel": FailureCategoryModel,
        "ImageResizeType": ImageResizeType,
        "LinkType": LinkType,
        "NotificationTypeModel": NotificationTypeModel,
        "ProjectTypeModel": ProjectTypeModel,
        "RequestTypeApiModel": RequestTypeApiModel,
        "RequestTypeModel": RequestTypeModel,
        "TestPlanStatus": TestPlanStatus,
        "TestPlanStatusModel": TestPlanStatusModel,
        "TestPointStatus": TestPointStatus,
        "TestResultOutcome": TestResultOutcome,
        "TestRunState": TestRunState,
        "TestStatusType": TestStatusType,
        "TestSuiteType": TestSuiteType,
        "WebHookEventType": WebHookEventType,
        "WebHookEventTypeModel": WebHookEventTypeModel,
        "WebHookEventTypeRequest": WebHookEventTypeRequest,
        "WebhookVariablesType": WebhookVariablesType,
        "WorkItemEntityTypes": WorkItemEntityTypes,
        "WorkItemGroupType": WorkItemGroupType,
        "WorkItemPriorityModel": WorkItemPriorityModel,
        "WorkItemState": WorkItemState,
        "WorkItemStates": WorkItemStates,
}

let typeMap: {[index: string]: any} = {
    "AssignAttachmentApiModel": AssignAttachmentApiModel,
    "AttachmentApiResult": AttachmentApiResult,
    "AttachmentChangeViewModel": AttachmentChangeViewModel,
    "AttachmentChangeViewModelArrayChangedFieldViewModel": AttachmentChangeViewModelArrayChangedFieldViewModel,
    "AttachmentModel": AttachmentModel,
    "AttachmentPutModel": AttachmentPutModel,
    "AttachmentPutModelAutoTestStepResultsModel": AttachmentPutModelAutoTestStepResultsModel,
    "AttachmentUpdateRequest": AttachmentUpdateRequest,
    "AutoTest": AutoTest,
    "AutoTestApiResult": AutoTestApiResult,
    "AutoTestAverageDurationModel": AutoTestAverageDurationModel,
    "AutoTestBulkDeleteApiModel": AutoTestBulkDeleteApiModel,
    "AutoTestBulkDeleteApiResult": AutoTestBulkDeleteApiResult,
    "AutoTestChangeViewModel": AutoTestChangeViewModel,
    "AutoTestChangeViewModelArrayChangedFieldViewModel": AutoTestChangeViewModelArrayChangedFieldViewModel,
    "AutoTestClassCountApiModel": AutoTestClassCountApiModel,
    "AutoTestExtractionApiModel": AutoTestExtractionApiModel,
    "AutoTestFilterApiModel": AutoTestFilterApiModel,
    "AutoTestFilterModel": AutoTestFilterModel,
    "AutoTestFlakyBulkApiModel": AutoTestFlakyBulkApiModel,
    "AutoTestIdModel": AutoTestIdModel,
    "AutoTestModel": AutoTestModel,
    "AutoTestModelV2GetModel": AutoTestModelV2GetModel,
    "AutoTestNamespaceCountApiModel": AutoTestNamespaceCountApiModel,
    "AutoTestNamespaceModel": AutoTestNamespaceModel,
    "AutoTestNamespacesCountResponse": AutoTestNamespacesCountResponse,
    "AutoTestPostModel": AutoTestPostModel,
    "AutoTestProjectSettingsGetModel": AutoTestProjectSettingsGetModel,
    "AutoTestProjectSettingsPostModel": AutoTestProjectSettingsPostModel,
    "AutoTestPutModel": AutoTestPutModel,
    "AutoTestResultHistoryApiResult": AutoTestResultHistoryApiResult,
    "AutoTestResultHistorySelectApiModel": AutoTestResultHistorySelectApiModel,
    "AutoTestResultReasonShort": AutoTestResultReasonShort,
    "AutoTestResultsForTestRunModel": AutoTestResultsForTestRunModel,
    "AutoTestSearchApiModel": AutoTestSearchApiModel,
    "AutoTestSearchIncludeApiModel": AutoTestSearchIncludeApiModel,
    "AutoTestSelectApiModel": AutoTestSelectApiModel,
    "AutoTestSelectModel": AutoTestSelectModel,
    "AutoTestShortApiResult": AutoTestShortApiResult,
    "AutoTestStep": AutoTestStep,
    "AutoTestStepApiResult": AutoTestStepApiResult,
    "AutoTestStepModel": AutoTestStepModel,
    "AutoTestStepResult": AutoTestStepResult,
    "AutoTestStepResultUpdateRequest": AutoTestStepResultUpdateRequest,
    "AutoTestStepResultsApiResult": AutoTestStepResultsApiResult,
    "AutoTestsExtractionModel": AutoTestsExtractionModel,
    "BackgroundJobAttachmentModel": BackgroundJobAttachmentModel,
    "BackgroundJobFilterModel": BackgroundJobFilterModel,
    "BackgroundJobGetModel": BackgroundJobGetModel,
    "BooleanChangedFieldViewModel": BooleanChangedFieldViewModel,
    "BooleanNullableChangedFieldViewModel": BooleanNullableChangedFieldViewModel,
    "ConfigurationByParametersModel": ConfigurationByParametersModel,
    "ConfigurationExtractionModel": ConfigurationExtractionModel,
    "ConfigurationFilterModel": ConfigurationFilterModel,
    "ConfigurationModel": ConfigurationModel,
    "ConfigurationPostModel": ConfigurationPostModel,
    "ConfigurationPutModel": ConfigurationPutModel,
    "ConfigurationSelectModel": ConfigurationSelectModel,
    "ConfigurationShort": ConfigurationShort,
    "ConfigurationShortApiResult": ConfigurationShortApiResult,
    "ConfigurationShortModel": ConfigurationShortModel,
    "CreateDefectApiModel": CreateDefectApiModel,
    "CreateEmptyTestRunApiModel": CreateEmptyTestRunApiModel,
    "CreateLinkApiModel": CreateLinkApiModel,
    "CreateTestPlanApiModel": CreateTestPlanApiModel,
    "CreateTestRunAndFillByAutoTestsApiModel": CreateTestRunAndFillByAutoTestsApiModel,
    "CreateTestRunAndFillByConfigurationsApiModel": CreateTestRunAndFillByConfigurationsApiModel,
    "CreateTestRunAndFillByWorkItemsApiModel": CreateTestRunAndFillByWorkItemsApiModel,
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
    "CustomAttributeTemplateValidationResult": CustomAttributeTemplateValidationResult,
    "CustomAttributeTestPlanProjectRelationPutModel": CustomAttributeTestPlanProjectRelationPutModel,
    "CustomAttributeValidationResult": CustomAttributeValidationResult,
    "DateTimeRangeSelectorModel": DateTimeRangeSelectorModel,
    "DefectApiModel": DefectApiModel,
    "ExternalFormAllowedValueModel": ExternalFormAllowedValueModel,
    "ExternalFormCreateModel": ExternalFormCreateModel,
    "ExternalFormFieldModel": ExternalFormFieldModel,
    "ExternalFormLinkModel": ExternalFormLinkModel,
    "ExternalFormModel": ExternalFormModel,
    "ExternalLinkModel": ExternalLinkModel,
    "ExternalServiceMetadataApiResult": ExternalServiceMetadataApiResult,
    "ExternalServicesMetadataApiResult": ExternalServicesMetadataApiResult,
    "FailureClassModel": FailureClassModel,
    "FailureClassRegexModel": FailureClassRegexModel,
    "FilterModel": FilterModel,
    "GetExternalFormApiResult": GetExternalFormApiResult,
    "GetXlsxTestPointsByTestPlanModel": GetXlsxTestPointsByTestPlanModel,
    "GlobalCustomAttributePostModel": GlobalCustomAttributePostModel,
    "GlobalCustomAttributeUpdateModel": GlobalCustomAttributeUpdateModel,
    "GlobalSearchItemResult": GlobalSearchItemResult,
    "GlobalSearchRequest": GlobalSearchRequest,
    "GlobalSearchResponse": GlobalSearchResponse,
    "GuidChangedFieldViewModel": GuidChangedFieldViewModel,
    "GuidExtractionModel": GuidExtractionModel,
    "Int32ChangedFieldViewModel": Int32ChangedFieldViewModel,
    "Int32RangeSelectorModel": Int32RangeSelectorModel,
    "Int64ChangedFieldViewModel": Int64ChangedFieldViewModel,
    "Int64RangeSelectorModel": Int64RangeSelectorModel,
    "IterationApiResult": IterationApiResult,
    "IterationModel": IterationModel,
    "IterationPutModel": IterationPutModel,
    "Label": Label,
    "LabelApiResult": LabelApiResult,
    "LabelPostModel": LabelPostModel,
    "LabelShortModel": LabelShortModel,
    "LastTestResultModel": LastTestResultModel,
    "Link": Link,
    "LinkApiResult": LinkApiResult,
    "LinkModel": LinkModel,
    "LinkPostModel": LinkPostModel,
    "LinkPutModel": LinkPutModel,
    "LinkShort": LinkShort,
    "LinkShortApiResult": LinkShortApiResult,
    "LinkShortModel": LinkShortModel,
    "ManualRerunApiResult": ManualRerunApiResult,
    "ManualRerunSelectTestResultsApiModel": ManualRerunSelectTestResultsApiModel,
    "ManualRerunTestResultApiModel": ManualRerunTestResultApiModel,
    "NamedEntityApiModel": NamedEntityApiModel,
    "NotificationModel": NotificationModel,
    "NotificationQueryFilterModel": NotificationQueryFilterModel,
    "Operation": Operation,
    "ParameterFilterModel": ParameterFilterModel,
    "ParameterGroupModel": ParameterGroupModel,
    "ParameterIterationModel": ParameterIterationModel,
    "ParameterModel": ParameterModel,
    "ParameterPostModel": ParameterPostModel,
    "ParameterPutModel": ParameterPutModel,
    "ParameterShortApiResult": ParameterShortApiResult,
    "ParameterShortModel": ParameterShortModel,
    "PeriodViewModel": PeriodViewModel,
    "PeriodViewModelChangedFieldViewModel": PeriodViewModelChangedFieldViewModel,
    "ProblemDetails": ProblemDetails,
    "ProjectAttributesFilterModel": ProjectAttributesFilterModel,
    "ProjectCustomAttributeTemplateGetModel": ProjectCustomAttributeTemplateGetModel,
    "ProjectCustomAttributesTemplatesFilterModel": ProjectCustomAttributesTemplatesFilterModel,
    "ProjectExternalServiceApiResult": ProjectExternalServiceApiResult,
    "ProjectExternalServicesApiResult": ProjectExternalServicesApiResult,
    "ProjectExtractionModel": ProjectExtractionModel,
    "ProjectModel": ProjectModel,
    "ProjectPostModel": ProjectPostModel,
    "ProjectPutModel": ProjectPutModel,
    "ProjectSelectModel": ProjectSelectModel,
    "ProjectShortModel": ProjectShortModel,
    "ProjectShortestModel": ProjectShortestModel,
    "ProjectTestPlansFilterModel": ProjectTestPlansFilterModel,
    "ProjectsFilterModel": ProjectsFilterModel,
    "PublicTestPointModel": PublicTestPointModel,
    "PublicTestRunModel": PublicTestRunModel,
    "RerunTestResultApiResult": RerunTestResultApiResult,
    "RerunTestResultModel": RerunTestResultModel,
    "RerunsModel": RerunsModel,
    "SearchCustomAttributeTemplateGetModel": SearchCustomAttributeTemplateGetModel,
    "SearchTestRunsApiModel": SearchTestRunsApiModel,
    "SearchWebhooksQueryModel": SearchWebhooksQueryModel,
    "SearchWorkItemLinkUrlsApiResult": SearchWorkItemLinkUrlsApiResult,
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
    "SharedStepResultApiModel": SharedStepResultApiModel,
    "ShortConfiguration": ShortConfiguration,
    "StepCommentApiModel": StepCommentApiModel,
    "StepModel": StepModel,
    "StepPostModel": StepPostModel,
    "StepPutModel": StepPutModel,
    "StepResultApiModel": StepResultApiModel,
    "StringArrayChangedFieldViewModel": StringArrayChangedFieldViewModel,
    "StringChangedFieldViewModel": StringChangedFieldViewModel,
    "StringChangedFieldWithDiffsViewModel": StringChangedFieldWithDiffsViewModel,
    "StringExtractionModel": StringExtractionModel,
    "TagApiModel": TagApiModel,
    "TagExtractionModel": TagExtractionModel,
    "TagModel": TagModel,
    "TagPostModel": TagPostModel,
    "TagPutModel": TagPutModel,
    "TagSelectModel": TagSelectModel,
    "TagShortModel": TagShortModel,
    "TagsFilterModel": TagsFilterModel,
    "TestPlanApiResult": TestPlanApiResult,
    "TestPlanChangeModel": TestPlanChangeModel,
    "TestPlanChangedFieldsViewModel": TestPlanChangedFieldsViewModel,
    "TestPlanExtractionModel": TestPlanExtractionModel,
    "TestPlanGroupByStatus": TestPlanGroupByStatus,
    "TestPlanGroupByTestSuite": TestPlanGroupByTestSuite,
    "TestPlanGroupByTester": TestPlanGroupByTester,
    "TestPlanGroupByTesterAndStatus": TestPlanGroupByTesterAndStatus,
    "TestPlanLink": TestPlanLink,
    "TestPlanModel": TestPlanModel,
    "TestPlanSelectModel": TestPlanSelectModel,
    "TestPlanShortModel": TestPlanShortModel,
    "TestPlanSummaryModel": TestPlanSummaryModel,
    "TestPlanTagApiResult": TestPlanTagApiResult,
    "TestPlanWithAnalyticModel": TestPlanWithAnalyticModel,
    "TestPlanWithTestSuiteTreeModel": TestPlanWithTestSuiteTreeModel,
    "TestPoint": TestPoint,
    "TestPointAnalyticResult": TestPointAnalyticResult,
    "TestPointByTestSuiteModel": TestPointByTestSuiteModel,
    "TestPointChangeViewModel": TestPointChangeViewModel,
    "TestPointChangeViewModelChangedFieldViewModel": TestPointChangeViewModelChangedFieldViewModel,
    "TestPointFilterModel": TestPointFilterModel,
    "TestPointFilterRequestModel": TestPointFilterRequestModel,
    "TestPointResultApiResult": TestPointResultApiResult,
    "TestPointSelectModel": TestPointSelectModel,
    "TestPointSelector": TestPointSelector,
    "TestPointShortApiResult": TestPointShortApiResult,
    "TestPointShortModel": TestPointShortModel,
    "TestPointShortResponseModel": TestPointShortResponseModel,
    "TestPointWithLastResultResponseModel": TestPointWithLastResultResponseModel,
    "TestPointsExtractionModel": TestPointsExtractionModel,
    "TestResultApiResult": TestResultApiResult,
    "TestResultChangeViewModel": TestResultChangeViewModel,
    "TestResultChangeViewModelChangedFieldViewModel": TestResultChangeViewModelChangedFieldViewModel,
    "TestResultChronologyModel": TestResultChronologyModel,
    "TestResultFailureClassApiResult": TestResultFailureClassApiResult,
    "TestResultHistoryReportApiResult": TestResultHistoryReportApiResult,
    "TestResultResponse": TestResultResponse,
    "TestResultShortApiResult": TestResultShortApiResult,
    "TestResultShortResponse": TestResultShortResponse,
    "TestResultStepCommentUpdateRequest": TestResultStepCommentUpdateRequest,
    "TestResultUpdateV2Request": TestResultUpdateV2Request,
    "TestResultV2GetModel": TestResultV2GetModel,
    "TestResultV2ShortModel": TestResultV2ShortModel,
    "TestResultsExtractionApiModel": TestResultsExtractionApiModel,
    "TestResultsFilterApiModel": TestResultsFilterApiModel,
    "TestResultsLocalFilterModel": TestResultsLocalFilterModel,
    "TestResultsSelectApiModel": TestResultsSelectApiModel,
    "TestResultsStatisticsApiResult": TestResultsStatisticsApiResult,
    "TestResultsStatisticsFailureCategoriesApiResult": TestResultsStatisticsFailureCategoriesApiResult,
    "TestResultsStatisticsStatusesApiResult": TestResultsStatisticsStatusesApiResult,
    "TestRunAnalyticApiResult": TestRunAnalyticApiResult,
    "TestRunApiResult": TestRunApiResult,
    "TestRunByAutoTestApiResult": TestRunByAutoTestApiResult,
    "TestRunExtractionApiModel": TestRunExtractionApiModel,
    "TestRunFilterApiModel": TestRunFilterApiModel,
    "TestRunGroupByFailureClassApiResult": TestRunGroupByFailureClassApiResult,
    "TestRunGroupByStatusApiResult": TestRunGroupByStatusApiResult,
    "TestRunGroupByStatusTypeApiResult": TestRunGroupByStatusTypeApiResult,
    "TestRunSelectApiModel": TestRunSelectApiModel,
    "TestRunShortApiResult": TestRunShortApiResult,
    "TestRunStatisticsFilterApiModel": TestRunStatisticsFilterApiModel,
    "TestRunTestResultsPartialBulkSetModel": TestRunTestResultsPartialBulkSetModel,
    "TestRunTestResultsSelectModel": TestRunTestResultsSelectModel,
    "TestRunV2ApiResult": TestRunV2ApiResult,
    "TestStatusApiResult": TestStatusApiResult,
    "TestStatusCreateModel": TestStatusCreateModel,
    "TestStatusUpdateModel": TestStatusUpdateModel,
    "TestSuiteChangeViewModel": TestSuiteChangeViewModel,
    "TestSuiteChangeViewModelChangedFieldViewModel": TestSuiteChangeViewModelChangedFieldViewModel,
    "TestSuiteTestPlanApiModel": TestSuiteTestPlanApiModel,
    "TestSuiteV2GetModel": TestSuiteV2GetModel,
    "TestSuiteV2PostModel": TestSuiteV2PostModel,
    "TestSuiteV2PutModel": TestSuiteV2PutModel,
    "TestSuiteV2TreeModel": TestSuiteV2TreeModel,
    "TestSuiteWithChildrenModel": TestSuiteWithChildrenModel,
    "TestSuiteWorkItemsSearchModel": TestSuiteWorkItemsSearchModel,
    "UpdateEmptyTestRunApiModel": UpdateEmptyTestRunApiModel,
    "UpdateLinkApiModel": UpdateLinkApiModel,
    "UpdateMultipleAttachmentsApiModel": UpdateMultipleAttachmentsApiModel,
    "UpdateMultipleLinksApiModel": UpdateMultipleLinksApiModel,
    "UpdateMultipleTestRunsApiModel": UpdateMultipleTestRunsApiModel,
    "UpdateTestPlanApiModel": UpdateTestPlanApiModel,
    "UserCustomNameValidationResponse": UserCustomNameValidationResponse,
    "UserRankModel": UserRankModel,
    "UserWithRankModel": UserWithRankModel,
    "ValidationProblemDetails": ValidationProblemDetails,
    "WebHookLogModel": WebHookLogModel,
    "WebHookModel": WebHookModel,
    "WebHookPostModel": WebHookPostModel,
    "WebHookTestModel": WebHookTestModel,
    "WebhookBulkUpdateApiModel": WebhookBulkUpdateApiModel,
    "WebhookResponse": WebhookResponse,
    "WebhooksDeleteApiModel": WebhooksDeleteApiModel,
    "WebhooksDeleteFilterApiModel": WebhooksDeleteFilterApiModel,
    "WebhooksExtractionApiModel": WebhooksExtractionApiModel,
    "WebhooksFilterApiModel": WebhooksFilterApiModel,
    "WebhooksUpdateApiModel": WebhooksUpdateApiModel,
    "WebhooksUpdateApiResult": WebhooksUpdateApiResult,
    "WorkItemChangeModel": WorkItemChangeModel,
    "WorkItemChangedAttributeViewModel": WorkItemChangedAttributeViewModel,
    "WorkItemChangedFieldsViewModel": WorkItemChangedFieldsViewModel,
    "WorkItemCommentModel": WorkItemCommentModel,
    "WorkItemCommentPostModel": WorkItemCommentPostModel,
    "WorkItemCommentPutModel": WorkItemCommentPutModel,
    "WorkItemExtractionApiModel": WorkItemExtractionApiModel,
    "WorkItemExtractionModel": WorkItemExtractionModel,
    "WorkItemFilterApiModel": WorkItemFilterApiModel,
    "WorkItemFilterModel": WorkItemFilterModel,
    "WorkItemGroupGetModel": WorkItemGroupGetModel,
    "WorkItemGroupModel": WorkItemGroupModel,
    "WorkItemIdModel": WorkItemIdModel,
    "WorkItemIdentifierModel": WorkItemIdentifierModel,
    "WorkItemLikeModel": WorkItemLikeModel,
    "WorkItemLinkChangeViewModel": WorkItemLinkChangeViewModel,
    "WorkItemLinkChangeViewModelArrayChangedFieldViewModel": WorkItemLinkChangeViewModelArrayChangedFieldViewModel,
    "WorkItemLinkExtractionApiModel": WorkItemLinkExtractionApiModel,
    "WorkItemLinkFilterApiModel": WorkItemLinkFilterApiModel,
    "WorkItemLinkFilterModel": WorkItemLinkFilterModel,
    "WorkItemLinkUrlApiModel": WorkItemLinkUrlApiModel,
    "WorkItemLinkUrlApiResult": WorkItemLinkUrlApiResult,
    "WorkItemLinkUrlFilterApiModel": WorkItemLinkUrlFilterApiModel,
    "WorkItemLocalFilterModel": WorkItemLocalFilterModel,
    "WorkItemLocalSelectModel": WorkItemLocalSelectModel,
    "WorkItemModel": WorkItemModel,
    "WorkItemMovePostModel": WorkItemMovePostModel,
    "WorkItemPostModel": WorkItemPostModel,
    "WorkItemPutModel": WorkItemPutModel,
    "WorkItemSearchQueryModel": WorkItemSearchQueryModel,
    "WorkItemSelectApiModel": WorkItemSelectApiModel,
    "WorkItemSelectModel": WorkItemSelectModel,
    "WorkItemShortApiResult": WorkItemShortApiResult,
    "WorkItemShortModel": WorkItemShortModel,
    "WorkItemStepChangeViewModel": WorkItemStepChangeViewModel,
    "WorkItemStepChangeViewModelArrayChangedFieldWithDiffsViewModel": WorkItemStepChangeViewModelArrayChangedFieldWithDiffsViewModel,
    "WorkItemVersionModel": WorkItemVersionModel,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

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

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
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

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
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
