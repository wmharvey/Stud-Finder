var cw = cw || {};

var eTag;

cw.loadSite = function() {
	console.log("kicks off site");
	cw.makeHandlebars();
};

cw.makeHandlebars = function(){
	var template = $('#entry-template').html();
	// Handlebars compiles the template into a callable function
	var renderer = Handlebars.compile(template);
	// put data in a variable
	var myData = [{
		name: "C-W&rsquo;s Pride Over Easy (Poe)",
		nickname: "poe",
		id: "0007836",
		img: "_img/576x300_poe.jpg",
		description: "Foaled on May 25, 2000, Poe is a wonderful stallion. His personality and nature is like none other. He is smart, willing, and athletic. Most folks who come to the barn don&rsquo;t realize that he is a stallion because he is so gentle. Poe has a strong, compact, baroque body style, adding to his appeal and athleticism. Poe has a natural gait and good hard feet which allows him to remain barefoot year &rsquo;round. He gives his offspring his easy-going nature and trainability. His babies have also all been very personable and like to be with people."
	},
	{
		name: "C-W&rsquo;s Pride Over Easy (Poe)",
		nickname: "poe",
		id: "0007836",
		img: "_img/576x300_poe.jpg",
		description: "Foaled on May 25, 2000, Poe is a wonderful stallion. His personality and nature is like none other. He is smart, willing, and athletic. Most folks who come to the barn don&rsquo;t realize that he is a stallion because he is so gentle. Poe has a strong, compact, baroque body style, adding to his appeal and athleticism. Poe has a natural gait and good hard feet which allows him to remain barefoot year &rsquo;round. He gives his offspring his easy-going nature and trainability. His babies have also all been very personable and like to be with people."
	}];


	var articles = myData;
	// call the compiled function with the template date
	//var result = renderer({articles});
	var result = renderer({articles});
	 //var result = renderer({blog.raw});
	  //console.log('hi' + result);
	 //format date before appending to to #articles

	 $('#insert_showcase').append(result);
}
