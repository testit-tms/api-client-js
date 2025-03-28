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
 */

import { RequestFile } from './models';
import { GuidExtractionModel } from './guidExtractionModel';
import { TestResultsLocalFilterModel } from './testResultsLocalFilterModel';

export class TestRunTestResultsSelectModel {
    /**
    * Collection of filters to apply to search
    */
    'filter'?: TestResultsLocalFilterModel | null;
    /**
    * Rules to include and exclude certain entities in result
    */
    'testResultIdsExtractionModel'?: GuidExtractionModel | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "filter",
            "baseName": "filter",
            "type": "TestResultsLocalFilterModel"
        },
        {
            "name": "testResultIdsExtractionModel",
            "baseName": "testResultIdsExtractionModel",
            "type": "GuidExtractionModel"
        }    ];

    static getAttributeTypeMap() {
        return TestRunTestResultsSelectModel.attributeTypeMap;
    }
}

