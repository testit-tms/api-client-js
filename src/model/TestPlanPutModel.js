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
import TagShortModel from './TagShortModel';

/**
 * The TestPlanPutModel model module.
 * @module model/TestPlanPutModel
 * @version 2.0.0
 */
class TestPlanPutModel {
    /**
     * Constructs a new <code>TestPlanPutModel</code>.
     * @alias module:model/TestPlanPutModel
     * @param name {String} 
     * @param projectId {String} 
     */
    constructor(name, projectId) { 
        
        TestPlanPutModel.initialize(this, name, projectId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, projectId) { 
        obj['name'] = name;
        obj['projectId'] = projectId;
    }

    /**
     * Constructs a <code>TestPlanPutModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanPutModel} obj Optional instance to populate.
     * @return {module:model/TestPlanPutModel} The populated <code>TestPlanPutModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TestPlanPutModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('lockedById')) {
                obj['lockedById'] = ApiClient.convertToType(data['lockedById'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [TagShortModel]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('build')) {
                obj['build'] = ApiClient.convertToType(data['build'], 'String');
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'String');
            }
            if (data.hasOwnProperty('productName')) {
                obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
            }
            if (data.hasOwnProperty('hasAutomaticDurationTimer')) {
                obj['hasAutomaticDurationTimer'] = ApiClient.convertToType(data['hasAutomaticDurationTimer'], 'Boolean');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], {'String': Object});
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
TestPlanPutModel.prototype['id'] = undefined;

/**
 * @member {String} lockedById
 */
TestPlanPutModel.prototype['lockedById'] = undefined;

/**
 * @member {Array.<module:model/TagShortModel>} tags
 */
TestPlanPutModel.prototype['tags'] = undefined;

/**
 * @member {String} name
 */
TestPlanPutModel.prototype['name'] = undefined;

/**
 * Used for analytics
 * @member {Date} startDate
 */
TestPlanPutModel.prototype['startDate'] = undefined;

/**
 * Used for analytics
 * @member {Date} endDate
 */
TestPlanPutModel.prototype['endDate'] = undefined;

/**
 * @member {String} description
 */
TestPlanPutModel.prototype['description'] = undefined;

/**
 * @member {String} build
 */
TestPlanPutModel.prototype['build'] = undefined;

/**
 * @member {String} projectId
 */
TestPlanPutModel.prototype['projectId'] = undefined;

/**
 * @member {String} productName
 */
TestPlanPutModel.prototype['productName'] = undefined;

/**
 * @member {Boolean} hasAutomaticDurationTimer
 */
TestPlanPutModel.prototype['hasAutomaticDurationTimer'] = undefined;

/**
 * @member {Object.<String, Object>} attributes
 */
TestPlanPutModel.prototype['attributes'] = undefined;






export default TestPlanPutModel;
