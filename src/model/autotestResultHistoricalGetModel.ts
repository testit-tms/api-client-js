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
import { AutotestResultOutcome } from './autotestResultOutcome';

export class AutotestResultHistoricalGetModel {
    'id'?: string;
    'createdDate'?: Date;
    'createdById'?: string;
    'modifiedDate'?: Date | null;
    'modifiedById'?: string | null;
    'testRunId'?: string;
    'testRunName'?: string | null;
    'testPlanId'?: string | null;
    'testPlanGlobalId'?: number | null;
    'testPlanName'?: string | null;
    'configurationId'?: string;
    'outcome'?: AutotestResultOutcome;
    'duration'?: number | null;
    'launchSource'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date"
        },
        {
            "name": "createdById",
            "baseName": "createdById",
            "type": "string"
        },
        {
            "name": "modifiedDate",
            "baseName": "modifiedDate",
            "type": "Date"
        },
        {
            "name": "modifiedById",
            "baseName": "modifiedById",
            "type": "string"
        },
        {
            "name": "testRunId",
            "baseName": "testRunId",
            "type": "string"
        },
        {
            "name": "testRunName",
            "baseName": "testRunName",
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
            "name": "testPlanName",
            "baseName": "testPlanName",
            "type": "string"
        },
        {
            "name": "configurationId",
            "baseName": "configurationId",
            "type": "string"
        },
        {
            "name": "outcome",
            "baseName": "outcome",
            "type": "AutotestResultOutcome"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number"
        },
        {
            "name": "launchSource",
            "baseName": "launchSource",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AutotestResultHistoricalGetModel.attributeTypeMap;
    }
}

export namespace AutotestResultHistoricalGetModel {
}