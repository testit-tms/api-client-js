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

export class FailureClassRegexModel {
    'regexText'?: string | null;
    'failureClassId'?: string | null;
    /**
    * Unique ID of the entity
    */
    'id'?: string;
    /**
    * Indicates if the entity is deleted
    */
    'isDeleted'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "regexText",
            "baseName": "regexText",
            "type": "string"
        },
        {
            "name": "failureClassId",
            "baseName": "failureClassId",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "isDeleted",
            "baseName": "isDeleted",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return FailureClassRegexModel.attributeTypeMap;
    }
}
