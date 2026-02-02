/**
* Enum class ActionUpdate.
* @enum {}
* @readonly
*/
export default class ActionUpdate {
    /**
    * Returns a <code>ActionUpdate</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ActionUpdate} The enum <code>ActionUpdate</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "Add"
     * @const
     */
    Add: string;
    /**
     * value: "Replace"
     * @const
     */
    Replace: string;
    /**
     * value: "ToRemove"
     * @const
     */
    ToRemove: string;
    /**
     * value: "ClearAll"
     * @const
     */
    ClearAll: string;
}
/**
 * *
 */
export type ActionUpdate = any;
