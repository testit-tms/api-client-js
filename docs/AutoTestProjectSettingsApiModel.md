# TestitApiClient.AutoTestProjectSettingsApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isFlakyAuto** | **Boolean** | Indicates if the status \&quot;Flaky/Stable\&quot; sets automatically | [optional] [default to false]
**flakyStabilityPercentage** | **Number** | Stability percentage for autotest flaky computing | [optional] [default to 100]
**flakyTestRunCount** | **Number** | Last test run count for autotest flaky computing | [optional] [default to 100]
**rerunEnabled** | **Boolean** | Auto rerun enabled | 
**rerunAttemptsCount** | **Number** | Auto rerun attempt count | 
**workItemUpdatingEnabled** | **Boolean** | Autotest to work item updating enabled | [optional] [default to false]
**workItemUpdatingFields** | [**WorkItemUpdatingFieldsApiModel**](WorkItemUpdatingFieldsApiModel.md) | Autotest to work item updating fields | 
**archiveOutdatedTestRunsEnabled** | **Boolean** | Indicates whether archiving of outdated test runs is enabled for the project. | 
**testRunsArchiveLimitEnabled** | **Boolean** | Indicates whether a limit is enforced on the number of archived test runs. | 
**testRunsRetentionPeriodDays** | **Number** |  The retention period in days for test runs. After this period,  outdated test runs may be archived based on project settings | [optional] [default to 180]
**maxActiveTestRunsCount** | **Number** | Maximum number of active test runs to keep. When this limit is exceeded,  older test runs are automatically archived | [optional] [default to 500]


