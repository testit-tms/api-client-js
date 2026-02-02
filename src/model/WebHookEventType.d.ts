/**
* Enum class WebHookEventType.
* @enum {}
* @readonly
*/
export default class WebHookEventType {
    /**
    * Returns a <code>WebHookEventType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/WebHookEventType} The enum <code>WebHookEventType</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "AutomatedTestRunCreated"
     * @const
     */
    AutomatedTestRunCreated: string;
    /**
     * value: "TestPlansStatusChanged"
     * @const
     */
    TestPlansStatusChanged: string;
    /**
     * value: "TestRunStopped"
     * @const
     */
    TestRunStopped: string;
    /**
     * value: "TestPointAssigned"
     * @const
     */
    TestPointAssigned: string;
    /**
     * value: "TestResultJiraIssueCreated"
     * @const
     */
    TestResultJiraIssueCreated: string;
    /**
     * value: "AutoTestFinished"
     * @const
     */
    AutoTestFinished: string;
    /**
     * value: "UserMentionedInComment"
     * @const
     */
    UserMentionedInComment: string;
    /**
     * value: "UserSelectedInWorkItemAttribute"
     * @const
     */
    UserSelectedInWorkItemAttribute: string;
    /**
     * value: "AllTestPointsFinished"
     * @const
     */
    AllTestPointsFinished: string;
    /**
     * value: "AllAutoTestsFinished"
     * @const
     */
    AllAutoTestsFinished: string;
    /**
     * value: "AutoTestChanged"
     * @const
     */
    AutoTestChanged: string;
    /**
     * value: "WorkItemAutoTestRelationChanged"
     * @const
     */
    WorkItemAutoTestRelationChanged: string;
    /**
     * value: "WorkItemAttributeChanged"
     * @const
     */
    WorkItemAttributeChanged: string;
    /**
     * value: "WorkItemChanged"
     * @const
     */
    WorkItemChanged: string;
    /**
     * value: "ConfigurationChanged"
     * @const
     */
    ConfigurationChanged: string;
    /**
     * value: "ProjectChanged"
     * @const
     */
    ProjectChanged: string;
    /**
     * value: "TestPlanChanged"
     * @const
     */
    TestPlanChanged: string;
}
/**
 * *
 */
export type WebHookEventType = any;
