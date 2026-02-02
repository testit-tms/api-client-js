/**
* Enum class NotificationTypeModel.
* @enum {}
* @readonly
*/
export default class NotificationTypeModel {
    /**
    * Returns a <code>NotificationTypeModel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/NotificationTypeModel} The enum <code>NotificationTypeModel</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "MentionInComment"
     * @const
     */
    MentionInComment: string;
    /**
     * value: "TestPointIsSetInTestPlan"
     * @const
     */
    TestPointIsSetInTestPlan: string;
    /**
     * value: "MentionInCustomAttribute"
     * @const
     */
    MentionInCustomAttribute: string;
    /**
     * value: "TestPlanUnlockRequest"
     * @const
     */
    TestPlanUnlockRequest: string;
}
/**
 * *
 */
export type NotificationTypeModel = any;
