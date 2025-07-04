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

export class TestPlanTestPointsSearchStatusCountersApiResult {
    'automatedTestPointsCount': number;
    'automatedTestPointsInProgressCount': number;
    'automatedTestPointsFailedCount': number;
    'manualTestPointsCount': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "automatedTestPointsCount",
            "baseName": "automatedTestPointsCount",
            "type": "number"
        },
        {
            "name": "automatedTestPointsInProgressCount",
            "baseName": "automatedTestPointsInProgressCount",
            "type": "number"
        },
        {
            "name": "automatedTestPointsFailedCount",
            "baseName": "automatedTestPointsFailedCount",
            "type": "number"
        },
        {
            "name": "manualTestPointsCount",
            "baseName": "manualTestPointsCount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TestPlanTestPointsSearchStatusCountersApiResult.attributeTypeMap;
    }
}

