/**
* Enum class BackgroundJobType.
* @enum {}
* @readonly
*/
export default class BackgroundJobType {
    /**
    * Returns a <code>BackgroundJobType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/BackgroundJobType} The enum <code>BackgroundJobType</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "ExportXlsxTestResultsByTestPlan"
     * @const
     */
    ExportXlsxTestResultsByTestPlan: string;
    /**
     * value: "ExportXlsxWorkItemsByProject"
     * @const
     */
    ExportXlsxWorkItemsByProject: string;
    /**
     * value: "ExportXlsxTestPointsByTestPlan"
     * @const
     */
    ExportXlsxTestPointsByTestPlan: string;
    /**
     * value: "ExportXlsxWorkItemLinks"
     * @const
     */
    ExportXlsxWorkItemLinks: string;
    /**
     * value: "ExportJsonProject"
     * @const
     */
    ExportJsonProject: string;
    /**
     * value: "ExportZipProject"
     * @const
     */
    ExportZipProject: string;
    /**
     * value: "ExportJsonProjectWithTestPlans"
     * @const
     */
    ExportJsonProjectWithTestPlans: string;
    /**
     * value: "ExportZipProjectWithTestPlans"
     * @const
     */
    ExportZipProjectWithTestPlans: string;
    /**
     * value: "ImportJsonProject"
     * @const
     */
    ImportJsonProject: string;
    /**
     * value: "ImportZipProject"
     * @const
     */
    ImportZipProject: string;
    /**
     * value: "ImportXlsxProject"
     * @const
     */
    ImportXlsxProject: string;
    /**
     * value: "ImportTestRailXmlProject"
     * @const
     */
    ImportTestRailXmlProject: string;
    /**
     * value: "PurgeProject"
     * @const
     */
    PurgeProject: string;
    /**
     * value: "ExportProjects"
     * @const
     */
    ExportProjects: string;
    /**
     * value: "ImportProjects"
     * @const
     */
    ImportProjects: string;
    /**
     * value: "PurgeEntities"
     * @const
     */
    PurgeEntities: string;
    /**
     * value: "DeleteCompletedJobs"
     * @const
     */
    DeleteCompletedJobs: string;
    /**
     * value: "CopySections"
     * @const
     */
    CopySections: string;
    /**
     * value: "DeleteSection"
     * @const
     */
    DeleteSection: string;
}
/**
 * *
 */
export type BackgroundJobType = any;
