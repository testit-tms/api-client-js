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

export class ParameterShortModel {
    'id': string;
    'parameterKeyId': string;
    /**
    * Value of the parameter
    */
    'value': string;
    /**
    * Key of the parameter
    */
    'name': string;
    'projectIds': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "parameterKeyId",
            "baseName": "parameterKeyId",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "projectIds",
            "baseName": "projectIds",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ParameterShortModel.attributeTypeMap;
    }
}

