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
import { WorkItemGroupType } from './workItemGroupType';
import { WorkItemLocalSelectModel } from './workItemLocalSelectModel';

export class WorkItemGroupGetModel {
    /**
    * Model containing options to filter work items
    */
    'selectModel'?: WorkItemLocalSelectModel | null;
    'groupType': WorkItemGroupType;
    'customAttributeId'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "selectModel",
            "baseName": "selectModel",
            "type": "WorkItemLocalSelectModel"
        },
        {
            "name": "groupType",
            "baseName": "groupType",
            "type": "WorkItemGroupType"
        },
        {
            "name": "customAttributeId",
            "baseName": "customAttributeId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WorkItemGroupGetModel.attributeTypeMap;
    }
}

export namespace WorkItemGroupGetModel {
}
