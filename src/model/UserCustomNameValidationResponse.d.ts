export default UserCustomNameValidationResponse;
/**
 * The UserCustomNameValidationResponse model module.
 * @module model/UserCustomNameValidationResponse
 * @version 7.1.0
 */
declare class UserCustomNameValidationResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, exists: any): void;
    /**
     * Constructs a <code>UserCustomNameValidationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserCustomNameValidationResponse} obj Optional instance to populate.
     * @return {module:model/UserCustomNameValidationResponse} The populated <code>UserCustomNameValidationResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>UserCustomNameValidationResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserCustomNameValidationResponse</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>UserCustomNameValidationResponse</code>.
     * @alias module:model/UserCustomNameValidationResponse
     * @param exists {Boolean}
     */
    constructor(exists: boolean);
    exists: any;
}
declare namespace UserCustomNameValidationResponse {
    let RequiredProperties: string[];
}
