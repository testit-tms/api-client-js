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

export class ParameterGroupModel {
    'name': string;
    'values': { [key: string]: string; };
    'parameterKeyId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "parameterKeyId",
            "baseName": "parameterKeyId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ParameterGroupModel.attributeTypeMap;
    }
}

