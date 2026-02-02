/**
* Enum class WorkItemSourceTypeApiModel.
* @enum {}
* @readonly
*/
export default class WorkItemSourceTypeApiModel {
    /**
    * Returns a <code>WorkItemSourceTypeApiModel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/WorkItemSourceTypeApiModel} The enum <code>WorkItemSourceTypeApiModel</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "Manual"
     * @const
     */
    Manual: string;
    /**
     * value: "AI"
     * @const
     */
    AI: string;
}
/**
 * *
 */
export type WorkItemSourceTypeApiModel = any;
