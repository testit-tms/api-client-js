/**
* Enum class TestPlanStatus.
* @enum {}
* @readonly
*/
export default class TestPlanStatus {
    /**
    * Returns a <code>TestPlanStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TestPlanStatus} The enum <code>TestPlanStatus</code> value.
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
export type TestPlanStatus = any;
