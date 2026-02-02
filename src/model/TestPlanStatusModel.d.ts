/**
* Enum class TestPlanStatusModel.
* @enum {}
* @readonly
*/
export default class TestPlanStatusModel {
    /**
    * Returns a <code>TestPlanStatusModel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TestPlanStatusModel} The enum <code>TestPlanStatusModel</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "New"
     * @const
     */
    New: string;
    /**
     * value: "InProgress"
     * @const
     */
    InProgress: string;
    /**
     * value: "Paused"
     * @const
     */
    Paused: string;
    /**
     * value: "Completed"
     * @const
     */
    Completed: string;
}
/**
 * *
 */
export type TestPlanStatusModel = any;
