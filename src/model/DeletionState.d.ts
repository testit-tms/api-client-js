/**
* Enum class DeletionState.
* @enum {}
* @readonly
*/
export default class DeletionState {
    /**
    * Returns a <code>DeletionState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/DeletionState} The enum <code>DeletionState</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "Any"
     * @const
     */
    Any: string;
    /**
     * value: "Deleted"
     * @const
     */
    Deleted: string;
    /**
     * value: "NotDeleted"
     * @const
     */
    NotDeleted: string;
}
/**
 * *
 */
export type DeletionState = any;
