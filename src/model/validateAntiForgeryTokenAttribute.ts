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

export class ValidateAntiForgeryTokenAttribute {
    'order': number;
    'isReusable': boolean;
    'typeId': any | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "order",
            "baseName": "order",
            "type": "number"
        },
        {
            "name": "isReusable",
            "baseName": "isReusable",
            "type": "boolean"
        },
        {
            "name": "typeId",
            "baseName": "typeId",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return ValidateAntiForgeryTokenAttribute.attributeTypeMap;
    }
}

