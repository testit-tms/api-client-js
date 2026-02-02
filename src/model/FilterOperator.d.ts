/**
* Enum class FilterOperator.
* @enum {}
* @readonly
*/
export default class FilterOperator {
    /**
    * Returns a <code>FilterOperator</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/FilterOperator} The enum <code>FilterOperator</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "="
     * @const
     */
    EQUAL: string;
    /**
     * value: "!="
     * @const
     */
    NOT_EQUAL: string;
    /**
     * value: "~"
     * @const
     */
    TILDE: string;
    /**
     * value: "!~"
     * @const
     */
    "!~": string;
    /**
     * value: "<"
     * @const
     */
    LESS_THAN: string;
    /**
     * value: "<="
     * @const
     */
    LESS_THAN_OR_EQUAL_TO: string;
    /**
     * value: ">"
     * @const
     */
    GREATER_THAN: string;
    /**
     * value: ">="
     * @const
     */
    GREATER_THAN_OR_EQUAL_TO: string;
    /**
     * value: "*"
     * @const
     */
    STAR: string;
    /**
     * value: "!*"
     * @const
     */
    "!*": string;
}
/**
 * *
 */
export type FilterOperator = any;
