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
import { AutoTestStepModel } from './autoTestStepModel';
import { ConfigurationShortModel } from './configurationShortModel';
import { LabelShortModel } from './labelShortModel';
import { LinkPutModel } from './linkPutModel';
import { TestStatusModel } from './testStatusModel';

export class AutoTestModel {
    /**
    * Global ID of the autotest
    */
    'globalId': number;
    /**
    * Indicates if the autotest is deleted
    */
    'isDeleted': boolean;
    /**
    * Indicates if the autotest has unapproved changes from linked work items
    */
    'mustBeApproved': boolean;
    /**
    * Unique ID of the autotest
    */
    'id': string;
    /**
    * Creation date of the autotest
    */
    'createdDate': Date;
    /**
    * Last modification date of the project
    */
    'modifiedDate'?: Date | null;
    /**
    * Unique ID of the project creator
    */
    'createdById': string;
    /**
    * Unique ID of the project last editor
    */
    'modifiedById'?: string | null;
    /**
    * Unique ID of the autotest last test run
    */
    'lastTestRunId'?: string | null;
    /**
    * Name of the autotest last test run
    */
    'lastTestRunName'?: string | null;
    /**
    * Unique ID of the autotest last test result
    */
    'lastTestResultId'?: string | null;
    /**
    * Configuration of the autotest last test result
    */
    'lastTestResultConfiguration'?: ConfigurationShortModel | null;
    /**
    * Outcome of the autotest last test result
    *
    * @deprecated
    */
    'lastTestResultOutcome'?: string | null;
    /**
    * Status of the autotest last test result
    */
    'lastTestResultStatus'?: TestStatusModel | null;
    /**
    * Stability percentage of the autotest
    */
    'stabilityPercentage'?: number | null;
    /**
    * External ID of the autotest
    */
    'externalId': string;
    /**
    * Collection of the autotest links
    */
    'links'?: Array<LinkPutModel> | null;
    /**
    * Unique ID of the autotest project
    */
    'projectId': string;
    /**
    * Name of the autotest
    */
    'name': string;
    /**
    * Name of the autotest namespace
    */
    'namespace'?: string | null;
    /**
    * Name of the autotest class
    */
    'classname'?: string | null;
    /**
    * Collection of the autotest steps
    */
    'steps'?: Array<AutoTestStepModel> | null;
    /**
    * Collection of the autotest setup steps
    */
    'setup'?: Array<AutoTestStepModel> | null;
    /**
    * Collection of the autotest teardown steps
    */
    'teardown'?: Array<AutoTestStepModel> | null;
    /**
    * Name of the autotest in autotest\'s card
    */
    'title'?: string | null;
    /**
    * Description of the autotest in autotest\'s card
    */
    'description'?: string | null;
    /**
    * Collection of the autotest labels
    */
    'labels'?: Array<LabelShortModel> | null;
    /**
    * Indicates if the autotest is marked as flaky
    */
    'isFlaky'?: boolean | null;
    /**
    * External key of the autotest
    */
    'externalKey'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "globalId",
            "baseName": "globalId",
            "type": "number"
        },
        {
            "name": "isDeleted",
            "baseName": "isDeleted",
            "type": "boolean"
        },
        {
            "name": "mustBeApproved",
            "baseName": "mustBeApproved",
            "type": "boolean"
        },
        {
            "name": "id",
            "baseName": "id",
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
            "name": "lastTestRunId",
            "baseName": "lastTestRunId",
            "type": "string"
        },
        {
            "name": "lastTestRunName",
            "baseName": "lastTestRunName",
            "type": "string"
        },
        {
            "name": "lastTestResultId",
            "baseName": "lastTestResultId",
            "type": "string"
        },
        {
            "name": "lastTestResultConfiguration",
            "baseName": "lastTestResultConfiguration",
            "type": "ConfigurationShortModel"
        },
        {
            "name": "lastTestResultOutcome",
            "baseName": "lastTestResultOutcome",
            "type": "string"
        },
        {
            "name": "lastTestResultStatus",
            "baseName": "lastTestResultStatus",
            "type": "TestStatusModel"
        },
        {
            "name": "stabilityPercentage",
            "baseName": "stabilityPercentage",
            "type": "number"
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<LinkPutModel>"
        },
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
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        },
        {
            "name": "classname",
            "baseName": "classname",
            "type": "string"
        },
        {
            "name": "steps",
            "baseName": "steps",
            "type": "Array<AutoTestStepModel>"
        },
        {
            "name": "setup",
            "baseName": "setup",
            "type": "Array<AutoTestStepModel>"
        },
        {
            "name": "teardown",
            "baseName": "teardown",
            "type": "Array<AutoTestStepModel>"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "Array<LabelShortModel>"
        },
        {
            "name": "isFlaky",
            "baseName": "isFlaky",
            "type": "boolean"
        },
        {
            "name": "externalKey",
            "baseName": "externalKey",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AutoTestModel.attributeTypeMap;
    }
}

