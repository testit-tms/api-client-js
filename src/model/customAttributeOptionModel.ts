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

export class CustomAttributeOptionModel {
    /**
    * Unique ID of the attribute option
    */
    'id'?: string;
    /**
    * Indicates if the attributes option is deleted
    */
    'isDeleted'?: boolean;
    /**
    * Value of the attribute option
    */
    'value'?: string | null;
    /**
    * Indicates if the attribute option is used by default
    */
    'isDefault'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "isDeleted",
            "baseName": "isDeleted",
            "type": "boolean"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "isDefault",
            "baseName": "isDefault",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CustomAttributeOptionModel.attributeTypeMap;
    }
}
