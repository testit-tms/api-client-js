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
import ParameterShortModel from './ParameterShortModel';

/**
 * The PublicTestPointModel model module.
 * @module model/PublicTestPointModel
 * @version 2.0.0
 */
class PublicTestPointModel {
    /**
     * Constructs a new <code>PublicTestPointModel</code>.
     * @alias module:model/PublicTestPointModel
     */
    constructor() { 
        
        PublicTestPointModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PublicTestPointModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublicTestPointModel} obj Optional instance to populate.
     * @return {module:model/PublicTestPointModel} The populated <code>PublicTestPointModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PublicTestPointModel();

            if (data.hasOwnProperty('configurationId')) {
                obj['configurationId'] = ApiClient.convertToType(data['configurationId'], 'String');
            }
            if (data.hasOwnProperty('configurationGlobalId')) {
                obj['configurationGlobalId'] = ApiClient.convertToType(data['configurationGlobalId'], 'Number');
            }
            if (data.hasOwnProperty('autoTestIds')) {
                obj['autoTestIds'] = ApiClient.convertToType(data['autoTestIds'], ['String']);
            }
            if (data.hasOwnProperty('iterationId')) {
                obj['iterationId'] = ApiClient.convertToType(data['iterationId'], 'String');
            }
            if (data.hasOwnProperty('parameterModels')) {
                obj['parameterModels'] = ApiClient.convertToType(data['parameterModels'], [ParameterShortModel]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} configurationId
 */
PublicTestPointModel.prototype['configurationId'] = undefined;

/**
 * @member {Number} configurationGlobalId
 */
PublicTestPointModel.prototype['configurationGlobalId'] = undefined;

/**
 * @member {Array.<String>} autoTestIds
 */
PublicTestPointModel.prototype['autoTestIds'] = undefined;

/**
 * @member {String} iterationId
 */
PublicTestPointModel.prototype['iterationId'] = undefined;

/**
 * @member {Array.<module:model/ParameterShortModel>} parameterModels
 */
PublicTestPointModel.prototype['parameterModels'] = undefined;






export default PublicTestPointModel;
