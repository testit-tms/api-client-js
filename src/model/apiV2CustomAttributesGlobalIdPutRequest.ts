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
import { CustomAttributeOptionModel } from './customAttributeOptionModel';

export class ApiV2CustomAttributesGlobalIdPutRequest {
    /**
    * Name of attribute
    */
    'name': string;
    /**
    * Collection of attribute options  <br />  Available for attributes of type `options` and `multiple options` only
    */
    'options'?: Array<CustomAttributeOptionModel> | null;
    /**
    * Indicates whether the attribute is available
    */
    'isEnabled'?: boolean | null;
    /**
    * Indicates whether the attribute value is mandatory to specify
    */
    'isRequired'?: boolean | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<CustomAttributeOptionModel>"
        },
        {
            "name": "isEnabled",
            "baseName": "isEnabled",
            "type": "boolean"
        },
        {
            "name": "isRequired",
            "baseName": "isRequired",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ApiV2CustomAttributesGlobalIdPutRequest.attributeTypeMap;
    }
}
