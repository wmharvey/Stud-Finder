function toggleTable() {
  var tableContainer = $(this).closest('.container').find('.table_container');
  $('.toggle').on('click', function() {
    var table = $(this).closest('.container').find('.table_container').slideToggle();
    $('html, body').animate({
      scrollTop: (table.offset().top - 100)
    }, 1000);
  });
}
 function tableFilter() {
  $(".toggle").each(function(){
    var tableContainer = $(this).closest('.container').find('.table_container');
    if(tableContainer.length === 0) {
      $(this).hide();
    }
  });
 }
