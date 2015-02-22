/* global app:true */

(function() {
  'use strict';

  app = app || {};

  app.Ask = Backbone.Model.extend({
    url: '/questions/ask/',
    defaults: {
      errors: [],
      errfor: {},
      text: ''
    }
  });

  app.AskView = Backbone.View.extend({
    el: '#ask',
    template: _.template( $('#tmpl-ask').html() ),
    events: {
      'submit form': 'preventSubmit',
      'click .btn-ask': 'ask'
    },
    initialize: function() {
      this.model = new app.Ask();
      this.listenTo(this.model, 'sync', this.render);
      this.render();
    },
    render: function() {
      this.$el.html(this.template( this.model.attributes ));
      this.$el.find('[name="text"]').focus();
    },
    preventSubmit: function(event) {
      event.preventDefault();
    },
    ask: function() {
      this.$el.find('.btn-ask').attr('disabled', true);
      this.model.save({
        text: this.$el.find('[name="text"]').val()
      },{
        success: function(model, response) {
          if (response.success) {

            location.href = '/questions/mine/';
          }
          else {
            model.set(response);
          }
        }
      });
    }
  });

  $(document).ready(function() {
    app.signupView = new app.AskView();
  });
}());
