export default AutoTestResultsForTestRunModel;
/**
 * The AutoTestResultsForTestRunModel model module.
 * @module model/AutoTestResultsForTestRunModel
 * @version 7.1.0
 */
declare class AutoTestResultsForTestRunModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, configurationId: any, autoTestExternalId: any): void;
    /**
     * Constructs a <code>AutoTestResultsForTestRunModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestResultsForTestRunModel} obj Optional instance to populate.
     * @return {module:model/AutoTestResultsForTestRunModel} The populated <code>AutoTestResultsForTestRunModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestResultsForTestRunModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestResultsForTestRunModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestResultsForTestRunModel</code>.
     * @alias module:model/AutoTestResultsForTestRunModel
     * @param configurationId {String} Specifies the GUID of the autotest configuration, which was specified when the test run was created.
     * @param autoTestExternalId {String} Specifies the external ID of the autotest, which was specified when the test run was created.
     */
    constructor(configurationId: string, autoTestExternalId: string);
    configurationId: any;
    links: any;
    failureReasonNames: any;
    autoTestExternalId: any;
    outcome: any;
    statusCode: any;
    message: any;
    traces: any;
    startedOn: any;
    completedOn: any;
    duration: any;
    attachments: any;
    parameters: any;
    properties: any;
    stepResults: any;
    setupResults: any;
    teardownResults: any;
}
declare namespace AutoTestResultsForTestRunModel {
    let RequiredProperties: string[];
}
