/**
* Enum class TestResultOutcome.
* @enum {}
* @readonly
*/
export default class TestResultOutcome {
    /**
    * Returns a <code>TestResultOutcome</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TestResultOutcome} The enum <code>TestResultOutcome</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "InProgress"
     * @const
     */
    InProgress: string;
    /**
     * value: "Passed"
     * @const
     */
    Passed: string;
    /**
     * value: "Failed"
     * @const
     */
    Failed: string;
    /**
     * value: "Skipped"
     * @const
     */
    Skipped: string;
    /**
     * value: "Blocked"
     * @const
     */
    Blocked: string;
}
/**
 * *
 */
export type TestResultOutcome = any;
