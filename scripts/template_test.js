var horseArray = [];

function getJSON () {
  $.getJSON('data/horses.json', function(data) {
    horseArray = data;
    initTemplate();
    initGallery();
  });
}

function initTemplate() {
  $.get('templates/showcase.html', function(data) {
    var template = Handlebars.compile(data);
    horseArray.forEach(function(item) {
      if (item.showcase) {
        var compiledHtml = template(item);
        $('#insert_here').append(compiledHtml);
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

function initGallery() {
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

getJSON();




