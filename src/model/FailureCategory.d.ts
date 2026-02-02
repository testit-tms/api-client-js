/**
* Enum class FailureCategory.
* @enum {}
* @readonly
*/
export default class FailureCategory {
    /**
    * Returns a <code>FailureCategory</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/FailureCategory} The enum <code>FailureCategory</code> value.
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
    /**
     * value: "NoDefect"
     * @const
     */
    NoDefect: string;
    /**
     * value: "NoAnalytics"
     * @const
     */
    NoAnalytics: string;
}
/**
 * *
 */
export type FailureCategory = any;
