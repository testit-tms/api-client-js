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

/**
* Specifies a test run range of started date to search for
*/
export class TestRunFilterModelStartedDate {
    'from'?: Date | null;
    'to'?: Date | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "from",
            "baseName": "from",
            "type": "Date"
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return TestRunFilterModelStartedDate.attributeTypeMap;
    }
}
