export default UserNameApiResult;
/**
 * The UserNameApiResult model module.
 * @module model/UserNameApiResult
 * @version 7.1.0
 */
declare class UserNameApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any): void;
    /**
     * Constructs a <code>UserNameApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserNameApiResult} obj Optional instance to populate.
     * @return {module:model/UserNameApiResult} The populated <code>UserNameApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>UserNameApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserNameApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>UserNameApiResult</code>.
     * @alias module:model/UserNameApiResult
     * @param id {String}
     */
    constructor(id: string);
    id: any;
    name: any;
}
declare namespace UserNameApiResult {
    let RequiredProperties: string[];
}
