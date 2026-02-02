export default TestRunV2ApiResult;
/**
 * The TestRunV2ApiResult model module.
 * @module model/TestRunV2ApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class TestRunV2ApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, stateName: any, status: any, projectId: any, createdDate: any, createdById: any, attachments: any, links: any, webhooks: any, runCount: any): void;
    /**
     * Constructs a <code>TestRunV2ApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestRunV2ApiResult} obj Optional instance to populate.
     * @return {module:model/TestRunV2ApiResult} The populated <code>TestRunV2ApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestRunV2ApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestRunV2ApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestRunV2ApiResult</code>.
     * @alias module:model/TestRunV2ApiResult
     * @param id {String} Test run unique identifier
     * @param name {String} Test run name
     * @param stateName {module:model/TestRunState} Test run state
     * @param status {module:model/TestStatusApiResult} Test run status
     * @param projectId {String} Project unique identifier              This property is used to link test run with project.
     * @param createdDate {Date} Date and time of test run creation
     * @param createdById {String} Unique identifier of user who created test run
     * @param attachments {Array.<module:model/AttachmentApiResult>} Collection of attachments related to the test run
     * @param links {Array.<module:model/LinkApiResult>} Collection of links related to the test run
     * @param webhooks {Array.<module:model/NamedEntityApiModel>} Enabled webhooks
     * @param runCount {Number} Run count
     */
    constructor(id: string, name: string, stateName: any, status: any, projectId: string, createdDate: Date, createdById: string, attachments: Array<NodeModule>, links: Array<NodeModule>, webhooks: Array<NodeModule>, runCount: number);
    id: any;
    name: any;
    description: any;
    launchSource: any;
    startedOn: any;
    completedOn: any;
    stateName: any;
    status: any;
    projectId: any;
    testPlanId: any;
    testResults: any;
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
    createdByUserName: any;
    attachments: any;
    links: any;
    customParameters: any;
    webhooks: any;
    runCount: any;
}
declare namespace TestRunV2ApiResult {
    let RequiredProperties: string[];
}
