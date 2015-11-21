var pageSession = new ReactiveDict();

Template.VerifyEmail.rendered = function() {
	pageSession.set("errorMessage", "");

  var verifyEmailToken = Router.current().params.verifyEmailToken;
  if (verifyEmailToken) {
      Accounts.verifyEmail(verifyEmailToken, function (err) {
          if (err) {
            pageSession.set("errorMessage", err.message);
          }
      });
  }
  else {
    pageSession.set("errorMessage", err.message);
  }
	
};

Template.VerifyEmail.events({
  "click .go-home": function(e, t) {
    Router.go("/");
  }
  
});

Template.VerifyEmail.helpers({
  "errorMessage": function() {
    return pageSession.get("errorMessage");
  }
  
});
