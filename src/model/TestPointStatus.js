/**
 * API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class TestPointStatus.
* @enum {}
* @readonly
*/
export default class TestPointStatus {
    
        /**
         * value: "InProgress"
         * @const
         */
        "InProgress" = "InProgress";

    
        /**
         * value: "Passed"
         * @const
         */
        "Passed" = "Passed";

    
        /**
         * value: "Failed"
         * @const
         */
        "Failed" = "Failed";

    
        /**
         * value: "Skipped"
         * @const
         */
        "Skipped" = "Skipped";

    
        /**
         * value: "Blocked"
         * @const
         */
        "Blocked" = "Blocked";

    

    /**
    * Returns a <code>TestPointStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TestPointStatus} The enum <code>TestPointStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
