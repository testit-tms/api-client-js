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
* Enum class TestPlanStatusModel.
* @enum {}
* @readonly
*/
export default class TestPlanStatusModel {
    
        /**
         * value: "New"
         * @const
         */
        "New" = "New";

    
        /**
         * value: "InProgress"
         * @const
         */
        "InProgress" = "InProgress";

    
        /**
         * value: "Paused"
         * @const
         */
        "Paused" = "Paused";

    
        /**
         * value: "Completed"
         * @const
         */
        "Completed" = "Completed";

    

    /**
    * Returns a <code>TestPlanStatusModel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TestPlanStatusModel} The enum <code>TestPlanStatusModel</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
