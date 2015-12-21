var control = control || {};

control.isHorsesPage = false;
control.isWelcomePage = false;
control.isContactPage = false;
control.siteLoaded = false;

control.main = function() {
  if(control.siteLoaded){
    cw.renderHorsesPage();
  } else {
    control.isHorsesPage = true;
    cw.loadSite();
  }
}

control.welcome = function() {
  cw.renderWelcomePage();
}

control.contact = function() {
  cw.renderContactPage();
}
