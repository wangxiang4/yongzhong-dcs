(function(a){a.ui=a.ui||{};a.fn.roll=function(b){return this.each(function(){var c=a.extend({},b);if(c!==false){new a.ui.roll(this,c)}})};a.ui.roll=function(c,b){this.settings=a.extend({},a.ui.roll.settings,b);this.element=a(c);this.speed=this.settings.speed;this.timer=null;this.w=0;this.h=0;this.width=0;this.height=0;this.initialize()};a.ui.roll.prototype={initialize:function(){var c=this;if(this.element.find(this.settings.item).size()==0){return false}this.element.find(this.settings.item).each(function(){c.w+=a(this).innerWidth();c.h+=a(this).innerHeight()});this.width=this.element.innerWidth();this.height=this.element.innerHeight();switch(this.settings.side.toLowerCase()){case"up":case"down":if(this.h<this.height){return false}break;case"up":case"down":default:if(this.w<this.width){return false}}var b=this.element.find(this.settings.id);this.element.find(this.settings.item).each(function(){a(this).clone(true).appendTo(b)}).end().hover(function(){c.pause()},function(){c.play()});this.play();if(this.settings.onChange){this.settings.onChange(c)}},scroll:function(c,b,f,d,g){var e=this.settings.step*d;if(d>0){if(c>=(f*2-b)){c-=f}}else{if(c<=0){c+=f}}this.speed=this.settings.speed;if(c%g==0){this.speed=this.settings.pstep}c+=e;return c},play:function(){var b=this;switch(this.settings.side.toLowerCase()){case"up":this.side=1;this.element.scrollTop(this.scroll(this.element.scrollTop(),this.height,this.h,this.side,this.settings.pheight));break;case"down":this.side=-1;this.element.scrollTop(this.scroll(this.element.scrollTop(),this.height,this.h,this.side,this.settings.pheight));break;case"right":this.side=-1;this.element.scrollLeft(this.scroll(this.element.scrollLeft(),this.width,this.w,this.side,this.settings.pwidth));break;case"left":default:this.side=1;this.element.scrollLeft(this.scroll(this.element.scrollLeft(),this.width,this.w,this.side,this.settings.pwidth))}if(this.settings.auto){this.timer=window.setTimeout(function(){b.play()},this.speed)}},pause:function(){clearTimeout(this.timer)}};a.extend(a.ui.roll,{settings:{auto:false,step:1,id:"ul",item:"li",speed:20,side:"left",pwidth:0,pheight:0,pstep:1000,onChange:undefined}})})(jQuery);

jQuery.fn.myScrollTop= function(speed){
	var $this = $(this);
	var scroolObj = $this.children();
	var subobj1 =$this.find(".div1");
	var subobj2 =$this.find(".div2");
	subobj2.html(subobj1.html()); 
	var mar = function() {
		if ($this.scrollTop() > subobj1.height()) {  
			$this.scrollTop(0);
		} else {
			$this.scrollTop($this.scrollTop() + 1);  
		}
	};
	var vid = setInterval(mar, speed);
	$this.mouseenter(function() {
		clearInterval(vid);
	}).mouseleave(function() {
		vid = setInterval(mar, speed);
	});
	}