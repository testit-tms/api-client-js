/**
* Enum class WorkItemEntityTypes.
* @enum {}
* @readonly
*/
export default class WorkItemEntityTypes {
    /**
    * Returns a <code>WorkItemEntityTypes</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/WorkItemEntityTypes} The enum <code>WorkItemEntityTypes</code> value.
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
export type WorkItemEntityTypes = any;
