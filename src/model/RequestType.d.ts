/**
* Enum class RequestType.
* @enum {}
* @readonly
*/
export default class RequestType {
    /**
    * Returns a <code>RequestType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RequestType} The enum <code>RequestType</code> value.
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
export type RequestType = any;
