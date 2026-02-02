/**
* Enum class TestStatusType.
* @enum {}
* @readonly
*/
export default class TestStatusType {
    /**
    * Returns a <code>TestStatusType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TestStatusType} The enum <code>TestStatusType</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "Failed"
     * @const
     */
    Failed: string;
    /**
     * value: "InProgress"
     * @const
     */
    InProgress: string;
    /**
     * value: "Incomplete"
     * @const
     */
    Incomplete: string;
    /**
     * value: "Succeeded"
     * @const
     */
    Succeeded: string;
    /**
     * value: "Pending"
     * @const
     */
    Pending: string;
}
/**
 * *
 */
export type TestStatusType = any;
