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
    instance = new testit_api_client.TestResultCreateModel();
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

  describe('TestResultCreateModel', function() {
    it('should create an instance of TestResultCreateModel', function() {
      // uncomment below and update the code to test TestResultCreateModel
      //var instance = new testit_api_client.TestResultCreateModel();
      //expect(instance).to.be.a(testit_api_client.TestResultCreateModel);
    });

    it('should have the property durationInMs (base name: "durationInMs")', function() {
      // uncomment below and update the code to test the property durationInMs
      //var instance = new testit_api_client.TestResultCreateModel();
      //expect(instance).to.be();
    });

    it('should have the property stepComments (base name: "stepComments")', function() {
      // uncomment below and update the code to test the property stepComments
      //var instance = new testit_api_client.TestResultCreateModel();
      //expect(instance).to.be();
    });

    it('should have the property failureClassIds (base name: "failureClassIds")', function() {
      // uncomment below and update the code to test the property failureClassIds
      //var instance = new testit_api_client.TestResultCreateModel();
      //expect(instance).to.be();
    });

    it('should have the property outcome (base name: "outcome")', function() {
      // uncomment below and update the code to test the property outcome
      //var instance = new testit_api_client.TestResultCreateModel();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new testit_api_client.TestResultCreateModel();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new testit_api_client.TestResultCreateModel();
      //expect(instance).to.be();
    });

    it('should have the property stepResults (base name: "stepResults")', function() {
      // uncomment below and update the code to test the property stepResults
      //var instance = new testit_api_client.TestResultCreateModel();
      //expect(instance).to.be();
    });

    it('should have the property attachments (base name: "attachments")', function() {
      // uncomment below and update the code to test the property attachments
      //var instance = new testit_api_client.TestResultCreateModel();
      //expect(instance).to.be();
    });

  });

}));