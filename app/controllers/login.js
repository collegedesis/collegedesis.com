export default Ember.Controller.extend({
  needs: ['application'],

  reset: function() {
    this.setProperties({
      email: "",
      password: "",
      errorMessage: ""
    });
  },

  actions: {

    login: function() {

      var self = this;

      var data = {
        session: this.getProperties('email', 'password')
      };

      var url = window.config.api;

      Ember.$.post(url + '/sessions', data)
      .done(function(results) {
        var authManager = self.get('controllers.application.authManager');
        authManager.authenticate(results.api_key.access_token, results.api_key.user_id);
        self.transitionToRoute('index');
      })
      .error(function(response) {
        window.alert(response.responseText);
      });
    }
  }

});
