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
import { ShortConfiguration } from './shortConfiguration';

export class TestSuiteChangeViewModel {
    'id': string;
    'name': string;
    'configurations'?: Array<ShortConfiguration> | null;
    'workItemCount': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "configurations",
            "baseName": "configurations",
            "type": "Array<ShortConfiguration>"
        },
        {
            "name": "workItemCount",
            "baseName": "workItemCount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TestSuiteChangeViewModel.attributeTypeMap;
    }
}

