/**
* Enum class LinkType.
* @enum {}
* @readonly
*/
export default class LinkType {
    /**
    * Returns a <code>LinkType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/LinkType} The enum <code>LinkType</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "Related"
     * @const
     */
    Related: string;
    /**
     * value: "BlockedBy"
     * @const
     */
    BlockedBy: string;
    /**
     * value: "Defect"
     * @const
     */
    Defect: string;
    /**
     * value: "Issue"
     * @const
     */
    Issue: string;
    /**
     * value: "Requirement"
     * @const
     */
    Requirement: string;
    /**
     * value: "Repository"
     * @const
     */
    Repository: string;
}
/**
 * *
 */
export type LinkType = any;
