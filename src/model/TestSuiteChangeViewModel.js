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
import ShortConfiguration from './ShortConfiguration';

/**
 * The TestSuiteChangeViewModel model module.
 * @module model/TestSuiteChangeViewModel
 * @version 2.0.0
 */
class TestSuiteChangeViewModel {
    /**
     * Constructs a new <code>TestSuiteChangeViewModel</code>.
     * @alias module:model/TestSuiteChangeViewModel
     */
    constructor() { 
        
        TestSuiteChangeViewModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TestSuiteChangeViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestSuiteChangeViewModel} obj Optional instance to populate.
     * @return {module:model/TestSuiteChangeViewModel} The populated <code>TestSuiteChangeViewModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TestSuiteChangeViewModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('configurations')) {
                obj['configurations'] = ApiClient.convertToType(data['configurations'], [ShortConfiguration]);
            }
            if (data.hasOwnProperty('workItemCount')) {
                obj['workItemCount'] = ApiClient.convertToType(data['workItemCount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
TestSuiteChangeViewModel.prototype['id'] = undefined;

/**
 * @member {String} name
 */
TestSuiteChangeViewModel.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/ShortConfiguration>} configurations
 */
TestSuiteChangeViewModel.prototype['configurations'] = undefined;

/**
 * @member {Number} workItemCount
 */
TestSuiteChangeViewModel.prototype['workItemCount'] = undefined;






export default TestSuiteChangeViewModel;
