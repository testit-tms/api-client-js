# AutoTestFilterApiModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **projectIds** | **Set** | Specifies an autotest projects IDs to search for | [optional] [default to null] |
| **externalIds** | **Set** | Specifies an autotest external IDs to search for | [optional] [default to null] |
| **globalIds** | **Set** | Specifies an autotest global IDs to search for | [optional] [default to null] |
| **name** | **String** | Specifies an autotest name to search for | [optional] [default to null] |
| **isFlaky** | **Boolean** | Specifies an autotest flaky status to search for | [optional] [default to null] |
| **mustBeApproved** | **Boolean** | Specifies an autotest unapproved changes status to search for | [optional] [default to null] |
| **stabilityPercentage** | [**Int64RangeSelectorModel**](Int64RangeSelectorModel.md) | Specifies an autotest range of stability percentage to search for | [optional] [default to null] |
| **createdDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies an autotest range of creation date to search for | [optional] [default to null] |
| **createdByIds** | **Set** | Specifies an autotest creator IDs to search for | [optional] [default to null] |
| **modifiedDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies an autotest range of last modification date to search for | [optional] [default to null] |
| **modifiedByIds** | **Set** | Specifies an autotest last editor IDs to search for | [optional] [default to null] |
| **isDeleted** | **Boolean** | Specifies an autotest deleted status to search for | [optional] [default to null] |
| **namespace** | **String** | Specifies an autotest namespace to search for | [optional] [default to null] |
| **isEmptyNamespace** | **Boolean** | Specifies an autotest namespace name presence status to search for | [optional] [default to null] |
| **className** | **String** | Specifies an autotest class name to search for | [optional] [default to null] |
| **isEmptyClassName** | **Boolean** | Specifies an autotest class name presence status to search for | [optional] [default to null] |
| **lastTestResultOutcome** | [**AutotestResultOutcome**](AutotestResultOutcome.md) | Specifies an autotest outcome of the last test result to search for | [optional] [default to null] |
| **lastTestResultStatusCode** | **String** | Specifies an autotest status code of the last test result to search for | [optional] [default to null] |
| **externalKey** | **String** | Specifies an autotest external key to search for | [optional] [default to null] |
| **lastTestResultConfigurationIds** | **Set** | Specifies an autotest configuration IDs of the last test result to search for | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

