//window.onload = function(){
	
	function a() {	
		var div = document.getElementById("paper");
		var width = div.offsetWidth;
		var original_width = 800;
		var original_height = 600;
		var scale_factor = width/original_width;
		var height = original_height*scale_factor;
		var p = Raphael(div, width, height);
		var backGround = p.rect(0, 0, width, height);
		
		backGround.attr({ fill: "blue"});

		var ball = p.circle((50*scale_factor),(50*scale_factor),(30*scale_factor));
		ball.attr({ fill: "45-green-yellow"});
		function bounce_drop1() {
			ball.animate({cy: (570*scale_factor) , cx: (400*scale_factor)}, 500, 'ease-in', bounce_up1);
		}
		function bounce_up1() {
			ball.animate({cy: (50*scale_factor), cx: (750*scale_factor)}, 500, 'ease-out', bounce_drop2);
		}
		function bounce_drop2() {
			ball.animate({cy: (570*scale_factor) , cx: (400*scale_factor)}, 500, 'ease-in', bounce_up2);
		}
		function bounce_up2() {
			ball.animate({cy: (50*scale_factor), cx: (50*scale_factor)}, 500, 'ease-out', bounce_drop1);
		}
		var a = document.getElementById("p1");
		var b = document.getElementById("image");
		var c = document.getElementById("vectorsLab");
		var d = document.getElementById("p2");
		a.style.display = "none";
		b.style.display = "none";
		d.style.display = "block";
		c.style.marginBottom = "30px";
		bounce_drop1();
	};
