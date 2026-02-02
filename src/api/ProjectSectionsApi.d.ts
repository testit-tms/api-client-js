/**
* ProjectSections service.
* @module api/ProjectSectionsApi
* @version 7.1.0-TMS-5.6
*/
export default class ProjectSectionsApi {
    /**
    * Constructs a new ProjectSectionsApi.
    * @alias module:api/ProjectSectionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Get project sections
     *  Use case  User sets project internal or global identifier and runs method execution  System search project  System search all sections related to the project  System returns array of sections (listed in response)
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SectionModel>} and HTTP response
     */
    getSectionsByProjectIdWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Get project sections
     *  Use case  User sets project internal or global identifier and runs method execution  System search project  System search all sections related to the project  System returns array of sections (listed in response)
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SectionModel>}
     */
    getSectionsByProjectId(projectId: string, opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
}
