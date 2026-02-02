/**
* Enum class ImageResizeType.
* @enum {}
* @readonly
*/
export default class ImageResizeType {
    /**
    * Returns a <code>ImageResizeType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ImageResizeType} The enum <code>ImageResizeType</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "Crop"
     * @const
     */
    Crop: string;
    /**
     * value: "AddBackgroundStripes"
     * @const
     */
    AddBackgroundStripes: string;
}
/**
 * *
 */
export type ImageResizeType = any;
