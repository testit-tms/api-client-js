/**
* Enum class LogicalOperator.
* @enum {}
* @readonly
*/
export default class LogicalOperator {
    /**
    * Returns a <code>LogicalOperator</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/LogicalOperator} The enum <code>LogicalOperator</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "And"
     * @const
     */
    And: string;
    /**
     * value: "Or"
     * @const
     */
    Or: string;
}
/**
 * *
 */
export type LogicalOperator = any;
