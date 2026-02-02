export default SharedStepModel;
/**
 * The SharedStepModel model module.
 * @module model/SharedStepModel
 * @version 7.1.0
 */
declare class SharedStepModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, versionId: any, globalId: any, name: any, steps: any, isDeleted: any): void;
    /**
     * Constructs a <code>SharedStepModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SharedStepModel} obj Optional instance to populate.
     * @return {module:model/SharedStepModel} The populated <code>SharedStepModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>SharedStepModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SharedStepModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>SharedStepModel</code>.
     * @alias module:model/SharedStepModel
     * @param versionId {String}
     * @param globalId {Number}
     * @param name {String}
     * @param steps {Array.<module:model/StepModel>}
     * @param isDeleted {Boolean}
     */
    constructor(versionId: string, globalId: number, name: string, steps: Array<NodeModule>, isDeleted: boolean);
    versionId: any;
    globalId: any;
    name: any;
    steps: any;
    isDeleted: any;
}
declare namespace SharedStepModel {
    let RequiredProperties: string[];
}
