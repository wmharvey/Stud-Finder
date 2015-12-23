$(document).ready(function() {

 $('#stud').change(function() {
   $('.stud-toggle').toggle();
   console.log('stud clicked');
 });

 $('#ancestry').change(function() {
   $('.table_container').toggle();
   console.log('table clicked');
 });

 $('#extra-image').on('click', function() {
   console.log('extra image clicked');
   $('#images').append("<div class='entry'>Relative Image URL: <input type='text' class='image-url'/></div>");
 })


 $('#render').on('click', function() {
   render();
 })



})

function render() {
  var newHorses = [];
  var showcase = {};
  showcase.id = $('#id').val();
  showcase.name = $('#name').val();
  showcase.showcase = true;
  showcase.img = getImages();
  showcase.img_thumbnail = $('#thumbnail').val();
  showcase.nickname_space = $('#nickname').val();
  showcase.nickname = $('#nickname').val().replace(/ /g,"_").toLowerCase();
  if ($('#stud').prop('checked')) {
    showcase.stud_fee = $('#fee').val();
    if ($('#lfg').prop('checked')) {
      showcase.LFG = true;
    }
  }
  showcase.description = $('#description').val();
  if ($('#ancestry').prop('checked')) {
    showcase.table = true;
    showcase.sire = {};
    showcase.dam = {};
    showcase.sire.id = $('.ancestor-id:eq(0)').val();
    showcase.sire.name = $('.ancestor-name:eq(0)').val();
    showcase.dam.id = $('.ancestor-id:eq(1)').val();
    showcase.dam.name = $('.ancestor-name:eq(1)').val();
    newHorses = makeTableArray();
    console.log('newHorses: '+ newHorses);
    newHorses.unshift(showcase);
  }

  function createAncestors() {
    var tableArray = makeTableArray();
  }

  $('#stringified').text(JSON.stringify(newHorses));
}

function getImages() {
  var arrayOfImages = [];
  $('.image-url').each(function() {
    arrayOfImages.push($(this).val());
  })
  return arrayOfImages;
}

function makeTableArray() {
  var indexedHorses = [undefined, undefined];
  for (var i = 0; i < 31; i++) {
    var ancestor = {};
    ancestor.id = $('.ancestor-id:eq(i)').val();
    ancestor.name = $('.ancestor-name:eq(i)').val();
    ancestor.sire = {};
    ancestor.dam = {};
    if (i < 14) {
      ancestor.sire.id = $('.ancestor-id:eq((i+1) * 2)').val();
      ancestor.sire.name = $('.ancestor-name:eq((i+1) * 2)').val();
      ancestor.dam.id = $('.ancestor-id:eq((i+1) * 2 + 1)').val();
      ancestor.dam.name = $('.ancestor-name:eq((i+1) * 2 + 1)').val();
    }
    indexedHorses.push(ancestor);
  }
  console.log('indexedHorses: '+ indexedHorses);
  return indexedHorses;
}
