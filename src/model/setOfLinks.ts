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
import { ActionUpdate } from './actionUpdate';
import { LinkPostModel } from './linkPostModel';

export class SetOfLinks {
    'action': ActionUpdate;
    'links'?: Array<LinkPostModel> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "ActionUpdate"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<LinkPostModel>"
        }    ];

    static getAttributeTypeMap() {
        return SetOfLinks.attributeTypeMap;
    }
}

export namespace SetOfLinks {
}