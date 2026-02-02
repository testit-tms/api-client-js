export default TestResultV2ShortModel;
/**
 * The TestResultV2ShortModel model module.
 * @module model/TestResultV2ShortModel
 * @version 7.1.0-TMS-5.6
 */
declare class TestResultV2ShortModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, configurationId: any, workItemVersionId: any, testRunId: any, outcome: any): void;
    /**
     * Constructs a <code>TestResultV2ShortModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestResultV2ShortModel} obj Optional instance to populate.
     * @return {module:model/TestResultV2ShortModel} The populated <code>TestResultV2ShortModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestResultV2ShortModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestResultV2ShortModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestResultV2ShortModel</code>.
     * @alias module:model/TestResultV2ShortModel
     * @param id {String}
     * @param configurationId {String}
     * @param workItemVersionId {String}
     * @param testRunId {String}
     * @param outcome {String} Property can contain one of these values: Passed, Failed, InProgress, Blocked, Skipped
     */
    constructor(id: string, configurationId: string, workItemVersionId: string, testRunId: string, outcome: string);
    id: any;
    configurationId: any;
    workItemVersionId: any;
    autoTestId: any;
    message: any;
    traces: any;
    startedOn: any;
    completedOn: any;
    runByUserId: any;
    stoppedByUserId: any;
    testPointId: any;
    testPoint: any;
    testRunId: any;
    outcome: any;
    comment: any;
    links: any;
    attachments: any;
    parameters: any;
    properties: any;
}
declare namespace TestResultV2ShortModel {
    let RequiredProperties: string[];
}
