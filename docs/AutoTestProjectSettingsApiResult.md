# TestitApiClient.AutoTestProjectSettingsApiResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectId** | **String** | Unique ID of the project. | 
**isFlakyAuto** | **Boolean** | Indicates if the status \&quot;Flaky/Stable\&quot; sets automatically | 
**flakyStabilityPercentage** | **Number** | Stability percentage for autotest flaky computing | 
**flakyTestRunCount** | **Number** | Last test run count for autotest flaky computing | 
**rerunEnabled** | **Boolean** | Auto rerun enabled | 
**rerunAttemptsCount** | **Number** | Auto rerun attempt count | 
**workItemUpdatingEnabled** | **Boolean** | Autotest to work item updating enabled | 
**workItemUpdatingFields** | [**WorkItemUpdatingFieldsApiResult**](WorkItemUpdatingFieldsApiResult.md) | Autotest to work item updating fields | 
**archiveOutdatedTestRunsEnabled** | **Boolean** | Indicates whether archiving of outdated test runs is enabled for the project. | 
**testRunsArchiveLimitEnabled** | **Boolean** | Indicates whether a limit is enforced on the number of archived test runs. | 
**testRunsRetentionPeriodDays** | **Number** |  The retention period in days for test runs. After this period,  outdated test runs may be archived based on project settings | 
**maxActiveTestRunsCount** | **Number** | Maximum number of active test runs to keep. When this limit is exceeded,  older test runs are automatically archived | 


