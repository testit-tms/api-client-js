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
import { AssignAttachmentApiModel } from './assignAttachmentApiModel';
import { CreateLinkApiModel } from './createLinkApiModel';

export class CreateEmptyTestRunApiModel {
    /**
    * Project unique identifier              This property is to link test run with a project
    */
    'projectId': string;
    /**
    * Test run name
    */
    'name'?: string | null;
    /**
    * Test run description
    */
    'description'?: string | null;
    /**
    * Test run launch source
    */
    'launchSource'?: string | null;
    /**
    * Collection of attachments to relate to the test run
    */
    'attachments'?: Array<AssignAttachmentApiModel> | null;
    /**
    * Collection of links to relate to the test run
    */
    'links'?: Array<CreateLinkApiModel> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "projectId",
            "baseName": "projectId",
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
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<AssignAttachmentApiModel>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<CreateLinkApiModel>"
        }    ];

    static getAttributeTypeMap() {
        return CreateEmptyTestRunApiModel.attributeTypeMap;
    }
}

