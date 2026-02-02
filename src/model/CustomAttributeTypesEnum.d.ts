/**
* Enum class CustomAttributeTypesEnum.
* @enum {}
* @readonly
*/
export default class CustomAttributeTypesEnum {
    /**
    * Returns a <code>CustomAttributeTypesEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CustomAttributeTypesEnum} The enum <code>CustomAttributeTypesEnum</code> value.
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
export type CustomAttributeTypesEnum = any;
