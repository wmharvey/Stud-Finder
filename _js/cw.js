var cw = cw || {};
cw.horseArray = [];

cw.loadSite = function() {
	//common initiallogic on all pages
	console.log("kicks off site");
	cw.makeHandlebars();
};

cw.getJSON = function() {
  $.getJSON('data/horses.json', function(data) {
    cw.horseArray = data;
    cw.initTemplate();
  })
}

cw.initTemplate = function() {
  $.get('templates/showcase.html', function(data) {
    var template = Handlebars.compile(data);
    cw.horseArray.forEach(function(item) {
      if (item.showcase) {
        var compiledHtml = template(item);
        $('#insert_here').append(compiledHtml);
      }
    })
  })
}

cw.makeHandlebars = function(){
	// var template = $('#entry-template').html();
	var template = $('#thumb-template').html();
	// Handlebars compiles the template into a callable function
	var renderer = Handlebars.compile(template);
	// put data in a variable
	var myData = [{
		imgAvatar 	: "_img/horses/135x135_poe.jpg",
		videoPath	: "http://treehouse-code-samples.s3.amazonaws.com/html-video-and-audio/bridge.mp4",
		name: "C-W’s Pride Over Easy (Poe)",
		nickname: "poe",
		id: "0007836",
		img: "_img/576x300_poe.jpg",
		description: "Foaled on May 25, 2000, Poe is a wonderful stallion. His personality and nature is like none other. He is smart, willing, and athletic. Most folks who come to the barn don&rsquo;t realize that he is a stallion because he is so gentle. Poe has a strong, compact, baroque body style, adding to his appeal and athleticism. Poe has a natural gait and good hard feet which allows him to remain barefoot year &rsquo;round. He gives his offspring his easy-going nature and trainability. His babies have also all been very personable and like to be with people."
	},
	{
		imgAvatar 	: "_img/horses/135x135_poe.jpg",
		videoPath	: "http://treehouse-code-samples.s3.amazonaws.com/html-video-and-audio/bridge.mp4",
		name: "C-W&rsquo;s Pride Over Easy (Poe)",
		nickname: "poe",
		id: "0007836",
		img: "_img/576x300_poe.jpg",
		description: "Foaled on May 25, 2000, Poe is a wonderful stallion. His personality and nature is like none other. He is smart, willing, and athletic. Most folks who come to the barn don&rsquo;t realize that he is a stallion because he is so gentle. Poe has a strong, compact, baroque body style, adding to his appeal and athleticism. Poe has a natural gait and good hard feet which allows him to remain barefoot year &rsquo;round. He gives his offspring his easy-going nature and trainability. His babies have also all been very personable and like to be with people."
	}];

	// var showcases = myData;
	var thumb = myData;
	// call the compiled function with the template date
	// var result = renderer({showcases});
	var result = renderer({thumb});
	$('#insert_gallery').append(result);
	// $('#insert_showcase').append(result);
}


