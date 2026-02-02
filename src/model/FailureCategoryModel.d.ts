/**
* Enum class FailureCategoryModel.
* @enum {}
* @readonly
*/
export default class FailureCategoryModel {
    /**
    * Returns a <code>FailureCategoryModel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/FailureCategoryModel} The enum <code>FailureCategoryModel</code> value.
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
export type FailureCategoryModel = any;
