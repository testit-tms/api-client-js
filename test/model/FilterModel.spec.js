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
    instance = new testit_api_client.FilterModel();
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

  describe('FilterModel', function() {
    it('should create an instance of FilterModel', function() {
      // uncomment below and update the code to test FilterModel
      //var instance = new testit_api_client.FilterModel();
      //expect(instance).to.be.a(testit_api_client.FilterModel);
    });

    it('should have the property createdDate (base name: "createdDate")', function() {
      // uncomment below and update the code to test the property createdDate
      //var instance = new testit_api_client.FilterModel();
      //expect(instance).to.be();
    });

    it('should have the property modifiedDate (base name: "modifiedDate")', function() {
      // uncomment below and update the code to test the property modifiedDate
      //var instance = new testit_api_client.FilterModel();
      //expect(instance).to.be();
    });

    it('should have the property createdById (base name: "createdById")', function() {
      // uncomment below and update the code to test the property createdById
      //var instance = new testit_api_client.FilterModel();
      //expect(instance).to.be();
    });

    it('should have the property modifiedById (base name: "modifiedById")', function() {
      // uncomment below and update the code to test the property modifiedById
      //var instance = new testit_api_client.FilterModel();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new testit_api_client.FilterModel();
      //expect(instance).to.be();
    });

    it('should have the property projectId (base name: "projectId")', function() {
      // uncomment below and update the code to test the property projectId
      //var instance = new testit_api_client.FilterModel();
      //expect(instance).to.be();
    });

    it('should have the property fieldsToShow (base name: "fieldsToShow")', function() {
      // uncomment below and update the code to test the property fieldsToShow
      //var instance = new testit_api_client.FilterModel();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new testit_api_client.FilterModel();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new testit_api_client.FilterModel();
      //expect(instance).to.be();
    });

    it('should have the property isDeleted (base name: "isDeleted")', function() {
      // uncomment below and update the code to test the property isDeleted
      //var instance = new testit_api_client.FilterModel();
      //expect(instance).to.be();
    });

  });

}));