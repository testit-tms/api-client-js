export default UserWithRankModel;
/**
 * The UserWithRankModel model module.
 * @module model/UserWithRankModel
 * @version 7.1.0-TMS-5.6
 */
declare class UserWithRankModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, firstName: any, lastName: any, middleName: any, userName: any, displayName: any, userType: any, avatarUrl: any, avatarMetadata: any, isDeleted: any, isDisabled: any, isActiveStatusByEntity: any, userRank: any): void;
    /**
     * Constructs a <code>UserWithRankModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserWithRankModel} obj Optional instance to populate.
     * @return {module:model/UserWithRankModel} The populated <code>UserWithRankModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>UserWithRankModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserWithRankModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>UserWithRankModel</code>.
     * @alias module:model/UserWithRankModel
     * @param id {String}
     * @param firstName {String}
     * @param lastName {String}
     * @param middleName {String}
     * @param userName {String}
     * @param displayName {String}
     * @param userType {String}
     * @param avatarUrl {String}
     * @param avatarMetadata {String}
     * @param isDeleted {Boolean}
     * @param isDisabled {Boolean}
     * @param isActiveStatusByEntity {Boolean}
     * @param userRank {module:model/UserRankModel}
     */
    constructor(id: string, firstName: string, lastName: string, middleName: string, userName: string, displayName: string, userType: string, avatarUrl: string, avatarMetadata: string, isDeleted: boolean, isDisabled: boolean, isActiveStatusByEntity: boolean, userRank: any);
    id: any;
    firstName: any;
    lastName: any;
    middleName: any;
    userName: any;
    displayName: any;
    userType: any;
    avatarUrl: any;
    avatarMetadata: any;
    isDeleted: any;
    isDisabled: any;
    providerId: any;
    isActiveStatusByEntity: any;
    userRank: any;
}
declare namespace UserWithRankModel {
    let RequiredProperties: string[];
}
