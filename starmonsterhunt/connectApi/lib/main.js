(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.waterflower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7F8F8").s().p("ApRCmIAAkFQAAgdAdgVQAdgUApAAQApAAAdAUQAdAVAAAdQAAAdAdAVQAdAUApAAQApAAAdgUQAdgVAAgdQAAgdAdgVQAdgUApAAQApAAAdAUQAcAVAAAdQAAAdAdAVQAdAUApAAQApAAAdgUQAdgVAAgdQAAgdAdgVQAdgUApAAQApAAAdAUQAdAVAAAdQAAAdAdAVQAdAUApAAQApAAAdgUQAcgUABgcIAAEDg");
	this.shape.setTransform(0,16.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.waterflower, new cjs.Rectangle(-59.4,0,118.8,33.2), null);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(6.1).p("EhR3gB2QBXAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBCg8QBBg7ApgWQBEglBXAAQBYAABEAlQApAWBCA7QBBA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBXAABEAlQApAWBBA7QBCA8ApAWQBEAlBYAAQBXAABEglQApgWBBg8QBCg7ApgWQBEglBYAAQBXAABEAlQApAWBCA7QBBA8ApAWQBEAlBXAAQBYAABEglQApgWBCg8QBBg7ApgWQBEglBXAAQBYAABEAlQApAWBCA7QBBA8ApAWQBEAlBYAAQBXAABEglQApgWBCg8QBBg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBYAAQBXAABEglQApgWBCg8QBBg7ApgWQBEglBYAAQBXAABEAlQApAWBBA7QBCA8ApAWQBEAlBYAAQBXAABEglQApgWBCg8QBBg7ApgWQBFglBXAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-527,-14.9,1054.1,30);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(6.1).p("EhR3gB2QBXAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBCg8QBBg7ApgWQBEglBXAAQBYAABEAlQApAWBCA7QBBA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBXAABEAlQApAWBBA7QBCA8ApAWQBEAlBYAAQBXAABEglQApgWBBg8QBCg7ApgWQBEglBYAAQBXAABEAlQApAWBCA7QBBA8ApAWQBEAlBXAAQBYAABEglQApgWBCg8QBBg7ApgWQBEglBXAAQBYAABEAlQApAWBCA7QBBA8ApAWQBEAlBYAAQBXAABEglQApgWBCg8QBBg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBYAAQBXAABEglQApgWBCg8QBBg7ApgWQBEglBYAAQBXAABEAlQApAWBBA7QBCA8ApAWQBEAlBYAAQBXAABEglQApgWBCg8QBBg7ApgWQBFglBXAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-527,-14.9,1054.1,30);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(6.1).p("EhR3gB2QBXAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBCg8QBBg7ApgWQBEglBXAAQBYAABEAlQApAWBCA7QBBA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBXAABEAlQApAWBBA7QBCA8ApAWQBEAlBYAAQBXAABEglQApgWBBg8QBCg7ApgWQBEglBYAAQBXAABEAlQApAWBCA7QBBA8ApAWQBEAlBXAAQBYAABEglQApgWBCg8QBBg7ApgWQBEglBXAAQBYAABEAlQApAWBCA7QBBA8ApAWQBEAlBYAAQBXAABEglQApgWBCg8QBBg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBYAAQBXAABEglQApgWBCg8QBBg7ApgWQBEglBYAAQBXAABEAlQApAWBBA7QBCA8ApAWQBEAlBYAAQBXAABEglQApgWBCg8QBBg7ApgWQBFglBXAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-527,-14.9,1054.1,30);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(6.1).p("EhR3gB2QBXAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBCg8QBBg7ApgWQBEglBXAAQBYAABEAlQApAWBCA7QBBA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBXAABEAlQApAWBBA7QBCA8ApAWQBEAlBYAAQBXAABEglQApgWBBg8QBCg7ApgWQBEglBYAAQBXAABEAlQApAWBCA7QBBA8ApAWQBEAlBXAAQBYAABEglQApgWBCg8QBBg7ApgWQBEglBXAAQBYAABEAlQApAWBCA7QBBA8ApAWQBEAlBYAAQBXAABEglQApgWBCg8QBBg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBYAAQBXAABEglQApgWBCg8QBBg7ApgWQBEglBYAAQBXAABEAlQApAWBBA7QBCA8ApAWQBEAlBYAAQBXAABEglQApgWBCg8QBBg7ApgWQBFglBXAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-527,-14.9,1054.1,30);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(6.1).p("EhR3gB2QBXAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBXAAQBYAABEglQApgWBCg8QBBg7ApgWQBEglBXAAQBYAABEAlQApAWBCA7QBBA8ApAWQBEAlBXAAQBYAABEglQApgWBBg8QBCg7ApgWQBEglBXAAQBXAABEAlQApAWBBA7QBCA8ApAWQBEAlBYAAQBXAABEglQApgWBBg8QBCg7ApgWQBEglBYAAQBXAABEAlQApAWBCA7QBBA8ApAWQBEAlBXAAQBYAABEglQApgWBCg8QBBg7ApgWQBEglBXAAQBYAABEAlQApAWBCA7QBBA8ApAWQBEAlBYAAQBXAABEglQApgWBCg8QBBg7ApgWQBEglBXAAQBYAABEAlQApAWBBA7QBCA8ApAWQBEAlBYAAQBXAABEglQApgWBCg8QBBg7ApgWQBEglBYAAQBXAABEAlQApAWBBA7QBCA8ApAWQBEAlBYAAQBXAABEglQApgWBCg8QBBg7ApgWQBFglBXAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-527,-14.9,1054.1,30);


(lib.turnS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7B53F").s().p("AjcBBQhbhbAAiBIJvAAQAACBhbBbQhcBbiBAAQiBAAhbhbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.2,-15.6,62.5,31.3);


(lib.turnL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE8D85").s().p("Ao0VTQkNhwjRjQQjRjShvkMQhwkNAAknIAAgBQAAknBwkNQBvkNDRjRQDRjQENhwQENhvEngBQEoABENBvQENBwDRDQQDRDRBwENQBvENAAEnIAAABQAAEnhvENQhwEMjRDSQjRDQkNBwQkNBwkoAAQknAAkNhwgABEVYQDxgMDdheQDYhbCsicInAnBIAJgIQhZBLhqAtQhqAshxAKIADAAgAuWP3QCuCcDWBbQDeBeDxAMIAAp8IADAAQhxgKhpgsQhmgqhVhGgAKnEbQgrBlhGBVIHBHBQCditBbjXQBdjdAMjyIp7AAIAAgDQgLBygrBpgAzuISQBbDXCdCtIHBnBIAIAJQhMhYgshrQgshpgLhyIAAADIp7AAQAMDyBdDdgAKnkaQArBpALByIAAgEIJ7AAQgMjxhdjdQhbjXiditInBHBIgIgJQBLBYAuBrgAzuoRQhdDdgMDxIJ7AAIAAAEQALhyAshpQAqhlBGhVInBnBQidCthbDXgAEcqlQBqAtBZBMIgJgIIHAnCQitidjXhaQjdhdjxgMIAAJ7IgDAAQBxAKBqAsgAoSztQjWBaiuCdIHBHCQBVhHBmgqQBogsBygKIgDAAIAAp7QjxAMjeBdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.turnL, new cjs.Rectangle(-147.5,-147.4,295,294.9), null);


(lib.leaf3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C5B33").s().p("AgtghQi4lBj4kBIgYgaIgHgHIAAAAQg1hAgMhJQgMhKAkg5QAxhNBrgJQBrgJBlBBQArAbAgAkIAAgBIABABIABACQGLGuCqIsQB9GYgFG5IlfAqQAqnok5ohg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaf3, new cjs.Rectangle(-57.7,-100,115.4,200.1), null);


(lib.leaf2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C5B33").s().p("Ag5glQjikckXjJIgcgTIgHgFIAAgBQg9g0gXhJQgXhLAZhIQAjhgBkgoQBlgpBrAnQArAPAmAeIABAAIACACQG9FSD7IbQC4GKBBHVIlICTQgmoRmAnlg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaf2, new cjs.Rectangle(-69.3,-97.7,138.6,195.4), null);


(lib.leaf1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C5B33").s().p("AhXgjQlXkbmEirQgUgHgSgKIgLgEIABgBQhYgvguhSQgvhUANhcQARh8BuhLQBuhKCLATQA5AIA0AZIAEABQJuElG4JHQFDGrDGIjIllEFQi1pypLnkg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaf1, new cjs.Rectangle(-103.7,-107.5,207.6,215), null);


(lib.leaf0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C5B33").s().p("AhdgXQl6jqmXh0QgVgFgUgGIgLgDIABgBQhdgig4hLQg7hNAAheQAAh9BjhZQBihYCNAAQA5AAA3ARIAFABQKRDNIDIGQF5F7EPICIk+EzQkIpSqJmQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaf0, new cjs.Rectangle(-113.8,-97.1,227.6,194.3), null);


(lib.fwS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAPAAAMALQALALAAAPQAAAQgLALQgLALgQAAQgPAAgLgLg");
	this.shape.setTransform(0,130.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(8,1,1).p("AAAIuIAAxb");
	this.shape_1.setTransform(0,55.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fwS, new cjs.Rectangle(-3.9,-3.9,7.9,138), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnJJWIAAyrIOTAAIAASrg");
	mask.setTransform(72.5,59.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7F8F8").s().p("AHwBPQgVgWAAgdQAAgNgJgJQgJgHgNgBQgMABgJAHQgJAJAAANQAAAdgUAWQgWAVgeAAQgdAAgWgVQgUgWgBgdQABgNgKgJQgIgHgMgBQgNABgJAHQgJAJAAANQAAAdgVAWQgVAVgeAAQgeAAgUgVQgWgWAAgdQAAgNgJgJQgJgHgMgBQgMABgJAHQgJAJAAANQAAAdgUAWQgWAVgdAAQgeAAgVgVQgVgWAAgdQAAgNgJgJQgIgHgNgBQgMABgKAHQgJAJABANQgBAdgUAWQgWAVgdAAQgeAAgVgVQgVgWAAgdQAAgNgJgJQgJgHgMgBQgNABgJAHQgIAJgBANQABAdgVAWQgWAVgeAAQgdAAgVgVQgVgWAAgdQAAgNgJgJQgJgHgNgBQgMABgJAHQgJAJAAANQAAAJgGAFQgGAHgJgBQgIABgGgHQgHgFAAgJQABgdAUgVQAWgVAdAAIAAg4ITIAAIAABNIgzAAIAAAdQAJAAAGAGQAHAHAAAIQAAAdgWAWQgVAVgdAAQgeAAgVgVg");
	this.shape.setTransform(64.9,10);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(26.8,0,91.6,20), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9E0DD").s().p("AlGFHQiHiHAAjAQAAi+CHiHQCIiIC+AAQC/AACICIQCHCHAAC+QAADAiHCHQiHCHjAAAQi+AAiIiHg");
	this.shape.setTransform(46.2,46.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,92.3,92.4), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxdVOMAJcgkOQAviwCOhuQCQhvC0AAQC1AACPBvQCQBuAtCwMAJdAkOg");
	mask.setTransform(119.6,135.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C89F67").s().p("Aq5H/IAAv9IMlAAQBHAAAyAzQAxAxAABGQAABHgxAyQgyAyhHAAIiEAAQhGAAgyAyQgyAyAABFQAABHAyAxQAyAyBGAAIIoAAQBHAAAyAyQAxAyAABHQAABGgxAyQgyAxhHABg");
	this.shape.setTransform(69.8,190.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(7.8,139.3,131.9,102.1), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxdVOMAJdgkOQAtivCQhvQCPhvC0AAQC1AACQBvQCPBvAuCvMAJcAkOg");
	mask.setTransform(111.8,135.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C89F67").s().p("AhrH+QhGAAgzgxQgygyAAhHQAAhGAygyQAzgyBGABICEAAQBGAAAzgzQAxgyAAhGQAAhGgxgxQgzgyhGAAIooAAQhGAAgygyQgygxAAhHQAAhHAygyQAygxBGAAITJAAIAAP7g");
	this.shape.setTransform(144.8,128.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(75,77.3,139.6,102.1), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2BA440").s().p("AlrMaQh1AAhThNQhThOAAhtQAAhuBThOQBThNB1AAIJEAAQB1AABThOQBShNAAhuQAAhthShNQhThOh1AAIuVAAQh1AAhThNQhThOAAhtQAAhuBThOQBThNB1AAIaUAAIAAYzg");
	this.shape.setTransform(98.4,79.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,196.8,158.9), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#136195").s().p("A4DeqMAAAgkuIOjAAIAA4lIbbAAQCiAAB0BzQByByABCjQgBCjhyByQh0BziiAAIh2AAQgiAFgeAAIsnAAQihAAh0B0QhyBygBCjQABCiByByQB0B0ChgBIJXAKQCiAABzBzQBzByAACiQAACjhzByQhzBziiAAI34gKQijAAhzBzQhzByAACjQAACiBzBzQB0ByCiAAINhAAQCiABBzByQBzBzAACjQAACihzBzQhzByiiAAg");
	this.shape.setTransform(348.8,353.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#136195").s().p("EgRHAq7MAAAhV1MAiPAAAMAAABV1g");
	this.shape_1.setTransform(109.6,274.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#136195").s().p("AtuHmIAAvLIbdAAIAAPLg");
	this.shape_2.setTransform(206.2,278.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#136195").s().p("AlraVMAAAg0pILXAAMAAAA0pg");
	this.shape_3.setTransform(206.2,168.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#136195").s().p("Av0SXMAAAgkuIYlAAQCjAABzB0QBzByAACiQAACihzBzQhzBzijAAIslAAQijAAhzBzQhzBzAAChQAACiBzBzQBzBzCjAAINgAAQCjAABzBzQBzBzAACiQAACihzByQhzB0ijgBg");
	this.shape_4.setTransform(320.5,117.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(0,0,502.7,549.4), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(6.7).p("EhZIgCBQBfAABLApQAsAYBIBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgpBfAAQBfAABLApQAsAYBIBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgpBfAAQBfAABLApQAsAYBIBAQBHBBAsAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBLgpBfAAQBfAABKApQAtAYBHBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBLgpBfAAQBfAABKApQAtAYBHBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgpBfAAQBeAABLApQAsAYBIBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgpBfAAQBfAABLApQAsAYBIBAQBIBBAsAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAtgYQBKgpBfAAQBfAABKApQAsAYBIBAQBHBBAtAYQBKApBfAAQBfAABLgpQAsgYBIhBQBHhAAsgYQBLgpBfAAQBfAABKApQAtAYBHBAQBHBBAtAYQBKApBfAAQBfAABLgpQAsgYBHhBQBIhAAsgYQBKgpBfAAQBfAABLApQAtAYBHBAQBIBBAsAYQBKApBfAAQBfAABKgpQAtgYBIhBQBHhAAtgYQBKgpBfAA");
	this.shape.setTransform(570.5,283.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(6.7).p("EhZIgCAQBfAABLAoQAsAZBIA/QBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgoBfAAQBfAABLAoQAsAZBIA/QBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgoBfAAQBfAABLAoQAsAZBIA/QBHBBAsAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIg/AsgZQBLgoBfAAQBfAABKAoQAtAZBHA/QBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIg/AsgZQBLgoBfAAQBfAABKAoQAtAZBHA/QBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgoBfAAQBeAABLAoQAsAZBIA/QBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgoBfAAQBfAABLAoQAsAZBIA/QBIBBAsAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAtgYQBKgoBfAAQBfAABKAoQAsAZBIA/QBHBBAtAYQBKApBfAAQBfAABLgpQAsgYBIhBQBHhAAsgYQBLgoBfAAQBfAABKAoQAtAZBHA/QBHBBAtAYQBKApBfAAQBfAABLgpQAsgYBHhBQBIhAAsgYQBKgoBfAAQBfAABLAoQAtAZBHA/QBIBBAsAYQBKApBfAAQBfAABKgpQAtgYBIhBQBHhAAtgYQBKgoBfAA");
	this.shape_1.setTransform(570.5,216.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(6.7).p("EhZIgCBQBfAABLApQAsAYBIBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgpBfAAQBfAABLApQAsAYBIBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgpBfAAQBfAABLApQAsAYBIBAQBHBBAsAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBLgpBfAAQBfAABKApQAtAYBHBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBLgpBfAAQBfAABKApQAtAYBHBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgpBfAAQBeAABLApQAsAYBIBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgpBfAAQBfAABLApQAsAYBIBAQBIBBAsAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAtgYQBKgpBfAAQBfAABKApQAsAYBIBAQBHBBAtAYQBKApBfAAQBfAABLgpQAsgYBIhBQBHhAAsgYQBLgpBfAAQBfAABKApQAtAYBHBAQBHBBAtAYQBKApBfAAQBfAABLgpQAsgYBHhBQBIhAAsgYQBKgpBfAAQBfAABLApQAtAYBHBAQBIBBAsAYQBKApBfAAQBfAABKgpQAtgYBIhBQBHhAAtgYQBKgpBfAA");
	this.shape_2.setTransform(570.5,149.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(6.7).p("EhZIgCBQBfAABLApQAsAYBIBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgpBfAAQBfAABLApQAsAYBIBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgpBfAAQBfAABLApQAsAYBIBAQBHBBAsAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBLgpBfAAQBfAABKApQAtAYBHBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBLgpBfAAQBfAABKApQAtAYBHBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgpBfAAQBeAABLApQAsAYBIBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgpBfAAQBfAABLApQAsAYBIBAQBIBBAsAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAtgYQBKgpBfAAQBfAABKApQAsAYBIBAQBHBBAtAYQBKApBfAAQBfAABLgpQAsgYBIhBQBHhAAsgYQBLgpBfAAQBfAABKApQAtAYBHBAQBHBBAtAYQBKApBfAAQBfAABLgpQAsgYBHhBQBIhAAsgYQBKgpBfAAQBfAABLApQAtAYBHBAQBIBBAsAYQBKApBfAAQBfAABKgpQAtgYBIhBQBHhAAtgYQBKgpBfAA");
	this.shape_3.setTransform(570.5,83);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(6.7).p("EhZIgCBQBfAABLApQAsAYBIBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgpBfAAQBfAABLApQAsAYBIBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgpBfAAQBfAABLApQAsAYBIBAQBHBBAsAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBLgpBfAAQBfAABKApQAtAYBHBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBLgpBfAAQBfAABKApQAtAYBHBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgpBfAAQBeAABLApQAsAYBIBAQBHBBAtAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAsgYQBKgpBfAAQBfAABLApQAsAYBIBAQBIBBAsAYQBKApBfAAQBfAABKgpQAtgYBHhBQBIhAAtgYQBKgpBfAAQBfAABKApQAsAYBIBAQBHBBAtAYQBKApBfAAQBfAABLgpQAsgYBIhBQBHhAAsgYQBLgpBfAAQBfAABKApQAtAYBHBAQBHBBAtAYQBKApBfAAQBfAABLgpQAsgYBHhBQBIhAAsgYQBKgpBfAAQBfAABLApQAtAYBHBAQBIBBAsAYQBKApBfAAQBfAABKgpQAtgYBIhBQBHhAAtgYQBKgpBfAA");
	this.shape_4.setTransform(570.5,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(-3.3,-11.3,1147.5,322.2), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxlCNIAAkZMAg+AAAQA6AAAqApQApApAAA6QAAA6gpAqQgqApg6AAg");
	mask.setTransform(129.8,34.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F3B3A").s().p("Aj8j8ICghdIFZJXIigBcg");
	this.shape.setTransform(25.3,34.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F3B3A").s().p("Aj8j8ICghdIFZJXIigBcg");
	this.shape_1.setTransform(63.9,34.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F3B3A").s().p("Aj8j8ICghdIFZJXIigBcg");
	this.shape_2.setTransform(102.4,34.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F3B3A").s().p("Aj8j8ICghdIFZJXIigBcg");
	this.shape_3.setTransform(140.9,34.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F3B3A").s().p("Aj8j8ICfhdIFaJXIigBcg");
	this.shape_4.setTransform(179.5,34.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F3B3A").s().p("Aj8j8ICghdIFZJXIigBcg");
	this.shape_5.setTransform(218,34.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(17.1,20.5,225.3,28.3), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqhNvIAA7dIVDAAIAAbdg");
	mask.setTransform(84.1,87.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1C8C3").s().p("Au5CTIAAhxIBLAAIAAgsQgNAAgJgJQgJgIAAgNQAAgsAfgfQAfgfAsAAQArAAAfAfQAgAfAAAsQgBASANANQANAMATAAQATAAAMgMQANgNABgSQAAgsAegfQAggfAsAAQArAAAfAfQAfAfAAAsQAAASANANQANAMASAAQATAAANgMQANgNAAgSQAAgsAfgfQAfgfAsAAQAsAAAeAfQAgAfAAAsQAAASAMANQAOAMASAAQASAAANgMQAOgNAAgSQAAgsAegfQAegfAsAAQAsAAAfAfQAfAfAAAsQAAASANANQANAMATAAQASAAANgMQANgNAAgSQAAgsAfgfQAfgfAsAAQArAAAfAfQAfAfAAAsQAAASAOANQANAMASAAQASAAAOgMQAMgNAAgSQAAgsAggfQAfgfArAAQAsAAAfAfQAfAfAAAsQAAASANANQANAMATAAQASAAANgMQANgNAAgSQAAgNAJgJQAJgJAMAAQANAAAJAJQAJAJAAANQAAArgfAfQgfAfgrAAIAABSg");
	this.shape.setTransform(95.4,161.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(16.8,146.5,134.7,29.4), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApOH3IAAvtISdAAIAAPtg");
	mask.setTransform(174.9,321.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1C8C3").s().p("A80EcIAAjbICRAAIAAhUQgYAAgRgSQgSgRAAgZQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAAAkAZAZQAZAYAkABQAjgBAagYQAZgZAAgkQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAAAkAZAZQAZAYAkABQAjgBAagYQAZgZAAgkQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAAAkAZAZQAZAYAkABQAjgBAagYQAZgZAAgkQAAhUA7g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAAAkAZAZQAZAYAkABQAjgBAagYQAZgZAAgkQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAAAkAZAZQAZAYAkABQAjgBAagYQAZgZAAgkQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAAAkAZAZQAZAYAkABQAjgBAagYQAZgZAAgkQAAgYARgRQARgSAZAAQAYAAASASQARAQAAAZQAABUg8A7Qg8A9hUAAIAACfgAFPBBIgBgBIAAABIABAAgAj1BBIgBgBIAAABIABAAgAs6BBIgBgBIAAABIABAAgAxgBBIACAAIAAgBg");
	this.shape.setTransform(184.5,311.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(115.8,283.2,118.2,56.8), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgmNAgkMAAAhBGMBMbAAAMAAABBGg");
	mask_1.setTransform(723.8,1331.9);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#337F3D").s().p("Eh3TASXIAAuIIJXAAIAAljQhlAAhIhIQhIhHAAhmQAAisBDicQBAiYB2h1QB1h2CXhAQCehDCrAAQCsAACdBDQCYBAB1B2QB1B0BBCZQBCCcAACsQAACUBpBoQBoBoCUAAQCTAABphoQBohoAAiUQAAisBDicQBAiYB1h1QB2h2CXhAQCdhDCsAAQCsAACdBDQCYBAB1B2QB1B1BACYQBDCcAACsQAACUBoBoQBpBoCTAAQCUAABohoQBphoAAiUQAAisBDicQBAiYB1h1QB1h2CYhAQCdhDCrAAQCsAACdBDQCYBAB1B2QB1B0BBCZQBCCcAACsQAACUBpBoQBoBoCUAAQCTAABphoQBohoAAiUQAAisBDicQA/iYB1h1QB1h2CYhAQCdhDCsAAQCsAACdBDQCYBAB1B2QB1B0BACZQBDCcAACsQAACUBoBoQBpBoCTAAQCUAABohoQBphoAAiUQAAisBCicQBBiYB1h1QB1h2CYhAQCdhDCsAAQCrAACeBDQCXBAB2B2QB1B1BACYQBDCcAACsQAACUBoBoQBpBoCTAAQCUAABohoQBphoAAiUQAAisBCicQBBiYB1h1QB1h2CYhAQCdhDCrAAQCsAACdBDQCYBAB1B2QB1B0BBCZQBCCcAACsQAACUBpBoQBoBoCUAAQCTAABphoQBohoAAiUQAAhlBIhIQBIhHBlgBQBlABBIBHQBIBIAABlQAACshDCdQhACXh1B2Qh1B1iYBAQidBCisAAIAAKTgEBg0AEPIgHgHIAAAHIAHAAgEBNzAEPIAHAAIAAgHgEA7PAEPIgHgHIAAAHIAHAAgEAoPAEPIAHAAIAAgHgAVqEPIgHgHIAAAHIAHAAgACqEPIAHAAIAAgHgAv6EPIgHgHIAAAHIAHAAgEgi5AEPIAHAAIAAgHgEg1eAEPIgHgHIAAAHIAHAAgEhIeAEPIAHAAIAAgHgEhbCAEPIgHgHIAAAHIAHAAg");
	this.shape_1.setTransform(763.6,1289.6);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(479.2,1172,489.2,235.1), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Al2FjQg1AAglgmQglgkAAg1IAAnHQAAg1AlgkQAlgmA1ABILuAAQA0gBAlAmQAlAkAAA1IAAHHQAAA1glAkQglAmg0AAg");
	mask_1.setTransform(67,65);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DCDDDD").p("AMFAAI4JAA");
	this.shape_1.setTransform(77.3,109.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DCDDDD").p("AMFAAI4JAA");
	this.shape_2.setTransform(77.3,102.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DCDDDD").p("AMFAAI4JAA");
	this.shape_3.setTransform(77.3,95.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#DCDDDD").p("AMFAAI4JAA");
	this.shape_4.setTransform(77.3,88.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#DCDDDD").p("AMFAAI4JAA");
	this.shape_5.setTransform(77.3,82);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#DCDDDD").p("AMFAAI4JAA");
	this.shape_6.setTransform(77.3,75.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#DCDDDD").p("AMFAAI4JAA");
	this.shape_7.setTransform(77.3,68.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#DCDDDD").p("AMFAAI4JAA");
	this.shape_8.setTransform(77.3,61.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#DCDDDD").p("AMFAAI4JAA");
	this.shape_9.setTransform(77.3,54.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#DCDDDD").p("AMFAAI4JAA");
	this.shape_10.setTransform(77.3,48);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#DCDDDD").p("AMFAAI4JAA");
	this.shape_11.setTransform(77.3,41.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#DCDDDD").p("AMFAAI4JAA");
	this.shape_12.setTransform(77.3,34.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#DCDDDD").p("AMFAAI4JAA");
	this.shape_13.setTransform(77.3,27.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#DCDDDD").p("AMFAAI4JAA");
	this.shape_14.setTransform(77.3,20.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#DCDDDD").p("AAAsEIAAYJ");
	this.shape_15.setTransform(111.3,77.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#DCDDDD").p("AAAsEIAAYJ");
	this.shape_16.setTransform(104.5,77.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#DCDDDD").p("AAAsEIAAYJ");
	this.shape_17.setTransform(97.7,77.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#DCDDDD").p("AAAsEIAAYJ");
	this.shape_18.setTransform(90.9,77.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#DCDDDD").p("AAAsEIAAYJ");
	this.shape_19.setTransform(84.1,77.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#DCDDDD").p("AAAsEIAAYJ");
	this.shape_20.setTransform(77.3,77.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#DCDDDD").p("AAAsEIAAYJ");
	this.shape_21.setTransform(70.5,77.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#DCDDDD").p("AAAsEIAAYJ");
	this.shape_22.setTransform(63.7,77.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#DCDDDD").p("AAAsEIAAYJ");
	this.shape_23.setTransform(56.9,77.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#DCDDDD").p("AAAsEIAAYJ");
	this.shape_24.setTransform(50,77.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#DCDDDD").p("AAAsEIAAYJ");
	this.shape_25.setTransform(43.2,77.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#DCDDDD").p("AAAsEIAAYJ");
	this.shape_26.setTransform(36.4,77.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#DCDDDD").p("AAAsEIAAYJ");
	this.shape_27.setTransform(29.6,77.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#DCDDDD").p("AAAsEIAAYJ");
	this.shape_28.setTransform(22.8,77.3);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(16.8,29.5,100.5,70.9), null);


(lib.ClipGroup_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnDeIjnm7IOeAAIjpG7g");
	mask.setTransform(49.1,32.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape.setTransform(95.4,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_1.setTransform(83.8,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_2.setTransform(72.2,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_3.setTransform(60.6,29.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_4.setTransform(49,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_5.setTransform(37.4,29.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_6.setTransform(25.9,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_7.setTransform(14.3,29.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_8.setTransform(2.7,29.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_1, new cjs.Rectangle(2.7,10.6,92.7,44.3), null);


(lib.ClipGroup_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Am0VYMAGlgrJICkAAMAEfArjg");
	mask_1.setTransform(43.7,139.4);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0E5E80").s().p("AgwIyIAAxjIBhAAIAARjg");
	this.shape_1.setTransform(87.6,56.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0E5E80").s().p("AgvIyIAAxjIBfAAIAARjg");
	this.shape_2.setTransform(72.1,56.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0E5E80").s().p("AgwIyIAAxjIBhAAIAARjg");
	this.shape_3.setTransform(56.5,56.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0E5E80").s().p("AgwIyIAAxjIBhAAIAARjg");
	this.shape_4.setTransform(40.9,56.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0E5E80").s().p("AgwIyIAAxjIBhAAIAARjg");
	this.shape_5.setTransform(25.3,56.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0E5E80").s().p("AgwIyIAAxjIBhAAIAARjg");
	this.shape_6.setTransform(9.7,56.2);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3_1, new cjs.Rectangle(4.8,0,82.5,112.4), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjnDeIjnm7IOeAAIjpG7g");
	mask_1.setTransform(49.1,32.7);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_1.setTransform(95.4,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_2.setTransform(83.8,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_3.setTransform(72.2,29.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_4.setTransform(60.6,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_5.setTransform(49,29.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_6.setTransform(37.4,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_7.setTransform(25.9,29.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_8.setTransform(14.3,29.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_9.setTransform(2.7,29.5);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(2.7,10.6,92.7,44.3), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AjnDeIjnm7IOeAAIjpG7g");
	mask_1.setTransform(49.1,32.7);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_1.setTransform(95.4,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_2.setTransform(83.8,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_3.setTransform(72.2,29.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_4.setTransform(60.6,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_5.setTransform(49,29.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_6.setTransform(37.4,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_7.setTransform(25.9,29.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_8.setTransform(14.3,29.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1F5670").s().p("AgaEnIAApNIA1AAIAAJNg");
	this.shape_9.setTransform(2.7,29.5);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(2.7,10.6,92.7,44.3), null);


(lib.ClipGroup_0_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AmDgxIDLAAIBPpyICWhLIBCpTICfhSIAAydIFvHIMAAABJrIz5Aug");
	mask_2.setTransform(143,271.3);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6FB8C2").s().p("Ak0eGMAAAg8LIJpAAMAAAA8Lg");
	this.shape_2.setTransform(225.3,192.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6FB8C2").s().p("AxcEHIAAoNMAi5AAAIAAINg");
	this.shape_3.setTransform(154.9,462.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6FB8C2").s().p("AzXBeIAAi7MAmuAAAIAAC7g");
	this.shape_4.setTransform(124,412.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6FB8C2").s().p("Ak9pgILwMSItlGvg");
	this.shape_5.setTransform(128.7,324.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6FB8C2").s().p("Ak9pgILwMSItlGvg");
	this.shape_6.setTransform(137.4,233.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6FB8C2").s().p("Ak9pgILwMSItlGvg");
	this.shape_7.setTransform(145.9,144.2);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_2, new cjs.Rectangle(79.3,10.4,127.5,478.5), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AwkOkQAAgggUglIgog+QgyhLAig9QAmhCGnhjQDig1FjhLQCTglCwh8QCPhkBRheQA5hBCVkJQB4jVAtheQBDiIAdgtQBQiCA/AAQA9AAATBAQAKAfgDAgIAAY0QAABWgoAnQgMAMgPAHIgNAEg");
	mask_2.setTransform(115.2,93.2);

	// Layer 3
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#30ADCD").s().p("AgvA7IAAh1IBfAAIAAB1g");
	this.shape_29.setTransform(194.2,46.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#30ADCD").s().p("AgvA7IAAh1IBfAAIAAB1g");
	this.shape_30.setTransform(212.8,158.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#30ADCD").s().p("AgvA7IAAh1IBfAAIAAB1g");
	this.shape_31.setTransform(13.2,156.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#30ADCD").s().p("AgvA7IAAh1IBfAAIAAB1g");
	this.shape_32.setTransform(208,84.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#30ADCD").s().p("AgvA7IAAh1IBfAAIAAB1g");
	this.shape_33.setTransform(115.1,158.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#30ADCD").s().p("AgvA7IAAh0IBgAAIAAB0g");
	this.shape_34.setTransform(40.8,169.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#30ADCD").s().p("AgvA7IAAh1IBfAAIAAB1g");
	this.shape_35.setTransform(170.7,96.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#30ADCD").s().p("AgwA6IAAh0IBgAAIAAB0g");
	this.shape_36.setTransform(97.9,146.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#30ADCD").s().p("AgvA7IAAh1IBgAAIAAB1g");
	this.shape_37.setTransform(173.1,175.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#30ADCD").s().p("AgvA7IAAh1IBfAAIAAB1g");
	this.shape_38.setTransform(187.6,175.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#30ADCD").s().p("AgvA7IAAh1IBfAAIAAB1g");
	this.shape_39.setTransform(161.1,128.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#30ADCD").s().p("AgvA6IAAhzIBfAAIAABzg");
	this.shape_40.setTransform(182.7,110.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#30ADCD").s().p("AgvA6IAAh0IBfAAIAAB0g");
	this.shape_41.setTransform(82.8,146.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#30ADCD").s().p("AgvA7IAAh1IBfAAIAAB1g");
	this.shape_42.setTransform(194.2,96.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#30ADCD").s().p("AgvA7IAAh1IBfAAIAAB1g");
	this.shape_43.setTransform(208,57.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#30ADCD").s().p("AgvA7IAAh1IBfAAIAAB1g");
	this.shape_44.setTransform(220.3,71);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#30ADCD").s().p("AgvA7IAAh1IBfAAIAAB1g");
	this.shape_45.setTransform(220.3,46.1);

	var maskedShapeInstanceList = [this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(8.4,40.3,216.8,141.3), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AtUHBIAAmEQABjSCViWQCViVDTABIKtAAQDTgBCWCVQCUCWAADSIAAGEg");
	mask_3.setTransform(85.3,91.1);

	// Layer 3
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#973428").s().p("AgdN+IAA77IA7AAIAAb7g");
	this.shape_46.setTransform(159.7,89.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#973428").s().p("AgdN+IAA77IA8AAIAAb7g");
	this.shape_47.setTransform(141.1,89.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#973428").s().p("AgeN+IAA77IA9AAIAAb7g");
	this.shape_48.setTransform(122.5,89.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#973428").s().p("AgeN+IAA77IA9AAIAAb7g");
	this.shape_49.setTransform(103.9,89.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#973428").s().p("AgeN+IAA77IA8AAIAAb7g");
	this.shape_50.setTransform(85.3,89.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#973428").s().p("AgeN+IAA77IA9AAIAAb7g");
	this.shape_51.setTransform(66.6,89.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#973428").s().p("AgeN+IAA77IA9AAIAAb7g");
	this.shape_52.setTransform(48,89.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#973428").s().p("AgdN+IAA77IA8AAIAAb7g");
	this.shape_53.setTransform(29.4,89.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#973428").s().p("AgeN+IAA77IA9AAIAAb7g");
	this.shape_54.setTransform(10.8,89.4);

	var maskedShapeInstanceList = [this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(7.8,46.3,155,89.7), null);


(lib.cloud3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egi5AcxQj+AAi0i0Qi0i0AAj+QAAj+C0i0QCzizD/AAIMyAAQD/gBCzizQC0izAAj/QAAj9i0i0Qizi0j/AAMgjLAAAQj+ABi0i1QizizAAj/QAAj+CzizQC0i0D+AAMBykAAAQD/AACzC0QC0CzAAD+QAAD/i0CzQizC1j/gBMghAAAAQj+AAi0C0QizC0AAD9QAAD/CzCzQC0CzD+ABIIRAAQD/AACzCzQC0C0AAD+QAAD+i0C0Qi0C0j+AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud3, new cjs.Rectangle(-428,-184.1,856.1,368.2), null);


(lib.cloud2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egi6AcxQj+AAizi0Qi0i0AAj+QAAj+C0i0QCzizD+AAIMzAAQD+AAC0i0QC0i0AAj+QAAj9i0i0Qizi0j/AAMgjLAAAQj+AAi0i0QizizAAj/QAAj+Czi0QC0izD+AAMBykAAAQD/AACzCzQC0C0AAD+QAAD/i0CzQizC0j/AAMghAAAAQj+AAi0C0QizC0AAD9QAAD+CzC0QC0C0D+AAIIRAAQD/AACzCzQC0C0AAD+QAAD/i0CzQi0C0j+AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud2, new cjs.Rectangle(-428,-184.1,856.1,368.3), null);


(lib.cloud1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7ECAD3").s().p("EgamA0TQjGAAiMiLQiMiMAAjHQAAjFCMiMQCMiMDGAAIPVAAQDGAACMiLQCLiMAAjHQAAjFiLiMQiMiMjGAAIwdAAQgXAAgdgDMg1gAAAQjFABiMiNQiMiLAAjGQAAjGCMiMQCMiLDFAAICRAAQAsgIAhAAMA2RAAAQDGAACMiLQCMiMAAjFQAAjGiMiLQiMiNjGAAIrYgLQjGAAiLiMQiMiMAAjFQAAjHCMiLQCLiMDGAAIdDAMQDGAACMiMQCLiLAAjGQAAjGiLiMQiMiMjGAAMg3BAAAQjGAAiMiMQiMiMAAjFQAAjGCMiMQCMiMDGAAMCXJAAAMAAABolg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud1, new cjs.Rectangle(-572.8,-334.7,1145.7,669.4), null);


(lib.cloud0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7ECAD3").s().p("A/GZqQjjAAigihQihigAAjjQAAjjChigQCgigDjAAILaAAQDiAAChigQCgigAAjjQAAjiigifQihihjiAAI/XAAQjjAAigigQigiggBjjQABjjCgigQCgigDjgBMBmHAAAQDjABCgCgQChCgAADjQAADjihCgQigCgjjAAI9aAAQjjAAigChQigCfgBDiQABDjCgCgQCgCgDjAAIHXAAQDjAACgCgQCgCgAADjQAADjigCgQigChjjAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cloud0, new cjs.Rectangle(-381.5,-164.1,763.1,328.3), null);


(lib.turnSit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.turnS("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-89.2},89).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.2,-15.6,62.5,31.3);


(lib.turnAll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.turnSit();
	this.instance.parent = this;
	this.instance.setTransform(-98.2,-100.1);

	this.instance_1 = new lib.turnSit();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-141.8,-0.9);

	this.instance_2 = new lib.turnSit();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-101.2,98);

	this.instance_3 = new lib.turnSit();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.1,142.3);

	this.instance_4 = new lib.turnSit();
	this.instance_4.parent = this;
	this.instance_4.setTransform(101.3,98);

	this.instance_5 = new lib.turnSit();
	this.instance_5.parent = this;
	this.instance_5.setTransform(141.2,-0.9);

	this.instance_6 = new lib.turnSit();
	this.instance_6.parent = this;
	this.instance_6.setTransform(101.3,-100.1);

	this.instance_7 = new lib.turnSit();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0.2,-141.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.instance_8 = new lib.turnL();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.3,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.turnAll, new cjs.Rectangle(-173,-157.3,345.5,315.3), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("EgC6AooMAAAhQsQBZgjBhAAQBiAABZAjMAAABQsg");
	mask_4.setTransform(72.5,263.8);

	// Layer 3
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(64.8,59.8,1,1,0,0,0,64.8,59.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(53.8,3.8,37.5,115.7), null);


(lib.ClipGroup_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Ayx0pIdwAAIHNaJQAmBDgBBFQAACZi2CNQixCKlJBwQqnDqwLA4g");
	mask_1.setTransform(390.4,149.8);

	// Layer 3
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(570.5,149.8,1,1,0,0,0,570.5,149.8);
	this.instance.alpha = 0.539;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4_2, new cjs.Rectangle(270.2,17.6,240.3,264.4), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("A88PZIgQACMAAAgwQMAuJAAAMAMHAr3IgFAAQANA1AAAyQAADtkbDcQkSDVn9CvQn5CtqiBzQqyB1sRArg");
	mask_2.setTransform(760.4,1192.8);

	// Layer 3
	this.instance = new lib.ClipGroup_0_1();
	this.instance.parent = this;
	this.instance.setTransform(763.6,1331.9,1,1,0,0,0,763.6,1331.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(573.5,1123.6,373.7,279.5), null);


// stage content:
(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// factory
	this.instance = new lib.ClipGroup_7();
	this.instance.parent = this;
	this.instance.setTransform(1329.4,1128.3,1,1,0,0,0,85.2,89.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#868687").s().p("AugAuIAAhbIdBAAIAABbg");
	this.shape.setTransform(1329.4,1177.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F09342").s().p("AtTHBIAAmEQAAjSCViVQCViWDTAAIKtAAQDTAACVCWQCVCVAADSIAAGEg");
	this.shape_1.setTransform(1329.2,1130);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CB4A27").s().p("AoZJYIAAyvIIsAAQAjAAAaAZQAZAZAAAkQAAAjgZAZQgaAZgjAAIivAAQgkAAgZAZQgZAaAAAjQAAAkAZAZQAZAZAkAAIC8AAIAJAAICnAAQAkAAAZAZQAZAZAAAkQAAAjgZAZQgZAZgkAAIjXABQgjAAgZAZQgZAZAAAjQAAAjAZAZQAZAZAjAAIHLAAQAkAAAZAZQAZAaAAAjQAAAkgZAZQgZAZgkAAIqWAAQgjAAgaAZQgZAZAAAjQAAAkAZAZQAaAZAjAAIC9AAQAjAAAZAZQAZAZAAAjQAAAkgZAZQgZAZgjAAg");
	this.shape_2.setTransform(764.6,973.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIAIQgDgDAAgFQAAgEADgDQAEgEAEAAQAGAAADAEQAEADgBAEQABAFgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_3.setTransform(1174,933.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaBtQgUgpAAgtQAAguAUgkQAUgkAkgSQAFgCAEACQAFABACAEQACAEgCAEQgBAEgEACQggAPgQAfQgRAfAAAoQAAAoASAlQAFAKgKAEIgFABQgGAAgEgGg");
	this.shape_4.setTransform(1174,920.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#82BECE").s().p("AiPCHQg8g4AAhPQAAhOA8g4QA8g4BTAAQBVAAA7A4QA8A4AABOQAABPg8A4Qg7A4hVAAQhUAAg7g4g");
	this.shape_5.setTransform(1185.6,922.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DCDDDD").s().p("AijCaQhEhAAAhaQAAhZBEhAQBEg/BfAAQBgAABEA/QBEBAAABZQAABahEBAQhEA/hgAAQhfAAhEg/g");
	this.shape_6.setTransform(1184.9,922.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDFDFE").s().p("Ai7CwQhOhJAAhnQAAhmBOhJQBNhJBuAAQBuAABOBJQBOBJAABmQAABnhOBJQhOBJhuAAQhtAAhOhJg");
	this.shape_7.setTransform(1184.9,922.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C89F67").s().p("AjODCQhWhRAAhxQAAhxBWhQQBWhQB4AAQB5AABWBQQBWBRAABwQAABxhWBRQhWBQh5AAQh4AAhWhQg");
	this.shape_8.setTransform(1184.6,922.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C77148").s().p("AjkDWQhfhZAAh9QAAh9BfhYQBfhZCFAAQCGAABfBZQBfBZAAB8QAAB9hfBZQhfBZiGAAQiFAAhfhZg");
	this.shape_9.setTransform(1183.6,922.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C77148").s().p("AgRAQQgHgGAAgKQAAgJAHgHQAIgGAJAAQAKAAAIAGQAHAHAAAJQAAAKgHAGQgIAHgKAAQgJAAgIgHg");
	this.shape_10.setTransform(863.3,863.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C77148").s().p("AgQAQQgIgGAAgKQAAgJAIgHQAGgGAKAAQALAAAGAGQAIAHAAAJQAAAKgIAGQgGAHgLAAQgKAAgGgHg");
	this.shape_11.setTransform(847.8,863.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C77148").s().p("AgRAQQgHgGAAgKQAAgJAHgHQAIgGAJAAQAKAAAIAGQAHAHAAAJQAAAKgHAGQgIAHgKAAQgJAAgIgHg");
	this.shape_12.setTransform(832.3,863.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C77148").s().p("AgQAQQgIgGAAgKQAAgJAIgHQAGgGAKAAQALAAAGAGQAIAHAAAJQAAAKgIAGQgGAHgLAAQgKAAgGgHg");
	this.shape_13.setTransform(816.8,863.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C77148").s().p("AgRAQQgHgGAAgKQAAgJAHgHQAIgGAJAAQAKAAAIAGQAHAHAAAJQAAAKgHAGQgIAHgKAAQgJAAgIgHg");
	this.shape_14.setTransform(801.2,863.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C77148").s().p("AgQAQQgIgGAAgKQAAgJAIgHQAGgGAKAAQALAAAGAGQAIAHAAAJQAAAKgIAGQgGAHgLAAQgKAAgGgHg");
	this.shape_15.setTransform(785.7,863.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C77148").s().p("AgRAQQgHgGAAgKQAAgJAHgHQAIgGAJAAQAKAAAIAGQAHAHAAAJQAAAKgHAGQgIAHgKAAQgJAAgIgHg");
	this.shape_16.setTransform(770.2,863.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C77148").s().p("AgQAQQgIgGAAgKQAAgJAIgHQAGgGAKAAQALAAAGAGQAIAHAAAJQAAAKgIAGQgGAHgLAAQgKAAgGgHg");
	this.shape_17.setTransform(754.7,863.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C77148").s().p("AgRAQQgHgGAAgKQAAgJAHgHQAIgGAJAAQAKAAAIAGQAHAHAAAJQAAAKgHAGQgIAHgKAAQgJAAgIgHg");
	this.shape_18.setTransform(739.1,863.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C77148").s().p("AgQAQQgIgGAAgKQAAgJAIgHQAGgGAKAAQALAAAGAGQAIAHAAAJQAAAKgIAGQgGAHgLAAQgKAAgGgHg");
	this.shape_19.setTransform(723.6,863.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#C77148").ss(2.9).p("As6AAIZ1AA");
	this.shape_20.setTransform(793.5,871.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C77148").s().p("AgRAQQgHgGAAgKQAAgIAHgHQAHgHAKAAQALAAAGAHQAIAHAAAIQAAAKgIAGQgGAHgLAAQgKAAgHgHg");
	this.shape_21.setTransform(1197.5,736.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C77148").s().p("AgRAQQgHgGAAgKQAAgIAHgHQAIgHAJAAQAKAAAIAHQAHAHAAAIQAAAKgHAGQgIAHgKAAQgJAAgIgHg");
	this.shape_22.setTransform(1181.7,736.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C77148").s().p("AgRAQQgHgGAAgKQAAgIAHgHQAIgHAJAAQAKAAAIAHQAHAHAAAIQAAAKgHAGQgIAHgKAAQgJAAgIgHg");
	this.shape_23.setTransform(1165.9,736.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C77148").s().p("AgQAQQgIgGAAgKQAAgIAIgHQAHgHAJAAQAKAAAIAHQAHAHAAAIQAAAKgHAGQgIAHgKAAQgJAAgHgHg");
	this.shape_24.setTransform(1150.2,736.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C77148").s().p("AgRAQQgHgGAAgKQAAgIAHgHQAIgHAJAAQAKAAAIAHQAHAHAAAIQAAAKgHAGQgIAHgKAAQgJAAgIgHg");
	this.shape_25.setTransform(1134.4,736.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C77148").s().p("AgRAQQgHgGAAgKQAAgIAHgHQAIgHAJAAQAKAAAIAHQAHAHAAAIQAAAKgHAGQgIAHgKAAQgJAAgIgHg");
	this.shape_26.setTransform(1118.6,736.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C77148").s().p("AgRAQQgHgGAAgKQAAgIAHgHQAHgHAKAAQALAAAGAHQAIAHAAAIQAAAKgIAGQgGAHgLAAQgKAAgHgHg");
	this.shape_27.setTransform(1102.9,736.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C77148").s().p("AgRAQQgHgGAAgKQAAgIAHgHQAHgHAKAAQALAAAGAHQAIAHAAAIQAAAKgIAGQgGAHgLAAQgKAAgHgHg");
	this.shape_28.setTransform(1087.1,736.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C77148").s().p("AgRAQQgHgGAAgKQAAgJAHgHQAHgGAKAAQAKAAAIAGQAHAHAAAJQAAAKgHAGQgIAHgKAAQgKAAgHgHg");
	this.shape_29.setTransform(1144.8,916.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C77148").s().p("AgRAQQgHgGAAgKQAAgJAHgHQAHgGAKAAQAKAAAHAGQAIAHAAAJQAAAKgIAGQgHAHgKAAQgKAAgHgHg");
	this.shape_30.setTransform(1129.3,916.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C77148").s().p("AgRAQQgHgGAAgKQAAgJAHgHQAIgGAJAAQAKAAAIAGQAHAHAAAJQAAAKgHAGQgIAHgKAAQgJAAgIgHg");
	this.shape_31.setTransform(1113.8,916.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C77148").s().p("AgRAQQgHgGAAgKQAAgJAHgHQAIgGAJAAQAKAAAIAGQAHAHAAAJQAAAKgHAGQgIAHgKAAQgJAAgIgHg");
	this.shape_32.setTransform(1098.3,916.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C77148").s().p("AgRAQQgHgGAAgKQAAgJAHgHQAIgGAJAAQAKAAAIAGQAHAHAAAJQAAAKgHAGQgIAHgKAAQgJAAgIgHg");
	this.shape_33.setTransform(1082.8,916.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#C77148").ss(2.9).p("AqZAAIUzAA");
	this.shape_34.setTransform(1142.3,923.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#C77148").ss(2.9).p("AqZAAIUzAA");
	this.shape_35.setTransform(1142.3,743.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#658549").s().p("AlLBTQAPguAogeQAqgcA1AAQA+AAAtAnQAegtAxgbQAzgcA7AAQBQAAA9AwQA9AtAPBIg");
	this.shape_36.setTransform(1417.5,1203.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#658549").s().p("An/B/QAYhuBdhHQBfhIB6AAQBcAABPArQBLApAvBGQAggcAqgQQAsgQAvAAQBRAABAAsQBAAsAWBHg");
	this.shape_37.setTransform(1216,1154.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C89F67").s().p("AkiAgIAAg/IJFAAIAAA/g");
	this.shape_38.setTransform(1402.7,816.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C89F67").s().p("AkiBAIAAh/IJFAAIAAB/g");
	this.shape_39.setTransform(1402.7,813.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CB4A27").s().p("AhxX/QgiAAgYhLQgZhLAAhqQAAhqAZhLQAYhLAiAAQAjAAAZhLQAYhLAAhqQAAhpgYhLQgZhLgjAAQgiAAgYhLQgZhLAAhqQAAhqAZhLQAYhLAiAAQAjAAAZhKQAYhLAAhqQAAhqgYhLQgZhLgjAAQgiAAgYhLQgZhLAAhpQAAhqAZhLQAYhLAiAAQAjAAAZhLQAYhLAAhqQAAhqgYhLQgZhKgigBIE1AAMAAAAv9g");
	this.shape_40.setTransform(1407.5,973.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F7B53F").s().p("Aj0bOMAAAgyvQAAhiBGhFQBFhGBiAAIAPAAQBiAABFBGQBGBFAABiMAAAAyvg");
	this.shape_41.setTransform(1402.7,952.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#868687").s().p("AkPCuIAAgBQgtgDgegyQgfgyAAhGQAAhHAhgzQAggzAuAAIAGABIJ+AAIAAFag");
	this.shape_42.setTransform(1346.9,968.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4E4E4F").s().p("AhqCoQgshFAAhjQAAhhAshFQAshGA+AAQA/AAAsBGQAsBFAABhQAABjgsBFQgsBFg/AAQg+AAgshFg");
	this.shape_43.setTransform(1318.1,968.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3F3B3A").s().p("AhqCnQgshFAAhiQAAhhAshFQAshGA+AAQA+AAAtBGQAsBFAABhQAABigsBFQgtBGg+AAQg+AAgshGg");
	this.shape_44.setTransform(1314.1,968.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#868687").s().p("AplAuIAAhbITLAAIAABbg");
	this.shape_45.setTransform(1270.6,1095.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#868687").s().p("AplAuIAAhbITLAAIAABbg");
	this.shape_46.setTransform(1439.3,1114.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#868687").s().p("AuKA9IAAh5IcVAAIAAB5g");
	this.shape_47.setTransform(1013.2,1220.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#868687").s().p("AnPAuIAAhbIOeAAIAABbg");
	this.shape_48.setTransform(878.5,1159.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F19717").s().p("Al0DEIAAipQAAhbBBhCQBChBBcAAIErAAQBdAABABBQBCBCAABbIAACpg");
	this.shape_49.setTransform(879.1,1135.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#953128").s().p("Ai9UsMAAAgnWQAAg2AlglQAmgmA1AAIB7AAQA1AAAmAmQAlAlAAA2MAAAAnWg");
	this.shape_50.setTransform(1299,1025.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4E4E4F").s().p("AjNAbIAAg1IGbAAIAAA1g");
	this.shape_51.setTransform(1010.1,1080.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F19717").s().p("Ao0EqIAAkCQAAiLBjhjQBihjCNAAIHFAAQCMAABkBjQBiBjABCLIAAECg");
	this.shape_52.setTransform(1433.6,1088.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F19717").s().p("AtUHBIAAmEQAAjSCWiVQCViWDTAAIKtAAQDTAACWCWQCUCVAADSIAAGEg");
	this.shape_53.setTransform(1013.2,1180.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#868687").s().p("AhpOzQgsgYAAgjIABgFIAA6YQAAhEAzgxQA0gwBIAAIB7AAIAAdFIgBAAQgCAigrAXQgrAXg9AAQg9AAgsgYg");
	this.shape_54.setTransform(1010.1,1065.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#868687").s().p("AnEBiIAAgBQgZgBgRgcQgSgcAAgoQAAgnATgdQASgdAaAAIADABIO/AAIAADCg");
	this.shape_55.setTransform(1255.8,1030.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4E4E4F").s().p("Ag7BeQgZgnAAg3QAAg2AZgnQAZgnAiAAQAkAAAYAnQAZAnAAA2QAAA3gZAnQgYAngkAAQgjAAgYgng");
	this.shape_56.setTransform(1209.6,1030.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3F3B3A").s().p("Ag7BeQgZgnAAg3QAAg2AZgnQAYgnAjAAQAkAAAYAnQAZAnAAA2QAAA3gZAnQgYAngkAAQgiAAgZgng");
	this.shape_57.setTransform(1207.4,1030.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#868687").s().p("AniBFQgRgBgMgUQgNgUAAgcQAAgcANgTQANgVASAAIPtAAIAACJg");
	this.shape_58.setTransform(1023.2,894);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#4E4E4F").s().p("AgqBDQgRgcAAgnQAAgmARgbQASgcAYAAQAZAAASAcQARAbAAAmQAAAngRAcQgSAbgZAAQgYAAgSgbg");
	this.shape_59.setTransform(974.3,894);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3F3B3A").s().p("AgqBDQgRgcAAgnQAAgmARgbQASgcAYAAQAZAAASAcQARAbAAAmQAAAngRAcQgSAbgZAAQgYAAgSgbg");
	this.shape_60.setTransform(972.7,894);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#868687").s().p("ADOCMIn6AAIAAkXIIDAAIAAABQAkACAYApQAZAoAAA3QAAA6gaApQgaApglAAg");
	this.shape_61.setTransform(1055.1,982.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4E4E4F").s().p("AhWCHQgjg4AAhPQAAhOAjg4QAkg4AyAAQAyAAAkA4QAkA4AABOQAABPgkA4QgkA4gyAAQgyAAgkg4g");
	this.shape_62.setTransform(1077.9,982.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3F3B3A").s().p("AhWCHQgjg4AAhPQAAhOAjg4QAkg4AyAAQAzAAAjA4QAkA4AABOQAABPgkA4QgjA4gzAAQgyAAgkg4g");
	this.shape_63.setTransform(1081.1,982.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CB4A27").s().p("AARE8QguAAghgfQghgfAAgrQAAgsAhgfQAhgfAuAAIDnAAQAvAAAhgeQAhgfAAgsQAAgrghgeQghgfgvAAIpbAAQgvAAgggfQghgfgBgrQABgsAhgfQAggfAvAAIM3AAIAAJ3g");
	this.shape_64.setTransform(851.3,1070.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CB4A27").s().p("AoCFbIAAq1IHwAAQAzAAAkAiQAkAiAAAwQAAAvgkAiQgkAigzAAIj+AAQg0AAgkAiQgkAiAAAvQAAAwAkAiQAkAiA0AAIKXAAQA0AAAkAiQAkAiAAAwQAAAwgkAiQgkAhg0AAg");
	this.shape_65.setTransform(1127.2,842.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CB4A27").s().p("AidHnQhIAAgygwQgzgvAAhDQAAhDAzgwQAygwBIAAIFkAAQBIAAAzgvQAzgwgBhDQABhCgzgwQgzgvhIAAIozAAQhIAAgzgwQgygvAAhDQAAhEAygvQAzgwBIAAIOGAAIAAPNg");
	this.shape_66.setTransform(1155.4,1071.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F7B53F").s().p("EgKZAkOMAAAhBZQAAi6CEiEQCEiEC6AAIGvAAQC6AACECEQCECEAAC6MAAABBZg");
	this.shape_67.setTransform(1142.3,925.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F19717").s().p("AtaHEIAAmHQAAjUCWiWQCXiWDUAAIKzAAQDUAACXCWQCXCWAADUIAAGHg");
	this.shape_68.setTransform(1257.6,1045.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F7B53F").s().p("AIsa6IAAi+I3UAAMAAAgq7QAAjSCfiUQCeiUDhAAII5AAQDhAACeCUQCfCUAADSIAAEiIBWAAQA3AAAoAlQAnAkAAA0MAAAAnag");
	this.shape_69.setTransform(804.5,992.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#868687").s().p("AlXBPIAAidIJ/AAQAUABAOAXQAOAXAAAfQAAAggOAYQgPAXgVAAg");
	this.shape_70.setTransform(907.9,954.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#4E4E4F").s().p("AgwBMQgUgfAAgtQAAgsAUggQAUgfAcAAQAdAAAUAfQAUAgAAAsQAAAtgUAfQgUAggdAAQgcAAgUggg");
	this.shape_71.setTransform(938.3,954.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3F3B3A").s().p("AgwBNQgUghAAgsQAAgsAUgfQAVggAbAAQAdAAAUAgQAUAfAAAsQAAAtgUAgQgUAfgdAAQgbAAgVgfg");
	this.shape_72.setTransform(940.1,954.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#953128").s().p("Ai9UsMAAAgnXQAAg1AlgmQAmglA1AAIB7AAQA1AAAmAlQAmAmgBA1MAAAAnXg");
	this.shape_73.setTransform(954.9,982.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(90));

	// 摩天輪logo
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#231916").s().p("AgXD6IgXgEIgigJIgigOIgegSIgdgYIgBgBIgBAAIAAgBIgCgCIgBgBIgBgBIAAgBIgBAAIgBgBIAAgBIgQgSIgagoIgRgrIgJgvIAAgvIAJguIARgsIAMgUIAegmIAWgVIAegVIAxgXIAtgLIAYgCIALAAIAiACIALACIAjAJIARAHQAJADAHAEIAfATIAcAXIABABIAAABIABAAIABABIAEADIAAABIABABIAAAAIABABIABABIAQASQAGAJAHAKIAWAqIAMAtQADAMABALQABAMAAALQAAAMgBAMQgBAMgDAMIgMAtIgWApIgdAmIgBAAIgBABIgIAJIgcAXIgvAaIgiAMIgdAFIgRACgAi4B1IAQAWIAAAAIAAABIABAAIAAAAIABACIAAAAIABAAIAAABIAWAWIAZASIAMAIIAbANIAPAFIABAAIAAAAIABAAIAAABIABAAIAXAFIAWADIAIAAIAIABIAIgBIAIAAIAWgDIAXgFIABAAIAAgBIACAAIAAAAIAAAAIAcgLIAmgXIAXgUIAKgLIAAAAIABAAIAAgBIAAAAIABgBIAAAAIAAAAIACgCIAAAAIABAAIAAgBIAAAAIACgCIAMgRIABgDIi3hJIgBAAgAAJjYIAAAAIAAACIAbDAIAAABIABAAIAAABIAAAAIAAAAICcB5IAGgLIAMglIAGgnIABgOIgEgnIgFgTIgNgkIgJgRIgXgfIgBAAIAAgBIAAAAIAAAAIgjggIgbgRIgOgHIgPgGIgVgGIgqgGgAgbjXIgdAFIgPAFIgQAGIgcAPIgaATIgXAXIgXAfQgFAIgEAJIgIARIgFATIgFATIgDAUIAAAhIAFAnIAEANIAPAjICbh5IABAAIAAAAIAAAAIAAgBIABgBIAbjAIAAgCIABgBg");
	this.shape_74.setTransform(936.9,626.3);

	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(937.1,626.9,1,1,0,0,0,46.1,46.1);
	this.instance_1.alpha = 0.379;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_74}]}).wait(90));

	// 摩天輪轉
	this.instance_2 = new lib.turnAll();
	this.instance_2.parent = this;
	this.instance_2.setTransform(937.1,627.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:89.2,x:936.8,y:626.3},89).wait(1));

	// 摩天輪bg
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EE8D85").s().p("AKMKII0YAHIhNEaIjBg0IHi74ICmCgIlSTbITJAAIlYzqICei2IHwcdIjAA0g");
	this.shape_75.setTransform(936.6,763.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_75).wait(90));

	// 山
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#658549").s().p("AgPHpIAAo1QgWgHgqghQgrgigvgvQg9g8gkgxQgkgyAKgKQAIgIAoAaQAnAZA0AwQgig+gPgsQgPgtAKgGQALgGAfAjQAfAkAmA7QgQhFgDguQgDgwALgDQAMgDAVAqQAVAqAVBEQAChHAKguQAJguALAAQAMAAAJAuQAJAuADBHQAVhEAVgqQAVgqALADQAMADgDAwQgDAugQBFQAlg7AfgkQAggjAKAGQALAGgQAtQgPAsghA+QA0gvAngaQAogaAIAIQAKAKgkAyQgkAxg9A8QgvAvgsAiQgqAhgWAHIAAI1g");
	this.shape_76.setTransform(512.4,1566.6);

	this.instance_3 = new lib.ClipGroup();
	this.instance_3.parent = this;
	this.instance_3.setTransform(748.4,1448.4,1,1,0,0,0,111.8,135.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#658549").s().p("AktBQQAOgsAlgdQAlgbAwAAQA6AAAoAmQAbgsAsgaQAugbA3AAQBIAAA4AuQA2AsAPBFg");
	this.shape_77.setTransform(761.6,1360.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#658549").s().p("AgPHpIAAo1QgVgHgrghQgrgigwgvQg9g8gjgxQgkgyAKgKQAJgIAnAaQAnAZA0AwQghg+gPgsQgQgtAKgGQALgGAgAjQAeAkAmA7QgQhFgDguQgDgwALgDQAMgDAWAqQAUAqAVBEQAChHAKguQAJguALAAQAMAAAJAuQAKAvACBGQAVhEAUgqQAWgqALADQAMADgDAwQgDAugQBFQAmg7AegkQAggjAKAGQALAGgPAtQgQAsghA+QA0gwAngZQAngaAJAIQAKAKgkAyQgkAxg8A8QgwAvgrAiQgrAhgVAHIAAI1g");
	this.shape_78.setTransform(723.7,1534.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#C0D541").s().p("AxdVOMAJdgkOQAtiwCQhuQCPhvC0AAQC1AACQBvQCPBuAtCwMAJdAkOg");
	this.shape_79.setTransform(748.3,1447.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#658549").s().p("AgPHpIAAo1QgWgHgqghQgrgigwgvQg8g8gkgxQgkgyAKgKQAIgIAoAaQAnAZA0AwQgig+gPgsQgPgtAKgGQALgGAfAjQAfAjAmA8QgQhFgDguQgDgwALgDQAMgDAVAqQAVAqAVBEQAChHAKguQAJguALAAQAMAAAJAuQAJAuADBHQAVhEAVgqQAVgqALADQAMADgDAwQgDAugQBFQAlg8AfgjQAggjAKAGQALAGgQAtQgPAsghA+QA0gvAngaQAogaAIAIQAKAKgkAyQgkAxg9A8QgwAvgrAiQgqAhgWAHIAAI1g");
	this.shape_80.setTransform(748.4,1296.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#658549").s().p("AktBQQAOgsAlgcQAlgcAwAAQA4AAAqAmQAagsAtgaQAugbA2AAQBJAAA3AuQA4AsAOBFg");
	this.shape_81.setTransform(416.8,1427);

	this.instance_4 = new lib.ClipGroup_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(444.4,1447.4,1,1,0,0,0,115.7,135.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#658549").s().p("AgOHpIAAo1QgWgHgrghQgqgigxgvQg8g8gkgxQgkgyAKgKQAJgIAnAaQAnAZA0AwQgig+gOgsQgQgtAKgGQALgGAgAjQAeAjAmA8QgQhFgDguQgDgwALgDQAMgDAWAqQAUAqAVBEQAChGAKgvQAJguALAAQANAAAJAuQAIAuADBHQAVhDAVgrQAVgqALADQAMADgDAwQgDAugQBFQAlg8AggjQAfgjAKAGQALAGgPAtQgQAsghA+QA0gwAngZQAogaAIAIQAKAKgkAyQgkAxg9A8QgvAvgsAiQgpAhgWAHIAAI1g");
	this.shape_82.setTransform(466.5,1419);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#C0D541").s().p("AxdVOMAJcgkOQAuiwCPhuQCQhvC0AAQC1AACPBvQCQBuAtCwMAJdAkOg");
	this.shape_83.setTransform(448.3,1447.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.instance_4},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.instance_3},{t:this.shape_76}]}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.instance_4},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.instance_3},{t:this.shape_76}]},89).wait(1));

	// Layer 26
	this.instance_5 = new lib.waterflower();
	this.instance_5.parent = this;
	this.instance_5.setTransform(605,1583.2,1,1,0,0,0,0,33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:0.1,scaleY:1.58,x:605.1},8).to({regX:0,scaleY:1,x:605},9).wait(1).to({regX:0.1,scaleY:1.58,x:605.1},8).to({regX:0,scaleY:1,x:605},9).wait(1).to({regX:0.1,scaleY:1.58,x:605.1},8).to({regX:0,scaleY:1,x:605},9).wait(1).to({regX:0.1,scaleY:1.58,x:605.1},8).to({regX:0,scaleY:1,x:605},9).wait(1).to({regX:0.1,scaleY:1.58,x:605.1},8).to({regX:0,scaleY:1,x:605},9).wait(1));

	// fallwaterMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgC6AotMAAAhRZIF1AAMAAABRZg");
	var mask_graphics_89 = new cjs.Graphics().p("EgC6AotMAAAhRZIF1AAMAAABRZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:598.7,y:1322.7}).wait(89).to({graphics:mask_graphics_89,x:598.7,y:1322.7}).wait(1));

	// Layer 25
	this.instance_6 = new lib.fwS();
	this.instance_6.parent = this;
	this.instance_6.setTransform(601.1,1076.5,1,0.094,0,0,0,0,65.2);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({_off:false},0).to({regY:65,scaleY:2.21,y:1456.6},20,cjs.Ease.get(-1)).to({x:603.3,y:1726.7},5,cjs.Ease.get(1)).wait(33));

	// fallwater
	this.instance_7 = new lib.fwS();
	this.instance_7.parent = this;
	this.instance_7.setTransform(601.1,1076.5,1,0.094,0,0,0,0,65.2);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).to({regY:65,scaleY:2.21,y:1456.6},19,cjs.Ease.get(-1)).to({x:603.3,y:1726.7},5,cjs.Ease.get(1)).to({_off:true},1).wait(28).to({_off:false,regY:65.2,scaleY:0.09,x:601.1,y:1076.5},0).to({regY:65,scaleY:2.21,y:1456.6},18).to({x:603.3,y:1726.7},5).wait(1));

	// 瀑布
	this.instance_8 = new lib.ClipGroup_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(591,1320.4,1,1,0,0,0,64.8,261.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#82BECE").s().p("EgC6AooMAAAhQtQBagiBgAAQBhAABaAiMAAABQtg");
	this.shape_84.setTransform(598.7,1323.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#1C5B33").s().p("EgRdAooMAJchIJQArlECSiNQB6h1DKAAQDLAAB5B1QCTCNAqFEMAJdBIJg");
	this.shape_85.setTransform(598.8,1323.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.instance_8}]}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.instance_8}]},89).wait(1));

	// leaf3
	this.instance_9 = new lib.leaf3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(563.1,1142.1,1,1,0,0,0,21.2,-11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:-11,rotation:15,y:1142.2},15).to({rotation:-15},39).to({rotation:-0.3},35).wait(1));

	// leaf2
	this.instance_10 = new lib.leaf2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(546.4,1230.4,1,1,0,0,0,47,51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:47.1,rotation:7.7,x:546.5},21).to({regX:47,regY:51.7,rotation:-7.7,x:546.4,y:1230.5},50).to({regY:51.8,rotation:-0.3},18).wait(1));

	// leaf1
	this.instance_11 = new lib.leaf1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(539.4,1308.6,1,1,0,0,0,71.4,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:71.5,rotation:13.2,x:539.5},40).to({regY:43.6,rotation:0.3,y:1308.7},49).wait(1));

	// leaf0
	this.instance_12 = new lib.leaf0();
	this.instance_12.parent = this;
	this.instance_12.setTransform(534.5,1380.4,1,1,0,0,0,97.5,58.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regY:58.7,rotation:-9.5,x:534.4,y:1380.5},23).to({regY:58.6,rotation:0,x:534.5,y:1380.4},13).to({regY:58.7,rotation:9.7,y:1380.5},12).to({regY:58.6,rotation:0,y:1380.4},14).to({regY:58.7,rotation:-9.5,x:534.4,y:1380.5},18).to({rotation:-0.8,x:534.5},9).wait(1));

	// Layer 13
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F7F8F8").s().p("EgqbAD9IAAmOQAAgsAsggQAsgfA/AAQA+AAAtAfQAsAgAAAsQAAAtAsAeQAtAgA+AAQA+AAAtggQArgeAAgtQAAgsAsggQAtgfA+AAQA/AAAsAfQAsAgAAAsQABAtAsAeQAsAgA/AAQA+AAAsggQAsgeAAgtQAAgsAsggQAsgfA/AAQA+AAAtAfQAsAgAAAsQAAAtAsAeQAtAgA+AAQA+AAAtggQAsgeAAgtQAAgsArggQAtgfA+AAQA/AAAsAfQAsAgAAAsQABAtArAeQAtAgA/AAQA+AAAsggQAsgeAAgtQAAgsAtggQArgfA/AAQA+AAAtAfQArAgAAAsQAAAtAsAeQAtAgA+AAQA/AAAsggQAsgfAAgsQAAgsAsggQAsgfA+AAQA/AAAsAfQAtAggBAsQABAtArAeQAtAgA/AAQA+AAAsggQAtgfAAgsQgBgsAtggQAsgfA+AAQA/AAAsAfQAsAgAAAsQAAAtAsAeQAsAgA/AAQA+AAAtggQAsgeAAgtQAAgsAsggQAsgfA/AAQA+AAAsAfQAtAggBAsQAAAtAsAeQAtAgA+AAQA/AAAtggQArgeABgtQgBgsAtggQAsgfA/AAQA+AAAsAfQAsAgAAAsQAAAtAsAeQAsAgA/AAQA+AAAtggQArgeABgqIAAGLg");
	this.shape_86.setTransform(348.9,968);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#ECB754").s().p("AiPHCIAAuCIEfAAIAAOCg");
	this.shape_87.setTransform(116.1,947.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#ECB754").s().p("AiPG6IAAtzIEfAAIAANzg");
	this.shape_88.setTransform(568.2,946.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#ECB754").s().p("EgtjABWIAAirMBbHAAAIAACrg");
	this.shape_89.setTransform(348.7,905.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E0B776").s().p("AhkAeIAAg7IDJAAIAAA7g");
	this.shape_90.setTransform(468,873.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E0B776").s().p("AhkAwIAAhfIDIAAIAABfg");
	this.shape_91.setTransform(126.2,831.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E0B776").s().p("AhkAwIAAhfIDIAAIAABfg");
	this.shape_92.setTransform(86.1,830.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E0B776").s().p("AhkAeIAAg7IDJAAIAAA7g");
	this.shape_93.setTransform(567.8,873.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#E0B776").s().p("AhjBCIAAiDIDHAAIAACDg");
	this.shape_94.setTransform(387.4,883.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E0B776").s().p("AhkBkIAAjHIDJAAIAADHg");
	this.shape_95.setTransform(407.5,859.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E0B776").s().p("AhkBGIAAiLIDJAAIAACLg");
	this.shape_96.setTransform(104.9,883.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E0B776").s().p("AhkCYIAAkwIDIAAIAAEwg");
	this.shape_97.setTransform(145.6,854.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E0B776").s().p("AhkBkIAAjHIDJAAIAADHg");
	this.shape_98.setTransform(447.9,835.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E0B776").s().p("AhjBkIAAjHIDHAAIAADHg");
	this.shape_99.setTransform(488.2,859.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#E0B776").s().p("AhkBlIAAjJIDJAAIAADJg");
	this.shape_100.setTransform(607.2,815.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#E0B776").s().p("AhkBkIAAjHIDIAAIAADHg");
	this.shape_101.setTransform(527.7,859.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E0B776").s().p("AhkAeIAAg7IDJAAIAAA7g");
	this.shape_102.setTransform(547.8,828.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E0B776").s().p("AhjAeIAAg7IDIAAIAAA7g");
	this.shape_103.setTransform(588.4,828.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E0B776").s().p("AhjAeIAAg7IDIAAIAAA7g");
	this.shape_104.setTransform(588.4,788.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E0B776").s().p("AhjAeIAAg7IDIAAIAAA7g");
	this.shape_105.setTransform(528.5,788.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E0B776").s().p("AhjAeIAAg7IDHAAIAAA7g");
	this.shape_106.setTransform(488.2,788.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#9FA0A0").s().p("EgstABEIAAiHMBZbAAAIAACHg");
	this.shape_107.setTransform(348.7,896.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FEFCEC").s().p("EgoeAJ8QiBjTg3jSQhtmjF3AKQDDAFDYBfQBRAkBwA8IDIBvQEDCODNBEQElBhFIAIQEJAHFqi3QCKhFDDh2IFcjWQHCkUEth5QG4ivGNAQQF7AQBpDeQBTCxhfEsQhFDWiWD/QhMB/g+BUUgBpgASgmRAAQQzIAIy0ALg");
	this.shape_108.setTransform(347.4,832);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#595857").s().p("EgqQAKAQiCjVg3jTQhumlF5AKQDGAFDZBcQBWAkE5CmQEJCNDKBFQEnBkFFARQErAQGXi1QCehGDXh2IGEjZQH6kfE0h3QHUi1GOARQF+AQBTDfQBDCyh+EtQhaDYiyEAQhYCAhHBVUgBrgASgnPAAQQzoAIzTAMg");
	this.shape_109.setTransform(348.9,831.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#959A9D").s().p("EguRAL2Qgng/guheQhei9goicQg5jbA4h5QBHiZD1AGQDtAGDOBnQBwA4DvCuQDnCoCmBOQEEB6FAAiQE8AiHYjSQC5hSD/iMIHSkEQJllZF6iSQI5jdHYAUQHEATBjEIQBPDUiVFkQhrEAjSEvQhpCYhUBkUgB+gAVgqtAASQ1XAK0+ANg");
	this.shape_110.setTransform(365.4,814.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#DFDFDA").s().p("Egi/AK6IqnpcQgKgzAThAQAmiBCQhBQHPjQVIH8QEYBpG2iUQCog4D6hyQCShCE5iSQJekVGwhkQJxiRJAB1IkdUDMgwxAEEg");
	this.shape_111.setTransform(336.4,804.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#2B9CC7").s().p("EgiNAboMAAAg3PMAu3AAAQEFgBC4CtQC4CtAAD0QAAD0i4CtQi4CtkFAAI0MAAQkEgBi5CtQi4CtAADzQAAD0C4CtQC5CtEEAAIf7AAQEFgBC4CtQC4CtAAD0QAAD0i4CtQi4CskFAAg");
	this.shape_112.setTransform(1196.3,850.1);

	this.instance_13 = new lib.Path_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1437.7,892.1,1,1,0,0,0,98.4,79.4);
	this.instance_13.alpha = 0.539;

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#ADCD43").s().p("EgvHASTQK4qPI8mnQKKngJ/kqQKrk/L6iaQMUigO3AAQCRAACRAFMAAAApHg");
	this.shape_113.setTransform(1234.2,912.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#CEDD6A").s().p("A/uYYMAAAgwvMA/dAAAMAAAAwvg");
	this.shape_114.setTransform(1332.9,829.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.instance_13},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]}).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.instance_13},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},89).wait(1));

	// land
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EFEFEF").s().p("Ai/AhQgOAAgKgKQgKgJAAgOQAAgNAKgJQAKgKAOAAIF/AAQAOAAAKAKQAKAJAAANQAAAOgKAJQgKAKgOAAg");
	this.shape_115.setTransform(1451.8,1423.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EFEFEF").s().p("AhfAiQgPAAgJgLQgKgJAAgOQAAgNAKgKQAJgKAPAAIC/AAQAOAAAKAKQAJAKABANQgBAOgJAJQgKALgOAAg");
	this.shape_116.setTransform(1467.8,1346.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EFEFEF").s().p("Ai/AhQgOAAgKgJQgKgKAAgOQAAgNAKgJQAKgKAOAAIF/AAQAOAAAKAKQAKAJAAANQAAAOgKAKQgKAJgOAAg");
	this.shape_117.setTransform(1451.8,1413.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EFEFEF").s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQAKAAAIAIQAIAHAAAKQAAALgIAHQgIAIgKAAQgKAAgHgIg");
	this.shape_118.setTransform(1428.7,1395.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#EFEFEF").s().p("AgSASQgHgHAAgLQAAgKAHgHQAIgIAKAAQALAAAIAIQAHAHAAAKQAAALgHAHQgIAIgLAAQgKAAgIgIg");
	this.shape_119.setTransform(1441.5,1395.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#EFEFEF").s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape_120.setTransform(1454.2,1395.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#EFEFEF").s().p("AgSASQgHgHAAgLQAAgKAHgHQAIgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgIgIg");
	this.shape_121.setTransform(1467,1395.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#EFEFEF").s().p("AgSASQgHgHAAgLQAAgKAHgHQAJgIAJAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgJAAgJgIg");
	this.shape_122.setTransform(1479.8,1395.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#EFEFEF").s().p("AgRASQgIgHAAgLQAAgKAIgHQAIgIAKAAQAKAAAIAIQAHAHAAAKQAAALgHAHQgIAIgKAAQgKAAgIgIg");
	this.shape_123.setTransform(1492.5,1395.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#EFEFEF").s().p("AgSASQgHgHAAgLQAAgKAHgHQAIgIAKAAQAKAAAIAIQAIAHAAAKQAAALgIAHQgIAIgKAAQgKAAgIgIg");
	this.shape_124.setTransform(1505.3,1395.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#EFEFEF").s().p("AnCAOIAAgbIOEAAIAAAbg");
	this.shape_125.setTransform(1466.9,1389.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#EFEFEF").s().p("AnwAsIAAhXIPhAAIAABXg");
	this.shape_126.setTransform(1466.3,1443.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#2961AA").s().p("AnCIIIAApJQAAh/BKhlQBJhjB0gnQABglAagZQAagaAkAAIDaAAQAlAAAaAaQAaAbAAAkIgBAGQBtAsBCBgQBEBiAAB5IAAJJg");
	this.shape_127.setTransform(1466.9,1391.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#4E4E4F").s().p("Au+BCIAAiDId+AAIAACDg");
	this.shape_128.setTransform(1211.3,1397.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AhRBSQgigiAAgwQAAgvAigiQAighAvAAQAwAAAhAhQAjAiAAAvQAAAwgjAiQghAhgwAAQgvAAgighg");
	this.shape_129.setTransform(1200.7,1300.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#82CDDF").s().p("AmCNDIAA6FIBwAAQESAADBDCQDCDCAAETIAAPug");
	this.shape_130.setTransform(1239.4,1316.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#2961AA").s().p("AiGGwIAAtfIApAAQBeAABDBDQBDBDgBBfIAAJ6g");
	this.shape_131.setTransform(1286.2,1356.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#2961AA").s().p("AzVOTIAAg0IA1AAIAAuJQAAhCAugvQAvgvBDAAIHtAAQAegjApgUQArgUAuAAIBMAAQAlirB2iCQB0iCCkg3QABg/AtgsQAsgsA/AAIF4AAQA/AAAtAtQAsAsABBAIgBALQC5BKBzClQB0CpAADPIAAPuI4MAAIAArdIg8AAQgtAAgpgTQgogSgdggImDAAIAAMaIA0AAIAAA0g");
	this.shape_132.setTransform(1154.4,1312.6);

	this.instance_14 = new lib.ClipGroup_5();
	this.instance_14.parent = this;
	this.instance_14.setTransform(1334.5,1299.5,1,1,0,0,0,121.6,34.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F7B53F").s().p("AxlCNIAAkZMAg+AAAQA6AAAqApQApApAAA6QAAA6gpAqQgqApg6AAg");
	this.shape_133.setTransform(1342.7,1299.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgHAAQAAgHAHAAQADAAADADQACACAAACQAAADgCACQgDADgDAAQgHAAAAgIg");
	this.shape_134.setTransform(1164.7,1543.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgPBHQgNgbAAgdQAAgdANgYQAMgXAWgMIAFAAQADABABACQABADgBACQgBADgCABQgTAKgKAUQgKAVAAAZQAAAaALAYQADAHgGACIgDABQgEAAgCgEg");
	this.shape_135.setTransform(1164.7,1534.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#1370B6").s().p("AhXBYQgkglAAgzQAAgyAkglQAlgkAyAAQAzAAAlAkQAkAlAAAyQAAAzgkAlQglAkgzAAQgyAAglgkg");
	this.shape_136.setTransform(1171.8,1536.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#DCDDDD").s().p("AhjBkQgpgpAAg7QAAg5ApgpQAqgqA5AAQA6AAAqAqQApApAAA5QAAA7gpApQgqApg6AAQg5AAgqgpg");
	this.shape_137.setTransform(1171.3,1536.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FDFDFE").s().p("AhxBzQgwgwAAhDQAAhBAwgwQAvgwBCAAQBDAAAvAwQAwAvAABCQAABDgwAwQgvAuhDABQhCgBgvgug");
	this.shape_138.setTransform(1171.3,1536.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#727171").s().p("Ah8B+Qg1g0AAhKQAAhJA1g0QA0g0BIAAQBKAAA0A0QA0A0AABJQAABKg0A0Qg0A0hKAAQhIAAg0g0g");
	this.shape_139.setTransform(1171.1,1536.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#4E4E4F").s().p("AiKCLQg6g5AAhSQAAhRA6g5QA5g5BRgBQBSABA5A5QA5A5ABBRQgBBSg5A5Qg5A5hSABQhRgBg5g5g");
	this.shape_140.setTransform(1170.5,1536.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3F3B3A").s().p("Ah5GYIAAo6QAAhmBHhIQBHhHBlAAIAAMvg");
	this.shape_141.setTransform(1114.3,1629.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#3F3B3A").s().p("ApIAfQgMAAgKgJQgJgJAAgNQAAgMAJgJQAKgJAMAAISRAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAg");
	this.shape_142.setTransform(1142.6,1606.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#3F3B3A").s().p("ApIAfQgMAAgKgJQgJgJAAgNQAAgMAJgJQAKgJAMAAISRAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAg");
	this.shape_143.setTransform(1142.6,1560.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#1370B6").s().p("AgeHaIAAuzIA9AAIAAOzg");
	this.shape_144.setTransform(1112.7,1556);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#3F3B3A").s().p("ApIAfQgMAAgKgJQgJgJAAgNQAAgLAJgKQAKgJAMAAISRAAQANAAAJAJQAJAKAAALQAAANgJAJQgJAJgNAAg");
	this.shape_145.setTransform(1142.6,1513.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#3F3B3A").s().p("AqcAwIAAhfIU5AAIAABfg");
	this.shape_146.setTransform(1147.9,1670.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F7B53F").s().p("AmnM6QiwivAAj5IAAsjQAAj4CwiwQCwiwD3AAQD5AACvCwQCwCwAAD4IAAMjQAAD5iwCvQivCwj5AAQj3AAiwiwg");
	this.shape_147.setTransform(1144.2,1556.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#3F3B3A").s().p("Ah5GYIAAo6QAAhmBHhIQBHhHBlAAIAAMvg");
	this.shape_148.setTransform(1175,1629.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#E85626").s().p("AkHChIAAlBIIPAAIAAFBg");
	this.shape_149.setTransform(1144.1,1466.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgHAAQAAgCADgCQACgDACAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_150.setTransform(1016,1543.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgPBHQgNgbAAgdQAAgdANgYQAMgXAWgMQAFgDAEAGIAAAFQgBADgCABQgTAKgKAUQgKAVAAAZQAAAaALAYQADAGgGADIgDABQgFAAgBgEg");
	this.shape_151.setTransform(1016,1534.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#1370B6").s().p("AhXBYQgkglAAgzQAAgyAkglQAkgkAzAAQA0AAAjAkQAlAlAAAyQAAAzglAlQgjAkg0AAQgzAAgkgkg");
	this.shape_152.setTransform(1023.1,1536.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#DCDDDD").s().p("AhiBkQgqgpAAg7QAAg5AqgpQApgqA5AAQA7AAApAqQApApAAA5QAAA7gpApQgpApg7AAQg5AAgpgpg");
	this.shape_153.setTransform(1022.6,1536.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FDFDFE").s().p("AhxBzQgwgwABhDQgBhBAwgwQAvgwBCAAQBDAAAvAwQAwAvAABCQAABDgwAwQgvAuhDABQhCgBgvgug");
	this.shape_154.setTransform(1022.6,1536.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#727171").s().p("Ah9B+Qg0g0AAhKQAAhJA0g0QA0g0BJAAQBKAAA0A0QA0A0AABJQAABKg0A0Qg0A0hKAAQhJAAg0g0g");
	this.shape_155.setTransform(1022.4,1536.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#4E4E4F").s().p("AiKCLQg5g5AAhSQAAhRA5g5QA6g5BQgBQBRABA6A5QA6A5gBBRQABBSg6A5Qg6A5hRABQhQgBg6g5g");
	this.shape_156.setTransform(1021.9,1536.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#3F3B3A").s().p("Ah5GYIAAo6QAAhmBHhIQBHhHBlAAIAAMvg");
	this.shape_157.setTransform(965.7,1629.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#3F3B3A").s().p("ApIAfQgMAAgKgJQgJgJAAgNQAAgMAJgJQAKgJAMAAISRAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAg");
	this.shape_158.setTransform(994,1606.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#3F3B3A").s().p("ApIAfQgMAAgKgJQgJgJAAgNQAAgMAJgJQAKgJAMAAISRAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAg");
	this.shape_159.setTransform(994,1560.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#1370B6").s().p("AgeHaIAAuzIA9AAIAAOzg");
	this.shape_160.setTransform(964,1556);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#3F3B3A").s().p("ApIAfQgMAAgKgJQgJgJAAgNQAAgLAJgKQAKgJAMAAISRAAQANAAAJAJQAJAKAAALQAAANgJAJQgJAJgNAAg");
	this.shape_161.setTransform(994,1513.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#3F3B3A").s().p("AqcAwIAAhfIU5AAIAABfg");
	this.shape_162.setTransform(999.3,1670.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#F7B53F").s().p("AmnM6QiwivAAj5IAAsjQAAj4CwiwQCwiwD3AAQD4AACwCwQCwCwAAD4IAAMjQAAD5iwCvQiwCwj4AAQj3AAiwiwg");
	this.shape_163.setTransform(995.6,1556.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#3F3B3A").s().p("Ah5GYIAAo6QAAhmBIhIQBGhHBlAAIAAMvg");
	this.shape_164.setTransform(1026.4,1629.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#E85626").s().p("AkHChIAAlBIIPAAIAAFBg");
	this.shape_165.setTransform(995.4,1466.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#C0D541").s().p("AqN5aQDzAADBByQDAByA8CzMAJrAlHIgBAAIABAQQAACol3CBQlxB/ozAfg");
	this.shape_166.setTransform(66.8,1311.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#BF8B29").s().p("Au+qZQM5AtIeC6QEGBaCOBuQCSBxAAB5QAAB6iSByQiOBtkGBaQodC6s6Atg");
	this.shape_167.setTransform(97.3,1448.4);

	this.instance_15 = new lib.ClipGroup_4_2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(301.4,1576.6,1,1,0,0,0,570.5,149.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#C0D541").s().p("Ayx0pIdwAAIHOaJQAlBCgBBGQAACYi2CPQiyCJlIBwQqnDqwLA4g");
	this.shape_168.setTransform(121.6,1576.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#BF8B29").s().p("A3ewyQJ7AiItBjQIgBfGYCQQGaCRDeCxQDlC4AADEQAADFjlC3QjdCxmbCRQmYCRogBfQotBip7Akg");
	this.shape_169.setTransform(151.7,1645.6);

	this.instance_16 = new lib.ClipGroup_1_2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(192.4,1908.1,1,1,0,0,0,763.6,1261.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#4E4E4F").s().p("AwEA/IAAh9MAgJAAAIAAB9g");
	this.shape_170.setTransform(1431.8,1891);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#D5D4B2").s().p("AwEAzIAAhlMAgJAAAIAABlg");
	this.shape_171.setTransform(1431.8,1879.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#F7B53F").s().p("AjMFcIAAq3IGZAAIAAK3g");
	this.shape_172.setTransform(1349.4,1862.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#231916").s().p("AjyDzQhlhlAAiOQAAiNBlhlQBlhlCNAAQCOAABlBlQBlBlAACNQAACOhlBlQhlBliOAAQiNAAhlhlgAipDmQBNA3BcAAQBVAABJgvIiniogAAyAKICrCrQBAhPAAhmQAAhdg3hLgAkcAAQAABeA4BLICgifIioimQgwBHAABVgAi0jbICrCrICyi0QhMg4hdAAQhlAAhPBBg");
	this.shape_173.setTransform(898.5,1823.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#2961AA").s().p("AoKH7IAAg7IA+AAIAAqwQAAhLA5g1QA4g1BQAAIJNAAQAggnAugXQAvgXA1AAIAXAAIAAHXIgXAAQgzAAgugVQgsgUggglInLAAIAAIxIA+AAIAAA7g");
	this.shape_174.setTransform(927.1,1854.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#DC5262").s().p("AhcATQgCgIABgLQABgLADgHQADgIADABICxAoIi1AMQgEAAgBgIg");
	this.shape_175.setTransform(1248.1,1859.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AiOCPQg7g7AAhUQAAhSA7g8QA7g7BTAAQBTAAA8A7QA7A8AABSQAABUg7A7Qg8A7hTAAQhTAAg7g7g");
	this.shape_176.setTransform(1243,1857.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#565656").s().p("AiOCPQg7g7AAhUQAAhSA7g8QA7g7BTAAQBUAAA7A7QA7A8AABSQAABUg7A7Qg7A7hUAAQhSAAg8g7g");
	this.shape_177.setTransform(1247.6,1857.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#DC5262").s().p("AAXBPIhYieICCB+QACACgEAHQgFAHgJAGQgJAHgIADIgGABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_178.setTransform(1178.5,1852.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AiOCPQg7g7AAhUQAAhSA7g8QA7g7BTAAQBTAAA8A7QA7A8AABSQAABUg7A7Qg8A7hTAAQhTAAg7g7g");
	this.shape_179.setTransform(1181.7,1857.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#565656").s().p("AiOCPQg7g7AAhUQAAhSA7g8QA8g7BSAAQBUAAA7A7QA7A8AABSQAABUg7A7Qg7A7hUAAQhSAAg8g7g");
	this.shape_180.setTransform(1186.3,1857.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#DC5262").s().p("AhKAoQgGgGgEgLQgEgKgBgIQAAgHADgBICwgqIidBaIgBABQgCAAgEgGg");
	this.shape_181.setTransform(1248.5,1798.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AiOCPQg7g7AAhUQAAhSA7g8QA7g7BTAAQBTAAA8A7QA7A8AABSQAABUg7A7Qg8A7hTAAQhTAAg7g7g");
	this.shape_182.setTransform(1243,1799.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#565656").s().p("AiOCPQg7g7AAhUQAAhSA7g8QA7g7BTAAQBUAAA7A7QA7A8AABSQAABUg7A7Qg7A7hUAAQhSAAg8g7g");
	this.shape_183.setTransform(1247.6,1799.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#DC5262").s().p("AgMBXQgIgBgKgFQgKgFgGgGQgHgFACgDIBniVIg3CtQAAAAAAABQAAAAgBAAQgBAAAAABQgBAAgBAAIgFgBg");
	this.shape_184.setTransform(1183.7,1792.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AiOCPQg7g7AAhUQAAhSA7g8QA7g7BTAAQBTAAA8A7QA7A8AABSQAABUg7A7Qg8A7hTAAQhTAAg7g7g");
	this.shape_185.setTransform(1181.7,1799.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#565656").s().p("AiOCPQg7g7AAhUQAAhSA7g8QA8g7BSAAQBUAAA7A7QA7A8AABSQAABUg7A7Qg7A7hUAAQhSAAg8g7g");
	this.shape_186.setTransform(1186.3,1799.2);

	this.instance_17 = new lib.ClipGroup_4();
	this.instance_17.parent = this;
	this.instance_17.setTransform(1086,1840.3,1,1,0,0,0,77.2,77.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("Al2FjQg1AAglglQglglAAg1IAAnHQAAg0AlglQAlgmA1AAILuAAQA0AAAlAmQAlAlAAA0IAAHHQAAA1glAlQglAlg0AAg");
	this.shape_187.setTransform(1075.8,1828.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#565656").s().p("AmVGAQg5AAgogoQgpgpAAg4IAAntQAAg4ApgpQAogoA5AAIMsAAQA4AAApAoQAoApAAA4IAAHtQAAA4goApQgpAog4AAg");
	this.shape_188.setTransform(1071.7,1828.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#95A3AF").s().p("A49LWIAAvCQAAjKCPiQQCQiPDKAAMAiqAAAQDKAACOCPQCQCQgBDKIAAPCg");
	this.shape_189.setTransform(1138.6,1823.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#2961AA").s().p("A49LWIAAvCQAAjKCPiQQCPiPDLAAMAipAAAQDKAACQCPQCOCQAADKIAAPCg");
	this.shape_190.setTransform(1225.9,1823.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#E5E8AF").s().p("AshRUQAUgCAVABIS9AAQD1AACtiiQCtijAAjmQAAjlitiiQitihj1AAI9+AAQj1AAitiiQitijAAjlQAAjlCtiiQCtiiD1AAMA3CAAAMAAAAing");
	this.shape_191.setTransform(1103.3,1937.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#4E4E4F").s().p("AjOAhIAAhBIGdAAIAABBg");
	this.shape_192.setTransform(1396.1,1750.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#4E4E4F").s().p("AggDPIAAmdIBBAAIAAGdg");
	this.shape_193.setTransform(1518.1,1667.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgYAaQgKgLAAgPQAAgOAKgKQAKgKAOAAQAOAAALAKQALAKAAAOQAAAPgLALQgLAJgOABQgOgBgKgJg");
	this.shape_194.setTransform(1464,1662.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#FFFFFF").ss(7.5,1,1).p("AoLAAIQXAA");
	this.shape_195.setTransform(1528.4,1662.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#4E4E4F").s().p("AjOAhIAAhBIGdAAIAABBg");
	this.shape_196.setTransform(1396.1,1701.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#4E4E4F").s().p("AggDPIAAmdIBBAAIAAGdg");
	this.shape_197.setTransform(1433.8,1667.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#868687").s().p("AyCC5IAAiYQAAhaA7g/QA8hABUAAMAg5AAAIACFxg");
	this.shape_198.setTransform(1494.3,1667.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#868687").s().p("Aisk+IFZAAIAAJyIAAAHIlZAEg");
	this.shape_199.setTransform(1396.1,1718.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#EFEFEF").s().p("Aj3ArQgSAAgMgMQgNgNAAgSQAAgQANgNQAMgNASAAIHvAAQASAAANANQAMAMAAARQAAASgMANQgNAMgSAAg");
	this.shape_200.setTransform(1411.8,1567.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#EFEFEF").s().p("Ah7ArQgSAAgNgMQgMgNAAgSQAAgRAMgNQANgMASAAID3AAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAg");
	this.shape_201.setTransform(1432.4,1467.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#EFEFEF").s().p("Aj3ArQgSAAgMgMQgNgNAAgSQAAgRANgNQAMgMASAAIHvAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAg");
	this.shape_202.setTransform(1411.8,1554.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#EFEFEF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAJAKABANQgBAOgJAKQgKAJgOABQgNgBgKgJg");
	this.shape_203.setTransform(1382,1531.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#EFEFEF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAJgOABQgNgBgKgJg");
	this.shape_204.setTransform(1398.5,1531.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#EFEFEF").s().p("AgXAYQgJgKAAgOQAAgNAJgKQAKgKANAAQAOAAAJAKQAKAKAAANQAAAOgKAKQgJAJgOABQgNgBgKgJg");
	this.shape_205.setTransform(1414.9,1531.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#EFEFEF").s().p("AgXAYQgKgKABgOQgBgNAKgKQAKgKANAAQAOAAAJAKQALAKgBANQABAOgLAKQgJAJgOABQgNgBgKgJg");
	this.shape_206.setTransform(1431.4,1531.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#EFEFEF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAJAKABANQgBAOgJAKQgKAJgOABQgNgBgKgJg");
	this.shape_207.setTransform(1447.8,1531.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#EFEFEF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAJAKQALAKAAANQAAAOgLAKQgJAJgOABQgNgBgKgJg");
	this.shape_208.setTransform(1464.3,1531.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#EFEFEF").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAJAKQAKAKAAANQAAAOgKAKQgJAJgOABQgNgBgKgJg");
	this.shape_209.setTransform(1480.7,1531.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#EFEFEF").s().p("ApEASIAAgjISJAAIAAAjg");
	this.shape_210.setTransform(1431.2,1523.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#EFEFEF").s().p("AqAA5IAAhxIUBAAIAABxg");
	this.shape_211.setTransform(1430.5,1592.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#2961AA").s().p("ApEKeIAArzQAAihBfiDQBeiBCWgyQABguAhgiQAhghAvAAIEZAAQAvAAAiAhQAiAiAAAwIgBAIQCMA4BWB7QBXCAAACaIAALzg");
	this.shape_212.setTransform(1431.3,1525.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#4E4E4F").s().p("Aj7AoIAAhPIH3AAIAABPg");
	this.shape_213.setTransform(1276.4,1592.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#4E4E4F").s().p("AgnD8IAAn3IBPAAIAAH3g");
	this.shape_214.setTransform(1425.1,1492);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgdAfQgOgNAAgSQAAgRAOgMQAMgOARAAQASAAANAOQAMAMAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
	this.shape_215.setTransform(1359.2,1485.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#FFFFFF").ss(9.1,1,1).p("Ap+AAIT9AA");
	this.shape_216.setTransform(1437.7,1485.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#4E4E4F").s().p("Aj7AoIAAhPIH3AAIAABPg");
	this.shape_217.setTransform(1276.4,1532.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#4E4E4F").s().p("AgnD8IAAn3IBPAAIAAH3g");
	this.shape_218.setTransform(1322.4,1492);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#868687").s().p("A1/DiIAAi6QAAhtBJhOQBJhNBnAAMAoFAAAIABHCg");
	this.shape_219.setTransform(1396.1,1492.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#868687").s().p("AjTmDIGmAAIAAL7IAAAHImmAFg");
	this.shape_220.setTransform(1276.4,1553.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#C0D54B").s().p("AktBQQANgsAmgcQAmgcAvAAQA5AAApAmQAbgsAsgaQAvgbA2AAQBIAAA4AuQA2AsAPBFg");
	this.shape_221.setTransform(653.3,1396.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#C0D54B").s().p("AktBQQAOgsAlgdQAlgbAwAAQA6AAAoAmQAbgsAsgaQAugbA3AAQBIAAA4AuQA2AsAPBFg");
	this.shape_222.setTransform(545.6,1278);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#F7F8F8").s().p("ApRCmIAAkFQAAgdAdgVQAdgUApAAQApAAAdAUQAdAVAAAdQAAAdAdAVQAdAUApAAQApAAAdgUQAdgVAAgdQAAgdAdgVQAdgUApAAQApAAAdAUQAcAVAAAdQAAAdAdAVQAdAUApAAQApAAAdgUQAdgVAAgdQAAgdAdgVQAdgUApAAQApAAAdAUQAdAVAAAdQAAAdAdAVQAdAUApAAQApAAAdgUQAcgUABgcIAAEDg");
	this.shape_223.setTransform(874.7,1566.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#E5E7AC").s().p("AvFDBIAAmBIeLAAIAAGBg");
	this.shape_224.setTransform(1152.4,1500.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#C89F67").s().p("AhfBMQgEAAgCgEQgEgHAHgFIC7iFQAHgGAFAIQADADgBAEQgBAEgDACIi7CFQgCACgCAAIgDgBg");
	this.shape_225.setTransform(251.5,1188.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#C89F67").s().p("AhDA4QgDAAgDgDQgCgDABgEQABgEADgCICDhdQAIgFAFAHQACADgBAEQAAADgDADIiEBdQgCABgDAAIgCAAg");
	this.shape_226.setTransform(248.7,1178.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#C89F67").s().p("AgpAmQgEgBgCgDQgCgDABgEQAAgDADgCIBQg5QAHgFAGAHQACADgBAEQAAAEgDACIhQA4QgCACgDAAIgCAAg");
	this.shape_227.setTransform(246.2,1167.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#C89F67").s().p("AgWAYQgEAAgCgEQgEgHAHgFIApgeQADgCAEABQAEAAACADQACADgBAEQAAAEgEACIgpAeQgCABgDAAIgCAAg");
	this.shape_228.setTransform(244.2,1156.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#C89F67").s().p("ABZBLIi7iFQgEgCAAgEQAAgEABgDQAGgHAIAFIC7CFQADACAAAEQABADgDADQgCAFgFAAQgCAAgDgCg");
	this.shape_229.setTransform(232,1188.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#C89F67").s().p("AA9A2IiDhdQgIgFAFgHQACgEAEAAQAEgBADACICEBdQADADAAADQABAEgCADQgDAEgEAAQgDAAgDgCg");
	this.shape_230.setTransform(234.7,1178.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#C89F67").s().p("AAjAkIhQg4QgDgCAAgEQgBgEACgDQADgDADgBQAEAAADACIBQA5QADACABADQAAAEgCADQgDAEgEAAQgDAAgDgCg");
	this.shape_231.setTransform(237.3,1167.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#C89F67").s().p("AAQAXIgpgeQgDgCgBgEQAAgEACgDQACgDADAAQAEgBADACIAqAeQADACAAAEQABADgDADQgCAFgFAAQgCAAgDgCg");
	this.shape_232.setTransform(239.3,1156.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#C89F67").s().p("AgHHLQgDgDAAgFIAAuGQAAgEADgDQADgEAEAAQAEAAAEAEQADADAAAEIAAOGQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_233.setTransform(241.8,1191.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#C0D87E").s().p("AAAGkQgeABgcgOIjoh3QgtgXgQgwQgQgwAXgtQAMgYAVgQQATgQAZgHQgNgVgCgZQgBgZAMgXQASglAqgMQgYgSgGgdQgHgeANgbQALgVAVgMQATgMAYgBQgSgNgFgWQgFgXAKgUQAMgYAZgIQAZgIAYAMIAfAQIAAghQAAgbATgSQASgTAaAAQAaAAATATQASATAAAaIAAAfIAcgOQAYgMAZAIQAZAIAMAYQAKAUgFAXQgFAWgSANQAXABAUAMQAVAMAKAVQAOAbgHAeQgGAdgYASQApAMATAlQAMAXgBAZQgCAZgNAVQA0AOAZAxQAXAtgQAwQgQAwgtAXIjoB3QgaANgdAAIgEAAg");
	this.shape_234.setTransform(241.8,1167.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#C89F67").s().p("AhkBIQgCgDAAgEQABgDADgDIC7iFQADgCAEABQADAAACADQADADgBAEQgBAEgDACIi7CFQgDACgCAAQgEAAgDgEg");
	this.shape_235.setTransform(237.7,1351.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#C89F67").s().p("AhIA0QgFgHAGgGICEhdQADgCAEABQADAAACADQAGAIgIAFIiDBdQgDACgDAAQgDAAgDgEg");
	this.shape_236.setTransform(235,1340.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#C89F67").s().p("AgvAiQgCgDABgEQAAgDADgDIBQg5QAIgFAFAIQACADgBADQAAAEgDACIhQA5QgDADgDAAQgEAAgDgFg");
	this.shape_237.setTransform(232.4,1330.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#C89F67").s().p("AgcAUQgCgDABgDQAAgEADgCIApgeQAIgFAFAHQADADgBAEQgBAEgDACIgpAeQgDACgDAAQgEAAgDgFg");
	this.shape_238.setTransform(230.5,1319.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#C89F67").s().p("ABYBKIi6iFQgDgCgBgEQgBgEACgDQADgDAEAAQADgBAEACIC6CFQAEADAAADQAAAEgBADQgDAEgEAAQgDAAgEgCg");
	this.shape_239.setTransform(218.2,1351.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#C89F67").s().p("AA8A2IiChdQgIgFAFgIQACgDAEAAQAEgBADACICDBdQAIAGgFAHQgEAEgEAAQgCAAgEgCg");
	this.shape_240.setTransform(221,1340.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#C89F67").s().p("AAjAkIhQg5QgDgCAAgEQgBgDACgDQACgDAEgBQAEgBADACIBQA5QADADAAADQABAEgCADQgEAEgDAAQgDAAgDgCg");
	this.shape_241.setTransform(223.5,1330.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#C89F67").s().p("AAPAXIgogeQgEgCAAgEQAAgEABgDQADgDADAAQAEgBADACIApAeQAEACAAAEQAAADgBADQgDAEgEAAQgDAAgEgBg");
	this.shape_242.setTransform(225.5,1319.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#C89F67").s().p("AgGHMQgEgEAAgEIAAuHQAAgEAEgDQADgEADAAQAFAAADAEQADADAAAEIAAOHQAAAEgDAEQgDACgFAAQgDAAgDgCg");
	this.shape_243.setTransform(228,1353.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#C0D87E").s().p("AAAGkQgfABgagPIjph2QgtgXgQgwQgQgwAXgtQAZgxA0gOQgNgVgCgZQgBgZAMgXQAUgmAogLQgYgSgGgdQgHgeAOgbQAKgVAVgNQAUgMAXAAQgSgNgFgWQgFgXAKgVQAMgXAZgIQAZgIAYAMIAfAQIAAghQAAgbATgSQASgTAaAAQAaAAATATQASASAAAbIAAAfIAdgOQAXgMAZAIQAZAIAMAXQAKAVgFAXQgFAWgSANQAXAAAUAMQAVANALAVQANAbgHAeQgGAdgYASQApALATAmQAMAXgBAZQgCAZgNAVQAZAHAUAQQAUAQAMAYQAXAtgQAwQgQAwgtAXIjoB2QgaAOgdAAIgEAAg");
	this.shape_244.setTransform(228,1330.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#C89F67").s().p("AhfBMQgEAAgCgEQgCgDABgDQAAgEAEgCIC6iFQAIgFAFAHQADADgBAEQgBAEgDACIi7CFQgCABgCAAIgDAAg");
	this.shape_245.setTransform(150,1189.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#C89F67").s().p("AhDA4QgDgBgDgDQgFgIAIgFICDhdQADgCAEABQAEAAACADQAFAIgIAFIiDBdQgCACgDAAIgCAAg");
	this.shape_246.setTransform(147.2,1178.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#C89F67").s().p("AgpAmQgDgBgDgDQgCgDABgEQAAgDADgCIBQg5QADgCAEAAQAEABACADQACADAAAEQgBADgEACIhPA5QgCACgDAAIgCAAg");
	this.shape_247.setTransform(144.6,1168.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#C89F67").s().p("AgWAYQgEAAgCgEQgCgDABgDQAAgEAEgCIApgeQADgCAEABQAEAAACADQACADgBAEQgBAEgDACIgpAeQgCABgCAAIgDAAg");
	this.shape_248.setTransform(142.7,1157.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#C89F67").s().p("ABYBLIi7iFQgDgCAAgEQgBgEACgDQAGgIAHAGIC7CFQAHAFgFAHQgCAEgEAAIgCABQgCAAgDgCg");
	this.shape_249.setTransform(130.4,1189.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#C89F67").s().p("AA9A2IiEhdQgHgFAFgIQADgDADAAQAEgBADACICDBdQAHAFgEAIQgCADgEABIgCAAQgDAAgCgCg");
	this.shape_250.setTransform(133.2,1178.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#C89F67").s().p("AAjAkIhQg5QgDgCAAgDQgBgEACgDQAGgHAHAFIBQA5QADACAAADQABAEgCADQgCADgEABIgCAAQgDAAgCgCg");
	this.shape_251.setTransform(135.7,1168.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#C89F67").s().p("AAQAXIgpgeQgEgCAAgEQgBgEACgDQADgDADAAQAEgBADACIApAeQAHAFgEAHQgCAEgEAAIgCAAQgDAAgCgBg");
	this.shape_252.setTransform(137.7,1157.3);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#C89F67").s().p("AgHHMQgDgEAAgEIAAuHQAAgFADgCQADgEAEAAQAEAAAEAEQADACAAAFIAAOHQAAAEgDAEQgEACgEAAQgEAAgDgCg");
	this.shape_253.setTransform(140.2,1191.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#C0D87E").s().p("AAAGkQgeABgcgOIjoh3QgugXgPgwQgQgwAXgtQAMgYAVgQQATgQAZgHQgOgVgBgZQgBgZAMgXQASglApgMQgXgSgHgdQgHgeAOgbQALgVAVgMQATgMAYgBQgSgNgFgWQgFgXAKgVQAMgXAZgIQAZgIAXAMIAgAQIAAghQAAgaASgTQATgTAZAAQAbAAASATQATATAAAaIAAAfIAcgOQAYgMAZAIQAZAIAMAXQAKAVgFAXQgFAWgSANQAXABAUAMQAVAMAKAVQAOAbgHAeQgGAdgYASQApAMATAlQAMAXgCAZQgBAZgNAVQA0AOAZAxQAXAtgQAwQgQAwgtAXIjpB3QgZANgdAAIgEAAg");
	this.shape_254.setTransform(140.2,1168.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#C0D541").s().p("A88PZIgQACMAAAgwQMAuJAAAMAMHAr3IgFAAQAOA1gBAyQAADtkbDcQkSDVn9CvQn5CtqiBzQqyB1sRArg");
	this.shape_255.setTransform(189.1,1839.4);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#F19717").s().p("AWVUQI7NABQi0ABh/iAQh/h/gBizQAAi0B/iAQB/h/C0AAIN8gCQC0AAB/h/QB/h/AAizQAAi0h/h/QiAiAi0ABI9OACQi0AAiAh/Qh/h/AAi0QAAi0B/h/QB/iAC0AAMAqfgADIErAPMAADAotg");
	this.shape_256.setTransform(1364.4,1676.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#337F3D").s().p("A68UPMgADgotIErAQIbNgCQC0AAB/B/QB/B/AAC0QABC0h/B/QiAB/izABIt8AAQi0ABh/B/Qh/B/AACzQAAC0B/B/QCAB/C0AAIdOgCQC0AACAB/QB/B/AAC0QAAC0h/CAQh/B/i0AAMgqgAADg");
	this.shape_257.setTransform(238.3,1388.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#F0D193").s().p("AjLCOIDLkbIDMEbg");
	this.shape_258.setTransform(513,1708.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#F0D193").s().p("AjLCOIDLkbIDMEbg");
	this.shape_259.setTransform(467.8,1717.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#CB5F63").s().p("AjLCOIDLkbIDMEbg");
	this.shape_260.setTransform(422.5,1708.6);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#F0D193").s().p("AAAiNIDMEaImXABg");
	this.shape_261.setTransform(377.3,1719.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#F0D193").s().p("AAAiNIDMEaImXABg");
	this.shape_262.setTransform(332.1,1708.7);

	this.instance_18 = new lib.ClipGroup_2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(501.1,1991.3,1,1,0,0,0,184.5,321.8);

	this.instance_19 = new lib.ClipGroup_3();
	this.instance_19.parent = this;
	this.instance_19.setTransform(240.4,1488.3,1,1,0,0,0,95.4,87.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#C89F67").s().p("AheBMQgFgBgCgDQgCgDABgEQABgDADgCIC6iGQAIgEAGAHQACADgBAEQAAADgEACIi6CGIgFABIgCAAg");
	this.shape_263.setTransform(610.6,1684.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#C89F67").s().p("AhDA4QgDgBgDgDQgFgIAIgFICDhdQADgCAEABQAEAAACADQACADgBAEQAAAEgEACIiDBdQgCACgCAAIgDAAg");
	this.shape_264.setTransform(607.8,1674);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#C89F67").s().p("AgpAmQgEAAgCgEQgDgDABgDQABgFAEgCIBPg4QADgDAEABQAEAAACAEQADADgCAEQAAADgEACIhPA6QgCABgDAAIgCAAg");
	this.shape_265.setTransform(605.2,1663.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#C89F67").s().p("AgWAYQgEgBgCgDQgCgDABgEQAAgDAEgCIApgeQADgCAEABQAEAAACADQACADgBAEQgBAEgDACIgpAeIgEABIgDAAg");
	this.shape_266.setTransform(603.3,1652.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#C89F67").s().p("ABYBLIi7iGQgDgCAAgDQAAgEACgDQAFgHAHAEIC7CGQADACABADQABAEgDADQgCADgDABIgDAAIgFgBg");
	this.shape_267.setTransform(591,1684.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#C89F67").s().p("AA9A3IiEhdQgDgCAAgEQgBgEACgDQAGgHAHAFICDBdQAHAEgEAJQgCADgEAAIgDAAQgCAAgCgBg");
	this.shape_268.setTransform(593.8,1673.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#C89F67").s().p("AAjAlIhQg5QgDgDgBgDQAAgEACgDQAFgHAIAFIBQA5QADACAAAEQABAEgCADQgCADgEAAIgCAAQgDAAgCgBg");
	this.shape_269.setTransform(596.4,1663.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#C89F67").s().p("AAQAXIgpgeQgEgCAAgEQgBgEACgDQADgDADAAQAEgBADACIApAeQAEACAAADQABAEgCADQgCADgEABIgDAAIgEgBg");
	this.shape_270.setTransform(598.3,1652.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#C89F67").s().p("AgHHLQgDgDAAgFIAAuGQAAgFADgDQADgCAEAAQAEAAAEACQADADAAAFIAAOGQAAAFgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_271.setTransform(600.8,1686.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#C0D87E").s().p("AAAGkQgdABgdgPIjoh2QgugXgPgwQgQgwAXgtQAMgYAVgQQATgQAZgHQgOgVgBgZQgBgZAMgXQASgmApgLQgXgSgHgdQgGgeANgbQALgVAVgNQAUgMAXAAQgSgNgFgXQgFgWAKgVQAMgXAZgIQAZgIAXAMIAgAQIAAghQAAgbASgSQATgTAZAAQAbAAASATQATASAAAbIAAAfIAcgOQAYgMAZAIQAZAIAMAXQAKAVgFAWQgFAXgSANQAXAAAUAMQAVANAKAVQAOAbgHAeQgGAdgYASQApALATAmQAMAXgBAZQgCAZgNAVQA0AOAZAxQAXAtgQAwQgQAwgtAXIjpB2QgaAOgcAAIgEAAg");
	this.shape_272.setTransform(600.8,1663.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#658549").s().p("An5B+QAWhGA+gsQBAgsBQAAQBeAABGA8QAthFBLgpQBOgrBbAAQB5AABdBIQBcBGAYBtg");
	this.shape_273.setTransform(1447.9,1954.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#658549").s().p("AlRBUQAPgvAqgdQArgdA1AAQA/AAAuAoQAeguAygcQA0gcA8AAQBRAAA+AwQA+AvAQBIg");
	this.shape_274.setTransform(961.3,1406.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#658549").s().p("AlQBUQAQhJA9guQA+gwBRAAQA8AAA0AcQAyAcAeAtQAugnA/AAQA1AAAqAdQAqAdAPAvg");
	this.shape_275.setTransform(825.5,1242.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#E5E8AF").s().p("Eg56AW+I1gr1QVCwWY2ouQZspCbZAAQPpAAPQC/QO5C7OGFrMAAAAiWg");
	this.shape_276.setTransform(1027.5,1118.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#E5E8AF").s().p("Egk+ApJQikikABjnQgBjoCkijQCkikDnAAINRAAQAvgIArAAIR8AAQDnAACjijQCjikABjnQgBjoijijQijikjnAAI7qAAQjoAAikijQijikAAjmQAAjoCjijQCkikDoAAMAstAAAIAAABIDoAAQDnAACkikQCjijAAjoQAAjnijikQikijjnAAIzPAAQjnAAikikQijijAAjoQAAjnCjikQCkijDnAAMAkSAAAMAAAA0VI0rAAMAAAAjCMgxqAAAQjnAAikijg");
	this.shape_277.setTransform(1099.8,1657.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#E5E7AC").s().p("AtaMyIAA5jIa1AAIAAZjg");
	this.shape_278.setTransform(1144.7,1578.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#E5E8AF").s().p("EgZWA+XMAAAh8tMAysAAAMAAAB8tg");
	this.shape_279.setTransform(1373.7,1648.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#E5E8AF").s().p("Az5aLQjoAAikijQijikAAjnQAAjoCjijQCkikDoAAIR7AAQDnAACjijQCkikAAjnQAAjnikijQijikjnAAIzPAAQjoAAijijQijikAAjnQAAjnCjikQCjijDoAAMAzJAAAMAAAA0Vg");
	this.shape_280.setTransform(1045.4,1320.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#E5E8AF").s().p("AtOaYQjpAAililQikilAAjpQAAjpCkilQClilDpAAISEAAQDpAACkikQClilAAjpQAAjoililQikiljpAAInTAAQjpAAililQilikAAjpQAAjpClilQClilDpAAIYeAAMAAAA0vg");
	this.shape_281.setTransform(936.4,1544.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#55B13C").s().p("EgklAuuMAAAg3+IWGAAMAAAgldMApwAAAQD3AACwCvQCuCvAAD3QAAD3iuCvQiwCvj3AAIi1AAQg1AJgsAAIzLAAQj2AAivCvQivCvAAD3QAAD3CvCvQCvCvD2AAIOOAPQD4AACvCvQCvCvAAD2QAAD4ivCvQivCvj4AAMggdgAPIAAgBIj3AAQj3AAivCvQivCvAAD3QAAD4CvCvQCvCvD3AAIUkAAQD3AACvCvQCvCuAAD4QAAD3ivCvQivCvj3AAg");
	this.shape_282.setTransform(530.7,1749);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#55B13C").s().p("EgaDhBZMA0HAAAMAAACCzMg0HAAAg");
	this.shape_283.setTransform(166.8,1629.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#55B13C").s().p("A04LlIAA3JMApxAAAIAAXJg");
	this.shape_284.setTransform(313.9,1634.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#55B13C").s().p("EgIoAoHMAAAhQNIRRAAMAAABQNg");
	this.shape_285.setTransform(313.9,1467.5);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#55B13C").s().p("A4EcAMAAAg3+MAlaAAAQD4gBCvCvQCvCvAAD3QAAD4ivCvQivCuj4AAIzKAAQj4AAiuCwQivCvAAD2QAAD3CvCvQCuCvD4AAIUkAAQD3AACvCvQCvCvAAD3QAAD3ivCvQivCvj3ABg");
	this.shape_286.setTransform(487.7,1389.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#136195").s().p("AFGWlQjVAAiWiNQiWiNAAjIQAAjHCWiNQCWiNDVAAIQgAAQDVAACXiNQCWiOAAjHQAAjGiWiNQiXiOjVAAMg48AAAQjVAAiWiNQiXiNAAjHQAAjICXiNQCWiNDVAAMBOvAAAMAAAAtJg");
	this.shape_287.setTransform(820.8,1056.7);

	this.instance_20 = new lib.Group_15();
	this.instance_20.parent = this;
	this.instance_20.setTransform(251,946.4,1,1,0,0,0,251.3,274.7);
	this.instance_20.alpha = 0.602;

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#2B9CC7").s().p("EhQJArpMAAAhXSMCgTAAAMAAABXSg");
	this.shape_288.setTransform(515,951.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_288},{t:this.instance_20},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.instance_19},{t:this.instance_18},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.instance_17},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.instance_16},{t:this.shape_169},{t:this.shape_168},{t:this.instance_15},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.instance_14},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]}).to({state:[{t:this.shape_288},{t:this.instance_20},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.instance_19},{t:this.instance_18},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.instance_17},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.instance_16},{t:this.shape_169},{t:this.shape_168},{t:this.instance_15},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.instance_14},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},89).wait(1));

	// waves1
	this.instance_21 = new lib.Tween5("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(763,2008);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({x:968.3},89).wait(1));

	// waves2
	this.instance_22 = new lib.Tween10("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(763,1947);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({x:865.9},89).wait(1));

	// waves3
	this.instance_23 = new lib.Tween12("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(763,1885);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({x:657.4},89).wait(1));

	// waves4
	this.instance_24 = new lib.Tween14("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(763,1824);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({x:866.9},89).wait(1));

	// waves5
	this.instance_25 = new lib.Tween3("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(763,1763);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({x:661.2},89).wait(1));

	// far
	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#0E5E80").s().p("AOvGSIAAlIQAAhshNhNQhNhNhtAAQhtAAhNBNQhNBNAABsIAAFIIiNAAIAAlIQAAhshNhNQhNhNhtAAQhsAAhOBNQhNBNAABsIAAFIIiNAAIAAlIQAAhshNhNQhNhNhtAAQhtAAhNBNQhNBNAABsIAAFIIiXAAIAAsjMAhZAAAIAAMjg");
	this.shape_289.setTransform(1431.1,633.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#0E5E80").s().p("AOvGSIAAlIQAAhshNhNQhNhNhtAAQhtAAhNBNQhNBNAABsIAAFIIiNAAIAAlIQAAhshNhNQhOhNhtAAQhsAAhNBNQhNBNAABsIAAFIIiNAAIAAlIQAAhshNhNQhNhNhtAAQhtAAhNBNQhNBNAABsIAAFIIiXAAIAAsjMAhZAAAIAAMjg");
	this.shape_290.setTransform(1222.3,633.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#0E5E80").s().p("AOvGSIAAlIQAAhshNhNQhNhNhtAAQhtAAhNBNQhNBNAABsIAAFIIiNAAIAAlIQAAhshOhNQhMhNhtAAQhsAAhOBNQhNBNAABsIAAFIIiNAAIAAlIQAAhshNhNQhNhNhtAAQhtAAhNBNQhNBNAABsIAAFIIiXAAIAAsjMAhZAAAIAAMjg");
	this.shape_291.setTransform(1014.1,633.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#0E5E80").s().p("AOvGSIAAlIQAAhshNhNQhNhNhtAAQhtAAhNBNQhNBNAABsIAAFIIiOAAIAAlIQAAhshNhNQhNhNhtAAQhsAAhNBNQhNBNAABsIAAFIIiNAAIAAlIQAAhshNhNQhNhNhtAAQhtAAhNBNQhNBNAABsIAAFIIiXAAIAAsjMAhZAAAIAAMjg");
	this.shape_292.setTransform(811.9,633.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#031225").s().p("Al7YkIBjkBQAGgSAog7IAng4IgOgGIBDivIASAHQAfhaAPgkQAJgWgFggIgHgbIpNjiQggAJgnBPQgTAogNAmIAMAZIg3CzIgRgGQAHAVgiCGIhiEAInWi0QAFgTAKgXQAGgOA2gjIA1gfIAeAKQAiALAXADQAqAGAbgyQAIgOAAgaQgCgfABgQQABgKAKgnQghgggKgtQgKguARgsQAOglAdgZQAcgZAlgJQANglATgqQAJgUAZgkIAXggIhqgoQhBgagbhCQgIgVgEgWIgCgSIAHiCQi2A4gcAGQgRAEgOgKIgLgKIgihRQgLgbAOgUIAPgOIBMgiQhbiPg/hfQgng7AKg3QAEgSAIgOICZjyQgegmgPgyIhCg6IA3gcQACgsAPgpQAGgPAMgXIgcg/IBZgJQArgjAzgPIA2heIA8BWQAeAEAbALIALAEIBVgkIAPBwQApAyANBAQAOBBgTA/IBSgOQA4h+gnj8QgMhOATiLIAUh7IAEgFQg0gcgUg4QgVg5AVg5QAYg+A9gbQA8gbA/AYQA+AYAbA9QAbA8gYA+QgOAnggAbQgeAZgnAJIAAAAQgbBPAGCNQAFCAAZBDQATAyAWB5QAKA9AHAyIBgALIATgyIArgBQARgsAjg9QBEh6BWhZQBVhZCGgeQBCgOAxADIAOglIBCABQBVAIBgAlQBgAkBOA2QAnAcAUATIgKAbQCuClgWEdQgLCPguBtIAlAgIgYA9IAxAnQAugyBkhGICXhkQAyghBah1QAug6Ajg0IADAAQgXghgFgnQgGgoAPgmQAYg+A9gcQA9gbA+AYQA+AYAbA9QAbA9gYA+QgXA8g7AcQg7Abg9gVQgLAnggAzQg3BYhlBbQhwBlhIBtQgjA3gOAiIAyBIQAbg4AxgmQAwgmA8gNIBihKIAjBPIATAGQAaALATAMIBsgSIgaBiQAgAwAJA7IA3BAIg5AXQgEAWgJAYQgRAtggAjIASAwIhPAEQgrAaguAIIgdCbQgcCMgGAWQgHAWgZAOQgMAHgLACIlBBbIAbBFQAKAYgLAUQgGAKgHAFIhIAkQgUAKgTgJQgIgEgOgOQgJgJhhilIhUBfQgxA2hHABQgXAAgWgFIhygrIgHAxQgHA4gHAhQgCAQgSAmQATAeADAkQAEAkgNAjQgRArglAbQgkAagsAEIgBABQgIAQgTAWQgPASgKAKQgTAPgGAJQgQAWACAdQABAcAxAjQAZARAZALQAYApgCBFQgBAjgFAagALfJpICoglIAkjngAzzj9IBqCYIAQlYg");
	this.shape_293.setTransform(225.5,312.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#365279").ss(17.1).p("EgpWgPIQBFgDB9AHQD5AOERAxQNqCcMYG/QFlDKGWEpQBoBMC+CLQCeByB6BJQE1C5FaBUQGVBhJYAA");
	this.shape_294.setTransform(264.6,522.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#EE8D85").s().p("EAncAW5IAAnqQAAihhxhyQhyhxihAAQihAAhxBxQhyByAAChIAAHqIkKAAIAAptQABihhyhxQhyhyihAAQigAAhyByQhxBxgBChIAAJtIkJAAIAAz2QAAihhyhxQhyhxigAAQigAAhyBxQhyBxAAChIAAT2IkqAAIAA73QAAighxhyQhyhyihAAQigAAhyByQhyByAACgIAAb3IjpAAMAAAghAQAAihhxhxQhyhyihAAQigAAhyByQhyBxAAChMAAAAhAIkDAAMgAJgtwQBGgDB+AHQD6AOETAxQNwCdMdHCQFsDOGNEpIEiDZQCdByB2BJQEuC7FWBTQGSBjJbAAIAAPSg");
	this.shape_295.setTransform(268.9,575.3);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#72BEBC").s().p("AJFDzQg9i5ieh0Qihh3jJAAQjIAAihB3QieB0g9C5IgCAAIAAnlISNAAIAAHlg");
	this.shape_296.setTransform(592.2,706.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#2F6C92").s().p("ApGDzIAAnlISNAAIAAHlg");
	this.shape_297.setTransform(592.2,706.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#72BEBC").s().p("AJFDzQg9i5ieh0Qihh3jJAAQjIAAihB3QieB0g9C5IgCAAIAAnlISNAAIAAHlg");
	this.shape_298.setTransform(592.2,641.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#2F6C92").s().p("ApGDzIAAnlISNAAIAAHlg");
	this.shape_299.setTransform(592.2,641.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#72BEBC").s().p("AJFDzQg9i6iehzQihh3jJABQjIgBihB3QieBzg9C6IgCAAIAAnlISNAAIAAHlg");
	this.shape_300.setTransform(592.2,576.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#2F6C92").s().p("ApGDzIAAnlISNAAIAAHlg");
	this.shape_301.setTransform(592.2,576.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#0E5E80").s().p("AJFDzQg9i6iehzQihh3jJAAQjIAAihB3QieBzg9C6IgCAAIAAnlISNAAIAAHlg");
	this.shape_302.setTransform(592.2,540.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#2F6C92").s().p("ApGDzIAAnlISNAAIAAHlg");
	this.shape_303.setTransform(592.2,557.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#2F6C92").s().p("ApGBaIAAizISNAAIAACzg");
	this.shape_304.setTransform(592.2,524.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#2F6C92").s().p("AkxBoIE2kxIEsGQIpiADg");
	this.shape_305.setTransform(843.1,677.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#6FB8C2").s().p("Ai+BkIBgjHIEZAAIAEDHg");
	this.shape_306.setTransform(852.2,566.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#6FB8C2").s().p("AkfBeIBai7IHhAAIAEC7g");
	this.shape_307.setTransform(843.3,606.1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#2F6C92").s().p("AjyoKIDkjkIEjFZIopSFg");
	this.shape_308.setTransform(842.2,540.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#2F6C92").s().p("AjyB5IAGjxIGOAAIBRBhIAACQg");
	this.shape_309.setTransform(843.8,414.7);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#37A9D4").s().p("AikAjIABhFIEMAAIA8BFg");
	this.shape_310.setTransform(837.1,391.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#37A9D4").s().p("AhyAXIABgtIC9AAIAnAtg");
	this.shape_311.setTransform(832.2,380.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#2F6C92").s().p("AjjhYIHHgpIkVEDg");
	this.shape_312.setTransform(844.2,364.8);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#6FB8C2").s().p("AiHlFIEiFZIk1Eyg");
	this.shape_313.setTransform(828.1,655.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#6FB8C2").s().p("AiRgpIEXkFIAMJdg");
	this.shape_314.setTransform(855.3,469.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#6FB8C2").s().p("AiQgpIEVkEIAMJbg");
	this.shape_315.setTransform(853.7,382);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#0C4658").s().p("EgE9Ai3MABog9LIEvoiICYH5MABMA90g");
	this.shape_316.setTransform(842.8,524.4);

	this.instance_26 = new lib.ClipGroup_4_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(727.6,525,1,1,0,0,0,49,29.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#2F6C92").s().p("AjnDeIjom7IOfAAIjpG7g");
	this.shape_317.setTransform(727.7,528.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#0C4658").s().p("AjnjdIHPAAIjoG7g");
	this.shape_318.setTransform(727.6,484);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#488CBC").s().p("AjnDeIDnm7IDoG7g");
	this.shape_319.setTransform(704.5,484);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#3FAAD7").s().p("AjnDeIDnm7IDoG7g");
	this.shape_320.setTransform(750.8,484);

	this.instance_27 = new lib.ClipGroup_1_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(727.6,613.7,1,1,0,0,0,49,29.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#2F6C92").s().p("AjnDeIjom7IOfAAIjpG7g");
	this.shape_321.setTransform(727.7,617);

	this.instance_28 = new lib.ClipGroup_2_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(727.6,702.5,1,1,0,0,0,49,29.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#2F6C92").s().p("AjnDeIjom7IOfAAIjpG7g");
	this.shape_322.setTransform(727.7,705.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#0C4658").s().p("AjnjdIHPAAIjoG7g");
	this.shape_323.setTransform(727.6,572.7);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#488CBC").s().p("AjnDeIDnm7IDoG7g");
	this.shape_324.setTransform(704.5,572.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#3FAAD7").s().p("AjnDeIDnm7IDoG7g");
	this.shape_325.setTransform(750.8,572.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#0C4658").s().p("AjnjdIHPAAIjoG6g");
	this.shape_326.setTransform(727.6,661.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#488CBC").s().p("AjnDdIDnm6IDoG6g");
	this.shape_327.setTransform(704.5,661.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#3FAAD7").s().p("AjnDdIDnm6IDoG6g");
	this.shape_328.setTransform(750.8,661.4);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#0C4658").s().p("AjnjdIHPAAIjoG7g");
	this.shape_329.setTransform(727.6,750);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#488CBC").s().p("AjnDeIDnm7IDoG7g");
	this.shape_330.setTransform(704.5,750);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#3FAAD7").s().p("AjnDeIDnm7IDoG7g");
	this.shape_331.setTransform(750.8,750);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#488CBC").s().p("ApGScMAAAgk3ISNAAMAAAAk3g");
	this.shape_332.setTransform(592.2,633.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#0C4658").s().p("ACdHTQi4hlgIjcQgEhuAJhmQAKhhACgiQAFg1gKgbQgMgegogcQhGgvhpgfIhZgVIAOhaIIsAAIBtQZQhbgHhcgzg");
	this.shape_333.setTransform(429.6,628.7);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#0C4658").s().p("AkMCPIArkdIHQAAIAfEdg");
	this.shape_334.setTransform(425,554.4);

	this.instance_29 = new lib.ClipGroup_3_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(424.5,561.8,1,1,0,0,0,46.2,139.4);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#0E5E80").s().p("AhlDWIj8mrILDAAIkjGrg");
	this.shape_335.setTransform(430.3,401);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#0E5E80").s().p("AlgDVIEjmpICjAAID7Gpg");
	this.shape_336.setTransform(430.1,348.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#6FB8C2").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_337.setTransform(482.4,374.5);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#6FB8C2").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_338.setTransform(464.9,374.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#6FB8C2").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_339.setTransform(447.3,374.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#6FB8C2").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_340.setTransform(429.8,374.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#6FB8C2").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_341.setTransform(412.3,374.5);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#6FB8C2").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_342.setTransform(394.7,374.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#6FB8C2").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_343.setTransform(377.2,374.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#0C4658").s().p("AqeDVIJempICjAAII8Gpg");
	this.shape_344.setTransform(430.3,348.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#0C4658").s().p("AhjDWIo7mrIU9AAIpeGrg");
	this.shape_345.setTransform(430.3,401);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#37A9D4").s().p("AhRAkIAAhHICjAAIAABHg");
	this.shape_346.setTransform(432.1,323.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#1F5670").s().p("AqeAzIAAhlIU9AAIAABlg");
	this.shape_347.setTransform(430.3,374.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#2F6C92").s().p("Am0VYMAGlgrJICjAAMAEgArjg");
	this.shape_348.setTransform(422,561.8);

	this.instance_30 = new lib.ClipGroup_0_2();
	this.instance_30.parent = this;
	this.instance_30.setTransform(649.3,454.2,1,1,0,0,0,133.3,266.1);
	this.instance_30.alpha = 0.25;

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#0C4658").s().p("AqsgxIDKAAIBQpyICWhLIBCpTICghSIAAydIFuHIIAAABIDhAAQAqAAAeAeQAeAdAAAqQAAArgeAdQgeAegqAAIg/AAQgqAAgdAeQgeAeAAAqQAAAqAeAeQAdAeAqAAIFLAAQAqAAAeAeQAeAdAAAqQAAAqgeAeQgeAegqAAIntAAMAAABAIIz6Aug");
	this.shape_349.setTransform(688.7,459.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#0C4658").s().p("AmlKbIAA01INLAAIAAU1g");
	this.shape_350.setTransform(536.7,624.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#0C4658").s().p("AmlLyIAA3jINLAAIAAXjg");
	this.shape_351.setTransform(785.1,660.9);

	this.instance_31 = new lib.ClipGroup_6();
	this.instance_31.parent = this;
	this.instance_31.setTransform(1156.2,501.4,1,1,0,0,0,115.2,93.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#DCDDDD").s().p("AETD+IktgBQhhAAiSgDQh/gDgcAAIggAGIiUAAIAAgEQAVgEAOgKQANgKAAgNIAAmGIgBgbQgDgUgNgcQAcAIAaAYIBUBMQBuBPCEA5QC3BQCRgDQB2gCBIgMQAkgFANgGIAbABQAhACAeAGQBhAVAgA5QAgA6g0AmQgRAMgXAJIgTAGIiRABIheAAg");
	this.shape_352.setTransform(1487.2,569.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#3A6493").s().p("AwkOkQAAgggUglIgog+QgyhLAig9QAmhCGnhjQDig1FjhLQCTglCwh8QCPhkBRheQA5hBCVkJQB4jVAtheQBDiIAdgtQBQiCA/AAQA9AAATBAQAKAfgDAgIAAY0QAABWgoAnQgMAMgPAHIgNAEg");
	this.shape_353.setTransform(1156.2,501.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#3F3B3A").s().p("AxwP2QAAgjgXgoIgshDQg3hSAmhDQAqhJGnhrQDig5F0hRQClgpDFiHQChhtBbhmQA/hGCnkgQCGjpAzhlQBHiOAjg4QBbiNBGAAQBFAAAVBFQAKAigDAjIAAbBQAABcgsArQgOAOgRAGIgOAFg");
	this.shape_354.setTransform(1151.9,493.2);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#DCDDDD").s().p("AjbHtIAAgHQApgJAZgTQAZgUABgXIAAr6QAAgsgBgHQgGgogag2QA3ASAzAsICXCJQBaBTAJATQAUAoAEAcIABAmIAAIJQAAAWhEASQg8ARg1AAg");
	this.shape_355.setTransform(1401.5,545.3);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#C9CACA").s().p("AkPLbIAAgKQAzgOAfgcQAggdAAgjIAAxpQAAhCgBgLQgHg6gghRQBDAaA+BDIC7DKQBwB8ALAbQAYA7AFArQABAJAAAvIgBMEQAAAhhSAbQhLAZhBAAg");
	this.shape_356.setTransform(1352.2,521.5);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#DCDDDD").s().p("Ak8P2IAP/rIAVABQAcADAeALQBhAjBZBhQBkBtBkCHQBdB/ATAvQAgBSAHA6QACAMAABBIgBRpQAAAwg4AiQg4AihQAAg");
	this.shape_357.setTransform(1296,493.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.instance_31},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.instance_30},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.instance_29},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.instance_28},{t:this.shape_321},{t:this.instance_27},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.instance_26},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289}]}).to({state:[{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.instance_31},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.instance_30},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.instance_29},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.instance_28},{t:this.shape_321},{t:this.instance_27},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.instance_26},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289}]},89).wait(1));

	// cloud3
	this.instance_32 = new lib.cloud3();
	this.instance_32.parent = this;
	this.instance_32.setTransform(1424.7,-60.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).to({x:1355.9},29).to({x:1462},33).to({x:1426.1},27).wait(1));

	// cloud2
	this.instance_33 = new lib.cloud2();
	this.instance_33.parent = this;
	this.instance_33.setTransform(1451.8,410.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_33).to({x:1500.4},50).to({x:1450.2},28).to({x:1451.7},11).wait(1));

	// cloud1
	this.instance_34 = new lib.cloud1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(962.6,336.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_34).to({x:1015.3},34).to({x:963.6},55).wait(1));

	// cloud0
	this.instance_35 = new lib.cloud0();
	this.instance_35.parent = this;
	this.instance_35.setTransform(3.2,203.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).to({x:-13},18).to({x:19.4},27).to({x:-13},27).to({x:2.3},17).wait(1));

	// sky
	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("Eh35A0jMAAAhpFMDvzAAAMAAABpFg");
	this.shape_358.setTransform(770.6,336.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_358).wait(90));

	// bg
	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AjPDPQhVhVAAh6QAAh4BVhXQBXhVB4AAQB6AABVBVQBXBXgBB4QABB6hXBVQhVBXh6gBQh4ABhXhXg");
	this.shape_359.setTransform(936.8,626.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#2F94CA").s().p("Eh3/A/kMAAAh/HMDv/AAAMAAAB/Hg");
	this.shape_360.setTransform(768,1641.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_360},{t:this.shape_359}]}).to({state:[{t:this.shape_360},{t:this.shape_359}]},89).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(196.8,779.1,2451.1,2431.8);
// library properties:
lib.properties = {
	width: 1536,
	height: 2048,
	fps: 18,
	color: "#333333",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;