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
import TestRunStateTypeModel from './TestRunStateTypeModel';

/**
 * The TestRunShortModel model module.
 * @module model/TestRunShortModel
 * @version 2.0.0
 */
class TestRunShortModel {
    /**
     * Constructs a new <code>TestRunShortModel</code>.
     * @alias module:model/TestRunShortModel
     */
    constructor() { 
        
        TestRunShortModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TestRunShortModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestRunShortModel} obj Optional instance to populate.
     * @return {module:model/TestRunShortModel} The populated <code>TestRunShortModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TestRunShortModel();

            if (data.hasOwnProperty('stateName')) {
                obj['stateName'] = TestRunStateTypeModel.constructFromObject(data['stateName']);
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'String');
            }
            if (data.hasOwnProperty('testPlanId')) {
                obj['testPlanId'] = ApiClient.convertToType(data['testPlanId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('isDeleted')) {
                obj['isDeleted'] = ApiClient.convertToType(data['isDeleted'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TestRunStateTypeModel} stateName
 */
TestRunShortModel.prototype['stateName'] = undefined;

/**
 * @member {String} projectId
 */
TestRunShortModel.prototype['projectId'] = undefined;

/**
 * @member {String} testPlanId
 */
TestRunShortModel.prototype['testPlanId'] = undefined;

/**
 * @member {String} name
 */
TestRunShortModel.prototype['name'] = undefined;

/**
 * @member {String} description
 */
TestRunShortModel.prototype['description'] = undefined;

/**
 * @member {String} id
 */
TestRunShortModel.prototype['id'] = undefined;

/**
 * @member {Boolean} isDeleted
 */
TestRunShortModel.prototype['isDeleted'] = undefined;






export default TestRunShortModel;
