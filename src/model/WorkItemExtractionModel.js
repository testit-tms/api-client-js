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
 * The WorkItemExtractionModel model module.
 * @module model/WorkItemExtractionModel
 * @version 2.0.0
 */
class WorkItemExtractionModel {
    /**
     * Constructs a new <code>WorkItemExtractionModel</code>.
     * Rules for different level entities inclusion/exclusion
     * @alias module:model/WorkItemExtractionModel
     */
    constructor() { 
        
        WorkItemExtractionModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkItemExtractionModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemExtractionModel} obj Optional instance to populate.
     * @return {module:model/WorkItemExtractionModel} The populated <code>WorkItemExtractionModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkItemExtractionModel();

            if (data.hasOwnProperty('includeWorkItems')) {
                obj['includeWorkItems'] = ApiClient.convertToType(data['includeWorkItems'], ['String']);
            }
            if (data.hasOwnProperty('includeSections')) {
                obj['includeSections'] = ApiClient.convertToType(data['includeSections'], ['String']);
            }
            if (data.hasOwnProperty('includeProjects')) {
                obj['includeProjects'] = ApiClient.convertToType(data['includeProjects'], ['String']);
            }
            if (data.hasOwnProperty('excludeWorkItems')) {
                obj['excludeWorkItems'] = ApiClient.convertToType(data['excludeWorkItems'], ['String']);
            }
            if (data.hasOwnProperty('excludeSections')) {
                obj['excludeSections'] = ApiClient.convertToType(data['excludeSections'], ['String']);
            }
            if (data.hasOwnProperty('excludeProjects')) {
                obj['excludeProjects'] = ApiClient.convertToType(data['excludeProjects'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Identifiers of work items to be included
 * @member {Array.<String>} includeWorkItems
 */
WorkItemExtractionModel.prototype['includeWorkItems'] = undefined;

/**
 * Identifiers of sections to be included
 * @member {Array.<String>} includeSections
 */
WorkItemExtractionModel.prototype['includeSections'] = undefined;

/**
 * Identifiers of projects to be included
 * @member {Array.<String>} includeProjects
 */
WorkItemExtractionModel.prototype['includeProjects'] = undefined;

/**
 * Identifiers of work items to be excluded
 * @member {Array.<String>} excludeWorkItems
 */
WorkItemExtractionModel.prototype['excludeWorkItems'] = undefined;

/**
 * Identifiers of sections to be excluded
 * @member {Array.<String>} excludeSections
 */
WorkItemExtractionModel.prototype['excludeSections'] = undefined;

/**
 * Identifiers of projects to be excluded
 * @member {Array.<String>} excludeProjects
 */
WorkItemExtractionModel.prototype['excludeProjects'] = undefined;






export default WorkItemExtractionModel;
