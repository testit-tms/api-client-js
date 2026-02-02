/**
* Enum class AvailableTestResultOutcome.
* @enum {}
* @readonly
*/
export default class AvailableTestResultOutcome {
    /**
    * Returns a <code>AvailableTestResultOutcome</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AvailableTestResultOutcome} The enum <code>AvailableTestResultOutcome</code> value.
    */
    static constructFromObject(object: any): any;
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
     * value: "Blocked"
     * @const
     */
    Blocked: string;
    /**
     * value: "Skipped"
     * @const
     */
    Skipped: string;
}
/**
 * *
 */
export type AvailableTestResultOutcome = any;
