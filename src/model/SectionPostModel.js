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
import StepPutModel from './StepPutModel';

/**
 * The SectionPostModel model module.
 * @module model/SectionPostModel
 * @version 2.0.0
 */
class SectionPostModel {
    /**
     * Constructs a new <code>SectionPostModel</code>.
     * @alias module:model/SectionPostModel
     * @param name {String} 
     * @param projectId {String} 
     */
    constructor(name, projectId) { 
        
        SectionPostModel.initialize(this, name, projectId);
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
     * Constructs a <code>SectionPostModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SectionPostModel} obj Optional instance to populate.
     * @return {module:model/SectionPostModel} The populated <code>SectionPostModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SectionPostModel();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'String');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
            }
            if (data.hasOwnProperty('preconditionSteps')) {
                obj['preconditionSteps'] = ApiClient.convertToType(data['preconditionSteps'], [StepPutModel]);
            }
            if (data.hasOwnProperty('postconditionSteps')) {
                obj['postconditionSteps'] = ApiClient.convertToType(data['postconditionSteps'], [StepPutModel]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
SectionPostModel.prototype['name'] = undefined;

/**
 * @member {String} projectId
 */
SectionPostModel.prototype['projectId'] = undefined;

/**
 * @member {String} parentId
 */
SectionPostModel.prototype['parentId'] = undefined;

/**
 * @member {Array.<module:model/StepPutModel>} preconditionSteps
 */
SectionPostModel.prototype['preconditionSteps'] = undefined;

/**
 * @member {Array.<module:model/StepPutModel>} postconditionSteps
 */
SectionPostModel.prototype['postconditionSteps'] = undefined;






export default SectionPostModel;
