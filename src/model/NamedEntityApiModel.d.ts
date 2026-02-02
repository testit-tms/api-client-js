export default NamedEntityApiModel;
/**
 * The NamedEntityApiModel model module.
 * @module model/NamedEntityApiModel
 * @version 7.1.0
 */
declare class NamedEntityApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, id: any): void;
    /**
     * Constructs a <code>NamedEntityApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NamedEntityApiModel} obj Optional instance to populate.
     * @return {module:model/NamedEntityApiModel} The populated <code>NamedEntityApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>NamedEntityApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NamedEntityApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>NamedEntityApiModel</code>.
     * @alias module:model/NamedEntityApiModel
     * @param name {String} Entity name.
     * @param id {String} Entity Id.
     */
    constructor(name: string, id: string);
    name: any;
    id: any;
}
declare namespace NamedEntityApiModel {
    let RequiredProperties: string[];
}
