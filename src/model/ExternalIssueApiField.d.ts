/**
* Enum class ExternalIssueApiField.
* @enum {}
* @readonly
*/
export default class ExternalIssueApiField {
    /**
    * Returns a <code>ExternalIssueApiField</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ExternalIssueApiField} The enum <code>ExternalIssueApiField</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "Id"
     * @const
     */
    Id: string;
    /**
     * value: "Type"
     * @const
     */
    Type: string;
    /**
     * value: "Priority"
     * @const
     */
    Priority: string;
    /**
     * value: "Status"
     * @const
     */
    Status: string;
    /**
     * value: "Assignee"
     * @const
     */
    Assignee: string;
}
/**
 * *
 */
export type ExternalIssueApiField = any;
