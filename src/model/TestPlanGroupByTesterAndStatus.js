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
 * The TestPlanGroupByTesterAndStatus model module.
 * @module model/TestPlanGroupByTesterAndStatus
 * @version 2.0.0
 */
class TestPlanGroupByTesterAndStatus {
    /**
     * Constructs a new <code>TestPlanGroupByTesterAndStatus</code>.
     * @alias module:model/TestPlanGroupByTesterAndStatus
     */
    constructor() { 
        
        TestPlanGroupByTesterAndStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TestPlanGroupByTesterAndStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanGroupByTesterAndStatus} obj Optional instance to populate.
     * @return {module:model/TestPlanGroupByTesterAndStatus} The populated <code>TestPlanGroupByTesterAndStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TestPlanGroupByTesterAndStatus();

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} userId
 */
TestPlanGroupByTesterAndStatus.prototype['userId'] = undefined;

/**
 * @member {String} status
 */
TestPlanGroupByTesterAndStatus.prototype['status'] = undefined;

/**
 * @member {Number} value
 */
TestPlanGroupByTesterAndStatus.prototype['value'] = undefined;






export default TestPlanGroupByTesterAndStatus;
