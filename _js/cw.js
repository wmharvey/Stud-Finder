var cw = cw || {};
// TODO: figure out how to best handle namespacing, global scope issues
//cw.horseArray = [];
// in global scope?
var horseArray = [];

cw.loadSite = function() {
	//common initiallogic on all pages
	console.log("kicks off site");
	//cw.makeHandlebars();
};

cw.getJSON = function() {
  $.getJSON('data/horses.json', function(data) {
    horseArray = data;
    cw.initTemplate();
    cw.initGallery();
  })
}

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
}

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
}

// KICKS THINGS OFF HERE!
cw.getJSON();



