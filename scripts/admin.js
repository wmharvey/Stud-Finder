$(document).ready(function() {

 if (localStorage.getItem('image_fields')) {
   console.log('extra image fields persisting');
   $('#images').html(localStorage.getItem('image_fields'));
 }

 if (localStorage.getItem('current_data')) {
   console.log('cache hit');
   var dataString = localStorage.getItem('current_data');
   var oldData = JSON.parse(dataString);
   console.log(oldData);
   fillInputFields(oldData);
 }

 $('#stud').change(function() {
   $('.stud-toggle').toggle();
   persistText();
   console.log('stud clicked');
 });

 $('#lfg').change(function() {
   persistText();
   console.log('lfg clicked');
 });

 $('#ancestry').change(function() {
   $('.table_container').toggle();
   persistText();
   console.log('table clicked');
 });

 $('#extra-image').on('click', function() {
   console.log('extra image clicked');
   $('#images').append("<div class='entry'>Relative Image URL: <input type='text' class='image-url'/></div>");
   persist();
 })

 $('#clear').on('click', function() {
   localStorage.setItem('image_fields', '');
   localStorage.setItem('current_data', '');
 })

 $('#render').on('click', function() {
  $('#stringified').text(JSON.stringify(render()));
 })

persist();
function persist() {
  $('#name, #nickname, #id, #thumbnail, #fee, #lfg, #description, .image-url, .ancestor-name, .ancestor-id').on('input', function() {
  console.log('stuff has been entered');
  var image_fields = $('#images').html();
  localStorage.setItem('image_fields', image_fields);
  persistText();
  });
};

})

function fillInputFields(oldData) {
  $('#name').val(oldData[0].name);
  $('#nickname').val(oldData[0].nickname_space);
  $('#id').val(oldData[0].id);
  // oldData[0].img.length
  for (var i = 0; i < oldData[0].img.length; i++) {
    $('.image-url:eq(' + i + ')').val(oldData[0].img[i]);
  }
  $('#thumbnail').val(oldData[0].img_thumbnail);
  if (oldData[0].stud_fee) {
    $('#stud').prop('checked', true);
    $('.stud-toggle').toggle();
    $('#fee').val(oldData[0].stud_fee);
    if (oldData[0].LFG) {$('#lfg').prop('checked', true)}
  }
  $('#description').val(oldData[0].description);
  if (oldData.length > 1) {
    $('#ancestry').prop('checked', true);
    $('.table_container').toggle();
    for (var i = 0; i < 30; i++) {
      var ancestorId = oldData[i + 1].id;
      var ancestorName = oldData[i + 1].name;
      $('.ancestor-id:eq(' + i + ')').val(ancestorId);
      $('.ancestor-name:eq(' + i + ')').val(ancestorName);
    }
  }
}

function persistText() {
  var currentHorses = JSON.stringify(render());
  localStorage.setItem('current_data', currentHorses);
};

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
    newHorses.unshift(showcase);
  } else {
    newHorses.push(showcase);
  }

  return newHorses;
}

function getImages() {
  var arrayOfImages = [];
  $('.image-url').each(function() {
    arrayOfImages.push($(this).val());
  })
  return arrayOfImages;
}

function makeTableArray() {
  var indexedHorses = [];
  for (var i = 0; i < 31; i++) {
    var ancestor = {};
    ancestor.id = $('.ancestor-id:eq('+i+')').val();
    ancestor.name = $('.ancestor-name:eq('+i+')').val();
    ancestor.sire = {};
    ancestor.dam = {};
    if (i < 14) {
      ancestor.sire.id = $('.ancestor-id:eq('+ (i+1) * 2 + ')').val();
      ancestor.sire.name = $('.ancestor-name:eq('+ (i+1) * 2 + ')').val();
      ancestor.dam.id = $('.ancestor-id:eq('+ ((i+1) * 2 + 1) + ')').val();
      ancestor.dam.name = $('.ancestor-name:eq('+ ((i+1) * 2 + 1) + ')').val();
    }
    indexedHorses.push(ancestor);
  }
  return indexedHorses;
}
