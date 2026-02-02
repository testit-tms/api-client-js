/**
* Enum class WorkItemStates.
* @enum {}
* @readonly
*/
export default class WorkItemStates {
    /**
    * Returns a <code>WorkItemStates</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/WorkItemStates} The enum <code>WorkItemStates</code> value.
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
export type WorkItemStates = any;
