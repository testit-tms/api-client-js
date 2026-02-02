/**
* Enum class TestStatusApiType.
* @enum {}
* @readonly
*/
export default class TestStatusApiType {
    /**
    * Returns a <code>TestStatusApiType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TestStatusApiType} The enum <code>TestStatusApiType</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "Pending"
     * @const
     */
    Pending: string;
    /**
     * value: "InProgress"
     * @const
     */
    InProgress: string;
    /**
     * value: "Succeeded"
     * @const
     */
    Succeeded: string;
    /**
     * value: "Failed"
     * @const
     */
    Failed: string;
    /**
     * value: "Incomplete"
     * @const
     */
    Incomplete: string;
}
/**
 * *
 */
export type TestStatusApiType = any;
