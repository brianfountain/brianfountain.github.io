(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// symbols:



(lib.getuptospeed_horizon = function() {
	this.initialize(img.getuptospeed_horizon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2024,1028);


(lib.getuptospeed_largedash = function() {
	this.initialize(img.getuptospeed_largedash);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2024,1336);


(lib.steeringwheel = function() {
	this.initialize(img.steeringwheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1672,612);


(lib.cover = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("EieGBoNMAAAjQZME8NAAAMAAADQZg");
	this.shape.setTransform(0,0,2.316,2.316);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2344.3,-1545.1,4688.6,3090.2);


(lib.wheel = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.steeringwheel();
	this.instance.setTransform(-585.1,-369.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-585.1,-369.8,1672,612);


(lib.horizon = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.getuptospeed_horizon();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2024,1028);


(lib.roadTexture = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#1E1E0A","#31312E"],[0.035,1],534.9,1668.4,534.9,-613.9).s().p("EiisBVzMAAAirlMFFYAAAMAAACrlg");
	this.shape.setTransform(1041.3,256.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-292.6,2082.6,1098.3);


(lib.RoadLine = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFBFBF").s().p("EhQDAAPIAAgdMCgHAAAIAAAdg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-512.4,-1.5,1024.9,3.1);


(lib.GrassLine = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5B8900").s().p("EhQDAAPIAAgdMCgHAAAIAAAdg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-512.4,-1.5,1024.9,3.1);


(lib.needle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFF66","rgba(255,102,0,0.498)"],[0,1],0,-2.1,0,13).s().p("AgPCrIAAlVIAfAAIAAFVg");
	this.shape.setTransform(27.2,-8.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(25.6,-25.6,3.3,34.3);


(lib.dash = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.getuptospeed_largedash();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2024,1336);


(lib.AudioHolder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{buzz_out:1,uniroyal_correct:2,uniroyal_fail:3,uniroyal_loop:4,uniroyal_submit_button:5,uniroyal_truck_accellerate:6,correct_feedback:7,incorrect_feedback:8,option_click:9,option_over:10});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		playSound("buzz_out");
	}
	this.frame_2 = function() {
		this.stop();
		playSound("uniroyal_correct");
	}
	this.frame_3 = function() {
		this.stop();
		playSound("uniroyal_fail");
	}
	this.frame_4 = function() {
		this.stop();
		playSound("uniroyal_loop",-1);
	}
	this.frame_5 = function() {
		this.stop();
		playSound("uniroyal_submit_button");
	}
	this.frame_6 = function() {
		this.stop();
		playSound("uniroyal_truck_accellerate");
	}
	this.frame_7 = function() {
		this.stop();
		playSound("mod1_18_Challenge_Congrats");
	}
	this.frame_8 = function() {
		this.stop();
		playSound("mod1_19_Challenge_TryAgain");
	}
	this.frame_9 = function() {
		this.stop();
		playSound("uniroyal_checkbox");
	}
	this.frame_10 = function() {
		this.stop();
		playSound("uniroyal_hover");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.odometer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{odo1:3,odo2:13,odo3:23,odo4:33,odo5:43});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_22 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		this.stop();
	}
	this.frame_42 = function() {
		this.stop();
	}
	this.frame_52 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(10).call(this.frame_22).wait(10).call(this.frame_32).wait(10).call(this.frame_42).wait(10).call(this.frame_52).wait(1));

	// Needle
	this.instance = new lib.needle();
	this.instance.setTransform(-179.4,149.7,1,1.135,-125.8,0,0,27.5,9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({regX:27.6,regY:9.8,scaleY:1.12,rotation:-108.3,x:-179.5},9,cjs.Ease.get(-1)).wait(1).to({regX:27.5,rotation:-100.3,x:-179.4},0).to({regX:27.6,regY:9.7,rotation:-70.3,y:149.6},9,cjs.Ease.get(-1)).wait(1).to({x:-179.5},0).to({rotation:-36.3,x:-179.4,y:149.7},9,cjs.Ease.get(-1)).wait(1).to({regX:27.5,rotation:0.2,x:-179.5,y:149.6},9,cjs.Ease.get(-1)).wait(1).to({rotation:0.2},0).to({rotation:35.3},9,cjs.Ease.get(-1)).wait(1));

	// Odo Swoosh
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#FF0000"],[0,1],7.2,21.9,-7.9,-17.9).s().p("AgoAAQgcgbgVgeIBBgfQAWBXBCBBIAaAYQhIgdg6g7g");
	this.shape.setTransform(-203,179);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#000000","#FF0000"],[0,1],9.8,28.2,-5.3,-11.6).s().p("AgOA9QgsgsgWgjQgYgpgMg5IBugiQgCAbAAAJQgBCMBjBlIAaAYQhIgeg6g8g");
	this.shape_1.setTransform(-205.6,172.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#000000","#FF0000"],[0,1],9.5,35.5,-4.8,-18).s().p("AgGCqQh2h2AAilQAAhPAahDICaA/Qg4BUAABrQAACMBiBkIAbAZQhJgeg6g8g");
	this.shape_2.setTransform(-205.5,162.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#FF0000"],[0,1],5.2,44.8,-1.3,-22.8).s().p("AgREGQh2h2AAilQAAinB2h3QAXgYAbgUIBnCaQgaASgXAXQhjBlAACMQAACOBjBkIAaAZQhIgeg6g8g");
	this.shape_3.setTransform(-205.3,154.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#000000","#FF0000"],[0,1],0,49.3,0,-32).s().p("AhNErQh2h2AAinQAAilB2h3QBxhyCggEIAACwQhgAThJBKQhjBlAACMQAACOBjBkIAaAZQhGgeg8g8g");
	this.shape_4.setTransform(-199.3,149.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#000000","#FF0000"],[0,1],-20.4,44.4,4.6,-30.2).s().p("AjBFCQh2h2AAinQAAilB2h2QB3h2ClAAQB8AABhBBIhuCjQg7gbhFAAQh+AAhbBbQhaBZAACAQAACABaBbIAAABQgagTgYgYg");
	this.shape_5.setTransform(-187.8,148.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgBAAIAAgBIADADIgDgCg");
	this.shape_6.setTransform(-202,185.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},9).to({state:[{t:this.shape_2}]},10).to({state:[{t:this.shape_3}]},10).to({state:[{t:this.shape_4}]},10).to({state:[{t:this.shape_6},{t:this.shape_5}]},10).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B1FCFF").s().p("AqFMGIBUhWIASASIhTBXgAIhLBQAhggAaggIBkBKQghAqgqAjgAoQKiQgMgLAAgUQAAgKACgLQADgNAFgLQAFgLAIgLQAJgJANgGQANgGARAAQARAAAKAGQAKAHADAKQAFAKAAANIgCANQgBAIgCAJQgDAKgFAKQgFAJgJAIQgIAJgLAEQgNAEgPABQgWAAgMgMgAnkJJQgFAFgEAHIgGAQQgCAJgBAHIgCANQAAAHACAEQABAEADACQAFABAEAAQAIAAAFgFQAFgEAEgIIAGgRIAEgQIABgNQgBgHgBgDQgCgEgEgCIgIgBQgGAAgGAFgAJ5JdIARgaIBpBBIgYAkgAKbIpIAJgSIBpA/QgFAKgGAJgAKqIJIAJgRIBpA+IgJASgAshIvIBpg7IAHAMIhqA8gAKSErQAGgRAIgOQAIgNAIgJIANgRIgCAAIgDAAIgpAAIAKgcIBPAAIgIAaIgGAKQgHAGgGALQgIAJgGANQgIAMgGAOQgGANgDANIgkAIQAGgVAIgQgAMIEtIAGgaIB2AaIgGAagArZFHIAGghIAYAAIALgyIgOAHQgHAEgIADIgHgXIA7gmIAbAAIgVBhIAXAAIgIAhgAuCEtIB2gaIAFAaIh2AagAMUAsIB5gLIABAPIh4AKgAuMAwIABgPIB4ALIgBAOgAJfg6QgLgKgBgQQABgQAHgRQAHgPAMgOQANgOASgKQASgLAXgEIACAXQgUAFgMAIQgNAIgHANIAGgDIAMgBQAPABAIAHQAIAIAAAOQAAAIgDAJQgEAJgGAJQgIAHgKAFQgLAFgPABQgTgBgKgIgAKEhqQgEABgGADIAAACIgDAIIAAAIQgBAEADAEQACACAGAAQAFAAAEgBQAEgDAEgFQACgGAAgIQABgEgDgDQgDgDgFAAIgGABgArShJIAGghIAQgGIANgGQAWgLAKgHQAKgIgBgHQAAgEgEgCQgCgDgFAAQgHAAgHAEQgGAEgKAGIgUgWQAPgKAPgHQAQgFARgBQAPABAJAEQAJADAEAIQAFAHAAAIQAAAOgHAJQgGAKgMAJQgNAHgSAIIAEgBIAJAAIAHAAIAcAAIgPAfgALei5IBwgtIAKAXIhwAtgAtWjPIAJgXIBwAtIgKAXgAJkl8IBdhLIAIAJIhdBMgArIm+IAIgJIBeBLIgIAKgAFcl/IgHAAIgBgZIAJABIAKABQAHAAAIgDQAHgDAGgFQAFgGAAgJQAAgGgEgDQgEgCgIAAIgNAAQgGABgGACIAUhJIBFAAIgMAcIghAAIgGARIAEAAIAFAAQAKAAAGAEQAGADAEAHQADAGAAAHQAAALgEAKQgGALgJAIQgIAJgOAEQgNAFgSABIgHgBgAnAmKIgIgBIAAgXIAFABIAFAAQAXgBALgGQALgHAAgLQABgEgDgCQgCgCgHgBIgIAAIgKABIAGgbIAGABIAGAAIAKgBIAJgEQACgEAAgGQAAgDgCgDQgDgBgGAAQgHAAgFABQgHADgGAGIgJgXIALgGIAPgFQAIgDAKABQASgBAKAIQAJAGAAANQAAAGgCAHQgCAGgFAHQgGAFgIAEQAHABAEAHQADAFAAAHQAAAJgEAJQgEAJgLAHQgJAIgNADQgPAEgTAAIgJAAgAgPoVIABgCIAAgDIgCACIgEAAIgwAAIAFgVIAthMIAeAAIgdA1IgFAJIgHAHIACAAIADAAIAQAAIAAgCIAAgBIACgJIAFgNIADgRIAdgFIgGAeIgDALIgCAGIALAAIgFAcIgHAAIgCAAIgCgCIAAADIgBAFIgFAZIgfADgAGxoeIBDhjIAWANIhEBlgAoJp0IAWgNIBEBjIgXAPgADgp8IAkhzIAMAEIgjBzgAkOrrIAMgEIAkBzIgOAEgAgMqfIAAh5IAXAAIAAB5g");
	this.shape_7.setTransform(-179.3,143.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270.3,64.1,182,158.7);


// stage content:
(lib.getUpToSpeed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Wheel
	this.steeringwheel = new lib.wheel();
	this.steeringwheel.setTransform(966.3,1472.3,1,1,0,0,0,294,293.9);

	this.timeline.addTween(cjs.Tween.get(this.steeringwheel).wait(61).to({regX:293.9,rotation:-3.9,y:1472.4},67).wait(18).to({regX:294,rotation:0,y:1472.3},67).wait(17));

	// Odo
	this.odometer = new lib.odometer();
	this.odometer.setTransform(736.8,1148.2,1.522,1.522,0,0,0,-179.3,143.4);

	this.timeline.addTween(cjs.Tween.get(this.odometer).wait(230));

	// Score Display
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#67765E","#A1BA93","#A1BA93"],[0,1,1],0,120.4,0,-120.4).s().p("A5lTfMAAAgm9MAzMAAAMAAAAm9g");
	this.shape.setTransform(1100.1,1151.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(230));

	// Dash
	this.dashboard = new lib.dash();
	this.dashboard.setTransform(1012,668,1,1,0,0,0,1012,668);

	this.timeline.addTween(cjs.Tween.get(this.dashboard).wait(230));

	// Windshield
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.031)").s().p("Eg43AxHMBOvgvnIAAFHMhOvAvzgEg43AVoMBOvgs1IAAUDMhOvAvQgEg43AOEMBOvgvYIAAFBMhOvAvmgAdYjAIbgwnIABFAI7hQqgAdY7fIbgvqIABS+I7hQhgEAdYgl1IbgwkIAAE8I7gQog");
	this.shape_1.setTransform(504.1,749.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(230));

	// Stripe-shape (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgalAsMMA0KhYXIBBAAMgwVBYXg");
	var mask_graphics_52 = new cjs.Graphics().p("EgalAsMMA0KhYXIBBAAMgwVBYXg");
	var mask_graphics_53 = new cjs.Graphics().p("EgaXAsHQDMlbDQlcQD7mnD+moQELnBEQnFIIHtmQDSlfDPlfQB0jFBgipQFsp4FVp1IABgCIBBAAQhnDRhqDRIh3DiQi0Fai5FbQh8DqiADrQiZEZibEZQjGFojKFoQjsGtjrGqInhNoQjlGgjjGeIk6AAg");
	var mask_graphics_54 = new cjs.Graphics().p("EgaKAsCQDLlbDSlcQD8mlEBmnQEMm+EUnEQEImyEDmxQDVlfDOleQB0jHBeirQFjp3E2pzIABgCIBBAAQhcDQhhDRIhyDgQiqFZi0FZQh4Drh/DtQiYEYidEZQjGFmjNFpQjwGtjsGnQj1G1jwGyQjnGfjiGeIk/AAg");
	var mask_graphics_55 = new cjs.Graphics().p("EgZ8Ar+QDKlbDUlcQD8mjEFmmQELm7EanEQELmyEEmtQDXlgDNlcQB1jJBbitQFZp4EXpxIABgCIBBAAQhPDQhaDRIhsDfQihFXiuFYQhzDsh/DtQiWEXigEbQjGFkjQFpQj1GtjrGlQj4G0jyGwQjpGgjhGeIlDAAg");
	var mask_graphics_56 = new cjs.Graphics().p("EgZuAr5QDIlaDWldQD8mgEJmmQEMm3EenEQEQmxEDmsQDZleDNlcQB1jLBZivQFQp3D3pvIACgCIBAAAQhEDQhRDQIhmDeQiXFVioFXQhwDsh/DuQiUEXihEbQjIFjjTFpQj5GtjsGiQj7G0jyGvQjrGgjhGdIlGAAg");
	var mask_graphics_57 = new cjs.Graphics().p("EgZhAr0QDIlYDXleQD+meEMmmQELmzEjnEQETmxEFmoQDblfDMlaQB2jOBViwQFIp3DYpuIABgBIBBAAQg4DPhJDQIhhDcQiNFUikFWQhrDsh+DvQiUEXiiEcQjIFhjWFpQj9GujsGfQj/G0jyGsQjtGgjhGdIlLAAg");
	var mask_graphics_58 = new cjs.Graphics().p("EgZTArwQDGlZDaldQD9mdEQmlQENmwEnnDQEXmwEEmmQDelfDLlZQB3jQBSixQE+p4C5prIACgCIBAAAQgsDPhBDQIhbDaQiDFTieFVQhnDsh+DwQiTEXikEcQjIFfjaFqQkAGujtGcQkBGzjzGsQjwGgjhGdIlOAAg");
	var mask_graphics_59 = new cjs.Graphics().p("EgZGArrQDFlYDdleQD9maETmkQENmtEsnDQEbmvEFmjQDhlgDJlYQB4jSBPizQE1p3CappIABgCIBBAAQgiDPg3DPQgqBtgsBsQh5FRiZFUQhjDsh9DxQiREWinEeQjIFdjdFqQkEGvjuGZQkEGzj0GpQjyGhjfGcIlUAAg");
	var mask_graphics_60 = new cjs.Graphics().p("EgY4ArmQDDlXDgleQD9mYEXmkQENmpEwnDQEgmvEEmgQDklgDIlWQB5jUBMi1QEsp4B6pnIABgCIBBAAQgVDOgvDQQgnBsgqBrQhvFQiTFTQhfDth9DxQiQEWipEeQjIFbjgFrQkJGvjtGWQkIGzj1GoQj0GgjfGcIlXAAg");
	var mask_graphics_61 = new cjs.Graphics().p("EgYrAriQDDlXDhlfQD+mVEamjQENmnE2nCQEimuEFmdQDmlgDIlWQB5jWBJi2QEjp5BbpkIACgCIBBAAQgKDOgnDPQgkBrgnBrQhmFOiOFRQhaDuh8DzQiPEVirEeQjIFbjkFqQkMGvjuGTQkLGzj1GmQj3GhjeGcIlcAAg");
	var mask_graphics_62 = new cjs.Graphics().p("EgYeArdQDClWDjlfQD/mUEemiQENmjE6nCQEmmtEGmcQDolfDHlVQB6jYBGi4QEap4A8pjIABgBIBCAAQABDNgfDPQghBqgkBqQhcFNiIFQQhXDuh7DzQiOEWitEfQjIFYjnFrQkTGvjsGRQkOGyj2GlQj4GhjfGbIlgAAg");
	var mask_graphics_63 = new cjs.Graphics().p("EgYSArZQDAlWDllfQD/mSEimiQENmfE/nCQEqmtEGmYQDqlfDGlUQB8jbBCi5QERp4AdphIABgCIBCAAQAMDOgWDPQgeBpgiBpQhRFLiEFPQhSDuh6D0QiNEVivEgQjIFXjrFrQkXGwjsGNQkRGyj3GkQj6GgjeGcIlkAAg");
	var mask_graphics_64 = new cjs.Graphics().p("EgYKArUQC/lWDnlfQEAmQEkmhQEOmbFCnDQEwmrEFmWQDulfDFlTQB8jdBAi7QEIp4gEpfIACgBIBCAAQAYDNgODOQgbBpgfBoQhIFJh+FPQhODuh6D1QiMEViwEgQjJFVjuFsQkaGwjtGKQkVGyj3GiQj9GhjdGbIloAAg");
	var mask_graphics_65 = new cjs.Graphics().p("EgYEArQQC+lWDplfQEAmOEomhQEOmYFHnCQE0mrEFmTQDwlfDElSQB9jfA9i8QD/p4gjpdIACgCIBCAAQAkDNgGDPQgYBngcBoQg/FIh4FNQhKDuh5D2QiLEViyEhQjJFTjyFsQkeGwjtGIQkYGxj4GgQj/GijdGbIlsAAg");
	var mask_graphics_66 = new cjs.Graphics().p("EgYAArLQC8lVDslgQEBmLErmhQEPmUFLnCQE3mqEGmQQDzlgDClQQB+jiA6i9QD2p5hCpbIACgBIBBAAQAwDMADDPQgWBmgZBnQg0FHh0FMQhFDuh5D4QiKEUi0EhQjJFSj1FsQkiGwjuGFQkbGxj4GfQkBGhjdGbIlwAAg");
	var mask_graphics_67 = new cjs.Graphics().p("EgX9ArGQC8lUDtlgQEBmJEvmgQEPmRFQnCQE7mpEGmOQD2lfDClQQB+jjA3jAQDsp5hgpYIACgCIBBAAQA7DNALDOQgSBmgXBlQgrFFhuFMQhBDuh4D4QiJEUi2EjQjJFPj5FtQkmGwjuGDQkdGxj6GcQkDGijcGaIl1AAg");
	var mask_graphics_68 = new cjs.Graphics().p("EgX6ArCQC7lUDwlgQECmIEymfQEPmOFVnBQE+mpEHmLQD3lfDClPQB/jlA0jBQDjp5iApWIACgCIBBAAQBHDMATDOQgPBlgUBlQghFDhoFLQg+Duh3D5QiIEUi4EjQjJFOj8FtQkqGxjuF/QkiGwj6GcQkFGijbGaIl6AAg");
	var mask_graphics_69 = new cjs.Graphics().p("EgX2Aq9QC5lTDzlgQEBmGE2meQEPmLFanBQFDmoEGmJQD6leDBlPQB/jnAxjCQDbp5igpVIACgBIBCAAQBSDLAcDOQgNBkgRBlQgXFBhjFKQg5Dvh3D6QiHETi6EkQjJFMj/FtQkvGxjuF9QklGwj7GaQkHGhjbGaIl9AAg");
	var mask_graphics_70 = new cjs.Graphics().p("EgXyAq4QC3lSD1lgQECmEE6meQEPmHFfnBQFGmoEHmFQD8lfDAlNQCAjqAujEQDSp5i/pSIACgCIBBAAQBeDLAkDOQgJBkgPBjQgNFAheFJQg1Dvh2D6QiGEUi7EkQjLFKkCFuQkyGyjvF5QkoGwj7GYQkJGijbGZImBAAg");
	var mask_graphics_71 = new cjs.Graphics().p("EgXvAq0QC3lSD3lhQECmCE9mdQEQmDFjnBQFKmnEHmDQD/lfC/lMQCBjsArjEQDIp6jepQIACgCIBCAAQBpDLAtDOQgHBigMBjQgDE+hZFHQgwDwh2D8QiEESi+ElQjLFJkFFuQk2GyjwF2QkqGwj9GXQkLGijaGZImGAAg");
	var mask_graphics_72 = new cjs.Graphics().p("EgXrAqvQC1lRD5lhQEDmAFBmdQEPmAFpnAQFNmmEImBQEBleC+lMQCCjtAojHQC/p6j+pOIADgBIBBAAQB1DKA1DNQgDBigKBiQAHE9hUFGQgsDwh1D9QiDESjAEmQjLFHkIFuQk7GyjvF0QkuGvj9GVQkOGijaGZImJAAg");
	var mask_graphics_73 = new cjs.Graphics().p("EgXoAqrQC0lRD8lhQEDl+FEmcQEQl9FtnAQFRmmEIl9QEElfC9lKQCDjwAljIQC2p6kdpMIACgCIBCAAQCADKA+DNQgBBhgHBiQARE7hOFFQgoDwh1D+QiCESjCEmQjLFGkMFuQk+GyjwFyQkxGuj+GUQkPGijaGZImOAAg");
	var mask_graphics_74 = new cjs.Graphics().p("EgXnAqmQCzlRD+lhQEDl8FImbQEQl5FynBQFVmkEIl8QEGleC8lJQCEjyAijKQCtp6k8pKIACgBIBCAAQCMDKBGDMQACBhgEBgQAaE6hJFEQgjDxh0D+QiCESjDEmQjLFFkPFuQlDGzjwFuQk1Guj+GTQkSGijZGYImSAAg");
	var mask_graphics_75 = new cjs.Graphics().p("EgXpAqiQCylQEAliQEEl6FLmbQERl1F2nBQFZmlEIl3QEIlfC8lHQCEj0AfjMQCkp6lbpIIACgBIBCAAQCXDJBPDNQAFBfgCBfQAkE5hDFDQgfDwh0EAQiAESjFEnQjMFCkSFvQlHGzjwFsQk4Gtj/GRQkUGijYGZImXAAg");
	var mask_graphics_76 = new cjs.Graphics().p("EgXrAqdQCwlQECliQEEl3FPmaQERlzF7nAQFdmlEIl0QELleC6lHQCFj3AdjMQCap6l6pHIACgBIBCAAQCjDJBXDNQAIBeABBfQAuE3g+FCQgbDxhzEAQh/ERjIEpQjLFAkWFvQlLGzjxFpQk6GtkAGPQkWGjjYGYImaAAg");
	var mask_graphics_77 = new cjs.Graphics().p("EgXvAqYQCvlOEEljQEFl2FTmZQEQlvGAnAQFhmkEJlxQENlfC5lGQCGj4AZjPQCSp6mapEIADgBIBBAAQCvDIBfDNQALBeAEBeQA4E1g5FBQgXDxhyEBQh+ERjJEpQjME/kaFvQlOG0jxFlQk+GukBGNQkYGjjXGXImfAAg");
	var mask_graphics_78 = new cjs.Graphics().p("EgXzAqTQCulOEGliQEGl0FWmYQERlsGEnAQFlmkEJluQEPleC5lGQCHj6AWjQQCIp6m5pDIADgBIBCAAQC6DJBnDMQAOBcAGBeQBCE0gzFAQgTDxhyECQh9EQjLEqQjME+kcFvQlTGzjxFkQlCGskBGMQkaGkjXGWImjAAg");
	var mask_graphics_79 = new cjs.Graphics().p("EgX3AqPQCtlNEIlkQEGlxFamYQERlpGJm/QFomjEKlsQESleC3lEQCIj9ATjRQCAp7nZpAIADgBIBCAAQDFDIBwDMQARBcAJBdQBLEyguE+QgODyhxEEQh8EPjNErQjME7kgFwQlXG0jyFgQlEGtkCGKQkcGjjXGXImnAAg");
	var mask_graphics_80 = new cjs.Graphics().p("EgX8AqKQCslNELljQEFlwFemXQERllGOm/QFsmjEKlpQEUleC3lDQCIj/AQjTQB3p6n4o+IADgBIBCAAQDRDHB4DMQAUBbAMBcQBVExgpE9QgKDyhxEEQh6EQjPErQjNE6kjFwQlbG0jyFdQlHGtkDGJQkeGjjXGWImrAAg");
	var mask_graphics_81 = new cjs.Graphics().p("EgYBAqGQCrlNENljQEGluFhmXQERlhGTm/QFwmiEKlmQEWleC2lCQCJkBAOjVQBtp7oXo7IADgCIBCAAQDdDHCADMQAXBbAOBaQBfEwgjE8QgGDzhwEFQh6EPjQEsQjNE4knFwQleG1jzFaQlLGskDGHQkgGkjWGWImwAAg");
	var mask_graphics_82 = new cjs.Graphics().p("EgYGAqBQCplMEPljQEHlsFkmXQESleGYm+QFzmhEKlkQEZleC1lBQCKkEALjVQBkp7o3o6IADgBIBCAAQDpDHCJDLQAZBaARBaQBpEugeE7QgCDyhvEHQh5EPjSEsQjNE2kqFxQljG1jzFYQlOGrkEGGQkiGkjWGVImzAAg");
	var mask_graphics_83 = new cjs.Graphics().p("EgYLAp8QColLERljQEHlrFomVQESlbGcm+QF3mhELlgQEbleC0lBQCLkFAHjYQBcp7pWo3IADgBIBCAAQD0DGCRDLQAdBZATBZQBzEtgZE6QADDzhvEGQh4EPjUEuQjNE0kuFyQlmG0jzFVQlSGskEGEQklGkjVGUIm3AAg");
	var mask_graphics_84 = new cjs.Graphics().p("EgYSAp4QCnlLETlkQEIloFrmVQESlXGim+QF6mgELleQEeleCzk/QCMkIAEjZQBSp7p1o2IADgBIBCAAQEADGCaDLQAfBYAWBZQB9ErgTE5QAGDzhuEIQh2EOjXEuQjNEzkxFxQlqG1j0FSQlUGrkGGDQkmGkjVGVIm8AAg");
	var mask_graphics_85 = new cjs.Graphics().p("EgYYApzQCmlKEVlkQEIlmFvmUQETlUGmm+QF+mfELlcQEhleCyk+QCMkKACjaQBJp7qVo0IADgBIBCAAQELDGCjDLQAiBXAZBXQCGEqgOE4QALDzhuEJQh1EOjYEuQjOEyk0FxQluG2j2FPQlWGrkGGAQkpGljUGUInAAAg");
	var mask_graphics_86 = new cjs.Graphics().p("EgYfApvQCllKEXllQEJlkFymUQETlQGqm+QGDmeELlZQEjleCxk9QCNkMgBjcQBAp7q0oyIADgBIBCAAQEXDFCqDLQAmBXAcBXQCQEogJE3QAPDzhtEKQh0ENjaEwQjOEvk4FyQlyG2j3FMQlYGqkHGAQkrGkjUGVInEAAg");
	var mask_graphics_87 = new cjs.Graphics().p("EgYmApqQCjlJEallQEJliF1mTQEUlNGvm+QGGmdELlXQEmleCwk7QCOkPgEjdQA3p7rUowIADgBIBDAAQEiDFCzDLQAoBVAfBWQCaEngEE2QATDzhsELQhzENjcEwQjOEuk7FyQl3G2j2FJQlcGrkIF9QktGljTGUInIAAg");
	var mask_graphics_88 = new cjs.Graphics().p("EgYuAplQCilIEclmQEKlfF5mTQETlJG0m+QGKmdEMlUQEoleCvk6QCPkRgHjfQAtp7ryotIADgCIBCAAQEuDFC7DLQAsBUAhBWQCjEkADE2QAXD0hsELQhyENjeEwQjOEtk+FyQl7G3j3FGQlfGpkIF8QkvGmjTGTInNAAg");
	var mask_graphics_89 = new cjs.Graphics().p("EgY1AphQCglIEelmQEKleF9mSQETlFG5m+QGOmcEMlRQEqleCvk6QCPkSgKjgQAlp8sSosIADgBIBCAAQE6DEDDDLQAvBUAjBUQCuEjAHE0QAcD1hsEMQhwENjgExQjPEqlBFzQl/G2j3FEQliGqkJF6QkxGmjTGTInQAAg");
	var mask_graphics_90 = new cjs.Graphics().p("EgY9ApcQCglIEgllQEKlcGAmRQEUlDG+m9QGRmcEMlOQEtleCuk4QCQkVgNjiQAbp8sxoqIADAAIBDAAQFFDEDMDKQAxBTAmBUQC4EhANEzQAfD1hrENQhvEMjiEyQjPEplFFzQmCG3j4FBQllGpkKF5QkzGljSGTInVAAg");
	var mask_graphics_91 = new cjs.Graphics().p("EgZFApYQCflIEilmQELlZGDmRQEUk/HDm9QGVmbEMlLQEwleCsk4QCRkXgQjjQATp8tRooIADgBIBDAAQFRDEDUDKQA0BSApBTQDBEhASExQAkD1hqEOQhvEMjjEzQjPEnlIFzQmHG3j4E+QlpGpkKF3Qk1GmjSGTInZAAg");
	var mask_graphics_92 = new cjs.Graphics().p("EgZMApTQCdlHEllmQEKlYGImPQEUk8HHm9QGZmbENlIQExleCsk3QCSkZgTjlQAJp8tvolIADgBIBCAAQFdDDDcDKQA3BRAsBSQDLEfAYExQAoD1hqEPQhtELjmE0QjPEllMF0QmKG4j5E6QlrGpkMF2Qk3GljRGTIndAAg");
	var mask_graphics_93 = new cjs.Graphics().p("EgZUApOQCclGEnlnQELlVGLmPQEUk4HMm9QGdmZENlHQE0leCrk1QCSkbgWjnQABp8uQojIAEgBIBCAAQFoDCDlDKQA6BRAvBRQDUEdAdEwQAtD2hqEQQhsELjnE0QjQEjlPF1QmOG3j5E4QlvGokMF1Qk5GljRGSInhAAg");
	var mask_graphics_94 = new cjs.Graphics().p("EgZcApKQCblGEplnQELlTGPmPQEVk1HQm8QGhmZENlEQE2ldCqk1QCUkdgZjoQgJp9uvohIAEgBIBDAAQFzDDDtDJQA9BQAxBQQDfEcAiEvQAxD1hpERQhrELjqE1QjPEilSF0QmTG4j5E1QlyGokNFzQk7GmjRGSInlAAg");
	var mask_graphics_95 = new cjs.Graphics().p("EgZkApFQCZlFEslnQEMlRGSmPQEVkxHVm8QGkmYEOlBQE5leCpkzQCUkggcjqQgSp8vOofIAEgBIBDAAQF+DCD2DJQBABPA0BQQDoEaAoEuQA0D2hoERQhqELjrE1QjQEhlVF0QmXG4j5EzQl2GokNFxQk+GmjPGRInqAAg");
	var mask_graphics_96 = new cjs.Graphics().p("EgZsApBQCYlFEtlnQENlPGVmPQEVktHbm9QGomXENk+QE8ldCokzQCVkigfjrQgbp9vtodIADgBIBDAAQGLDCD+DJQBDBPA2BPQDyEYAtEsQA5D3hoESQhoELjuE2QjQEelZF2QmaG3j6EwQl4GnkOFwQlAGmjQGSIntAAg");
	var mask_graphics_97 = new cjs.Graphics().p("EgZ0Ao8QCXlEEvlnQENlOGZmNQEWkqHfm8QGrmXEOk8QE+ldCnkxQCWklgijsQgkp9wMocIADAAIBDAAQGWDBEHDJQBGBOA4BOQD9EXAyEsQA9D2hnEUQhoEJjvE4QjQEcldF2QmeG4j6EsQl8GokOFuQlCGmjPGRInyAAg");
	var mask_graphics_98 = new cjs.Graphics().p("EgZ9Ao3QCWlDEyloQENlLGdmNQEVknHkm8QGwmWEOk5QFAldCmkwQCXkmgljvQgtp9wsoZIAEAAIBDAAQGhDBEPDJQBJBMA7BNQEGEWA4EqQBBD3hmEVQhnEJjxE4QjQEblgF1QmiG5j7EqQl/GnkPFsQlEGnjPGQIn2AAg");
	var mask_graphics_99 = new cjs.Graphics().p("EgaFAozQCVlDE0loQEOlJGgmMQEWkkHom8QGzmVEPk2QFCleCmkvQCXkogojwQg2p9xLoXIAEgBIBDAAQGtDBEXDJQBMBMA+BMQEQEUA9EpQBFD3hmEWQhlEJjzE4QjREZljF3QmmG5j7EnQmCGmkQFrQlGGnjOGQIn7AAg");
	var mask_graphics_100 = new cjs.Graphics().p("EgaNAouQCTlDE2lnQEPlIGjmLQEWkgHtm8QG3mVEPkzQFFldClkuQCYkrgrjxQg/p+xqoUIADgBIBDAAQG5DAEgDIQBOBLBBBNQEaESBCEoQBKD3hmEXQhkEJj1E4QjREYlmF3QmrG5j7EkQmFGmkRFpQlIGnjOGQIn+AAg");
	var mask_graphics_101 = new cjs.Graphics().p("EgaVAoqQCSlCE4lpQEPlFGnmLQEWkdHym7QG7mUEPkxQFIldCjktQCZktgujzQhIp9yKoTIAEAAIBDAAQHFDAEoDIQBRBKBEBLQEjERBIEnQBOD4hlEXQhjEIj3E6QjREWlqF2QmuG6j8EiQmIGlkSFoQlKGnjNGQIoDAAg");
	var mask_graphics_102 = new cjs.Graphics().p("EgaeAolQCSlCE6loQEPlDGrmLQEWkZH3m7QG+mTEQkuQFKleCiksQCakvgxj0QhRp9ypoRIAEgBIBDAAQHQDAEwDIQBVBJBGBKQEtEQBNEmQBSD4hkEYQhiEIj5E6QjSEUlsF4QmzG5j8EfQmLGlkSFmQlNGojNGPIoHAAg");
	var mask_graphics_103 = new cjs.Graphics().p("EgamAogQCPlBE9lpQEPlBGvmJQEWkWH8m7QHCmTEQkrQFMldCiksQCakwgzj2Qhbp+zIoPIAEAAIBDAAQHbC/E5DIQBYBJBIBJQE3EOBTElQBWD4hjEZQhiEIj6E7QjSESlwF4Qm3G6j8EbQmPGmkSFkQlPGnjMGPIoLAAg");
	var mask_graphics_104 = new cjs.Graphics().p("EgavAobQCPlAE/lpQEPk/GymJQEXkTIAm6QHGmSEQkpQFPldChkqQCbk0g3j3Qhjp9zooNIAEgBIBDAAQHnC/FCDIQBaBIBLBIQFBENBYEkQBbD4hjEaQhhEIj8E7QjSERlzF3Qm7G7j9EZQmSGkkTFkQlRGnjMGOIoPAAg");
	var mask_graphics_105 = new cjs.Graphics().p("Ega3AoXQCOk/FBlqQEQk9G1mIQEXkQIFm6QHKmREQkmQFRleChkpQCck1g6j5Qhtp90HoMIAEAAIBDAAQHzC/FKDHQBdBIBOBHQFLELBdEiQBeD6hiEaQhfEIj+E8QjTEOl2F5Qm/G7j9EVQmVGlkUFhQlTGojLGOIoUAAg");
	var mask_graphics_106 = new cjs.Graphics().p("Ega/AoSQCMk/FDlqQERk7G5mHQEXkMIKm6QHNmRERkjQFTldCgkpQCck3g9j6Qh1p+0moJIAEAAIBDAAQH+C+FSDHQBgBGBRBHQFVEKBiEhQBjD5hiEcQheEHkAE9QjTENl6F5QnCG6j+ETQmYGlkVFgQlVGnjLGOIoXAAg");
	var mask_graphics_107 = new cjs.Graphics().p("EgbIAoOQCLk/FGlqQERk5G8mHQEYkIIOm6QHSmQEQkhQFWldCfknQCdk6hAj7Qh/p+1FoHIAEgBIBDAAQIKC+FbDIQBjBFBTBGQFeEIBoEgQBnD6hhEcQhdEHkCE+QjTELl9F5QnHG7j9EQQmcGkkVFeQlXGojLGOIocAAg");
	var mask_graphics_108 = new cjs.Graphics().p("EgbRAoJQCKk+FIlrQERk2HAmHQEYkFITm6QHVmPERkeQFZldCdkmQCek8hCj9QiIp+1loFIAEAAIBDAAQIWC9FiDHQBnBFBWBFQFoEHBtEfQBrD6hgEdQhcEHkEE+QjTEJmBF6QnKG7j/ENQmeGkkWFcQlaGpjKGNIogAAg");
	var mask_graphics_109 = new cjs.Graphics().p("EgbZAoFQCJk+FJlrQESk1HDmGQEZkBIYm6QHZmOEQkbQFcldCckmQCfk9hGj/QiRp/2EoCIAFgBIBDAAQIhC+FrDHQBpBDBZBFQFyEFByEeQBwD6hgEeQhbEGkGE/QjTEImEF6QnPG7j+ELQmiGjkXFbQlbGojKGOIokAAg");
	var mask_graphics_110 = new cjs.Graphics().p("EgbiAoAQCHk9FMlrQETkzHGmFQEZj+Idm6QHcmNERkaQFelcCckkQCglBhJkAQiap+2koBIAFAAIBDAAQIsC9F0DHQBsBCBbBEQF8EEB4EdQB0D6hgEfQhZEGkIFAQjUEGmHF5QnTG9j+EHQmlGjkYFaQldGojKGNIooAAg");
	var mask_graphics_111 = new cjs.Graphics().p("EgbqAn8QCGk+FOlrQETkwHKmFQEZj7Ihm5QHgmNESkWQFglcCbkkQCglChLkCQikp+3An/IAEAAIBCAAQI3C8F8DHQBvBCBeBDQGGECB9EcQB4D6hfEhQhYEFkKFAQjUEFmKF5QnXG8j/EGQmoGjkZFXQlfGpjJGNIosAAg");
	var mask_graphics_112 = new cjs.Graphics().p("EgbzAn3QCFk9FQlrQEUkvHNmEQEZj3Inm5QHkmMERkUQFjlcCakjQChlEhPkDQisp/3gn9IAFAAIBBAAQJEC8GEDHQByBBBgBCQGQEBCCEbQB9D6hfEhQhXEGkMFAQjUEDmOF7QnaG8kAECQmrGikZFXQliGojIGNIoxAAg");
	var mask_graphics_113 = new cjs.Graphics().p("Egb8AnyQCEk8FSlrQEUktHRmDQEZj0Irm5QHomMESkQQFlldCZkhQCilHhRkFQi2p+3/n7IAFAAIBDAAQJNC8GNDGQB1BABjBCQGZD/CIEaQCBD7heEiQhWEEkOFCQjUEBmSF7QneG8kAD/QmuGjkaFUQlkGpjIGMIo1AAg");
	var mask_graphics_114 = new cjs.Graphics().p("EgcEAntQCCk7FVlrQEUkrHVmDQEZjxIwm4QHsmLESkOQFnldCYkgQCjlJhUkGQi/p/4en5IAEAAIBEAAQJYC8GVDGQB4A/BmBBQGjD+CNEZQCFD6hdEkQhVEEkQFCQjUEAmVF6QnjG9kAD9QmxGikbFTQlmGpjHGLIo5AAg");
	var mask_graphics_115 = new cjs.Graphics().p("EgcNAnpQCCk7FXlrQEUkqHYmBQEajtI0m5QHwmKESkLQFqleCXkfQCklKhYkIQjHp/4+n3IAFAAIBDAAQJkC8GeDFQB7A/BoA/QGtD8CSEYQCJD8hcEjQhUEFkSFDQjUD+mYF7QnnG9kAD6Qm1GhkbFSQloGojHGMIo+AAg");
	var mask_graphics_116 = new cjs.Graphics().p("EgcVAnkQCAk6FZlsQEUknHcmCQEajpI5m4QH0mKESkJQFtlcCWkeQCklNhakKQjRp/5dn0IAFAAIBDAAQJwC7GmDFQB+A+BrA/QG3D6CXEXQCND8hcElQhTEEkTFDQjVD8mbF8QnrG9kBD3Qm4GhkbFQQlrGpjGGLIpBAAg");
	var mask_graphics_117 = new cjs.Graphics().p("EgceAngQB/k6FblsQEVklHfmBQEajmI+m4QH3mJETkGQFvldCVkdQCmlPhekLQjap/58nzIAFAAIBDAAQJ8C7GuDFQCAA9BuA/QHBD5CdEVQCRD8hbEmQhSEDkVFFQjVD6mfF8QnvG9kBD0Qm7GhkdFOQlsGqjGGLIpFAAg");
	var mask_graphics_118 = new cjs.Graphics().p("EgcnAnbQB+k5FdltQEWkjHjmAQEajiJDm4QH7mJETkDQFxldCUkcQCmlRhgkMQjjqA6cnwIAFAAIBEAAQKHC6G2DFQCEA9BwA9QHLD4CiEUQCWD8hbEnQhREDkXFFQjVD4miF9QnzG9kCDyQm+GgkdFNQlvGpjFGLIpKAAg");
	var mask_graphics_119 = new cjs.Graphics().p("EgcwAnWQB9k4FfltQEWkhHnmAQEajfJIm3QH+mIEUkBQFzlcCUkbQCrlIhokZQjsqA67nuIBJAAQNaDxHxEFQHUD2CoEUQCaD9hbEnQhPEDkZFFQjWD3mlF9Qn3G+kCDuQnBGhkeFKQlxGrjFGJg");
	var mask_graphics_136 = new cjs.Graphics().p("EgdaAnYQB9k4FfltQEWkhHnmAQEajgJIm4QH+mIEUkAQFzldCUkbQCrlJhokZQjsqB67nuIBBAAQbqHpFJJfQCSEOh3E5QhoEQk/FSQjuD5nNGDQoXG6kGDkQnIGMkNE0QlVGHiIFdg");
	var mask_graphics_137 = new cjs.Graphics().p("EgdPAncQB9k5FdlrQEVkiHimAQEajiJCm3QH6mIETkCQFwlcCVkcQCqlHhkkYQjhqD6bnzIBBgBICLAlIBLAWQYIHYEpI8QCPENh4E4QhoEQk9FQQjtD7nIGCQoSG5kGDnQnEGMkME1QlTGGiIFcIjYADIlzAAg");
	var mask_graphics_138 = new cjs.Graphics().p("EgdFAnfQB+k4FalrQEUkiHfmAQEZjjI8m4QH2mHESkEQFulbCUkcQCqlFhgkYQjXqG55n3IBAgBICKAjIBKAVQXqHdEeJAQCLEMh4E2QhpEQk6FQQjsD8nFGCQoNG3kFDqQnBGLkKE2QlRGGiJFcIjWAEIlyAAg");
	var mask_graphics_139 = new cjs.Graphics().p("Egc6AnjQB+k4FYlpQETkkHamAQEYjmI4m1QHxmHERkHQFrlaCVkcQCqlEhekXQjMqH5Yn9IA/gDICJAhIBIAVQXPHjESJEQCGELh3E1QhqERk3FOQjsD9nAGBQoJG4kEDrQm9GLkJE3QlPGEiJFcIjUAHIlxAAg");
	var mask_graphics_140 = new cjs.Graphics().p("EgcwAnnQB/k3FVlpQESklHXl/QEXjpIym1QHtmHEQkHQFolaCVkcQCqlChakXQjBqK44oBIA/gDICIAfIBIAUQWwHoEHJIQCCEKh3E0QhrEQk1FNQjrD/m8GBQoEG2kCDuQm6GLkJE4QlMGDiKFcIjSAJIlwAAg");
	var mask_graphics_141 = new cjs.Graphics().p("EgcmAnrQCBk4FSlnQERkmHSl/QEWjrItm0QHpmGEPkKQFllZCWkcQCplBhWkVQi3qO4XoFIA/gEICEAcIBKAVQWSHtD7JMQB/EJh4EzQhrEPkyFNQjqEBm4F/Qn/G2kCDwQm2GLkIE5QlJGBiLFcIjQAMIlwAAg");
	var mask_graphics_142 = new cjs.Graphics().p("EgcbAnvQCBk3FPlnQERknHOl/QEVjtIomzQHkmHEPkKQFhlZCXkcQColAhTkUQisqQ31oLIA9gEICEAbIBJAUQV0HyDwJQQB7EJh4ExQhsEPkvFMQjqEBm0F/Qn6G1kBDzQmyGKkHE6QlHGBiMFcIjOAOIluAAg");
	var mask_graphics_143 = new cjs.Graphics().p("EgcRAnyQCCk2FNlmQEPkoHKl+QEVjwIimyQHgmGEOkNQFflXCWkeQCok9hPkVQihqR3VoPIA9gGICCAZIBKATQVVH4DlJTQB2EJh3EvQhtEQktFKQjoEEmwF+Qn2G0kAD1QmuGKkGE6QlFGBiMFbIjMAQIluAAg");
	var mask_graphics_144 = new cjs.Graphics().p("EgcHAn2QCDk2FKllQEOkpHGl+QEUjyIdmyQHbmGENkOQFclXCXkcQCnk9hLkTQiXqV2zoUIA8gFICBAVIBKAUQU2H9DaJXQBzEIh4EuQhtEQkrFJQjnEEmsF+QnxGzkAD4QmqGJkFE8QlCGAiNFaIjKATIltAAg");
	var mask_graphics_145 = new cjs.Graphics().p("Egb8An6QCDk2FIlkQENkqHCl9QETj1IXmxQHXmFEMkQQFalWCXkdQCnk7hIkTQiMqX2ToZIA6gGICCAUIBJATQUYICDPJbQBuEHh3EtQhuEQkoFIQjnEGmoF8QnrGzkAD6QmmGJkEE9QlAF/iNFaIjJAVIlrAAg");
	var mask_graphics_146 = new cjs.Graphics().p("EgbyAn+QCEk3FFliQEMkrG+l9QESj3ISmwQHTmFEMkRQFWlWCYkeQCmk5hFkRQiBqa1yoeIA5gHICBASIBJATQT7IHDDJfQBqEGh3EsQhvEPklFIQjnEGmjF9QnnGyj+D8QmjGJkEE+Qk9F+iOFaIjGAXIlrAAg");
	var mask_graphics_147 = new cjs.Graphics().p("EgboAoCQCFk2FDliQELksG5l9QESj5INmvQHOmFELkTQFTlVCYkeQCmk4hBkQQh3qd1ToiIA7gIICAAQIBJASQTcINC3JjQBnEGh4EqQhvEPkjFGQjlEJmgF7QniGxj9D/QmgGJkCE/Qk7F8iOFaIjFAaIlqAAg");
	var mask_graphics_148 = new cjs.Graphics().p("EgbdAoFQCFk1FAlhQEKktG2l8QERj8IHmvQHKmEEKkVQFQlUCZkdQClk3g9kQQhsqf0zonIA7gIIB+ANIBJASQS+ISCsJnQBjEFh4EpQhwEPkgFFQjlEKmbF7QndGwj9EBQmcGIkBFAQk5F8iPFZIjCAcIlpAAg");
	var mask_graphics_149 = new cjs.Graphics().p("EgbTAoJQCGk1E9lgQEKkuGxl8QEQj+ICmuQHGmEEIkWQFOlTCZkeQCkk1g5kQQhhqh0SosIA6gJIB9ALIBJASQSfIYChJqQBfEEh4EoQhwEPkeFEQjkELmXF6QnZGwj8EDQmXGIkBFBQk2F7iQFYIjAAfIloAAg");
	var mask_graphics_150 = new cjs.Graphics().p("EgbJAoNQCHk1E7leQEIkwGtl7QEPkBH9mtQHCmEEIkYQFKlSCakeQCkk0g3kOQhWqlzxowIA5gKIB9AJIBIARQSBIeCWJuQBbEEh4EmQhxEPkbFDQjjEMmUF6QnTGuj8EHQmUGHj/FCQk0F6iQFYIi/AhIlnAAg");
	var mask_graphics_151 = new cjs.Graphics().p("Ega/AoRQCIk1E4ldQEHkxGpl7QEOkDH4msQG9mEEHkaQFIlRCakfQCjkygykNQhMqnzQo1IA5gLIB7AHIBIARQRjIjCKJyQBXEDh4EkQhyEPkYFDQjiENmQF5QnPGuj6EIQmQGIj/FDQkxF4iRFZIi9AjIlmAAg");
	var mask_graphics_152 = new cjs.Graphics().p("Ega0AoVQCIk1E1lcQEHkyGll7QENkFHymsQG5mDEGkbQFFlRCakfQCjkxgvkNQhBqoyvo6IA4gMIB6AFIBJAQQREIpB/J2QBTEBh4EkQhyEPkWFCQjiEOmLF4QnKGuj6EKQmMGHj+FEQkvF4iSFYIi6AmIllAAg");
	var mask_graphics_153 = new cjs.Graphics().p("EgarAoYQCKk0EylbQEGkzGhl7QEMkHHtmrQG1mDEFkdQFClQCbkfQCikvgskMQg2qsyOo+IA3gMIB6ACIBIAQQQmIuBzJ6QBPEBh4EiQhzEPkTFAQjhEQmHF4QnFGsj5ENQmJGHj9FFQksF3iTFYIi4AnIllAAg");
	var mask_graphics_154 = new cjs.Graphics().p("EgagAocQCKk0EwlaQEEk0Gdl6QEMkKHnmqQGxmCEEkfQE/lQCbkfQCikugokLQgsquxtpDIA3gNIB4AAIBIAQQQIIzBoJ+QBLEAh4EhQh0EPkRE/QjgERmDF3QnAGsj4EPQmFGHj8FGQkqF2iTFXIi3AqIljAAg");
	var mask_graphics_155 = new cjs.Graphics().p("EgaWAohQCLkzEtlaQEDk1GZl6QELkMHimpQGsmCEEkhQE8lPCbkfQChksgkkKQghqxxMpJIA2gMIB3gDIBIAPQPpI5BdKCQBHEAh4EeQh0EQkOE9QjgETl/F3Qm7Gqj4ETQmBGGj7FGQknF1iUFYIi1AsIliAAg");
	var mask_graphics_156 = new cjs.Graphics().p("EgaMAomQCLkzErlZQECk2GVl5QEKkQHdmnQGomCECkjQE5lNCckgQChkrghkJQgWqzwrpOIA1gOIB2gEIBIAQQPLI9BRKGQBDD/h4EdQh1EPkLE+QjfEUl7F1Qm2Gqj3EVQl+GFj5FJQkmFziUFXIizAvIlhAAg");
	var mask_graphics_157 = new cjs.Graphics().p("EgaCAorQCMk0EolXQECk3GQl5QEJkRHYmnQGjmCECkkQE2lNCdkgQCgkpgdkJQgMq2wLpRIA2gPIB0gHIBIAPQOsJDBGKKQA/D+h4EcQh1EPkJE8QjeEWl3F0QmyGqj2EWQl5GGj5FJQkjFziVFXIixAxIlgAAg");
	var mask_graphics_158 = new cjs.Graphics().p("EgZ4AowQCNkzEllXQEBk4GMl4QEJkUHRmmQGfmCECklQEzlNCdkgQCfkogZkIQgCq4vppWIA1gQIBzgJIBHAPQOPJJA7KNQA7D9h4EbQh2EPkHE7QjdEXlzF0QmtGoj1EaQl2GFj4FKQkgFyiWFWIivA0IlfAAg");
	var mask_graphics_159 = new cjs.Graphics().p("EgZuAo1QCNkzEjlVQEAk6GIl4QEIkXHMmlQGbmAEAkoQExlMCdkgQCfkngWkGQAJq7vIpbIA0gRIBygKIBHAOQNxJOAvKRQA3D8h4EaQh3EPkEE6QjcEYlvFzQmoGoj1EcQlyGEj3FMQkdFxiXFWIitA2IleAAg");
	var mask_graphics_160 = new cjs.Graphics().p("EgZlAo5QCPkyEglVQD/k6GFl3QEGkZHHmkQGWmCEAkoQEulLCdkhQCekkgSkHQAVq9uopgIA0gRIBwgOIBHAPQNTJTAjKVQAzD8h4EYQh3EOkCE5QjbEalrFzQmjGmj0EfQluGEj2FMQkbFwiYFWIirA4IleAAg");
	var mask_graphics_161 = new cjs.Graphics().p("EgZbAo/QCQkzEdlTQD+k8GAl3QEGkbHCmkQGSmAD+krQErlKCekhQCekjgPkGQAfrAuHpkIAzgRIBwgQIBHANQM0JZAYKZQAvD7h4EXQh4EOj/E5QjaEblnFxQmeGmjzEhQlrGEj1FNQkZFviYFWIipA7IldAAg");
	var mask_graphics_162 = new cjs.Graphics().p("EgZRApDQCQkyEblSQD9k9F8l3QEFkdG9mjQGNmAD+ktQEolJCekhQCekigMkFQAqrCtmppIAygTIBvgRIBHANQMVJeAOKdQAqD6h3EWQh5EOj8E3QjaEdljFxQmaGljyEjQlnGEj0FOQkWFuiZFVIinA9IlcAAg");
	var mask_graphics_163 = new cjs.Graphics().p("EgZHApIQCQkyEZlRQD7k9F5l3QEEkgG3miQGJmAD9kuQEllJCfkhQCdkggIkEQA0rFtFpuIAygTIBugUIBGANQL3JkACKgQAnD6h4EUQh5EOj6E2QjZEeleFwQmVGljyElQljGEjzFPQkUFtiZFVIilA/IlbAAg");
	var mask_graphics_164 = new cjs.Graphics().p("EgY9ApNQCRkxEWlRQD6k/F1l2QEDkiGymhQGFmAD8kwQEilHCfkiQCckfgEkDQA/rHskp0IAxgTIBtgWIBGAMQLZJqgJKkQAiD5h3ETQh6EOj4E1QjYEflaFvQmQGkjxEoQlgGDjyFQQkSFtiZFVIijBBIlaAAg");
	var mask_graphics_165 = new cjs.Graphics().p("EgY0ApSQCSkyETlPQD6lAFwl2QEDkkGsmgQGBmAD7kxQEflHCgkiQCbkdAAkCQBJrLsDp4IAxgTIBrgZIBHANQK6JugVKoQAfD4h4ERQh6EPj1E0QjYEglWFvQmLGjjwEqQlcGEjxFRQkPFribFUIihBEIlZAAg");
	var mask_graphics_166 = new cjs.Graphics().p("EgYqApXQCTkyEQlOQD5lAFsl2QECknGnmfQF8l/D7k0QEclGCgkiQCbkcADkCQBUrMrip8IAwgVIBqgbIBGAMQKdJ0ghKsQAbD3h4EQQh7EPjyEzQjXEhlSFuQmGGjjvEsQlYGDjxFSQkNFribFTIifBHIlYAAg");
	var mask_graphics_167 = new cjs.Graphics().p("EgYhApcQCUkxEOlNQD4lCFol2QEAkpGimeQF4l/D6k1QEZlGCgkiQCbkaAHkBQBerPrBqBIAwgWIBpgdIBGAMQJ+J5gsKwQAXD3h4EOQh8EPjvExQjWEjlOFuQmCGijuEuQlVGDjvFTQkKFqicFTIidBJIlYAAg");
	var mask_graphics_168 = new cjs.Graphics().p("EgYYAphQCUkxELlMQD3lDFkl1QEAksGcmdQF0l/D5k3QEWlFChkiQCakZAKkAQBqrSqhqFIAvgXIBogfIBGAMQJgJ+g3K0QATD2h4ENQh9EPjsEwQjWEllKFtQl9GgjtEyQlRGCjuFUQkIFpidFTIibBLIlWAAg");
	var mask_graphics_169 = new cjs.Graphics().p("EgYRAplQCVkwEJlLQD2lEFgl1QD/kuGXmcQFvl/D4k5QETlECikiQCZkYAOj+QB0rVp/qKIAugYIBnggIBGALQJBKDhCK4QAPD1h4EMQh+EOjqEwQjUEmlGFsQl4GgjtEzQlNGDjtFVQkGFoidFSIiZBNIlWAAg");
	var mask_graphics_170 = new cjs.Graphics().p("EgYJApqQCWkwEFlKQD1lFFcl0QD+kxGSmcQFrl9D3k6QEQlECikjQCZkVASj/QB+rXpeqPIAugYIBlgjIBGALQIjKJhOK8QALD0h4EKQh9EOjoEvQjUEnlBFsQl0GfjsE2QlJGBjtFWQkDFnieFTIiXBPIlUAAg");
	var mask_graphics_171 = new cjs.Graphics().p("EgYCApvQCWkwEDlIQD0lGFYl1QD9kzGNmbQFml9D3k8QENlDCikjQCZkUAVj+QCJrZo9qUIAtgYIBkgmIBGALQIFKOhZLAQAHDzh4EJQh/EOjlEuQjTEok9FrQlvGejsE5QlFGBjrFXQkBFmifFSIiVBSIlTAAg");
	var mask_graphics_172 = new cjs.Graphics().p("EgX7Ap0QCXkvEAlIQDzlIFUlzQD9k1GHmbQFil9D1k+QELlBCjkjQCXkTAZj+QCUrbodqZIAtgZIBjgoIBGAKQHmKUhkLEQADDzh4EGQh/EPjjEtQjSEpk5FqQlqGejrE7QlBGBjrFYQj/FlifFSIiTBUIlSAAg");
	var mask_graphics_173 = new cjs.Graphics().p("EgX1Ap5QCZkvD9lHQDylJFQlyQD8k5GBmZQFel9D1k/QEHlBCkkkQCXkRAcj8QCfren8qeIAsgaIBigqIBGAKQHIKahwLGQgBDzh4EFQiAEPjgEsQjRErk1FpQlmGdjqE+Qk9GAjqFZQj8FkigFSIiRBWIlSAAg");
	var mask_graphics_174 = new cjs.Graphics().p("EgXvAp+QCZkvD7lGQDylJFLlzQD7k7F8mYQFal9D0lBQEElACkkkQCXkQAfj7QCqrhnbqiIArgbIBhgsIBFAKQGqKeh7LMQgFDxh4EEQiAEPjeEqQjQEtkxFpQlhGcjpE/Qk6GAjpFaQj5FkihFRIiPBZIlRAAg");
	var mask_graphics_175 = new cjs.Graphics().p("EgXpAqDQCZkvD5lFQDwlKFHlzQD7k9F2mXQFWl8DzlDQEBlACkkkQCXkOAjj7QC0rjm6qnIArgbIBggvIBFAKQGLKkiGLPQgJDwh4EDQiBEPjbEpQjQEuktFoQlcGbjoFDQk2F/joFbQj3FjihFQIiNBcIlQAAg");
	var mask_graphics_176 = new cjs.Graphics().p("EgXkAqHQCakuD2lEQDvlMFDlxQD6lAFxmXQFRl8DylDQD/lAClkkQCVkNAnj6QC/rmmZqrIAqgcIBfgxIBFAJQFtKpiSLTQgNDwh4ECQiBEOjZEpQjPEvkpFnQlXGbjnFEQkzGAjnFcQj0FiiiFQIiLBdIlPAAg");
	var mask_graphics_177 = new cjs.Graphics().p("EgXfAqMQCbkuDzlCQDulNE/lyQD5lCFsmVQFNl8DxlGQD8k+ClklQCVkLAqj5QDKrpl5qwIAqgdIBegyIBFAIQFPKvieLXQgQDvh5EAQiCEOjWEoQjOEwklFnQlSGZjnFIQkuF/jmFdQjzFgiiFQIiJBgIlOAAg");
	var mask_graphics_178 = new cjs.Graphics().p("EgXbAqRQCbkuDxlCQDtlNE7lyQD4lEFnmVQFIl7DxlIQD5k9ClklQCVkKAtj4QDVrrlYq1IApgeIBdg0IBEAIQExK0ioLbQgVDuh4D/QiDEOjTEnQjOExkhFmQlNGZjmFKQkrF/jlFeQjwFfijFQIiHBiIlNAAg");
	var mask_graphics_179 = new cjs.Graphics().p("EgXYAqWQCckuDulAQDslPE3lxQD3lGFimVQFEl7DvlJQD2k9CmklQCUkIAyj4QDertk2q6IAogeIBcg3IBEAIQETK5i0LfQgZDth4D+QiEEOjQEmQjNEykdFmQlIGYjmFMQknF+jkFfQjtFfikFQIiFBkIlMAAg");
	var mask_graphics_180 = new cjs.Graphics().p("EgXWAqbQCektDrlAQDrlQEzlxQD2lIFcmUQFAl7DvlLQDzk7CmkmQCUkGA1j3QDprwkVq/IAogfIBag5IBEAHQD0LAi/LiQgdDth4D8QiEEOjOEkQjME1kZFlQlDGXjlFOQkjF+jjFgQjsFeikFPIiDBnIlMAAg");
	var mask_graphics_181 = new cjs.Graphics().p("EgXUAqgQCektDpk/QDqlREvlxQD1lKFXmTQE7l7DulMQDwk8CnklQCTkFA4j2QD1rzj1rDIAngfIBZg8IBFAHQDVLFjKLlQghDth4D6QiFEPjMEjQjLE2kUFkQk/GWjkFRQkfF+jjFhQjoFcilFPIiCBqIlKAAg");
	var mask_graphics_182 = new cjs.Graphics().p("EgXUAqlQCfktDmk+QDplSErlwQD1lNFRmSQE3l6DtlPQDtk6CnkmQCTkEA8j1QD/r1jUrIIAnggIBYg+IBEAHQC4LKjWLqQglDsh4D4QiGEPjJEiQjLE3kQFkQk6GVjjFUQkcF9jhFiQjmFcimFOIh/BsIlKAAg");
	var mask_graphics_183 = new cjs.Graphics().p("EgXUAqqQCfktDkk9QDolTEnlvQDzlQFOmRQExl6DslQQDrk6CnkmQCSkCBAj1QEJr3izrNIAnghIBWhAIBEAHQCaLPjiLuQgpDqh4D4QiGEOjGEiQjKE4kMFjQk2GVjiFVQkYF9jgFjQjkFbimFPIh+BuIlIAAg");
	var mask_graphics_184 = new cjs.Graphics().p("EgXWAqvQCgktDhk8QDnlUEjlvQDylSFJmQQEsl6DslSQDnk5CokmQCSkBBDjzQEUr7iSrRIAmgiIBVhCIBEAHQB7LUjsLyQgtDqh4D2QiHEOjEEhQjJE5kIFiQkxGVjhFXQkUF9jgFkQjhFainFOIh8BxIlHAAg");
	var mask_graphics_185 = new cjs.Graphics().p("EgXaAq0QChktDek6QDnlVEelvQDylVFDmPQEol6DrlTQDlk4CoknQCRj/BGjzQEfr9hxrWIAlgiIBVhFIBEAGQBcLaj4L2QgxDph4D1QiHEOjBEgQjJE7kEFhQkrGTjhFbQkRF8jeFlQjfFZioFOIh5BzIlHAAg");
	var mask_graphics_186 = new cjs.Graphics().p("EgXfAq4QChksDck5QDllXEbluQDxlYE+mNQEjl5DqlWQDik3CoknQCRj+BKjyQEqr/hRrbIAlgjIBThGIBEAFQA+LgkDL5Qg1Dph4DzQiIEOi/EfQjHE8kAFgQknGTjgFdQkNF8jdFmQjdFYioFNIh4B1IlFAAg");
	var mask_graphics_187 = new cjs.Graphics().p("EgXnAq+QCjktDZk4QDklXEXluQDwlaE4mOQEgl5DplWQDek3CqkmQCPj9BOjxQE0sDgvrfIAkgjIBThKIBDAGQAgLkkPL+Qg5Doh4DyQiJEOi8EdQjGE+j8FgQkiGSjfFfQkKF8jcFnQjaFXipFNIh2B4IlFAAg");
	var mask_graphics_188 = new cjs.Graphics().p("EgXxArCQCjksDWk3QDklYESluQDwlcEzmNQEbl4DolZQDck2CpknQCPj7BSjwQE/sFgPrkIAkgkIBRhLIBDAFQACLqkaMBQg9Dnh4DxQiJEOi6EcQjGE/j4FfQkdGRjeFiQkGF7jbFoQjYFXiqFMIhzB6IlEAAg");
	var mask_graphics_189 = new cjs.Graphics().p("EgX9ArHQCkkrDTk3QDjlZEOluQDvleEumMQEWl4DnlaQDZk1CqkoQCPj5BVjwQFKsHASrpIAjglIBQhNIBDAEQgcLwkmMFQhBDmh4DwQiKENi3EcQjFFAj0FfQkWGQjgFkQkBF7jbFpQjVFVirFNIhxB8IlDAAg");
	var mask_graphics_190 = new cjs.Graphics().p("EgYJArMQClksDQk1QDilbEKltQDulgEomLQETl4DnlcQDVk0CrkoQCOj4BYjvQFUsKA0rtIAigmIBPhPIBDAEQg6L1kyMJQhEDmh5DtQiKEOi0EbQjFFBjwFeQkRGPjfFnQj+F7jaFqQjSFUisFNIhvB+IlCAAg");
	var mask_graphics_191 = new cjs.Graphics().p("EgYVArRQClkrDPk0QDglcEHltQDsljEjmKQEPl4DlldQDTk0CrkoQCNj2BcjuQFfsNBVryIAigmIBNhSIBDAEQhZL6k8MNQhJDlh4DsQiMEOixEaQjEFDjsFdQkMGPjfFoQj5F7jZFrQjRFTisFMIhtCBIlBAAg");
	var mask_graphics_192 = new cjs.Graphics().p("EgYhArWQCmkrDMkzQDfldEClsQDtlmEdmJQEKl3DklgQDQkyCskoQCNj1BgjuQFpsOB1r3IAigoIBMhUIBDAEQh4MAlHMQQhNDkh4DsQiMENivEZQjDFEjnFcQkJGOjdFsQj2F6jYFsQjOFSitFMIhrCDIlAAAg");
	var mask_graphics_193 = new cjs.Graphics().p("EgYtAraQCnkqDJkyQDfleD9lsQDsloEYmJQEGl3DjlhQDOkyCrkoQCNjzBjjsQF0sSCXr7IAggpIBMhVIBCACQiWMGlTMUQhQDkh5DqQiMENitEXQjCFGjjFcQkDGNjdFuQjzF6jWFsQjMFSitFLIhqCFIk/AAg");
	var mask_graphics_194 = new cjs.Graphics().p("EgY5ArgQCokqDGkyQDelfD5lsQDrlpEUmIQEAl3DkljQDKkxCskoQCMjzBmjrQGAsUC2sAIAhgpIBKhZIBCAEQizMKlfMYQhUDjh5DoQiNEOirEWQjBFHjfFbQj+GNjcFwQjvF6jWFuQjJFQiuFLIhoCIIk+AAg");
	var mask_graphics_195 = new cjs.Graphics().p("EgZFArkQCokqDFkwQDclgD2lrQDpltEOmHQD/l2DglkQDHkxCtkpQCLjwBrjrQGJsWDYsGIAfgpIBKhaIBCACQjSMQlqMcQhYDih5DnQiOEOinEVQjBFIjbFbQj5GLjcFzQjrF5jUFvQjHFQivFKIhlCKIk+AAg");
	var mask_graphics_196 = new cjs.Graphics().p("EgZRArpQCqkpDAkwQDclhDxlrQDqlvEImGQD7l2DflmQDEkwCtkoQCLjvBujqQGUsaD5sKIAfgqIBIhcIBCACQjxMVl1MgQhcDih4DlQiPEOilEUQjAFJjXFaQj1GLjaF1QjnF5jVFwQjEFPivFKIhkCMIk8AAg");
	var mask_graphics_197 = new cjs.Graphics().p("EgZdAruQCqkpC+kuQDbliDtlrQDolyEEmFQD2l1DeloQDCkvCtkpQCKjuByjpQGfscEZsOIAfgrIBHhfIBCACQkPMbmAMjQhhDhh4DkQiQEOiiETQi/FLjTFZQjwGKjaF3QjjF5jTFxQjCFOiwFJIhiCPIk7AAg");
	var mask_graphics_198 = new cjs.Graphics().p("EgZpArzQCrkpC8kuQDZliDqlrQDnlzD+mFQDxl2DelpQC/kuCukqQCJjrB1jpQGqseE7sUIAdgrIBGhhIBCACQktMgmMMnQhkDgh5DjQiQEOifESQi/FLjPFZQjrGJjZF6QjfF4jTFzQi/FNiwFJIhgCRIk7AAg");
	var mask_graphics_199 = new cjs.Graphics().p("EgZ1Ar4QCskpC5ksQDZlkDllqQDml2D5mEQDtl1DdlsQC7ktCvkpQCJjrB5joQG0sgFbsZIAegsIBEhjIBCABQlMMmmXMsQhoDeh5DiQiQENidERQi+FOjJFXQjoGKjYF7QjcF5jRFyQi9FMixFKIheCTIk6AAg");
	var mask_graphics_200 = new cjs.Graphics().p("EgaBAr9QCskpC3krQDYllDhlqQDll5DzmCQDpl1DdltQC4ktCvkqQCIjpB9jmQG/skF8sdIAdgsIBDhmIBCABQlqMrmiMvQhtDfh4DgQiSENiaEQQi9FPjFFXQjjGIjXF+QjYF4jRF0Qi7FLixFJIhcCWIk5AAg");
	var mask_graphics_201 = new cjs.Graphics().p("EgaNAsCQCtkpC0kqQDXlmDdlpQDkl8DumBQDll1DbluQC2ksCvkqQCIjoCAjmQHKsmGdshIAcguIBChoIBCABQmIMwmuMzQhxDeh4DfQiSENiYEPQi8FQjAFXQjfGHjXGAQjUF4jPF1Qi5FKiyFIIhaCZIk4AAg");
	var mask_graphics_202 = new cjs.Graphics().p("EgaZAsGQCukoCxkpQDWlnDZlpQDkl9DomCQDhl0DclyQCxkqCwkqQCHjmCEjlQHUsoG+smIAcgvIBBhqIBBAAQmmM2m5M4Qh1Dch4DeQiTENiVEOIl4KnQjaGGjWGEQjRF2jOF2Qi2FJizFJIhYCaIk3AAg");
	var mask_graphics_203 = new cjs.Graphics().p("EgalAsMMA0KhYXIBBAAMgwVBYXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:1007.2,y:690.9}).wait(52).to({graphics:mask_graphics_52,x:1007.2,y:690.9}).wait(1).to({graphics:mask_graphics_53,x:1007.3,y:690.4}).wait(1).to({graphics:mask_graphics_54,x:1007.3,y:689.9}).wait(1).to({graphics:mask_graphics_55,x:1007.4,y:689.4}).wait(1).to({graphics:mask_graphics_56,x:1007.5,y:689}).wait(1).to({graphics:mask_graphics_57,x:1007.5,y:688.5}).wait(1).to({graphics:mask_graphics_58,x:1007.6,y:688}).wait(1).to({graphics:mask_graphics_59,x:1007.6,y:687.5}).wait(1).to({graphics:mask_graphics_60,x:1007.7,y:687}).wait(1).to({graphics:mask_graphics_61,x:1007.7,y:686.5}).wait(1).to({graphics:mask_graphics_62,x:1007.8,y:686}).wait(1).to({graphics:mask_graphics_63,x:1008.1,y:685.5}).wait(1).to({graphics:mask_graphics_64,x:1008.7,y:685.1}).wait(1).to({graphics:mask_graphics_65,x:1009.5,y:684.6}).wait(1).to({graphics:mask_graphics_66,x:1010.5,y:684.1}).wait(1).to({graphics:mask_graphics_67,x:1011.6,y:683.6}).wait(1).to({graphics:mask_graphics_68,x:1012.6,y:683.1}).wait(1).to({graphics:mask_graphics_69,x:1013.7,y:682.6}).wait(1).to({graphics:mask_graphics_70,x:1014.7,y:682.2}).wait(1).to({graphics:mask_graphics_71,x:1015.8,y:681.7}).wait(1).to({graphics:mask_graphics_72,x:1016.8,y:681.2}).wait(1).to({graphics:mask_graphics_73,x:1017.9,y:680.7}).wait(1).to({graphics:mask_graphics_74,x:1019.2,y:680.2}).wait(1).to({graphics:mask_graphics_75,x:1020.8,y:679.7}).wait(1).to({graphics:mask_graphics_76,x:1022.5,y:679.2}).wait(1).to({graphics:mask_graphics_77,x:1024.2,y:678.7}).wait(1).to({graphics:mask_graphics_78,x:1026,y:678.3}).wait(1).to({graphics:mask_graphics_79,x:1027.8,y:677.8}).wait(1).to({graphics:mask_graphics_80,x:1029.7,y:677.3}).wait(1).to({graphics:mask_graphics_81,x:1031.6,y:676.8}).wait(1).to({graphics:mask_graphics_82,x:1033.6,y:676.3}).wait(1).to({graphics:mask_graphics_83,x:1035.5,y:675.8}).wait(1).to({graphics:mask_graphics_84,x:1037.6,y:675.3}).wait(1).to({graphics:mask_graphics_85,x:1039.6,y:674.8}).wait(1).to({graphics:mask_graphics_86,x:1041.7,y:674.4}).wait(1).to({graphics:mask_graphics_87,x:1043.8,y:673.9}).wait(1).to({graphics:mask_graphics_88,x:1046,y:673.4}).wait(1).to({graphics:mask_graphics_89,x:1048.2,y:672.9}).wait(1).to({graphics:mask_graphics_90,x:1050.3,y:672.4}).wait(1).to({graphics:mask_graphics_91,x:1052.5,y:671.9}).wait(1).to({graphics:mask_graphics_92,x:1054.7,y:671.5}).wait(1).to({graphics:mask_graphics_93,x:1056.9,y:671}).wait(1).to({graphics:mask_graphics_94,x:1059.1,y:670.5}).wait(1).to({graphics:mask_graphics_95,x:1061.3,y:670}).wait(1).to({graphics:mask_graphics_96,x:1063.5,y:669.5}).wait(1).to({graphics:mask_graphics_97,x:1065.7,y:669}).wait(1).to({graphics:mask_graphics_98,x:1068,y:668.5}).wait(1).to({graphics:mask_graphics_99,x:1070.2,y:668}).wait(1).to({graphics:mask_graphics_100,x:1072.4,y:667.6}).wait(1).to({graphics:mask_graphics_101,x:1074.6,y:667.1}).wait(1).to({graphics:mask_graphics_102,x:1076.9,y:666.6}).wait(1).to({graphics:mask_graphics_103,x:1079.2,y:666.1}).wait(1).to({graphics:mask_graphics_104,x:1081.4,y:665.6}).wait(1).to({graphics:mask_graphics_105,x:1083.6,y:665.1}).wait(1).to({graphics:mask_graphics_106,x:1085.9,y:664.6}).wait(1).to({graphics:mask_graphics_107,x:1088.1,y:664.1}).wait(1).to({graphics:mask_graphics_108,x:1090.4,y:663.7}).wait(1).to({graphics:mask_graphics_109,x:1092.7,y:663.2}).wait(1).to({graphics:mask_graphics_110,x:1095,y:662.7}).wait(1).to({graphics:mask_graphics_111,x:1097.2,y:662.2}).wait(1).to({graphics:mask_graphics_112,x:1099.5,y:661.7}).wait(1).to({graphics:mask_graphics_113,x:1101.8,y:661.2}).wait(1).to({graphics:mask_graphics_114,x:1104,y:660.8}).wait(1).to({graphics:mask_graphics_115,x:1106.3,y:660.3}).wait(1).to({graphics:mask_graphics_116,x:1108.6,y:659.8}).wait(1).to({graphics:mask_graphics_117,x:1110.9,y:659.3}).wait(1).to({graphics:mask_graphics_118,x:1113.1,y:658.8}).wait(1).to({graphics:mask_graphics_119,x:1115.4,y:658.3}).wait(17).to({graphics:mask_graphics_136,x:1119.6,y:658.2}).wait(1).to({graphics:mask_graphics_137,x:1117.2,y:658.7}).wait(1).to({graphics:mask_graphics_138,x:1114.7,y:659.3}).wait(1).to({graphics:mask_graphics_139,x:1112.3,y:659.9}).wait(1).to({graphics:mask_graphics_140,x:1109.8,y:660.4}).wait(1).to({graphics:mask_graphics_141,x:1107.4,y:661}).wait(1).to({graphics:mask_graphics_142,x:1104.9,y:661.6}).wait(1).to({graphics:mask_graphics_143,x:1102.5,y:662.2}).wait(1).to({graphics:mask_graphics_144,x:1100.1,y:662.7}).wait(1).to({graphics:mask_graphics_145,x:1097.6,y:663.3}).wait(1).to({graphics:mask_graphics_146,x:1095.2,y:663.9}).wait(1).to({graphics:mask_graphics_147,x:1092.7,y:664.4}).wait(1).to({graphics:mask_graphics_148,x:1090.3,y:665}).wait(1).to({graphics:mask_graphics_149,x:1087.9,y:665.6}).wait(1).to({graphics:mask_graphics_150,x:1085.4,y:666.1}).wait(1).to({graphics:mask_graphics_151,x:1083,y:666.7}).wait(1).to({graphics:mask_graphics_152,x:1080.6,y:667.3}).wait(1).to({graphics:mask_graphics_153,x:1078.2,y:667.8}).wait(1).to({graphics:mask_graphics_154,x:1075.7,y:668.4}).wait(1).to({graphics:mask_graphics_155,x:1073.3,y:668.9}).wait(1).to({graphics:mask_graphics_156,x:1070.9,y:669.3}).wait(1).to({graphics:mask_graphics_157,x:1068.5,y:669.8}).wait(1).to({graphics:mask_graphics_158,x:1066.1,y:670.2}).wait(1).to({graphics:mask_graphics_159,x:1063.7,y:670.7}).wait(1).to({graphics:mask_graphics_160,x:1061.3,y:671.2}).wait(1).to({graphics:mask_graphics_161,x:1058.9,y:671.6}).wait(1).to({graphics:mask_graphics_162,x:1056.5,y:672.1}).wait(1).to({graphics:mask_graphics_163,x:1054.2,y:672.5}).wait(1).to({graphics:mask_graphics_164,x:1051.8,y:673}).wait(1).to({graphics:mask_graphics_165,x:1049.4,y:673.5}).wait(1).to({graphics:mask_graphics_166,x:1047,y:673.9}).wait(1).to({graphics:mask_graphics_167,x:1044.7,y:674.4}).wait(1).to({graphics:mask_graphics_168,x:1042.4,y:674.8}).wait(1).to({graphics:mask_graphics_169,x:1040.3,y:675.3}).wait(1).to({graphics:mask_graphics_170,x:1038.1,y:675.7}).wait(1).to({graphics:mask_graphics_171,x:1036,y:676.2}).wait(1).to({graphics:mask_graphics_172,x:1033.9,y:676.7}).wait(1).to({graphics:mask_graphics_173,x:1031.8,y:677.1}).wait(1).to({graphics:mask_graphics_174,x:1029.8,y:677.6}).wait(1).to({graphics:mask_graphics_175,x:1027.9,y:678}).wait(1).to({graphics:mask_graphics_176,x:1026,y:678.5}).wait(1).to({graphics:mask_graphics_177,x:1024.1,y:679}).wait(1).to({graphics:mask_graphics_178,x:1022.3,y:679.4}).wait(1).to({graphics:mask_graphics_179,x:1020.6,y:679.9}).wait(1).to({graphics:mask_graphics_180,x:1018.9,y:680.3}).wait(1).to({graphics:mask_graphics_181,x:1017.3,y:680.8}).wait(1).to({graphics:mask_graphics_182,x:1015.9,y:681.3}).wait(1).to({graphics:mask_graphics_183,x:1014.5,y:681.7}).wait(1).to({graphics:mask_graphics_184,x:1013.3,y:682.2}).wait(1).to({graphics:mask_graphics_185,x:1012.3,y:682.6}).wait(1).to({graphics:mask_graphics_186,x:1011.4,y:683.1}).wait(1).to({graphics:mask_graphics_187,x:1010.7,y:683.6}).wait(1).to({graphics:mask_graphics_188,x:1010.4,y:684}).wait(1).to({graphics:mask_graphics_189,x:1010.2,y:684.5}).wait(1).to({graphics:mask_graphics_190,x:1010,y:685}).wait(1).to({graphics:mask_graphics_191,x:1009.8,y:685.4}).wait(1).to({graphics:mask_graphics_192,x:1009.6,y:685.8}).wait(1).to({graphics:mask_graphics_193,x:1009.3,y:686.3}).wait(1).to({graphics:mask_graphics_194,x:1009.1,y:686.8}).wait(1).to({graphics:mask_graphics_195,x:1008.9,y:687.2}).wait(1).to({graphics:mask_graphics_196,x:1008.7,y:687.7}).wait(1).to({graphics:mask_graphics_197,x:1008.5,y:688.1}).wait(1).to({graphics:mask_graphics_198,x:1008.3,y:688.6}).wait(1).to({graphics:mask_graphics_199,x:1008.1,y:689.1}).wait(1).to({graphics:mask_graphics_200,x:1007.9,y:689.5}).wait(1).to({graphics:mask_graphics_201,x:1007.7,y:690}).wait(1).to({graphics:mask_graphics_202,x:1007.4,y:690.5}).wait(1).to({graphics:mask_graphics_203,x:1007.2,y:690.9}).wait(27));

	// 1 -  layer 1
	this.instance = new lib.RoadLine("synched",0);
	this.instance.setTransform(2.2,415.8,1.974,5.971,0,0,0,-511.4,-1.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1).to({scaleY:5.97,y:415.8},0).to({scaleY:37.45,y:1048.5},9).wait(1));

	// 2- layer 1
	this.instance_1 = new lib.RoadLine("synched",0);
	this.instance_1.setTransform(2.2,458.3,1.974,12.575,0,0,0,-511.4,-1.9);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1).to({regY:-1.9,scaleY:12.58,y:458.3},0).to({regY:-1.8,scaleY:37.45,y:1078.5},9,cjs.Ease.get(-0.31)).wait(1));

	// 3 - layer 1
	this.instance_2 = new lib.RoadLine("synched",0);
	this.instance_2.setTransform(2.2,544.9,1.974,21.712,0,0,0,-511.4,-1.8);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1).to({scaleY:21.71,y:544.9},0).to({scaleY:37.45,y:1226.6},9).wait(1));

	// 4 - layer 1
	this.instance_3 = new lib.RoadLine("synched",0);
	this.instance_3.setTransform(2,687.1,1.974,27.633,0,0,0,-511.5,-1.8);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.5,scaleY:27.63,x:2,y:687.1},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1));

	// 5 - layer 1
	this.instance_4 = new lib.RoadLine("synched",0);
	this.instance_4.setTransform(1.8,857.9,1.974,54.428,0,0,0,-511.6,-1.8);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1).to({regX:-511.6,scaleY:54.43,x:1.8,y:857.9},0).to({regX:-511.4,scaleY:37.45,x:2.2,y:1368.7},9).wait(1));

	// Layer 10
	this.instance_5 = new lib.RoadLine("synched",0);
	this.instance_5.setTransform(2.2,378.4,1.974,7.545,0,0,0,-511.4,-1.8);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1).to({regX:-511.4,scaleX:1.97,scaleY:7.55,x:2.2,y:378.4},0).to({regX:-511.6,scaleX:1.88,scaleY:31.44,x:109.1,y:732},9).wait(1));

	// Layer 9
	this.instance_6 = new lib.RoadLine("synched",0);
	this.instance_6.setTransform(2.2,349.8,1.974,1.639,0,0,0,-511.4,-1.8);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:12.28,x:1.8,y:421.4},9).wait(1));

	// Layer 3
	this.instance_7 = new lib.RoadLine("synched",0);
	this.instance_7.setTransform(2.2,349.8,1.974,1.639,0,0,0,-511.4,-1.8);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:17.17,x:1.8,y:489.6},9).wait(1));

	// Layer 4
	this.instance_8 = new lib.RoadLine("synched",0);
	this.instance_8.setTransform(2.2,349.8,1.974,1.639,0,0,0,-511.4,-1.8);

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1).to({regX:-511.4,scaleY:1.64,x:2.2,y:349.8},0).to({regX:-511.6,scaleY:28.09,x:1.8,y:580.9},9).wait(1));

	// Road-shape (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EiU7Aq/MCM3hX0MBceAAAMBAiBZrg");
	var mask_1_graphics_52 = new cjs.Graphics().p("EiU7Aq/MCM3hX0MBceAAAMBAiBZrg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EiU/ArBUAsGgbjAsYgbXQbAwiZCwbMBceAAAQURayTEa1QMrSANBSGMkp/gB2g");
	var mask_1_graphics_54 = new cjs.Graphics().p("EiVEArEUAsMgbqAstgbRQbnwoXswYMBcaAAAQVManSwazQMeSDNISSMkqIgB0g");
	var mask_1_graphics_55 = new cjs.Graphics().p("EiVIArIUAsPgbxAtDgbMQcNwuWVwWMBcaAAAQWFaeSdauQMQSINRSfMkqRgByg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EiVMArLUAsTgb5AtZgbGQc0wzU+wTMBcYAAAQW+aTSJaqQMDSONZSqMkqZgBwg");
	var mask_1_graphics_57 = new cjs.Graphics().p("EiVRArOUAsYgb/AtvgbCQdaw4TowQMBcXAAAQX3aJR1amQL1SSNiS2MkqjgBug");
	var mask_1_graphics_58 = new cjs.Graphics().p("EiVVArRUAscgcGAuFga8QeAw9SSwPMBcVAAAQYwZ/RiajQLnSWNqTDMkqrgBtg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EiVaArUUAsigcMAuaga4QemxCQ8wMMBcTAAAQZqZ1ROafQLaSbNxTOMkq0gBrg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EiVeArXUAslgcTAuwgayQfOxIPkwJMBcSAAAQakZqQ5abQLMSgN7TbMkq9gBqg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EiViAraUAspgcaAvFgasQf1xOOOwHMBcQAAAQbdZhQmaWQK/SlOCTnMkrFgBog");
	var mask_1_graphics_62 = new cjs.Graphics().p("EiVnArdUAsugchAvbgamUAgbgRTAM3gQFMBcPAAAQcXZWQSaTQKxSqOLTyMkrPgBmg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EiVrArgUAsygcoAvxgahUAhCgRYALggQCMBcNAAAQdRZMP+aPQKkSuOST+MkrXgBkg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EiVvArkUAs2gcwAwHgacUAhogRdAKKgQAMBcLAAAQeKZCPqaLQKWSzObULMkrfgBig");
	var mask_1_graphics_65 = new cjs.Graphics().p("EiV0ArnUAs7gc2AwdgaXUAiOgRjAI0gP9MBcJAAAQfDY4PXaHQKIS4OkUWMkrpgBgg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EiV4ArqUAs/gc9AwygaSUAi1gRnAHdgP7MBcIAAAQf9YtPDaEQJ7S8OrUiMkrxgBeg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EiV8ArtUAtDgdEAxHgaMUAjcgRtAGHgP5MBcGAAAUAg2AYkAOvAZ/QJuTBO0UvMkr6gBdg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EiWBArwUAtIgdLAxegaHUAkCgRyAEwgP2MBcFAAAUAhvAYaAObAZ7QJgTGO8U6MksDgBbg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EiWFArzUAtMgdRAxzgaCUAkpgR4ADZgPzMBcEAAAUAipAYPAOHAZ4QJSTKPEVGMksLgBZg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EiWJAr2UAtPgdZAyKgZ8UAlPgR8ACDgPxMBcBAAAUAjjAYFAN0AZzQJFTPPMVSMksUgBXg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EiWOAr5UAtVgdfAyfgZ3UAl2gSCAArgPvMBcBAAAUAkcAX7ANgAZwQI3TUPUVeMksdgBWg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EiWSAr8UAtZgdmAy0gZyUAmdgSHgArgPsMBb/AAAUAlVAXwANMAZsQIqTZPdVqMksmgBUg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EiWXAr/UAtegdsAzKgZtUAnDgSNgCBgPpMBb9AAAUAmPAXmAM4AZoQIcTdPlV2MksvgBSg");
	var mask_1_graphics_74 = new cjs.Graphics().p("EiWbAsCUAtigdzAzggZoUAnpgSRgDYgPnMBb8AAAUAnIAXcAMlAZjQIOTjPtWBMks3gBQg");
	var mask_1_graphics_75 = new cjs.Graphics().p("EiWfAsGUAtlgd7Az3gZjUAoQgSWgEvgPlMBb6AAAUAoCAXSAMRAZgQIATnP2WOMktAgBOg");
	var mask_1_graphics_76 = new cjs.Graphics().p("EiWkAsJUAtrgeCA0LgZdUAo3gScgGFgPiMBb4AAAUAo8AXIAL9AZcQHzTrP9WaMktJgBMg");
	var mask_1_graphics_77 = new cjs.Graphics().p("EiWoAsLUAtvgeHA0hgZYUApdgSigHcgPfMBb3AAAUAp1AW9ALpAZZQHmTvQFWnMktRgBMg");
	var mask_1_graphics_78 = new cjs.Graphics().p("EiWtAsPUAtzgePA03gZSUAqEgSogIygPdMBb1AAAUAqvAW0ALVAZUQHYT1QOWyMktbgBJg");
	var mask_1_graphics_79 = new cjs.Graphics().p("EiWxAsSUAt4geWA1MgZNUAqrgStgKJgPaMBbzAAAUAroAWqALCAZPQHKT7QWW9MktjgBHg");
	var mask_1_graphics_80 = new cjs.Graphics().p("EiW1AsVUAt8gedA1igZIUArRgSxgLggPYMBbyAAAUAsiAWfAKuAZNQG8T+QeXKMktrgBGg");
	var mask_1_graphics_81 = new cjs.Graphics().p("EiW6AsYUAuAgekA15gZCUAr3gS3gM2gPWMBbwAAAUAtbAWVAKaAZJQGvUDQnXWMkt1gBEg");
	var mask_1_graphics_82 = new cjs.Graphics().p("EiW+AsbUAuEgerA2OgY9UAsfgS7gOOgPUMBbwAAAUAuUAWLAKGAZFQGiUHQuXiMkt9gBCg");
	var mask_1_graphics_83 = new cjs.Graphics().p("EiXDAseUAuJgexA2kgY4UAtFgTBgPkgPSMBbuAAAUAvNAWCAJzAZAQGUUMQ3XuMkuHgBAg");
	var mask_1_graphics_84 = new cjs.Graphics().p("EiXHAshUAuNge4A26gYzUAtrgTGgQ6gPPMBbrAAAUAwIAV3AJfAY9QGGURQ/X6MkuPgA/g");
	var mask_1_graphics_85 = new cjs.Graphics().p("EiXLAskUAuRge+A3QgYuUAuRgTMgSQgPMMBbqAAAUAxBAVtAJLAY5QF4UVRHYGMkuXgA9g");
	var mask_1_graphics_86 = new cjs.Graphics().p("EiXQAsnUAuWgfGA3lgYoUAu4gTRgTngPJMBboAAAUAx7AViAI3AY1QFrUaRQYSMkuhgA7g");
	var mask_1_graphics_87 = new cjs.Graphics().p("EiXUAsqUAubgfMA36gYjUAvegTXgU9gPHMBbnAAAUAy0AVZAIjAYxQFeUfRXYdMkupgA5g");
	var mask_1_graphics_88 = new cjs.Graphics().p("EiXZAsuUAufgfUA4RgYeUAwFgTbgWUgPFMBblAAAUAztAVOAIQAYtQFQUkRgYqMkuzgA3g");
	var mask_1_graphics_89 = new cjs.Graphics().p("EiXdAsxUAujgfbA4mgYYUAwqgThgXpgPCMBbkAAAUA0mAVEAH9AYpQFCUoRoY2Mku7gA1g");
	var mask_1_graphics_90 = new cjs.Graphics().p("EiXhAs0UAuogfhA47gYUUAxQgTmgY/gPAMBbiAAAUA1gAU6AHpAYoQE1UrRvZBMkvDgAzg");
	var mask_1_graphics_91 = new cjs.Graphics().p("EiXmAs3UAusgfoA5SgYOUAx2gTsgaWgO9MBbhAAAUA2ZAUwAHVAYjQEoUwR4ZOMkvNgAyg");
	var mask_1_graphics_92 = new cjs.Graphics().p("EiXqAs6UAuwgfvA5ngYJUAyegTwgbtgO7MBbfAAAUA3TAUlAHBAYgQEaU0SAZaMkvVgAwg");
	var mask_1_graphics_93 = new cjs.Graphics().p("EiXvAs9UAu1gf2A59gYDUAzEgT2gdDgO4MBbdAAAUA4NAUbAGtAYbQEMU6SJZlMkvfgAug");
	var mask_1_graphics_94 = new cjs.Graphics().p("EiXzAtAUAu5gf9A6TgX9UAzqgT8geZgO2MBbbAAAUA5GAURAGaAYYQD+U+SRZyMkvngAtg");
	var mask_1_graphics_95 = new cjs.Graphics().p("EiX3AtDUAu9ggDA6ogX5UA0SgUBgfxgOzMBbaAAAUA6AAUHAGFAYTQDxVDSZZ+MkvvgArg");
	var mask_1_graphics_96 = new cjs.Graphics().p("EiX8AtGUAvCggKA6+gXzUA04gUGghHgOxMBbYAAAUA65AT9AFyAYPQDjVISiaJMkv5gApg");
	var mask_1_graphics_97 = new cjs.Graphics().p("EiYAAtJUAvGggRA7UgXuUA1egULgidgOvMBbXAAAUA7yATzAFeAYMQDWVMSpaWMkwBgAog");
	var mask_1_graphics_98 = new cjs.Graphics().p("EiYEAtNUAvJggZA7qgXoUA2GgURgj1gOsMBbWAAAUA8rATpAFLAYHQDIVRSyaiMkwKgAlg");
	var mask_1_graphics_99 = new cjs.Graphics().p("EiYJAtQUAvPggfA7/gXkUA2sgUWglLgOpMBbUAAAUA9mATeAE2AYEQC6VWS6atMkwTgAjg");
	var mask_1_graphics_100 = new cjs.Graphics().p("EiYNAtSUAvTgglA8VgXeUA3SgUbgmhgOoMBbSAAAUA+fATVAEiAX/QCtVbTCa5MkwbgAig");
	var mask_1_graphics_101 = new cjs.Graphics().p("EiYSAtWUAvYggtA8rgXZUA34gUggn3gOlMBbQAAAUA/YATKAEPAX8QCfVgTLbFMkwlgAgg");
	var mask_1_graphics_102 = new cjs.Graphics().p("EiYWAtYUAvcggzA9AgXUUA4fgUlgpOgOiMBbPAAAUBASATAAD7AX3QCSVlTSbRMkwtgAfg");
	var mask_1_graphics_103 = new cjs.Graphics().p("EiYaAtcUAvfgg7A9XgXOUA5GgUrgqlgOgMBbNAAAUBBMAS2ADnAX1QCDVoTcbdMkw2gAcg");
	var mask_1_graphics_104 = new cjs.Graphics().p("EiYfAtfUAvlghCA9sgXIUA5sgUxgr7gOdMBbLAAAUBCFASsADTAXwQB3VuTjboMkw/gAag");
	var mask_1_graphics_105 = new cjs.Graphics().p("EiYjAtiUAvpghIA+CgXEUA6SgU1gtSgObMBbKAAAUBC/ASiAC/AXrQBpVzTrb1MkxHgAZg");
	var mask_1_graphics_106 = new cjs.Graphics().p("EiYnAtlUAvsghPA+YgW/UA65gU6guogOZMBbJAAAUBD3ASYACsAXpQBcV2TzcCMkxQgAYg");
	var mask_1_graphics_107 = new cjs.Graphics().p("EiYsAtoUAvyghVA+tgW6UA7ggVAgwAgOWMBbHAAAUBEyASOACYAXkQBOV7T7cOMkxZgAWg");
	var mask_1_graphics_108 = new cjs.Graphics().p("EiYwAtrUAv1ghdA/DgWzUA8HgVGgxWgOTMBbGAAAUBFqASDACEAXhQBBV/UDcaMkxhgAUg");
	var mask_1_graphics_109 = new cjs.Graphics().p("EiY1AtuUAv6ghjA/ZgWvUA8tgVLgysgOQMBbDAAAUBGlAR4ABwAXdQAzWFUMclMkxrgASg");
	var mask_1_graphics_110 = new cjs.Graphics().p("EiY5AtxUAv/ghqA/ugWqUA9UgVPg0EgOPMBbDAAAUBHdARvABdAXZQAlWJUUcyMkxzgARg");
	var mask_1_graphics_111 = new cjs.Graphics().p("EiY9At0UAwCghxBAFgWkUA96gVVg1agOMMBbBAAAUBIXARkABIAXVQAZWPUbc9Mkx7gAPg");
	var mask_1_graphics_112 = new cjs.Graphics().p("EiZCAt4UAwHgh5BAagWeUA+hgVbg2wgOJMBa/AAAUBJQARaAA1AXRQAKWTUldJMkyFgAMg");
	var mask_1_graphics_113 = new cjs.Graphics().p("EiZGAt7UAwLgh/BAwgWaUA/HgVgg4HgOGMBa+AAAUBKKARQAAhAXNQgDWYUsdVMkyNgALg");
	var mask_1_graphics_114 = new cjs.Graphics().p("EiZLAt+UAwQgiGBBGgWUUA/tgVlg5dgOFMBa8AAAUBLDARGAAOAXJQgRWdU1dhMkyXgAJg");
	var mask_1_graphics_115 = new cjs.Graphics().p("EiZPAuBUAwVgiNBBbgWOUBAUgVrg60gOCMBa6AAAUBL9AQ8gAGAXFQgfWhU9dtMkyfgAHg");
	var mask_1_graphics_116 = new cjs.Graphics().p("EiZTAuEUAwZgiUBBwgWJUBA7gVwg8LgN/MBa5AAAUBM3AQxgAbAXBQgsWmVFd5MkyngAFg");
	var mask_1_graphics_117 = new cjs.Graphics().p("EiZYAuHUAwdgiaBCHgWFUBBhgV1g9igN9MBa4AAAUBNwAQogAuAW9Qg6WrVOeFMkyxgAEg");
	var mask_1_graphics_118 = new cjs.Graphics().p("EiZcAuKUAwigihBCbgV/UBCIgV6g+4gN7MBa2AAAUBOqAQdgBCAW6QhHWvVVeRMky5gACg");
	var mask_1_graphics_119 = new cjs.Graphics().p("EiZhAuNUAwmgioBCygV6UBCvgV/hAPgN4MBa0AAAUBPjAQTgBVAW1QhVW0Veedg");
	var mask_1_graphics_136 = new cjs.Graphics().p("EiZhAuNUAwmgioBCygV6UBCvgV/hAPgN4MBa0AAAUBPjAQTgBVAW1QhVW0Veedg");
	var mask_1_graphics_137 = new cjs.Graphics().p("EiZcAuKUAwigihBCbgV/UBCIgV6g+4gN7MBa2AAAUBOqAQdgBCAW6QhHWvVVeRMky5gACg");
	var mask_1_graphics_138 = new cjs.Graphics().p("EiZYAuHUAwdgiaBCHgWFUBBhgV1g9igN9MBa4AAAUBNwAQogAuAW9Qg6WrVOeFMkyxgAEg");
	var mask_1_graphics_139 = new cjs.Graphics().p("EiZTAuEUAwZgiUBBwgWJUBA7gVwg8LgN/MBa5AAAUBM3AQxgAbAXBQgsWmVFd5MkyngAFg");
	var mask_1_graphics_140 = new cjs.Graphics().p("EiZPAuBUAwVgiNBBbgWOUBAUgVrg60gOCMBa6AAAUBL9AQ8gAGAXFQgfWhU9dtMkyfgAHg");
	var mask_1_graphics_141 = new cjs.Graphics().p("EiZLAt+UAwQgiGBBGgWUUA/tgVlg5dgOFMBa8AAAUBLDARGAAOAXJQgRWdU1dhMkyXgAJg");
	var mask_1_graphics_142 = new cjs.Graphics().p("EiZGAt7UAwLgh/BAwgWaUA/HgVgg4HgOGMBa+AAAUBKKARQAAhAXNQgDWYUsdVMkyNgALg");
	var mask_1_graphics_143 = new cjs.Graphics().p("EiZCAt4UAwHgh5BAagWeUA+hgVbg2wgOJMBa/AAAUBJQARaAA1AXRQAKWTUldJMkyFgAMg");
	var mask_1_graphics_144 = new cjs.Graphics().p("EiY9At0UAwCghxBAFgWkUA96gVVg1agOMMBbBAAAUBIXARkABIAXVQAZWPUbc9Mkx7gAPg");
	var mask_1_graphics_145 = new cjs.Graphics().p("EiY5AtxUAv/ghqA/ugWqUA9UgVPg0EgOPMBbDAAAUBHdARvABdAXZQAlWJUUcyMkxzgARg");
	var mask_1_graphics_146 = new cjs.Graphics().p("EiY1AtuUAv6ghjA/ZgWvUA8tgVLgysgOQMBbDAAAUBGlAR4ABwAXdQAzWFUMclMkxrgASg");
	var mask_1_graphics_147 = new cjs.Graphics().p("EiYwAtrUAv1ghdA/DgWzUA8HgVGgxWgOTMBbGAAAUBFqASDACEAXhQBBV/UDcaMkxhgAUg");
	var mask_1_graphics_148 = new cjs.Graphics().p("EiYsAtoUAvyghVA+tgW6UA7ggVAgwAgOWMBbHAAAUBEyASOACYAXkQBOV7T7cOMkxZgAWg");
	var mask_1_graphics_149 = new cjs.Graphics().p("EiYnAtlUAvsghPA+YgW/UA65gU6guogOZMBbJAAAUBD3ASYACsAXpQBcV2TzcCMkxQgAYg");
	var mask_1_graphics_150 = new cjs.Graphics().p("EiYjAtiUAvpghIA+CgXEUA6SgU1gtSgObMBbKAAAUBC/ASiAC/AXrQBpVzTrb1MkxHgAZg");
	var mask_1_graphics_151 = new cjs.Graphics().p("EiYfAtfUAvlghCA9sgXIUA5sgUxgr7gOdMBbLAAAUBCFASsADTAXwQB3VuTjboMkw/gAag");
	var mask_1_graphics_152 = new cjs.Graphics().p("EiYaAtcUAvfgg7A9XgXOUA5GgUrgqlgOgMBbNAAAUBBMAS2ADnAX1QCDVoTcbdMkw2gAcg");
	var mask_1_graphics_153 = new cjs.Graphics().p("EiYWAtYUAvcggzA9AgXUUA4fgUlgpOgOiMBbPAAAUBASATAAD7AX3QCSVlTSbRMkwtgAfg");
	var mask_1_graphics_154 = new cjs.Graphics().p("EiYSAtWUAvYggtA8rgXZUA34gUggn3gOlMBbQAAAUA/YATKAEPAX8QCfVgTLbFMkwlgAgg");
	var mask_1_graphics_155 = new cjs.Graphics().p("EiYNAtSUAvTgglA8VgXeUA3SgUbgmhgOoMBbSAAAUA+fATVAEiAX/QCtVbTCa5MkwbgAig");
	var mask_1_graphics_156 = new cjs.Graphics().p("EiYJAtQUAvPggfA7/gXkUA2sgUWglLgOpMBbUAAAUA9mATeAE2AYEQC6VWS6atMkwTgAjg");
	var mask_1_graphics_157 = new cjs.Graphics().p("EiYEAtNUAvJggZA7qgXoUA2GgURgj1gOsMBbWAAAUA8rATpAFLAYHQDIVRSyaiMkwKgAlg");
	var mask_1_graphics_158 = new cjs.Graphics().p("EiYAAtJUAvGggRA7UgXuUA1egULgidgOvMBbXAAAUA7yATzAFeAYMQDWVMSpaWMkwBgAog");
	var mask_1_graphics_159 = new cjs.Graphics().p("EiX8AtGUAvCggKA6+gXzUA04gUGghHgOxMBbYAAAUA65AT9AFyAYPQDjVISiaJMkv5gApg");
	var mask_1_graphics_160 = new cjs.Graphics().p("EiX3AtDUAu9ggDA6ogX5UA0SgUBgfxgOzMBbaAAAUA6AAUHAGFAYTQDxVDSZZ+MkvvgArg");
	var mask_1_graphics_161 = new cjs.Graphics().p("EiXzAtAUAu5gf9A6TgX9UAzqgT8geZgO2MBbbAAAUA5GAURAGaAYYQD+U+SRZyMkvngAtg");
	var mask_1_graphics_162 = new cjs.Graphics().p("EiXvAs9UAu1gf2A59gYDUAzEgT2gdDgO4MBbdAAAUA4NAUbAGtAYbQEMU6SJZlMkvfgAug");
	var mask_1_graphics_163 = new cjs.Graphics().p("EiXqAs6UAuwgfvA5ngYJUAyegTwgbtgO7MBbfAAAUA3TAUlAHBAYgQEaU0SAZaMkvVgAwg");
	var mask_1_graphics_164 = new cjs.Graphics().p("EiXmAs3UAusgfoA5SgYOUAx2gTsgaWgO9MBbhAAAUA2ZAUwAHVAYjQEoUwR4ZOMkvNgAyg");
	var mask_1_graphics_165 = new cjs.Graphics().p("EiXhAs0UAuogfhA47gYUUAxQgTmgY/gPAMBbiAAAUA1gAU6AHpAYoQE1UrRvZBMkvDgAzg");
	var mask_1_graphics_166 = new cjs.Graphics().p("EiXdAsxUAujgfbA4mgYYUAwqgThgXpgPCMBbkAAAUA0mAVEAH9AYpQFCUoRoY2Mku7gA1g");
	var mask_1_graphics_167 = new cjs.Graphics().p("EiXZAsuUAufgfUA4RgYeUAwFgTbgWUgPFMBblAAAUAztAVOAIQAYtQFQUkRgYqMkuzgA3g");
	var mask_1_graphics_168 = new cjs.Graphics().p("EiXUAsqUAubgfMA36gYjUAvegTXgU9gPHMBbnAAAUAy0AVZAIjAYxQFeUfRXYdMkupgA5g");
	var mask_1_graphics_169 = new cjs.Graphics().p("EiXQAsnUAuWgfGA3lgYoUAu4gTRgTngPJMBboAAAUAx7AViAI3AY1QFrUaRQYSMkuhgA7g");
	var mask_1_graphics_170 = new cjs.Graphics().p("EiXLAskUAuRge+A3QgYuUAuRgTMgSQgPMMBbqAAAUAxBAVtAJLAY5QF4UVRHYGMkuXgA9g");
	var mask_1_graphics_171 = new cjs.Graphics().p("EiXHAshUAuNge4A26gYzUAtrgTGgQ6gPPMBbrAAAUAwIAV3AJfAY9QGGURQ/X6MkuPgA/g");
	var mask_1_graphics_172 = new cjs.Graphics().p("EiXDAseUAuJgexA2kgY4UAtFgTBgPkgPSMBbuAAAUAvNAWCAJzAZAQGUUMQ3XuMkuHgBAg");
	var mask_1_graphics_173 = new cjs.Graphics().p("EiW+AsbUAuEgerA2OgY9UAsfgS7gOOgPUMBbwAAAUAuUAWLAKGAZFQGiUHQuXiMkt9gBCg");
	var mask_1_graphics_174 = new cjs.Graphics().p("EiW6AsYUAuAgekA15gZCUAr3gS3gM2gPWMBbwAAAUAtbAWVAKaAZJQGvUDQnXWMkt1gBEg");
	var mask_1_graphics_175 = new cjs.Graphics().p("EiW1AsVUAt8gedA1igZIUArRgSxgLggPYMBbyAAAUAsiAWfAKuAZNQG8T+QeXKMktrgBGg");
	var mask_1_graphics_176 = new cjs.Graphics().p("EiWxAsSUAt4geWA1MgZNUAqrgStgKJgPaMBbzAAAUAroAWqALCAZPQHKT7QWW9MktjgBHg");
	var mask_1_graphics_177 = new cjs.Graphics().p("EiWtAsPUAtzgePA03gZSUAqEgSogIygPdMBb1AAAUAqvAW0ALVAZUQHYT1QOWyMktbgBJg");
	var mask_1_graphics_178 = new cjs.Graphics().p("EiWoAsLUAtvgeHA0hgZYUApdgSigHcgPfMBb3AAAUAp1AW9ALpAZZQHmTvQFWnMktRgBMg");
	var mask_1_graphics_179 = new cjs.Graphics().p("EiWkAsJUAtrgeCA0LgZdUAo3gScgGFgPiMBb4AAAUAo8AXIAL9AZcQHzTrP9WaMktJgBMg");
	var mask_1_graphics_180 = new cjs.Graphics().p("EiWfAsGUAtlgd7Az3gZjUAoQgSWgEvgPlMBb6AAAUAoCAXSAMRAZgQIATnP2WOMktAgBOg");
	var mask_1_graphics_181 = new cjs.Graphics().p("EiWbAsCUAtigdzAzggZoUAnpgSRgDYgPnMBb8AAAUAnIAXcAMlAZjQIOTjPtWBMks3gBQg");
	var mask_1_graphics_182 = new cjs.Graphics().p("EiWXAr/UAtegdsAzKgZtUAnDgSNgCBgPpMBb9AAAUAmPAXmAM4AZoQIcTdPlV2MksvgBSg");
	var mask_1_graphics_183 = new cjs.Graphics().p("EiWSAr8UAtZgdmAy0gZyUAmdgSHgArgPsMBb/AAAUAlVAXwANMAZsQIqTZPdVqMksmgBUg");
	var mask_1_graphics_184 = new cjs.Graphics().p("EiWOAr5UAtVgdfAyfgZ3UAl2gSCAArgPvMBcBAAAUAkcAX7ANgAZwQI3TUPUVeMksdgBWg");
	var mask_1_graphics_185 = new cjs.Graphics().p("EiWJAr2UAtPgdZAyKgZ8UAlPgR8ACDgPxMBcBAAAUAjjAYFAN0AZzQJFTPPMVSMksUgBXg");
	var mask_1_graphics_186 = new cjs.Graphics().p("EiWFArzUAtMgdRAxzgaCUAkpgR4ADZgPzMBcEAAAUAipAYPAOHAZ4QJSTKPEVGMksLgBZg");
	var mask_1_graphics_187 = new cjs.Graphics().p("EiWBArwUAtIgdLAxegaHUAkCgRyAEwgP2MBcFAAAUAhvAYaAObAZ7QJgTGO8U6MksDgBbg");
	var mask_1_graphics_188 = new cjs.Graphics().p("EiV8ArtUAtDgdEAxHgaMUAjcgRtAGHgP5MBcGAAAUAg2AYkAOvAZ/QJuTBO0UvMkr6gBdg");
	var mask_1_graphics_189 = new cjs.Graphics().p("EiV4ArqUAs/gc9AwygaSUAi1gRnAHdgP7MBcIAAAQf9YtPDaEQJ7S8OrUiMkrxgBeg");
	var mask_1_graphics_190 = new cjs.Graphics().p("EiV0ArnUAs7gc2AwdgaXUAiOgRjAI0gP9MBcJAAAQfDY4PXaHQKIS4OkUWMkrpgBgg");
	var mask_1_graphics_191 = new cjs.Graphics().p("EiVvArkUAs2gcwAwHgacUAhogRdAKKgQAMBcLAAAQeKZCPqaLQKWSzObULMkrfgBig");
	var mask_1_graphics_192 = new cjs.Graphics().p("EiVrArgUAsygcoAvxgahUAhCgRYALggQCMBcNAAAQdRZMP+aPQKkSuOST+MkrXgBkg");
	var mask_1_graphics_193 = new cjs.Graphics().p("EiVnArdUAsugchAvbgamUAgbgRTAM3gQFMBcPAAAQcXZWQSaTQKxSqOLTyMkrPgBmg");
	var mask_1_graphics_194 = new cjs.Graphics().p("EiViAraUAspgcaAvFgasQf1xOOOwHMBcQAAAQbdZhQmaWQK/SlOCTnMkrFgBog");
	var mask_1_graphics_195 = new cjs.Graphics().p("EiVeArXUAslgcTAuwgayQfOxIPkwJMBcSAAAQakZqQ5abQLMSgN7TbMkq9gBqg");
	var mask_1_graphics_196 = new cjs.Graphics().p("EiVaArUUAsigcMAuaga4QemxCQ8wMMBcTAAAQZqZ1ROafQLaSbNxTOMkq0gBrg");
	var mask_1_graphics_197 = new cjs.Graphics().p("EiVVArRUAscgcGAuFga8QeAw9SSwPMBcVAAAQYwZ/RiajQLnSWNqTDMkqrgBtg");
	var mask_1_graphics_198 = new cjs.Graphics().p("EiVRArOUAsYgb/AtvgbCQdaw4TowQMBcXAAAQX3aJR1amQL1SSNiS2MkqjgBug");
	var mask_1_graphics_199 = new cjs.Graphics().p("EiVMArLUAsTgb5AtZgbGQc0wzU+wTMBcYAAAQW+aTSJaqQMDSONZSqMkqZgBwg");
	var mask_1_graphics_200 = new cjs.Graphics().p("EiVIArIUAsPgbxAtDgbMQcNwuWVwWMBcaAAAQWFaeSdauQMQSINRSfMkqRgByg");
	var mask_1_graphics_201 = new cjs.Graphics().p("EiVEArEUAsMgbqAstgbRQbnwoXswYMBcaAAAQVManSwazQMeSDNISSMkqIgB0g");
	var mask_1_graphics_202 = new cjs.Graphics().p("EiU/ArBUAsGgbjAsYgbXQbAwiZCwbMBceAAAQURayTEa1QMrSANBSGMkp/gB2g");
	var mask_1_graphics_203 = new cjs.Graphics().p("EiU7Aq/MCM3hX0MBceAAAMBAiBZrg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:955.2,y:695.2}).wait(52).to({graphics:mask_1_graphics_52,x:955.2,y:695.2}).wait(1).to({graphics:mask_1_graphics_53,x:955.9,y:695.3}).wait(1).to({graphics:mask_1_graphics_54,x:956.5,y:695.4}).wait(1).to({graphics:mask_1_graphics_55,x:957.1,y:695.5}).wait(1).to({graphics:mask_1_graphics_56,x:957.7,y:695.6}).wait(1).to({graphics:mask_1_graphics_57,x:958.3,y:695.7}).wait(1).to({graphics:mask_1_graphics_58,x:959,y:695.8}).wait(1).to({graphics:mask_1_graphics_59,x:959.6,y:695.9}).wait(1).to({graphics:mask_1_graphics_60,x:960.2,y:696}).wait(1).to({graphics:mask_1_graphics_61,x:960.8,y:696.1}).wait(1).to({graphics:mask_1_graphics_62,x:961.4,y:696.2}).wait(1).to({graphics:mask_1_graphics_63,x:962.1,y:696.3}).wait(1).to({graphics:mask_1_graphics_64,x:962.7,y:696.4}).wait(1).to({graphics:mask_1_graphics_65,x:963.3,y:696.5}).wait(1).to({graphics:mask_1_graphics_66,x:963.9,y:696.6}).wait(1).to({graphics:mask_1_graphics_67,x:964.6,y:696.7}).wait(1).to({graphics:mask_1_graphics_68,x:965.2,y:696.8}).wait(1).to({graphics:mask_1_graphics_69,x:965.8,y:696.9}).wait(1).to({graphics:mask_1_graphics_70,x:966.4,y:697}).wait(1).to({graphics:mask_1_graphics_71,x:967,y:697.1}).wait(1).to({graphics:mask_1_graphics_72,x:967.7,y:697.2}).wait(1).to({graphics:mask_1_graphics_73,x:968.3,y:697.3}).wait(1).to({graphics:mask_1_graphics_74,x:968.9,y:697.4}).wait(1).to({graphics:mask_1_graphics_75,x:969.5,y:697.5}).wait(1).to({graphics:mask_1_graphics_76,x:970.1,y:697.6}).wait(1).to({graphics:mask_1_graphics_77,x:970.8,y:697.7}).wait(1).to({graphics:mask_1_graphics_78,x:971.4,y:697.8}).wait(1).to({graphics:mask_1_graphics_79,x:972,y:697.9}).wait(1).to({graphics:mask_1_graphics_80,x:972.6,y:698}).wait(1).to({graphics:mask_1_graphics_81,x:973.3,y:698.1}).wait(1).to({graphics:mask_1_graphics_82,x:973.9,y:698.2}).wait(1).to({graphics:mask_1_graphics_83,x:974.5,y:698.3}).wait(1).to({graphics:mask_1_graphics_84,x:975.1,y:698.4}).wait(1).to({graphics:mask_1_graphics_85,x:975.7,y:698.5}).wait(1).to({graphics:mask_1_graphics_86,x:976.4,y:698.6}).wait(1).to({graphics:mask_1_graphics_87,x:977,y:698.7}).wait(1).to({graphics:mask_1_graphics_88,x:977.6,y:698.8}).wait(1).to({graphics:mask_1_graphics_89,x:978.2,y:698.9}).wait(1).to({graphics:mask_1_graphics_90,x:978.8,y:699}).wait(1).to({graphics:mask_1_graphics_91,x:979.5,y:699.1}).wait(1).to({graphics:mask_1_graphics_92,x:980.1,y:699.2}).wait(1).to({graphics:mask_1_graphics_93,x:980.7,y:699.3}).wait(1).to({graphics:mask_1_graphics_94,x:981.3,y:699.4}).wait(1).to({graphics:mask_1_graphics_95,x:981.9,y:699.6}).wait(1).to({graphics:mask_1_graphics_96,x:982.6,y:699.6}).wait(1).to({graphics:mask_1_graphics_97,x:983.2,y:699.7}).wait(1).to({graphics:mask_1_graphics_98,x:983.8,y:699.9}).wait(1).to({graphics:mask_1_graphics_99,x:984.4,y:699.9}).wait(1).to({graphics:mask_1_graphics_100,x:985,y:700.1}).wait(1).to({graphics:mask_1_graphics_101,x:985.7,y:700.1}).wait(1).to({graphics:mask_1_graphics_102,x:986.3,y:700.3}).wait(1).to({graphics:mask_1_graphics_103,x:986.9,y:700.4}).wait(1).to({graphics:mask_1_graphics_104,x:987.5,y:700.5}).wait(1).to({graphics:mask_1_graphics_105,x:988.1,y:700.6}).wait(1).to({graphics:mask_1_graphics_106,x:988.8,y:700.7}).wait(1).to({graphics:mask_1_graphics_107,x:989.4,y:700.8}).wait(1).to({graphics:mask_1_graphics_108,x:990,y:700.9}).wait(1).to({graphics:mask_1_graphics_109,x:990.6,y:701}).wait(1).to({graphics:mask_1_graphics_110,x:991.2,y:701.1}).wait(1).to({graphics:mask_1_graphics_111,x:991.9,y:701.2}).wait(1).to({graphics:mask_1_graphics_112,x:992.5,y:701.3}).wait(1).to({graphics:mask_1_graphics_113,x:993.1,y:701.4}).wait(1).to({graphics:mask_1_graphics_114,x:993.7,y:701.5}).wait(1).to({graphics:mask_1_graphics_115,x:994.3,y:701.6}).wait(1).to({graphics:mask_1_graphics_116,x:995,y:701.7}).wait(1).to({graphics:mask_1_graphics_117,x:995.6,y:701.8}).wait(1).to({graphics:mask_1_graphics_118,x:996.2,y:701.9}).wait(1).to({graphics:mask_1_graphics_119,x:996.8,y:702}).wait(17).to({graphics:mask_1_graphics_136,x:996.8,y:702}).wait(1).to({graphics:mask_1_graphics_137,x:996.2,y:701.9}).wait(1).to({graphics:mask_1_graphics_138,x:995.6,y:701.8}).wait(1).to({graphics:mask_1_graphics_139,x:995,y:701.7}).wait(1).to({graphics:mask_1_graphics_140,x:994.3,y:701.6}).wait(1).to({graphics:mask_1_graphics_141,x:993.7,y:701.5}).wait(1).to({graphics:mask_1_graphics_142,x:993.1,y:701.4}).wait(1).to({graphics:mask_1_graphics_143,x:992.5,y:701.3}).wait(1).to({graphics:mask_1_graphics_144,x:991.9,y:701.2}).wait(1).to({graphics:mask_1_graphics_145,x:991.2,y:701.1}).wait(1).to({graphics:mask_1_graphics_146,x:990.6,y:701}).wait(1).to({graphics:mask_1_graphics_147,x:990,y:700.9}).wait(1).to({graphics:mask_1_graphics_148,x:989.4,y:700.8}).wait(1).to({graphics:mask_1_graphics_149,x:988.8,y:700.7}).wait(1).to({graphics:mask_1_graphics_150,x:988.1,y:700.6}).wait(1).to({graphics:mask_1_graphics_151,x:987.5,y:700.5}).wait(1).to({graphics:mask_1_graphics_152,x:986.9,y:700.4}).wait(1).to({graphics:mask_1_graphics_153,x:986.3,y:700.3}).wait(1).to({graphics:mask_1_graphics_154,x:985.7,y:700.1}).wait(1).to({graphics:mask_1_graphics_155,x:985,y:700.1}).wait(1).to({graphics:mask_1_graphics_156,x:984.4,y:699.9}).wait(1).to({graphics:mask_1_graphics_157,x:983.8,y:699.9}).wait(1).to({graphics:mask_1_graphics_158,x:983.2,y:699.7}).wait(1).to({graphics:mask_1_graphics_159,x:982.6,y:699.6}).wait(1).to({graphics:mask_1_graphics_160,x:981.9,y:699.6}).wait(1).to({graphics:mask_1_graphics_161,x:981.3,y:699.4}).wait(1).to({graphics:mask_1_graphics_162,x:980.7,y:699.3}).wait(1).to({graphics:mask_1_graphics_163,x:980.1,y:699.2}).wait(1).to({graphics:mask_1_graphics_164,x:979.5,y:699.1}).wait(1).to({graphics:mask_1_graphics_165,x:978.8,y:699}).wait(1).to({graphics:mask_1_graphics_166,x:978.2,y:698.9}).wait(1).to({graphics:mask_1_graphics_167,x:977.6,y:698.8}).wait(1).to({graphics:mask_1_graphics_168,x:977,y:698.7}).wait(1).to({graphics:mask_1_graphics_169,x:976.4,y:698.6}).wait(1).to({graphics:mask_1_graphics_170,x:975.7,y:698.5}).wait(1).to({graphics:mask_1_graphics_171,x:975.1,y:698.4}).wait(1).to({graphics:mask_1_graphics_172,x:974.5,y:698.3}).wait(1).to({graphics:mask_1_graphics_173,x:973.9,y:698.2}).wait(1).to({graphics:mask_1_graphics_174,x:973.3,y:698.1}).wait(1).to({graphics:mask_1_graphics_175,x:972.6,y:698}).wait(1).to({graphics:mask_1_graphics_176,x:972,y:697.9}).wait(1).to({graphics:mask_1_graphics_177,x:971.4,y:697.8}).wait(1).to({graphics:mask_1_graphics_178,x:970.8,y:697.7}).wait(1).to({graphics:mask_1_graphics_179,x:970.1,y:697.6}).wait(1).to({graphics:mask_1_graphics_180,x:969.5,y:697.5}).wait(1).to({graphics:mask_1_graphics_181,x:968.9,y:697.4}).wait(1).to({graphics:mask_1_graphics_182,x:968.3,y:697.3}).wait(1).to({graphics:mask_1_graphics_183,x:967.7,y:697.2}).wait(1).to({graphics:mask_1_graphics_184,x:967,y:697.1}).wait(1).to({graphics:mask_1_graphics_185,x:966.4,y:697}).wait(1).to({graphics:mask_1_graphics_186,x:965.8,y:696.9}).wait(1).to({graphics:mask_1_graphics_187,x:965.2,y:696.8}).wait(1).to({graphics:mask_1_graphics_188,x:964.6,y:696.7}).wait(1).to({graphics:mask_1_graphics_189,x:963.9,y:696.6}).wait(1).to({graphics:mask_1_graphics_190,x:963.3,y:696.5}).wait(1).to({graphics:mask_1_graphics_191,x:962.7,y:696.4}).wait(1).to({graphics:mask_1_graphics_192,x:962.1,y:696.3}).wait(1).to({graphics:mask_1_graphics_193,x:961.4,y:696.2}).wait(1).to({graphics:mask_1_graphics_194,x:960.8,y:696.1}).wait(1).to({graphics:mask_1_graphics_195,x:960.2,y:696}).wait(1).to({graphics:mask_1_graphics_196,x:959.6,y:695.9}).wait(1).to({graphics:mask_1_graphics_197,x:959,y:695.8}).wait(1).to({graphics:mask_1_graphics_198,x:958.3,y:695.7}).wait(1).to({graphics:mask_1_graphics_199,x:957.7,y:695.6}).wait(1).to({graphics:mask_1_graphics_200,x:957.1,y:695.5}).wait(1).to({graphics:mask_1_graphics_201,x:956.5,y:695.4}).wait(1).to({graphics:mask_1_graphics_202,x:955.9,y:695.3}).wait(1).to({graphics:mask_1_graphics_203,x:955.2,y:695.2}).wait(27));

	// Road-bg
	this.instance_9 = new lib.roadTexture();
	this.instance_9.setTransform(1521.1,691.8,1,0.492,0,0,0,1551.2,307.9);

	this.instance_9.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(230));

	// Grass Line 3
	this.instance_10 = new lib.GrassLine("synched",0);
	this.instance_10.setTransform(2.2,407.7,1.974,8.384,0,0,0,-511.4,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleY:121.07,y:740,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({scaleY:8.38,y:407.7,alpha:1},0).to({scaleY:121.07,y:828,alpha:0.102},9,cjs.Ease.get(1)).wait(1));

	// Grass Line 3
	this.instance_11 = new lib.GrassLine("synched",0);
	this.instance_11.setTransform(2.2,407.7,1.974,8.384,0,0,0,-511.4,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.5,scaleY:47.69,x:2,y:592.9,alpha:0.102},9,cjs.Ease.get(1)).wait(1));

	// Grass Line 3
	this.instance_12 = new lib.GrassLine("synched",0);
	this.instance_12.setTransform(2.2,407.7,1.974,8.384,0,0,0,-511.4,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1).to({regX:-511.4,scaleY:8.38,x:2.2,y:407.7,alpha:1},0).to({regX:-511.6,scaleY:14.45,x:1.8,y:439.5,alpha:0.102},9,cjs.Ease.get(1)).wait(1));

	// Foreground
	this.backgroundhorizon = new lib.horizon();
	this.backgroundhorizon.setTransform(1012,514,1,1,0,0,0,1012,514);

	this.timeline.addTween(cjs.Tween.get(this.backgroundhorizon).wait(230));

	// lib load in background * Buttons *
	this.instance_13 = new lib.AudioHolder();
	this.instance_13.setTransform(176.1,506.1);

	this.instance_14 = new lib.AudioHolder();
	this.instance_14.setTransform(-70,-44);

	this.introCover = new lib.cover();
	this.introCover.setTransform(-3116.4,858);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.introCover},{t:this.instance_14},{t:this.instance_13}]}).wait(230));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4448.7,-20.1,7484.7,3090.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;