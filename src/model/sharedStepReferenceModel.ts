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
import { TagModel } from './tagModel';
import { WorkItemPriorityModel } from './workItemPriorityModel';
import { WorkItemSourceTypeModel } from './workItemSourceTypeModel';

export class SharedStepReferenceModel {
    'id': string;
    'globalId': number;
    'name': string;
    'entityTypeName': string;
    'hasThisSharedStepAsStep': boolean;
    'hasThisSharedStepAsPrecondition': boolean;
    'hasThisSharedStepAsPostcondition': boolean;
    'createdById': string;
    'modifiedById'?: string | null;
    'createdDate'?: Date | null;
    'modifiedDate'?: Date | null;
    'state': string;
    'priority': WorkItemPriorityModel;
    'sourceType': WorkItemSourceTypeModel;
    'isDeleted': boolean;
    /**
    * used for versioning changes in workitem
    */
    'versionId': string;
    'isAutomated': boolean;
    'sectionId': string;
    'tags'?: Array<TagModel> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "globalId",
            "baseName": "globalId",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "entityTypeName",
            "baseName": "entityTypeName",
            "type": "string"
        },
        {
            "name": "hasThisSharedStepAsStep",
            "baseName": "hasThisSharedStepAsStep",
            "type": "boolean"
        },
        {
            "name": "hasThisSharedStepAsPrecondition",
            "baseName": "hasThisSharedStepAsPrecondition",
            "type": "boolean"
        },
        {
            "name": "hasThisSharedStepAsPostcondition",
            "baseName": "hasThisSharedStepAsPostcondition",
            "type": "boolean"
        },
        {
            "name": "createdById",
            "baseName": "createdById",
            "type": "string"
        },
        {
            "name": "modifiedById",
            "baseName": "modifiedById",
            "type": "string"
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date"
        },
        {
            "name": "modifiedDate",
            "baseName": "modifiedDate",
            "type": "Date"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "WorkItemPriorityModel"
        },
        {
            "name": "sourceType",
            "baseName": "sourceType",
            "type": "WorkItemSourceTypeModel"
        },
        {
            "name": "isDeleted",
            "baseName": "isDeleted",
            "type": "boolean"
        },
        {
            "name": "versionId",
            "baseName": "versionId",
            "type": "string"
        },
        {
            "name": "isAutomated",
            "baseName": "isAutomated",
            "type": "boolean"
        },
        {
            "name": "sectionId",
            "baseName": "sectionId",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<TagModel>"
        }    ];

    static getAttributeTypeMap() {
        return SharedStepReferenceModel.attributeTypeMap;
    }
}

export namespace SharedStepReferenceModel {
}
