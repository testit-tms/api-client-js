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
import { CustomAttributeTypesEnum } from './customAttributeTypesEnum';

export class CustomAttributeTemplateSearchQueryModel {
    'name'?: string | null;
    'projectIds'?: Array<string> | null;
    'customAttributeTypes'?: Array<CustomAttributeTypesEnum> | null;
    'isDeleted'?: boolean | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "projectIds",
            "baseName": "projectIds",
            "type": "Array<string>"
        },
        {
            "name": "customAttributeTypes",
            "baseName": "customAttributeTypes",
            "type": "Array<CustomAttributeTypesEnum>"
        },
        {
            "name": "isDeleted",
            "baseName": "isDeleted",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CustomAttributeTemplateSearchQueryModel.attributeTypeMap;
    }
}

