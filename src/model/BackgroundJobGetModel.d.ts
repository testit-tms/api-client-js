export default BackgroundJobGetModel;
/**
 * The BackgroundJobGetModel model module.
 * @module model/BackgroundJobGetModel
 * @version 7.1.0-TMS-5.6
 */
declare class BackgroundJobGetModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, jobId: any, jobType: any, state: any, isDeleted: any, progress: any, createdDate: any, attachments: any): void;
    /**
     * Constructs a <code>BackgroundJobGetModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BackgroundJobGetModel} obj Optional instance to populate.
     * @return {module:model/BackgroundJobGetModel} The populated <code>BackgroundJobGetModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>BackgroundJobGetModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BackgroundJobGetModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>BackgroundJobGetModel</code>.
     * @alias module:model/BackgroundJobGetModel
     * @param id {String}
     * @param jobId {String}
     * @param jobType {module:model/BackgroundJobType}
     * @param state {module:model/BackgroundJobState}
     * @param isDeleted {Boolean}
     * @param progress {Number}
     * @param createdDate {Date}
     * @param attachments {Array.<module:model/BackgroundJobAttachmentModel>}
     */
    constructor(id: string, jobId: string, jobType: any, state: any, isDeleted: boolean, progress: number, createdDate: Date, attachments: Array<NodeModule>);
    id: any;
    jobId: any;
    jobType: any;
    state: any;
    isDeleted: any;
    progress: any;
    createdDate: any;
    startDate: any;
    endDate: any;
    error: any;
    attachments: any;
}
declare namespace BackgroundJobGetModel {
    let RequiredProperties: string[];
}
