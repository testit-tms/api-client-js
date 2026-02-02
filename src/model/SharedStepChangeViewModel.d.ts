export default SharedStepChangeViewModel;
/**
 * The SharedStepChangeViewModel model module.
 * @module model/SharedStepChangeViewModel
 * @version 7.1.0-TMS-5.6
 */
declare class SharedStepChangeViewModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, globalId: any, name: any, steps: any): void;
    /**
     * Constructs a <code>SharedStepChangeViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SharedStepChangeViewModel} obj Optional instance to populate.
     * @return {module:model/SharedStepChangeViewModel} The populated <code>SharedStepChangeViewModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>SharedStepChangeViewModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SharedStepChangeViewModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>SharedStepChangeViewModel</code>.
     * @alias module:model/SharedStepChangeViewModel
     * @param id {String}
     * @param globalId {Number}
     * @param name {String}
     * @param steps {Array.<module:model/WorkItemStepChangeViewModel>}
     */
    constructor(id: string, globalId: number, name: string, steps: Array<NodeModule>);
    id: any;
    globalId: any;
    name: any;
    steps: any;
}
declare namespace SharedStepChangeViewModel {
    let RequiredProperties: string[];
}
