export default ProjectExternalServicesApiResult;
/**
 * The ProjectExternalServicesApiResult model module.
 * @module model/ProjectExternalServicesApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class ProjectExternalServicesApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, data: any): void;
    /**
     * Constructs a <code>ProjectExternalServicesApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectExternalServicesApiResult} obj Optional instance to populate.
     * @return {module:model/ProjectExternalServicesApiResult} The populated <code>ProjectExternalServicesApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ProjectExternalServicesApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectExternalServicesApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ProjectExternalServicesApiResult</code>.
     * @alias module:model/ProjectExternalServicesApiResult
     * @param data {Array.<module:model/ProjectExternalServiceApiResult>} External services associated with a project
     */
    constructor(data: Array<NodeModule>);
    data: any;
}
declare namespace ProjectExternalServicesApiResult {
    let RequiredProperties: string[];
}
