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
import TestPointSelector from './TestPointSelector';

/**
 * The TestRunFillByConfigurationsPostModel model module.
 * @module model/TestRunFillByConfigurationsPostModel
 * @version 2.0.0
 */
class TestRunFillByConfigurationsPostModel {
    /**
     * Constructs a new <code>TestRunFillByConfigurationsPostModel</code>.
     * @alias module:model/TestRunFillByConfigurationsPostModel
     * @param testPointSelectors {Array.<module:model/TestPointSelector>} Specifies an array of work items and configuration to create a test run for.
     * @param projectId {String} Specifies the GUID of the project, in which a test run will be created.
     * @param testPlanId {String} Specifies the GUID of the test plan, within which the test run will be created.
     */
    constructor(testPointSelectors, projectId, testPlanId) { 
        
        TestRunFillByConfigurationsPostModel.initialize(this, testPointSelectors, projectId, testPlanId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, testPointSelectors, projectId, testPlanId) { 
        obj['testPointSelectors'] = testPointSelectors;
        obj['projectId'] = projectId;
        obj['testPlanId'] = testPlanId;
    }

    /**
     * Constructs a <code>TestRunFillByConfigurationsPostModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestRunFillByConfigurationsPostModel} obj Optional instance to populate.
     * @return {module:model/TestRunFillByConfigurationsPostModel} The populated <code>TestRunFillByConfigurationsPostModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TestRunFillByConfigurationsPostModel();

            if (data.hasOwnProperty('testPointSelectors')) {
                obj['testPointSelectors'] = ApiClient.convertToType(data['testPointSelectors'], [TestPointSelector]);
            }
            if (data.hasOwnProperty('projectId')) {
                obj['projectId'] = ApiClient.convertToType(data['projectId'], 'String');
            }
            if (data.hasOwnProperty('testPlanId')) {
                obj['testPlanId'] = ApiClient.convertToType(data['testPlanId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('launchSource')) {
                obj['launchSource'] = ApiClient.convertToType(data['launchSource'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Specifies an array of work items and configuration to create a test run for.
 * @member {Array.<module:model/TestPointSelector>} testPointSelectors
 */
TestRunFillByConfigurationsPostModel.prototype['testPointSelectors'] = undefined;

/**
 * Specifies the GUID of the project, in which a test run will be created.
 * @member {String} projectId
 */
TestRunFillByConfigurationsPostModel.prototype['projectId'] = undefined;

/**
 * Specifies the GUID of the test plan, within which the test run will be created.
 * @member {String} testPlanId
 */
TestRunFillByConfigurationsPostModel.prototype['testPlanId'] = undefined;

/**
 * Specifies the name of the test run.
 * @member {String} name
 */
TestRunFillByConfigurationsPostModel.prototype['name'] = undefined;

/**
 * Specifies the test run description.
 * @member {String} description
 */
TestRunFillByConfigurationsPostModel.prototype['description'] = undefined;

/**
 * Specifies the test run launch source.
 * @member {String} launchSource
 */
TestRunFillByConfigurationsPostModel.prototype['launchSource'] = undefined;






export default TestRunFillByConfigurationsPostModel;
