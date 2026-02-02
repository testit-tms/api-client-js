export default TestPointSelector;
/**
 * The TestPointSelector model module.
 * @module model/TestPointSelector
 * @version 7.1.0
 */
declare class TestPointSelector {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, configurationId: any, workItemIds: any): void;
    /**
     * Constructs a <code>TestPointSelector</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPointSelector} obj Optional instance to populate.
     * @return {module:model/TestPointSelector} The populated <code>TestPointSelector</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPointSelector</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPointSelector</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPointSelector</code>.
     * @alias module:model/TestPointSelector
     * @param configurationId {String} Specifies the configuration GUIDs, from which test points are created. You can specify several GUIDs.
     * @param workItemIds {Array.<String>} Specifies the work item GUIDs, from which test points are created. You can specify several GUIDs.
     */
    constructor(configurationId: string, workItemIds: Array<string>);
    configurationId: any;
    workItemIds: any;
}
declare namespace TestPointSelector {
    let RequiredProperties: string[];
}
