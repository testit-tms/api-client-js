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
import TestRunGroupByFailureClassModel from './TestRunGroupByFailureClassModel';
import TestRunGroupByStatusModel from './TestRunGroupByStatusModel';

/**
 * The TestRunAnalyticResultModel model module.
 * @module model/TestRunAnalyticResultModel
 * @version 2.0.0
 */
class TestRunAnalyticResultModel {
    /**
     * Constructs a new <code>TestRunAnalyticResultModel</code>.
     * @alias module:model/TestRunAnalyticResultModel
     */
    constructor() { 
        
        TestRunAnalyticResultModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TestRunAnalyticResultModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestRunAnalyticResultModel} obj Optional instance to populate.
     * @return {module:model/TestRunAnalyticResultModel} The populated <code>TestRunAnalyticResultModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TestRunAnalyticResultModel();

            if (data.hasOwnProperty('countGroupByStatus')) {
                obj['countGroupByStatus'] = ApiClient.convertToType(data['countGroupByStatus'], [TestRunGroupByStatusModel]);
            }
            if (data.hasOwnProperty('countGroupByFailureClass')) {
                obj['countGroupByFailureClass'] = ApiClient.convertToType(data['countGroupByFailureClass'], [TestRunGroupByFailureClassModel]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/TestRunGroupByStatusModel>} countGroupByStatus
 */
TestRunAnalyticResultModel.prototype['countGroupByStatus'] = undefined;

/**
 * @member {Array.<module:model/TestRunGroupByFailureClassModel>} countGroupByFailureClass
 */
TestRunAnalyticResultModel.prototype['countGroupByFailureClass'] = undefined;






export default TestRunAnalyticResultModel;
