export default ExternalIssuePriorityModel;
/**
 * The ExternalIssuePriorityModel model module.
 * @module model/ExternalIssuePriorityModel
 * @version 7.1.0
 */
declare class ExternalIssuePriorityModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any): void;
    /**
     * Constructs a <code>ExternalIssuePriorityModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalIssuePriorityModel} obj Optional instance to populate.
     * @return {module:model/ExternalIssuePriorityModel} The populated <code>ExternalIssuePriorityModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ExternalIssuePriorityModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalIssuePriorityModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ExternalIssuePriorityModel</code>.
     * @alias module:model/ExternalIssuePriorityModel
     * @param name {String}
     */
    constructor(name: string);
    name: any;
    iconUrl: any;
}
declare namespace ExternalIssuePriorityModel {
    let RequiredProperties: string[];
}
