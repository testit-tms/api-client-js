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
import { DateTimeRangeSelectorModel } from './dateTimeRangeSelectorModel';
import { NotificationTypeModel } from './notificationTypeModel';

export class ApiV2NotificationsSearchPostRequest {
    'types'?: Set<NotificationTypeModel> | null;
    'isRead'?: boolean | null;
    'createdDate'?: DateTimeRangeSelectorModel | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "types",
            "baseName": "types",
            "type": "Set<NotificationTypeModel>"
        },
        {
            "name": "isRead",
            "baseName": "isRead",
            "type": "boolean"
        },
        {
            "name": "createdDate",
            "baseName": "createdDate",
            "type": "DateTimeRangeSelectorModel"
        }    ];

    static getAttributeTypeMap() {
        return ApiV2NotificationsSearchPostRequest.attributeTypeMap;
    }
}
