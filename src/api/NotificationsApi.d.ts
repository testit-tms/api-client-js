/**
* Notifications service.
* @module api/NotificationsApi
* @version 7.1.0-TMS-5.6
*/
export default class NotificationsApi {
    /**
    * Constructs a new NotificationsApi.
    * @alias module:api/NotificationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Get unread Notifications total in last 7 days
     *  Use case  User runs method execution  System returns unread notifications total (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isRead]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    apiV2NotificationsCountGetWithHttpInfo(opts: any): Promise<any>;
    /**
     * Get unread Notifications total in last 7 days
     *  Use case  User runs method execution  System returns unread notifications total (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isRead
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    apiV2NotificationsCountGet(opts: {
        isRead: boolean;
    }): Promise<any>;
    /**
     * Get all Notifications for current User
     *  Use case  User runs method execution  System returns notifications (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {module:model/NotificationTypeModel} [notificationType]
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/NotificationModel>} and HTTP response
     */
    apiV2NotificationsGetWithHttpInfo(opts: any): Promise<any>;
    /**
     * Get all Notifications for current User
     *  Use case  User runs method execution  System returns notifications (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {module:model/NotificationTypeModel} opts.notificationType
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/NotificationModel>}
     */
    apiV2NotificationsGet(opts: {
        notificationType: any;
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
    /**
     * Set Notification as read
     *  Use case  User sets notification internal (guid format) identifier  User runs method execution  System set notification as read
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2NotificationsIdReadPostWithHttpInfo(id: string): Promise<any>;
    /**
     * Set Notification as read
     *  Use case  User sets notification internal (guid format) identifier  User runs method execution  System set notification as read
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2NotificationsIdReadPost(id: string): Promise<any>;
    /**
     * Set all Notifications as read
     *  Use case  User runs method execution  System set all notifications as read
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2NotificationsReadPostWithHttpInfo(): Promise<any>;
    /**
     * Set all Notifications as read
     *  Use case  User runs method execution  System set all notifications as read
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2NotificationsReadPost(): Promise<any>;
    /**
     * Search Notifications for current User
     *  Use case  User set filter and runs method execution  System returns notifications (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/NotificationQueryFilterModel} [notificationQueryFilterModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/NotificationModel>} and HTTP response
     */
    apiV2NotificationsSearchPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Search Notifications for current User
     *  Use case  User set filter and runs method execution  System returns notifications (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/NotificationQueryFilterModel} opts.notificationQueryFilterModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/NotificationModel>}
     */
    apiV2NotificationsSearchPost(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        notificationQueryFilterModel: any;
    }): Promise<any>;
}
