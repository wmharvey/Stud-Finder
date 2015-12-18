//alert("im working!");
function toggleTable() {
  var tableContainer = $(this).closest('.container').find('.table_container');
  $('.toggle').on('click', function() {
    var table = $(this).closest('.container').find('.table_container').toggle();
    console.log(table);
    //table[0].toggle();
  })
}
 function tableFilter() {
  $(".toggle").each(function(){
    var tableContainer = $(this).closest('.container').find('.table_container');
    if(tableContainer.length === 0) {
      $(this).hide();
    }
  });
 }
