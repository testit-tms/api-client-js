export default GetXlsxTestPointsByTestPlanModel;
/**
 * The GetXlsxTestPointsByTestPlanModel model module.
 * @module model/GetXlsxTestPointsByTestPlanModel
 * @version 7.1.0
 */
declare class GetXlsxTestPointsByTestPlanModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, includeName: any, includeSection: any, includePriority: any, includeSourceType: any, includeAutomated: any, includeStatus: any, includeDuration: any, includeCreationDate: any, includeAuthor: any, includeModificationDate: any, includeModifiedBy: any, includeTags: any, includeIterations: any): void;
    /**
     * Constructs a <code>GetXlsxTestPointsByTestPlanModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetXlsxTestPointsByTestPlanModel} obj Optional instance to populate.
     * @return {module:model/GetXlsxTestPointsByTestPlanModel} The populated <code>GetXlsxTestPointsByTestPlanModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>GetXlsxTestPointsByTestPlanModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetXlsxTestPointsByTestPlanModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>GetXlsxTestPointsByTestPlanModel</code>.
     * @alias module:model/GetXlsxTestPointsByTestPlanModel
     * @param includeName {Boolean}
     * @param includeSection {Boolean}
     * @param includePriority {Boolean}
     * @param includeSourceType {Boolean}
     * @param includeAutomated {Boolean}
     * @param includeStatus {Boolean}
     * @param includeDuration {Boolean}
     * @param includeCreationDate {Boolean}
     * @param includeAuthor {Boolean}
     * @param includeModificationDate {Boolean}
     * @param includeModifiedBy {Boolean}
     * @param includeTags {Boolean}
     * @param includeIterations {Boolean}
     */
    constructor(includeName: boolean, includeSection: boolean, includePriority: boolean, includeSourceType: boolean, includeAutomated: boolean, includeStatus: boolean, includeDuration: boolean, includeCreationDate: boolean, includeAuthor: boolean, includeModificationDate: boolean, includeModifiedBy: boolean, includeTags: boolean, includeIterations: boolean);
    includeName: any;
    includeSection: any;
    includePriority: any;
    includeSourceType: any;
    includeAutomated: any;
    includeStatus: any;
    includeDuration: any;
    includeCreationDate: any;
    includeAuthor: any;
    includeModificationDate: any;
    includeModifiedBy: any;
    includeTags: any;
    includeIterations: any;
    customAttributesIds: any;
    configurationIds: any;
}
declare namespace GetXlsxTestPointsByTestPlanModel {
    let RequiredProperties: string[];
}
