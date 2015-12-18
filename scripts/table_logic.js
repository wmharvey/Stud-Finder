//Cut off for table size
var maxAncestory = 32;

function createTable (pedigree) {
  console.log("pedigree:" + pedigree);
  var index = 2;
  var loops = 2;
  var table = "<div class='table'>";
  while (index < maxAncestory - 1) {
    table += fillColumn(pedigree);
  }

  function fillColumn () {
    var content = "<div class='column'>";
    for (var i = 0; i < loops; i++) {
      var name = pedigree[index].name ? (pedigree[index].name) : "unknown";
      var id = pedigree[index].id ? (pedigree[index].id) : ("unknown");
      content += "<div class='cell'><span>" + name + "</span><span>" + id + "</span></div>";
      index++;
    }
    content += "</div>";
    loops *= 2;
    return content;
  }
  table += "</div>";
  return table;
}
