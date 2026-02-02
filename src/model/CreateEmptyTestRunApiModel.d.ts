export default CreateEmptyTestRunApiModel;
/**
 * The CreateEmptyTestRunApiModel model module.
 * @module model/CreateEmptyTestRunApiModel
 * @version 7.1.0
 */
declare class CreateEmptyTestRunApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, projectId: any): void;
    /**
     * Constructs a <code>CreateEmptyTestRunApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateEmptyTestRunApiModel} obj Optional instance to populate.
     * @return {module:model/CreateEmptyTestRunApiModel} The populated <code>CreateEmptyTestRunApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CreateEmptyTestRunApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateEmptyTestRunApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CreateEmptyTestRunApiModel</code>.
     * @alias module:model/CreateEmptyTestRunApiModel
     * @param projectId {String} Project unique identifier              This property is to link test run with a project
     */
    constructor(projectId: string);
    projectId: any;
    name: any;
    description: any;
    launchSource: any;
    attachments: any;
    links: any;
}
declare namespace CreateEmptyTestRunApiModel {
    let RequiredProperties: string[];
}
