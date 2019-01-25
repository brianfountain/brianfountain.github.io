(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// symbols:



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2024,1334);


(lib.dave = function() {
	this.initialize(img.dave);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,228,428);


(lib.dave_1 = function() {
	this.initialize(img.dave_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,670,196);


(lib.dave_2 = function() {
	this.initialize(img.dave_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,725,259);


(lib.dave_3 = function() {
	this.initialize(img.dave_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,696,196);


(lib.desk = function() {
	this.initialize(img.desk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2027,567);


(lib.jose = function() {
	this.initialize(img.jose);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,504);


(lib.jose_1 = function() {
	this.initialize(img.jose_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,762,196);


(lib.jose_2 = function() {
	this.initialize(img.jose_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,757,196);


(lib.jose_3 = function() {
	this.initialize(img.jose_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,757,287);


(lib.Pat = function() {
	this.initialize(img.Pat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,380);


(lib.pat_1 = function() {
	this.initialize(img.pat_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,687,196);


(lib.pat_2 = function() {
	this.initialize(img.pat_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,714,196);


(lib.pat_3 = function() {
	this.initialize(img.pat_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,714,196);


(lib.register = function() {
	this.initialize(img.register);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1061,566);


(lib.cover = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.698)").s().p("EluSDxbMAAAni1MLclAAAMAAAHi1g");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2344.3,-1545.1,4688.6,3090.2);


(lib.PatQuote_3 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.pat_3();
	this.instance.setTransform(-327.4,-97.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-327.4,-97.8,714,196);


(lib.PatQuote_2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.pat_2();
	this.instance.setTransform(-327.4,-97.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-327.4,-97.8,714,196);


(lib.PatQuote_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.pat_1();
	this.instance.setTransform(-224.5,-97.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-224.5,-97.8,687,196);


(lib.JoseQuote2 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.jose_2();
	this.instance.setTransform(-332.6,-97.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-332.6,-97.8,757,196);


(lib.JoseQuote_3 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.jose_3();
	this.instance.setTransform(-356.6,-143.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-356.6,-143.3,757,287);


(lib.JoseQuote_1 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.jose_1();
	this.instance.setTransform(-348.7,-97.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-348.7,-97.8,762,196);


(lib.DaveQuote_3 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.dave_3();
	this.instance.setTransform(-329.5,-97.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-329.5,-97.8,696,196);


(lib.DaveQuote_2 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.dave_2();
	this.instance.setTransform(-349.9,-129.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-349.9,-129.7,725,259);


(lib.DaveQuote_1 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.dave_1();
	this.instance.setTransform(-320.1,-97.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320.1,-97.8,670,196);


(lib.pat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#642100").s().p("ABaAXQgHgIAAgIIAKgWIABAAIARABIAAAIQAAAJABAEQAEAIAMAEIAPAAQgFANgLAGIgUAAIgRgPgAiLAAQgDgGAAgPQAAgDAEgHIACgEQALgCANAAIAAAJQAAAIADAHQAHAMANAAIAGgCQgHAQgUAAQgVAAgIgNg");
	this.shape.setTransform(25.9,-124.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACZAiIABgBIACgEQAEgLAAgNIAKAIIAEAEQgEAFgMAMgABEADIgEgFIADAAIADgCIAHgDIADgBIAAAAQgDAIgBAFIgBAFIAAACQgEgCgDgHgAB6gBQAAgDADgEIAAAAQAMADAKAFIAAALIgQABQgJgLAAgCgAhLAIIADgGQAEgIAAgMIgBgHIAMAHIAPALIADAEIgHAEQgHAEgOADgAihgGIgMgKIAEgBIAKgHIAIgDIAAAKIACAPIABADIgNgHgAhlgaQAAgCAEgFIAPADQAEAFAAAIIAAACIgEADQgCACgEAAQgNAAAAgQg");
	this.shape_1.setTransform(25.7,-125.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#993300").s().p("AAXALIAAgDQABgEAJgFIALgJQA7ADAJAFIAMAJIgGAAQgWgGgIAAQgYAAgQAFQgRAGgEAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAAAAAAAgAhhAEIgPAAIgGgDIgGgBQAEgDAJgFIAGgDIAEAEIADAEQABAAABABQAAAAAAABQABAAAAABQAAAAAAAAQAAAEgBAAIgBAAg");
	this.shape_2.setTransform(32.2,-137.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA7A9IAAgCIACgGQAAgGAEgIIAAgBIgDACIgHADIgDABIgDAAIgCAAIgBgBIgBgBIAAgEQgBgNAjgKQAjgKAVAOQAQANANAeQgCAEgCABIgCgBIgDgEIgKgIQAAANgFALIgCAEIAAABQgKATgaAAQgpAAgCgpgABGA7QgBAJAHAHIARAQIAUgBQAMgGAEgMIgOAAQgNgFgDgIQgCgEAAgLIABgIIgRgBIgCAAIgJAYgABrAuQAAAEAJALIAQgBIAAgNQgLgGgLgCIAAAAQgDADAAAEgAijA2IgBgEIAAgGIgCgOIgBgKIgIADIgJAGIgEACIgKAGQgEgCgCgCQATgnA8ABQA9AAASAvQgCAEgDABIgDgDIgEgEIgOgLIgMgHIAAAHQAAAMgDAKIgDAFIgBACQgKATgWAAQgfAAgJgXgAiWAPIgCAEQgEAIAAACQAAAPAEAHQAHAOAWAAQATAAAIgRIgHABQgNAAgHgMQgDgHAAgIIABgJQgNAAgMACgAh0AUQAAARAMAAQAEAAADgCIADgDIAAgCQAAgIgDgFIgPgDQgEAFAAABgACLhCQgSAAgXAGIgUAGQgNAAgDgHIAAgKQAAgiA4AFQA4AFAfAuIgDADQgBACgEAAQgogWgSAAgABShQQgJAHgBAEIAAADQAAAAAAAAQABAAAAABQABAAABAAQAAAAABAAQAEAAARgGQAQgFAYAAQAIAAAWAGIAGAAIgMgLQgJgFg7gDIgLAJgAhCg9IgLgHQgHgGgCgFIAAgBQABgBAEAAIAGACIAGADIAGADIAPAAQACABAAgGQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBgBAAIgDgEIgEgEIAAgFQAOgCADAHQADADAAAJIAAAKQgDAFgHACg");
	this.shape_3.setTransform(27.3,-130);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993300").s().p("AA/AIQgBgFAHgDQAyABAPAEQAIADAEAEIhBAFQgSAAAAgJgAhfACIgygKQARgJAVACQAYACAFAPg");
	this.shape_4.setTransform(28.7,-132.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABEA2QgRgMgFgHQgGgFgCgFIAFABIAAgDQABgBAJAHIACABIASANQAcAQA2gHIABAAIABAAIABAAQAEABABAEQgFAIgDABIgCABIgFACQgNAFgQAAQgWAAgdgUgAigAoIgLgFQgSgEgGgHQACgCAGAAIAAgBIAAgBQAAAAABAAQAAAAABgBQAAAAABAAQABAAABAAIAMAFQAWAEAZAAQAcAAANgEIALgFIAFABIAEgDIADAAQABAAAAABQAAAAAAABQABAAAAABQAAABAAABQAAAHgSAKQgTAKgUAAQgUAAgagJgABJgUQgFgCAAgNQAAgdBAAOQBAANAAAQIAAAEIgCACIg0ABQg5AAgMgGgABOgiQAAAJATAAIBBgFQgEgEgIgDQgPgEgzgDQgGAFAAAFgAhNgdQgGgCgYgEIgngGQgBAAAAgGQAAgeAvAEQAwAEAAAcQAAAIgFAEgAiCg0IAzAMIARAAQgFgRgYgCIgIgBQgQAAgPAIg");
	this.shape_5.setTransform(27.1,-128.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABiAFIgCgFIASAGIAKAFIgBAAQgEAEgSAAIgDgKgAh0AAIAAgCIgHgMIASADQgFAFgCAGg");
	this.shape_6.setTransform(28,-124.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#642100").s().p("ABcADIAAAAIACgBQAOgCAMgBIAAABIAEALIADAFQgagBgJgMgAhqAAQgTgEgBgJIAAgBIATgBIAGAAQAAAEACAGIAEAFg");
	this.shape_7.setTransform(24.5,-124.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#993300").s().p("AB8AMQgjgIgdgBIgCgCQgBgBgBgCQAAgVAvANQAuAKAGASIgfgGgAiagFQASgMARAAQAUAAAGAOg");
	this.shape_8.setTransform(30.3,-133.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA6BMIgGgGIAAgGQAEAAAIAFIANAHIgCAEIgFABQgHAAgFgFgAA/A6IgHgHQgJACgFAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQABAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIADgEIgBgBIAEgIQAEgEAXgBQARAAANABQAVABAPAEIgHgMQABgEABgBIAEAAQACAAAHAMIAHALQAJAEAEAIIgBADQgBACgEAAIgJgCIgBADQgBABgEAAIgEgCQgCAFgHADQgKAEgMAAQgdAAgQgPgABqAzIADALQARgBAEgDIABgBIgKgEIgSgHIADAFgABCAwIgBABIAAAAQAIAMAbABIgDgFIgFgNIAAgBQgLABgPAEgAiHBDQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgFAKgCIgHAAQgQABgJgMQgEgHgBgHQgHABgFACQgKAHgGACQgEgBgBgCQAEgIAGgFQABgDADgBIACgBQAKgGARgBIALAAIABgBQAkABAPAHIADACQAQAHAPALIgBAEQgBACgEAAIgPgGIgBABIgJgFQgCADgEAFIgGAHIABAAIABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQAAABAAABQAAABAAAAQgBABAAAAQAAAAAAAAIgEABQgYACgGADIgEgBgAhsAqIgBACIAEAAQACgGAGgFIgSgDIAHAMgAiZAeIAAABQABAJATAEIAKAAIgDgFQgDgGAAgEIgFAAIgTABgABXggQgIgDgCgFIAAgJQAAgjA8AQQA8AQAAAYQAAAGgDAJQABADgHAAQg7gSgqgEgABXgyQAAADACACIACACQAdABAjAIIAeAGQgGgSgtgMQgSgFgLAAQgSAAAAANgAhWgoQgEgBgpgBIgEgCQgBgBAAgEQAAgIANgLQANgLAMgBQAAABAXAHQAYAIAAALQAAAGgIAHgAh7g1IA9ACQgHgOgTAAQgSAAgRAMg");
	this.shape_9.setTransform(27.3,-129.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#642100").s().p("ABVATQgGgJAAgKIAAAAIAFgEQAJgGAQgCIAAADIACAKQAGAMAWAAIABAAIAAACIgBADIAAABIgDAFIgEAEQgHAGgMAAQgTAAgJgPgAiIAAQgDgDAAgIIAAgBIAAgJIAAgEQALgGALgCIAAAHQAAAHADAEQAFAKAQAAQAGAAAFgCIACAAIABgCQAAAGgDAEQgGALgRgBQgXAAgIgLg");
	this.shape_10.setTransform(24.3,-126.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ACQAdQADgHABgKIAAgFIAAAAIAAgEIACgCIABgBIADABIAFAEIAEAFIACADIgFAGIgGAFQgFAFgFADIAAgDgAhMAOQACgEABgGIABgEIAAgDQAAgLgEgHIgBgCIABgCQALAEAMAGIAIAFIAFAEIAFADQgFADgIADIgUALgAB2ABQgCgBAAgIIAAgCIALAAIAHABIABAIIACAGIgFAAQgLAAgDgEgAihgBIgDgFIAMgJIAAASIAAABQgFgBgEgEgAghgMIADADIAAABIgDgEgAhYgLIgRgCQgFgHAAgEQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAABAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBIABAAIAJABIACAGIAFAEIACAFIABACIgBACIgCAAg");
	this.shape_11.setTransform(24.7,-126.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AA6BMQgFgIgCgIIgBAAQgDgBgCgCQAHgqAqACQALgCAIAFQAHABAHAFIACACIABABQAHADAIAIQAUATAAAKQAAAIgHABIgNgKIAFgHIgDgDIgEgEIgEgEIgEgEIgBADIgBADIAAADIAAABIAAAEQgBAKgDAIIgBACQgIASgYAAQgaAAgMgWgABBAuIgFAFIAAACQAAAJAGAKQAKAOATAAQAMAAAHgFIAEgFIACgEIABgBIAAgEIABgCIgCAAQgWAAgGgLIgCgMIAAgEQgPACgKAGgABkAlIAAABQAAAJACADQAFAEAPgBIgCgIIgCgIIgGgBIgMABgAhsBVQAAgBAAgBQAAgBAAAAQABgBAAAAQAAgBAAAAIAEAAIAZgDQAKgBAFAEQgEAEgXAGIgQAAIAAAAQgCAAAAgFgAicBAQgKgHgBgFIgBAAIAAgUIgLAIIgNAJQgFgGAAgCQAAgBALgNQALgNAEgCQAHgDAJgGQAMgDAjgCQAkAEAOAPIAKASIADADIADAHQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgGgFIgEgDIgGgEIgIgEQgLgHgLgEIgDgBIACADIABACQADAIAAALIAAAEIAAAFQgBAGgCAEIgBABQgIALgYAAQgSAAgOgLgAidAZIAAAEIgBAJIAAABQABAIADAFQAHAMAYAAQARAAAGgLQADgFgBgGIAAACIgCAAQgFABgHAAQgPAAgGgJQgCgFAAgHIAAgHQgLADgLAFgAh7ASQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFAFAHIARABIACABIACAAIgBgDIgBgCIgDgFIgEgEIgCgGIgJAAIgBAAQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAgACtglQgRgNgGAAQgxgIgJgEQgEgDAAgLQAAggA3ARQA3ARAAAgIgBAPQABACgHAAQgCAAgQgMgABqhVIgIAJQAAAEABABIACACQAqADAPAHIAVAKQACgBAAgHQAAgEgdgNQgagMgPAAIgFABgAhNg1IAPgLIAQAAQAHgCAEgLQAAgFgCgEIAHgGQAFAFAAAKQAAALgFAFQgIAIgVAAIgSAAg");
	this.shape_12.setTransform(26.2,-131.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#993300").s().p("ABjAIQgPgIgqAAIgCgCQgBgCgBgDIAJgJQAPgDAfAOQAdALAAAEQAAAHgCABIgVgKgAh5ACIAQgLIAJgIQABADAAAGQgEAJgGABg");
	this.shape_13.setTransform(32.1,-138.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},34).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(76));

	// Layer 2
	this.instance = new lib.Pat();
	this.instance.setTransform(-62,-171.6,0.632,0.632);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-171.6,150.4,240.1);


(lib.Jose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Eyes
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#914706").s().p("ACCAkIgDgbQAAgLAHgJQAEgEACgJIATAEQgEAJAAAEQAAAHAFAHQAJAKAMAAQAMAAAGgLIAEgIIADACIAEAFIgHAVQgKAjgcAAQgcAAgHgZgAjHgDQgJgNgBgKQAAgEAHgTIACgJQAMgCAKAAQgDAIAAAJIAAAKQACAEAGADIAUAAQAOgEAFgQIAHAFQglAYgaAaQgBgFgIgHg");
	this.shape.setTransform(-462.6,-465.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3E1E00").s().p("ABJAkQgNgVAAgQQAAgJAEgMQAEgNAGgFIAMALIAPAPIAIAFQAGADAKACIAlABQAdACANAFQARAJAKASQAHAPACAQIgZgCQgYAAgRAGQgQAFgRAAQguAAgWgjgAipgDQgYgMguALQAFgYAHgLQAQgZAiAAQAUAAAGAEQAHAEAWAAQAdAAAQgGQAMgHAFgBQACAHAAAPQAAAWgGAMQgNAZgnAAQgXAAgegOg");
	this.shape_1.setTransform(-462.5,-480.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABKgkQAAgFAPgGQAFAGAPADIADABIARADIAAABIAAAjQAAAaAGANQADAIAFAGIgEgBIgLgBIgEABQgBAAAAABQAAAAAAABQgBAAAAABQAAABAAABQAAAEACABIABABIAAAAIACABQgagEgbhigADmAaIAEgJIABgDIAAgBIAAAAIACgBIAAAIIgIANIABgHgAjGAJIgOgCIgBAAIAAgBIgBABQgHgHgHgOQgIgUAAgRIABgKIABAAQAAABAAAAQAAAAAAABQAAAAABABQAAAAABABQADACADAAIAEAAIAAgBIATgEIAFgBQgIASAAAMQAAAMAFALQAGAIALAKIgOgBgAC4gOIACgKIAOADIAGACIAAADQgCAPgKAAQgKAAAAgNgAiYguIgBgBIAAgEQAAgCADgIIACgEQAKACAGADIgGAOg");
	this.shape_2.setTransform(-464.1,-465);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CD9967").s().p("AhxAjQgOhjBugIIADAAQAaADATAPIAAgBIADADQApgGAgAQQgqARghAUIAAgEQAAgXgugHQgtgHgYAaIgPAHIgBABIgBAAIgBAKQAAAPAJAUQAGAPAHAIIgEAEQAAAFAFACQAEADAIABIgLACQgggKgEgcgAAcAEQAkgYApgUIADgCIAIAFQgaAlgkAaQgfAVgoAQIgRADQAZggAlgeg");
	this.shape_3.setTransform(-477.7,-469.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C1D00").s().p("ACdCcQgMgDgmgCIgDgBIgBAAIAAgBQgCgBAAgEQAAgBAAgBQAAAAAAgBQABgBAAAAQAAAAABgBIAEgBIALABIAEABQgGgGgDgIQgFgNAAgaIAAglIAAgBIgRgDIgEgBQgPgDgEgGQgCgDAAgDQAAgFAOgFQARgGAZADQA9AJAXAVQAPAOAAAZQAAAFgFAGIgCABIgBAAIAAABIgBADIgDAJIgCAHIgBAEQgKAVgRAHQAEACAAAEQAAAFgCABIgEABIgUgHgACABCQgHAJAAANIACAbQAIAZAcAAQAcAAAKgjIAGgVIgDgFIgDgEIgEAKQgGALgNAAQgMAAgIgKQgGgIAAgIQAAgEAFgJIgTgEQgCAJgEAEgACjBFQAAANAKAAQAKAAACgPIAAgDIgGgCIgOgDIgCAKgAjrBnQgEgCgBgFIAFgEIABgBIAAABIABAAIAOACIAOABQgMgLgFgJQgFgLAAgMQAAgMAIgSIgFABIgTAEIgBABIgDAAQgDAAgDgCQgBgBgBAAQAAgBAAAAQgBAAAAgBQAAAAABgBIAAgBIAPgHQAZgYAtAHQAwAFAAAXIgBAEQAigUAqgPIABAAIgEACQgpASgjAaQgoAegZAgIgfAFQgJgBgEgDgAjOATIgDAJQgGATAAAEQAAAKAKANQAIAJABAFQAagcAlgYIgHgFQgFAQgOAEIgUAAQgGgDgCgEIAAgKQAAgJADgIQgKAAgMACgAirAWQgEAIAAACIAAAEIABABIAPAAIAGgOQgGgDgKgCIgCAEgAA9gaQgSgaAAgXIABgaQADgNAPgNQAMgHAOAPQATAWAMAFQAlABAXADQAqAFARAjQAHAPAHATIAGAPIAAAFIgCABIgHABQgCAAgIgEQgIgEgUAAQgUAAgRAFQgQAGgWAAQgxAAgaglgAA8hgQgEAMAAAJQAAASANAVQAWAjAtAAQARAAARgFQARgGAYAAIAZACQgCgQgIgPQgKgSgRgJQgMgHgegCIgkgBQgLgCgFgDIgIgFIgQgPIgMgLQgFAFgEANgAi9hEIgZAAIgCABQgJAAgMACIgMACQgDgBgCgDQgDgEAAgHQAAgQANgXQAVgjAnAAQAWAAAIAEQAJAFAUAAQAeAAAkgSQAHgEABAGIABAEIACgBIACAKIgEABIAAATQAAAegFANQgPAkgyAAQgoAAgdgVgAiuhNQAeAQAYAAQAnAAANgbQAGgMAAgWQAAgPgDgHQgEABgMAHQgRAGgcAAQgXAAgGgEQgHgEgUAAQgiAAgQAZQgHALgFAYQAWgFARAAQATAAAMAGg");
	this.shape_4.setTransform(-462,-473.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3E1E00").s().p("AA/gUQAAgGADgLQBxAIAzAOQAYAGAJAKQAGAOAHAGQghgFgtATQgyAVgSAAQhDAAAAhMgAjVARQg1gLgJACIAAgCQAcg7AfgCQAJAAAbAEQAdAGAYAAQAbAAACgGIABABIAAALQAAAXgGAQQgMAcgmAAQgGAAg2gLg");
	this.shape_5.setTransform(-463.3,-472.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ACTByQgVgEgIgGQARggArAmIgBAEQgBADgEAAQgIAAgRgDgAC5BTQgsgJhGAAIgKgCIAAgGQAAgFAIgFQAMgHAQABIAAgBIBEAAQAdAIAOAIQAMAHAIAMIgBAGQAAACgGAAQgNgFgXgEgAjtBBQgEgCgBgEQAGgMARAFQAMACAKAIIgDAFQgCACgEAAQgXAAgIgEgAjAAkQgKgEg8AAQgJAAgEgHQAEgEgBgEQAGgDAwgEQAWgEARAHQAOAFAAAFQAAAEgCAGQgDAGgDAAQgKAAgJgDgAA3gNQgKgZABgdQAAgUACgEQACgEAMAEQA4APA2AAQA8AAAjAfQAYAWAAATIgBAEQgCACgGAAQgFAAgPgCQgPgDgHAAQgXAAglASQglATgPAAQg2AAgTgvgAA9g4QAABMBDAAQASAAAxgUQAugSAgAFQgGgGgGgOQgJgMgZgGQgzgOhwgIQgDALAAAGgAjMgBQgXgLgKgBQgqgCgGgCQgFgCAAgKQAAgTARgXQAWghAnAAQAoAAAaAIIAfAAQAVgaAFAIQACACAAAVQAABihEAAQgcAAgVgIgAjYgRQA3ALAGAAQAmAAALgeQAGgQAAgXIAAgLIgBgBQgCAGgbAAQgXAAgdgGQgcgEgJAAQgeACgcA9IAAACIADAAQAMAAAuAJg");
	this.shape_6.setTransform(-463,-469);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ADdAoQADgKACgIIAFAAIAJAAQAAAIgQAMIgGADIADgFgABSAUIgFgUIAAAAIACAAIAVAAIgBALQABAMACALIACAHIgFABQgKAAgHgWgADUAaIAAgBQAAgHgBACIgEABIgBgBQgJACgSABIgJgTQAZACAJAFIAJAHIAAAIIgBABgAjYgGQgEAAgKgOQgIgOgBgCIAAgCIAFAAQACgBAIgDIAHgCIAFAPIAEAIIAAABIAAADQgGABgEADQAAAEADADgAiggtIAcABIgGAGIgGAGIgQgNg");
	this.shape_7.setTransform(-464.4,-464.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#914706").s().p("AC2AtQgOgGgVgDQgWgCgJAEIgEgIQgFgLAAgJQAAgDACgFIACgCQAbAAATABIAAAHQAAALABACQACAJALAFIAWAAIAHgFQAEgDAAgDQAAgBAAgBQAAgBAAgBQAAAAAAAAQgBgBAAAAIgBAAIAEgBQABgBAAAHIAAABIAAABIAAAAIgPASIgDAEIgHgDgAisgPQgPgDgIgBIgEgBQgCgOgDgIIgCgEIAOgBIAHABIAEAEQABAFADAFQAGALANADIAAAAIgBACIgBgBQgGgCgEADIgCACIAAgBg");
	this.shape_8.setTransform(-463.9,-464.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3E1E00").s().p("ABQAhQgKgTAAgRIACgiQAGAAASAMQAaANAsAAQBGAAARAVQAHAIABANIABATQgTgCgxAIQg2AJgNAAQggAAgPgfgAi0AEQgngOgNAAQgJAAgUAEIAPgdQAMgTARgEQAUgLAqAMQA1APAFAAQAXAAARgOIABABIAAAEQAAAMgQAZQgXAhgiAAQgOAAglgPg");
	this.shape_9.setTransform(-463.1,-476.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AC5CDIgEABQgFAAgJgDIgWgHIgTACIgLABIAAAAQgBACgEAAQgMAAgFgQIgCgHQgDgLAAgMIABgLIgWgBIgBAAIgFgBIgCgCIAAAAIgBgEQAAgDAOgHQAOgFAOgCQBLABAfAOQAIADAWAVIgBAGIgHACIgIAAIgFAAQgCAIgDAKIgDAFQgIARgLAAIgDgBgACNBsQAVADAOAGIAHADIADgFIAPgSIAAAAIAAgBIAAgIIgJgHQgJgFgYgCIAJATQASgBAJgCIABABIABAAQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAABQAAAEgEADIgHAFIgWAAQgLgGgCgIQgBgDAAgLIAAgGQgTgCgbgBIgCAEQgCAFAAADQAAAIAFAMIAEAIQAGgDAKAAIAPABgAjfBBIgEgDQgDgDAAgEQAFgDAFgBIADgBIgDgDIgDgIIgGgPIgHACQgHADgDABIgEAAIgCgBIgCgDIAAABIgBgFQAAgcBBAFQA4AEAIAMIADAAQABAAAAAGQAAAHgOALIgJAHIgDADQgCADgDAAIgBAAIgEADIgFgDIgBgBIAAAAQgNgDgGgKQgDgFgBgFIAAgFIgEAAIgHgBIgOABIACAFQADAHACAOIAEABQAIABAPAEIAAABIACgCQAEgEAGACIABACIAAAEIgBAHIgGACIgGgCIAAACQgCACgGAAQgVgEgQAAgAicAkIAHgGIAGgGIgcgBIAPANgAA/gSQgHgZACgaIgBgcQABgGAIACQBdAVAcAEQAtgEAaAmQAUAbAAAWIAAAIQgCAFgFAAIgLgFQgLgFgSAAQgMAAgmAKQgmAKgMAAQg0AAgQgwgABHg0QAAATAKAUQAPAcAhAAQANAAA1gJQAygGASAAIgBgQQgBgNgGgJQgSgXhGAAQgsAAgagNQgSgMgGAAIgCAigAi0geQgogQgMAAQgVABgJAIQgFAKgEABQgFgCgBgDIAAgGQAAgNANgaQAPgbANgJQAhgVArALIA+ARQAVAAAPgNIAPgNIAGABIABAIQAAAcgNAdQgXA0gzAAQgOgBgngQgAizgrQAmAPANAAQAjAAAWgjQAQgYAAgNIAAgEIgBAAQgRANgXAAQgFAAg1gOQgqgNgUALQgRAEgMATIgPAdQAUgDAJAAQANAAAnAPg");
	this.shape_10.setTransform(-463.3,-471.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},53).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},2).to({state:[{t:this.shape_4},{t:this.shape_1},{t:this.shape_2},{t:this.shape},{t:this.shape_3}]},2).wait(1));

	// body
	this.instance = new lib.jose();
	this.instance.setTransform(-548,-497.9,0.654,0.654);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-548,-497.9,176.6,329.8);


(lib.dave_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/AZQgWgDgEgBIAGgBQArgIAsgQQArgRAqgHIgCABQhVA4gkAAQgGAAgXgEg");
	this.shape.setTransform(3.3,-117);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhaBPIgtgNQAAAXgHADQgFgHAAgFIAAgKQAAgVAHgFQAFAGAAAFIADgBIAFAEQAEAEAnAAQA6ABAzgYQAvgWAugEQgJgNgDgIIACgEQAMAKAPAPQARAWABALQgCAEgDABQgLgLgLgQQgUAUgfATQgzAfgnAAQgUAAg3gPgAAcAwQgtASgrAIIgFABQAEABAWADQAXAEAGAAQAjAABWg6IACgBQgqAHgrARgAiXAAQAAAAgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgFAEgLQAEgMAEgCIAEABQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAABQgIAbgEACIgEAAgAADg5QgogVAAgLIAAgEQAEAAAPALQAQANAKADIApAMQAYAIAKAGIAAAEQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAgBAAQgeAAgtgXg");
	this.shape_1.setTransform(0.9,-122.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAgCQASgIAbgIIgDADQgLAMgKAFQgSAMgvAFIAsgVg");
	this.shape_2.setTransform(9,-118.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah9BXIgBgJIABgMQABgGAIgHIAEAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABIgBALIABAAQAOADAEgCIABABIABAAQA7AAA+gbQA8gaAdgHQgJgIAAgIIAAgBIgDgGIAAgFQAIgBAOAOQAJAHARAVIgBAEQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAIgEAAIgBAAIgDgCIgHgFIgDgCQgFASgfAOQg0AWhrAAIgMADIgLACIgHAAIgBABQgEACgDAAIgKgDIgDgBIgDAOIgEACQgEgDAAgFgABIAlIgtAWQAxgFASgMQAKgHALgMIACgDQgaAIgTAJgAiZgMQgBgHABgHQACgNAJAAIABAMIgCAWIgFACQgFgCAAgHgAgMhCQgmgMACgQQAFgBAjAOQApARAnAGIAEADIABADIgBAGIgEABQhGgQgOgFg");
	this.shape_3.setTransform(1.7,-122.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhsBNIABgEQABgGACgCQAEACACADIAAACIAPgCIgBgCQACgCAOADIAxgFQAPgDAcgJIAFgCQAmgOAhgVIABABIAYgOIgQgKIAAgDIADgEQAHACATANQAVAMADAHQgDAFgCABIgZgTQgGAMgjAOQgPAIgdANQg+AbgzAAIggAAIAAAHIgGADQgEgGAAgHgAihgOQAAgRAIgCIADABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABIgCAYIgFAEQgFgHAAgHgAAngyQgtgHgVgEQgngIAAgQIAAgEIAmAOQArAOAxABQAEABACAEIgDAFg");
	this.shape_4.setTransform(3.5,-123.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},21).to({state:[{t:this.shape_3},{t:this.shape_2}]},4).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_4}]},75).to({state:[{t:this.shape_3},{t:this.shape_2}]},4).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(12));

	// Eyes
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999900").s().p("AhtAPQAFgBADgBQADgDgBgJQACgCAGgBIABACIABAIIAAAFIgLABIgJACIAAgBgABhgPIACAAIAAADIAAAKQACAFAJACQgMgCgNADQAAgOAMgHg");
	this.shape_5.setTransform(-5.2,-144.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiSAdIgBgBIAAgJIAIgMIACABIABgFIAAAAQAQgQAVAAQAQAAAGAEIAFAEQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIADABIgCADQgBABgFAAIgFAAIAAgBIgFgDIgFgCQgRgKgNAJQgMAFAAAOIABAGIgBAAIAAABQgHACgEAEIgDAAgAB0ATQACgMAAgFIADgBIgHgDQgIgKgKgHIgIgBIgKABQgGABgFAEIgGAAIAAAEIgBABQgHAIAAAKIAAABIAAAAIABADQgLACgCABIABAGQgQgGgFgEIgBgEIACgBIgCgDIgBgIIAOgLQAVgNAWAAIACAAIAEABIACAAQANADASAOIANAKIgBAAIACAAIAKAGQAEAAACgCIABgCIAAgBQACABAAADQAAAGgHAIQgGAGgFABIgOgHgAhgANQgEgCAAgEIABgFQADAAAGADIAEADIgHAHIgDgCgABYAAIgBgIIAIAAQAGADADADIgHACIgGAAIgDAAgAhVgVIAKACIAIAHIAAAAQgJgGgJgDg");
	this.shape_6.setTransform(-3.1,-144.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AibBTQgIgHgBgFQAFgBAMAGQALAFAFAFIgBADQgCACgDAAQgJAAgJgIgAAsBJQgDgBgBgCQAAgFAEgCIAcAAIAKAHIgBAEQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgEgCgdgBgAijA5QAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAIAEgEQAFgEAHgCIACAAIAJgCIALgBIAEAAIgEgFIAAgKIAAgDIgCABQgGABgCAEQABAJgDADQgDABgFAAIgBAAIAAAAIgBgFQAAgOAMgIQAMgIASAKIAFADIAFAEIAAABIgBADQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgBgBIgFgDQgFgEgDAAIgBAGQAAADAEADIADACIAIAEQgCAFgHAAIgGgBIAAABIgCAGIgTAEIgVACQgBAAgBAAQgBAAgBAAQAAAAgBAAQAAAAAAgBgABZAyQgLgEgwAAIAAAAIgEAAIAAgCIgCgGQACgBAMgCIgBgEIAAAAQAAgMAHgIIAAgBQADgDAEgCQAEgDAHgBIAKgBIAHABQALAHAIAKIABACIAAAVIAPAHIAAAAQgBAFgIAAQgEAAgMgDgABVAjIACgCIACgCQgFACgHAAIgBAAIAJACgAAwAiQANgCAMABQgJgBgCgIIAAgJIAAgDIgCAAQgMAHAAAPgABIAVQAFAAAEgBIAGgCQgCgDgHgDIgHAAIABAJgACPArIgJgLIAAgFIABAAQADgFAKgFQAMgFAPAAIABgBQAAABAAAAQABAAAAABQAAAAAAABQAAABAAABQAAAEgLADQgOADgJADIAJAFIAPAJIgBADQgBACgFAAQgLAAgGgFgAiqAqQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAgBAAgBQAAgUAbgOQAUgJAXAGQAJACAJAGIAEADIgBADQgBACgEAAIgEgBIgEgEQgHgEgPAAQgVAAgQARIAAABIgDAEIgJALIgCADIgEgBgAgEAbQgHgKAAgRIACgCQADgEADgBIADACIABABIAAACQAQgKAnAAQBCACAIAhIAAAAIgBADQgCACgEAAIgKgHIgBgBIgOgKQgRgMgNgDIgGgBIgCAAQgWAAgWALIgNAKIABAKIAAAFIABAEIAAACIgFACQgDgFgBgGgAipAHQADgGAKgGIgPAAQgFgCAAgFQABgCAmgDQAggEABgOQAAgEgFgBQgHgCgDgEIAAgFQANgCAHAGQAFAFABAIQAAAJgIAGQAFABAFADQgBADgEACIgOAAIAAgDQgLAFgRADIgCAAIgJAGIgPAKQgDgCgCgCgAAPgMQgBgBABgEQgBgGAEgCQAMgEAqgBQADACACADIgCAFQgwAAgEAEQAEAFgHABIgFgCgAB4gqQgEgFgYAAQgHABgfACQgTAEgFAAQgcAAgMgUIgJgUIABgIQACgEAGADIAGAUQAJASAZAAIBEgGQATAAAIAHQAGAEADAGQgEAHgDABQgBgBgGgJg");
	this.shape_7.setTransform(-1.5,-147.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999900").s().p("AAPAJQgNgCgGABQgCgDgFgFIgFgFIAQgDIALAAIgBABIgBAEQAAADAHAIIABABIgCAAg");
	this.shape_8.setTransform(4.6,-144);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ACFAQIgMgFIAAgFIABgEIAAgBQAFgEAFAAIABAAQAIADAFAGQgCAEgEADIgHADgAAYADIAAgEIAAgEIATgGIAAABIAKAMIgBACIAAAAIgBAAIAAABQgFACgOACQgHAAgBgGgABjgBQgLgEAAgGIABgDIAAgBQAPABALADQgEABgBAEIgCAFIgCABIgHgBgAiRgCIADABIAHgEIADAFIgHAAIgGgCgAhsgHIgBgCQAMAAAJgEQAEABAAADIgCAFIgTACIgDgFg");
	this.shape_9.setTransform(-2.4,-143.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AieBMIgBgCQgCgBAAgEIABgEIAAAAIARAAIABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAADgEACQgDACgDAAgABBBLQgEgCgRgBQgCABAAgGQAAgEAHgBQAOgBA2AEQADABACAEIgCAFgABNA1QgkgGgJAFQgDgBgCgCQACgEAFgDIABAAIABAAIAAAAIACgBIgBgBIgKgOIAAgBIgTAGIgDABQAAAJAFALQgDAEgDABQgFgIgCgHIgBgIIgCgDQAAgFADgEQABgOAGgGIAEABQAAAAABAAQAAAAAAABQAAABAAAAQABABAAABIgBAGQAQgFAhADQAzAGATAQQAKgGAdgMQADABACAEQgHAFgRAIIgMAGQAHAAAQAEQAYAFABAEIgCAEIgFABQgLAAgPgEQgKgDgFgDQgBAAAAABQgBAAAAABQgBAAAAAAQAAABgBAAIgDgGQgFgGgHgFIgBAAIgGgEIAAABIgDAHIgBACIgBABIgBAEIgBACIgBACIACABIANAFIAAAAIAAAEQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAQgRgEgSgDgABEAnIADABIgCgCQgHgIAAgFIABgDIABgCIgNAAIgQADIAFAGQAFAGACAEIAHgBIAOABgABJAWIgBADQAAAGALAEIAHADIACgDIABgFQABgEAFgBQgMgDgOgBIAAABgAi1A2QABgIAIgEIgDgBQgIgGgBgBIAAgGQAKAAAHADIAEACQAAAAAAgBQAAAAAAAAQAAgBAAgBQgBAAAAgBQAAgJAVgGQAWgGAXAMIgGADQgKAEgLAAIABACIACAFIABAEIAAAEIgBABIgEACIgDgBIAIAGIgCAEIgGABQgGgCgZgBIgDACQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQgDAAgDADQgBACgDAAQgEgBgBgCgAicAmIAHgBIgCgGIgHAEIgDgBIAFAEgABMAAQgLgDg3ABIABgBIgDAAQgIAAgEgGIAAgGQAOAAAHAHQALgHAXACQAaACAQAKIABABIAAADQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQgDAAgLgFgAirAAQAJgSAZgCIAggCQAEgCgBgMQAAgLAGgBQAEADAAAEIABAJQAAAWgeAHQgjADgKACQgEgBgBgBgAgQguIgHgUIAAgIQACgEAHADIACAUQAKASAiAAIBGgGQAbAAAKAKQgFAFgHgCQgRgCgJAAIhFAGQgiAAgOgUg");
	this.shape_10.setTransform(-0.7,-147);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAjA2IgQgMIAAgFIASAGQAUAJA5AAQAUAAADgDQABgCABgGIAGAAIABAAQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAFgJAGQgJAGgOAAQg5AAgXgJgAieAuIgBgFIAAgEQAEAAAEACQAGAEAGADQgBAFgIAAQgIAAgCgFgAgGAZIAAgSQADgIAHgJIAEABQAAAAABAAQAAABAAAAQAAABAAAAQAAABABABIgEAQIAQgDIBBAAIAnAGQAMAAAKgFIATgJQADAAACADQgFAJgTAIQgPAGgGAAIglgHIhGAAQgDACgOAAQgCALACAKQgBADgCABQgGgHAAgOgACTAcIAAgDQAAgHALAEIAdAPQgCAFgDABIgjgPgAihAcIgEgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAgBIAAAAIAAgBQABgGAHgIQAJgHADAAIAEAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAABAAABQAAAEgGAIIgDAEIAbgDQAEAAAFAHQAAADgEACgAi5gGIgBgCQAEgDACgGQAMgFA/gCQAHgCAAgGQAAgJACgBQAKAEAAAFQAAANgOAGQgWAJg6AAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAAAgBgBgAgJgkQgJgIAAgLQAAgHAEAAQADABAGANQAGAMAVAAQAHAAAigJQAigKAKAAQAWAAAJAFQAGADABACQgGAEgFgBQgOgCgNAAQgNAAggAKQggAJgEAAQgZAAgKgLg");
	this.shape_11.setTransform(-1,-145.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},21).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},75).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).wait(12));

	// Body
	this.instance = new lib.dave();
	this.instance.setTransform(-59.4,-185,0.581,0.581);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.4,-185,132.5,248.7);


(lib.AudioHolder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{buzz_out:1,uniroyal_correct:2,uniroyal_fail:3,uniroyal_loop:4,uniroyal_submit_button:5,correct_feedback:6,incorrect_feedback:7,option_click:8,option_over:9});

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
		playSound("mod3_20_Challenge_Congrats");
	}
	this.frame_7 = function() {
		this.stop();
		playSound("mod3_21_Challenge_TryAgain");
	}
	this.frame_8 = function() {
		this.stop();
		playSound("uniroyal_checkbox");
	}
	this.frame_9 = function() {
		this.stop();
		playSound("uniroyal_hover");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.productknowledge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{patIntro:1,patQuestion1:20,patQuestion2:26,"patQuestion2":32,joseIntro:38,joseQuestion1:56,joseQuestion2:62,joseQuestion3:68,daveIntro:74,daveQuestion1:92,daveQuestion2:98,daveQuestion3:104});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("uniroyal_mod3_footsteps");
	}
	this.frame_25 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		this.stop();
	}
	this.frame_37 = function() {
		this.stop();
	}
	this.frame_38 = function() {
		playSound("uniroyal_mod3_footsteps");
	}
	this.frame_61 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.stop();
	}
	this.frame_73 = function() {
		this.stop();
	}
	this.frame_74 = function() {
		playSound("uniroyal_mod3_footsteps");
	}
	this.frame_97 = function() {
		this.stop();
	}
	this.frame_103 = function() {
		this.stop();
	}
	this.frame_109 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(24).call(this.frame_25).wait(6).call(this.frame_31).wait(6).call(this.frame_37).wait(1).call(this.frame_38).wait(23).call(this.frame_61).wait(6).call(this.frame_67).wait(6).call(this.frame_73).wait(1).call(this.frame_74).wait(23).call(this.frame_97).wait(6).call(this.frame_103).wait(6).call(this.frame_109).wait(1));

	// Question 1
	this.instance = new lib.PatQuote_1();
	this.instance.setTransform(607.2,391.9,1,1,0,0,0,-223,99);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.JoseQuote_1();
	this.instance_1.setTransform(710.7,350.9,1,1,0,0,0,-347.9,99);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.DaveQuote_1();
	this.instance_2.setTransform(663.8,333,1,1,0,0,0,-319.9,99);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({alpha:1},5).to({_off:true},1).wait(84));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({_off:false},0).to({alpha:1},5).to({_off:true},1).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(92).to({_off:false},0).to({alpha:1},5).to({_off:true},1).wait(12));

	// Question 2
	this.instance_3 = new lib.PatQuote_2();
	this.instance_3.setTransform(603,376.9,1,1,0,0,0,-326.9,97);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.JoseQuote2();
	this.instance_4.setTransform(709.3,376.1,1,1,0,0,0,-329.9,100);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.DaveQuote_2();
	this.instance_5.setTransform(657.7,338.8,1,1,0,0,0,-347.9,130);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({alpha:1},5).to({_off:true},1).wait(78));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({_off:false},0).to({alpha:1},5).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(98).to({_off:false},0).to({alpha:1},5).to({_off:true},1).wait(6));

	// Question 3
	this.instance_6 = new lib.PatQuote_3();
	this.instance_6.setTransform(604,366.3,1,1,0,0,0,-326.9,97);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.JoseQuote_3();
	this.instance_7.setTransform(712.7,370.9,1,1,0,0,0,-355.9,143);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.DaveQuote_3();
	this.instance_8.setTransform(653.6,316.8,1,1,0,0,0,-327.9,97);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({_off:false},0).to({alpha:1},5).to({_off:true},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(68).to({_off:false},0).to({alpha:1},5).to({_off:true},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(104).to({_off:false},0).to({alpha:1},5).wait(1));

	// Register
	this.instance_9 = new lib.register();
	this.instance_9.setTransform(887.9,314.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(110));

	// Desk
	this.instance_10 = new lib.desk();
	this.instance_10.setTransform(-1,768.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(110));

	// Character
	this.instance_11 = new lib.pat();
	this.instance_11.setTransform(225.7,577.3,1.944,1.944,0,0,0,-1.7,7.8);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.jose = new lib.Jose();
	this.jose.setTransform(744.2,500.3,1.895,1.895,0,0,0,-466.9,-333);
	this.jose.alpha = 0;
	this.jose._off = true;

	this.instance_12 = new lib.dave_4();
	this.instance_12.setTransform(647.6,648.2,2.086,2.086,0,0,0,-7.7,4.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).to({regX:-1.8,scaleX:3.17,scaleY:3.17,x:365.3,y:653.1,alpha:1},18,cjs.Ease.get(1)).to({_off:true},19).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.jose).wait(38).to({_off:false},0).to({scaleX:3.03,scaleY:3.03,x:526.1,y:614.2,alpha:1},17,cjs.Ease.get(1)).to({_off:true},19).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(74).to({_off:false},0).to({scaleX:3.41,scaleY:3.41,x:515.5,y:708.3,alpha:1},17).wait(19));

	// Floor & Ceiling
	this.instance_13 = new lib.background();

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(110));

	// Off Stage Assets
	this.instance_14 = new lib.AudioHolder();
	this.instance_14.setTransform(-112.1,-112.1);

	this.introCover = new lib.cover();
	this.introCover.setTransform(-1223.3,667,0.432,0.432);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.introCover},{t:this.instance_14}]}).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1223.3,667,4261.3,1335.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;