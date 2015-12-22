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
    var width = '';
    width += ($(window).width() - 50);
    var height = '';
    height += $(window).width() * (3/4);
    $('iframe').css('width', width);
    $('iframe').css('height', height);

    $(window).resize(function() {
      var width = '';
      width += ($(window).width() - 30);
      var height = '';
      height += $(window).width() * (3/4);
      $('iframe').css('width', width);
      $('iframe').css('height', height);
    })

    })
};
