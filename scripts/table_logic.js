//One array to hold all tables
var arrayOfTables = [];
//Cut off for table size
var maxAncestory = 32;

function createTable (pedigree) {
  var index = 2;
  var loops = 2;
  var table = "<div class='table'>";
  while (index < maxAncestory - 1) {
    table += fillColumn(pedigree);
  }

  function fillColumn () {
    var content = "<div class='column'>";
    for (var i = 0; i < loops; i++) {
      content += "<div class='cell'><span>" + pedigree[index].name + "</span><span>" + pedigree[index].id + "</span></div>";
      index++;
    }
    content += "</div>";
    loops *= 2;
    return content;
  }
  table += "</div>";
  return table;
}



function renderTables() {
  ancestryArray.forEach(function(array) {
    arrayOfTables.push(createTable(array));
  });
  arrayOfTables.forEach(function(table) {
    $('#insert_here').append(table);
  });
}

// function renderTables () {
//   $('#insert_here').append(createTable(ancestryArray[0]));
// }


getJSON();
