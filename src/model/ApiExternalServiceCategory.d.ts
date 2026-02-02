/**
* Enum class ApiExternalServiceCategory.
* @enum {}
* @readonly
*/
export default class ApiExternalServiceCategory {
    /**
    * Returns a <code>ApiExternalServiceCategory</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ApiExternalServiceCategory} The enum <code>ApiExternalServiceCategory</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "AI"
     * @const
     */
    AI: string;
    /**
     * value: "IssueTracker"
     * @const
     */
    IssueTracker: string;
}
/**
 * *
 */
export type ApiExternalServiceCategory = any;
