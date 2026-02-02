export default ValidationProblemDetails;
/**
 * The ValidationProblemDetails model module.
 * @module model/ValidationProblemDetails
 * @version 7.1.0
 */
declare class ValidationProblemDetails {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, errors: any): void;
    /**
     * Constructs a <code>ValidationProblemDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidationProblemDetails} obj Optional instance to populate.
     * @return {module:model/ValidationProblemDetails} The populated <code>ValidationProblemDetails</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ValidationProblemDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ValidationProblemDetails</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ValidationProblemDetails</code>.
     * @alias module:model/ValidationProblemDetails
     * @extends Object
     * @param errors {Object.<String, Array.<String>>}
     */
    constructor(errors: any);
    errors: any;
    type: any;
    title: any;
    status: any;
    detail: any;
    instance: any;
}
declare namespace ValidationProblemDetails {
    let RequiredProperties: string[];
}
