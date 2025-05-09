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
import { TestRunGroupByFailureClassApiResult } from './testRunGroupByFailureClassApiResult';
import { TestRunGroupByStatusApiResult } from './testRunGroupByStatusApiResult';
import { TestRunGroupByStatusTypeApiResult } from './testRunGroupByStatusTypeApiResult';

export class TestRunAnalyticApiResult {
    'countGroupByStatus': Array<TestRunGroupByStatusApiResult>;
    'countGroupByStatusType': Array<TestRunGroupByStatusTypeApiResult>;
    'countGroupByFailureClass': Array<TestRunGroupByFailureClassApiResult>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "countGroupByStatus",
            "baseName": "countGroupByStatus",
            "type": "Array<TestRunGroupByStatusApiResult>"
        },
        {
            "name": "countGroupByStatusType",
            "baseName": "countGroupByStatusType",
            "type": "Array<TestRunGroupByStatusTypeApiResult>"
        },
        {
            "name": "countGroupByFailureClass",
            "baseName": "countGroupByFailureClass",
            "type": "Array<TestRunGroupByFailureClassApiResult>"
        }    ];

    static getAttributeTypeMap() {
        return TestRunAnalyticApiResult.attributeTypeMap;
    }
}

