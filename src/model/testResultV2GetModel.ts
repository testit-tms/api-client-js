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
import { AttachmentModel } from './attachmentModel';
import { AutoTestModelV2GetModel } from './autoTestModelV2GetModel';
import { ConfigurationModel } from './configurationModel';
import { LinkModel } from './linkModel';
import { TestPointShortModel } from './testPointShortModel';

export class TestResultV2GetModel {
    'configuration'?: ConfigurationModel;
    'autoTest'?: AutoTestModelV2GetModel;
    'id'?: string;
    'configurationId'?: string;
    'workItemVersionId'?: string;
    'autoTestId'?: string | null;
    'message'?: string | null;
    'traces'?: string | null;
    'startedOn'?: Date | null;
    'completedOn'?: Date | null;
    'runByUserId'?: string | null;
    'stoppedByUserId'?: string | null;
    'testPointId'?: string | null;
    'testPoint'?: TestPointShortModel;
    'testRunId'?: string;
    /**
    * Property can contain one of these values: Passed, Failed, InProgress, Blocked, Skipped
    */
    'outcome'?: string | null;
    'comment'?: string | null;
    'links'?: Array<LinkModel> | null;
    'attachments'?: Array<AttachmentModel> | null;
    'parameters'?: { [key: string]: string; } | null;
    'properties'?: { [key: string]: string; } | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "ConfigurationModel"
        },
        {
            "name": "autoTest",
            "baseName": "autoTest",
            "type": "AutoTestModelV2GetModel"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "configurationId",
            "baseName": "configurationId",
            "type": "string"
        },
        {
            "name": "workItemVersionId",
            "baseName": "workItemVersionId",
            "type": "string"
        },
        {
            "name": "autoTestId",
            "baseName": "autoTestId",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "traces",
            "baseName": "traces",
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
            "name": "runByUserId",
            "baseName": "runByUserId",
            "type": "string"
        },
        {
            "name": "stoppedByUserId",
            "baseName": "stoppedByUserId",
            "type": "string"
        },
        {
            "name": "testPointId",
            "baseName": "testPointId",
            "type": "string"
        },
        {
            "name": "testPoint",
            "baseName": "testPoint",
            "type": "TestPointShortModel"
        },
        {
            "name": "testRunId",
            "baseName": "testRunId",
            "type": "string"
        },
        {
            "name": "outcome",
            "baseName": "outcome",
            "type": "string"
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<LinkModel>"
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<AttachmentModel>"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return TestResultV2GetModel.attributeTypeMap;
    }
}
