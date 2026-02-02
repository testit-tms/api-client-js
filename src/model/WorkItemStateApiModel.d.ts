/**
* Enum class WorkItemStateApiModel.
* @enum {}
* @readonly
*/
export default class WorkItemStateApiModel {
    /**
    * Returns a <code>WorkItemStateApiModel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/WorkItemStateApiModel} The enum <code>WorkItemStateApiModel</code> value.
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
export type WorkItemStateApiModel = any;
