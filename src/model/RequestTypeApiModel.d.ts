/**
* Enum class RequestTypeApiModel.
* @enum {}
* @readonly
*/
export default class RequestTypeApiModel {
    /**
    * Returns a <code>RequestTypeApiModel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RequestTypeApiModel} The enum <code>RequestTypeApiModel</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "Post"
     * @const
     */
    Post: string;
    /**
     * value: "Put"
     * @const
     */
    Put: string;
    /**
     * value: "Delete"
     * @const
     */
    Delete: string;
}
/**
 * *
 */
export type RequestTypeApiModel = any;
