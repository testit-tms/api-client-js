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
import AttachmentPutModel from './AttachmentPutModel';
import LinkModel from './LinkModel';
import StepResultModel from './StepResultModel';
import TestResultStepCommentPutModel from './TestResultStepCommentPutModel';

/**
 * The TestResultCreateModel model module.
 * @module model/TestResultCreateModel
 * @version 2.0.0
 */
class TestResultCreateModel {
    /**
     * Constructs a new <code>TestResultCreateModel</code>.
     * @alias module:model/TestResultCreateModel
     */
    constructor() { 
        
        TestResultCreateModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TestResultCreateModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestResultCreateModel} obj Optional instance to populate.
     * @return {module:model/TestResultCreateModel} The populated <code>TestResultCreateModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TestResultCreateModel();

            if (data.hasOwnProperty('durationInMs')) {
                obj['durationInMs'] = ApiClient.convertToType(data['durationInMs'], 'Number');
            }
            if (data.hasOwnProperty('stepComments')) {
                obj['stepComments'] = ApiClient.convertToType(data['stepComments'], [TestResultStepCommentPutModel]);
            }
            if (data.hasOwnProperty('failureClassIds')) {
                obj['failureClassIds'] = ApiClient.convertToType(data['failureClassIds'], ['String']);
            }
            if (data.hasOwnProperty('outcome')) {
                obj['outcome'] = ApiClient.convertToType(data['outcome'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], [LinkModel]);
            }
            if (data.hasOwnProperty('stepResults')) {
                obj['stepResults'] = ApiClient.convertToType(data['stepResults'], [StepResultModel]);
            }
            if (data.hasOwnProperty('attachments')) {
                obj['attachments'] = ApiClient.convertToType(data['attachments'], [AttachmentPutModel]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} durationInMs
 */
TestResultCreateModel.prototype['durationInMs'] = undefined;

/**
 * @member {Array.<module:model/TestResultStepCommentPutModel>} stepComments
 */
TestResultCreateModel.prototype['stepComments'] = undefined;

/**
 * @member {Array.<String>} failureClassIds
 */
TestResultCreateModel.prototype['failureClassIds'] = undefined;

/**
 * @member {String} outcome
 */
TestResultCreateModel.prototype['outcome'] = undefined;

/**
 * @member {String} comment
 */
TestResultCreateModel.prototype['comment'] = undefined;

/**
 * @member {Array.<module:model/LinkModel>} links
 */
TestResultCreateModel.prototype['links'] = undefined;

/**
 * @member {Array.<module:model/StepResultModel>} stepResults
 */
TestResultCreateModel.prototype['stepResults'] = undefined;

/**
 * @member {Array.<module:model/AttachmentPutModel>} attachments
 */
TestResultCreateModel.prototype['attachments'] = undefined;






export default TestResultCreateModel;
