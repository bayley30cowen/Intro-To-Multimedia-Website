function vector () {
		var div = document.getElementById("ani");
		var audio = new Audio("audio/VPT.mp3");
		audio.volume = 0.2;
		var width = div.offsetWidth;
		var original_width = 800;
		var original_height = 600;
		var scale_factor = width/original_width;
		var height = original_height*scale_factor;
		var paper = Raphael(div, width, height);
		var imagez = paper.image("images/back.jpg", 0, 0, width, height);

		var y = paper.circle((50*scale_factor), (50*scale_factor), (30*scale_factor))
		.attr({
			"stroke-width" : 2,
			fill : "145-#f00-#0ff"
		});
		var x = paper.rect((500*scale_factor), (150*scale_factor), (70*scale_factor), (70*scale_factor))
		.attr({
		fill : "orange"
		});
		var z = paper.rect((500*scale_factor), (400*scale_factor), (70*scale_factor), (70*scale_factor))
		.attr({
		fill : "orange"
		});
		var e = paper.rect((700*scale_factor), (150*scale_factor), (70*scale_factor), (70*scale_factor))
		.attr({
				fill : "green"
		});
		var f = paper.rect((700*scale_factor), (400*scale_factor), (70*scale_factor), (70*scale_factor))
		.attr({
			fill : "green"
		});
		if (scale_factor < 0.75) {
    			var g = paper.path("M224 340 L301 340L263 263 z")
		.attr({
			fill: '#80f', 
			stroke: '#80f'
		});
		} else { 
    			var g = paper.path("M290 440 L390 440L340 340 z")
		.attr({
			fill: '#80f', 
			stroke: '#80f'
		});
		}
		var ab = paper.circle((10*scale_factor), (300*scale_factor), (45*scale_factor))
		.attr({
			"stroke-width" : 2,
			fill : "145-#f00-#0ff"
		});
		var ac = paper.circle((-25*scale_factor), (300*scale_factor), (25*scale_factor))
		.attr({
			"stroke-width" : 2,
			fill : "145-#f00-#0ff"
		});
		e.hide()
		f.hide()
		g.hide()
		ab.hide()
		function down() {
			y.animate({cy: (300*scale_factor) , cx: (500*scale_factor)}, 2000, 'ease-in', side);
		}
		function side() {
			x.animate({transform: "r540"}, 1000, 'ease-in');
			z.animate({transform: "r540"}, 1000, 'ease-in');
			y.animate({cx: (900*scale_factor), transform : "s1.5, t3000",
			}, 1000, "ease-out", hiding);
			
		}
		function hiding() {
			x.hide()
			y.hide()
			z.hide()
			showing()
		}
		var ball = paper.circle(50,50,30);
		ball.attr({ fill: "#ff0"});
		ball.hide()
		function showing() {
			e.show()
			f.show()
			g.show()
			ab.show()
			ab.animate({cx: (210*scale_factor)}, 500, next);
		}
		function next() {
			ab.animate({cx: (260*scale_factor), cy: (200*scale_factor), transform : "r360"}, 500, back);
		}
		function back() {
			ab.animate({cx: (350*scale_factor), cy: (300*scale_factor), transform : "r360"}, 500);
			g.animate({fill : '#0ff'}, 1000, contin);
		}
		function contin() {
			ab.animate({cx: (1050*scale_factor), transform : "s0.5",
			}, 1500, "ease-out");
			e.animate({transform: "r540", fill: '#ff0'}, 1000, 'ease-in');
			f.animate({transform: "r540", fill: '#ff0'}, 1000, 'ease-in', hide2);
		}
		function hide2() {
			e.hide()
			f.hide()
			g.hide()
			ab.hide()
			ac.show()
			game()
			
		}
		function game() {
			ac.animate({cx: (500*scale_factor), fill: '#ff0', transform: "r360"}, 2000, up);
		}
		function up() {
			ac.animate({cx: (875*scale_factor), cy: (-25*scale_factor)}, 1000, texta);

		}
		function texta() {
			var a = paper.text((400*scale_factor), (30*scale_factor), "Try to hover over the ball").attr({'font-size': 32, });
			bounce_up1()
		}
		function bounce_drop1() {
			ball.show()
			ball.animate({cy: (570*scale_factor) , cx: (400*scale_factor)}, 500, 'ease-in', bounce_up1);
			ball.hover(function(){this.attr({fill : "green"})}, function(){this.attr({fill : "red"})});
		}
		function bounce_up1() {
			ball.animate({cy: (50*scale_factor), cx: (750*scale_factor)}, 500, 'ease-out', bounce_drop2);
			ball.hover(function(){this.attr({fill : "green"})}, function(){this.attr({fill : "red"})});
		}
		function bounce_drop2() {
			ball.animate({cy: (570*scale_factor), cx: (400*scale_factor)}, 500, 'ease-in', bounce_up2);
			ball.hover(function(){this.attr({fill : "green"})}, function(){this.attr({fill : "red"})});
		}
		function bounce_up2() {
			ball.animate({cy: (50*scale_factor), cx: (50*scale_factor)}, 500, 'ease-out', bounce_drop3);
			ball.hover(function(){this.attr({fill : "green"})}, function(){this.attr({fill : "red"})});
		}
		function bounce_drop3() {
			ball.show()
			ball.animate({cy: (570*scale_factor) , cx: (400*scale_factor)}, 500, 'ease-in', bounce_up3);
			ball.hover(function(){this.attr({fill : "blue"})}, function(){this.attr({fill : "green"})});
		}
		function bounce_up3() {
			ball.animate({cy: (50*scale_factor), cx: (750*scale_factor)}, 500, 'ease-out', bounce_drop4);
			ball.hover(function(){this.attr({fill : "blue"})}, function(){this.attr({fill : "green"})});
		}
		function bounce_drop4() {
			ball.animate({cy: (570*scale_factor), cx: (400*scale_factor)}, 500, 'ease-in', bounce_up4);
			ball.hover(function(){this.attr({fill : "blue"})}, function(){this.attr({fill : "green"})});
		}
		function bounce_up4() {
			ball.animate({cy: (50*scale_factor), cx: (50*scale_factor)}, 500, 'ease-out', bounce_drop5);
			ball.hover(function(){this.attr({fill : "blue"})}, function(){this.attr({fill : "green"})});
		}
		function bounce_drop5() {
			ball.show()
			ball.animate({cy: (570*scale_factor) , cx: (400*scale_factor)}, 500, 'ease-in', bounce_up5);
			ball.hover(function(){this.attr({fill : "yellow"})}, function(){this.attr({fill : "blue"})});
		}
		function bounce_up5() {
			ball.animate({cy: (50*scale_factor), cx: (750*scale_factor)}, 500, 'ease-out', bounce_up6);
			ball.hover(function(){this.attr({fill : "yellow"})}, function(){this.attr({fill : "blue"})});
		}
		function bounce_drop6() {
			ball.animate({cy: (570*scale_factor), cx: (400*scale_factor)}, 500, 'ease-in', bounce_up6);
			ball.hover(function(){this.attr({fill : "yellow"})}, function(){this.attr({fill : "blue"})});
		}
		function bounce_up6() {
			ball.animate({cy: (50*scale_factor), cx: (50*scale_factor)}, 500, 'ease-out', bounce_drop7);
			ball.hover(function(){this.attr({fill : "yellow"})}, function(){this.attr({fill : "blue"})});
		}
		function goodbye() {
			ball.stop()
			audio.stop()
			a.hide()
			var b = paper.text((400*scale_factor), (150*scale_factor), "The END").attr({'font-size': 40, });

		}
		function bounce_drop7() {
			ball.show()
			ball.animate({cy: (570*scale_factor) , cx: (400*scale_factor)}, 500, 'ease-in', bounce_up7);
			ball.hover(function(){this.attr({fill : "green"})}, function(){this.attr({fill : "red"})});
		}
		function bounce_up7() {
			ball.animate({cy: (-40*scale_factor), cx: (1050*scale_factor)}, 500, 'ease-out', goodbye);
			ball.hover(function(){this.attr({fill : "green"})}, function(){this.attr({fill : "red"})});
		}
		down();
		var a = document.getElementById("p1");
		var dddd = document.getElementById("p2");
		a.style.display = "none";
		dddd.style.display = "block";
		var ghf = document.getElementById("hider");
		ghf.style.display = "none";
		audio.play()
		};