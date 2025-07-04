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

export class UpdateStepApiModel {
    /**
    * Step unique internal identifier
    */
    'id': string;
    /**
    * Action applied by user
    */
    'action'?: string | null;
    /**
    * Expected system reaction
    */
    'expected'?: string | null;
    /**
    * Test data for step
    */
    'testData'?: string | null;
    /**
    * Comments for step
    */
    'comments'?: string | null;
    /**
    * Unique identifier of workitem which relates to the step
    */
    'workItemId'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "action",
            "baseName": "action",
            "type": "string"
        },
        {
            "name": "expected",
            "baseName": "expected",
            "type": "string"
        },
        {
            "name": "testData",
            "baseName": "testData",
            "type": "string"
        },
        {
            "name": "comments",
            "baseName": "comments",
            "type": "string"
        },
        {
            "name": "workItemId",
            "baseName": "workItemId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UpdateStepApiModel.attributeTypeMap;
    }
}

