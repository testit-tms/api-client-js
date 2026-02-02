export default AutoTestApiResult;
/**
 * The AutoTestApiResult model module.
 * @module model/AutoTestApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class AutoTestApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, projectId: any, name: any, isFlaky: any, globalId: any, isDeleted: any, mustBeApproved: any, createdDate: any, createdById: any): void;
    /**
     * Constructs a <code>AutoTestApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestApiResult} obj Optional instance to populate.
     * @return {module:model/AutoTestApiResult} The populated <code>AutoTestApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestApiResult</code>.
     * @alias module:model/AutoTestApiResult
     * @param id {String}
     * @param projectId {String}
     * @param name {String}
     * @param isFlaky {Boolean}
     * @param globalId {Number}
     * @param isDeleted {Boolean}
     * @param mustBeApproved {Boolean}
     * @param createdDate {Date}
     * @param createdById {String}
     */
    constructor(id: string, projectId: string, name: string, isFlaky: boolean, globalId: number, isDeleted: boolean, mustBeApproved: boolean, createdDate: Date, createdById: string);
    id: any;
    projectId: any;
    externalId: any;
    name: any;
    namespace: any;
    classname: any;
    steps: any;
    setup: any;
    teardown: any;
    title: any;
    description: any;
    isFlaky: any;
    externalKey: any;
    globalId: any;
    isDeleted: any;
    mustBeApproved: any;
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
    lastTestRunId: any;
    lastTestRunName: any;
    lastTestResultId: any;
    lastTestResultConfiguration: any;
    lastTestResultOutcome: any;
    lastTestResultStatus: any;
    stabilityPercentage: any;
    links: any;
    labels: any;
}
declare namespace AutoTestApiResult {
    let RequiredProperties: string[];
}
