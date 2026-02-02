/**
* Enum class CustomAttributeType.
* @enum {}
* @readonly
*/
export default class CustomAttributeType {
    /**
    * Returns a <code>CustomAttributeType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CustomAttributeType} The enum <code>CustomAttributeType</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "string"
     * @const
     */
    string: string;
    /**
     * value: "datetime"
     * @const
     */
    datetime: string;
    /**
     * value: "options"
     * @const
     */
    options: string;
    /**
     * value: "user"
     * @const
     */
    user: string;
    /**
     * value: "multipleOptions"
     * @const
     */
    multipleOptions: string;
    /**
     * value: "checkbox"
     * @const
     */
    checkbox: string;
}
/**
 * *
 */
export type CustomAttributeType = any;
