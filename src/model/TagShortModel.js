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
 * The TagShortModel model module.
 * @module model/TagShortModel
 * @version 2.0.0
 */
class TagShortModel {
    /**
     * Constructs a new <code>TagShortModel</code>.
     * @alias module:model/TagShortModel
     * @param name {String} 
     */
    constructor(name) { 
        
        TagShortModel.initialize(this, name);
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
     * Constructs a <code>TagShortModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagShortModel} obj Optional instance to populate.
     * @return {module:model/TagShortModel} The populated <code>TagShortModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TagShortModel();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
TagShortModel.prototype['name'] = undefined;






export default TagShortModel;
