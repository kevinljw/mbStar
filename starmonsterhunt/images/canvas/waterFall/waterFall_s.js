(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 260,
	height: 265,
	fps: 18,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.waterflower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7F8F8").s().p("ApQClIAAkDQAAgeAdgUQAdgVApAAQApAAAcAVQAeAUAAAeQAAAcAdAWQAdAUApAAQApAAAcgUQAegVAAgdQAAgeAdgUQAdgVApAAQApAAAcAVQAcAUAAAeQAAAcAdAWQAdAUApAAQAoAAAdgUQAegVAAgdQAAgeAdgUQAdgVApAAQApAAAcAVQAeAUAAAeQAAAcAdAWQAdAUApAAQApAAAcgUQAdgVABgcIAAECg");
	this.shape.setTransform(0,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.4,0,118.8,33.2);


(lib.fwS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape.setTransform(0,130.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(8,1,1).p("AAAItIAAxZ");
	this.shape_1.setTransform(0,55.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,-3.9,7.9,138);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxcVOMAJcgkOQAuivCPhvQCPhvC0AAQC0AACQBvQCQBvAtCvMAJcAkOg");
	mask.setTransform(119.6,135.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C89F67").s().p("Aq5H+IAAv7IMlAAQBGAAAyAyQAyAxAABHQAABGgyAzQgyAyhGAAIiDAAQhHgBgxAyQgyAyAABFQAABGAyAyQAxAxBHAAIInAAQBGAAAyAzQAyAyAABGQAABGgyAzQgyAxhGAAg");
	this.shape.setTransform(69.8,190.3);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.8,139.3,131.9,102.1);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxdVOMAJdgkOQAuivCPhvQCPhuC0gBQC1ABCPBuQCPBvAuCvMAJcAkOg");
	mask.setTransform(111.8,135.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C89F67").s().p("AhqH+QhHAAgygyQgygxAAhHQAAhGAygyQAygyBHAAICDAAQBGAAAygyQAxgyABhGQgBhFgxgxQgygzhGAAIooAAQhGABgxgyQgzgyAAhHQAAhGAzgyQAxgyBGAAITIAAIAAP7g");
	this.shape.setTransform(144.8,128.4);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(75,77.3,139.6,102.1);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnIJVIAAypIORAAIAASpg");
	mask.setTransform(72.5,59.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7F8F8").s().p("AHwBPQgWgWAAgeQAAgMgJgJQgIgHgNAAQgMAAgJAHQgJAJAAAMQAAAegVAWQgWAUgdAAQgdAAgWgUQgVgWAAgeQAAgMgJgJQgJgHgMAAQgMAAgJAHQgKAJABAMQgBAegUAWQgWAUgdAAQgeAAgVgUQgVgWAAgeQAAgMgJgJQgJgHgMAAQgNAAgJAHQgIAJgBAMQAAAegSAWQgWAUgeAAQgdAAgVgUQgWgWAAgeQABgMgKgJQgIgHgMAAQgNAAgJAHQgJAJAAAMQAAAegVAWQgVAUgdAAQgfAAgUgUQgWgWABgeQgBgMgIgJQgJgHgNAAQgMAAgJAHQgJAJAAAMQAAAegVAWQgVAUgeAAQgdAAgWgUQgUgWAAgeQAAgMgJgJQgKgHgMAAQgMAAgKAHQgJAJAAAMQABAJgHAGQgFAGgJAAQgIAAgHgGQgGgGAAgJQAAgbAVgVQAWgWAdAAIAAg4ITHAAIAABOIgzAAIAAAcQAJgBAGAHQAGAGAAAIQAAAegVAWQgVAUgeAAQgeAAgUgUg");
	this.shape.setTransform(64.9,10);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(26.8,0,91.6,20);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgC6AonMAAAhQrQBagjBgAAQBhAABaAjMAAABQrg");
	mask_1.setTransform(72.5,263.8);

	// Layer 3
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(64.8,59.8,1,1,0,0,0,64.8,59.8);

	this.instance.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53.8,3.8,37.5,115.7);


// stage content:
(lib.waterFall_s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 山
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#658549").s().p("AgOHpIAAo0QgWgIgqggQgsgigvgvQg9g8gjgyQgkgxAJgKQAJgJAnAaQAnAaA0AwQghg+gPgtQgQgsALgHQAKgGAgAkQAfAjAlA8QgQhFgDgvQgDgvAMgDQAMgEAVArQAUApAVBEQADhGAJguQAJgvALAAQAMAAAJAvQAJAuACBGQAVhDAVgqQAVgrAMAEQALADgDAvQgDAvgQBFQAmg8AfgjQAfgkALAGQAKAHgPAsQgPAtgiA+QA0gwAngaQAogaAJAJQAKAKgkAxQgkAyg9A8QgwAvgrAiQgqAggWAIIAAI0g");
	this.shape.setTransform(93.9,236.2,0.445,0.445);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(199,183.5,0.445,0.445,0,0,0,111.8,135.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#658549").s().p("AksBQQANgtAlgcQAmgaAwAAQA5AAApAlQAagrAsgbQAugbA2AAQBIAAA4AuQA3ArAOBGg");
	this.shape_1.setTransform(204.9,144.3,0.445,0.445);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#658549").s().p("AgOHpIAAo0QgWgIgqggQgrgigwgvQg9g8gjgyQglgxAKgKQAJgJAnAaQAoAaAzAwQghg+gPgtQgQgsALgHQAKgGAgAkQAfAjAmA8QgQhFgDgvQgEgvAMgDQALgEAWArQAUAqAWBDQAChGAJguQAJgvALAAQALAAAKAvQAJAuACBGQAWhEAUgpQAVgrAMAEQAMADgEAvQgCAvgRBFQAmg8AfgjQAggkAKAGQALAHgQAsQgPAtghA+QAzgwAogaQAngaAIAJQALAKglAxQgjAyg9A8QgwAvgrAiQgqAggWAIIAAI0g");
	this.shape_2.setTransform(188,221.9,0.445,0.445);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C0D541").s().p("AxdVOMAJdgkOQAuivCPhvQCQhvCzAAQC0AACQBvQCQBvAtCvMAJdAkOg");
	this.shape_3.setTransform(199,183,0.445,0.445);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#658549").s().p("AgOHpIAAo0QgWgIgqghQgrghgwgvQg9g8gkgyQgjgxAJgKQAJgJAnAaQAnAaA0AwQghg+gPgtQgQgtALgGQAKgGAgAkQAfAjAlA7QgQhEgDgvQgDgvAMgDQAMgEAVArQAUApAVBEQADhGAJguQAJgvALAAQAMAAAJAvQAJAuACBGQAVhDAVgqQAVgrAMAEQALADgDAvQgDAvgQBEQAmg7AfgjQAfgkALAGQAKAGgPAtQgPAtgiA+QA0gwAngaQAogaAIAJQAKAKgkAxQgkAyg8A8QgwAvgrAhQgqAhgWAIIAAI0g");
	this.shape_4.setTransform(199,115.8,0.445,0.445);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#658549").s().p("AksBQQANgtAlgcQAmgbAwAAQA4AAAqAlQAagqAsgbQAugbA2AAQBJAAA3AuQA3ArAPBGg");
	this.shape_5.setTransform(51.3,174,0.445,0.445);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(63.5,183.1,0.445,0.445,0,0,0,115.6,135.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#658549").s().p("AgOHpIAAo0QgWgIgqghQgrghgwgvQg8g8glgyQgkgxAKgKQAJgJAoAaQAmAaA1AwQgig+gPgtQgQgtALgGQALgGAfAkQAfAjAmA7QgQhEgDgvQgEgvAMgEQAMgDAVArQAVAqAUBDQADhGAJguQAKgvAKAAQAMAAAJAvQAJAuACBGQAWhDAUgqQAWgrALADQALAEgCAvQgEAvgPBEQAlg7AfgjQAggkAKAGQALAGgQAtQgPAtghA+QA0gwAmgaQAogaAIAJQALAKglAxQgjAyg9A8QgwAvgrAhQgqAhgWAIIAAI0g");
	this.shape_6.setTransform(73.4,170.4,0.445,0.445);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C0D541").s().p("AxdVOMAJdgkOQAuivCPhvQCQhvCzAAQC0AACQBvQCQBvAtCvMAJdAkOg");
	this.shape_7.setTransform(65.3,183,0.445,0.445);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.instance_1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(90));

	// Layer 26
	this.instance_2 = new lib.waterflower();
	this.instance_2.setTransform(135.1,243.7,0.445,0.445,0,0,0,0,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.1,regY:33.2,scaleY:0.7,y:243.6},8).to({regX:0,regY:33.4,scaleY:0.45,y:243.7},9).wait(1).to({regX:0.1,regY:33.2,scaleY:0.7,y:243.6},8).to({regX:0,regY:33.4,scaleY:0.45,y:243.7},9).wait(1).to({regX:0.1,regY:33.2,scaleY:0.7,y:243.6},8).to({regX:0,regY:33.4,scaleY:0.45,y:243.7},9).wait(1).to({regX:0.1,regY:33.2,scaleY:0.7,y:243.6},8).to({regX:0,regY:33.4,scaleY:0.45,y:243.7},9).wait(1).to({regX:0.1,regY:33.2,scaleY:0.7,y:243.6},8).to({regX:0,regY:33.4,scaleY:0.45,y:243.7},9).wait(1));

	// fallwaterMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhSSIMAAAgkPIClAAMAAAAkPg");
	mask.setTransform(132.4,127.5);

	// Layer 25
	this.instance_3 = new lib.fwS();
	this.instance_3.setTransform(133.4,17.9,0.445,0.042,0,0,0,0,65.5);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({regY:65,scaleY:0.98,y:187.2},20,cjs.Ease.get(-1)).to({x:134.4,y:307.5},5,cjs.Ease.get(1)).wait(33));

	// fallwater
	this.instance_4 = new lib.fwS();
	this.instance_4.setTransform(133.4,17.9,0.445,0.042,0,0,0,0,65.5);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).to({regY:65,scaleY:0.98,y:187.2},19,cjs.Ease.get(-1)).to({x:134.4,y:307.5},5,cjs.Ease.get(1)).to({_off:true},1).wait(28).to({_off:false,regY:65.5,scaleY:0.04,x:133.4,y:17.9},0).to({regY:65,scaleY:0.98,y:187.2},18).to({x:134.4,y:307.5},5).wait(1));

	// 瀑布
	this.instance_5 = new lib.ClipGroup_2();
	this.instance_5.setTransform(128.8,126.5,0.445,0.445,0,0,0,64.8,261.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#82BECE").s().p("EgC6AonMAAAhQsQBbghBfgBQBgABBbAhMAAABQsg");
	this.shape_8.setTransform(132.3,127.7,0.445,0.445);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1C5B33").s().p("EgRcAonMAJchIHQAqlFCTiNQB5h1DKAAQDLAAB5B1QCTCNAqFFMAJcBIHg");
	this.shape_9.setTransform(132.3,127.7,0.445,0.445);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.instance_5}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(142,142.4,236.8,248.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;