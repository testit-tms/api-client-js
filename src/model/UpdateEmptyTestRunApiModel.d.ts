export default UpdateEmptyTestRunApiModel;
/**
 * The UpdateEmptyTestRunApiModel model module.
 * @module model/UpdateEmptyTestRunApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class UpdateEmptyTestRunApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any): void;
    /**
     * Constructs a <code>UpdateEmptyTestRunApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateEmptyTestRunApiModel} obj Optional instance to populate.
     * @return {module:model/UpdateEmptyTestRunApiModel} The populated <code>UpdateEmptyTestRunApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>UpdateEmptyTestRunApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateEmptyTestRunApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>UpdateEmptyTestRunApiModel</code>.
     * @alias module:model/UpdateEmptyTestRunApiModel
     * @param id {String} Test run unique identifier
     * @param name {String} Test run name
     */
    constructor(id: string, name: string);
    id: any;
    name: any;
    description: any;
    launchSource: any;
    attachments: any;
    links: any;
}
declare namespace UpdateEmptyTestRunApiModel {
    let RequiredProperties: string[];
}
