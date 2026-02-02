/**
* Enum class WorkItemPriorityApiModel.
* @enum {}
* @readonly
*/
export default class WorkItemPriorityApiModel {
    /**
    * Returns a <code>WorkItemPriorityApiModel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/WorkItemPriorityApiModel} The enum <code>WorkItemPriorityApiModel</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "Lowest"
     * @const
     */
    Lowest: string;
    /**
     * value: "Low"
     * @const
     */
    Low: string;
    /**
     * value: "Medium"
     * @const
     */
    Medium: string;
    /**
     * value: "High"
     * @const
     */
    High: string;
    /**
     * value: "Highest"
     * @const
     */
    Highest: string;
}
/**
 * *
 */
export type WorkItemPriorityApiModel = any;
