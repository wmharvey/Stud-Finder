  // function playButton() {
  //   $(".play-button").on("click", function () {
  //     console.log('click');
  //     var $gallery = $("#insert_gallery");
  //     var $video = $(".video");
  //     var $returnButton = $(".return-button");
  //     $gallery.hide();
  //     $('html, body').animate({
  //       scrollTop: $('#video_scroll').offset().top
  //     }, 300, function() {
  //       $video.fadeIn(600);
  //     });
  //
  //     $returnButton.on("click", function(){
  //       $gallery.show();
  //       $video.hide();
  //     });
  //   })
  // };

function iFrameSizing() {
  $('.thumbnail').on('click', function() {
    sizeFrame();
    $(window).resize(sizeFrame);
  });
};

function sizeFrame() {
  var width = '';
  var height = '';
  if ($(window).width() < 800) {
    width += ($(window).width() - 50);
    height += $(window).width() * (1/2);
  } else {
    width = '750';
    height = '400';
  }
  $('iframe').css('width', width);
  $('iframe').css('height', height);
}
