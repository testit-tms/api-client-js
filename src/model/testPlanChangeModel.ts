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
import { TestPlanChangedFieldsViewModel } from './testPlanChangedFieldsViewModel';

export class TestPlanChangeModel {
    'id'?: string;
    'testPlanId'?: string;
    'testPlanChangedFields'?: TestPlanChangedFieldsViewModel;
    'createdById'?: string;
    'createdDate'?: Date | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "testPlanId",
            "baseName": "testPlanId",
            "type": "string"
        },
        {
            "name": "testPlanChangedFields",
            "baseName": "testPlanChangedFields",
            "type": "TestPlanChangedFieldsViewModel"
        },
        {
            "name": "createdById",
            "baseName": "createdById",
            "type": "string"
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return TestPlanChangeModel.attributeTypeMap;
    }
}
