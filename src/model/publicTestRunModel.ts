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
import { AutoTestModel } from './autoTestModel';
import { ConfigurationModel } from './configurationModel';
import { PublicTestPointModel } from './publicTestPointModel';
import { TestStatusModel } from './testStatusModel';

export class PublicTestRunModel {
    'testRunId': string;
    'testPlanId'?: string | null;
    'testPlanGlobalId': number;
    'name': string;
    'productName'?: string | null;
    'build'?: string | null;
    'configurations': Array<ConfigurationModel>;
    'autoTests': Array<AutoTestModel>;
    'testPoints': Array<PublicTestPointModel>;
    /**
    * @deprecated
    */
    'status': string;
    'statusModel': TestStatusModel;
    'customParameters'?: { [key: string]: string; } | null;
    'testRunDescription'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "testRunId",
            "baseName": "testRunId",
            "type": "string"
        },
        {
            "name": "testPlanId",
            "baseName": "testPlanId",
            "type": "string"
        },
        {
            "name": "testPlanGlobalId",
            "baseName": "testPlanGlobalId",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "productName",
            "baseName": "productName",
            "type": "string"
        },
        {
            "name": "build",
            "baseName": "build",
            "type": "string"
        },
        {
            "name": "configurations",
            "baseName": "configurations",
            "type": "Array<ConfigurationModel>"
        },
        {
            "name": "autoTests",
            "baseName": "autoTests",
            "type": "Array<AutoTestModel>"
        },
        {
            "name": "testPoints",
            "baseName": "testPoints",
            "type": "Array<PublicTestPointModel>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "statusModel",
            "baseName": "statusModel",
            "type": "TestStatusModel"
        },
        {
            "name": "customParameters",
            "baseName": "customParameters",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "testRunDescription",
            "baseName": "testRunDescription",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PublicTestRunModel.attributeTypeMap;
    }
}

