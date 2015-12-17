var horseArray = [];

function getJSON () {
  $.getJSON('data/horses.json', function(data) {
    horseArray = data;
    initTemplate();
  })
}

function initTemplate() {
  $.get('templates/showcase.html', function(data) {
    var template = Handlebars.compile(data);
    horseArray.forEach(function(item) {
      if (item.showcase) {
        var compiledHtml = template(item);
        $('#insert_here').append(compiledHtml);
      }
    })
  })
}

getJSON();
