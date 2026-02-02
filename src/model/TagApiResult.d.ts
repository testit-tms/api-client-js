export default TagApiResult;
/**
 * The TagApiResult model module.
 * @module model/TagApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class TagApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, createdDate: any, createdById: any): void;
    /**
     * Constructs a <code>TagApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagApiResult} obj Optional instance to populate.
     * @return {module:model/TagApiResult} The populated <code>TagApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TagApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TagApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TagApiResult</code>.
     * @alias module:model/TagApiResult
     * @param id {String} ID of the tag
     * @param name {String} Name of the tag
     * @param createdDate {Date} Creation date of the tag
     * @param createdById {String} ID of the user who created the tag
     */
    constructor(id: string, name: string, createdDate: Date, createdById: string);
    id: any;
    name: any;
    createdDate: any;
    createdById: any;
    modifiedDate: any;
    modifiedById: any;
}
declare namespace TagApiResult {
    let RequiredProperties: string[];
}
