(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 290,
	height: 295,
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


(lib.leaf3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C5B33").s().p("AgsggQi4lBj4kCIgZgZIgHgHIABAAQg2hBgMhIQgMhKAlg6QAxhNBqgJQBrgJBlBBQArAbAgAkIAAAAIABABIACACQGKGtCqIrQB9GYgGG6IlfAqQAqnok3ogg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.7,-100,115.4,200.1);


(lib.leaf2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C5B33").s().p("Ag5gkQjikdkWjIIgcgUIgIgFIABgBQg+g0gXhJQgXhLAahHQAjhgBkgpQBkgoBrAmQAsAQAmAdIABABIACABQG8FSD7IcQC4GJBBHUIlJCTQgloQmAnkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.3,-97.7,138.6,195.4);


(lib.leaf1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C5B33").s().p("AhXgjQlXkbmDirQgUgHgTgJIgKgEIAAgBQhXgvguhSQgvhUAMhdQASh8BuhKQBuhLCKATQA6AIA0AZIAEACQJtEkG4JIQFCGqDGIiIllEFQi0pxpLnkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.7,-107.5,207.6,215);


(lib.leaf0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C5B33").s().p("AhcgWQl7jqmXh1QgUgEgUgHIgLgCIABgBQhdgjg5hLQg7hNABhdQgBh+BkhYQBihZCMAAQA6AAA3ARIAEACQKSDMIBIHQF5F6EPICIk+EzQkIpTqHmOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.8,-97.1,227.6,194.3);


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
(lib.waterFall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 山
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#658549").s().p("AgOHpIAAo0QgWgIgqggQgsgigvgvQg9g8gjgyQgkgxAJgKQAJgJAnAaQAnAaA0AwQghg+gPgtQgQgsALgHQAKgGAgAkQAfAjAlA8QgQhFgDgvQgDgvAMgDQAMgEAVArQAUApAVBEQADhGAJguQAJgvALAAQAMAAAJAvQAJAuACBGQAVhDAVgqQAVgrAMAEQALADgDAvQgDAvgQBFQAmg8AfgjQAfgkALAGQAKAHgPAsQgPAtgiA+QA0gwAngaQAogaAJAJQAKAKgkAxQgkAyg9A8QgwAvgrAiQgqAggWAIIAAI0g");
	this.shape.setTransform(108.7,269.9,0.512,0.512);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(229.6,209.4,0.512,0.512,0,0,0,111.8,135.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#658549").s().p("AksBQQANgtAlgcQAmgaAwAAQA5AAApAlQAagrAsgbQAugbA2AAQBIAAA4AuQA3ArAOBGg");
	this.shape_1.setTransform(236.3,164.2,0.512,0.512);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#658549").s().p("AgOHpIAAo0QgWgIgqggQgrgigwgvQg9g8gjgyQglgxAKgKQAJgJAnAaQAoAaAzAwQghg+gPgtQgQgsALgHQAKgGAgAkQAfAjAmA8QgQhFgDgvQgEgvAMgDQALgEAWArQAUAqAWBDQAChGAJguQAJgvALAAQALAAAKAvQAJAuACBGQAWhEAUgpQAVgrAMAEQAMADgEAvQgCAvgRBFQAmg8AfgjQAggkAKAGQALAHgQAsQgPAtghA+QAzgwAogaQAngaAIAJQALAKglAxQgjAyg9A8QgwAvgrAiQgqAggWAIIAAI0g");
	this.shape_2.setTransform(216.9,253.5,0.512,0.512);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C0D541").s().p("AxdVOMAJdgkOQAuivCPhvQCQhvCzAAQC0AACQBvQCQBvAtCvMAJdAkOg");
	this.shape_3.setTransform(229.5,208.8,0.512,0.512);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#658549").s().p("AgOHpIAAo0QgWgIgqghQgrghgwgvQg9g8gkgyQgjgxAJgKQAJgJAnAaQAnAaA0AwQghg+gPgtQgQgtALgGQAKgGAgAkQAfAjAlA7QgQhEgDgvQgDgvAMgDQAMgEAVArQAUApAVBEQADhGAJguQAJgvALAAQAMAAAJAvQAJAuACBGQAVhDAVgqQAVgrAMAEQALADgDAvQgDAvgQBEQAmg7AfgjQAfgkALAGQAKAGgPAtQgPAtgiA+QA0gwAngaQAogaAIAJQAKAKgkAxQgkAyg8A8QgwAvgrAhQgqAhgWAIIAAI0g");
	this.shape_4.setTransform(229.6,131.4,0.512,0.512);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#658549").s().p("AksBQQANgtAlgcQAmgbAwAAQA4AAAqAlQAagqAsgbQAugbA2AAQBJAAA3AuQA3ArAPBGg");
	this.shape_5.setTransform(59.7,198.4,0.512,0.512);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(73.8,208.9,0.512,0.512,0,0,0,115.7,135.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#658549").s().p("AgOHpIAAo0QgWgIgqghQgrghgwgvQg8g8glgyQgkgxAKgKQAJgJAoAaQAmAaA1AwQgig+gPgtQgQgtALgGQALgGAfAkQAfAjAmA7QgQhEgDgvQgEgvAMgEQAMgDAVArQAVAqAUBDQADhGAJguQAKgvAKAAQAMAAAJAvQAJAuACBGQAWhDAUgqQAWgrALADQALAEgCAvQgEAvgPBEQAlg7AfgjQAggkAKAGQALAGgQAtQgPAtghA+QA0gwAmgaQAogaAIAJQALAKglAxQgjAyg9A8QgwAvgrAhQgqAhgWAIIAAI0g");
	this.shape_6.setTransform(85.1,194.3,0.512,0.512);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C0D541").s().p("AxdVOMAJdgkOQAuivCPhvQCQhvCzAAQC0AACQBvQCQBvAtCvMAJdAkOg");
	this.shape_7.setTransform(75.8,208.8,0.512,0.512);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.instance_1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(90));

	// Layer 26
	this.instance_2 = new lib.waterflower();
	this.instance_2.setTransform(156.1,278.5,0.512,0.512,0,0,0,0,33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.1,scaleY:0.81,y:278.6},8).to({regX:0,scaleY:0.51,y:278.5},9).wait(1).to({regX:0.1,scaleY:0.81,y:278.6},8).to({regX:0,scaleY:0.51,y:278.5},9).wait(1).to({regX:0.1,scaleY:0.81,y:278.6},8).to({regX:0,scaleY:0.51,y:278.5},9).wait(1).to({regX:0.1,scaleY:0.81,y:278.6},8).to({regX:0,scaleY:0.51,y:278.5},9).wait(1).to({regX:0.1,scaleY:0.81,y:278.6},8).to({regX:0,scaleY:0.51,y:278.5},9).wait(1));

	// fallwaterMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhfU2MAAAgprIC/AAMAAAAprg");
	mask.setTransform(152.9,145);

	// Layer 25
	this.instance_3 = new lib.fwS();
	this.instance_3.setTransform(154.1,18.8,0.512,0.048,0,0,0,0,65.2);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({regY:65,scaleY:1.13,y:213.6},20,cjs.Ease.get(-1)).to({x:155.2,y:352},5,cjs.Ease.get(1)).wait(33));

	// fallwater
	this.instance_4 = new lib.fwS();
	this.instance_4.setTransform(154.1,18.8,0.512,0.048,0,0,0,0,65.2);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).to({regY:65,scaleY:1.13,y:213.6},19,cjs.Ease.get(-1)).to({x:155.2,y:352},5,cjs.Ease.get(1)).to({_off:true},1).wait(28).to({_off:false,regY:65.2,scaleY:0.05,x:154.1,y:18.8},0).to({regY:65,scaleY:1.13,y:213.6},18).to({x:155.2,y:352},5).wait(1));

	// 瀑布
	this.instance_5 = new lib.ClipGroup_2();
	this.instance_5.setTransform(148.9,143.8,0.512,0.512,0,0,0,64.9,261.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#82BECE").s().p("EgC6AonMAAAhQsQBbghBfgBQBgABBbAhMAAABQsg");
	this.shape_8.setTransform(152.9,145.2,0.512,0.512);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1C5B33").s().p("EgRcAonMAJchIHQAqlFCTiNQB5h1DKAAQDLAAB5B1QCTCNAqFFMAJcBIHg");
	this.shape_9.setTransform(152.9,145.2,0.512,0.512);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.instance_5}]}).wait(90));

	// leaf3
	this.instance_6 = new lib.leaf3();
	this.instance_6.setTransform(134.6,52.4,0.512,0.512,0,0,0,21.2,-11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:15,y:52.5},15).to({regX:21.3,regY:-11,rotation:-15},39).to({regX:21.4,rotation:-0.3},35).wait(1));

	// leaf2
	this.instance_7 = new lib.leaf2();
	this.instance_7.setTransform(126.1,97.7,0.512,0.512,0,0,0,47,51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:7.7,x:126,y:97.6},21).to({rotation:-7.7,y:97.7},50).to({rotation:-0.3,x:126.1},18).wait(1));

	// leaf1
	this.instance_8 = new lib.leaf1();
	this.instance_8.setTransform(122.6,137.8,0.512,0.512,0,0,0,71.5,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:13.2,x:122.5},40).to({rotation:0.3},49).wait(1));

	// leaf0
	this.instance_9 = new lib.leaf0();
	this.instance_9.setTransform(120,174.7,0.512,0.512,0,0,0,97.5,58.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:97.7,regY:58.7,rotation:-9.5,y:174.6},23).to({regX:97.5,regY:58.8,rotation:0,y:174.7},13).to({regX:97.6,rotation:9.7,y:174.6},12).to({regX:97.5,rotation:0,y:174.7},14).to({regX:97.7,regY:58.7,rotation:-9.5,y:174.6},18).to({regX:97.5,regY:58.8,rotation:-0.8,x:119.9},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(156.7,154.4,275.2,288.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;