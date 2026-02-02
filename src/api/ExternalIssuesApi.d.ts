/**
* ExternalIssues service.
* @module api/ExternalIssuesApi
* @version 7.1.0-TMS-5.6
*/
export default class ExternalIssuesApi {
    /**
    * Constructs a new ExternalIssuesApi.
    * @alias module:api/ExternalIssuesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Returns list of suggestions from available external issues
     * @param {Object} opts Optional parameters
     * @param {module:model/GetExternalIssueSuggestionsApiModel} [getExternalIssueSuggestionsApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ExternalIssueApiFieldSuggestionReply} and HTTP response
     */
    apiV2ExternalIssuesSuggestionsPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Returns list of suggestions from available external issues
     * @param {Object} opts Optional parameters
     * @param {module:model/GetExternalIssueSuggestionsApiModel} opts.getExternalIssueSuggestionsApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ExternalIssueApiFieldSuggestionReply}
     */
    apiV2ExternalIssuesSuggestionsPost(opts: {
        getExternalIssueSuggestionsApiModel: any;
    }): Promise<any>;
}
