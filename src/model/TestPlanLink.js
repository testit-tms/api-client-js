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
import ExternalLinkModel from './ExternalLinkModel';
import LinkModel from './LinkModel';

/**
 * The TestPlanLink model module.
 * @module model/TestPlanLink
 * @version 2.0.0
 */
class TestPlanLink {
    /**
     * Constructs a new <code>TestPlanLink</code>.
     * @alias module:model/TestPlanLink
     */
    constructor() { 
        
        TestPlanLink.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TestPlanLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanLink} obj Optional instance to populate.
     * @return {module:model/TestPlanLink} The populated <code>TestPlanLink</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TestPlanLink();

            if (data.hasOwnProperty('bugLink')) {
                obj['bugLink'] = LinkModel.constructFromObject(data['bugLink']);
            }
            if (data.hasOwnProperty('workItemGlobalId')) {
                obj['workItemGlobalId'] = ApiClient.convertToType(data['workItemGlobalId'], 'Number');
            }
            if (data.hasOwnProperty('workItemName')) {
                obj['workItemName'] = ApiClient.convertToType(data['workItemName'], 'String');
            }
            if (data.hasOwnProperty('configurationName')) {
                obj['configurationName'] = ApiClient.convertToType(data['configurationName'], 'String');
            }
            if (data.hasOwnProperty('createdById')) {
                obj['createdById'] = ApiClient.convertToType(data['createdById'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('info')) {
                obj['info'] = ExternalLinkModel.constructFromObject(data['info']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/LinkModel} bugLink
 */
TestPlanLink.prototype['bugLink'] = undefined;

/**
 * @member {Number} workItemGlobalId
 */
TestPlanLink.prototype['workItemGlobalId'] = undefined;

/**
 * @member {String} workItemName
 */
TestPlanLink.prototype['workItemName'] = undefined;

/**
 * @member {String} configurationName
 */
TestPlanLink.prototype['configurationName'] = undefined;

/**
 * @member {String} createdById
 */
TestPlanLink.prototype['createdById'] = undefined;

/**
 * @member {String} comment
 */
TestPlanLink.prototype['comment'] = undefined;

/**
 * @member {module:model/ExternalLinkModel} info
 */
TestPlanLink.prototype['info'] = undefined;






export default TestPlanLink;
