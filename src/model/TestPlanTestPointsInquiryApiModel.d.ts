export default TestPlanTestPointsInquiryApiModel;
/**
 * The TestPlanTestPointsInquiryApiModel model module.
 * @module model/TestPlanTestPointsInquiryApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class TestPlanTestPointsInquiryApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, order: any): void;
    /**
     * Constructs a <code>TestPlanTestPointsInquiryApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanTestPointsInquiryApiModel} obj Optional instance to populate.
     * @return {module:model/TestPlanTestPointsInquiryApiModel} The populated <code>TestPlanTestPointsInquiryApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanTestPointsInquiryApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanTestPointsInquiryApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanTestPointsInquiryApiModel</code>.
     * @alias module:model/TestPlanTestPointsInquiryApiModel
     * @param order {Array.<module:model/Order>}
     */
    constructor(order: Array<NodeModule>);
    order: any;
    page: any;
}
declare namespace TestPlanTestPointsInquiryApiModel {
    let RequiredProperties: string[];
}
