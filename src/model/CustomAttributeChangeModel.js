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
 * The CustomAttributeChangeModel model module.
 * @module model/CustomAttributeChangeModel
 * @version 2.0.0
 */
class CustomAttributeChangeModel {
    /**
     * Constructs a new <code>CustomAttributeChangeModel</code>.
     * @alias module:model/CustomAttributeChangeModel
     */
    constructor() { 
        
        CustomAttributeChangeModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomAttributeChangeModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomAttributeChangeModel} obj Optional instance to populate.
     * @return {module:model/CustomAttributeChangeModel} The populated <code>CustomAttributeChangeModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomAttributeChangeModel();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('oldAttributeName')) {
                obj['oldAttributeName'] = ApiClient.convertToType(data['oldAttributeName'], 'String');
            }
            if (data.hasOwnProperty('newAttributeName')) {
                obj['newAttributeName'] = ApiClient.convertToType(data['newAttributeName'], 'String');
            }
            if (data.hasOwnProperty('oldValue')) {
                obj['oldValue'] = ApiClient.convertToType(data['oldValue'], Object);
            }
            if (data.hasOwnProperty('newValue')) {
                obj['newValue'] = ApiClient.convertToType(data['newValue'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} type
 */
CustomAttributeChangeModel.prototype['type'] = undefined;

/**
 * @member {String} oldAttributeName
 */
CustomAttributeChangeModel.prototype['oldAttributeName'] = undefined;

/**
 * @member {String} newAttributeName
 */
CustomAttributeChangeModel.prototype['newAttributeName'] = undefined;

/**
 * @member {Object} oldValue
 */
CustomAttributeChangeModel.prototype['oldValue'] = undefined;

/**
 * @member {Object} newValue
 */
CustomAttributeChangeModel.prototype['newValue'] = undefined;






export default CustomAttributeChangeModel;
