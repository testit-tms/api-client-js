export default ProjectExtractionModel;
/**
 * The ProjectExtractionModel model module.
 * @module model/ProjectExtractionModel
 * @version 7.1.0-TMS-5.6
 */
declare class ProjectExtractionModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ProjectExtractionModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectExtractionModel} obj Optional instance to populate.
     * @return {module:model/ProjectExtractionModel} The populated <code>ProjectExtractionModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ProjectExtractionModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectExtractionModel</code>.
     */
    static validateJSON(data: any): boolean;
    ids: any;
}
