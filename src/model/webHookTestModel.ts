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
import { RequestTypeModel } from './requestTypeModel';

export class WebHookTestModel {
    /**
    * Request method of the webhook
    */
    'requestType': RequestTypeModel;
    /**
    * Request URL of the webhook
    */
    'url': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "requestType",
            "baseName": "requestType",
            "type": "RequestTypeModel"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WebHookTestModel.attributeTypeMap;
    }
}

export namespace WebHookTestModel {
}
