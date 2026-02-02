export default NotificationModel;
/**
 * The NotificationModel model module.
 * @module model/NotificationModel
 * @version 7.1.0
 */
declare class NotificationModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, isRead: any, entityId: any, notificationType: any, testPlanGlobalId: any, testPlanName: any, comment: any, workItemName: any, createdById: any): void;
    /**
     * Constructs a <code>NotificationModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationModel} obj Optional instance to populate.
     * @return {module:model/NotificationModel} The populated <code>NotificationModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>NotificationModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NotificationModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>NotificationModel</code>.
     * @alias module:model/NotificationModel
     * @param id {String}
     * @param isRead {Boolean}
     * @param entityId {String}
     * @param notificationType {module:model/NotificationTypeModel}
     * @param testPlanGlobalId {Number}
     * @param testPlanName {String}
     * @param comment {String}
     * @param workItemName {String}
     * @param createdById {String}
     */
    constructor(id: string, isRead: boolean, entityId: string, notificationType: any, testPlanGlobalId: number, testPlanName: string, comment: string, workItemName: string, createdById: string);
    id: any;
    createdDate: any;
    isRead: any;
    entityId: any;
    notificationType: any;
    projectGlobalId: any;
    projectName: any;
    testPlanGlobalId: any;
    testPlanName: any;
    workitemGlobalId: any;
    comment: any;
    workItemName: any;
    attributeName: any;
    createdById: any;
}
declare namespace NotificationModel {
    let RequiredProperties: string[];
}
