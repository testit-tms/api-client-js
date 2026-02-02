/**
* Enum class WorkItemGroupType.
* @enum {}
* @readonly
*/
export default class WorkItemGroupType {
    /**
    * Returns a <code>WorkItemGroupType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/WorkItemGroupType} The enum <code>WorkItemGroupType</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "Type"
     * @const
     */
    Type: string;
    /**
     * value: "Priority"
     * @const
     */
    Priority: string;
    /**
     * value: "Status"
     * @const
     */
    Status: string;
    /**
     * value: "AutomationStatus"
     * @const
     */
    AutomationStatus: string;
    /**
     * value: "Creator"
     * @const
     */
    Creator: string;
    /**
     * value: "LastEditor"
     * @const
     */
    LastEditor: string;
    /**
     * value: "CustomAttribute"
     * @const
     */
    CustomAttribute: string;
}
/**
 * *
 */
export type WorkItemGroupType = any;
