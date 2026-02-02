/**
* Enum class WorkItemState.
* @enum {}
* @readonly
*/
export default class WorkItemState {
    /**
    * Returns a <code>WorkItemState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/WorkItemState} The enum <code>WorkItemState</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "NeedsWork"
     * @const
     */
    NeedsWork: string;
    /**
     * value: "NotReady"
     * @const
     */
    NotReady: string;
    /**
     * value: "Ready"
     * @const
     */
    Ready: string;
}
/**
 * *
 */
export type WorkItemState = any;
