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
    instance = new testit_api_client.WorkItemModel();
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

  describe('WorkItemModel', function() {
    it('should create an instance of WorkItemModel', function() {
      // uncomment below and update the code to test WorkItemModel
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be.a(testit_api_client.WorkItemModel);
    });

    it('should have the property versionId (base name: "versionId")', function() {
      // uncomment below and update the code to test the property versionId
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property medianDuration (base name: "medianDuration")', function() {
      // uncomment below and update the code to test the property medianDuration
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property isDeleted (base name: "isDeleted")', function() {
      // uncomment below and update the code to test the property isDeleted
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property projectId (base name: "projectId")', function() {
      // uncomment below and update the code to test the property projectId
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property entityTypeName (base name: "entityTypeName")', function() {
      // uncomment below and update the code to test the property entityTypeName
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property isAutomated (base name: "isAutomated")', function() {
      // uncomment below and update the code to test the property isAutomated
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property autoTests (base name: "autoTests")', function() {
      // uncomment below and update the code to test the property autoTests
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property attachments (base name: "attachments")', function() {
      // uncomment below and update the code to test the property attachments
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property sectionPreconditionSteps (base name: "sectionPreconditionSteps")', function() {
      // uncomment below and update the code to test the property sectionPreconditionSteps
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property sectionPostconditionSteps (base name: "sectionPostconditionSteps")', function() {
      // uncomment below and update the code to test the property sectionPostconditionSteps
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property versionNumber (base name: "versionNumber")', function() {
      // uncomment below and update the code to test the property versionNumber
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property iterations (base name: "iterations")', function() {
      // uncomment below and update the code to test the property iterations
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property createdDate (base name: "createdDate")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property modifiedDate (base name: "modifiedDate")', function() {
      // uncomment below and update the code to test the property modifiedDate
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property createdById (base name: "createdById")', function() {
      // uncomment below and update the code to test the property createdById
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property modifiedById (base name: "modifiedById")', function() {
      // uncomment below and update the code to test the property modifiedById
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property globalId (base name: "globalId")', function() {
      // uncomment below and update the code to test the property globalId
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property sectionId (base name: "sectionId")', function() {
      // uncomment below and update the code to test the property sectionId
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property steps (base name: "steps")', function() {
      // uncomment below and update the code to test the property steps
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property preconditionSteps (base name: "preconditionSteps")', function() {
      // uncomment below and update the code to test the property preconditionSteps
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property postconditionSteps (base name: "postconditionSteps")', function() {
      // uncomment below and update the code to test the property postconditionSteps
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new testit_api_client.WorkItemModel();
      //expect(instance).to.be();
    });

  });

}));