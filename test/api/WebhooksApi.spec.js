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
    instance = new testit_api_client.WebhooksApi();
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

  describe('WebhooksApi', function() {
    describe('apiV2WebhooksGet', function() {
      it('should call apiV2WebhooksGet successfully', function(done) {
        //uncomment below and update the code to test apiV2WebhooksGet
        //instance.apiV2WebhooksGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2WebhooksIdDelete', function() {
      it('should call apiV2WebhooksIdDelete successfully', function(done) {
        //uncomment below and update the code to test apiV2WebhooksIdDelete
        //instance.apiV2WebhooksIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2WebhooksIdGet', function() {
      it('should call apiV2WebhooksIdGet successfully', function(done) {
        //uncomment below and update the code to test apiV2WebhooksIdGet
        //instance.apiV2WebhooksIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2WebhooksIdPut', function() {
      it('should call apiV2WebhooksIdPut successfully', function(done) {
        //uncomment below and update the code to test apiV2WebhooksIdPut
        //instance.apiV2WebhooksIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2WebhooksPost', function() {
      it('should call apiV2WebhooksPost successfully', function(done) {
        //uncomment below and update the code to test apiV2WebhooksPost
        //instance.apiV2WebhooksPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiV2WebhooksSpecialVariablesGet', function() {
      it('should call apiV2WebhooksSpecialVariablesGet successfully', function(done) {
        //uncomment below and update the code to test apiV2WebhooksSpecialVariablesGet
        //instance.apiV2WebhooksSpecialVariablesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));