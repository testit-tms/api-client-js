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
import { TestRunStatisticsErrorCategoriesGetModel } from './testRunStatisticsErrorCategoriesGetModel';
import { TestRunStatisticsStatusesGetModel } from './testRunStatisticsStatusesGetModel';

export class TestResultsStatisticsGetModel {
    'statuses'?: TestRunStatisticsStatusesGetModel;
    'failureCategories'?: TestRunStatisticsErrorCategoriesGetModel;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "statuses",
            "baseName": "statuses",
            "type": "TestRunStatisticsStatusesGetModel"
        },
        {
            "name": "failureCategories",
            "baseName": "failureCategories",
            "type": "TestRunStatisticsErrorCategoriesGetModel"
        }    ];

    static getAttributeTypeMap() {
        return TestResultsStatisticsGetModel.attributeTypeMap;
    }
}
