$(function(){
	
	var lists       = $('section.container div.hollinks ol.lists > a'),//(zepto) $ mige :JS====>document.getElementby...getElementByTagName
		flechs		= $('section.container div.hollinks ol.lists > div');

	lists.mouseover(function(){ // (zepto) tuie javascript mishe onmouseover
		var index = $(this).index();  //return mikone shomare oon farzando.az sefr shoru mishe.bala k ma tage haie "a" ro gereftim 7 ta hastan.in shomarasho mide k kodum hover shodan.

		if(index==6) {
			flechs.eq(0).animate({// (zepto)eq mige item shomare chand agar yadet bashe bala goftam 7 tas.in mige kodum flch rotate she... animate style mide monteha ba transition.
				rotate : "-180deg"
			},250);        //animation duration
			flechs.eq(1).animate({
				rotate : "75deg"
			},250);

		}
		if(index==7) {
			flechs.eq(0).animate({
				rotate : "40deg"
			},250);
			flechs.eq(1).animate({
				rotate : "-180deg"
			},250);
			
		}
		if(index==8) {
			flechs.eq(1).animate({
				rotate : "-10deg"
			},250);
			flechs.eq(2).animate({
				rotate : "-180deg"
			},250);
			
		}
		if(index==9) {
			flechs.eq(2).animate({
				rotate : "-10deg"
			},250);
			flechs.eq(3).animate({
				rotate : "-190deg"
			},250);
			
		}
		if(index==10) {
			flechs.eq(3).animate({
				rotate : "30deg"
			},250);
			flechs.eq(4).animate({
				rotate : "-180deg"
			},250);
			
		}
		if(index==11) {
			flechs.eq(4).animate({
				rotate : "20deg"
			},250);
			flechs.eq(5).animate({
				rotate : "-170deg"
			},250);
			
		}
		if(index==12) {
			flechs.eq(5).animate({
				rotate : "-30deg"
			},250);
			
		}
	});

	lists.mouseout(function(){// tuie javascript mishe onmouseout,kolle function dare hameie flch haro b defult k 0 bashe barmigardune
		for(i=0;i<6;i++){
			flechs.eq(i).animate({

				rotate : '0deg' 
			})
		};
	});

	
});