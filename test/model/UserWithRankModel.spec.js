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
    instance = new testit_api_client.UserWithRankModel();
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

  describe('UserWithRankModel', function() {
    it('should create an instance of UserWithRankModel', function() {
      // uncomment below and update the code to test UserWithRankModel
      //var instance = new testit_api_client.UserWithRankModel();
      //expect(instance).to.be.a(testit_api_client.UserWithRankModel);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new testit_api_client.UserWithRankModel();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new testit_api_client.UserWithRankModel();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new testit_api_client.UserWithRankModel();
      //expect(instance).to.be();
    });

    it('should have the property middleName (base name: "middleName")', function() {
      // uncomment below and update the code to test the property middleName
      //var instance = new testit_api_client.UserWithRankModel();
      //expect(instance).to.be();
    });

    it('should have the property userName (base name: "userName")', function() {
      // uncomment below and update the code to test the property userName
      //var instance = new testit_api_client.UserWithRankModel();
      //expect(instance).to.be();
    });

    it('should have the property displayName (base name: "displayName")', function() {
      // uncomment below and update the code to test the property displayName
      //var instance = new testit_api_client.UserWithRankModel();
      //expect(instance).to.be();
    });

    it('should have the property userType (base name: "userType")', function() {
      // uncomment below and update the code to test the property userType
      //var instance = new testit_api_client.UserWithRankModel();
      //expect(instance).to.be();
    });

    it('should have the property avatarUrl (base name: "avatarUrl")', function() {
      // uncomment below and update the code to test the property avatarUrl
      //var instance = new testit_api_client.UserWithRankModel();
      //expect(instance).to.be();
    });

    it('should have the property avatarMetadata (base name: "avatarMetadata")', function() {
      // uncomment below and update the code to test the property avatarMetadata
      //var instance = new testit_api_client.UserWithRankModel();
      //expect(instance).to.be();
    });

    it('should have the property isDeleted (base name: "isDeleted")', function() {
      // uncomment below and update the code to test the property isDeleted
      //var instance = new testit_api_client.UserWithRankModel();
      //expect(instance).to.be();
    });

    it('should have the property isDisabled (base name: "isDisabled")', function() {
      // uncomment below and update the code to test the property isDisabled
      //var instance = new testit_api_client.UserWithRankModel();
      //expect(instance).to.be();
    });

    it('should have the property providerId (base name: "providerId")', function() {
      // uncomment below and update the code to test the property providerId
      //var instance = new testit_api_client.UserWithRankModel();
      //expect(instance).to.be();
    });

    it('should have the property isActiveStatusByEntity (base name: "isActiveStatusByEntity")', function() {
      // uncomment below and update the code to test the property isActiveStatusByEntity
      //var instance = new testit_api_client.UserWithRankModel();
      //expect(instance).to.be();
    });

    it('should have the property userRank (base name: "userRank")', function() {
      // uncomment below and update the code to test the property userRank
      //var instance = new testit_api_client.UserWithRankModel();
      //expect(instance).to.be();
    });

  });

}));