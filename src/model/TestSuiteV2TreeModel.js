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
 * The TestSuiteV2TreeModel model module.
 * @module model/TestSuiteV2TreeModel
 * @version 2.0.0
 */
class TestSuiteV2TreeModel {
    /**
     * Constructs a new <code>TestSuiteV2TreeModel</code>.
     * @alias module:model/TestSuiteV2TreeModel
     * @param name {String} 
     */
    constructor(name) { 
        
        TestSuiteV2TreeModel.initialize(this, name);
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
     * Constructs a <code>TestSuiteV2TreeModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestSuiteV2TreeModel} obj Optional instance to populate.
     * @return {module:model/TestSuiteV2TreeModel} The populated <code>TestSuiteV2TreeModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TestSuiteV2TreeModel();

            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], [TestSuiteV2TreeModel]);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
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
 * nested enumeration of children is allowed
 * @member {Array.<module:model/TestSuiteV2TreeModel>} children
 */
TestSuiteV2TreeModel.prototype['children'] = undefined;

/**
 * @member {String} id
 */
TestSuiteV2TreeModel.prototype['id'] = undefined;

/**
 * @member {String} parentId
 */
TestSuiteV2TreeModel.prototype['parentId'] = undefined;

/**
 * @member {String} testPlanId
 */
TestSuiteV2TreeModel.prototype['testPlanId'] = undefined;

/**
 * @member {String} name
 */
TestSuiteV2TreeModel.prototype['name'] = undefined;






export default TestSuiteV2TreeModel;
