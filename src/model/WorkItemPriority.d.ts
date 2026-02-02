/**
* Enum class WorkItemPriority.
* @enum {}
* @readonly
*/
export default class WorkItemPriority {
    /**
    * Returns a <code>WorkItemPriority</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/WorkItemPriority} The enum <code>WorkItemPriority</code> value.
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
export type WorkItemPriority = any;
