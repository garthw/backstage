(function (global, $, BS) {
  'use strict';

    var ServiceTestModel = Backbone.Model.extend({
      defaults: {
        link: "difference/?number=0",
        occurrences: 0,
        value: 0,
        datetime: "N/A",
        number: 0,
        error: ""
      }
    }),

    ServiceView = Backbone.View.extend({
      model: new ServiceTestModel(),

      template: BS.templates['servicetest-template'],

      events: {
        'click .form-update' : 'submit'
      },

      initialize: function () {
        _.bindAll(this, 'render');
        this.model.bind('change', this.render);
        this.render();
      },

      getCookie: function(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
              }
            }
        return cookieValue;
      },

      submit: function() {
        var csrftoken = this.getCookie('csrftoken');
        var number = $("#num-input").val();
        $.ajax({
          type: 'POST',
          url: '/difference/?number=' + number,
          xhrFields: {
            withCredentials: true
          },
          async: true,
          crossDomain: true,

          success: function(result){
            // Refactor
            backstage.serviceTest.model.set("number", result['number']);
            backstage.serviceTest.model.set("value", result['value']);
            backstage.serviceTest.model.set("occurrences", result['occurrences']);
            backstage.serviceTest.model.set("datetime", result['datetime']);
            backstage.serviceTest.model.set("error", result['Error']);
          }
        });
      },

      render: function (servicetest) {
        this.$el.html(this.template({
          // Refactor
          data: this.model,
          occurrences: this.model.attributes.occurrences,
          number: this.model.attributes.number,
          value: this.model.attributes.value,
          datetime: this.model.attributes.datetime,
          error: this.model.attributes.error
        }));
        return this;  
      },

    });

    $(function () { BS.serviceTest = new ServiceView({ el: '#servicetest-container' }); })

}(this, jQuery, (backstage || {})));
