(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// symbols:



(lib.mainbackground = function() {
	this.initialize(img.mainbackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2024,1334);


(lib.rackback = function() {
	this.initialize(img.rackback);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,886,400);


(lib.rackfront = function() {
	this.initialize(img.rackfront);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1299,584);


(lib.tiretoss = function() {
	this.initialize(img.tiretoss);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,525,707);


(lib.scoringBackground = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.898)").s().p("Eg0FANwQAAgBBaABIDSDQIAABaQksAAAAABgEAvgASaQgBAAABhZIDQjTIBaAAQAAEsABAAgEg0JgNtQAAksgBAAIErAAQABAAgBBZIjRDTgEAytgNvIjTjQIAAhaQEsAAAAgBIAAErIgWABIhDgBg");
	this.shape.setTransform(79.4,89.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.898)").s().p("EgzuAR+MAAAgj7MBndAAAMAAAAj4QgXACgeAAMhJPAABg");
	this.shape_1.setTransform(79.8,89.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-254.5,-28.8,667.9,235.9);


(lib.questionBackground = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgzWAo/MAAAhR9MBmtAAAMAAABR9g");
	this.shape.setTransform(50,-33.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-278.7,-295.5,657.5,524.7);


(lib.cover = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EluSDxbMAAAni1MLclAAAMAAAHi1g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2344.3,-1545.1,4688.6,3090.2);


(lib.tire = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.tiretoss();
	this.instance.setTransform(-87.4,-324.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.4,-324.9,525,707);


(lib.rack_font = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.rackfront();
	this.instance.setTransform(-265.3,-7.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-265.3,-7.1,1299,584);


(lib.rack_back = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.rackback();
	this.instance.setTransform(-1,-94);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-94,886,400);


(lib.AudioHolder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{buzz_out:1,uniroyal_correct:2,uniroyal_fail:3,uniroyal_loop:4,uniroyal_submit_button:5,correct_feedback:6,incorrect_feedback:7,option_click:8,option_over:9});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		//playSound("buzz_out");
	}
	this.frame_2 = function() {
		this.stop();
		//playSound("uniroyal_correct");
	}
	this.frame_3 = function() {
		this.stop();
		//playSound("uniroyal_fail");
	}
	this.frame_4 = function() {
		this.stop();
		//playSound("uniroyal_loop",-1);
	}
	this.frame_5 = function() {
		this.stop();
		//playSound("uniroyal_submit_button");
	}
	this.frame_6 = function() {
		this.stop();
		//playSound("Mod2_20_Challenge_Congrats_opt");
	}
	this.frame_7 = function() {
		this.stop();
		//playSound("Mod2_21_Challenge_TryAgain_opt");
	}
	this.frame_8 = function() {
		this.stop();
		//playSound("uniroyal_checkbox");
	}
	this.frame_9 = function() {
		this.stop();
		//playSound("uniroyal_hover");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.emptyrack = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.rack_back();
	this.instance.setTransform(3,11.5,1.126,1.485,0,0,0,4.7,-85);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2A2A2A","#999999"],[0,1],2.4,-8.7,6.6,2).s().p("EhAAAZWQgIgFgGgIIgEgMQgHgbAdgJMCALgxzIAFBUMiACAxhIgDAAQgHAAgIgFg");
	this.shape.setTransform(573.2,165.7);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.4,-1.8,997.4,594.1);


// stage content:
(lib.rackemup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_54 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}
	this.frame_84 = function() {
		this.stop();
	}
	this.frame_99 = function() {
		this.stop();
	}
	this.frame_114 = function() {
		this.stop();
	}
	this.frame_129 = function() {
		this.stop();
	}
	this.frame_144 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(15).call(this.frame_24).wait(15).call(this.frame_39).wait(15).call(this.frame_54).wait(15).call(this.frame_69).wait(15).call(this.frame_84).wait(15).call(this.frame_99).wait(15).call(this.frame_114).wait(15).call(this.frame_129).wait(15).call(this.frame_144).wait(1));

	// Tirerack Front Edge
	this.instance = new lib.rack_font();
	this.instance.setTransform(1319.1,100.9,0.473,0.624,0,0,0,-259.9,-7.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(144));

	// Tire 9
	this.instance_1 = new lib.tire();
	this.instance_1.setTransform(332.1,1156.3,0.327,0.327,0,0,0,174.8,28.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(135).to({_off:false},0).to({regX:174.9,scaleX:0.45,scaleY:0.45,x:1791.3,y:293.5},9,cjs.Ease.get(0.75)).wait(1));

	// Tire 8
	this.instance_2 = new lib.tire();
	this.instance_2.setTransform(538.7,1149,0.327,0.325,0,0,0,175,28.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120).to({_off:false},0).to({regX:174.9,scaleX:0.42,scaleY:0.41,x:1711.8,y:308.5},9,cjs.Ease.get(0.75)).wait(16));

	// Tire 7
	this.instance_3 = new lib.tire();
	this.instance_3.setTransform(656.2,1150.3,0.327,0.327,0,0,0,174.8,28.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(105).to({_off:false},0).to({regX:175,regY:28.6,scaleX:0.38,scaleY:0.38,x:1645.9,y:321.6},9,cjs.Ease.get(0.75)).wait(31));

	// Tire 6
	this.instance_4 = new lib.tire();
	this.instance_4.setTransform(934.3,1160.3,0.326,0.326,0,0,0,175.1,28.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).to({regX:174.8,regY:28.6,scaleX:0.36,scaleY:0.36,x:1604.3,y:334.2},10,cjs.Ease.get(0.75)).wait(46));

	// Tire 5
	this.instance_5 = new lib.tire();
	this.instance_5.setTransform(184,1160.3,0.327,0.335,0,0,0,178.8,28.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(74).to({_off:false},0).to({regX:174.8,regY:28.6,scaleX:0.33,scaleY:0.34,x:1564,y:344.4},10,cjs.Ease.get(0.75)).wait(61));

	// Tire 4
	this.instance_6 = new lib.tire();
	this.instance_6.setTransform(758.2,1152.3,0.327,0.327,0,0,0,175,28.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(59).to({_off:false},0).to({regX:174.9,scaleX:0.32,scaleY:0.32,x:1517.8,y:357.4},10,cjs.Ease.get(0.75)).wait(76));

	// Tire 3
	this.instance_7 = new lib.tire();
	this.instance_7.setTransform(538.2,1154.3,0.327,0.319,0,0,0,175.1,28.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(44).to({_off:false},0).to({regX:175,regY:28.5,scaleX:0.3,scaleY:0.3,x:1475.3,y:369},10,cjs.Ease.get(0.75)).wait(91));

	// Tire 2
	this.instance_8 = new lib.tire();
	this.instance_8.setTransform(934.3,1160.3,0.327,0.32,0,0,0,174.8,28.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({_off:false},0).to({regX:174.9,regY:28.7,scaleX:0.28,scaleY:0.28,x:1437.3,y:379.3},10,cjs.Ease.get(0.75)).wait(106));

	// Tire 1
	this.instance_9 = new lib.tire();
	this.instance_9.setTransform(184,1160.3,0.327,0.327,0,0,0,174.8,28.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).to({regX:174.7,regY:37.6,scaleX:0.26,scaleY:0.26,x:1396.6,y:392},10,cjs.Ease.get(0.75)).wait(121));

	// Tirerack
	this.instance_10 = new lib.emptyrack();
	this.instance_10.setTransform(1305.2,128.1,0.614,0.614,0,0,0,-2,12.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).wait(144));

	// Scoring Background
	this.instance_11 = new lib.scoringBackground();
	this.instance_11.setTransform(1685.7,985.9,1,1,0,0,0,118,0);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).wait(144));

	// Selection Background
	this.questionBox = new lib.questionBackground();
	this.questionBox.setTransform(565.7,741.6,1.874,2.374);
	this.questionBox._off = true;

	this.timeline.addTween(cjs.Tween.get(this.questionBox).wait(1).to({_off:false},0).wait(144));

	// Intro Cover
	this.introCover = new lib.cover();
	this.introCover.setTransform(-1223.3,667,0.432,0.432);

	this.timeline.addTween(cjs.Tween.get(this.introCover).wait(145));

	// Audio lib in background
	this.instance_12 = new lib.AudioHolder();
	this.instance_12.setTransform(-108,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(145));

	// Background
	this.instance_13 = new lib.mainbackground();

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1223.3,667,4259.3,1334);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;