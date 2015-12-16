$(function(){

  function playButton(){
    $(".play").on("click", function(){
      var $gallery = $(".gallery");
      var $video = $(".video");
      var $returnButton = $(".return-button");

      $gallery.slideUp("fast");
      $video.removeClass("hide");

      $returnButton.on("click", function(){
        $gallery.slideDown("fast");
        $video.addClass("hide");
      });
    })
  }

  playButton();
})
//change .gallery to display: none;
//button back to gallery inside .video div
//keep div set to display none
//remove display: none from div
//
