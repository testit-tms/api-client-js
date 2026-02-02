/**
* Enum class AutotestResultOutcome.
* @enum {}
* @readonly
*/
export default class AutotestResultOutcome {
    /**
    * Returns a <code>AutotestResultOutcome</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AutotestResultOutcome} The enum <code>AutotestResultOutcome</code> value.
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
export type AutotestResultOutcome = any;
