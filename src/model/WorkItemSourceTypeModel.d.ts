/**
* Enum class WorkItemSourceTypeModel.
* @enum {}
* @readonly
*/
export default class WorkItemSourceTypeModel {
    /**
    * Returns a <code>WorkItemSourceTypeModel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/WorkItemSourceTypeModel} The enum <code>WorkItemSourceTypeModel</code> value.
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
export type WorkItemSourceTypeModel = any;
