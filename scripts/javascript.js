$(function(){

  function playButton(){
    $(".play-button").on("click", function(){
      var $gallery = $(".gallery");
      var $video = $(".video");
      var $returnButton = $(".return-button");

      $(this).on("click", function(){
        $gallery.slideUp(600, "swing");
        $video.fadeIn(600, "swing");
      })
      $returnButton.on("click", function(){
        $gallery.slideDown(600, "swing");
        $video.fadeOut(600, "swing");
      });
    })
  }
  playButton();


  function galleryTemplate() {
    $.get("templates/gallery-template.html", function(data){
      console.log(data);
      var compileTemplate = Handlebars.compile(data);
      var html = compileTemplate;
      $(".template").append(html); //currently appending to .template class in html
    })
  }
  galleryTemplate();

})
