export default DefectApiModel;
/**
 * The DefectApiModel model module.
 * @module model/DefectApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class DefectApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, externalUrl: any): void;
    /**
     * Constructs a <code>DefectApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DefectApiModel} obj Optional instance to populate.
     * @return {module:model/DefectApiModel} The populated <code>DefectApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>DefectApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DefectApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>DefectApiModel</code>.
     * @alias module:model/DefectApiModel
     * @param externalUrl {String} Link to created issue
     */
    constructor(externalUrl: string);
    externalUrl: any;
}
declare namespace DefectApiModel {
    let RequiredProperties: string[];
}
