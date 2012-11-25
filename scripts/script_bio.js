$(function(){
	var li=$('body.biopage div.rightpanel ol.rlists li');
	var train=$('body.biopage div.lcontent section.slideshow ul.train');
	var contents=$('body.biopage div.lcontent section.slideshow ul.train > li');
 	var currentSlide = 0;

	changeslide = function (n) {
 		if(n>li.length-1) n=0;
 		var totalheight=0;
 		for (var i =0; i < n ; i++ ) {
 			totalheight += contents.eq(i).height();
 		};
 		train.css('top',-totalheight)
 		currentSlide=n;
	}

	var abas = function(j){ 
               li.eq(j).click(function(){ 
                    changeslide(j);
               });
          }
 		for (var i=0; i<li.length; i++) { 
          
          abas(i); 
      }

 	changeslide(0); // set active of first li


});