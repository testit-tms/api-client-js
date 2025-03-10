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
import { AttachmentApiResult } from './attachmentApiResult';
import { AutoTestOutcome } from './autoTestOutcome';

export class AutoTestStepResultsApiResult {
    'title'?: string | null;
    'description'?: string | null;
    'info'?: string | null;
    'startedOn'?: Date | null;
    'completedOn'?: Date | null;
    'duration'?: number | null;
    'outcome'?: AutoTestOutcome | null;
    'stepResults'?: Array<AutoTestStepResultsApiResult> | null;
    'attachments'?: Array<AttachmentApiResult> | null;
    'parameters'?: { [key: string]: string; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "info",
            "baseName": "info",
            "type": "string"
        },
        {
            "name": "startedOn",
            "baseName": "startedOn",
            "type": "Date"
        },
        {
            "name": "completedOn",
            "baseName": "completedOn",
            "type": "Date"
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "number"
        },
        {
            "name": "outcome",
            "baseName": "outcome",
            "type": "AutoTestOutcome"
        },
        {
            "name": "stepResults",
            "baseName": "stepResults",
            "type": "Array<AutoTestStepResultsApiResult>"
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<AttachmentApiResult>"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return AutoTestStepResultsApiResult.attributeTypeMap;
    }
}

export namespace AutoTestStepResultsApiResult {
}
