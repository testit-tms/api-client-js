/**
* Enum class TestPointStatus.
* @enum {}
* @readonly
*/
export default class TestPointStatus {
    /**
    * Returns a <code>TestPointStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TestPointStatus} The enum <code>TestPointStatus</code> value.
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
    /**
     * value: "NoResults"
     * @const
     */
    NoResults: string;
}
/**
 * *
 */
export type TestPointStatus = any;
