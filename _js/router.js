page.base('/');

page('', control.main);
page('about', control.welcome);
page('contact', control.contact);
page('#*', function(e){
  console.log(e);
});

var control = control || {};

control.isHorsesPage = false;
control.isWelcomePage = false;
control.isContactPage = false;

control.main = function(e) {
  console.log("This is e: " + e);
  control.isHorsesPage = true;
}

control.welcome = function() {
  control.isWelcomePage = true;
}

control.contact = function() {
  control.isContactPage = true;
}
