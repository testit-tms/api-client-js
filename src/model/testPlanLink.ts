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
import { ExternalLinkModel } from './externalLinkModel';
import { LinkModel } from './linkModel';

export class TestPlanLink {
    'bugLink'?: LinkModel;
    'workItemGlobalId'?: number | null;
    'workItemName'?: string | null;
    'configurationName'?: string | null;
    'createdById'?: string | null;
    'comment'?: string | null;
    'info'?: ExternalLinkModel;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bugLink",
            "baseName": "bugLink",
            "type": "LinkModel"
        },
        {
            "name": "workItemGlobalId",
            "baseName": "workItemGlobalId",
            "type": "number"
        },
        {
            "name": "workItemName",
            "baseName": "workItemName",
            "type": "string"
        },
        {
            "name": "configurationName",
            "baseName": "configurationName",
            "type": "string"
        },
        {
            "name": "createdById",
            "baseName": "createdById",
            "type": "string"
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "string"
        },
        {
            "name": "info",
            "baseName": "info",
            "type": "ExternalLinkModel"
        }    ];

    static getAttributeTypeMap() {
        return TestPlanLink.attributeTypeMap;
    }
}
