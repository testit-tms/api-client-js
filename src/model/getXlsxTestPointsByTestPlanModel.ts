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

export class GetXlsxTestPointsByTestPlanModel {
    'includeName'?: boolean;
    'includeSection'?: boolean;
    'includePriority'?: boolean;
    'includeAutomated'?: boolean;
    'includeStatus'?: boolean;
    'includeDuration'?: boolean;
    'includeCreationDate'?: boolean;
    'includeAuthor'?: boolean;
    'includeModificationDate'?: boolean;
    'includeModifiedBy'?: boolean;
    'includeTags'?: boolean;
    'includeIterations'?: boolean;
    'customAttributesIds'?: Array<string> | null;
    'configurationIds'?: Array<string> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "includeName",
            "baseName": "includeName",
            "type": "boolean"
        },
        {
            "name": "includeSection",
            "baseName": "includeSection",
            "type": "boolean"
        },
        {
            "name": "includePriority",
            "baseName": "includePriority",
            "type": "boolean"
        },
        {
            "name": "includeAutomated",
            "baseName": "includeAutomated",
            "type": "boolean"
        },
        {
            "name": "includeStatus",
            "baseName": "includeStatus",
            "type": "boolean"
        },
        {
            "name": "includeDuration",
            "baseName": "includeDuration",
            "type": "boolean"
        },
        {
            "name": "includeCreationDate",
            "baseName": "includeCreationDate",
            "type": "boolean"
        },
        {
            "name": "includeAuthor",
            "baseName": "includeAuthor",
            "type": "boolean"
        },
        {
            "name": "includeModificationDate",
            "baseName": "includeModificationDate",
            "type": "boolean"
        },
        {
            "name": "includeModifiedBy",
            "baseName": "includeModifiedBy",
            "type": "boolean"
        },
        {
            "name": "includeTags",
            "baseName": "includeTags",
            "type": "boolean"
        },
        {
            "name": "includeIterations",
            "baseName": "includeIterations",
            "type": "boolean"
        },
        {
            "name": "customAttributesIds",
            "baseName": "customAttributesIds",
            "type": "Array<string>"
        },
        {
            "name": "configurationIds",
            "baseName": "configurationIds",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return GetXlsxTestPointsByTestPlanModel.attributeTypeMap;
    }
}
