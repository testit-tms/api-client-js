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
 * The CustomAttributeTestPlanProjectRelationPutModel model module.
 * @module model/CustomAttributeTestPlanProjectRelationPutModel
 * @version 2.0.0
 */
class CustomAttributeTestPlanProjectRelationPutModel {
    /**
     * Constructs a new <code>CustomAttributeTestPlanProjectRelationPutModel</code>.
     * @alias module:model/CustomAttributeTestPlanProjectRelationPutModel
     * @param id {String} 
     * @param enabled {Boolean} 
     * @param required {Boolean} 
     */
    constructor(id, enabled, required) { 
        
        CustomAttributeTestPlanProjectRelationPutModel.initialize(this, id, enabled, required);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, enabled, required) { 
        obj['id'] = id;
        obj['enabled'] = enabled;
        obj['required'] = required;
    }

    /**
     * Constructs a <code>CustomAttributeTestPlanProjectRelationPutModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomAttributeTestPlanProjectRelationPutModel} obj Optional instance to populate.
     * @return {module:model/CustomAttributeTestPlanProjectRelationPutModel} The populated <code>CustomAttributeTestPlanProjectRelationPutModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomAttributeTestPlanProjectRelationPutModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
CustomAttributeTestPlanProjectRelationPutModel.prototype['id'] = undefined;

/**
 * @member {Boolean} enabled
 */
CustomAttributeTestPlanProjectRelationPutModel.prototype['enabled'] = undefined;

/**
 * @member {Boolean} required
 */
CustomAttributeTestPlanProjectRelationPutModel.prototype['required'] = undefined;






export default CustomAttributeTestPlanProjectRelationPutModel;
