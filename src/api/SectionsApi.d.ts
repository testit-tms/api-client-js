/**
* Sections service.
* @module api/SectionsApi
* @version 7.1.0
*/
export default class SectionsApi {
    /**
    * Constructs a new SectionsApi.
    * @alias module:api/SectionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Patch section
     * See <a href=\"https://www.rfc-editor.org/rfc/rfc6902\" target=\"_blank\">RFC 6902: JavaScript Object Notation (JSON) Patch</a> for details
     * @param {String} id Section internal (UUID) identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/Operation>} [operation]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2SectionsIdPatchWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Patch section
     * See <a href=\"https://www.rfc-editor.org/rfc/rfc6902\" target=\"_blank\">RFC 6902: JavaScript Object Notation (JSON) Patch</a> for details
     * @param {String} id Section internal (UUID) identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/Operation>} opts.operation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2SectionsIdPatch(id: string, opts: any): Promise<any>;
    /**
     * Create section
     *  Use case  User sets section properties (listed in request example)  User runs method execution  System creates section property values  System returns section (listed in response example)
     * @param {Object} opts Optional parameters
     * @param {module:model/SectionPostModel} [sectionPostModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SectionWithStepsModel} and HTTP response
     */
    createSectionWithHttpInfo(opts: any): Promise<any>;
    /**
     * Create section
     *  Use case  User sets section properties (listed in request example)  User runs method execution  System creates section property values  System returns section (listed in response example)
     * @param {Object} opts Optional parameters
     * @param {module:model/SectionPostModel} opts.sectionPostModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SectionWithStepsModel}
     */
    createSection(opts: {
        sectionPostModel: any;
    }): Promise<any>;
    /**
     * Delete section
     *  Use case  User sets section identifier  User runs method execution  System search section by the identifier  System search and delete nested sections of the found section  System search and delete workitems related to the found nested sections  System deletes initial section and related workitem  System returns no content response
     * @param {String} id Section internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteSectionWithHttpInfo(id: string): Promise<any>;
    /**
     * Delete section
     *  Use case  User sets section identifier  User runs method execution  System search section by the identifier  System search and delete nested sections of the found section  System search and delete workitems related to the found nested sections  System deletes initial section and related workitem  System returns no content response
     * @param {String} id Section internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteSection(id: string): Promise<any>;
    /**
     * Get section
     *  Use case  User sets section internal (guid format) identifier  User runs method execution  System search section by the section identifier  [Optional] If isDeleted flag equals false, deleted work items are not being searched.             If true, deleted work items are also being searched, null for all work items.  System returns section
     * @param {String} id Section internal (UUID) identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/DeletionState} [isDeleted]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SectionWithStepsModel} and HTTP response
     */
    getSectionByIdWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Get section
     *  Use case  User sets section internal (guid format) identifier  User runs method execution  System search section by the section identifier  [Optional] If isDeleted flag equals false, deleted work items are not being searched.             If true, deleted work items are also being searched, null for all work items.  System returns section
     * @param {String} id Section internal (UUID) identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/DeletionState} opts.isDeleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SectionWithStepsModel}
     */
    getSectionById(id: string, opts: {
        isDeleted: any;
    }): Promise<any>;
    /**
     * Get section work items
     *  Use case  User sets section identifier  User runs method execution  System search section by the identifier  System search work items related to the section  [Optional] If isDeleted flag equals false, deleted work items are not being searched.             If true, deleted work items are also being searched, null for all work items.  System returns work item collection
     * @param {String} id Section internal (UUID) identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isDeleted = false)] Requested section is deleted
     * @param {Array.<String>} [tagNames] List of work item tags
     * @param {Boolean} [includeIterations = true)]
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WorkItemShortModel>} and HTTP response
     */
    getWorkItemsBySectionIdWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Get section work items
     *  Use case  User sets section identifier  User runs method execution  System search section by the identifier  System search work items related to the section  [Optional] If isDeleted flag equals false, deleted work items are not being searched.             If true, deleted work items are also being searched, null for all work items.  System returns work item collection
     * @param {String} id Section internal (UUID) identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isDeleted Requested section is deleted (default to false)
     * @param {Array.<String>} opts.tagNames List of work item tags
     * @param {Boolean} opts.includeIterations  (default to true)
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WorkItemShortModel>}
     */
    getWorkItemsBySectionId(id: string, opts: {
        isDeleted: boolean;
        tagNames: Array<string>;
        includeIterations: boolean;
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
    /**
     * Move section with all work items into another section
     * @param {Object} opts Optional parameters
     * @param {module:model/SectionMoveModel} [sectionMoveModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    moveWithHttpInfo(opts: any): Promise<any>;
    /**
     * Move section with all work items into another section
     * @param {Object} opts Optional parameters
     * @param {module:model/SectionMoveModel} opts.sectionMoveModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    move(opts: {
        sectionMoveModel: any;
    }): Promise<any>;
    /**
     * Rename section
     *  Use case  User sets section identifier and new name (listed in request example)  User runs method execution  System search section by the identifier  System updates section name using the new name  System returns no content response
     * @param {Object} opts Optional parameters
     * @param {module:model/SectionRenameModel} [sectionRenameModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    renameWithHttpInfo(opts: any): Promise<any>;
    /**
     * Rename section
     *  Use case  User sets section identifier and new name (listed in request example)  User runs method execution  System search section by the identifier  System updates section name using the new name  System returns no content response
     * @param {Object} opts Optional parameters
     * @param {module:model/SectionRenameModel} opts.sectionRenameModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    rename(opts: {
        sectionRenameModel: any;
    }): Promise<any>;
    /**
     * Update section
     *  Use case  User sets section properties (listed in request example)  User runs method execution  System search section by the identifier  System updates section using the property values  System returns no content response
     * @param {Object} opts Optional parameters
     * @param {module:model/SectionPutModel} [sectionPutModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateSectionWithHttpInfo(opts: any): Promise<any>;
    /**
     * Update section
     *  Use case  User sets section properties (listed in request example)  User runs method execution  System search section by the identifier  System updates section using the property values  System returns no content response
     * @param {Object} opts Optional parameters
     * @param {module:model/SectionPutModel} opts.sectionPutModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateSection(opts: {
        sectionPutModel: any;
    }): Promise<any>;
}
