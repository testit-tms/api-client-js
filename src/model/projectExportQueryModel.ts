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

export class ProjectExportQueryModel {
    /**
    * Specifies the IDs of the sections you want to export.<br />  Use this parameter if you want to export certain parts of the project.<br />  In this parameter, \"<b>string</b>\" values are IDs of the test library sections.
    */
    'sectionIds'?: Array<string> | null;
    /**
    * Specifies the work items you want to export from a project.<br />  Use this parameter if you want to export certain work items.<br />  In this parameter, \"<b>string</b>\" values are IDs of the work items.
    */
    'workItemIds'?: Array<string> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sectionIds",
            "baseName": "sectionIds",
            "type": "Array<string>"
        },
        {
            "name": "workItemIds",
            "baseName": "workItemIds",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ProjectExportQueryModel.attributeTypeMap;
    }
}

