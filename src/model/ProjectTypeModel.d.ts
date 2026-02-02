/**
* Enum class ProjectTypeModel.
* @enum {}
* @readonly
*/
export default class ProjectTypeModel {
    /**
    * Returns a <code>ProjectTypeModel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ProjectTypeModel} The enum <code>ProjectTypeModel</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "Regular"
     * @const
     */
    Regular: string;
    /**
     * value: "Demo"
     * @const
     */
    Demo: string;
}
/**
 * *
 */
export type ProjectTypeModel = any;
