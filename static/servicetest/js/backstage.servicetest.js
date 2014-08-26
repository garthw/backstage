(function (global, $, BS) {
  'use strict';

    var ServiceTestModel = Backbone.Model.extend({
      defaults: {
        link: "difference/?number=0",

      },
      parse: function(response) {
        return response['servicetest'];
      },
    }),

    ServiceView = Backbone.View.extend({
      model: new ServiceTestModel(),

      template: BS.templates['servicetest-template'],

      events: {
        'click .form-update' : 'submit'
      },

      initialize: function () {
        _.bindAll(this, 'render');
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
            console.log("success");
            console.log(result);
          }
        });
      },

      render: function (servicetest) {
        this.$el.html(this.template({ 
          data: this.model,
        }));
        return this;  
      },

    });

    $(function () { BS.serviceTest = new ServiceView({ el: '#servicetest-container' }); })

}(this, jQuery, (backstage || {})));
