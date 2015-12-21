page.base('/');

page('', control.main);
page('about', control.welcome);
page('contact', control.contact);

var control = control || {};

control.isHorsesPage = false;
control.isWelcomePage = false;
control.isContactPage = false;

control.main = function() {
  control.isHorsesPage = true;
}

control.welcome = function() {
  control.isWelcomePage = true;
}

control.contact = function() {
  control.isContactPage = true;
}
