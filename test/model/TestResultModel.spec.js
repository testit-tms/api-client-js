/**
 * API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.testit_api_client);
  }
}(this, function(expect, testit_api_client) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new testit_api_client.TestResultModel();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TestResultModel', function() {
    it('should create an instance of TestResultModel', function() {
      // uncomment below and update the code to test TestResultModel
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be.a(testit_api_client.TestResultModel);
    });

    it('should have the property autoTestId (base name: "autoTestId")', function() {
      // uncomment below and update the code to test the property autoTestId
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property configurationId (base name: "configurationId")', function() {
      // uncomment below and update the code to test the property configurationId
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property startedOn (base name: "startedOn")', function() {
      // uncomment below and update the code to test the property startedOn
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property completedOn (base name: "completedOn")', function() {
      // uncomment below and update the code to test the property completedOn
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property durationInMs (base name: "durationInMs")', function() {
      // uncomment below and update the code to test the property durationInMs
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property traces (base name: "traces")', function() {
      // uncomment below and update the code to test the property traces
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property failureType (base name: "failureType")', function() {
      // uncomment below and update the code to test the property failureType
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property runByUserId (base name: "runByUserId")', function() {
      // uncomment below and update the code to test the property runByUserId
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property stoppedByUserId (base name: "stoppedByUserId")', function() {
      // uncomment below and update the code to test the property stoppedByUserId
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property testPointId (base name: "testPointId")', function() {
      // uncomment below and update the code to test the property testPointId
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property testRunId (base name: "testRunId")', function() {
      // uncomment below and update the code to test the property testRunId
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property testPoint (base name: "testPoint")', function() {
      // uncomment below and update the code to test the property testPoint
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property autoTest (base name: "autoTest")', function() {
      // uncomment below and update the code to test the property autoTest
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property autoTestStepResults (base name: "autoTestStepResults")', function() {
      // uncomment below and update the code to test the property autoTestStepResults
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property setupResults (base name: "setupResults")', function() {
      // uncomment below and update the code to test the property setupResults
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property teardownResults (base name: "teardownResults")', function() {
      // uncomment below and update the code to test the property teardownResults
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property workItemVersionId (base name: "workItemVersionId")', function() {
      // uncomment below and update the code to test the property workItemVersionId
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property workItemVersionNumber (base name: "workItemVersionNumber")', function() {
      // uncomment below and update the code to test the property workItemVersionNumber
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property parameters (base name: "parameters")', function() {
      // uncomment below and update the code to test the property parameters
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property properties (base name: "properties")', function() {
      // uncomment below and update the code to test the property properties
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "createdDate")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property modifiedDate (base name: "modifiedDate")', function() {
      // uncomment below and update the code to test the property modifiedDate
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property createdById (base name: "createdById")', function() {
      // uncomment below and update the code to test the property createdById
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property modifiedById (base name: "modifiedById")', function() {
      // uncomment below and update the code to test the property modifiedById
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property stepComments (base name: "stepComments")', function() {
      // uncomment below and update the code to test the property stepComments
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property failureClassIds (base name: "failureClassIds")', function() {
      // uncomment below and update the code to test the property failureClassIds
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property outcome (base name: "outcome")', function() {
      // uncomment below and update the code to test the property outcome
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property stepResults (base name: "stepResults")', function() {
      // uncomment below and update the code to test the property stepResults
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

    it('should have the property attachments (base name: "attachments")', function() {
      // uncomment below and update the code to test the property attachments
      //var instance = new testit_api_client.TestResultModel();
      //expect(instance).to.be();
    });

  });

}));