/**
* Enum class WorkItemEntityTypeApiModel.
* @enum {}
* @readonly
*/
export default class WorkItemEntityTypeApiModel {
    /**
    * Returns a <code>WorkItemEntityTypeApiModel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/WorkItemEntityTypeApiModel} The enum <code>WorkItemEntityTypeApiModel</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "TestCases"
     * @const
     */
    TestCases: string;
    /**
     * value: "CheckLists"
     * @const
     */
    CheckLists: string;
    /**
     * value: "SharedSteps"
     * @const
     */
    SharedSteps: string;
}
/**
 * *
 */
export type WorkItemEntityTypeApiModel = any;
