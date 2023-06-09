/**
 * facturacion
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
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
    factory(root.expect, root.Facturacion);
  }
}(this, function(expect, Facturacion) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Facturacion.Product();
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

  describe('Product', function() {
    it('should create an instance of Product', function() {
      // uncomment below and update the code to test Product
      //var instance = new Facturacion.Product();
      //expect(instance).to.be.a(Facturacion.Product);
    });

    it('should have the property productId (base name: "productId")', function() {
      // uncomment below and update the code to test the property productId
      //var instance = new Facturacion.Product();
      //expect(instance).to.be();
    });

    it('should have the property invoiceId (base name: "invoiceId")', function() {
      // uncomment below and update the code to test the property invoiceId
      //var instance = new Facturacion.Product();
      //expect(instance).to.be();
    });

    it('should have the property articleId (base name: "articleId")', function() {
      // uncomment below and update the code to test the property articleId
      //var instance = new Facturacion.Product();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instance = new Facturacion.Product();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instance = new Facturacion.Product();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new Facturacion.Product();
      //expect(instance).to.be();
    });

    it('should have the property article (base name: "article")', function() {
      // uncomment below and update the code to test the property article
      //var instance = new Facturacion.Product();
      //expect(instance).to.be();
    });

    it('should have the property invoice (base name: "invoice")', function() {
      // uncomment below and update the code to test the property invoice
      //var instance = new Facturacion.Product();
      //expect(instance).to.be();
    });

  });

}));
