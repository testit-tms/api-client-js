/**
* Enum class CollectionOperator.
* @enum {}
* @readonly
*/
export default class CollectionOperator {
    /**
    * Returns a <code>CollectionOperator</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/CollectionOperator} The enum <code>CollectionOperator</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "Any"
     * @const
     */
    Any: string;
    /**
     * value: "All"
     * @const
     */
    All: string;
}
/**
 * *
 */
export type CollectionOperator = any;
