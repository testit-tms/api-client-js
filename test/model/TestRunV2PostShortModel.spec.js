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
    instance = new testit_api_client.TestRunV2PostShortModel();
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

  describe('TestRunV2PostShortModel', function() {
    it('should create an instance of TestRunV2PostShortModel', function() {
      // uncomment below and update the code to test TestRunV2PostShortModel
      //var instance = new testit_api_client.TestRunV2PostShortModel();
      //expect(instance).to.be.a(testit_api_client.TestRunV2PostShortModel);
    });

    it('should have the property projectId (base name: "projectId")', function() {
      // uncomment below and update the code to test the property projectId
      //var instance = new testit_api_client.TestRunV2PostShortModel();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new testit_api_client.TestRunV2PostShortModel();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new testit_api_client.TestRunV2PostShortModel();
      //expect(instance).to.be();
    });

    it('should have the property launchSource (base name: "launchSource")', function() {
      // uncomment below and update the code to test the property launchSource
      //var instance = new testit_api_client.TestRunV2PostShortModel();
      //expect(instance).to.be();
    });

  });

}));