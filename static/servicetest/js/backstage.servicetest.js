 var backstage = (function (global, $, BS) {
  'use strict';

    var ServiceTestModel = Backbone.Model.extend({
      parse: function(response) {
        return response['servicetest'];
      }
    }),

    ServiceView = Backbone.View.extend({
      model: new ServiceTestModel(),

      template: BS.templates['servicetest-template'],

      initialize: function () {
        _.bindAll(this, "render");
        console.log("init");
      },


      render: function (servicetest) {
        console.log("rendering");
       
      },

      toggle: function() {
      
      },

    });

 
    $(function () { BS.serviceTest = new ServiceView({ el: '#servicetest' }) })

}(this, jQuery, (backstage || {})));
