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

export class TestResultChronologyModel {
    'outcome'?: string | null;
    'count': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "outcome",
            "baseName": "outcome",
            "type": "string"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TestResultChronologyModel.attributeTypeMap;
    }
}

