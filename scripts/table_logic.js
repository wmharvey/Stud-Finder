//Cut off for table size
var maxAncestory = 32;

function createTable (pedigree) {
  var index = 2;
  var loops = 2;
  var table = "<div class='table_container'><div class='table'>";
  while (index < maxAncestory - 1) {
    table += fillColumn(pedigree);
  }

  function fillColumn () {
    var content = "<div class='column'>";
    for (var i = 0; i < loops; i++) {
      var name = pedigree[index].name ? (pedigree[index].name) : "unknown";
      var id = pedigree[index].id ? (pedigree[index].id) : ("unknown");
      var wgc = pedigree[index].WGC;
      content += "<div class='cell'><span>" + name;
      if (wgc) {
        content += ' (WGC)';
      }
      content += "</span><span>" + id + "</span></div>";
      index++;
    }
    content += "</div>";
    loops *= 2;
    return content;
  }
  table += "</div></div>";
  return table;
}
