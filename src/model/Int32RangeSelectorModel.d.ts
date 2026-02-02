export default Int32RangeSelectorModel;
/**
 * The Int32RangeSelectorModel model module.
 * @module model/Int32RangeSelectorModel
 * @version 7.1.0
 */
declare class Int32RangeSelectorModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>Int32RangeSelectorModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Int32RangeSelectorModel} obj Optional instance to populate.
     * @return {module:model/Int32RangeSelectorModel} The populated <code>Int32RangeSelectorModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>Int32RangeSelectorModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Int32RangeSelectorModel</code>.
     */
    static validateJSON(data: any): boolean;
    from: any;
    to: any;
}
