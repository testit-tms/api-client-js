/**
* Enum class WebhookVariablesType.
* @enum {}
* @readonly
*/
export default class WebhookVariablesType {
    /**
    * Returns a <code>WebhookVariablesType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/WebhookVariablesType} The enum <code>WebhookVariablesType</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "VariablesForUrl"
     * @const
     */
    VariablesForUrl: string;
    /**
     * value: "VariablesForHeaders"
     * @const
     */
    VariablesForHeaders: string;
    /**
     * value: "VariablesForBody"
     * @const
     */
    VariablesForBody: string;
}
/**
 * *
 */
export type WebhookVariablesType = any;
