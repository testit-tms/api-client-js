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
 * The CustomAttributeTemplatePostModel model module.
 * @module model/CustomAttributeTemplatePostModel
 * @version 2.0.0
 */
class CustomAttributeTemplatePostModel {
    /**
     * Constructs a new <code>CustomAttributeTemplatePostModel</code>.
     * @alias module:model/CustomAttributeTemplatePostModel
     */
    constructor() { 
        
        CustomAttributeTemplatePostModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomAttributeTemplatePostModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomAttributeTemplatePostModel} obj Optional instance to populate.
     * @return {module:model/CustomAttributeTemplatePostModel} The populated <code>CustomAttributeTemplatePostModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomAttributeTemplatePostModel();

            if (data.hasOwnProperty('customAttributeIds')) {
                obj['customAttributeIds'] = ApiClient.convertToType(data['customAttributeIds'], ['String']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} customAttributeIds
 */
CustomAttributeTemplatePostModel.prototype['customAttributeIds'] = undefined;

/**
 * @member {String} name
 */
CustomAttributeTemplatePostModel.prototype['name'] = undefined;






export default CustomAttributeTemplatePostModel;
