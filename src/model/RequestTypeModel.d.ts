/**
* Enum class RequestTypeModel.
* @enum {}
* @readonly
*/
export default class RequestTypeModel {
    /**
    * Returns a <code>RequestTypeModel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RequestTypeModel} The enum <code>RequestTypeModel</code> value.
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
export type RequestTypeModel = any;
