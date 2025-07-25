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
import { TestPlanTestPointsStatusGroupApiResult } from './testPlanTestPointsStatusGroupApiResult';
import { TestPlanTestPointsTesterAndStatusGroupApiResult } from './testPlanTestPointsTesterAndStatusGroupApiResult';
import { TestPlanTestPointsTesterGroupApiResult } from './testPlanTestPointsTesterGroupApiResult';

export class TestPlanTestPointsAnalyticsApiResult {
    'countGroupByStatus': Array<TestPlanTestPointsStatusGroupApiResult>;
    'sumGroupByTester': Array<TestPlanTestPointsTesterGroupApiResult>;
    'countGroupByTester': Array<TestPlanTestPointsTesterGroupApiResult>;
    'countGroupByTesterAndStatus': Array<TestPlanTestPointsTesterAndStatusGroupApiResult>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "countGroupByStatus",
            "baseName": "countGroupByStatus",
            "type": "Array<TestPlanTestPointsStatusGroupApiResult>"
        },
        {
            "name": "sumGroupByTester",
            "baseName": "sumGroupByTester",
            "type": "Array<TestPlanTestPointsTesterGroupApiResult>"
        },
        {
            "name": "countGroupByTester",
            "baseName": "countGroupByTester",
            "type": "Array<TestPlanTestPointsTesterGroupApiResult>"
        },
        {
            "name": "countGroupByTesterAndStatus",
            "baseName": "countGroupByTesterAndStatus",
            "type": "Array<TestPlanTestPointsTesterAndStatusGroupApiResult>"
        }    ];

    static getAttributeTypeMap() {
        return TestPlanTestPointsAnalyticsApiResult.attributeTypeMap;
    }
}

