/**
* Enum class BackgroundJobState.
* @enum {}
* @readonly
*/
export default class BackgroundJobState {
    /**
    * Returns a <code>BackgroundJobState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/BackgroundJobState} The enum <code>BackgroundJobState</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "Enqueued"
     * @const
     */
    Enqueued: string;
    /**
     * value: "InProgress"
     * @const
     */
    InProgress: string;
    /**
     * value: "Completed"
     * @const
     */
    Completed: string;
    /**
     * value: "Failed"
     * @const
     */
    Failed: string;
    /**
     * value: "Canceled"
     * @const
     */
    Canceled: string;
}
/**
 * *
 */
export type BackgroundJobState = any;
