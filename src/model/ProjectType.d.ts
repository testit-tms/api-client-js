/**
* Enum class ProjectType.
* @enum {}
* @readonly
*/
export default class ProjectType {
    /**
    * Returns a <code>ProjectType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ProjectType} The enum <code>ProjectType</code> value.
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
export type ProjectType = any;
