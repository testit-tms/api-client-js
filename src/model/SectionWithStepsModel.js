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
import StepModel from './StepModel';

/**
 * The SectionWithStepsModel model module.
 * @module model/SectionWithStepsModel
 * @version 2.0.0
 */
class SectionWithStepsModel {
    /**
     * Constructs a new <code>SectionWithStepsModel</code>.
     * @alias module:model/SectionWithStepsModel
     * @param name {String} 
     */
    constructor(name) { 
        
        SectionWithStepsModel.initialize(this, name);
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
     * Constructs a <code>SectionWithStepsModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SectionWithStepsModel} obj Optional instance to populate.
     * @return {module:model/SectionWithStepsModel} The populated <code>SectionWithStepsModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SectionWithStepsModel();

            if (data.hasOwnProperty('preconditionSteps')) {
                obj['preconditionSteps'] = ApiClient.convertToType(data['preconditionSteps'], [StepModel]);
            }
            if (data.hasOwnProperty('postconditionSteps')) {
                obj['postconditionSteps'] = ApiClient.convertToType(data['postconditionSteps'], [StepModel]);
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'String');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
            if (data.hasOwnProperty('isDeleted')) {
                obj['isDeleted'] = ApiClient.convertToType(data['isDeleted'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('createdDate')) {
                obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
            }
            if (data.hasOwnProperty('modifiedDate')) {
                obj['modifiedDate'] = ApiClient.convertToType(data['modifiedDate'], 'Date');
            }
            if (data.hasOwnProperty('createdById')) {
                obj['createdById'] = ApiClient.convertToType(data['createdById'], 'String');
            }
            if (data.hasOwnProperty('modifiedById')) {
                obj['modifiedById'] = ApiClient.convertToType(data['modifiedById'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/StepModel>} preconditionSteps
 */
SectionWithStepsModel.prototype['preconditionSteps'] = undefined;

/**
 * @member {Array.<module:model/StepModel>} postconditionSteps
 */
SectionWithStepsModel.prototype['postconditionSteps'] = undefined;

/**
 * @member {String} projectId
 */
SectionWithStepsModel.prototype['projectId'] = undefined;

/**
 * @member {String} parentId
 */
SectionWithStepsModel.prototype['parentId'] = undefined;

/**
 * @member {Boolean} isDeleted
 */
SectionWithStepsModel.prototype['isDeleted'] = undefined;

/**
 * @member {String} id
 */
SectionWithStepsModel.prototype['id'] = undefined;

/**
 * @member {Date} createdDate
 */
SectionWithStepsModel.prototype['createdDate'] = undefined;

/**
 * @member {Date} modifiedDate
 */
SectionWithStepsModel.prototype['modifiedDate'] = undefined;

/**
 * @member {String} createdById
 */
SectionWithStepsModel.prototype['createdById'] = undefined;

/**
 * @member {String} modifiedById
 */
SectionWithStepsModel.prototype['modifiedById'] = undefined;

/**
 * @member {String} name
 */
SectionWithStepsModel.prototype['name'] = undefined;






export default SectionWithStepsModel;
