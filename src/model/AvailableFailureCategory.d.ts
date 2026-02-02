/**
* Enum class AvailableFailureCategory.
* @enum {}
* @readonly
*/
export default class AvailableFailureCategory {
    /**
    * Returns a <code>AvailableFailureCategory</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/AvailableFailureCategory} The enum <code>AvailableFailureCategory</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "InfrastructureDefect"
     * @const
     */
    InfrastructureDefect: string;
    /**
     * value: "ProductDefect"
     * @const
     */
    ProductDefect: string;
    /**
     * value: "TestDefect"
     * @const
     */
    TestDefect: string;
}
/**
 * *
 */
export type AvailableFailureCategory = any;
