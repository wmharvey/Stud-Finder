var myvid;

  function playButton() {
    $(".play-button").on("click", function () {
      console.log('click');
      var $gallery = $("#insert_gallery");
      var $video = $(".video");
      var $returnButton = $(".return-button");
      $gallery.hide();
      $('html, body').animate({
        scrollTop: $('#video_scroll').offset().top
      }, 300, function() {
        $video.fadeIn(600);
      });

      $returnButton.on("click", function(){
        $gallery.show();
        $video.hide();
      });
    })
  };
