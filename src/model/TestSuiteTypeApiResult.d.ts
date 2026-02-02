/**
* Enum class TestSuiteTypeApiResult.
* @enum {}
* @readonly
*/
export default class TestSuiteTypeApiResult {
    /**
    * Returns a <code>TestSuiteTypeApiResult</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TestSuiteTypeApiResult} The enum <code>TestSuiteTypeApiResult</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "Custom"
     * @const
     */
    Custom: string;
    /**
     * value: "Dynamic"
     * @const
     */
    Dynamic: string;
    /**
     * value: "Tree"
     * @const
     */
    Tree: string;
}
/**
 * *
 */
export type TestSuiteTypeApiResult = any;
