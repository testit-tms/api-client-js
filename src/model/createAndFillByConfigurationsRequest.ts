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
import { TestPointSelector } from './testPointSelector';

export class CreateAndFillByConfigurationsRequest {
    /**
    * Specifies an array of work items and configuration to create a test run for.
    */
    'testPointSelectors': Array<TestPointSelector>;
    /**
    * Specifies the GUID of the project, in which a test run will be created.
    */
    'projectId': string;
    /**
    * Specifies the GUID of the test plan, within which the test run will be created.
    */
    'testPlanId': string;
    /**
    * Specifies the name of the test run.
    */
    'name'?: string | null;
    /**
    * Specifies the test run description.
    */
    'description'?: string | null;
    /**
    * Specifies the test run launch source.
    */
    'launchSource'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "testPointSelectors",
            "baseName": "testPointSelectors",
            "type": "Array<TestPointSelector>"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string"
        },
        {
            "name": "testPlanId",
            "baseName": "testPlanId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "launchSource",
            "baseName": "launchSource",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateAndFillByConfigurationsRequest.attributeTypeMap;
    }
}
