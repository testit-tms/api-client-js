/**
* Enum class TestSuiteType.
* @enum {}
* @readonly
*/
export default class TestSuiteType {
    /**
    * Returns a <code>TestSuiteType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TestSuiteType} The enum <code>TestSuiteType</code> value.
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
export type TestSuiteType = any;
