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
import { UserRankModel } from './userRankModel';

export class UserWithRankModel {
    'id'?: string;
    'firstName'?: string | null;
    'lastName'?: string | null;
    'middleName'?: string | null;
    'userName'?: string | null;
    'displayName'?: string | null;
    'userType'?: string | null;
    'avatarUrl'?: string | null;
    'avatarMetadata'?: string | null;
    'isDeleted'?: boolean;
    'isDisabled'?: boolean;
    'providerId'?: string | null;
    'isActiveStatusByEntity'?: boolean;
    'userRank'?: UserRankModel;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "middleName",
            "baseName": "middleName",
            "type": "string"
        },
        {
            "name": "userName",
            "baseName": "userName",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string"
        },
        {
            "name": "userType",
            "baseName": "userType",
            "type": "string"
        },
        {
            "name": "avatarUrl",
            "baseName": "avatarUrl",
            "type": "string"
        },
        {
            "name": "avatarMetadata",
            "baseName": "avatarMetadata",
            "type": "string"
        },
        {
            "name": "isDeleted",
            "baseName": "isDeleted",
            "type": "boolean"
        },
        {
            "name": "isDisabled",
            "baseName": "isDisabled",
            "type": "boolean"
        },
        {
            "name": "providerId",
            "baseName": "providerId",
            "type": "string"
        },
        {
            "name": "isActiveStatusByEntity",
            "baseName": "isActiveStatusByEntity",
            "type": "boolean"
        },
        {
            "name": "userRank",
            "baseName": "userRank",
            "type": "UserRankModel"
        }    ];

    static getAttributeTypeMap() {
        return UserWithRankModel.attributeTypeMap;
    }
}
