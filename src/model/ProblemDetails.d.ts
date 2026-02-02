export default ProblemDetails;
/**
 * The ProblemDetails model module.
 * @module model/ProblemDetails
 * @version 7.1.0
 */
declare class ProblemDetails {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ProblemDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProblemDetails} obj Optional instance to populate.
     * @return {module:model/ProblemDetails} The populated <code>ProblemDetails</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ProblemDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProblemDetails</code>.
     */
    static validateJSON(data: any): boolean;
    type: any;
    title: any;
    status: any;
    detail: any;
    instance: any;
}
