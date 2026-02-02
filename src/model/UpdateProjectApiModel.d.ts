export default UpdateProjectApiModel;
/**
 * The UpdateProjectApiModel model module.
 * @module model/UpdateProjectApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class UpdateProjectApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any): void;
    /**
     * Constructs a <code>UpdateProjectApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateProjectApiModel} obj Optional instance to populate.
     * @return {module:model/UpdateProjectApiModel} The populated <code>UpdateProjectApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>UpdateProjectApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateProjectApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>UpdateProjectApiModel</code>.
     * @alias module:model/UpdateProjectApiModel
     * @param id {String} Unique ID of the project
     * @param name {String} Name of the project
     */
    constructor(id: string, name: string);
    id: any;
    name: any;
    description: any;
    isFavorite: any;
    workflowId: any;
}
declare namespace UpdateProjectApiModel {
    let RequiredProperties: string[];
}
