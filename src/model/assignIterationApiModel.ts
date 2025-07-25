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
import { ParameterIterationModel } from './parameterIterationModel';

export class AssignIterationApiModel {
    'parameters': Array<ParameterIterationModel>;
    /**
    * Iteration identifier, must be empty for new or changed iteration
    */
    'id': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<ParameterIterationModel>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AssignIterationApiModel.attributeTypeMap;
    }
}

