/**
* Enum class ListSortDirection.
* @enum {}
* @readonly
*/
export default class ListSortDirection {
    /**
    * Returns a <code>ListSortDirection</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ListSortDirection} The enum <code>ListSortDirection</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "Ascending"
     * @const
     */
    Ascending: string;
    /**
     * value: "Descending"
     * @const
     */
    Descending: string;
}
/**
 * *
 */
export type ListSortDirection = any;
