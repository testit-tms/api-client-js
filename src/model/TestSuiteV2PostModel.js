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
 * The TestSuiteV2PostModel model module.
 * @module model/TestSuiteV2PostModel
 * @version 2.0.0
 */
class TestSuiteV2PostModel {
    /**
     * Constructs a new <code>TestSuiteV2PostModel</code>.
     * @alias module:model/TestSuiteV2PostModel
     * @param name {String} 
     */
    constructor(name) { 
        
        TestSuiteV2PostModel.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>TestSuiteV2PostModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestSuiteV2PostModel} obj Optional instance to populate.
     * @return {module:model/TestSuiteV2PostModel} The populated <code>TestSuiteV2PostModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TestSuiteV2PostModel();

            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
            if (data.hasOwnProperty('testPlanId')) {
                obj['testPlanId'] = ApiClient.convertToType(data['testPlanId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} parentId
 */
TestSuiteV2PostModel.prototype['parentId'] = undefined;

/**
 * @member {String} testPlanId
 */
TestSuiteV2PostModel.prototype['testPlanId'] = undefined;

/**
 * @member {String} name
 */
TestSuiteV2PostModel.prototype['name'] = undefined;






export default TestSuiteV2PostModel;
