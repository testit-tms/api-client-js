export default UserRankModel;
/**
 * The UserRankModel model module.
 * @module model/UserRankModel
 * @version 7.1.0
 */
declare class UserRankModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, score: any, workItemsCreated: any, passedTestPoints: any, failedTestPoints: any, skippedTestPoints: any, blockedTestPoints: any, levelAvatarEnabled: any, succeededTestPoints: any, incompleteTestPoints: any): void;
    /**
     * Constructs a <code>UserRankModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserRankModel} obj Optional instance to populate.
     * @return {module:model/UserRankModel} The populated <code>UserRankModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>UserRankModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserRankModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>UserRankModel</code>.
     * @alias module:model/UserRankModel
     * @param score {Number}
     * @param workItemsCreated {Number}
     * @param passedTestPoints {Number}
     * @param failedTestPoints {Number}
     * @param skippedTestPoints {Number}
     * @param blockedTestPoints {Number}
     * @param levelAvatarEnabled {Boolean}
     * @param succeededTestPoints {Number}
     * @param incompleteTestPoints {Number}
     */
    constructor(score: number, workItemsCreated: number, passedTestPoints: number, failedTestPoints: number, skippedTestPoints: number, blockedTestPoints: number, levelAvatarEnabled: boolean, succeededTestPoints: number, incompleteTestPoints: number);
    score: any;
    workItemsCreated: any;
    passedTestPoints: any;
    failedTestPoints: any;
    skippedTestPoints: any;
    blockedTestPoints: any;
    levelAvatarEnabled: any;
    succeededTestPoints: any;
    incompleteTestPoints: any;
}
declare namespace UserRankModel {
    let RequiredProperties: string[];
}
