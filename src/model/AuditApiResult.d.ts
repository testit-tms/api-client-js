export default AuditApiResult;
/**
 * The AuditApiResult model module.
 * @module model/AuditApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class AuditApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, userId: any, dateTime: any): void;
    /**
     * Constructs a <code>AuditApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuditApiResult} obj Optional instance to populate.
     * @return {module:model/AuditApiResult} The populated <code>AuditApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AuditApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuditApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AuditApiResult</code>.
     * @alias module:model/AuditApiResult
     * @param userId {String}
     * @param dateTime {Date}
     */
    constructor(userId: string, dateTime: Date);
    userId: any;
    userName: any;
    dateTime: any;
}
declare namespace AuditApiResult {
    let RequiredProperties: string[];
}
