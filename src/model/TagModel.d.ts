export default TagModel;
/**
 * The TagModel model module.
 * @module model/TagModel
 * @version 7.1.0
 */
declare class TagModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any): void;
    /**
     * Constructs a <code>TagModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagModel} obj Optional instance to populate.
     * @return {module:model/TagModel} The populated <code>TagModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TagModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TagModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TagModel</code>.
     * @alias module:model/TagModel
     * @param name {String}
     */
    constructor(name: string);
    name: any;
}
declare namespace TagModel {
    let RequiredProperties: string[];
}
