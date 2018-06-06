(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 210,
	height: 234,
	fps: 18,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.turnS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7B53F").s().p("AjcBAQhbhZAAiCIJvAAQAACChcBZQhbBciBAAQiAAAhchcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.2,-15.6,62.5,31.3);


(lib.turnL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE8D85").s().p("Ao0VTQkNhwjQjRQjSjRhvkNQhvkNgBknIAAAAQABkmBvkNQBvkNDSjRQDQjRENhvQEOhwEmAAQEnAAEOBwQEMBvDSDRQDQDRBwENQBvENABEmIAAAAQgBEnhvENQhwENjQDRQjSDRkMBwQkOBvknAAQkmAAkOhvgABDVXQDxgMDehdQDXhbCtidInBnBIAJgIQhYBLhrAuQhpArhyALIADAAgAuVP2QCtCdDXBbQDdBdDxAMIAAp7IAEAAQhygLhpgrQhlgrhVhGgAKmEbQgqBlhGBUIHBHBQCcitBbjXQBdjdANjxIp8AAIAAgEQgKBygsBqgAztIRQBaDXCdCtIHCnBIAIAJQhMhXgthrQgshqgKhyIAAAEIp7AAQALDxBeDdgAKmkZQAsBpAKBxIAAgDIJ8AAQgNjxhdjeQhbjWiciuInBHBIgIgJQBLBZAtBrgAztoRQheDegLDxIJ7AAIAAADQAKhxAshpQAqhmBHhVInCnBQidCuhaDWgAEbqkQBrAsBYBMIgJgIIHBnBQitidjXhbQjehdjxgMIAAJ7IgDAAQByALBpAsgAoRztQjXBbitCdIHBHBQBVhGBlgqQBpgsBygLIgEAAIAAp7QjwAMjeBdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.5,-147.4,295,294.9);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9E0DD").s().p("AlFFGQiHiHAAi/QAAi+CHiHQCIiHC9AAQC/AACHCHQCHCHAAC+QAAC/iHCHQiHCHi/AAQi9AAiIiHg");
	this.shape.setTransform(46.2,46.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.3,92.4);


(lib.turnSit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turnS("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-89.2},89).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.2,-15.6,62.5,31.3);


(lib.turnAll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.turnSit();
	this.instance.setTransform(-98.2,-100.1);

	this.instance_1 = new lib.turnSit();
	this.instance_1.setTransform(-141.8,-0.9);

	this.instance_2 = new lib.turnSit();
	this.instance_2.setTransform(-101.2,98);

	this.instance_3 = new lib.turnSit();
	this.instance_3.setTransform(0.1,142.3);

	this.instance_4 = new lib.turnSit();
	this.instance_4.setTransform(101.3,98);

	this.instance_5 = new lib.turnSit();
	this.instance_5.setTransform(141.2,-0.9);

	this.instance_6 = new lib.turnSit();
	this.instance_6.setTransform(101.3,-100.1);

	this.instance_7 = new lib.turnSit();
	this.instance_7.setTransform(0.2,-141.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_8 = new lib.turnL();
	this.instance_8.setTransform(-0.3,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173,-157.3,345.5,315.3);


// stage content:
(lib.wheel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 摩天輪logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231916").s().p("AgWD5IgYgDIgigJIghgOIgfgTIgdgYIgBAAIAAgBIAAgBIgCgCIgBAAIgBgBIgBgBIgBgBIgBgBIAAAAIgQgSIgZgoIgRgsIgJguIAAguIAJgvIARgrIAMgVIAdglIAXgWIAdgVIAxgWIAugLIAigDIAhADIAMACIAiAJIARAGQAJADAHAFIAfASIAdAXIABABIAAABIABABIABAAIADAEIAAABIABAAIABABIABABIABAAIAPATQAHAIAHALIAVApIANAtQADANAAALQACAMgBAKQABAMgCAMQAAALgDAMIgNAtIgVAqIgdAlIgBABIgBABIgIAIIgdAXIgvAbIgiALIguAIgAi3B1IAQAWIAAAAIAAAAIABAAIAAABIABABIAAABIAAAAIAAAAIAXAXIAYASIANAHIAbANIAOAFIABAAIAAABIABAAIAAAAIACAAIAtAJIAIAAIAHAAIAHAAIAIAAIAtgJIABAAIAAAAIACAAIAAgBIABAAIAcgLIAmgXIAWgTIALgLIAAgBIABAAIAAAAIAAgBIABAAIAAAAIAAgBIABgBIAAgBIABAAIAAAAIAAAAIACgDIANgQIABgDIi3hKIgBAAgAAIjYIAAABIAAACIAcDAIAAAAIABABIAAAAIAAAAIAAABICcB4IAFgMIANgkIAGgoIABgNIgFgmIgEgUIgOgkIgJgRIgWgfIgBAAIAAAAIAAAAIAAgBIgjggIgbgQIgPgHIgPgGIgVgHIgqgFgAgbjXIgdAGIgPAFIgPAGIgcAOIgaATIgYAXIgWAfQgGAJgDAIIgIASIgGASIgEAUIgEATIAAAgIAGAoIADAMIAQAkICah4IABAAIAAgBIAAAAIAAgBIABAAIAbjAIAAgDIABAAg");
	this.shape.setTransform(104.6,100.9,0.576,0.576);

	this.instance = new lib.Path();
	this.instance.setTransform(104.8,101.3,0.576,0.576,0,0,0,46.2,46.1);
	this.instance.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(90));

	// 圖層 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhxBxQgvguAAhDQAAhBAvgwQAvgvBCAAQBDAAAuAvQAwAwAABBQAABDgwAuQguAwhDAAQhCAAgvgwg");
	this.shape_1.setTransform(104.7,100.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(90));

	// 摩天輪轉
	this.instance_1 = new lib.turnAll();
	this.instance_1.setTransform(104.8,101.4,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0.1,regY:-0.1,rotation:89.2,x:104.6,y:100.9},89).wait(1));

	// 摩天輪bg
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE8D85").s().p("AKMKHI0XAIIhOEZIjBg0IHi73ICmChIlRTZITIAAIlYzpICei2IHwccIjBA0g");
	this.shape_2.setTransform(104.4,180.1,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(110.1,127.8,199,223.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;