/**
* Enum class TestRunState.
* @enum {}
* @readonly
*/
export default class TestRunState {
    /**
    * Returns a <code>TestRunState</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TestRunState} The enum <code>TestRunState</code> value.
    */
    static constructFromObject(object: any): any;
    /**
     * value: "NotStarted"
     * @const
     */
    NotStarted: string;
    /**
     * value: "InProgress"
     * @const
     */
    InProgress: string;
    /**
     * value: "Stopped"
     * @const
     */
    Stopped: string;
    /**
     * value: "Completed"
     * @const
     */
    Completed: string;
}
/**
 * *
 */
export type TestRunState = any;
