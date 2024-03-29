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
import { ProjectExtractionModel } from './projectExtractionModel';
import { ProjectsFilterModel } from './projectsFilterModel';

export class ProjectSelectModel {
    'filter'?: ProjectsFilterModel | null;
    'extractionModel'?: ProjectExtractionModel | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "filter",
            "baseName": "filter",
            "type": "ProjectsFilterModel"
        },
        {
            "name": "extractionModel",
            "baseName": "extractionModel",
            "type": "ProjectExtractionModel"
        }    ];

    static getAttributeTypeMap() {
        return ProjectSelectModel.attributeTypeMap;
    }
}

