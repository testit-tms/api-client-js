export default TestResultUpdateV2Request;
/**
 * The TestResultUpdateV2Request model module.
 * @module model/TestResultUpdateV2Request
 * @version 7.1.0-TMS-5.6
 */
declare class TestResultUpdateV2Request {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>TestResultUpdateV2Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestResultUpdateV2Request} obj Optional instance to populate.
     * @return {module:model/TestResultUpdateV2Request} The populated <code>TestResultUpdateV2Request</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestResultUpdateV2Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestResultUpdateV2Request</code>.
     */
    static validateJSON(data: any): boolean;
    failureClassIds: any;
    outcome: any;
    statusCode: any;
    comment: any;
    links: any;
    stepResults: any;
    attachments: any;
    durationInMs: any;
    duration: any;
    stepComments: any;
    setupResults: any;
    teardownResults: any;
    message: any;
    trace: any;
}
