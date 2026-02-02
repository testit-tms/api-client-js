export default AutoTest;
/**
 * The AutoTest model module.
 * @module model/AutoTest
 * @version 7.1.0-TMS-5.6
 */
declare class AutoTest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, externalId: any, projectId: any, name: any, globalId: any, isDeleted: any, mustBeApproved: any, id: any, createdDate: any, createdById: any): void;
    /**
     * Constructs a <code>AutoTest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTest} obj Optional instance to populate.
     * @return {module:model/AutoTest} The populated <code>AutoTest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTest</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTest</code>.
     * @alias module:model/AutoTest
     * @param externalId {String} External ID of the autotest
     * @param projectId {String} Unique ID of the autotest project
     * @param name {String} Name of the autotest
     * @param globalId {Number} Global ID of the autotest
     * @param isDeleted {Boolean} Indicates if the autotest is deleted
     * @param mustBeApproved {Boolean} Indicates if the autotest has unapproved changes from linked work items
     * @param id {String} Unique ID of the autotest
     * @param createdDate {Date} Creation date of the autotest
     * @param createdById {String} Unique ID of the project creator
     */
    constructor(externalId: string, projectId: string, name: string, globalId: number, isDeleted: boolean, mustBeApproved: boolean, id: string, createdDate: Date, createdById: string);
    externalId: any;
    links: any;
    projectId: any;
    name: any;
    namespace: any;
    classname: any;
    steps: any;
    setup: any;
    teardown: any;
    title: any;
    description: any;
    labels: any;
    isFlaky: any;
    externalKey: any;
    globalId: any;
    isDeleted: any;
    mustBeApproved: any;
    id: any;
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
    lastTestRunId: any;
    lastTestRunName: any;
    lastTestResultId: any;
    lastTestResultConfiguration: any;
    lastTestResultOutcome: any;
    stabilityPercentage: any;
}
declare namespace AutoTest {
    let RequiredProperties: string[];
}
