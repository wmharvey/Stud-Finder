var cw = cw || {};
// TODO: figure out how to best handle namespacing, global scope issues
//cw.horseArray = [];
// in global scope?
var horseArray = [];
var eTag;
// var isHorsesPage;
// var isWelcomePage;
// var isContactPage;
// var siteLoaded = false;

// cw.pageSetUp = function() {
// 	page.base('/');
//
// 	//page('', cw.loadSite);
// 	// page('horses', cw.horses);
// 	// page('welcome', cw.welcome);
// 	// page('contact', cw.contact);
// 	//
// 	page('', function(){
// 		//cw.renderHorsesPage();
// 		cw.resetPageFlags();
// 		isHorsesPage = true;
// 		cw.loadSite();
// 	});
//
// 	page('horses', function(){
// 		if(siteLoaded){
// 			cw.renderHorsesPage();
// 		} else{
// 			isHorsesPage = true;
// 			cw.loadSite();
// 		}
// 		// cw.resetPageFlags();
// 		// isHorsesPage = true;
// 		// cw.loadSite();
// 	});
// 	page('welcome', function(){
// 		cw.renderWelcomePage();
// 		// cw.resetPageFlags();
// 		// isWelcomePage = true;
// 		//cw.loadSite();
// 	});
// 	page('contact', function(){
// 		cw.renderContactPage();
// 		// cw.resetPageFlags();
// 		// isContactPage = true;
// 		//cw.loadSite();
// 	});
//
// 	page();
// };

cw.renderHorsesPage = function() {
	// document.querySelector('p')
	//   .textContent = 'viewing index';
	$('.TEST').text('viewing index-horses page');
	cw.removedSelected();
	$('.nav-horses').addClass('selected');
	cw.hideTabContent();
	// $('.horses').fadeIn('slow');
	$('.horses').show();
	cw.resetPageFlags();
	//isHorsesPage = true;
};

cw.renderWelcomePage = function() {
	// document.querySelector('p')
	//   .textContent = 'viewing about';
	$('.TEST').text('viewing welcome');
	cw.removedSelected();
	$('.nav-welcome').addClass('selected');
	cw.hideTabContent();
	$('.welcome').fadeIn('fast');
	cw.resetPageFlags();
	//isWelcomePage = true;
};

cw.renderContactPage = function(ctx) {
	// document.querySelector('p')
	//   .textContent = 'viewing contact ' + (ctx.params.contactName || '');
	$('.TEST').text('viewing contact');
	cw.removedSelected();
	$('.nav-contact').addClass('selected');
	cw.hideTabContent();
	$('.contact').fadeIn('fast');
	cw.resetPageFlags();
	//isContactPage = true;
};

cw.removedSelected = function() {
	$('.main-nav a.selected').removeClass('selected');
};

cw.hideTabContent = function() {
	$('.tab-content').hide();
};

cw.resetPageFlags = function() {
	control.isHorsesPage = false;
	control.isWelcomePage = false;
	control.isContactPage = false;
};

cw.loadSite = function() {
	// send xhr request to server for HEAD information
	$.ajax({
      type: 'HEAD',
      url: 'data/horses.json',
      success: cw.fetchHorses
    });
};

cw.fetchHorses = function(data, message, xhr) {
	// check eTag from HEAD response
	eTag = xhr.getResponseHeader('eTag');
	//localStorage.clear(); //-- can uncomment out to clear localStorage for testing purposes
	if (typeof localStorage.cwEtag == 'undefined' || localStorage.cwEtag != eTag) {
	    console.log('cache miss!');
	    // don't set untile me have or is here fine?
	    localStorage.setItem('cwEtag', eTag);
	    horseArray = [];
	    cw.getJSON();
	}else {
	    console.log('cache hit!');
	    cw.fetchFromLocalStorage();
	}
};

cw.fetchFromLocalStorage = function(){
	console.log('fetch from local storage');
	if (typeof localStorage.horseData !== 'undefined') {
		horseArray = JSON.parse(localStorage.getItem('horseData'));
	}
	cw.initTemplate();
    cw.initGallery();
    cw.checkPageTab();
};

cw.getJSON = function() {
  	console.log('load from JSON');
	$.getJSON('data/horses.json', function(data) {
	    horseArray = data;
	    localStorage.setItem('horseData', JSON.stringify(data));
	    cw.initTemplate();
	    cw.initGallery();
	}).done(function() {
	  	//localStorage.setItem('cwEtag', eTag);
	  	cw.checkPageTab();
	});
};

cw.checkPageTab = function() {
	//console.log(isHorsesPage);
	if(control.isHorsesPage){
		control.siteLoaded = true;
		cw.resetPageFlags();
		cw.renderHorsesPage();
	}
};

cw.initTemplate = function() {
  $.get('templates/showcase.html', function(data) {
    var template = Handlebars.compile(data);
    horseArray.forEach(function(item) {
      if (item.showcase) {
        var compiledHtml = template(item);
        $('#insert_showcase').append(compiledHtml);
        if (item.table) {
          singleAncestry = [];
          var indexArray = createAncestry(item, 1);
          var table = createTable(indexArray);
          $('#insert_placeholder').append(table);
          $('#insert_placeholder').removeAttr('id');
        } else {
          $('#insert_placeholder').removeAttr('id');
        }
      }
    });
    tableFilter();
    toggleTable();
  })
};

cw.initGallery = function() {
	$.get('templates/gallery.html', function(data) {
    var template = Handlebars.compile(data);
    horseArray.forEach(function(item) {
      if (item.img_thumbnail) {
        var compiledHtml = template(item);
        $('#insert_gallery').append(compiledHtml);
      }
    })
    playButton();
  })
};

// KICKS THINGS OFF HERE!
//cw.getJSON();
//cw.loadSite();
// cw.pageSetUp();
