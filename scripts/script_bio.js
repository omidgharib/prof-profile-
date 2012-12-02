$(function(){
	var li=$('body.biopage div.rightpanel ol.rlists li');
	var train=$('body.biopage div.lcontent section.slideshow ul.train');
	var contents=$('body.biopage div.lcontent section.slideshow ul.train > li');
 	var currentSlide = 0;
 	var url=document.URL;

	changeslide = function (n) {
 		if(n>li.length-1) n=0;
 		var totalheight=0;
 		for (var i =0; i < n ; i++ ) {
 			totalheight += contents.eq(i).height();
 		};
 		train.animate({top:-totalheight+'px'},900);
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

      //set active li for start
	if (url.match('complete%20bio')) { changeslide(0);};
	if (url.match('publication')) { changeslide(1);};
	if (url.match('attended')) { changeslide(2);};
	if (url.match('research')) { changeslide(3);};
	if (url.match('professional')) { changeslide(4);};
	if (url.match('contact%20info')) { changeslide(5);};
	if (url.match('download%20cv')) { changeslide(6);};
});