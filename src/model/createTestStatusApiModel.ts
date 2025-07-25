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
import { TestStatusApiType } from './testStatusApiType';

export class CreateTestStatusApiModel {
    /**
    * Name of the status, must be unique
    */
    'name': string;
    /**
    * Type of the status
    */
    'type': TestStatusApiType;
    /**
    * Code of the status, must be unique
    */
    'code': string;
    /**
    * Optional description of the status
    */
    'description'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TestStatusApiType"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateTestStatusApiModel.attributeTypeMap;
    }
}

export namespace CreateTestStatusApiModel {
}
