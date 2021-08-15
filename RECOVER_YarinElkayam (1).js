(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#390075").s().p("Aj6KrQk5h5kDi4Qj7iyimjTQinjVg5jVQg7jcBEi/IADgIIBNA1QAqAcAdAMQDABQDrAZQCvATEUgFQF3gIBMACQD/AGDEAvQDuA5CrB6QBYA/BeBiQA6A8BnB7QB+CWA3BgQBTCUgCCGQAAA6gRA6QjyD4nbAiQhFAFhGAAQmjAAnBiug");
	this.shape.setTransform(149.0765,85.7184);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,298.2,171.5), null);


(lib.Group_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#937641").s().p("EA1/AjVQlniClMmmQpdsAj40/QhOmkghmrQgQjWgBiBQhlCJjEDaQmHG0nWGUQqSI1rSGmQuIIPu4EOI+rH7QDrhJGNieQMZk7MmmkQRopNPirLQTZuAPAwVQAgFABSHTQCiOlD0LcQFVQBHGHcQI3JULJkuQg1A/heBLQi9CXjPA9QiDAmiCAAQifAAidg5g");
	this.shape.setTransform(457.525,231.8488);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,915.1,463.7), null);


(lib.starMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(1,1,1).p("AAAB2IgehXIhdgDIBKg4IgahZIBLA1IBMg1IgaBZIBKA4IhdADg");
	this.shape.setTransform(12.375,-422.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AgeAeIhdgCIBKg3IgahZIBLA0IBMg0IgaBZIBKA3IhdACIgfBYg");
	this.shape_1.setTransform(12.375,-422.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFF00").ss(1,1,1).p("AhvAaIBDgyIgYhRIBEAwIBFgwIgXBRIBCAyIhUACIgcBOIgbhOg");
	this.shape_2.setTransform(12.375,-422.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AgbAcIhUgCIBDgzIgYhQIBEAvIBFgvIgXBQIBCAzIhUACIgcBOg");
	this.shape_3.setTransform(12.375,-422.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFF00").ss(1,1,1).p("AhjAXIA7gtIgVhHIA9ApIA+gpIgWBHIA8AtIhLABIgZBGIgYhGg");
	this.shape_4.setTransform(12.4,-422.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AgXAZIhMgDIA8gsIgWhIIA9AqIA9gqIgUBIIA6AsIhKADIgZBFg");
	this.shape_5.setTransform(12.4,-422.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFF00").ss(1,1,1).p("AhWAUIA0gnIgTg/IA1AlIA2glIgSA/IA0AnIhCACIgWA9IgUg9g");
	this.shape_6.setTransform(12.4,-422.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AgUAWIhCgCIAzgnIgSg/IA1AlIA2glIgSA/IAzAnIhBACIgWA9g");
	this.shape_7.setTransform(12.4,-422.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFF00").ss(1,1,1).p("AAABIIgRg1Ig5gCIAtghIgQg3IAtAgIAvggIgQA3IAtAhIg5ACg");
	this.shape_8.setTransform(12.4,-422.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AgSATIg4gCIAtghIgRg3IAuAgIAuggIgPA3IAtAhIg5ACIgTA1g");
	this.shape_9.setTransform(12.4,-422.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFF26").ss(1,1,1).p("AhWAUIA0gnIgTg/IA1AlIA2glIgSA/IAzAnIhBACIgWA9IgUg9g");
	this.shape_10.setTransform(12.425,-422.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF26").s().p("AgUAWIhCgCIA0gnIgTg/IA1AlIA2glIgSA/IAzAnIhBACIgWA9g");
	this.shape_11.setTransform(12.425,-422.725);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFF4D").ss(1,1,1).p("AhiAXIA7gtIgVhHIA8AqIA9gqIgUBHIA6AtIhKACIgZBFIgXhFg");
	this.shape_12.setTransform(12.425,-422.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF4D").s().p("AgXAZIhLgCIA7gtIgVhHIA8AqIA9gqIgUBHIA6AtIhKACIgZBFg");
	this.shape_13.setTransform(12.425,-422.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFF73").ss(1,1,1).p("AhuAZIBCgxIgYhRIBEAvIBFgvIgYBRIBCAxIhTACIgcBPIgahPg");
	this.shape_14.setTransform(12.45,-422.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF73").s().p("AgaAbIhUgCIBCgxIgYhRIBEAvIBEgvIgWBRIBBAxIhTACIgcBPg");
	this.shape_15.setTransform(12.45,-422.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFF99").ss(1,1,1).p("AAAB1IgdhWIhdgDIBKg3IgahZIBKA0IBMg0IgZBZIBIA3IhcADg");
	this.shape_16.setTransform(12.45,-422.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF99").s().p("AgdAfIhdgDIBJg3IgahZIBLA0IBMg0IgaBZIBJA3IhcADIgfBWg");
	this.shape_17.setTransform(12.45,-422.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-435.4,26.8,25.5);


(lib.Group_46 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362045").s().p("Av4I6Qjcg8iBhhQiFhlgQh+QgPh+BpiBQBlh+DIhvQGkjsJ0hNQJzhNHRB/QDcA8CBBhQCFBlAQB+QAPB+hpCBQhlB+jIBvQmkDsp0BNQjrAdjWAAQlhAAkihPg");
	this.shape.setTransform(151.65,64.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_46, new cjs.Rectangle(0,-0.1,303.3,129.79999999999998), null);


(lib.Group_45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362045").s().p("AuTLSQjjgaiOhMQiThOgjh7Qgjh6BTiRQBRiLCziMQF8krJgiuQJeitHgA1QDjAaCOBMQCTBOAjB7QAjB6hTCRQhRCLizCMQl7ErpgCtQkqBWkeAeQiVAQiIAAQhyAAhogLg");
	this.shape.setTransform(147.725,73.2179);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_45, new cjs.Rectangle(0,-0.1,295.5,146.7), null);


(lib.Group_44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362045").s().p("AgUJwQp4gVm4jGQjRhehwh0Qhzh4AEh+QAEh/B8hwQB4hsDWhQQHEinJ3AVQJ4AWG4DGQDQBdBwB1QB0B4gEB+QgEB/h8BwQh4BsjWBPQmQCVocAAQhHAAhIgDg");
	this.shape.setTransform(152.5017,62.7051);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_44, new cjs.Rectangle(0,0,305,125.4), null);


(lib.Group_40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362045").s().p("EhU5AULQqEg8lXh3QkKijhSjDQBEjWIhj7QIQj0OMj3QOPj4SMjZQS0jhUpiiQUniiTIhJQSdhGOxAVQOtAVI8BtQJMBwB1C/QggDSjaDeQkwDHpiDUQpbDStKDLUgbsAGsgjIAEUUgjHAEUgcgAAMIiUABQsEAApFg1g");
	this.shape.setTransform(676.85,134.3565);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_40, new cjs.Rectangle(0,0,1353.7,268.8), null);


(lib.Group_33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhF8AU4QuJhgobiyQocizgajUQgZjRHmj9QHWj0Nwj8QNwj8SDjdQSrjlUoihQUniiS/hDQSWhBOTAgQOTAgIDB8QIVCAAaDRQAaDVngEvQngEvtYE4QuJFJxbEGQzHEe0GCeQ0FCeznARQicACiZAAQvIAAs7hYg");
	this.shape.setTransform(648.8282,142.3311);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_33, new cjs.Rectangle(0,0,1297.7,284.7), null);


(lib.Group_32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362045").s().p("AmrRPQmrk2jrkBQjrkBv6myQn+jZnOimQgBgqAxgbQBig3D2BMQMHDvK+FrQITEUHEFIQETDHFPAwQFQAxFChvQLCj1JsluQLjm0CclwQBijnlikbQhuhYiOhTIh5hBQQUFAiRHyQh0GOtjHtQprFgulFtQkjBykhBmIjkBPQinhojWiag");
	this.shape.setTransform(331.5089,136.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_32, new cjs.Rectangle(0,0,663,272.2), null);


(lib.Group_31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362045").s().p("AlLTpQvhiBqujBQvBkNjRlnQkFm/OooyQirCPiMC1QkXFqChDAQEmFhMGDlQJdCyMDBJQFpAiFQiJQFQiJDskVQFpmmG8mEQJGn9KnmaQDdiFBsAdQA2APAJApQmYERm6FOQt0KcimExQilEylUGUQiqDJiJCNQloganwhAg");
	this.shape.setTransform(323.7045,134.6654);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_31, new cjs.Rectangle(0,0,647.5,269.4), null);


(lib.Group_30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362045").s().p("EhsLAdMQlrgKjEgLQCspRTewhQGGlJHClRQDhipCUhmIEDBpQkZDUlNEGQqZIJkCDzQk8EqkCE1QgsA1gIBDQgGA+AbA6QAaA7A0AjQA4AmBFABQSkASU9g1UAgRgBSAeAgDrUAeTgDuAgogG2QVBkaSck5QBDgSAsgyQApguAMg/QAMg/gVg7QgXg/g4gpQpxnVyGnOQlpiRl0h/IkrhhQjhgShFgaQiJgzMHgmQMGglVSOcQGqEhGxFeQDYCvCEB1Qi+A/lhBnQrCDPswDJUgo4AKCgq9AFRUgq9AFRgpsAApQleAFlKAAQnKAAmlgKg");
	this.shape.setTransform(748.3,187.7763);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_30, new cjs.Rectangle(0,0,1496.6,375.6), null);


(lib.Group_24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EBOTAyGQh4vVmBv7QnTzQrduXQtsxJyPoJQ1Kpd6PDOQxzCLuLHUQs5GqptKzQJ2suNtn0QPPosTsiaQaOjOVLJdQSPIJNsRJQLdOXHTTQQGBP7B4PVQAYC/kdDaQASg4gHg1g");
	this.shape.setTransform(526.2895,331.5087);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_24, new cjs.Rectangle(0,0,1052.6,663.1), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnFX/QiKixg5leQgRg6gPhqQgdjTAKjuQAir4GmrkQDLljDTiOQC5h7CUA8QCKA4AsC0QAuC6hUDVQjYIlhvJmQhVHTgwKpQgLCmhuB3QhsB3iLABIgCAAQiZAAh2iXg");
	this.shape.setTransform(70.2615,168.4807);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,-0.1,140.5,337.20000000000005), null);


(lib.Group_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjqIjQkGg0AVlwQALjHBlifQBaiOCRhXQCEhQCLgMQCLgLBaA9QA2AlAeB2QAfB8gOCQQgRCkhJCIQhVCeiXBdQhEArhiAXQhGARg/AAQgqAAgogIg");
	this.shape_1.setTransform(47.7508,55.4935);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,95.5,111), null);


(lib.Group_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A0lH5QALhODyi6QGOkvJCjVQJZjeJNgrQHOgioODZQiuBIlCBzQlSB3hwApQiTA2nUDaQmyDLiZAwQhmAhg0AAQg6AAAFgpg");
	this.shape_1.setTransform(131.8081,54.5815);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_1, new cjs.Rectangle(0,0,263.6,109.2), null);


(lib.Scene_1_ribua = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ribua
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.847)").ss(1,1,1).p("Ai5jtIFzAAIAAHbIlzAAg");
	this.shape.setTransform(218.375,231.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai5DuIAAnbIFzAAIAAHbg");
	this.shape_1.setTransform(218.375,231.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.repllay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZCzIAAiYIiKjNIA5AAIBHBsQATAeAQAeQAQgbAYgkIBFhpIA3AAIiODNIAACYg");
	this.shape.setTransform(295.35,106);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AByCzIgqhtIiVAAIgnBtIgyAAICJllIAyAAICSFlgAgYhIIgnBoIB4AAIglhiQgRgtgIgdQgGAigNAig");
	this.shape_1.setTransform(262.125,106);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhvCzIAAllIAwAAIAAE7ICvAAIAAAqg");
	this.shape_2.setTransform(232.5,106);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiICzIAAllICHAAQAjAAATAEQAaAEASANQASAMALAWQALAWAAAbQAAAtgeAfQgdAfhMAAIhaAAIAACSgAhYgIIBbAAQAuAAATgRQAUgRAAgfQAAgXgMgPQgLgQgTgGQgMgDggAAIhaAAg");
	this.shape_3.setTransform(201.825,106);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiFCzIAAllIEDAAIAAAqIjTAAIAABuIDFAAIAAApIjFAAIAAB6IDbAAIAAAqg");
	this.shape_4.setTransform(168.25,106);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABiCzIgvhKQgVgggOgSQgNgRgJgGQgLgIgLgCQgIgCgTAAIg3AAIAACfIgvAAIAAllICeAAQAwAAAZAKQAZAKAOAYQAPAYABAdQgBAngYAaQgZAZgzAHQATAJAJAJQAVATASAcIA/BigAhugUIBnAAQAfAAASgHQATgGAJgPQAJgPAAgSQABgZgTgQQgSgQgoAAIhxAAg");
	this.shape_5.setTransform(134.55,106);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FF99").s().p("Ah+WRQncgLm9ikQnWivlLl0QlSl9BcnyQBWnUGFkgQF3kVHCh1QHMh5HbAYQHnANHECzQHHC0E/FuQEAEoAFGFQgPH4l/FOQl8FKnjCNQmcB3mrAAQhGAAhHgDg");
	this.shape_6.setTransform(212.817,142.839);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghDpIAAjFIizkMIBLAAIBbCNQAaAnAVAnQAVgkAdguIBaiJIBIAAIi5EMIAADFg");
	this.shape_7.setTransform(319.925,114.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ACUDpIg3iNIjBAAIgzCNIhCAAICznRIBBAAIC/HRgAgfheIgzCIICcAAIgwiAQgWg7gKgmQgJAtgQAsg");
	this.shape_8.setTransform(276.725,114.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiRDpIAAnRIA+AAIAAGaIDkAAIAAA3g");
	this.shape_9.setTransform(238.2,114.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AixDpIAAnRICwAAQAtAAAZAFQAiAGAXAQQAXAQAPAdQAOAcAAAjQAAA7gmApQgmAphjAAIh2AAIAAC9gAhzgKIB3AAQA8AAAZgXQAZgWAAgoQAAgdgPgVQgOgVgZgGQgPgFgqAAIh2AAg");
	this.shape_10.setTransform(198.325,114.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AitDpIAAnRIFQAAIAAA3IkSAAIAACPIEBAAIAAA1IkBAAIAACfIEdAAIAAA3g");
	this.shape_11.setTransform(154.7,114.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AB/DpIg9hhQgbgqgRgWQgSgWgNgJQgOgJgOgEQgKgCgYAAIhIAAIAADPIg9AAIAAnRIDNAAQA/AAAgANQAhANATAfQATAgAAAmQAAAyggAiQggAhhDAJQAYAMANALQAbAZAYAlIBRB/gAiPgaICFAAQApAAAYgJQAYgJAMgTQANgTAAgXQgBghgXgVQgYgVg0AAIiTAAg");
	this.shape_12.setTransform(110.85,114.225);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#33CC66").s().p("Ah+WRQncgLm9ikQnWivlLl0QlSl9BcnyQBWnUGFkgQF3kVHCh1QHMh5HbAYQHnANHECzQHHC0E/FuQEAEoAFGFQgPH4l/FOQl8FKnjCNQmcB3mrAAQhGAAhHgDg");
	this.shape_13.setTransform(212.817,142.839);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66FF66").s().p("Ah+WRQncgLm9ikQnWivlLl0QlSl9BcnyQBWnUGFkgQF3kVHCh1QHMh5HbAYQHnANHECzQHHC0E/FuQEAEoAFGFQgPH4l/FOQl8FKnjCNQmcB3mrAAQhGAAhHgDg");
	this.shape_14.setTransform(212.817,142.839);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66FFCC").s().p("Ah+WRQncgLm9ikQnWivlLl0QlSl9BcnyQBWnUGFkgQF3kVHCh1QHMh5HbAYQHnANHECzQHHC0E/FuQEAEoAFGFQgPH4l/FOQl8FKnjCNQmcB3mrAAQhGAAhHgDg");
	this.shape_15.setTransform(212.817,142.839);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_14},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_15},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.4,0.1,422.90000000000003,285.59999999999997);


(lib.play = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZCzIAAiYIiKjNIA6AAIBGBsQATAeARAeQAPgbAYgkIBFhpIA3AAIiPDNIAACYg");
	this.shape.setTransform(260.65,106);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AByCzIgqhtIiVAAIgnBtIgyAAICJllIAyAAICSFlgAgYhIIgnBoIB4AAIglhiQgRgtgIgdQgGAigNAig");
	this.shape_1.setTransform(227.425,106);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhvCzIAAllIAvAAIAAE7ICwAAIAAAqg");
	this.shape_2.setTransform(197.8,106);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiICzIAAllICHAAQAjAAATAEQAaAEASANQASAMALAWQALAWAAAbQAAAtgeAfQgdAfhMAAIhaAAIAACSgAhYgIIBbAAQAuAAATgRQAUgRAAgfQAAgXgMgPQgLgQgTgGQgMgDggAAIhaAAg");
	this.shape_3.setTransform(167.125,106);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF99").s().p("Ah+WRQncgLm9ikQnWivlLl0QlSl9BcnyQBWnUGFkgQF3kVHCh1QHMh5HbAYQHnANHECzQHHC0E/FuQEAEoAFGFQgPH4l/FOQl8FKnjCNQmcB3mrAAQhGAAhHgDg");
	this.shape_4.setTransform(212.817,142.839);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghDpIAAjFIizkMIBLAAIBbCNQAaAnAVAnQAVgkAdguIBaiJIBIAAIi5EMIAADFg");
	this.shape_5.setTransform(274.775,114.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ACUDpIg3iNIjBAAIgzCNIhCAAICznRIBBAAIC/HRgAgfheIgzCIICcAAIgwiAQgWg7gKgmQgJAtgQAsg");
	this.shape_6.setTransform(231.575,114.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiRDpIAAnRIA+AAIAAGaIDlAAIAAA3g");
	this.shape_7.setTransform(193.05,114.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AixDpIAAnRICwAAQAtAAAZAFQAiAGAXAQQAXAQAPAdQAOAcAAAjQAAA7gmApQgmAphjAAIh2AAIAAC9gAhzgKIB3AAQA8AAAZgXQAZgWAAgoQAAgdgPgVQgOgVgZgGQgPgFgqAAIh2AAg");
	this.shape_8.setTransform(153.175,114.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#33CC66").s().p("Ah+WRQncgLm9ikQnWivlLl0QlSl9BcnyQBWnUGFkgQF3kVHCh1QHMh5HbAYQHnANHECzQHHC0E/FuQEAEoAFGFQgPH4l/FOQl8FKnjCNQmcB3mrAAQhGAAhHgDg");
	this.shape_9.setTransform(212.817,142.839);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66FF66").s().p("Ah+WRQncgLm9ikQnWivlLl0QlSl9BcnyQBWnUGFkgQF3kVHCh1QHMh5HbAYQHnANHECzQHHC0E/FuQEAEoAFGFQgPH4l/FOQl8FKnjCNQmcB3mrAAQhGAAhHgDg");
	this.shape_10.setTransform(212.817,142.839);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66FFCC").s().p("Ah+WRQncgLm9ikQnWivlLl0QlSl9BcnyQBWnUGFkgQF3kVHCh1QHMh5HbAYQHnANHECzQHHC0E/FuQEAEoAFGFQgPH4l/FOQl8FKnjCNQmcB3mrAAQhGAAhHgDg");
	this.shape_11.setTransform(212.817,142.839);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_11},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.4,0.1,422.90000000000003,285.59999999999997);


(lib.notesai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _Layer_
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF8062").s().p("AjeMYQhvgghPg8QjSieBmkRQAziICBghQAwgMBIgBIB9gBQBIgCBUgaQBigeBMgzQDFiKgljoQgXiSi2h4Qg5gmhDgfIg5gYIAMhBIBKAZQBTAdBHAmQDjB5A6CpQA4ClhiCnQhdCeirAwQhQAXjPAGQiMADhOAmQhZAsgnBkQgwB7A8CBQAsBdBJA7QAvAnBgABQBaABBcgfQBhggA0g0QA7g5gSg/QgThAikgQQiegQikAnQgNADgKgIQgKgJABgNQACgSALgOQAMgOARgEQDag2CHgCQDKgEA1BpQAUAmgGA7QgGBCgnA5QhnCXkHAIIgNABQhMAAhYgag");
	this.shape.setTransform(1381.092,64.1404,2.9955,2.9955);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF8062").s().p("AkDQoQhggdgmguQgug4A1hBQA2hDBwA7QAcAPA2AlQAtAfAOAFQAjALDNv9QBon+BgoCIA2A9QmDe+gcBcQgJAihTADIgTABQhHAAhNgXg");
	this.shape_1.setTransform(1279.6483,144.7912,2.9958,2.9958);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#331832").s().p("AhuE5Qi/g3AThrQAeiiCjBlQBRAzBLBUICoo8IAxAhIjIKVQhjgGhfgcg");
	this.shape_2.setTransform(1970.7114,-192.8836,2.9962,2.9962);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#92BCB5").s().p("AhvE5Qi+g4AThqQAeiiCjBlQBRAzBLBTICoo6IAxAgIjJKWQhigHhggcg");
	this.shape_3.setTransform(1733.7149,341.181,2.9962,2.9962);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#331832").s().p("AhvE5Qi+g4AThqQAeiiCjBkQBRA0BLBTICoo6IAxAfIjJKWQhigGhggcg");
	this.shape_4.setTransform(65.6057,-144.6455,2.9962,2.9962);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#92BCB5").s().p("ACjEbQh4guAwhLQAbgrBNAvQAnAXAhAgIAumAIlTgiIhfHBQiHAAhUg7QgmgbgKgeQgLgfAYgbQAqguBiA3QAxAcApAlIBYnRIHCAYIhlJbQhFgIg8gXg");
	this.shape_5.setTransform(2671.1541,341.2559,2.9962,2.9962);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#92BCB5").s().p("ACjEbQh4guAwhLQAbgrBNAvQAnAXAhAgIAumAIlTgiIhgHBQiGAAhVg7QgmgbgKgeQgKgfAYgbQAqguBiA3QAxAcApAlIBYnRIHCAXIhlJcQhFgIg8gXg");
	this.shape_6.setTransform(859.7919,-33.5631,2.9962,2.9962);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#331832").s().p("AEHHKQjBhKBNh6QArhFB9BMQA/AlA1A0IBLpuIolg4IiaLYQjZAAiKhgQg9grgQgwQgRgzAngsQBDhKCfBZQBPAtBCA8ICPrxILYAmIijPRQhwgMhhgmg");
	this.shape_7.setTransform(110.5339,426.0471,2.9962,2.9962);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#92BCB5").s().p("AEIHKQjChKBNh6QAshFB9BLQA+AmA2AzIBKptIolg4IiaLYQjZAAiJhgQg+grgQgwQgRgzAngsQBDhLCfBaQBQAtBCA8ICOrxILYAmIiiPRQhxgMhggmg");
	this.shape_8.setTransform(-836.4391,-40.6041,2.9962,2.9962);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#331832").s().p("EheXAKvQEriOHMi9QOVl4NLj8QSolkN8g6QIqgjGoBTQGoBTEdDIQJuG0KGDVQFGBrFOA1QFOA0FkAAQK2AAMYjOQL9jHOTmYIAFALQuQGXsBDJQscDPq2AAQrCAAqIjWQlGhrk7ihQk7ihk7jdQkbjHmmhSQmmhTopAkQt4A5yoFkQtLD7uVF4QnLC9krCOg");
	this.shape_9.setTransform(416.0526,39.7476,2.9962,2.9962);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#331832").s().p("EhkZAKvQEriOHMi9QOVl4NLj8QSrllN5g5QIqgjGoBTQGoBTEeDIQJwG2L2DoQL2DnNCAHQNbAHN5jmQOZjsOPneIAGALQuQHeubDtQt9DmtagHQtEgHr3joQr4jopym3QkcjHmmhTQmmhSooAjQt6A6ynFkQtLD7uVF4QnLC9krCOg");
	this.shape_10.setTransform(531.7042,385.354,2.9962,2.9962);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#331832").s().p("Ehr1AMFQEriOHMi9QOUl5NMj7QSoljN8g6QIqgkGoBTQGoBTEdDJQFDDjFQChQFOCiFoBoQF8BuGVArQGWAsG9gVQOegsRglOQRflMVKp7IAFALQ1LJ7xhFNQxgFOugAsQm/AVmVgsQmWgrl+huQlnholRijQlPiilEjkQkdjHmmhSQmmhTooAkQt4A6yoFjQtLD7uVF4QnLC9krCOg");
	this.shape_11.setTransform(674.396,192.7964,2.9962,2.9962);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0066").s().p("AhvE5Qi+g4AThqQAeiiCjBkQBRA0BLBTICoo6IAxAfIjJKWQhigGhggcg");
	this.shape_12.setTransform(50.9733,-76.6176,2.9967,2.9967);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#339999").s().p("AEHHKQjBhKBNh6QArhFB9BMQA/AlA1A0IBLpuIolg4IiaLYQjZAAiKhgQg9grgQgwQgRgzAngsQBDhKCfBZQBPAtBCA8ICPrxILYAmIijPRQhwgMhhgmg");
	this.shape_13.setTransform(110.8444,426.2101,2.2849,2.2849);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC66").s().p("AEIHKQjChKBNh6QAshFB9BLQA+AmA2AzIBKptIolg4IiaLYQjZAAiJhgQg+grgQgwQgRgzAngsQBDhLCfBaQBQAtBCA8ICOrxILYAmIiiPRQhxgMhggmg");
	this.shape_14.setTransform(-836.2918,-40.5658,3.1473,3.7375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11,p:{scaleX:2.9962,scaleY:2.9962,x:674.396,y:192.7964}},{t:this.shape_10,p:{scaleX:2.9962,scaleY:2.9962,x:531.7042,y:385.354}},{t:this.shape_9,p:{scaleX:2.9962,scaleY:2.9962,x:416.0526,y:39.7476}},{t:this.shape_8,p:{scaleX:2.9962,scaleY:2.9962,x:-836.4391,y:-40.6041}},{t:this.shape_7,p:{scaleX:2.9962,scaleY:2.9962,x:110.5339,y:426.0471}},{t:this.shape_6,p:{scaleX:2.9962,scaleY:2.9962,x:859.7919,y:-33.5631}},{t:this.shape_5,p:{scaleX:2.9962,scaleY:2.9962,x:2671.1541,y:341.2559}},{t:this.shape_4,p:{scaleX:2.9962,scaleY:2.9962,x:65.6057,y:-144.6455}},{t:this.shape_3,p:{scaleX:2.9962,scaleY:2.9962,x:1733.7149,y:341.181}},{t:this.shape_2,p:{scaleX:2.9962,scaleY:2.9962,x:1970.7114,y:-192.8836}},{t:this.shape_1,p:{scaleX:2.9958,scaleY:2.9958,x:1279.6483,y:144.7912}},{t:this.shape,p:{scaleX:2.9955,scaleY:2.9955,x:1381.092,y:64.1404}}]}).to({state:[{t:this.shape_11,p:{scaleX:2.9964,scaleY:2.9964,x:674.5856,y:192.8413}},{t:this.shape_10,p:{scaleX:2.9964,scaleY:2.9964,x:531.8806,y:385.4166}},{t:this.shape_9,p:{scaleX:2.9964,scaleY:2.9964,x:416.2185,y:39.7784}},{t:this.shape_8,p:{scaleX:4.8936,scaleY:5.8118,x:-836.4715,y:-40.6015}},{t:this.shape_7,p:{scaleX:2.2848,scaleY:2.2848,x:110.7831,y:426.1806}},{t:this.shape_6,p:{scaleX:2.9964,scaleY:2.9964,x:859.9985,y:-33.5389}},{t:this.shape_5,p:{scaleX:2.9964,scaleY:2.9964,x:2505.7767,y:270.5644}},{t:this.shape_4,p:{scaleX:2.9964,scaleY:2.9964,x:65.7395,y:-144.6316}},{t:this.shape_3,p:{scaleX:2.9964,scaleY:2.9964,x:1734.0016,y:341.2395}},{t:this.shape_2,p:{scaleX:2.9964,scaleY:2.9964,x:1971.0198,y:-76.6241}},{t:this.shape_1,p:{scaleX:2.9962,scaleY:2.9962,x:1159.4751,y:268.7952}},{t:this.shape,p:{scaleX:2.9958,scaleY:2.9958,x:1260.8464,y:188.1235}}]},3).to({state:[{t:this.shape_11,p:{scaleX:2.9964,scaleY:2.9964,x:674.5856,y:192.8413}},{t:this.shape_10,p:{scaleX:2.9964,scaleY:2.9964,x:531.8806,y:385.4166}},{t:this.shape_9,p:{scaleX:2.9964,scaleY:2.9964,x:416.2185,y:39.7784}},{t:this.shape_8,p:{scaleX:4.8936,scaleY:5.8118,x:-836.4715,y:-40.6015}},{t:this.shape_7,p:{scaleX:2.2848,scaleY:2.2848,x:110.7831,y:426.1806}},{t:this.shape_6,p:{scaleX:5.8727,scaleY:5.8727,x:859.448,y:37.3595}},{t:this.shape_5,p:{scaleX:2.9964,scaleY:2.9964,x:2505.7767,y:270.5644}},{t:this.shape_4,p:{scaleX:2.9964,scaleY:2.9964,x:65.7395,y:-144.6316}},{t:this.shape_3,p:{scaleX:2.9964,scaleY:2.9964,x:1734.0016,y:341.2395}},{t:this.shape_2,p:{scaleX:2.9964,scaleY:2.9964,x:1971.0198,y:-76.6241}},{t:this.shape_1,p:{scaleX:2.9962,scaleY:2.9962,x:1159.4751,y:268.7952}},{t:this.shape,p:{scaleX:2.9958,scaleY:2.9958,x:1260.8464,y:188.1235}}]},2).to({state:[{t:this.shape_11,p:{scaleX:2.9964,scaleY:2.9964,x:674.5856,y:192.8413}},{t:this.shape_10,p:{scaleX:2.9964,scaleY:2.9964,x:531.8806,y:385.4166}},{t:this.shape_9,p:{scaleX:2.9964,scaleY:2.9964,x:416.2185,y:39.7784}},{t:this.shape_14,p:{y:-40.5658}},{t:this.shape_13,p:{scaleX:2.2849,scaleY:2.2849,x:110.8444,y:426.2101}},{t:this.shape_6,p:{scaleX:2.9964,scaleY:2.9964,x:859.9985,y:-33.5389}},{t:this.shape_5,p:{scaleX:2.9964,scaleY:2.9964,x:2505.7767,y:270.5644}},{t:this.shape_12,p:{scaleX:2.9967,scaleY:2.9967,x:50.9733,y:-76.6176}},{t:this.shape_3,p:{scaleX:2.9964,scaleY:2.9964,x:1734.0016,y:341.2395}},{t:this.shape_2,p:{scaleX:2.9964,scaleY:2.9964,x:1971.0198,y:-76.6241}},{t:this.shape_1,p:{scaleX:2.9962,scaleY:2.9962,x:1159.4751,y:268.7952}},{t:this.shape,p:{scaleX:2.9958,scaleY:2.9958,x:1260.8464,y:188.1235}}]},3).to({state:[{t:this.shape_11,p:{scaleX:2.9964,scaleY:2.9964,x:674.5856,y:192.8413}},{t:this.shape_10,p:{scaleX:2.9964,scaleY:2.9964,x:531.8806,y:385.4166}},{t:this.shape_9,p:{scaleX:2.9964,scaleY:2.9964,x:416.2185,y:39.7784}},{t:this.shape_14,p:{y:62.2342}},{t:this.shape_13,p:{scaleX:3.7205,scaleY:3.7205,x:110.8763,y:426.2582}},{t:this.shape_6,p:{scaleX:2.9964,scaleY:2.9964,x:859.9985,y:-33.5389}},{t:this.shape_5,p:{scaleX:2.9964,scaleY:2.9964,x:2505.7767,y:208.0144}},{t:this.shape_12,p:{scaleX:5.4823,scaleY:5.4823,x:50.9968,y:-76.3735}},{t:this.shape_3,p:{scaleX:5.3368,scaleY:5.3368,x:1733.3249,y:341.1464}},{t:this.shape_2,p:{scaleX:2.9964,scaleY:2.9964,x:1971.0698,y:-163.0241}},{t:this.shape_1,p:{scaleX:3.8977,scaleY:3.8977,x:1138.1317,y:156.4453}},{t:this.shape,p:{scaleX:3.8977,scaleY:3.8977,x:1270.4467,y:51.5571}}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1393.5,-336,4182.3,951.4);


(lib.lightai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,255,0,0.498)").s().p("EicPCylMBkSllJMB2iAAAMBdrFlJg");
	this.shape.setTransform(1000,1142.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2000,2285.8);


(lib.Heart = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguAwQgPgNgBgWQAAgRAPgSQAKgNAOgMQAQgOATgBQASgBASAQQAPAOAAAVQAAAKgEAJQgEALgHAFQgNAMgLANQgMAOgWABIgDAAQgSAAgPgPg");
	this.shape.setTransform(71.175,54.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhmBKQgSgGgLgSQgLgRAEgTQAEgTAUgMQBAgkAogMQA3gRA6AKQAXAFAJARQAJAQgGAUQgFATgQAMQgRANgXgFQgkgGglAPQgQAGgyAeQgNAHgMAAQgIAAgHgDg");
	this.shape_1.setTransform(90.0908,44.132);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZA+QgNgDgKgKQgKgJgDgNQgFgXAFgSQAFgWARgOQARgNAWgBQAUAAATALQAOAHAGAOQAGAOgBAPIABAIQAAAKgEAKQgEALgHAFQgTAQgQAFQgJADgKAAQgKAAgLgDg");
	this.shape_2.setTransform(295.725,171.2489);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AADHlQgRAAgOgPQgPgOgCgUQgDgVAPgSQCci7gzjrQgvjbjCibQgSgOABgUQAAgRAPgPQAjgkAmAeQBuBYBIBwQBPB6ASCCQATCDgmCAQglB9hXBnQgOASgUAAIgBgBg");
	this.shape_3.setTransform(308.3772,112.3513);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#292929").s().p("AhGT3QghgPhAgmQg4gigXgMQg/ghh/g/QiuhWhPgrQiXhShwhNQhwhOhbhVQjCi1h1jqQh0jogTj1QgUkNBojyQBnjyDCiHQCShmC0gbQC0gbCrA2QCcAyCCBvQCCBvBSCYQBSjBCyh9QCyh+DSgMQDVgLDSBnQDTBnCWC9QBtCKA5ChQA5CggGCZQgFB+gvCAQgwB+hWB4QhGBihoBmQhHBGhzBiQm0FznQExQhBAqg/ABIgCAAQgtAAg1gXgAsRzTQhsABhmAgQhoAhhYA+Qi1B+hhDkQhhDjATD/QARDqBwDeQBwDgC6CuQBZBSBtBMQBuBLCTBQQBTAtCoBTIC/BhQAhARAxAeQBbA3ApAJQBAAPBDgtQHOkvGxlxQBvheBGhFQBlhjBEhfQBGhgArhnQA5iHAFiGQAGiQg2iWQg1iWhniCQiOiyjFhiQjGhhjHALQjSAMitCGQiuCGg/DHIgYBJIgehGQhIihiDh4QiCh5ifgyQhqgihwAAIgHAAg");
	this.shape_4.setTransform(184.8666,153.7533);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE383F").s().p("AgtTiQghgMg4giQhLgsgYgNQg6geijhSQiLhFhSgsQiHhJhohGQh8hUhihaQi4ithyjfQh3jpgTj1QgTkABhjoQBkjxC+iFQCNhiCtgaQCugaCkA1QClA0CIB9QCHB8BKCnQBDjUC4iLQCziIDZgMQDSgMDOBoQDHBkCQC1QBnCCA3CUQA7CggGCbQgFB/gyCBQguB1hPBuQhEBfhjBiQhJBHh0BjQm0FznNEvQg5Amg6AAQgjAAglgPg");
	this.shape_5.setTransform(184.8714,153.7146);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguAwQgPgNgBgWQAAgRAPgSQAKgNAOgMQAQgOATgBQASgBASAQQAPAOAAAVQAAAKgEAJQgEALgHAFQgNAMgLANQgMAOgWABIgDAAQgSAAgPgPg");
	this.shape_6.setTransform(71.175,54.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhmBKQgSgGgLgSQgLgRAEgTQAEgTAUgMQBAgkAogMQA3gRA6AKQAXAFAJARQAJAQgGAUQgFATgQAMQgRANgXgFQgkgGglAPQgQAGgyAeQgNAHgMAAQgIAAgHgDg");
	this.shape_7.setTransform(90.0908,44.132);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZA+QgNgDgKgKQgKgJgDgNQgFgXAFgSQAFgWARgOQARgNAWgBQAUAAATALQAOAHAGAOQAGAOgBAPIABAIQAAAKgEAKQgEALgHAFQgTAQgQAFQgJADgKAAQgKAAgLgDg");
	this.shape_8.setTransform(295.725,171.2489);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AADHlQgRAAgOgPQgPgOgCgUQgDgVAPgSQCci7gzjrQgvjbjCibQgSgOABgUQAAgRAPgPQAjgkAmAeQBuBYBIBwQBPB6ASCCQATCDgmCAQglB9hXBnQgOASgUAAIgBgBg");
	this.shape_9.setTransform(308.3772,112.3513);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#292929").s().p("AhGT3QghgPhAgmQg4gigXgMQg/ghh/g/QiuhWhPgrQiXhShwhNQhwhOhbhVQjCi1h1jqQh0jogTj1QgUkNBojyQBnjyDCiHQCShmC0gbQC0gbCrA2QCcAyCCBvQCCBvBSCYQBSjBCyh9QCyh+DSgMQDVgLDSBnQDTBnCWC9QBtCKA5ChQA5CggGCZQgFB+gvCAQgwB+hWB4QhGBihoBmQhHBGhzBiQm0FznQExQhBAqg/ABIgCAAQgtAAg1gXgAsRzTQhsABhmAgQhoAhhYA+Qi1B+hhDkQhhDjATD/QARDqBwDeQBwDgC6CuQBZBSBtBMQBuBLCTBQQBTAtCoBTIC/BhQAhARAxAeQBbA3ApAJQBAAPBDgtQHOkvGxlxQBvheBGhFQBlhjBEhfQBGhgArhnQA5iHAFiGQAGiQg2iWQg1iWhniCQiOiyjFhiQjGhhjHALQjSAMitCGQiuCGg/DHIgYBJIgehGQhIihiDh4QiCh5ifgyQhqgihwAAIgHAAg");
	this.shape_10.setTransform(184.8666,153.7533);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EE383F").s().p("AgtTiQghgMg4giQhLgsgYgNQg6geijhSQiLhFhSgsQiHhJhohGQh8hUhihaQi4ithyjfQh3jpgTj1QgTkABhjoQBkjxC+iFQCNhiCtgaQCugaCkA1QClA0CIB9QCHB8BKCnQBDjUC4iLQCziIDZgMQDSgMDOBoQDHBkCQC1QBnCCA3CUQA7CggGCbQgFB/gyCBQguB1hPBuQhEBfhjBiQhJBHh0BjQm0FznNEvQg5Amg6AAQgjAAglgPg");
	this.shape_11.setTransform(184.8714,153.7146);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXX+QhLgJhOgjQgtgUhIgsQgogYgagOQg+ggh6g9Qi0hahRgsQimhah8hVQh9hXhmhgQjjjUiJkTQiJkUgWkhQgYlMCDktQCEktD1isQDBiGDtgkQDsgjDhBHQBxAkBpA/QBqA/BaBVQCCiCCnhLQCmhLC2gKQEOgPEKCAQEJCAC7DrQCICsBHDKQBHDLgJDEQgGCig7CgQg7ChhrCVQhSBxhzByQhOBOh9BqQm/F8ndE6Qh9BTiHAAIgLAAQgWAAgWgDg");
	this.shape_12.setTransform(184.8531,153.7711);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12,p:{scaleX:1,scaleY:1,x:184.8531,y:153.7711}},{t:this.shape_11,p:{scaleX:1,scaleY:1,x:184.8714,y:153.7146}},{t:this.shape_10,p:{scaleX:1,scaleY:1,x:184.8666,y:153.7533}},{t:this.shape_9,p:{scaleX:1,scaleY:1,x:308.3772,y:112.3513}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:295.725,y:171.2489}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:90.0908,y:44.132}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:71.175,y:54.425}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:184.8714,y:153.7146}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:184.8666,y:153.7533}},{t:this.shape_3,p:{scaleX:1,scaleY:1,x:308.3772,y:112.3513}},{t:this.shape_2,p:{scaleX:1,scaleY:1,x:295.725,y:171.2489}},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:90.0908,y:44.132}},{t:this.shape,p:{scaleX:1,scaleY:1,x:71.175,y:54.425}}]}).to({state:[{t:this.shape_12,p:{scaleX:0.9219,scaleY:0.9219,x:184.8587,y:153.758}},{t:this.shape_11,p:{scaleX:0.9218,scaleY:0.9218,x:184.858,y:153.6912}},{t:this.shape_10,p:{scaleX:0.9218,scaleY:0.9218,x:184.8478,y:153.7219}},{t:this.shape_9,p:{scaleX:0.9218,scaleY:0.9218,x:298.7074,y:115.5618}},{t:this.shape_8,p:{scaleX:0.9218,scaleY:0.9218,x:287.0444,y:169.8545}},{t:this.shape_7,p:{scaleX:0.9218,scaleY:0.9218,x:97.4879,y:52.6764}},{t:this.shape_6,p:{scaleX:0.9218,scaleY:0.9218,x:80.0511,y:62.1646}},{t:this.shape_5,p:{scaleX:0.9218,scaleY:0.9218,x:184.861,y:153.6936}},{t:this.shape_4,p:{scaleX:0.9218,scaleY:0.9218,x:184.8536,y:153.7268}},{t:this.shape_3,p:{scaleX:0.9218,scaleY:0.9218,x:298.7122,y:115.5637}},{t:this.shape_2,p:{scaleX:0.9218,scaleY:0.9218,x:287.049,y:169.8572}},{t:this.shape_1,p:{scaleX:0.9218,scaleY:0.9218,x:97.4894,y:52.6771}},{t:this.shape,p:{scaleX:0.9218,scaleY:0.9218,x:80.0523,y:62.1655}}]},3).to({state:[{t:this.shape_12,p:{scaleX:0.8634,scaleY:0.8634,x:184.8702,y:153.7917}},{t:this.shape_11,p:{scaleX:0.8633,scaleY:0.8633,x:184.8656,y:153.7258}},{t:this.shape_10,p:{scaleX:0.8632,scaleY:0.8632,x:184.8556,y:153.7543}},{t:this.shape_9,p:{scaleX:0.8633,scaleY:0.8633,x:291.4839,y:118.0182}},{t:this.shape_8,p:{scaleX:0.8633,scaleY:0.8633,x:280.5617,y:168.8626}},{t:this.shape_7,p:{scaleX:0.8633,scaleY:0.8633,x:103.0447,y:59.1268}},{t:this.shape_6,p:{scaleX:0.8633,scaleY:0.8633,x:86.7153,y:68.0124}},{t:this.shape_5,p:{scaleX:0.8633,scaleY:0.8633,x:184.8656,y:153.7258}},{t:this.shape_4,p:{scaleX:0.8633,scaleY:0.8633,x:184.8614,y:153.7592}},{t:this.shape_3,p:{scaleX:0.8633,scaleY:0.8633,x:291.4839,y:118.0182}},{t:this.shape_2,p:{scaleX:0.8633,scaleY:0.8633,x:280.5617,y:168.8626}},{t:this.shape_1,p:{scaleX:0.8633,scaleY:0.8633,x:103.0447,y:59.1268}},{t:this.shape,p:{scaleX:0.8633,scaleY:0.8633,x:86.7153,y:68.0124}}]},3).to({state:[{t:this.shape_12,p:{scaleX:0.7723,scaleY:0.7723,x:184.8326,y:153.7896}},{t:this.shape_11,p:{scaleX:0.7722,scaleY:0.7722,x:184.8234,y:153.7264}},{t:this.shape_10,p:{scaleX:0.7721,scaleY:0.7721,x:184.8109,y:153.7489}},{t:this.shape_9,p:{scaleX:0.7722,scaleY:0.7722,x:280.191,y:121.7868}},{t:this.shape_8,p:{scaleX:0.7722,scaleY:0.7722,x:270.4213,y:167.2659}},{t:this.shape_7,p:{scaleX:0.7722,scaleY:0.7722,x:111.6365,y:69.1098}},{t:this.shape_6,p:{scaleX:0.7722,scaleY:0.7722,x:97.0303,y:77.0578}},{t:this.shape_5,p:{scaleX:0.7722,scaleY:0.7722,x:184.8351,y:153.7362}},{t:this.shape_4,p:{scaleX:0.7722,scaleY:0.7722,x:184.8197,y:153.7562}},{t:this.shape_3,p:{scaleX:0.7722,scaleY:0.7722,x:280.2102,y:121.7941}},{t:this.shape_2,p:{scaleX:0.7722,scaleY:0.7722,x:270.4398,y:167.2768}},{t:this.shape_1,p:{scaleX:0.7722,scaleY:0.7722,x:111.6425,y:69.113}},{t:this.shape,p:{scaleX:0.7722,scaleY:0.7722,x:97.0351,y:77.0616}}]},3).to({state:[{t:this.shape_12,p:{scaleX:0.8504,scaleY:0.8504,x:184.8212,y:153.7979}},{t:this.shape_11,p:{scaleX:0.8503,scaleY:0.8503,x:184.8192,y:153.7351}},{t:this.shape_10,p:{scaleX:0.8502,scaleY:0.8502,x:184.8093,y:153.7631}},{t:this.shape_9,p:{scaleX:0.8503,scaleY:0.8503,x:289.8319,y:118.5653}},{t:this.shape_8,p:{scaleX:0.8503,scaleY:0.8503,x:279.0742,y:168.6439}},{t:this.shape_7,p:{scaleX:0.8503,scaleY:0.8503,x:104.2305,y:60.5608}},{t:this.shape_6,p:{scaleX:0.8503,scaleY:0.8503,x:88.147,y:69.3126}},{t:this.shape_5,p:{scaleX:0.8503,scaleY:0.8503,x:184.8251,y:153.74}},{t:this.shape_4,p:{scaleX:0.8503,scaleY:0.8503,x:184.8151,y:153.768}},{t:this.shape_3,p:{scaleX:0.8503,scaleY:0.8503,x:289.8415,y:118.5689}},{t:this.shape_2,p:{scaleX:0.8503,scaleY:0.8503,x:279.0834,y:168.6494}},{t:this.shape_1,p:{scaleX:0.8503,scaleY:0.8503,x:104.2335,y:60.5623}},{t:this.shape,p:{scaleX:0.8503,scaleY:0.8503,x:88.1494,y:69.3145}}]},3).to({state:[{t:this.shape_11,p:{scaleX:0.9478,scaleY:0.9478,x:184.8537,y:153.775}},{t:this.shape_10,p:{scaleX:0.9478,scaleY:0.9478,x:184.8462,y:153.8091}},{t:this.shape_9,p:{scaleX:0.9478,scaleY:0.9478,x:301.9162,y:114.5695}},{t:this.shape_8,p:{scaleX:0.9478,scaleY:0.9478,x:289.9241,y:170.3945}},{t:this.shape_7,p:{scaleX:0.9478,scaleY:0.9478,x:95.0178,y:49.9092}},{t:this.shape_6,p:{scaleX:0.9478,scaleY:0.9478,x:77.0888,y:59.6653}},{t:this.shape_5,p:{scaleX:0.9479,scaleY:0.9479,x:184.8684,y:153.7872}},{t:this.shape_4,p:{scaleX:0.9479,scaleY:0.9479,x:184.8609,y:153.8214}},{t:this.shape_3,p:{scaleX:0.9479,scaleY:0.9479,x:301.9403,y:114.5786}},{t:this.shape_2,p:{scaleX:0.9479,scaleY:0.9479,x:289.9472,y:170.4081}},{t:this.shape_1,p:{scaleX:0.9479,scaleY:0.9479,x:95.0252,y:49.9131}},{t:this.shape,p:{scaleX:0.9479,scaleY:0.9479,x:77.0948,y:59.6699}}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,369.7,307.5);


(lib.eyebrows = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AEVCvQgQgCgIgOQghg4gegiQgmgsgugZQgtgZgYgLQgogSgjAFQgdgCgxAHQg2AIgWAAIgiABQgUAAgNgDQgegGgMgnQgEgOAIgMQAGgIAOgLQAdgVApgLQAdgIAwgFQAVgCAfACIA1ACQAOABAQAGIAeAMQArAQAfAQQAVALAXASIApAjQA7A1AsBdQAIARgCATQgCAQgIAVQgEAMgKAAIgCAAg");
	this.shape.setTransform(167.956,237.0075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("Aj0DYQgTgcgCgfQAGgnAFgUQAahgBBhPQASgXAsgiIAxgjQAfgYBAgRQBRgVAzAEQAYACAnAPQAeAMgCAXQgCAUgFAMQgIAPgRAHQgfAOgoAIQgXAEgzAHQg0AHgiANQgsASgfAgIgrAuQgZAbgPAXQgVAjgMAxIgIAYQgGAPgCAJQgEAQgNACIgDAAQgLAAgJgMg");
	this.shape_1.setTransform(26.6095,242.5508);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,219.5,198.3,45.89999999999998);


(lib.Group_23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAlaAINQihrSmyoQQArBvgqA/Qg6BZi7guQi7gtjOiaQjOiahpisQhoitA7hZQAdgsBBgLQA+gLBZAWQi8hjjShCQn5ieoABOQnpBLm7EVQmyEQlLGtQlPGyi2ITQAPhRAXhWQCdo9FNndQFHnVHAkvQHIk1H+hZQIYhdIRClQIRCkGWGEQGCFvDlILQDgIAApJHQAoJRicI/QgXBRgdBSQCYriihrUg");
	this.shape.setTransform(257.9163,198.709);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_23, new cjs.Rectangle(0,0,515.9,397.5), null);


(lib.Group_20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHcH8QgBjQg0jWQg0jYhsikQhhiSiAhWQh0hOhzgKQhwgJhHA7QgwApguBAQgwBEgoBWQApisBMiLQBEh8BPhDQBHg7BxAJQBxAJB2BPQB/BWBhCSQBsCkA1DZQBJEvgcEdQgXDwhZC7QAmingBi4g");
	this.shape.setTransform(55.8762,85.9159);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_20, new cjs.Rectangle(0,0,111.8,171.9), null);


(lib.Group_17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsCBkQCXjuELizQDAh/DXgtQDBgoC7AeQCsAcB9BOQB7BNAkBjQApBvgICRQgICjhCCiQANhggHhZQgIhUgYhDQgkhih7hNQh9hPisgbQi7gejAAoQjZAti/B/Qi9B9iFCgQh1CNhCCdQAajSCAjKg");
	this.shape.setTransform(92.5336,51.2571);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(0,0,185.1,102.5), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5F5F7").s().p("AmXDMQgLgYAAgcQAAgyAjgjQAjgkAyAAIAKABQgKgbAAgeQAAhKA0g0QA0g1BKAAQBKAAAzA1QA0A0AABKIAAAKQAigQAjAAQA3AAArAgQAqAfAQAzQATgJAUAAQApABAcAcQAdAdAAApQAAARgFAOg");
	this.shape.setTransform(41.925,20.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,83.9,40.9), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8E7F2").s().p("AzGEyQAuhUBTgyQBVgzBjAAQBoAABZA4QgNgaAAgeQAAg5ApgoQAognA4AAQA5AAAoAnQAoAoAAA5IAAAKIACAAQAJhEAzguQA1gtBFAAQA7AAAwAiQAuAhAUA2QAVgqAogZQAogaAxAAQA9AAAvAmQAuAnAMA6IADAAQgZg8AAg+QAAiEBehdQBdhdCEAAQCEAABeBdQBdBdAACEIgBAQQBCg1BWAAQBiAABHBEQBFBGAABjQAAAvgTAug");
	this.shape.setTransform(122.3,30.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,244.6,61.3), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4F2A8").s().p("AlvIHQiNhOhZiHQBOAyBYAbQBcAbBgAAQENAAC/i+QC/i/AAkNQAAhigchcQgchagzhOQCJBYBPCPQBRCTAACpQAAEMi/C/Qi/C/kNAAQinAAiThQg");
	this.shape.setTransform(59.825,59.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,119.7,119.9), null);


(lib.Group_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#110B29").s().p("A6rAoIAAhPMA1XAAAIAABPg");
	this.shape.setTransform(195.15,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#110B29").s().p("A9VBJIAAiRMA6rAAAIAACRg");
	this.shape_1.setTransform(194.9,33.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#08021D").s().p("AhFDAIAAmAICLAAIAAGAg");
	this.shape_2.setTransform(195.175,216.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#08021D").s().p("AhFDAIAAmAICLAAIAAGAg");
	this.shape_3.setTransform(301.925,216.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#08021D").s().p("AhFDAIAAmAICLAAIAAGAg");
	this.shape_4.setTransform(88.375,216.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#110B29").s().p("A+fBBIAAiBMA8/AAAIAACBg");
	this.shape_5.setTransform(195.175,237);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#110B29").s().p("AhtDDIAAmFIDbAAIAAGFg");
	this.shape_6.setTransform(301.925,212.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#110B29").s().p("AhtDDIAAmFIDbAAIAAGFg");
	this.shape_7.setTransform(195.175,212.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#110B29").s().p("AhtDDIAAmFIDbAAIAAGFg");
	this.shape_8.setTransform(88.375,212.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_9.setTransform(338.875,158.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_10.setTransform(338.875,158.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_11.setTransform(338.875,158.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_12.setTransform(338.875,177.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0F1010").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_13.setTransform(290.975,158.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0F1010").s().p("Ah2CEIAAkHIDtAAIAAEHgAhbBqIC3AAIAAjSIi3AAg");
	this.shape_14.setTransform(290.975,158.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_15.setTransform(290.975,158.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_16.setTransform(290.975,177.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0F1010").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_17.setTransform(243.05,158.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0F1010").s().p("Ah2CEIAAkHIDtAAIAAEHgAhcBqIC4AAIAAjSIi4AAg");
	this.shape_18.setTransform(243.075,158.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_19.setTransform(243.05,158.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_20.setTransform(243.075,177.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_21.setTransform(195.15,158.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_22.setTransform(195.15,158.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_23.setTransform(195.15,158.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#110B29").s().p("AiKBKIAAiTIEUAAIAACTg");
	this.shape_24.setTransform(195.15,177.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_25.setTransform(147.25,158.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_26.setTransform(147.25,158.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_27.setTransform(147.25,158.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#110B29").s().p("AiKBKIAAiTIEUAAIAACTg");
	this.shape_28.setTransform(147.25,177.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0F1010").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_29.setTransform(99.35,158.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0F1010").s().p("Ah2CEIAAkHIDtAAIAAEHgAhbBqIC4AAIAAjSIi4AAg");
	this.shape_30.setTransform(99.325,158.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_31.setTransform(99.35,158.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#110B29").s().p("AiJBKIAAiTIEUAAIAACTg");
	this.shape_32.setTransform(99.35,177.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_33.setTransform(51.425,158.375);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_34.setTransform(51.425,158.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_35.setTransform(51.425,158.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_36.setTransform(51.425,177.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0F1010").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_37.setTransform(338.875,111.675);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0F1010").s().p("Ah2CEIAAkHIDtAAIAAEHgAhbBpIC3AAIAAjRIi3AAg");
	this.shape_38.setTransform(338.875,111.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_39.setTransform(338.875,111.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_40.setTransform(338.875,130.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_41.setTransform(290.975,111.675);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBxIDFAAIAAjgIjFAAg");
	this.shape_42.setTransform(290.975,111.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_43.setTransform(290.975,111.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_44.setTransform(290.975,130.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_45.setTransform(243.05,111.675);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBxIDFAAIAAjgIjFAAg");
	this.shape_46.setTransform(243.075,111.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_47.setTransform(243.05,111.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_48.setTransform(243.075,130.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0F1010").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_49.setTransform(195.15,111.675);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0F1010").s().p("Ah2CEIAAkHIDtAAIAAEHgAhbBpIC3AAIAAjRIi3AAg");
	this.shape_50.setTransform(195.15,111.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_51.setTransform(195.15,111.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#110B29").s().p("AiKBKIAAiTIEUAAIAACTg");
	this.shape_52.setTransform(195.15,130.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_53.setTransform(147.25,111.675);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBxIDFAAIAAjgIjFAAg");
	this.shape_54.setTransform(147.25,111.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_55.setTransform(147.25,111.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#110B29").s().p("AiKBKIAAiTIEUAAIAACTg");
	this.shape_56.setTransform(147.25,130.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#0F1010").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_57.setTransform(99.35,111.675);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0F1010").s().p("Ah2CEIAAkHIDtAAIAAEHgAhbBpIC4AAIAAjRIi4AAg");
	this.shape_58.setTransform(99.325,111.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_59.setTransform(99.35,111.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#110B29").s().p("AiJBKIAAiTIEUAAIAACTg");
	this.shape_60.setTransform(99.35,130.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_61.setTransform(51.425,111.675);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBxIDFAAIAAjgIjFAAg");
	this.shape_62.setTransform(51.425,111.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_63.setTransform(51.425,111.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_64.setTransform(51.425,130.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_65.setTransform(338.875,65.025);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_66.setTransform(338.875,64.825);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_67.setTransform(338.875,64.825);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_68.setTransform(338.875,84.125);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#0F1010").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_69.setTransform(290.975,65.025);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0F1010").s().p("Ah2CFIAAkJIDtAAIAAEJgAhbBqIC3AAIAAjTIi3AAg");
	this.shape_70.setTransform(290.975,64.825);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_71.setTransform(290.975,64.825);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_72.setTransform(290.975,84.125);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_73.setTransform(243.05,65.025);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_74.setTransform(243.075,64.825);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_75.setTransform(243.05,64.825);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_76.setTransform(243.075,84.125);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#0F1010").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_77.setTransform(195.15,65.025);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#0F1010").s().p("Ah2CFIAAkJIDtAAIAAEJgAhbBqIC3AAIAAjTIi3AAg");
	this.shape_78.setTransform(195.15,64.825);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_79.setTransform(195.15,64.825);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#110B29").s().p("AiKBKIAAiTIEUAAIAACTg");
	this.shape_80.setTransform(195.15,84.125);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_81.setTransform(147.25,65.025);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_82.setTransform(147.25,64.825);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_83.setTransform(147.25,64.825);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#110B29").s().p("AiKBKIAAiTIEUAAIAACTg");
	this.shape_84.setTransform(147.25,84.125);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#0F1010").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_85.setTransform(99.35,65.025);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#0F1010").s().p("Ah2CFIAAkJIDtAAIAAEJgAhbBqIC4AAIAAjTIi4AAg");
	this.shape_86.setTransform(99.325,64.825);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_87.setTransform(99.35,64.825);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#110B29").s().p("AiJBKIAAiTIEUAAIAACTg");
	this.shape_88.setTransform(99.35,84.125);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_89.setTransform(51.425,65.025);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_90.setTransform(51.425,64.825);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_91.setTransform(51.425,64.825);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_92.setTransform(51.425,84.125);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#1E1736").s().p("A8lPyIAA/jMA5LAAAIAAfjg");
	this.shape_93.setTransform(195.15,133.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#241E3D").s().p("A6rCUIAAknMA1XAAAIAAEng");
	this.shape_94.setTransform(195.15,14.75);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#08021D").s().p("AhFDAIAAmAICLAAIAAGAg");
	this.shape_95.setTransform(301.925,216.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0,0,390.4,243.5), null);


(lib.Group_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#110B29").s().p("A3vAkIAAhGMAvfAAAIAABGg");
	this.shape.setTransform(173.725,12.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#110B29").s().p("A6GBBIAAiBMA0NAAAIAACBg");
	this.shape_1.setTransform(173.5,29.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#08021D").s().p("Ag+CrIAAlVIB9AAIAAFVg");
	this.shape_2.setTransform(173.725,192.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#08021D").s().p("Ag+CrIAAlVIB8AAIAAFVg");
	this.shape_3.setTransform(78.65,192.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#110B29").s().p("A7IA6IAAhzMA2RAAAIAABzg");
	this.shape_4.setTransform(173.725,210.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#110B29").s().p("AhhCuIAAlbIDDAAIAAFbg");
	this.shape_5.setTransform(173.725,189.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#110B29").s().p("AhhCuIAAlbIDDAAIAAFbg");
	this.shape_6.setTransform(78.675,189.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIBoIAAjPIARAAIAADPg");
	this.shape_7.setTransform(173.725,140.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhjBwIAAjfIDHAAIAADfgAhXBkICvAAIAAjHIivAAg");
	this.shape_8.setTransform(173.725,140.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBB040").s().p("AhdBqIAAjTIC7AAIAADTg");
	this.shape_9.setTransform(173.725,140.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#110B29").s().p("Ah6BCIAAiDID1AAIAACDg");
	this.shape_10.setTransform(173.725,157.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIBoIAAjPIARAAIAADPg");
	this.shape_11.setTransform(131.075,140.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhjBwIAAjfIDHAAIAADfgAhXBkICvAAIAAjHIivAAg");
	this.shape_12.setTransform(131.075,140.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FBB040").s().p("AhdBqIAAjTIC7AAIAADTg");
	this.shape_13.setTransform(131.075,140.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#110B29").s().p("Ah6BCIAAiDID1AAIAACDg");
	this.shape_14.setTransform(131.075,157.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0F1010").s().p("AgIBoIAAjPIARAAIAADPg");
	this.shape_15.setTransform(88.425,140.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0F1010").s().p("AhpB2IAAjrIDTAAIAADrgAhRBeICjAAIAAi7IijAAg");
	this.shape_16.setTransform(88.425,140.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhdBqIAAjTIC7AAIAADTg");
	this.shape_17.setTransform(88.425,140.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#110B29").s().p("Ah6BCIAAiDID1AAIAACDg");
	this.shape_18.setTransform(88.425,157.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgIBoIAAjPIARAAIAADPg");
	this.shape_19.setTransform(45.775,140.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhkBwIAAjfIDJAAIAADfgAhXBkICvAAIAAjHIivAAg");
	this.shape_20.setTransform(45.8,140.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FBB040").s().p("AhdBqIAAjTIC7AAIAADTg");
	this.shape_21.setTransform(45.775,140.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#110B29").s().p("Ah6BCIAAiDID1AAIAACDg");
	this.shape_22.setTransform(45.8,157.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0F1010").s().p("AgIBoIAAjPIARAAIAADPg");
	this.shape_23.setTransform(173.725,99.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0F1010").s().p("AhpB2IAAjrIDTAAIAADrgAhRBeICjAAIAAi7IijAAg");
	this.shape_24.setTransform(173.725,99.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhdBqIAAjTIC7AAIAADTg");
	this.shape_25.setTransform(173.725,99.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#110B29").s().p("Ah6BCIAAiDID1AAIAACDg");
	this.shape_26.setTransform(173.725,116.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgIBoIAAjPIARAAIAADPg");
	this.shape_27.setTransform(131.075,99.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhjBwIAAjfIDHAAIAADfgAhXBkICvAAIAAjHIivAAg");
	this.shape_28.setTransform(131.075,99.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FBB040").s().p("AhdBqIAAjTIC7AAIAADTg");
	this.shape_29.setTransform(131.075,99.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#110B29").s().p("Ah6BCIAAiDID1AAIAACDg");
	this.shape_30.setTransform(131.075,116.425);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0F1010").s().p("AgIBoIAAjPIARAAIAADPg");
	this.shape_31.setTransform(88.425,99.425);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0F1010").s().p("AhpB2IAAjrIDTAAIAADrgAhRBeICjAAIAAi7IijAAg");
	this.shape_32.setTransform(88.425,99.25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhdBqIAAjTIC7AAIAADTg");
	this.shape_33.setTransform(88.425,99.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#110B29").s().p("Ah6BCIAAiDID1AAIAACDg");
	this.shape_34.setTransform(88.425,116.425);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgIBoIAAjPIARAAIAADPg");
	this.shape_35.setTransform(45.775,99.425);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhkBwIAAjfIDJAAIAADfgAhXBkICvAAIAAjHIivAAg");
	this.shape_36.setTransform(45.8,99.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FBB040").s().p("AhdBqIAAjTIC7AAIAADTg");
	this.shape_37.setTransform(45.775,99.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#110B29").s().p("Ah6BCIAAiDID1AAIAACDg");
	this.shape_38.setTransform(45.8,116.425);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0F1010").s().p("AgIBpIAAjQIARAAIAADQg");
	this.shape_39.setTransform(173.725,57.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0F1010").s().p("AhpB2IAAjrIDTAAIAADrgAhRBeICjAAIAAi7IijAAg");
	this.shape_40.setTransform(173.725,57.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhdBqIAAjTIC7AAIAADTg");
	this.shape_41.setTransform(173.725,57.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#110B29").s().p("Ah6BCIAAiDID1AAIAACDg");
	this.shape_42.setTransform(173.725,74.875);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgIBpIAAjQIARAAIAADQg");
	this.shape_43.setTransform(131.075,57.85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhjBwIAAjfIDHAAIAADfgAhXBkICvAAIAAjHIivAAg");
	this.shape_44.setTransform(131.075,57.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FBB040").s().p("AhdBqIAAjTIC7AAIAADTg");
	this.shape_45.setTransform(131.075,57.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#110B29").s().p("Ah6BCIAAiDID1AAIAACDg");
	this.shape_46.setTransform(131.075,74.875);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0F1010").s().p("AgIBpIAAjQIARAAIAADQg");
	this.shape_47.setTransform(88.425,57.85);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0F1010").s().p("AhpB2IAAjrIDTAAIAADrgAhRBeICjAAIAAi7IijAAg");
	this.shape_48.setTransform(88.425,57.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhdBqIAAjTIC7AAIAADTg");
	this.shape_49.setTransform(88.425,57.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#110B29").s().p("Ah6BCIAAiDID1AAIAACDg");
	this.shape_50.setTransform(88.425,74.875);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgIBpIAAjQIARAAIAADQg");
	this.shape_51.setTransform(45.775,57.85);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AhkBwIAAjfIDJAAIAADfgAhXBkICvAAIAAjHIivAAg");
	this.shape_52.setTransform(45.8,57.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FBB040").s().p("AhdBqIAAjTIC7AAIAADTg");
	this.shape_53.setTransform(45.775,57.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#110B29").s().p("Ah6BCIAAiDID1AAIAACDg");
	this.shape_54.setTransform(45.8,74.875);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1E1736").s().p("A5cODIAA8FMAy5AAAIAAcFg");
	this.shape_55.setTransform(173.725,118.825);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#241E3D").s().p("A3vCDIAAkFMAvfAAAIAAEFg");
	this.shape_56.setTransform(173.725,13.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0,0,347.5,216.8), null);


(lib.Group_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#08021D").s().p("AhaDIIAAmPIC1AAIAAGPg");
	this.shape.setTransform(62.775,330.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#110B29").s().p("Ah+DiIAAnDID9AAIAAHDg");
	this.shape_1.setTransform(62.775,329.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F1010").s().p("AhCAKIAAgTICFAAIAAATg");
	this.shape_2.setTransform(77.8,276.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0F1010").s().p("AhPCVIAAkoICfAAIAAEogAg8CCIB5AAIAAkCIh5AAg");
	this.shape_3.setTransform(77.4,281.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhGCLIAAkVICNAAIAAEVg");
	this.shape_4.setTransform(77.4,281.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#110B29").s().p("AhnAaIAAgzIDPAAIAAAzg");
	this.shape_5.setTransform(77.4,297.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhCAKIAAgTICFAAIAAATg");
	this.shape_6.setTransform(48.9,276.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhQCVIAAkoICgAAIAAEogAg8CCIB5AAIAAkCIh5AAg");
	this.shape_7.setTransform(48.5,281.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBB040").s().p("AhGCLIAAkVICNAAIAAEVg");
	this.shape_8.setTransform(48.5,281.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#110B29").s().p("AhnAaIAAgzIDQAAIAAAzg");
	this.shape_9.setTransform(48.5,297.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhCAKIAAgTICFAAIAAATg");
	this.shape_10.setTransform(20,276.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0F1010").s().p("AhQCVIAAkoICgAAIAAEogAg9CCIB6AAIAAkCIh6AAg");
	this.shape_11.setTransform(19.6,281.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhGCLIAAkVICNAAIAAEVg");
	this.shape_12.setTransform(19.6,281.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#110B29").s().p("AhnAaIAAgzIDQAAIAAAzg");
	this.shape_13.setTransform(19.6,297.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0F1010").s().p("AhCAJIAAgSICFAAIAAASg");
	this.shape_14.setTransform(77.8,233.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0F1010").s().p("AhPCVIAAkoICfAAIAAEogAg8CBIB5AAIAAkBIh5AAg");
	this.shape_15.setTransform(77.4,237.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhGCLIAAkVICNAAIAAEVg");
	this.shape_16.setTransform(77.4,237.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#110B29").s().p("AhnAbIAAg0IDPAAIAAA0g");
	this.shape_17.setTransform(77.4,254.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhCAJIAAgSICFAAIAAASg");
	this.shape_18.setTransform(48.9,233.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhQCVIAAkoICgAAIAAEogAg8CBIB5AAIAAkBIh5AAg");
	this.shape_19.setTransform(48.5,237.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FBB040").s().p("AhGCLIAAkVICNAAIAAEVg");
	this.shape_20.setTransform(48.5,237.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#110B29").s().p("AhnAbIAAg0IDQAAIAAA0g");
	this.shape_21.setTransform(48.5,254.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0F1010").s().p("AhCAJIAAgSICFAAIAAASg");
	this.shape_22.setTransform(20,233.45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0F1010").s().p("AhQCVIAAkoICgAAIAAEogAg9CBIB6AAIAAkBIh6AAg");
	this.shape_23.setTransform(19.6,237.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhGCLIAAkVICNAAIAAEVg");
	this.shape_24.setTransform(19.6,237.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#110B29").s().p("AhnAbIAAg0IDQAAIAAA0g");
	this.shape_25.setTransform(19.6,254.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0F1010").s().p("AhCAKIAAgTICFAAIAAATg");
	this.shape_26.setTransform(77.8,190.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhPCUIAAkoICfAAIAAEogAg8CBIB5AAIAAkBIh5AAg");
	this.shape_27.setTransform(77.4,194.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FBB040").s().p("AhGCLIAAkVICNAAIAAEVg");
	this.shape_28.setTransform(77.4,194.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#110B29").s().p("AhnAaIAAgzIDPAAIAAAzg");
	this.shape_29.setTransform(77.4,211.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0F1010").s().p("AhCAKIAAgTICFAAIAAATg");
	this.shape_30.setTransform(48.9,190.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0F1010").s().p("AhQCUIAAkoICgAAIAAEogAg8CBIB5AAIAAkBIh5AAg");
	this.shape_31.setTransform(48.5,194.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhGCLIAAkVICNAAIAAEVg");
	this.shape_32.setTransform(48.5,194.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#110B29").s().p("AhnAaIAAgzIDQAAIAAAzg");
	this.shape_33.setTransform(48.5,211.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#0F1010").s().p("AhCAKIAAgTICFAAIAAATg");
	this.shape_34.setTransform(20,190.35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0F1010").s().p("AhQCUIAAkoICgAAIAAEogAg9CBIB6AAIAAkBIh6AAg");
	this.shape_35.setTransform(19.6,194.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhGCLIAAkVICNAAIAAEVg");
	this.shape_36.setTransform(19.6,194.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#110B29").s().p("AhnAaIAAgzIDQAAIAAAzg");
	this.shape_37.setTransform(19.6,211.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0F1010").s().p("AhCAKIAAgTICFAAIAAATg");
	this.shape_38.setTransform(77.8,147.225);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0F1010").s().p("AhPCVIAAkoICfAAIAAEogAg8CBIB5AAIAAkBIh5AAg");
	this.shape_39.setTransform(77.4,151.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AhGCLIAAkVICNAAIAAEVg");
	this.shape_40.setTransform(77.4,151.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#110B29").s().p("AhnAaIAAgzIDPAAIAAAzg");
	this.shape_41.setTransform(77.4,168.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhCAKIAAgTICFAAIAAATg");
	this.shape_42.setTransform(48.9,147.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhQCVIAAkoICgAAIAAEogAg8CBIB5AAIAAkBIh5AAg");
	this.shape_43.setTransform(48.5,151.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FBB040").s().p("AhGCLIAAkVICNAAIAAEVg");
	this.shape_44.setTransform(48.5,151.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#110B29").s().p("AhnAaIAAgzIDQAAIAAAzg");
	this.shape_45.setTransform(48.5,168.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#0F1010").s().p("AhCAKIAAgTICFAAIAAATg");
	this.shape_46.setTransform(20,147.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0F1010").s().p("AhQCVIAAkoICgAAIAAEogAg9CBIB6AAIAAkBIh6AAg");
	this.shape_47.setTransform(19.6,151.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhGCLIAAkVICNAAIAAEVg");
	this.shape_48.setTransform(19.6,151.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#110B29").s().p("AhnAaIAAgzIDQAAIAAAzg");
	this.shape_49.setTransform(19.6,168.225);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#0F1010").s().p("AhCAJIAAgSICFAAIAAASg");
	this.shape_50.setTransform(77.8,104.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#0F1010").s().p("AhPCUIAAkoICfAAIAAEogAg8CBIB5AAIAAkBIh5AAg");
	this.shape_51.setTransform(77.4,108.55);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AhGCLIAAkVICNAAIAAEVg");
	this.shape_52.setTransform(77.4,108.575);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#110B29").s().p("AhnAaIAAgzIDPAAIAAAzg");
	this.shape_53.setTransform(77.4,125.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0F1010").s().p("AhPAJIAAgSICfAAIAAASg");
	this.shape_54.setTransform(48.475,104.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0F1010").s().p("AhQCUIAAkoICgAAIAAEogAg8CBIB5AAIAAkBIh5AAg");
	this.shape_55.setTransform(48.5,108.55);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AhGCLIAAkVICNAAIAAEVg");
	this.shape_56.setTransform(48.5,108.575);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#110B29").s().p("AhnAaIAAgzIDQAAIAAAzg");
	this.shape_57.setTransform(48.5,125.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#0F1010").s().p("AhCAJIAAgSICFAAIAAASg");
	this.shape_58.setTransform(20,104.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#0F1010").s().p("AhQCUIAAkoICgAAIAAEogAg9CBIB6AAIAAkBIh6AAg");
	this.shape_59.setTransform(19.6,108.55);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AhGCLIAAkVICNAAIAAEVg");
	this.shape_60.setTransform(19.6,108.575);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#110B29").s().p("AhnAaIAAgzIDQAAIAAAzg");
	this.shape_61.setTransform(19.6,125.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#0F1010").s().p("AhCAKIAAgTICFAAIAAATg");
	this.shape_62.setTransform(77.8,60.975);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#0F1010").s().p("AhPCUIAAkoICfAAIAAEogAg8CBIB5AAIAAkCIh5AAg");
	this.shape_63.setTransform(77.4,65.45);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AhGCLIAAkVICNAAIAAEVg");
	this.shape_64.setTransform(77.4,65.45);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#110B29").s().p("AhnAaIAAgzIDPAAIAAAzg");
	this.shape_65.setTransform(77.4,81.975);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AhCAKIAAgTICFAAIAAATg");
	this.shape_66.setTransform(48.9,60.975);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AhQCUIAAkoICgAAIAAEogAg8CBIB5AAIAAkCIh5AAg");
	this.shape_67.setTransform(48.5,65.45);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FBB040").s().p("AhGCLIAAkVICNAAIAAEVg");
	this.shape_68.setTransform(48.5,65.45);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#110B29").s().p("AhnAaIAAgzIDQAAIAAAzg");
	this.shape_69.setTransform(48.5,81.975);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#0F1010").s().p("AhCAKIAAgTICFAAIAAATg");
	this.shape_70.setTransform(20,60.975);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0F1010").s().p("AhQCUIAAkoICgAAIAAEogAg9CBIB6AAIAAkCIh6AAg");
	this.shape_71.setTransform(19.6,65.45);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AhGCLIAAkVICNAAIAAEVg");
	this.shape_72.setTransform(19.6,65.45);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#110B29").s().p("AhnAaIAAgzIDQAAIAAAzg");
	this.shape_73.setTransform(19.6,81.975);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#1E1736").s().p("An1YyMAAAgxjIPqAAMAAAAxjg");
	this.shape_74.setTransform(50.15,193.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#1E1736").s().p("AiPBSQgSAAgMgMQgNgNAAgSIAAhNQAAgSANgNQAMgNASAAIEfAAQASAAANANQAMANAAASIAABNQAAASgMANQgNAMgSAAg");
	this.shape_75.setTransform(50.175,8.25);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#1E1736").s().p("AkjCoQglAAgagaQgagaAAgkIAAieQAAglAagaQAagaAlAAIJHAAQAlAAAZAaQAaAaAAAlIAACeQAAAkgaAaQgZAaglAAg");
	this.shape_76.setTransform(50.15,26.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0,0,100.3,352.4), null);


(lib.Group_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#110B29").s().p("ArFAfIAAg9IWLAAIAAA9g");
	this.shape.setTransform(71.025,346.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#08021D").s().p("AhiDZIAAmxIDFAAIAAGxg");
	this.shape_1.setTransform(71.025,321.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#110B29").s().p("AiJD2IAAnrIETAAIAAHrg");
	this.shape_2.setTransform(71.025,320.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhIAKIAAgTICRAAIAAATg");
	this.shape_3.setTransform(118.775,262.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhWChIAAlBICtAAIAAFBgAhCCMICFAAIAAkYIiFAAg");
	this.shape_4.setTransform(118.35,267.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBB040").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_5.setTransform(118.35,267.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#110B29").s().p("AhxAcIAAg3IDjAAIAAA3g");
	this.shape_6.setTransform(118.325,285.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0F1010").s().p("AhIAKIAAgTICRAAIAAATg");
	this.shape_7.setTransform(87.35,262.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0F1010").s().p("AhXChIAAlBICvAAIAAFBgAhBCMICEAAIAAkYIiEAAg");
	this.shape_8.setTransform(86.9,267.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_9.setTransform(86.925,267.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#110B29").s().p("AhxAcIAAg3IDjAAIAAA3g");
	this.shape_10.setTransform(86.925,285.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhIAKIAAgTICRAAIAAATg");
	this.shape_11.setTransform(55.925,262.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhXChIAAlBICvAAIAAFBgAhCCMICFAAIAAkYIiFAAg");
	this.shape_12.setTransform(55.5,267.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FBB040").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_13.setTransform(55.5,267.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#110B29").s().p("AhxAcIAAg3IDjAAIAAA3g");
	this.shape_14.setTransform(55.475,285.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhIAKIAAgTICRAAIAAATg");
	this.shape_15.setTransform(24.475,262.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhWChIAAlBICtAAIAAFBgAhCCMICFAAIAAkYIiFAAg");
	this.shape_16.setTransform(24.05,267.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FBB040").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_17.setTransform(24.05,267.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#110B29").s().p("AhxAcIAAg3IDjAAIAAA3g");
	this.shape_18.setTransform(24.075,285.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhIALIAAgVICRAAIAAAVg");
	this.shape_19.setTransform(118.775,215.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhWChIAAlCICtAAIAAFCgAhCCMICFAAIAAkXIiFAAg");
	this.shape_20.setTransform(118.35,220.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FBB040").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_21.setTransform(118.35,220.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#110B29").s().p("AhxAdIAAg5IDjAAIAAA5g");
	this.shape_22.setTransform(118.325,238.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhIALIAAgVICRAAIAAAVg");
	this.shape_23.setTransform(87.35,215.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhXChIAAlCICvAAIAAFCgAhBCMICEAAIAAkXIiEAAg");
	this.shape_24.setTransform(86.9,220.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FBB040").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_25.setTransform(86.925,220.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#110B29").s().p("AhxAdIAAg5IDjAAIAAA5g");
	this.shape_26.setTransform(86.925,238.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhIALIAAgVICRAAIAAAVg");
	this.shape_27.setTransform(55.925,215.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhXChIAAlCICvAAIAAFCgAhCCMICFAAIAAkXIiFAAg");
	this.shape_28.setTransform(55.5,220.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FBB040").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_29.setTransform(55.5,220.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#110B29").s().p("AhxAdIAAg5IDjAAIAAA5g");
	this.shape_30.setTransform(55.475,238.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0F1010").s().p("AhIALIAAgVICRAAIAAAVg");
	this.shape_31.setTransform(24.475,215.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0F1010").s().p("AhWChIAAlCICtAAIAAFCgAhCCMICFAAIAAkXIiFAAg");
	this.shape_32.setTransform(24.05,220.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_33.setTransform(24.05,220.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#110B29").s().p("AhxAdIAAg5IDjAAIAAA5g");
	this.shape_34.setTransform(24.075,238.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhIALIAAgVICRAAIAAAVg");
	this.shape_35.setTransform(118.775,168.65);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhWChIAAlCICtAAIAAFCgAhCCNICFAAIAAkYIiFAAg");
	this.shape_36.setTransform(118.35,173.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FBB040").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_37.setTransform(118.35,173.525);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#110B29").s().p("AhxAcIAAg4IDjAAIAAA4g");
	this.shape_38.setTransform(118.325,191.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0F1010").s().p("AhIALIAAgVICRAAIAAAVg");
	this.shape_39.setTransform(87.35,168.65);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0F1010").s().p("AhXChIAAlCICvAAIAAFCgAhBCNICEAAIAAkYIiEAAg");
	this.shape_40.setTransform(86.9,173.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_41.setTransform(86.925,173.525);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#110B29").s().p("AhxAcIAAg4IDjAAIAAA4g");
	this.shape_42.setTransform(86.925,191.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhIALIAAgVICRAAIAAAVg");
	this.shape_43.setTransform(55.925,168.65);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhXChIAAlCICvAAIAAFCgAhCCNICFAAIAAkYIiFAAg");
	this.shape_44.setTransform(55.5,173.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FBB040").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_45.setTransform(55.5,173.525);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#110B29").s().p("AhxAcIAAg4IDjAAIAAA4g");
	this.shape_46.setTransform(55.475,191.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhIALIAAgVICRAAIAAAVg");
	this.shape_47.setTransform(24.475,168.65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhWChIAAlCICtAAIAAFCgAhCCNICFAAIAAkYIiFAAg");
	this.shape_48.setTransform(24.05,173.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FBB040").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_49.setTransform(24.05,173.525);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#110B29").s().p("AhxAcIAAg4IDjAAIAAA4g");
	this.shape_50.setTransform(24.075,191.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AhIAKIAAgTICRAAIAAATg");
	this.shape_51.setTransform(118.775,121.775);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AhWCiIAAlCICtAAIAAFCgAhCCMICFAAIAAkYIiFAAg");
	this.shape_52.setTransform(118.35,126.65);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FBB040").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_53.setTransform(118.35,126.65);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#110B29").s().p("AhxAdIAAg5IDjAAIAAA5g");
	this.shape_54.setTransform(118.325,144.625);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AhIAKIAAgTICRAAIAAATg");
	this.shape_55.setTransform(87.35,121.775);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AhXCiIAAlCICvAAIAAFCgAhBCMICEAAIAAkYIiEAAg");
	this.shape_56.setTransform(86.9,126.65);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FBB040").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_57.setTransform(86.925,126.65);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#110B29").s().p("AhxAdIAAg5IDjAAIAAA5g");
	this.shape_58.setTransform(86.925,144.625);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AhIAKIAAgTICRAAIAAATg");
	this.shape_59.setTransform(55.925,121.775);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AhXCiIAAlCICvAAIAAFCgAhCCMICFAAIAAkYIiFAAg");
	this.shape_60.setTransform(55.5,126.65);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FBB040").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_61.setTransform(55.5,126.65);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#110B29").s().p("AhxAdIAAg5IDjAAIAAA5g");
	this.shape_62.setTransform(55.475,144.625);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhIAKIAAgTICRAAIAAATg");
	this.shape_63.setTransform(24.475,121.775);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AhWCiIAAlCICtAAIAAFCgAhCCMICFAAIAAkYIiFAAg");
	this.shape_64.setTransform(24.05,126.65);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FBB040").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_65.setTransform(24.05,126.65);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#110B29").s().p("AhxAdIAAg5IDjAAIAAA5g");
	this.shape_66.setTransform(24.075,144.625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AhIALIAAgUICRAAIAAAUg");
	this.shape_67.setTransform(118.775,74.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AhWCiIAAlCICtAAIAAFCgAhCCMICFAAIAAkYIiFAAg");
	this.shape_68.setTransform(118.35,79.75);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FBB040").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_69.setTransform(118.35,79.75);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#110B29").s().p("AhxAdIAAg5IDjAAIAAA5g");
	this.shape_70.setTransform(118.325,97.725);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AhIALIAAgUICRAAIAAAUg");
	this.shape_71.setTransform(87.35,74.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AhXCiIAAlCICvAAIAAFCgAhBCMICEAAIAAkYIiEAAg");
	this.shape_72.setTransform(86.9,79.75);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FBB040").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_73.setTransform(86.925,79.75);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#110B29").s().p("AhxAdIAAg5IDjAAIAAA5g");
	this.shape_74.setTransform(86.925,97.725);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0F1010").s().p("AhWALIAAgUICsAAIAAAUg");
	this.shape_75.setTransform(55.45,74.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0F1010").s().p("AhXCiIAAlCICvAAIAAFCgAhCCMICFAAIAAkYIiFAAg");
	this.shape_76.setTransform(55.5,79.75);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_77.setTransform(55.5,79.75);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#110B29").s().p("AhxAdIAAg5IDjAAIAAA5g");
	this.shape_78.setTransform(55.475,97.725);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AhIALIAAgUICRAAIAAAUg");
	this.shape_79.setTransform(24.475,74.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AhWCiIAAlCICtAAIAAFCgAhCCMICFAAIAAkYIiFAAg");
	this.shape_80.setTransform(24.05,79.75);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FBB040").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_81.setTransform(24.05,79.75);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#110B29").s().p("AhxAdIAAg5IDjAAIAAA5g");
	this.shape_82.setTransform(24.075,97.725);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#0F1010").s().p("AhIALIAAgVICRAAIAAAVg");
	this.shape_83.setTransform(118.775,28);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#0F1010").s().p("AhWChIAAlBICtAAIAAFBgAhCCNICFAAIAAkZIiFAAg");
	this.shape_84.setTransform(118.35,32.875);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_85.setTransform(118.35,32.875);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#110B29").s().p("AhxAdIAAg5IDjAAIAAA5g");
	this.shape_86.setTransform(118.325,50.85);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AhIALIAAgVICRAAIAAAVg");
	this.shape_87.setTransform(87.35,28);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AhXChIAAlBICvAAIAAFBgAhBCNICEAAIAAkZIiEAAg");
	this.shape_88.setTransform(86.9,32.875);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FBB040").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_89.setTransform(86.925,32.875);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#110B29").s().p("AhxAdIAAg5IDjAAIAAA5g");
	this.shape_90.setTransform(86.925,50.85);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AhIALIAAgVICRAAIAAAVg");
	this.shape_91.setTransform(55.925,28);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AhXChIAAlBICvAAIAAFBgAhCCNICFAAIAAkZIiFAAg");
	this.shape_92.setTransform(55.5,32.875);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FBB040").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_93.setTransform(55.5,32.875);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#110B29").s().p("AhxAdIAAg5IDjAAIAAA5g");
	this.shape_94.setTransform(55.475,50.85);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AhIALIAAgVICRAAIAAAVg");
	this.shape_95.setTransform(24.475,28);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AhWChIAAlBICtAAIAAFBgAhCCNICFAAIAAkZIiFAAg");
	this.shape_96.setTransform(24.05,32.875);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FBB040").s().p("AhMCXIAAktICZAAIAAEtg");
	this.shape_97.setTransform(24.05,32.875);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#110B29").s().p("AhxAdIAAg5IDjAAIAAA5g");
	this.shape_98.setTransform(24.075,50.85);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#1E1736").s().p("Aqpa8MAAAg13IVTAAMAAAA13g");
	this.shape_99.setTransform(71.025,172.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0,142.1,349.4), null);


(lib.Group_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#120829").s().p("AgVIXIAAwtIArAAIAAQtg");
	this.shape.setTransform(31.725,53.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkbAtIAAhZII3AAIAABZgAkRAjIIjAAIAAhFIojAAg");
	this.shape_1.setTransform(31.7,415.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBB040").s().p("AkWAoIAAhPIItAAIAABPg");
	this.shape_2.setTransform(31.7,415.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#110B29").s().p("AkfAjIAAhFII/AAIAABFg");
	this.shape_3.setTransform(31.725,423.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkbAtIAAhZII3AAIAABZgAkRAjIIjAAIAAhFIojAAg");
	this.shape_4.setTransform(31.7,395.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBB040").s().p("AkWAoIAAhPIItAAIAABPg");
	this.shape_5.setTransform(31.7,395.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#110B29").s().p("AkfAjIAAhFII/AAIAABFg");
	this.shape_6.setTransform(31.725,403.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AkbAtIAAhZII3AAIAABZgAkRAjIIjAAIAAhFIojAAg");
	this.shape_7.setTransform(31.7,375.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBB040").s().p("AkWAoIAAhPIItAAIAABPg");
	this.shape_8.setTransform(31.7,375.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#110B29").s().p("AkfAjIAAhFII/AAIAABFg");
	this.shape_9.setTransform(31.725,382.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0F1010").s().p("AkdAvIAAhdII7AAIAABdgAkPAhIIfAAIAAhBIofAAg");
	this.shape_10.setTransform(31.725,355);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AkWAoIAAhPIItAAIAABPg");
	this.shape_11.setTransform(31.7,355);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0F1010").s().p("AknArIAAhUIJPAAIAABUgAkYAcIIxAAIAAg3IoxAAg");
	this.shape_12.setTransform(31.725,362.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AkfAjIAAhFII/AAIAABFg");
	this.shape_13.setTransform(31.725,362.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0F1010").s().p("AkdAvIAAhdII7AAIAABdgAkPAgIIfAAIAAhAIofAAg");
	this.shape_14.setTransform(31.725,334.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AkWAoIAAhPIItAAIAABPg");
	this.shape_15.setTransform(31.7,334.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#110B29").s().p("AkfAjIAAhFII/AAIAABFg");
	this.shape_16.setTransform(31.725,342.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AkbAtIAAhZII3AAIAABZgAkRAjIIjAAIAAhFIojAAg");
	this.shape_17.setTransform(31.7,314.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FBB040").s().p("AkWAoIAAhPIItAAIAABPg");
	this.shape_18.setTransform(31.7,314.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#110B29").s().p("AkfAjIAAhFII/AAIAABFg");
	this.shape_19.setTransform(31.725,321.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AkbAtIAAhZII3AAIAABZgAkRAjIIjAAIAAhFIojAAg");
	this.shape_20.setTransform(31.7,294.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FBB040").s().p("AkWAoIAAhPIItAAIAABPg");
	this.shape_21.setTransform(31.7,294.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#110B29").s().p("AkfAjIAAhFII/AAIAABFg");
	this.shape_22.setTransform(31.725,301.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0F1010").s().p("AkdAvIAAhdII7AAIAABdgAkPAhIIfAAIAAhAIofAAg");
	this.shape_23.setTransform(31.725,273.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AkWAoIAAhPIItAAIAABPg");
	this.shape_24.setTransform(31.7,273.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#110B29").s().p("AkfAjIAAhFII/AAIAABFg");
	this.shape_25.setTransform(31.725,281.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0F1010").s().p("AkdAvIAAhdII7AAIAABdgAkPAgIIfAAIAAhAIofAAg");
	this.shape_26.setTransform(31.725,253.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AkWAoIAAhPIItAAIAABPg");
	this.shape_27.setTransform(31.7,253.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0F1010").s().p("AknArIAAhVIJPAAIAABVgAkYAcIIxAAIAAg3IoxAAg");
	this.shape_28.setTransform(31.725,261.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AkfAjIAAhFII/AAIAABFg");
	this.shape_29.setTransform(31.725,261.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AkbAtIAAhZII3AAIAABZgAkRAjIIjAAIAAhFIojAAg");
	this.shape_30.setTransform(31.7,233.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FBB040").s().p("AkWAoIAAhPIItAAIAABPg");
	this.shape_31.setTransform(31.7,233.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#110B29").s().p("AkfAjIAAhFII/AAIAABFg");
	this.shape_32.setTransform(31.725,240.775);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0F1010").s().p("AkdAvIAAhdII7AAIAABdgAkPAgIIfAAIAAhAIofAAg");
	this.shape_33.setTransform(31.725,212.975);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AkWAoIAAhPIItAAIAABPg");
	this.shape_34.setTransform(31.7,212.975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#110B29").s().p("AkfAjIAAhFII/AAIAABFg");
	this.shape_35.setTransform(31.725,220.475);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AkbAtIAAhZII3AAIAABZgAkRAjIIjAAIAAhFIojAAg");
	this.shape_36.setTransform(31.7,192.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FBB040").s().p("AkWAoIAAhPIItAAIAABPg");
	this.shape_37.setTransform(31.7,192.675);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#110B29").s().p("AkfAjIAAhFII/AAIAABFg");
	this.shape_38.setTransform(31.725,200.175);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0F1010").s().p("AkdAvIAAhdII7AAIAABdgAkPAhIIfAAIAAhAIofAAg");
	this.shape_39.setTransform(31.725,172.375);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AkWAoIAAhPIItAAIAABPg");
	this.shape_40.setTransform(31.7,172.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#110B29").s().p("AkfAjIAAhFII/AAIAABFg");
	this.shape_41.setTransform(31.725,179.875);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0F1010").s().p("AkdAvIAAhdII7AAIAABdgAkPAgIIfAAIAAg/IofAAg");
	this.shape_42.setTransform(31.725,152.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AkWAoIAAhPIItAAIAABPg");
	this.shape_43.setTransform(31.7,152.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#110B29").s().p("AkfAjIAAhFII/AAIAABFg");
	this.shape_44.setTransform(31.725,159.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1E1736").s().p("Ak8YcMAAAgw3IJ5AAMAAAAw3g");
	this.shape_45.setTransform(31.725,295.375);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#120829").s().p("Ah2FRIAAqhIDtAAIAAKhg");
	this.shape_46.setTransform(31.725,127.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,63.5,451.8), null);


(lib.Group_20_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AHcH8QgBjQg0jWQg0jYhsikQhhiSiAhWQh0hOhzgKQhwgJhHA7QgwApguBAQgwBEgoBWQApisBMiLQBEh8BPhDQBHg7BxAJQBxAJB2BPQB/BWBhCSQBsCkA1DZQBJEvgcEdQgXDwhZC7QAmingBi4g");
	this.shape_1.setTransform(55.8762,85.9159);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_20_1, new cjs.Rectangle(0,0,111.8,171.9), null);


(lib.Group_17_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AsCBkQCXjuELizQDAh/DXgtQDBgoC7AeQCsAcB9BOQB7BNAkBjQApBvgICRQgICjhCCiQANhggHhZQgIhUgYhDQgkhih7hNQh9hPisgbQi7gejAAoQjZAti/B/Qi9B9iFCgQh1CNhCCdQAajSCAjKg");
	this.shape_1.setTransform(92.5336,51.2571);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_17_1, new cjs.Rectangle(0,0,185.1,102.5), null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.womansing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// notes
	this.instance = new lib.notesai("synched",0);
	this.instance.setTransform(2552.6,179,0.6182,0.6182,-14.9984,0,0,698.1,139.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28));

	// legs
	this.instance_1 = new lib.Group_0();
	this.instance_1.setTransform(724.7,370.45,1,1,0,0,180,457.5,231.8);
	this.instance_1.alpha = 0.3984;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00080F").s().p("AgTBJQgygOgkgkQgRgRgBgZQgBgWATgUQAHgIAMgFQAMgFALAAQAZAAARASIAJAHIAOAJIAVAFIATAAIAGgBQAYgGAVAMQAVAMAIAXQADAKgCAOQgBAMgGAKQgNAWgXAGQgYAGgYAAQgaAAgZgHg");
	this.shape.setTransform(1174.0393,570.9255,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00080F").s().p("AC4GYQhEgng8g4QhQhLhdiKIhIhvQg1hTgXgzQgLgYAFgWQAGgWAVgOQAKgHALgBIgjhoQgHgXANgWQANgVAXgHQAXgIAXAOQAUAMAIAXIBdERIAAAAIACADQAHASAJAPQAQAcAaAiIABABID0E5QARAVABAWQAAATgNARQgOARgWAFIgMABQgQAAgNgIg");
	this.shape_1.setTransform(1194.1658,541.8314,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00080F").s().p("AgvO+QgYgFgMgXQgNgWAHgXQAPgqAKguIAEgRIAPhZIAAgCIARirIhABlQgdAxgRAYQgdApgeATQgXAPgaABQgcACgXgNQgUgLgNgUQgNgTgDgXQgKg/AchpQAShDAdhTIA1iTQBvkpCJkdQAag2ArhUIBHiKIABAAQACgIAEgIIAFgHIAUgsIABgDIAHgQIAOg1IgCgQIAAgCIgBgGQgEgaAKgUQAFgIAGgGQABgTgBgSQgCgYATgSQATgRAYgBQAXgBATASQAOAPAEAcIABASQABAagCAaQgEAigJAkQAGBMgIBMQgEAqgJAqIACAIQASBOgIBKQgDArgLAsQgCBvgVC4QgOB6gFAlQgOBZgXBCQgLAigTAsIgiBNIg2CEQgmBmgjB1IgWBOQgJAYgTALQgNAIgQAAQgIAAgIgCgAj5J/IgBACQAAAAAAAAQABAAAAAAQAAgBABAAQAAgBABgBIAAgBgAgIgMIgBAEQhBCagtB9QgXA9gbBRQghBfgNAxIgJAuICpkJIAxhMQgRgDgPgOQgRgTgBgXQAAhDAYhJQAQgvAdhCIANgaIAEgXgACdIQIAAACIABgEgAB/ETIgKAsQAJgYAGgVIAFgOIgKAPgACiB/IAAAFIAAgDIABgEIgBACg");
	this.shape_2.setTransform(200.298,689.2224,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#994F2F").s().p("AjvKKQgagGgagUQgYgTgOgYQgQgagCgeQgGgeAJgeQAUhvAehlQA6jEBhi+QArhWAzhRIAwhNQATghAOgdQAJgaAFgXIgBALIAEgZIgDAOIABgQQAAg6AsgwQAlgoBFgEQAbgBAeANQAdAMAUAUQAUAVAMAcQAMAdAAAcQAAAzgOA3QgFAVgKAbIgUAvQgUAugoBAIhDBrQg8BngyByQhRDJgnDVQgFAbgUAZQgSAVgaARQgfAUgpAAQgUAAgXgFg");
	this.shape_3.setTransform(221.006,679.0436,1,1,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#994F2F").s().p("AkBZSQgsgKgigsQgfgogBgzQgHitANjGQATkiBDmMQAThtApjaIAfihQAPhQAJg9QAQiFgQiAIgIg3IgYhTQgbhYgOhBQgRhUgBhJQAAghAOgeQABgOAEgPIAQgkQAFgLAIgJIgMggQgwh5gPgqQgghdgQhLQgNg+Acg1QAVgoAzgVQAtgUA0AMQAZAGAbAUQAcAVAKAWQAyBuAoBrQA8ChApCuQAYBSATBeQATBhATCPQAMBdAOCHIAYDlIBkOsQADAcgOAeQgLAZgWAXQgmAqhEACQgMABgNgCQgTBUgdBIQgyB9hABtQgfA1haCMQglA5g1AMQgUAEgUAAQgTAAgUgEg");
	this.shape_4.setTransform(214.0569,537.8117,1,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#994F2F").s().p("AAVLfQgcgMgUgUQgWgUgJgdQgOgaABgfQAKhfACgyQADhLgHg9IgBgJIgHg6QgGg3gBgrQgDhOgJhJIgBgKQgVibgMhNQgOhagFgZQgKgzgPgoQgIgPgJgPIgLgMQgpgngDhDQgCg3AugzQASgUAfgMQAdgMAcAAQAdAAAcAMQAbAMAVAUQBPBLAkCBQAPAzAQBsQANBQAPBrIAQBvQAJBAADAuQACAWACBGQABAxAEAhIABAIIAJBDQAGA6AAAuQgBA1gNB6QAAAogUAjIgYAfQglAohFAEIgEAAQgaAAgbgMg");
	this.shape_5.setTransform(227.4024,443.2787,1,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#994F2F").s().p("ADRGNQghgEgYgPQg6glhOg+QhCg1g6g+QgSAYgaAQQgaARgeABQgTAGgVgGQgegBgZgRIgfgXQgUgSgMgfQgMgeAAgbIAKlDQACg9AqgtQAmgpBEgDQAbgBAeANQAdAMAUAUQAUAVAMAcIAFAMIAHAHIAYAfQAoBKAvBBQBRBlBmBRQAnAcAnAZQAyAfATA7QARA2ggA9QgNAYgZATQgZATgbAHQgTAGgVAAIgTgCg");
	this.shape_6.setTransform(460.9198,455.352,1,1,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#994F2F").s().p("AKEHtQgdgBgagRIllk4IgygsIgggcIALAIIgRgNIgBAAIgBAAQmHAUmDgHQg8AAgugsQgWgTgJgdQgLgRAAgUQgGgdAJgeIAPgkQANgYAZgTQAXgRAdgJIACgBIgcgFQgagEgZgVQgWgSgRgaQgfgwAQhDQAGgaAUgaQATgYAYgOQAZgQAfgCQAdgGAfAJQBqARCGAYQGvBRGgBwQAmAKAcAcQATATALAXQAcAJATAWIAYAeQA6BZA3CBQApBjAXBnQAHAegDAdQgEAggPAYQgVAhghAVQgaARgeABQgKADgKAAQgKAAgKgDg");
	this.shape_7.setTransform(781.4023,280.1887,1,1,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#994F2F").s().p("AhpBqQgpgmgDhEQgBgaANgeQAMgdAUgUQAVgUAcgMQAcgMAcAAQA6AAAwAsQApAlADBEQABAcgMAeQgNAcgUAUQgUAVgcALQgdAMgdAAQg5AAgwgsg");
	this.shape_8.setTransform(1186.4041,541.45,1,1,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#994F2F").s().p("AhpBqQgpgmgDhEQgBgaANgeQAMgdAUgUQAUgUAdgMQAcgMAcAAQA6AAAwAsQApAlADBEQABAbgMAeQgNAdgUAUQgUAVgcALQgdAMgdAAQg5AAgwgsg");
	this.shape_9.setTransform(1186.4041,536.9,1,1,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#994F2F").s().p("AlFMSQgggFgZgOQgYgOgTgYQgSgYgIgcQgyitA7jZQAQg8AdhNIA0iGQAlhaAag0QAmhNAqg4QArg5A/hIIBuh8IDMjmQAlgpBFgDQAvgCAsAiQAmAdAQAxQARA0ggA/QgyBkg4BUQgaAmhWBzQgfAqgSAiIgoBPQgrBShMBLIg1A2QgXAWgQATQgNATgJASIgIAWIgLAcQgHARgGAKQgKAQgOARQgTA/gJA0IABgLIgEAYIADgNQgGA6AFA1QADAUAGAVQARA5ggA7QgZAwhAAVQgRAFgTAAQgLAAgMgBg");
	this.shape_10.setTransform(1131.1714,272.987,1,1,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#994F2F").s().p("Al8JHQgYgNgTgZQgTgZgHgbQgIgcAEgfQAEggAPgYQAohDAwhMQBLh2BaiAIBTh2QAlg4AXgxQATgtAThEQAZhUAKgbQAPgoATgbQAXggAggTQAogYAwAAQAWAAAUAFQAPgFARgCQAcgDAfAHQAaAGAZAUQAYATAPAYQAQAZABAfQAHAdgJAfQg5CZhpBoQgUAWgcAJIgBABQgkBTgtBBIg5BSIg5BRQh1CthmCpQgeAyg8ATQgTAGgTAAQglAAgogVg");
	this.shape_11.setTransform(1124.2833,259.9362,1,1,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#994F2F").s().p("A7TJpQgogLgagcQgdgcgKgnQgKgnAKgoIAHghQAFgxgEgyQgIgvgSgvQgLgYgNgWQgfg2ARg7QAQg6A0ghQAYgPAhgEQAfgEAcAIQAbAHAYATQAYASAOAYQBDBwASCEIAFAtQFXgzDvgoQGBhBE0hHQFphSE9hoQCWgyC1hHQB1gvDRhXQDNhWB6gvQC1hFCYgsQA7gRA2AgQA1AfATA7QAIAbgFAgQgEAggPAZQgOAYgYATQgYASgbAIIhTAZQiUAui3BJQhdAljpBiQl+CfkVBYQk5BilvBRQkxBDmFBBQjIAgnzBKQgUAGgUAAQgUAAgUgGg");
	this.shape_12.setTransform(1014.3803,507.0176,1,1,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#994F2F").s().p("A2cL4Qg1gMgsgdQgrgagbgcQgYgYgegtQgVgegUg9QgOguACgtQABgUALhIQAXhQA6g7QA7g6BQgXQCCgfChgqQEOhGD1hKQBwghCQguIB8goIBOgaQAbgPAngaQApgbA4gYQEHh1EnhkQAOgSAQgRQA1gsAkgZQAygjAvgVQBKgrBVAAIBUALQBQAWA7A7IAxBAQAjA2ADA/IADAPQBogKBhgDQBWABBIAqIBAAxQA7A7AWBQIAMBUQACBBgeA4QgSA6gvArQgrAug6ATQg6Aeg/gDQiUAFiTATQjsAikXBHQi7Avk1BbQl0Buh6AiQjQA4kmBAQicAhhfAjQgqARgVAHQgzAQg5ACIgIAAQgzAAgxgNg");
	this.shape_13.setTransform(971.0279,471.7534,1,1,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#994F2F").s().p("EggsAboIhLggQg4geghgzQgpgsgPg/Qg0i9gWj1QgQixANi6QAZl1BulWQBrlLCzlBQCRkEDLkLQBbh2BbhvIASgmQASgiAdgpIA2hGQAigqAoghQBWhIA5ggQBxg9CCAeQAkAIAfASQAngRAagHQAggIBFgGQAMgCAKABIAvAGQAbACAUAFQAEAAAGADQAwAPAgASIAIAGQAtAdAXAYIAIAJIAgAlQARAXAJATIAVAvQAMAcAEAVIAHAvQB8g2BcgdQDchHESgVQBCgCA4AdQAoALAdAdQAkAVAVAkQAdAdALAoQAeA5gDBBIgDAWQB4gnB7gZQA/gTA+AOQAqAAAmAVQAoALAdAeQAYAOARAUQAtARAjAgQA0AhAdA3QAWAmALApIBzgQQB7gQBdgDQBDgCBkATQBTAPBBAtQA5AqATASQAJAJAKANIARAXIASAXQALAOAGAKQAMAVAbBEQAJAZAFAkIAHA+QADAaAAAWQgCAmgHAyIgNBYQgJA6gLA5QgTBugcBzQg2DhhQDaQgWBQg7A7Ig/AyQgzAhhDAHQg9AGhAgPQg9gOgugqQg0ghgdg3Qgjg3gDg/QgOg+AUg/QAuiaAnibIg+AFQgXABgZAAQACAUgBAUIgLBTQgPA+gqAtQggAzg4AeIrYF9Ip4FMQl1DFkDCDQleCylGCDQlVCHkuA/QgpALgqAAQgqAAgqgLgA3pFyIB0g/QgeAHgdAKQgWAKgUANIgMAMIAAgBIAAABIAAAAIgDALgA0WlGQA7ABBXAIICRANQCBAKB0gKQBrgSCBgmIAzgQQgRgagJgeQgeg4ADhBQgBgWADgWIgVgEQgqAAgmgWQg7gTgqguIgyhAIgfhLIgMhUIgGhWIjCBvIgEACIg3BGQg1BGg3BNQh5CthiCtQA4gFAtAAIAIAAg");
	this.shape_14.setTransform(971.2878,374.9063,1,1,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#994F2F").s().p("EAYbAoSQgrAAglgWQhMgfgyhCQhEhXAAhnIAMhUIAfhLIAIgMIgCgIIgKgRIgDgFIgFgEIgdgQQgggLgjgHQhHgFhPAIQguAHgjADQhUAAhLgrQgXgNgUgRQggA4giA4Qg1BYhhAoQglAWgrAAQgqALgpgLQg/gCg3gjIg/gyQgygxgfhaQhgkPgkl+QgUjlAIktIADhZQjuhMkAhsQhegnhggsQgBAXgDAYQgKA8gfA7QgXArgqAiQglAfgxAVQhgAphtgZQg9gOgugrQgzghgeg3Qh2ighnigQhBhkg8hnQgKAdgRAcQgrBKhHApQhHAqhYACQg0ABgqgNIg/CHQgkBKhCA4QhGA5hOARQhBANgmgCQg3gDgjgKQgdgJg3gZQghgQgoghQgPgGgNgIQg0gegmgzQgkgugSg5IicjHQg7g6gWhRIgMhSQgCgyAUg0QARguAhgrQA9hQBnghQA/gUA+AOQA/ADA2AjQBiBHAtAuIALALIA0hxQAYgzA3goQAwgiA9gUQAWgHAXgDQAPg9ATg7QAihmBLg7Qgwh2gsh5QgVg3AMhFQADgXAHgWIkAmNQghgzgHhDQgGg8AOhBQANg5ApgyQAlguA2gjQAxgfBFgJQBCgIA7AQQBvAfBNByQCEDEB2C/IAcAvIAAgCIABgHQgWgqgFg0QgFg0AKg4Qgeh5gih5Qghh3BBh8QAXgqAqgjQAlgfAxgVQBggoBtAZQA3AMA1AqQAvAmAhA0QBKB0BLB6QAAgsASguQARgvAhgqQA+hQBlghQBAgUA+AOQA/ADA2AjIA6AoQAkgtA0geQAjgVAmgKQgEgaAAgaIALhUQANg5ApgzQAlgtA2gjQAxggBEgIQBCgIA6AQQA6AQAyAnQAzAmAeA0QDyGhC8G2QArBKAABVIgLBUQgKAvggAsQgdAogqAgQg3AqhDAQQBwJLgbKFIgGB/IBcARQAUgRAYgQQAzghBDgHQA8gGBBAPQA3AMA1AqQAhAaAYAeQBuAGCnAGQDIAIBjAFQCmAJCFAPQBzAMAxAHQBdANBGAUQBYAaBgAwQAnATAqAeQAcAUAuAnQAoAgAhArQAlAuARAYQAdAoASAjQBGCJAaCBQAZB/AHCWIALAYQALAcAFAaQALA7AAAmQABAvgNAxQgmCQiQBgIgRALIAIALQA7A7AWBQQAXBUgXBTQgWBQg7A7Qg6A7hRAWIwjCZQglAMgkAAQgbAAgZgGgAeUdwIAzgHIgngGIgRgDIAFAQgAa6PTIAXA2IAWAGIBLAgQB8A6B8BJIBOAwIAjgWIBjhEQAjgVAjgRIgVgjQgOgPgOgNQgUgNgWgLQhGgXhcgPQiogUjrgMIAGAOgAAcjkQgHAegQAdQAHAgAAAiIgLBUQgIAngXAkIBHAZQAFirgCiUIgNgFIgDAPg");
	this.shape_15.setTransform(573.4059,440.9342,1,1,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#994F2F").s().p("ABTbSQgfAAgagPQgpgOgfghIgjgtIhVidQgIgKgGgMIhSiZIgNAPQg4A8hnAGQgpACgtgUQgrgSgegeQghgfgOgqQgVgoACguQghkDAykPIAAgBIgSApQg6CBhtB7QgnArg/AQQgaAGgaABIgNALQgbAWgjAPQgaAPgfAAQgeAJgegJQgsgBgngZIgugjIgjguIgXg2Qg4jUgNjSQgaAPgaALQiLBBhnAOQguAPgsgLQgfAAgagPQgcgHgWgWQgYgOgQgaQgeghgKgsIgIg8QAAg0Aeg9ICakpQEPoHEnoMQAphKBdgdQAqgOAvAIQAOACANADIDqm3QATglAmgcQAigZArgOQAugOAsAKQAfAAAaAPQAqAPAeAgIAjAuQAZAmACAsQAKAMAIAPIAWA2QAcBkAUBoQAcCSANCNQAHgMAIgLQAcgmAkgTQA3gdA7gCQAZgBAXAGQAHgVALgSIAjguQAfghApgNQAagQAfAAQAugKAsAOIA1AXQBFAkAjBiQAzCPA1COIADgBQA6gPA7APQAagTAhgHIA7gIQAvgCAoAVQAYAIATANQAcgkAngZQAlgYAugCQAegIAeAIQAuACAmAYIAtAkQA/BDA4BHQARgEAQAAQAjgbArgMQA8gQA8AQQA4AQArAqQBPBFBWB3QAcAlAZAtQALAIAKAKQAtAsARA9QAJAjgBAdIgDAgQgDAVgDAKQgJAggQAbQgMAWgYAaQgqAqg5ASIgOAQIhRBgQhGBWhVBuIAEgFQhRBqhQBvQlFHHkJH1QgWAogkAXQghAegsAKQg7AOg8gOQhDgPgyhBQgeghgLgsIgIg8QAChfAIhrQAJhtAOhpQgFgNgEgNIgCgHIgKAeIgdDKQgOAwgeAkIgYEKQABAvgVAoQgNApghAfQgsAog4ASQgZAIgaAAQgTAAgTgEgANbEaQAiANAeAXQAkAYAWAnIAJAVQCNjLCgjLQgagOgVgWIgPgVQggAdgoAOIAAAJQADApgTAsQgSAnggAiQgdAhgrAOQgbAPgeAAQgsALgtgPIg2gWQgkgTgdgnQgcglgLgoQgIgigLghQgRAQgWALQgZAOgcAIIBaEDQArgTAygCIAHgBQAgAAAhANgAn7DmIgaAiQgOBFgMAyIAAADQAlgdAtgQQAAhVgFhWQgIAfgRAdg");
	this.shape_16.setTransform(425.4898,422.8378,1,1,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#994F2F").s().p("EAm+AHbMgrxgG9IuDCnQgPACgDgNQgEgOAOgEQE0hmEuhTIq0huQibAAh9ACQovAInMApQgOABAAgPQAAgOAOgCQGFg0GHglQKshAK/gVQEjgIEkAAQjggajigXInUgGQgPAAAAgOQAAgOAPgCIAhgEIhygJQgPgBAAgPQAAgPAPABIDmATIAjADIAEAAQC9gUC4gPQPahPPeA6QAPABAAAOQAAAOgPABQk8AckzAqIWkARQANAAACAOQABANgMADIh6AYQnOBYoaAoQm4Aho3AEInBBTQCBAWCCASQOBCHOWAfQAPABAAAPQAAAPgPgBQj2gIkSgSQp+gqp8heIBJAPQImB1H/BdIEJAxIEIAsQEOAtEMAoQAOADgEAOQgEANgLAAIgDgBgAL7CqQmphWmmhfIiHAYIPWCdIAAAAgAvUB8IJKhsIiKgVQjhA8jfBFgAnNgZICbAZICWgcIhLgRQgOgDAEgOQAEgOAOACIChAdIFuhFQijAAi+gCIgyAAQi2Ari0AwgAoWgkQCcgrCdgmIlSgFQkugEjzgBgAy3jVQmkAcmgArQEUgLE3gDIA8gBQADgNAMgBIXvgeQCHgdCHgaIjjgCIgPAAQqrAAqyAtgAORjYQAMACgCAOQgCANgMABIr/APIh1AaQEDACC4gBICJgaQAOgCAEAOQACAIgDAEQIQgHG0glQHKgmGWhMI3RgSQhnAQhnARIDTAQQAOABAAAPQAAAPgOgBQiXgFiYgEID6AkgArXiaIEgAEIFSAEIBdgWgAEqjMIGwgJIjageIgKgBQhmAThmAVgAJ7krICVgZIovgHgAmXl9IC0AOISiAPQEwguE2ghQi4gIiygDQiGgDiGAAQqkAAqiBAg");
	this.shape_17.setTransform(673.2178,327.2094,1,1,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#020202").s().p("EBPiAzxQg3gSgbgzQgbg0ARg4QAWhMAViNQAqkYgElSQgLw0nDzjQk3tgmtotQmsouobjwQnJjMnzAsQicANiPAlIhxAkQg0AVgzgUQg0gTgZgyQgxhdhyhsQjgjVlWhzQndihqMBAQtaBUxAHUQxRHdqIL3QqHL5ixQEQhbIPArIzQAcFvBOFCQZXk9U+pqQQAnYMZplQGBkrE+k/QBUAKBHANQBmASBPARQl3GQneFzQtBKIw1HtQ2LKJ60FBQg1AKgtgcQgugbgQgzQhOj6gvlrQhcrPB0qxQCfupIgrvQLMvdUvo7QcpsVSlD8QGlBZE3DZQDUCTCHC6QERhPExABQHPABGuC+QJTEIHUJWQHUJWFMObQHbUlAHRjQACFlguEpQgaCigbBWQgOAtgmAbQglAbguAAQgTAAgXgGg");
	this.shape_18.setTransform(697.2928,331.7907,1,1,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#020202").s().p("AFgHLQhFgrg0gZQgngTgpgRQgfi+gaiyQhtCMh8CKQhbgVhegSQhQgOg/gJQDqj0CsjqQBWh1AqhHQAXgnApgTQAqgTAtAKQAtAKAfAiQAeAiAFAtQAtGtBeIAIh0hLg");
	this.shape_19.setTransform(589.475,273.0167,1,1,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#020202").s().p("AFAYwQkvhSlTjrQmukqlLu7Qjvqtimu7QA+AeBlBCQBwBJAwAaIAXB1QhvgDg3AAQgXAAgOAPQgMAOAAAUQABAwAwADQBXAGBnAKQCoMdDWIiQEKKoE1DWQEaDED0BIQDzBHDGg2QC0gyCGiZQBEhMAfhFQAYg1A3gVQA2gUA1AXQA2AYAUA2QAVA2gXA1QgvBphfBtQi7DYkGBKQh9AkiGAAQiUAAifgrg");
	this.shape_20.setTransform(423.5045,482.9608,1,1,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#390075").s().p("Ag+AvIBAh2IA8ARIgTAeQgmA3gXApg");
	this.shape_21.setTransform(1001.2,1627.725,1,1,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#020202").s().p("EgCPAhQQjjhrkJilQiehjkzjSQmekajOh2QlTjBkkhOQlahclgAxQmFA2muDnQhFAlhNgOQhOgPg1g7Qgzg5gIhMQgHhMAmhAMAaWgwTQAhg8A/gYQBAgZBAAWIDKA9QD8BIEVA8QNzC+MkAAQMWAAMRi8QGJhfDxhgQBDgbBDAYQBDAZAiBAMAYWAugQBRCbg0CwQgzCwiaBdQqZGUqFEWQvoGvqoAAQo1AAo5kLgA74K2QDQBkD4CcQCUBdEhDFQEmDJCTBcQDzCZDMBhQH3DxHrAAQJ1AAPWm1QJUkJJOlmQAegSALgjQALghgNgXMgXKgsRQl8CCnBBXQqnCEqqAAQrBAAr5iKQnrhZmwiBMgWGAohQGxilGbAAQHxAAILD7g");
	this.shape_22.setTransform(767.3603,1844.5101,1,1,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AAAABA").s().p("AguevQjUhij1iXQikhlkQi6Qj7irh+hTQjdiQiwheQoPkdnfgVQpLgbqJFbQgdAQgXgcQgXgbASgbMAaZgwYIAIADQFjBwHTBgQN2C2L6ABQMDAANAjFQGfhiEGhjIL1WoICJEGQEwJCFoKyQAvBaggBpQgfBnhcA4QjZCEjmB+QoKEcnZDBQpwD+nkBHQi2AaihABQoCAAoMjzg");
	this.shape_23.setTransform(767.4134,1844.55,1,1,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#390075").s().p("ABQTUQjwgwjvhcQlgiJkfjQQkWjKi0jzQi0jzg5j4Qg7kBBRjkQCKmGGhiOQIli8PaEGQGUBrFGD4QFHD3CvFMQBzDZAaDZQAZDYhCC8Qg6Ckh9CBQh8CAi2BTQiRBDitAiQirAhi+AAQjhAAjugugAw6s+QjSBbhFDBQg2CYA7C5QA5CyCZC0QCZC1DgCaQDoCfERBqQFuCPFnAQQFmARD5hyQDjhpBCi6QAohygUiLQgUiMhPiTQiLkJkJjGQkIjHlKhXQoLiLl+AAQkZAAi0BOg");
	this.shape_24.setTransform(1122.1854,2502.0979,1,1,0,0,180);

	this.instance_2 = new lib.Group_1();
	this.instance_2.setTransform(1130.3,2526,1,1,0,0,180,149.1,85.7);
	this.instance_2.alpha = 0.1992;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AKyJUQlzgInPi0QnQi0kej2QiHh0g8hrQg8huAdhTQAehTBzgpQBvgpCvAEQFyAIHPC0QHRC0EeD2QCHB0A7BrQA+BugeBTQgeBThyApQhnAlicAAIgcAAg");
	this.shape_25.setTransform(1140.95,2553.5002,1,1,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B87BFF").s().p("AlMOaQk4h5kEi4Qj6iyinjUQimjVg5jUQg7jcBDi/IAEgIQCKl4HqhRQHZhOL7DLQE+BUEKC1QD4CoCoDiQCiDbA2DkQA4DohEDAQgtCAhiBkQjzD4naAiQhGAFhGAAQmjAAnBiug");
	this.shape_26.setTransform(1122.1538,2502.1089,1,1,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#050405").s().p("EgVVA5rIyuvXQgrgkgRg1QgQg2AQg2QBNj8CJmKQEQsSFBsJUAQAgmsARogXNQAtg8BKgLQBLgMA9AsIerVpQAgAXAUAiQAUAiAFAnQAFAngMAmQgMAmgaAeIh3CMQiTCtijDJQoDJ8nlKfUgYKAhYgKuAaiQgQApgiAdQghAdgrAMQgYAFgWAAQhDAAgzgqgA1FCUQoITElpRsIOMLpQKH3eT/8gQL9xEMku6I5xyLUgPNAU0gOEAg6g");
	this.shape_27.setTransform(864.6015,2192.9048,1,1,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#390075").s().p("EgmuAoKIAEgQQA2ivBikjQEUszFQs2QHkygIRveIAcg1QIswHI8ryIAPgTIfVWIIgTAUIh4CNQiTCvilDKQoGKAnqKlUgYUAhngK1Aa0IgMAfgApx7bIgYAuQoSPdnkSfQlQM4kUMyQhYEEg5C7ISGO3UAKhgZ0AXAggLQHhqhIHqIQElluDkkJI+A1MQozLsoiP1g");
	this.shape_28.setTransform(864.15,2193.25,1,1,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFB78A").s().p("EgmNAoEQAzirBkklQERsrFNswQHqytITviIAAAAIAYgvQIqwEI9ryIeqVpIhxCEQiRCsiiDGQoFJ8nqKkUgYdAhvgK9AbJg");
	this.shape_29.setTransform(864.6,2192.95,1,1,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#020202").s().p("AlVQjQi8gjiYhRQopklgpsjQgNkAApkZQAWiXAchmQAMgvAigjQAigjAugOQAvgOAvALQAwALAkAgQA7A1BmBEQC9B/DYBZQKkEXK6i4QAugMAuAMQAuALAjAhQAjAgAPAtQAPAtgIAvQgEAWgLAyQgUBRgbBXQhUEQh+DhQjIFnkcC8QkbC7lTAAQh3AAh5gXgAtqBHQBUGJEbCXQBnA2CDAZQEpA4DwiFQDviECxk+QBZieBCi+QoIBHn/iVQluhqlFjOQgtFtA6EVg");
	this.shape_30.setTransform(981.5605,870.7374,0.822,0.822,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0F227A").s().p("Am2GtQijgeiEhGIgMgHIAAgOIAAgsQAJiYBKiHQBKiHCChlQCChlCigwQCigxCuAKQCdAICRA4QCRA4ByBfIAPANIgKASQibEWjPCjQkLDSlNAAQhnAAhtgVgAiYlqQiaAuh6BfQh6BehFB/QhFB9gICOIgBAaQB5A9CSAbQGJBKE1jLQDuibCukwQhqhViFgyQiGgxiQgIIg0gCQiJAAiCAng");
	this.shape_31.setTransform(971.1065,909.506,0.822,0.822,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF5283").s().p("AmuGVQifgdiBhFIABgpQAIiWBLiEQBHiBB7hfQB8hgCbgvQChgyCsAKQCdAICPA4QCJA2BuBcQi2FGj6CiQjnCXkUAAQhmAAhsgVg");
	this.shape_32.setTransform(971.3873,909.4982,0.822,0.822,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#390075").s().p("AkzNtQifgeiAhEQncj8gWrgQgGjmAnj8IApjNIAoAiQA2AqA/AsQDMCLDrBjQLsE9MAjJIgNA7QgSBLgYBQQhPD/h2DSQi2FHj5CjQjnCWkVAAQhmAAhsgUg");
	this.shape_33.setTransform(981.536,870.7631,0.822,0.822,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#070607").s().p("AIhEuQhKhegsgzQh+iThng6Qg5ggg6gPQg8gPhKAAQhEgBheAOQhFAKhzAXIAGgEQgVAMgkALQghAIgaABQggACgegHQgigJgYgSQgugggRg7QgNgsACgyQAhAyAVATQAfAdAeADQAYACAdgQQAMgHANgLQARgOADgFIAGgEQChi0Dbg5QB/ghCAAVQBFANA8AYQBAAbA1AlQBnBIBHBsQA+BeAiByQAeBoADBwQABB9geBbIiAijg");
	this.shape_34.setTransform(1145.6916,663.7379,1,1,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#070607").s().p("ArQg4QBGhZBbg9QBmhFBygaQB0gcB/AUQB4ASBnA4QC5BhCKC1IAHAIIgEgDIAAACIAEAFQAGAJAFAEQAGAFAKAHIASALQArAVA+AAQAuACBXgQIBHgQIAlgKQAWgHAPgDIguBAQgRAUglAlQgXAWgpAdIgjAWQgVANgRAHQhdAqhcgEQg4gEgvgRQgZgJgbgPQgNgHgNgJIgNgKIgPgOIAFAFQihhzh1gzQiEg8iEAIQiBAJibBVQhFAlhSA5Qg8AphiBJQAVjECLiyg");
	this.shape_35.setTransform(759.45,750.8205,1,1,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#020202").s().p("EAJSAg6QtaovpXuyQkundjhoqQipmfhymuQoJMTv3HPQlECSlUBiQi1A0h9AWQgwAJgugQQgugQgggkQgggkgLgvQgKgvAOgvQEZuxGsvzQDWn7CilGQAfg/BBgaQBBgaBDAXMBy4AojQBCAXAiA8QAiA9gOBEMgGtAhNQgFAagMAYIktI7QgXArgpAbQgqAbgxACQiWAIibAAQ3BAAxhragA2G8mIAnDJQA3D6BSEJQEFNMGzKqQKhQlPXIDQPWICT5gpIDunFIGI+VMhUogd3gEg1ggYOQkmLMjbKrQJqi6HzlKQLpntEyrMQATgrAkgeI0ynVQi8GQjAHUg");
	this.shape_36.setTransform(775.0729,503.6602,1,1,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#994F2F").s().p("ANCf5QuNofp3vkQnCrHkKtkQhTkQg3j+IgmjIQjkIVnGGjQltFQnuD4QljCymCBzQh7AlhxAbQg/AOghAGQEZuxGovpQDUn1Cck4MBy4AojMgGtAhNIksI7QiZAIiUAAQ0uAAv/phg");
	this.shape_37.setTransform(775.075,503.6833,1,1,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#070707").s().p("Ege8BGvQo5iMn+kKQnUj0mFlMQlnkzkAlfQjylNhylBQj6rFBEvvQBEvuGA0HQEZuyGsv0QDWn6CilGQAfg/BBgbQBBgaBDAXMBy4AojQBCAYAiA8QAiA8gOBEIl/dtQE9AMEABQQFoBxC6DrQCQC2AdDvQAdDvhXEjIAAAAQjlL9pCFeQlhDWmQAYQqwJzrPGmQrPGlriDQQrDDHq6AAQpSAApAiPgEg50gzCQlMM6jlMCQlqS8hGPCQhGPDDjKCQBmEkDmEwQDuE5FQEWQFkEnGpDZQHLDrHzB8QRPEQRvkbQXWl0WJ0fQAcgaAjgNQAkgNAlADQBFADBigQQC5gdCrhUQIYkHDSq+QA8jJgMiYQgNiYhWhtQiPi1lchLQkIg6kWARIgKAAQgrADgogRQgogQgdghQgcghgLgqQgLgpAIgrIGN+vMhuDgm2QjYHLjVIQg");
	this.shape_38.setTransform(752.3661,687.1102,1,1,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF8288").s().p("AgwDcQipglhphbQhphbAUhaQAUhcCGgmQCGgmCoAmQCpAlBpBbQBpBbgUBaQgUBbiGAnQhEAThNAAQhLAAhSgTg");
	this.shape_39.setTransform(1213.975,728.55,1,1,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF8288").s().p("AhBEtQjngziPh8QiQh8Abh8QAch9C3g0QC2g0DmAzQDmAzCQB8QCPB8gbB8QgcB9i2A0QhcAahpAAQhmAAhxgZg");
	this.shape_40.setTransform(697.7244,860.775,1,1,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#390075").s().p("EgeWBEWQoOiDnjj5QnAjml5k7Qljkoj7lPQj0lFhuk4Qhvk7gsl6QhMp6BssoQBrsnEgvHQClonDPouIACgEQDfpXEEpHIDanWIAKgTMBziAoxMgGsAhDQESgMEGAzQHGBXDID8QDvEtiYH5QhPELh/DWQkWHXnjC7QkBBlj3ABQxLP3yDHVQvEGIvNAAQpGAAoyiLgEg4Pg9OQjuIcjNImIgBAFQjTI1iiIgQkePChrMhQhrMkBKJ1QAtF3BsEzQBsEzDxFBQD4FJFeEkQF1E2G6DkQHdD1IICBQRyEaSQkiQYCl7Wt1BIAIgHIAKAAICEgHQCggSCcg3QHyivEcngQB7jPBOkHQCQnfjfkZQjIj8nWhOQkBgrjxAQIgMAAIgfAAMAGvghVMhyPgoVQhtDgiIE0g");
	this.shape_41.setTransform(752.3436,686.9,1,1,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFB78A").s().p("EgdlBEFQoUh+nnj2QnDjjl8k5Qllkmj+lRQj2lGhwk+Qhtk1gtl7QhRqtCGt8QBwrvEGtuQCioeDTo5IAAAAQDhpdEEpGIDXnOMBy4AojMgGtAhNIALAAQCNgJCpANQEoAYDdBWQErB2B6DfQCXESh+GlQhQEJh8DSQkkHun+CwQifA3iiARIiCAGQ1PTq2vGiQq4DIqrAAQoiAAoaiAg");
	this.shape_42.setTransform(752.3601,687.1627,1,1,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#050505").s().p("AqBQRQknh9jljkQjkjlh9koQiCkwAAlQIAAn7QAAhOA2g2QA2g3BNAAMAtuAAAQBNAAA3A3QA2A2AABOIAAH7QAAFQiCEwQh9EojkDlQjlDkkoB9QkyCDlPAAQlOAAkziDgAz9ndQAAEEBlDsQBhDlCxCyQCxCxDlBgQDtBlEDAAQEDAADuhlQDlhgCxixQCxiyBhjlQBkjsAAkEIAAlBMgn6AAAg");
	this.shape_43.setTransform(784.775,1144.25,1,1,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#390075").s().p("AtcLgQmDkSidm/QhTjrAAkBIAAoVMAufAAAIAAIVQAACVgbCLQgzEAiHDgQiEDajGCiQjFCjjvBXQj2BakHAAQnYAAmEkTgA2dndQAAD4BQDlQCYGuF2EKQF3EJHIAAQD+AADuhXQDnhUC/idQC+idCAjSQCDjZAwj3QAbiIAAiPIAAnjMgs7AAAg");
	this.shape_44.setTransform(784.775,1144.275,1,1,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFB78A").s().p("AtWLGQl2kNiYmyQhSjnAAj9IAAn8MAttAAAIAAH8QAACSgbCJQgxD5iDDbQiADWjBCgQjCChjrBXQj0BakGAAQnYAAl+kUg");
	this.shape_45.setTransform(784.775,1144.275,1,1,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#050505").s().p("AgpG6Qg9gogOhHQgPhHAog8IgFAFIgBABIgCAAIgCgDIgCgIIgBgXIgBg6IgHhIQgGgtgLgmQgDgQgJgcIgOgvQgHgPgLgfQgLghgHgQIgphjQgZg2gTg0IAAgBQgEgLAEgKQAFgKALgEQAJgDAJADQAzASA6AdQAWALAeASIAzAgQAzAmAqAnIAsAsQAbAbAPAWQBdByAcCFQAQBPgMBPQgEAjgRAwQgHASgMAYIgiA0QgoA9hHAOQgTAEgSAAQgyAAgrgdg");
	this.shape_46.setTransform(110.7287,1607.4929,1,1,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#020202").s().p("AibGQQg7gJg9gYQhHgag0grQhDg1gfg/QgSgogJgZQgMgkgDgjQgFgdAEgrQACgYADgLIAKghQAHgWAEgKIAPgdIAhgzQBBhQBig1QBYgwBbgVQALgDAKAGQAKAGACALQADAPgJAKIgCACQiUCfgaBpQgPA0AaAhQADAFAIAHIAOANQAFADAHACIANADQAbAHA+gFQA+gEBFgNICUgeQBygZAlgGIAUgCQBMgLA+AuQA+AtALBNQAJA6gbA1QgaAzgyAcQhTAuhmAeQhdAdhoALQgxAEgsAAQhDAAg6gKg");
	this.shape_47.setTransform(1389.898,1616.8953,1,1,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#020202").s().p("ABFLrQgygOghgnQggglgegsQgggygSggQglhBgqhsQg8ijgTjPQgTi4AhjCQAbiqBfi0QAFgJALgDQAKgDAJAFQAMAGACAPIAAACIANCtQAIBfAQBGQAfCjA2CVQAYBBAjBSIBBCQIBiDWQAaA7ACAIIALAgQAWBEgiBBQghBAhEAWQgbAIgaAAQgZAAgYgHg");
	this.shape_48.setTransform(996.3111,1367.0259,1,1,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#050505").s().p("AEmEDQhdgNh7g4QhNgkh4hNQhmhChZhCQhzhbhChCQgIgIAAgMQAAgLAIgIQAHgHALgBQA4gCBCADQAuACBIAHQBqALB8AWQCLAaBSAbQB+AqBPA3QA9ArANBJQANBJgrA9QgeAqgvAUQgiAPgkAAQgNAAgNgCg");
	this.shape_49.setTransform(545.3741,1376.9654,1,1,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#020202").s().p("EgQ+AtdQonh3nhjuQiZhMiBhQQhDgpgpgeQglgbgTgqQgTgqAEguICX52IiXBNQgpAVgtgCQgugBgngYQgmgXgXgoQgWgngBguQgGqzmjpAQiDi1ieiUQgygugugmIgngeQghgYgUgkQgUglgBgpQgBgqASglQARgmAhgaQRzuCN/lBQF1iGF6g1QEcgoF9gCQCKgBDVgGQGrgKDHAPQE7AYFEBlQFsByH5D3QIID+McHKIBtA/QApAYAXApQAYApAAAvQgBAvgXAoQgYApgpAXQkgCkiqInQg/DMgmDpQgfC7gICUQgCAtgZAnQgYAngpAWQgoAWgugBQgtgBgogXIiIhPMgBtAgiQgCAugZAnQgZAngpAWQqpFqq4CpQpUCQpQAAQn9AAnihpgEginAAmQAwADAoAbQAoAbAUArQAVArgFAwIiqdKQDEB5D4BrQF3ChGWBWQMXCpMnh9QMnh8MqmfMAB3gjdQACguAZgmQAYgnApgWQAogWAuABQAuABAnAXICVBYQAzlnBmksQCQmmDjjuQrXmfndjnQnOjhlOhnQkohckhgVQi1gOmEAJQjbAGiLABQlTACj+AjQlRAtlMBzQsdEUvuMAQEOD8DAFBQEWHRA+ITIDEhlQAmgTAqAAIAKAAg");
	this.shape_50.setTransform(760.7777,1405.163,1,1,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B87BFF").s().p("EgQZAqxQoUhznQjnQiShIh5hLIhcg8ICz+0ImxDfQgFnsjIm8QiWlNj3kZQiaiviZh0IgPgLIABgBQRctwNqk4QFoiBFsgyQELgkFqgDQB8gBESgGQDfgGB4ACQFlAGE2BPQF0BfIGD2QIeEBNnH1IBuBAQi6BpiNDgQiDDShbExQhKD9gnEkQgUCSgFBeIl/jgMgB8AlCQu7H7vHB0QkYAhkUAAQnmAAnahng");
	this.shape_51.setTransform(760.8,1405.2178,1,1,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#020202").s().p("EgN1AtnQooh3nijvQiahMiBhPQhDgqgpgeQgogdgUgsQgUgtAFgxICU5jMguzAX/Qj0D2kWC1QncE1luguQiTgSh9hNQijhmhujDQiWkMAij6QAhjqDHj9QCtjbFakgQDVizITmSQHmlwEVjbQHbl3GalkQE9kUEwjwQR1uEOBlCQF2iGF7g0QEcgoF+gDQBpgBD2gFQGsgLDHAPQE8AYFEBlQFtByH6D4QIID/MdHKIBuA/QMHHEJ+HlQJzHcG+HXQG+HXDlGsQDqG0gMFiQgHDfhtCsQhtCrjFBiQnwD2oJnhQkwkYjsmzMglegV+MgBsAgRQgDAxgaApQgbApgrAXQqqFrq6CpQpUCRpTAAQn6AAnnhqgA/aAcQAzADAqAcQAqAcAWAuQAWAugFAzIipdEQDFB5D2BpQF0CfGSBVQMTCnMjh7QMkh8MmmcMAB3gjXQADgwAagpQAagpAqgXQArgXAxAAQAxABAqAZMAqTAYzQAvAbAZAyIBjCrQB6DFCBCWQGbHdFFiiQBpg0A1hVQA2hVAEh5QAIj8i6laQjDlul/mdQtxu54auNIhrg/Qr8m3nwj0QnijulXhsQkyhhklgYQi4gOmKAJQj5AGhtABQlgACkHAmQlfAylcB+QtEEww3NTQkmDok5ERQmgFpngF7QkWDbntF2QnfFrjYCxQkrD1iTCpQiiC7ghCaQgiCeBaCiQA+BvBQAzQA4AjBGAIQDsAeFxj1QEFitDNjVQAVgWAcgPMAz7gamQAogVAtAAIALABg");
	this.shape_52.setTransform(781.1956,1405.1838,1,1,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#390075").s().p("EgNVArKQoShznUjnQiThJh7hMIhhg/IgLgIICw+UMgzPAaQQizC6jpCoQmyE4lEAAQgnAAglgEQkNgiickWQgbgwgSgsQgQglgLgoQg4jCBKjDQBFi2DCjSQCoi3Eyj4QC+ibHPlfQHiltEdjgQHcl4GdlnQFGkaEhjlIAfgYQRNtgNfk0QFniBFtgzQERgmFugCQBwgBDzgFQFRgJCdAHQD9ALDpA1QIQB3NmHFQGuDhIyFDIBuBAQYbOON2OtQF7GTDaF2QDJFXAsEZQAbCsgiCPQgiCPhcBnQgRATgQAPQhCA+hZAsQm4Dbnin8QieimiRjjQhSiAg5hvMgpqgYbMgB7AknIgNAGQqXFhqlCkQpECNpAAAQnrAAnThmgEgiBAh8QCyB5EKB5QHdDaIUBkQLUCJLnhkQOXh7OHndMAB+glcMAq+AZLIADAHIBwDBQCKDeCXCoQDSDoDMBcQD/BxDnhyQBTgqA8g5QARgQAMgOIABAAQCsjBgzlHQgqkJjGlQQjZlxl3mQQt6uz4KuEIhtg/QoqlAm0jjQnOjxlOiJQk/iCkFg8Qjlg0j7gLQicgHlWAIQjZAGiKABQlrACkOAmQlpAzlkB/QtXEyxENZIgfAZQkrDsk6ERQmcFmnfF6QkRDXnvF3QnGFZi7CXQkuD0ilCxQi/DMhGCvQhKC6A1C2QAKAiAPAmQATAtAXAqQCQD/D0AfQFDApHYlSQCUhrCRiEIB3hyIAHgFMA0jga7g");
	this.shape_53.setTransform(780.9413,1405.1669,1,1,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFB78A").s().p("EgNQAqxQoUhznRjnQiRhIh5hLIhcg8ICz+0Mgz7AanIgzAzQhBA+hIA/QjoDIjaB6QkyCsjqgJQkkgKilklQgagtgSgsQgQgpgKghQhOkPDAkfQCkj2G+lrQCpiKEkjfQFikMDFiXQLwo/I5nuQE5kQEtjvIAfgYQROthNkkzQFlh/FpgxQEIgkFogDQD1gBGGgKQE5gCDrAnQEkAxFZCEQFzCPISEUQGjDaI8FJIBuBAQPSI6LfJdQKiIqGWITQF8HxBbGSQBZGHjJDhQgUAWgLAJQhAA+hWApQjxB4kHh0QjThdjXjvQiaiqiMjiIhujBMgkUgVSIAAgBIl/jgMgB9AlCQu7H7vGB0QkYAhkVAAQnlAAnahng");
	this.shape_54.setTransform(780.8863,1405.2167,1,1,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("EgEVBwTQ9ph6zpoIQzpoGpQuKQqzwfDM4bQBLpGDNqwQB3mOD2qoQBgkIAlhsQA/i5AchvUADigNyAC1gtIQBa2oAv0YQAChKA1g0QA0g0BKgBIABAAUABxAAABCHANfQh5gBjwAAQgXAAgOAPQgMAOAAAUQAAAVAMAOQAOAPAXAAQGCAAC9AJQFBAND8AsQCoAdBzAeQCcAoB2A1QBCAeCPBeQCCBVBRAfQBtApCFAnQhbADiQgDIjrgFQgYABgOAQQgMAPACAWUhJ1gPJgOegCvQg+ZWhlW0UgCrAmsgDVAM/QgfB7hCDBQgpB4hhEKQjpKFhxF4QjEKKhLIiQjLW6JwO5QIeM8SgHdQShHecNB0QbNBwTEleQTElfKjsnQN1wigw84QgRqOiIrtQhMmjiXpjQg8jygShYQh7pmBF8gQAow2BcyzMgu7gJpQDSAcE3A7IIIBhQAXAEARgNQAQgMAFgTQAFgUgIgPQgJgSgWgDQhrgUkHgyQjrgtiGgWQAvgIAfgHQAkgIAAgoQAAgogkgJQkLg7jChHQhBgYhPgvIiIhWMA30ALeQBFAOArA4QAqA4gGBHQhNO+gxQnUgBjAhIACBAJ/QAMA+A+D9QCeJ/BPG5QCNMVAOKzQAmeivDR/QqIMIw/GGQw/GH3lAAQmPAAmzgcg");
	this.shape_55.setTransform(725.294,923.25,1,1,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#390075").s().p("EgEVBwTQ9ph6zpoIQzpoGpQuKQqzwfDM4bQBLpGDNqwQB3mOD2qoQBgkIAlhsQA/i5AchvUADigNyAC1gtIQBa2oAv0YQAChKA1g0QA0g0BKgBIABAAUABxAAABCHANfQh5gBjwAAQgXAAgOAPQgMAOAAAUQAAAVAMAOQAOAPAXAAQGCAAC9AJQFBAND8AsQCoAdBzAeQCcAoB2A1QBCAeCPBeQCCBVBRAfQBtApCFAnQhbADiQgDIjrgFQgYABgOAQQgMAPACAWUhJ1gPJgOegCvQg+ZWhlW0UgCrAmsgDVAM/QgfB7hCDBQgpB4hhEKQjpKFhxF4QjEKKhLIiQjLW6JwO5QIeM8SgHdQShHecNB0QbNBwTEleQTElfKjsnQN1wigw84QgRqOiIrtQhMmjiXpjQg8jygShYQh7pmBF8gQAow2BcyzMgu7gJpQDSAcE3A7IIIBhQAXAEARgNQAQgMAFgTQAFgUgIgPQgJgSgWgDQhrgUkHgyQjrgtiGgWQAvgIAfgHQAkgIAAgoQAAgogkgJQkLg7jChHQhBgYhPgvIiIhWMA30ALeQBFAOArA4QAqA4gGBHQhNO+gxQnUgBjAhIACBAJ/QAMA+A+D9QCeJ/BPG5QCNMVAOKzQAmeivDR/QqIMIw/GGQw/GH3lAAQmPAAmzgcg");
	this.shape_56.setTransform(725.294,923.25,1,1,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#994F2F").s().p("EgEMBtaUg76gD4gRFgczQmwragCvXQgBsAELvAQB+nHD0qjICinEQBOjgAhiDUADogOHAC2gtnQBb20Atz/UABkgACBdeATKIAWAJQBtAqCFAmQhbAEiQgEIjrgEQgXAAgNAPQgMANAAAUQAAAxAwADQEmASGUBHQDnApHNBYQAXAEARgNQAQgLAFgUQAFgTgIgQQgJgRgWgEQhrgTkHgyQjrgtiGgXQAvgHAfgIQAcgFAHgeMArHAI3QhNOvgxQ0UgBkAhnACEAKWQAbCFB+H4QCDIoBJHUQDmXAj3RQQlRXhy4MHUgTgAMighigABQmQAAmvgbg");
	this.shape_57.setTransform(725.0734,923.2458,1,1,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#390075").s().p("EgELBtzQ9Ch4zJn1QzKn1o6toQqWvzDL3xQBMo2DJqgQB0mEDwqZQBekBAqh5QBAi8Aeh1UADkgN8AC2gtWQBb2uAv0cIABgYIAYAAUABSAAAA8WAMSQANAPAWAAIAkAAIe9GVQA6AhAzATQA2AVBbAeUha5gSogGZgBAQg1WlhfW0UgCzArOgDeANlQgfB2hAC8QgrB+hdD/QjvKUhzGBQjIKbhLIyQjLXjKNPmQIzNdTAHwQTAHuc1B4Qb1BzTmltQTmltK9tHQOWxKgr9mQgQqeiKr+QhNmtiapwQg7jrgShXQh/p8BY/yQAvw2BUwtMgq5gI0QASgTgGgdUAlLAHoAGBABQIAWAEIgCAWQhNPEgxQvUgBjAhZACDAKNQAOBDA+D9QCcJzBNGxQCLMEAPKjQAqdzuhRXQpwLrwgF4QwfF42/AAQmSAAmngbg");
	this.shape_58.setTransform(725.2426,923.225,1,1,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A1523F").s().p("EgEMBtaUhOfgFFgE9gv0QhovsGg1gQBxl3DepnQDEocAtiuUADngOHAC2gtoQBb2zAtz/UABggACBdjATKIAWAJQBtAqCEAmQhbAEiPgEIjrgEQgXAAgOAPQgMANAAAUQABAxAwADQElASGUBHQDoApHNBYQAWAEARgNQAQgLAFgUQAGgTgIgQQgJgRgXgEQhqgTkHgyQjrgtiHgXQAvgHAggIQAbgFAHgeMArHAI3QhMOvgyQ0UgBkAhnACFAKWQAaCEB/H5QCCInBKHVQDlXAj3RPQlRXiy3MHUgTgAMighigABQmQAAmvgbg");
	this.shape_59.setTransform(725.0392,923.2458,1,1,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#020202").s().p("EARWA1OQjKheiMisQtOwSrbxWQxt62od2WQgZhDAZhCQAahCA/ghMAhQgQ9QAlgTApgBQAqgCAmAQQAmARAbAeQAcAfAMAoICrIQQDbKGEBKUUAMzAgzAN5AWoQBwC2AaDUQAZDUhBDLQhBDLiQCdQiQCcjEBTQizBLjDAAQjaAAjHhdgEggcghZQIfVWQ7ZdQK/QjMkPdQB9CaDEAxQDDAxC4hNQB5gzBZhhQBZhgAoh+QAoh9gQiDQgPiDhGhxQsX0Jro8UQnExQlUwcg");
	this.shape_60.setTransform(702.5615,2120.6436,1,1,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#390075").s().p("EASZAzBQikhOh1iQQtIwKrVxNQxl6poY2HIgIgVMAh/gRWIAJAdIBUEJQBrFKCBFrQGaSCHTQTIBiDZQISSEIjN7QBKB6AdCHQAeCIgTCMQgQB2gwBtQgxBshOBaQh6COixBLQiWBAilAAQi5AAilhPgEgjjgihQIYV/ReadQLTRINBQBQBtCGCbBKQCbBKCtAAQCaAACNg8QCnhGByiFQBJhVAuhmQAuhlAOhwQASiDgch/Qgbh/hGhyQomuCoRyDIhjjZQm3vVmHw8QjbpiiNnKg");
	this.shape_61.setTransform(702.8528,2120.125,1,1,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFB78A").s().p("EASkAynQiihNhyiMQtbwhrYxVQxP6NoU1+MAhQgQ9IBRD/QBqFICAFrQGbSEHYQfQArBjA4B3QIQSBImOBQBJB3AcCHQAbCCgRCEQgPBygvBpQgwBqhLBXQh2CKitBIQiSA/ieAAQiwgBighKg");
	this.shape_62.setTransform(702.5428,2120.7,1,1,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#390075").s().p("AqjY8QjkgUi5heQi5heiAigQkYlgBEnVQBapqKzsCQESkyFkihQFjiiF1ALQEQAIDmBoQDlBpCTC3QCnDRAqEaQApERhQEyQhRExi+EmQjEEwkgD7Qk6ESlpCYQlnCWlRAAQhEAAg3gFgAhHxJQkTCDjSDqQmvHginGMQjcIKEHFKQBbBxCNA8QBsAtCBAMQEcAZFDh/QFCiAEfj7QDhjDChjxQCcjoBLjuQBLjvgSjOQgSjXh1iSQhfh3ichEQidhEi+gGIghAAQkYAAkRCDg");
	this.shape_63.setTransform(540.4976,2487.14,1,1,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B87BFF").s().p("At2VUQjkhMiNixQiwjcgHkcQgHkVCZlJQAkhNAmhEQC6lSFSl3QDhj6EgiRQEMiGEcgYQESgXDqBVQDtBWCPCzQA+BOApBdQBMCsABDVQABFcjCF1QjHGBleEyQkADfkgCIQkWCDkOAfQhRAJhMAAQizAAibgzg");
	this.shape_64.setTransform(540.5402,2487.1515,1,1,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("EgRUApCQt/jEtmobQk7jElAj2Qi3iMkPjlIhehPQh/hpgcijQgciiBViFMAaOgwGQAYgtAsgaQAsgaAzAAMBKWAAAQA0AAAsAbQAsAbAYAuMAYSAuYQBRCbgkCzQglCyiKB3Qv+N2wIG9QwIG9wCAAQoHAAn+hwgEg8AAJ+QgKAOAGAXQAGAYAUAQIBfBRQEFDbCtCGQEvDpEpC4QMwH7NHC3QQ9DuRPkzQUplvUjxzQAogiAMg0QANgzgVgpMgXegs0MhG3AAAg");
	this.shape_65.setTransform(768.4074,1878.825,1,1,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#AAAABA").s().p("EgUTAlUQtHjksxoeQkci9kpjuImRlNQhKg+gRheQgQheAyhLMAaRgwMMBKWAAAMAYRAuYQAzBigYBzQgZBzhYBMQhxBjiXB6Q1LRI1QEtQn+Bxn6AAQpjAApdikg");
	this.shape_66.setTransform(768.4307,1878.8341,1,1,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#994F2F").s().p("EgcJBfIQw8hbs4laQpMj3mQlfQh8huhbhqIhChVQFgj0BQopQAZitgFi4IgKiUQiHkfiGlvQkOrfAAmTQAAk7hyzGQhyzEAAljQgEjAAAh3QgBjbAPi2QAroTC/nUQIo1IcVvCQPMoENahkQKuhQJGC9QGgCGFDEAQCiCABOBkQLjjlJ3DbQIyDEHQIlQGWHgE+LdQEPJxDBMCQCjKLAnJFQAhHtg3HpQgmFbhpHlQiMKNgWB/Qh0KQEYMuQBXD+B1DwQA6B3ApBFQgoBVhyCIQjkEQlwEDQoEFprSEaQuHFgyZDOQzFDWwWAAQmRAAl2gggEAT0gpVQgMAOAAAUQABAwAwADQElASGUBHQDoApHNBZQAWAEARgNQAQgMAFgTQAGgUgIgPQgJgSgXgEQhqgTkHgyQjrgtiHgXQAvgHAggHQAkgIAAgoQgBgogjgJQkLg8jDhHQhTgeh+hRQiThfg5gcQh2g5ibgrQh1ghingfQkDgxkzgRQiRgIi2gCQhugCjbAAQgXAAgNAQQgMAOAAAUQAAAVAMAOQANAPAXAAQGEAAC9AIQE/AOD9AsQCnAdB0AeQCbAoB2A1QBDAeCOBdQCDBWBRAfQBtApCEAnQhbADiPgDIjrgFQgXAAgOAPg");
	this.shape_67.setTransform(684.9008,617.2711,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:540.5402,y:2487.1515}},{t:this.shape_63,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:540.4976,y:2487.14}},{t:this.shape_62,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:702.5428,y:2120.7}},{t:this.shape_61,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:702.8528,y:2120.125}},{t:this.shape_60,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:702.5615,y:2120.6436}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{scaleX:0.822,scaleY:0.822,x:981.536,y:870.7631}},{t:this.shape_32,p:{scaleX:0.822,scaleY:0.822,x:971.3873,y:909.4982}},{t:this.shape_31,p:{scaleX:0.822,scaleY:0.822,x:971.1065,y:909.506}},{t:this.shape_30,p:{scaleX:0.822,scaleY:0.822,x:981.5605,y:870.7374}},{t:this.shape_29,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:864.6,y:2192.95}},{t:this.shape_28,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:864.15,y:2193.25}},{t:this.shape_27,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:864.6015,y:2192.9048}},{t:this.shape_26,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:1122.1538,y:2502.1089}},{t:this.shape_25,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:1140.95,y:2553.5002}},{t:this.instance_2,p:{regX:149.1,regY:85.7,scaleX:1,scaleY:1,skewX:0,skewY:180,x:1130.3,y:2526}},{t:this.shape_24,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:1122.1854,y:2502.0979}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:540.5402,y:2487.1515}},{t:this.shape_63,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:540.4976,y:2487.14}},{t:this.shape_62,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:702.5428,y:2120.7}},{t:this.shape_61,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:702.8528,y:2120.125}},{t:this.shape_60,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:702.5615,y:2120.6436}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{scaleX:1,scaleY:1,x:981.4214,y:870.8893}},{t:this.shape_32,p:{scaleX:1,scaleY:1,x:969.075,y:918.0128}},{t:this.shape_31,p:{scaleX:1,scaleY:1,x:968.7333,y:918.0222}},{t:this.shape_30,p:{scaleX:1,scaleY:1,x:981.4513,y:870.858}},{t:this.shape_29,p:{scaleX:0.9998,scaleY:0.9998,skewX:6.6946,skewY:-173.3054,x:869.1716,y:2182.6843}},{t:this.shape_28,p:{scaleX:0.9998,scaleY:0.9998,skewX:6.6946,skewY:-173.3054,x:868.6898,y:2182.9297}},{t:this.shape_27,p:{scaleX:0.9999,scaleY:0.9999,skewX:6.6947,skewY:-173.3053,x:869.0663,y:2182.8974}},{t:this.shape_26,p:{scaleX:0.9999,scaleY:0.9999,skewX:6.6947,skewY:-173.3053,x:1088.7852,y:2519.9708}},{t:this.shape_25,p:{scaleX:0.9999,scaleY:0.9999,skewX:6.6947,skewY:-173.3053,x:1101.4603,y:2573.1955}},{t:this.instance_2,p:{regX:149,regY:86.1,scaleX:0.9999,scaleY:0.9999,skewX:6.6944,skewY:-173.3056,x:1094.05,y:2545.2}},{t:this.shape_24,p:{scaleX:0.9999,scaleY:0.9999,skewX:6.6947,skewY:-173.3053,x:1088.8179,y:2519.9636}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},3).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{scaleX:0.9999,scaleY:0.9999,skewX:-6.2437,skewY:173.7563,x:571.5804,y:2498.9159}},{t:this.shape_63,p:{scaleX:0.9999,scaleY:0.9999,skewX:-6.2437,skewY:173.7563,x:571.5367,y:2498.9092}},{t:this.shape_62,p:{scaleX:0.9998,scaleY:0.9998,skewX:-6.2432,skewY:173.7568,x:692.7744,y:2116.9082}},{t:this.shape_61,p:{scaleX:0.9998,scaleY:0.9998,skewX:-6.2432,skewY:173.7568,x:693.02,y:2116.303}},{t:this.shape_60,p:{scaleX:0.9999,scaleY:0.9999,skewX:-6.2437,skewY:173.7563,x:692.7701,y:2116.9918}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{scaleX:1,scaleY:1,x:981.4214,y:870.8893}},{t:this.shape_32,p:{scaleX:1,scaleY:1,x:969.075,y:918.0128}},{t:this.shape_31,p:{scaleX:1,scaleY:1,x:968.7333,y:918.0222}},{t:this.shape_30,p:{scaleX:1,scaleY:1,x:981.4513,y:870.858}},{t:this.shape_29,p:{scaleX:0.9998,scaleY:0.9998,skewX:6.6946,skewY:-173.3054,x:869.1716,y:2182.6843}},{t:this.shape_28,p:{scaleX:0.9998,scaleY:0.9998,skewX:6.6946,skewY:-173.3054,x:868.6898,y:2182.9297}},{t:this.shape_27,p:{scaleX:0.9999,scaleY:0.9999,skewX:6.6947,skewY:-173.3053,x:869.0663,y:2182.8974}},{t:this.shape_26,p:{scaleX:0.9999,scaleY:0.9999,skewX:6.6947,skewY:-173.3053,x:1088.7852,y:2519.9708}},{t:this.shape_25,p:{scaleX:0.9999,scaleY:0.9999,skewX:6.6947,skewY:-173.3053,x:1101.4603,y:2573.1955}},{t:this.instance_2,p:{regX:149,regY:86.1,scaleX:0.9999,scaleY:0.9999,skewX:6.6944,skewY:-173.3056,x:1094.05,y:2545.2}},{t:this.shape_24,p:{scaleX:0.9999,scaleY:0.9999,skewX:6.6947,skewY:-173.3053,x:1088.8179,y:2519.9636}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},2).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{scaleX:0.9999,scaleY:0.9999,skewX:-10.981,skewY:169.019,x:595.9191,y:2506.8931}},{t:this.shape_63,p:{scaleX:0.9999,scaleY:0.9999,skewX:-10.981,skewY:169.019,x:595.875,y:2506.8901}},{t:this.shape_62,p:{scaleX:0.9998,scaleY:0.9998,skewX:-10.9815,skewY:169.0185,x:685.207,y:2116.0701}},{t:this.shape_61,p:{scaleX:0.9998,scaleY:0.9998,skewX:-10.9815,skewY:169.0185,x:685.4018,y:2115.4468}},{t:this.shape_60,p:{scaleX:0.9999,scaleY:0.9999,skewX:-10.981,skewY:169.019,x:685.1487,y:2116.2824}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{scaleX:1,scaleY:1,x:981.4214,y:870.8893}},{t:this.shape_32,p:{scaleX:1,scaleY:1,x:969.075,y:918.0128}},{t:this.shape_31,p:{scaleX:1,scaleY:1,x:968.7333,y:918.0222}},{t:this.shape_30,p:{scaleX:1,scaleY:1,x:981.4513,y:870.858}},{t:this.shape_29,p:{scaleX:0.9998,scaleY:0.9998,skewX:11.1384,skewY:-168.8616,x:872.5485,y:2178.4064}},{t:this.shape_28,p:{scaleX:0.9998,scaleY:0.9998,skewX:11.1384,skewY:-168.8616,x:872.0492,y:2178.6138}},{t:this.shape_27,p:{scaleX:0.9999,scaleY:0.9999,skewX:11.1381,skewY:-168.8619,x:872.4566,y:2178.5868}},{t:this.shape_26,p:{scaleX:0.9999,scaleY:0.9999,skewX:11.1381,skewY:-168.8619,x:1065.3986,y:2531.6667}},{t:this.shape_25,p:{scaleX:0.9999,scaleY:0.9999,skewX:11.1381,skewY:-168.8619,x:1073.912,y:2585.7129}},{t:this.instance_2,p:{regX:149,regY:86.2,scaleX:0.9999,scaleY:0.9999,skewX:11.1385,skewY:-168.8615,x:1068.65,y:2557.05}},{t:this.shape_24,p:{scaleX:0.9999,scaleY:0.9999,skewX:11.1381,skewY:-168.8619,x:1065.4317,y:2531.662}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},2).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{scaleX:0.9999,scaleY:0.9999,skewX:-10.981,skewY:169.019,x:595.9191,y:2506.8931}},{t:this.shape_63,p:{scaleX:0.9999,scaleY:0.9999,skewX:-10.981,skewY:169.019,x:595.875,y:2506.8901}},{t:this.shape_62,p:{scaleX:0.9998,scaleY:0.9998,skewX:-10.9815,skewY:169.0185,x:685.207,y:2116.0701}},{t:this.shape_61,p:{scaleX:0.9998,scaleY:0.9998,skewX:-10.9815,skewY:169.0185,x:685.4018,y:2115.4468}},{t:this.shape_60,p:{scaleX:0.9999,scaleY:0.9999,skewX:-10.981,skewY:169.019,x:685.1487,y:2116.2824}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{scaleX:0.7591,scaleY:0.7591,x:981.5148,y:870.7636}},{t:this.shape_32,p:{scaleX:0.7591,scaleY:0.7591,x:972.1423,y:906.5362}},{t:this.shape_31,p:{scaleX:0.7591,scaleY:0.7591,x:971.883,y:906.5434}},{t:this.shape_30,p:{scaleX:0.7591,scaleY:0.7591,x:981.5375,y:870.7399}},{t:this.shape_29,p:{scaleX:0.9998,scaleY:0.9998,skewX:11.1384,skewY:-168.8616,x:872.5485,y:2178.4064}},{t:this.shape_28,p:{scaleX:0.9998,scaleY:0.9998,skewX:11.1384,skewY:-168.8616,x:872.0492,y:2178.6138}},{t:this.shape_27,p:{scaleX:0.9999,scaleY:0.9999,skewX:11.1381,skewY:-168.8619,x:872.4566,y:2178.5868}},{t:this.shape_26,p:{scaleX:0.9999,scaleY:0.9999,skewX:11.1381,skewY:-168.8619,x:1065.3986,y:2531.6667}},{t:this.shape_25,p:{scaleX:0.9999,scaleY:0.9999,skewX:11.1381,skewY:-168.8619,x:1073.912,y:2585.7129}},{t:this.instance_2,p:{regX:149,regY:86.2,scaleX:0.9999,scaleY:0.9999,skewX:11.1385,skewY:-168.8615,x:1068.65,y:2557.05}},{t:this.shape_24,p:{scaleX:0.9999,scaleY:0.9999,skewX:11.1381,skewY:-168.8619,x:1065.4317,y:2531.662}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},3).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{scaleX:0.9999,scaleY:0.9999,skewX:-18.4573,skewY:161.5427,x:633.6311,y:2512.3466}},{t:this.shape_63,p:{scaleX:0.9999,scaleY:0.9999,skewX:-18.4573,skewY:161.5427,x:633.587,y:2512.3493}},{t:this.shape_62,p:{scaleX:0.9998,scaleY:0.9998,skewX:-18.456,skewY:161.544,x:671.2295,y:2113.3396}},{t:this.shape_61,p:{scaleX:0.9998,scaleY:0.9998,skewX:-18.456,skewY:161.544,x:671.3415,y:2112.6961}},{t:this.shape_60,p:{scaleX:0.9999,scaleY:0.9999,skewX:-18.4573,skewY:161.5427,x:671.2773,y:2113.4464}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{scaleX:1,scaleY:1,x:981.4214,y:870.8893}},{t:this.shape_32,p:{scaleX:1,scaleY:1,x:969.075,y:918.0128}},{t:this.shape_31,p:{scaleX:1,scaleY:1,x:968.7333,y:918.0222}},{t:this.shape_30,p:{scaleX:1,scaleY:1,x:981.4513,y:870.858}},{t:this.shape_29,p:{scaleX:0.9996,scaleY:0.9996,skewX:17.1103,skewY:-162.8897,x:878.0064,y:2175.0694}},{t:this.shape_28,p:{scaleX:0.9996,scaleY:0.9996,skewX:17.1103,skewY:-162.8897,x:877.4882,y:2175.2237}},{t:this.shape_27,p:{scaleX:0.9998,scaleY:0.9998,skewX:17.1111,skewY:-162.8889,x:877.7891,y:2175.322}},{t:this.shape_26,p:{scaleX:0.9998,scaleY:0.9998,skewX:17.1111,skewY:-162.8889,x:1032.9305,y:2546.5342}},{t:this.shape_25,p:{scaleX:0.9998,scaleY:0.9998,skewX:17.1111,skewY:-162.8889,x:1035.7735,y:2601.1687}},{t:this.instance_2,p:{regX:149,regY:86,scaleX:0.9999,scaleY:0.9999,skewX:17.1123,skewY:-162.8877,x:1033.6,y:2572.2}},{t:this.shape_24,p:{scaleX:0.9998,scaleY:0.9998,skewX:17.1111,skewY:-162.8889,x:1032.9639,y:2546.533}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},3).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{scaleX:0.9999,scaleY:0.9999,skewX:-18.4573,skewY:161.5427,x:633.6311,y:2512.3466}},{t:this.shape_63,p:{scaleX:0.9999,scaleY:0.9999,skewX:-18.4573,skewY:161.5427,x:633.587,y:2512.3493}},{t:this.shape_62,p:{scaleX:0.9998,scaleY:0.9998,skewX:-18.456,skewY:161.544,x:671.2295,y:2113.3396}},{t:this.shape_61,p:{scaleX:0.9998,scaleY:0.9998,skewX:-18.456,skewY:161.544,x:671.3415,y:2112.6961}},{t:this.shape_60,p:{scaleX:0.9999,scaleY:0.9999,skewX:-18.4573,skewY:161.5427,x:671.2773,y:2113.4464}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{scaleX:0.6388,scaleY:0.6388,x:981.4803,y:870.7688}},{t:this.shape_32,p:{scaleX:0.6388,scaleY:0.6388,x:973.5935,y:900.871}},{t:this.shape_31,p:{scaleX:0.6388,scaleY:0.6388,x:973.3752,y:900.877}},{t:this.shape_30,p:{scaleX:0.6388,scaleY:0.6388,x:981.4994,y:870.7488}},{t:this.shape_29,p:{scaleX:0.9996,scaleY:0.9996,skewX:17.1103,skewY:-162.8897,x:878.0064,y:2175.0694}},{t:this.shape_28,p:{scaleX:0.9996,scaleY:0.9996,skewX:17.1103,skewY:-162.8897,x:877.4882,y:2175.2237}},{t:this.shape_27,p:{scaleX:0.9998,scaleY:0.9998,skewX:17.1111,skewY:-162.8889,x:877.7891,y:2175.322}},{t:this.shape_26,p:{scaleX:0.9998,scaleY:0.9998,skewX:17.1111,skewY:-162.8889,x:1032.9305,y:2546.5342}},{t:this.shape_25,p:{scaleX:0.9998,scaleY:0.9998,skewX:17.1111,skewY:-162.8889,x:1035.7735,y:2601.1687}},{t:this.instance_2,p:{regX:149,regY:86,scaleX:0.9999,scaleY:0.9999,skewX:17.1123,skewY:-162.8877,x:1033.6,y:2572.2}},{t:this.shape_24,p:{scaleX:0.9998,scaleY:0.9998,skewX:17.1111,skewY:-162.8889,x:1032.9639,y:2546.533}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},3).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{scaleX:0.9998,scaleY:0.9998,skewX:-8.751,skewY:171.249,x:585.1442,y:2497.7816}},{t:this.shape_63,p:{scaleX:0.9998,scaleY:0.9998,skewX:-8.751,skewY:171.249,x:585.1003,y:2497.7768}},{t:this.shape_62,p:{scaleX:0.9998,scaleY:0.9998,skewX:-8.7518,skewY:171.2482,x:689.5645,y:2110.8209}},{t:this.shape_61,p:{scaleX:0.9998,scaleY:0.9998,skewX:-8.7518,skewY:171.2482,x:689.7834,y:2110.2056}},{t:this.shape_60,p:{scaleX:0.9998,scaleY:0.9998,skewX:-8.751,skewY:171.249,x:689.5007,y:2110.9564}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{scaleX:1,scaleY:1,x:981.4214,y:870.8893}},{t:this.shape_32,p:{scaleX:1,scaleY:1,x:969.075,y:918.0128}},{t:this.shape_31,p:{scaleX:1,scaleY:1,x:968.7333,y:918.0222}},{t:this.shape_30,p:{scaleX:1,scaleY:1,x:981.4513,y:870.858}},{t:this.shape_29,p:{scaleX:0.9997,scaleY:0.9997,skewX:8.6535,skewY:-171.3465,x:869.6124,y:2175.6569}},{t:this.shape_28,p:{scaleX:0.9997,scaleY:0.9997,skewX:8.6535,skewY:-171.3465,x:869.1225,y:2175.8857}},{t:this.shape_27,p:{scaleX:0.9997,scaleY:0.9997,skewX:8.6529,skewY:-171.3471,x:869.5716,y:2175.7798}},{t:this.shape_26,p:{scaleX:0.9997,scaleY:0.9997,skewX:8.6529,skewY:-171.3471,x:1077.6153,y:2520.1166}},{t:this.shape_25,p:{scaleX:0.9997,scaleY:0.9997,skewX:8.6529,skewY:-171.3471,x:1088.4629,y:2573.7359}},{t:this.instance_2,p:{regX:149,regY:85.8,scaleX:0.9999,scaleY:0.9999,skewX:8.6527,skewY:-171.3473,x:1081.95,y:2545.3}},{t:this.shape_24,p:{scaleX:0.9997,scaleY:0.9997,skewX:8.6529,skewY:-171.3471,x:1077.6482,y:2520.1105}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},3).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{scaleX:0.9998,scaleY:0.9998,skewX:-8.751,skewY:171.249,x:585.1442,y:2497.7816}},{t:this.shape_63,p:{scaleX:0.9998,scaleY:0.9998,skewX:-8.751,skewY:171.249,x:585.1003,y:2497.7768}},{t:this.shape_62,p:{scaleX:0.9998,scaleY:0.9998,skewX:-8.7518,skewY:171.2482,x:689.5645,y:2110.8209}},{t:this.shape_61,p:{scaleX:0.9998,scaleY:0.9998,skewX:-8.7518,skewY:171.2482,x:689.7834,y:2110.2056}},{t:this.shape_60,p:{scaleX:0.9998,scaleY:0.9998,skewX:-8.751,skewY:171.249,x:689.5007,y:2110.9564}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{scaleX:0.7591,scaleY:0.7591,x:981.5148,y:870.7636}},{t:this.shape_32,p:{scaleX:0.7591,scaleY:0.7591,x:972.1423,y:906.5362}},{t:this.shape_31,p:{scaleX:0.7591,scaleY:0.7591,x:971.883,y:906.5434}},{t:this.shape_30,p:{scaleX:0.7591,scaleY:0.7591,x:981.5375,y:870.7399}},{t:this.shape_29,p:{scaleX:0.9997,scaleY:0.9997,skewX:8.6535,skewY:-171.3465,x:869.6124,y:2175.6569}},{t:this.shape_28,p:{scaleX:0.9997,scaleY:0.9997,skewX:8.6535,skewY:-171.3465,x:869.1225,y:2175.8857}},{t:this.shape_27,p:{scaleX:0.9997,scaleY:0.9997,skewX:8.6529,skewY:-171.3471,x:869.5716,y:2175.7798}},{t:this.shape_26,p:{scaleX:0.9997,scaleY:0.9997,skewX:8.6529,skewY:-171.3471,x:1077.6153,y:2520.1166}},{t:this.shape_25,p:{scaleX:0.9997,scaleY:0.9997,skewX:8.6529,skewY:-171.3471,x:1088.4629,y:2573.7359}},{t:this.instance_2,p:{regX:149,regY:85.8,scaleX:0.9999,scaleY:0.9999,skewX:8.6527,skewY:-171.3473,x:1081.95,y:2545.3}},{t:this.shape_24,p:{scaleX:0.9997,scaleY:0.9997,skewX:8.6529,skewY:-171.3471,x:1077.6482,y:2520.1105}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},3).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{scaleX:0.9999,scaleY:0.9999,skewX:-1.2688,skewY:178.7312,x:548.5259,y:2483.4139}},{t:this.shape_63,p:{scaleX:0.9999,scaleY:0.9999,skewX:-1.2688,skewY:178.7312,x:548.483,y:2483.4034}},{t:this.shape_62,p:{scaleX:0.9998,scaleY:0.9998,skewX:-1.268,skewY:178.732,x:702.3578,y:2113.406}},{t:this.shape_61,p:{scaleX:0.9998,scaleY:0.9998,skewX:-1.268,skewY:178.732,x:702.6549,y:2112.8244}},{t:this.shape_60,p:{scaleX:0.9999,scaleY:0.9999,skewX:-1.2688,skewY:178.7312,x:702.3707,y:2113.4586}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{scaleX:1,scaleY:1,x:981.4214,y:870.8893}},{t:this.shape_32,p:{scaleX:1,scaleY:1,x:969.075,y:918.0128}},{t:this.shape_31,p:{scaleX:1,scaleY:1,x:968.7333,y:918.0222}},{t:this.shape_30,p:{scaleX:1,scaleY:1,x:981.4513,y:870.858}},{t:this.shape_29,p:{scaleX:0.9997,scaleY:0.9997,skewX:2.6515,skewY:-177.3485,x:865.131,y:2181.0005}},{t:this.shape_28,p:{scaleX:0.9997,scaleY:0.9997,skewX:2.6515,skewY:-177.3485,x:864.6677,y:2181.2793}},{t:this.shape_27,p:{scaleX:0.9998,scaleY:0.9998,skewX:2.6521,skewY:-177.3479,x:865.0324,y:2181.1798}},{t:this.shape_26,p:{scaleX:0.9998,scaleY:0.9998,skewX:2.6521,skewY:-177.3479,x:1107.9652,y:2501.922}},{t:this.shape_25,p:{scaleX:0.9998,scaleY:0.9998,skewX:2.6521,skewY:-177.3479,x:1124.3608,y:2554.1202}},{t:this.instance_2,p:{regX:149,regY:86,scaleX:0.9999,scaleY:0.9999,skewX:2.6529,skewY:-177.3471,x:1114.95,y:2526.6}},{t:this.shape_24,p:{scaleX:0.9998,scaleY:0.9998,skewX:2.6521,skewY:-177.3479,x:1107.9972,y:2501.9125}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},3).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{scaleX:0.9998,scaleY:0.9998,skewX:7.2114,skewY:-172.7886,x:508.5942,y:2462.8921}},{t:this.shape_63,p:{scaleX:0.9998,scaleY:0.9998,skewX:7.2114,skewY:-172.7886,x:508.5533,y:2462.8755}},{t:this.shape_62,p:{scaleX:0.9998,scaleY:0.9998,skewX:-1.268,skewY:178.732,x:702.3578,y:2113.406}},{t:this.shape_61,p:{scaleX:0.9998,scaleY:0.9998,skewX:-1.268,skewY:178.732,x:702.6549,y:2112.8244}},{t:this.shape_60,p:{scaleX:0.9998,scaleY:0.9998,skewX:7.2114,skewY:-172.7886,x:715.2983,y:2119.6937}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{scaleX:1,scaleY:1,x:981.4214,y:870.8893}},{t:this.shape_32,p:{scaleX:1,scaleY:1,x:969.075,y:918.0128}},{t:this.shape_31,p:{scaleX:1,scaleY:1,x:968.7333,y:918.0222}},{t:this.shape_30,p:{scaleX:1,scaleY:1,x:981.4513,y:870.858}},{t:this.shape_29,p:{scaleX:0.9997,scaleY:0.9997,skewX:-3.5597,skewY:176.4403,x:861.5755,y:2189.8777}},{t:this.shape_28,p:{scaleX:0.9997,scaleY:0.9997,skewX:-3.5597,skewY:176.4403,x:861.1451,y:2190.205}},{t:this.shape_27,p:{scaleX:0.9998,scaleY:0.9998,skewX:-3.5586,skewY:176.4414,x:861.4916,y:2189.99}},{t:this.shape_26,p:{scaleX:0.9998,scaleY:0.9998,skewX:-3.5586,skewY:176.4414,x:1137.6901,y:2482.56}},{t:this.shape_25,p:{scaleX:0.9998,scaleY:0.9998,skewX:-3.5586,skewY:176.4414,x:1159.6359,y:2532.6766}},{t:this.instance_2,p:{regX:148.8,regY:86,scaleX:0.9999,scaleY:0.9999,skewX:-3.5592,skewY:176.4408,x:1147.85,y:2506.35}},{t:this.shape_24,p:{scaleX:0.9998,scaleY:0.9998,skewX:-3.5586,skewY:176.4414,x:1137.7209,y:2482.5471}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.8,-296.6,3775.6,2994.2999999999997);


(lib.woman = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// face
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F58E84").s().p("AgVBiQgjgMgUgVQgWgWgGgIQgPgSgFgRQgIgcAKgbQAKgdAZgLQAkgRA8AeQAMAGAGAAQAHAAAOgGQAZgNAQAAQALAAAKAFQAKAFAFAJQAHAOgIAQQgHAPgPAGQgXALgngMIgegJQgQgGgNAAQgOgBgMAEQgNAFgFALQgHANAGAPQAFAOAMANIAjAaQAXASABAMQABANgNAAQgIAAgNgEg");
	this.shape.setTransform(994.5461,987.0491,2.5288,2.5288,-14.9988);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE776B").s().p("AhCB9QhDgJgrgfQgWgQgOgVQgPgYgCgYQgCgeASgcQASgcAdgNQAcgNAiACQAfABAeAMIAQAFQAIAAANgHQBPgoBCASQAmAJAaAeQAbAeAAAlQAAAdgSAcQgRAZgbASQgpAZhMAMQgkAGggAAQgZAAgYgDg");
	this.shape_1.setTransform(1011.8802,981.1048,2.5288,2.5288,-14.9988);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Aj7FDQhvhGgOihQgFgzAPhIQARhWAlhIQBljCDHACQDGABBtCtQBNB6AGCJQAEB7g9BUQhWB4jKADIgRAAQitAAheg7g");
	this.shape_2.setTransform(994.734,923.979,2.5288,2.5288,-14.9988);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373737").s().p("AEiBfIgBgBQgIgGgYgPIglgTQghgRgsgQQhSgbhRgGQgSgCgYAAIgrABIgqAGQgZADgQAEQhBANhfAzIgCABQgKAFgKgCQgLgDgGgJQgHgKADgMQACgLAKgHQBihBBHgWQATgIAcgGIAvgMQBIgJAZAAQBfgDBiAYQA4AOAmAPQASAHAcAMQAdAOARAKIAGADQAWAPAEAbQAFAbgQAVQgQAWgaAEIgMABQgUAAgRgMg");
	this.shape_3.setTransform(733.6373,636.4656,1.6872,1.6872,-14.9997);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373737").s().p("AlRBqQgagEgQgWQgQgVAEgbQAEgaAWgPIAGgEQAWgNAZgLQAZgMAUgHQArgQAzgNQBfgXBiACQAUAAAcAEIAxAGIAwALQAbAGATAIQBHAWBiBBQAKAHADALQACAMgHAKQgGAJgLADQgKADgKgGIgCgBQhigzg+gNQgQgEgZgDIgqgGIgqgBQgZAAgRACQhSAGhSAbQgvASgeAPQgSAJgTALQgVAMgLAIIgBABQgRAMgUAAIgLgBg");
	this.shape_4.setTransform(1028.9444,551.3642,1.6872,1.6872,-14.9997);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGBrQgegtAAg+QAAg9AegtQAdgrApgBQAqABAdArQAdAtABA9QgBA+gdAtQgdAsgqAAQgpAAgdgsg");
	this.shape_5.setTransform(782.2215,743.6811,1.6872,1.6872,-14.9997);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Aj2FOQhniLAAjDQAAjDBniKQBmiKCQAAQCRAABmCKQBnCKAADDQAADDhnCLQhmCKiRAAQiQAAhmiKg");
	this.shape_6.setTransform(792.5361,766.7466,1.6874,1.6874,-14.9991);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373737").s().p("ABSBrIhUgaQgzgWgbgWQgngcgVgkQgXgqAEgnIAAgBIABABQALAjAgAaQAaAVAlAJQAZAHAsACIBHgGIADAAQAZgDAVAQQAUAPADAaQADAagQAUQgQAUgaADIgGABQgJAAgIgDg");
	this.shape_7.setTransform(715.3713,754.7392,1.6872,1.6872,-14.9997);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhGBrQgegtAAg+QAAg9AegtQAdgrApgBQAqABAdArQAeAtAAA9QAAA+geAtQgdAsgqAAQgpAAgdgsg");
	this.shape_8.setTransform(1068.9164,647.5194,1.6872,1.6872,-14.9997);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Aj2FOQhniKAAjEQAAjDBniKQBmiKCQAAQCRAABmCKQBnCKgBDDQABDDhnCLQhmCKiRAAQiQAAhmiKg");
	this.shape_9.setTransform(1081.3702,673.9149,1.6874,1.6874,-14.9991);

	this.instance = new lib.Group_0();
	this.instance.setTransform(724.7,370.45,1,1,0,0,180,457.5,231.8);
	this.instance.alpha = 0.3984;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00080F").s().p("AgTBJQgygOgkgkQgRgRgBgZQgBgWATgUQAHgIAMgFQAMgFALAAQAZAAARASIAJAHIAOAJIAVAFIATAAIAGgBQAYgGAVAMQAVAMAIAXQADAKgCAOQgBAMgGAKQgNAWgXAGQgYAGgYAAQgaAAgZgHg");
	this.shape_10.setTransform(1174.0393,570.9255,1,1,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00080F").s().p("AC4GYQhEgng8g4QhQhLhdiKIhIhvQg1hTgXgzQgLgYAFgWQAGgWAVgOQAKgHALgBIgjhoQgHgXANgWQANgVAXgHQAXgIAXAOQAUAMAIAXIBdERIAAAAIACADQAHASAJAPQAQAcAaAiIABABID0E5QARAVABAWQAAATgNARQgOARgWAFIgMABQgQAAgNgIg");
	this.shape_11.setTransform(1194.1658,541.8314,1,1,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00080F").s().p("AgvO+QgYgFgMgXQgNgWAHgXQAPgqAKguIAEgRIAPhZIAAgCIARirIhABlQgdAxgRAYQgdApgeATQgXAPgaABQgcACgXgNQgUgLgNgUQgNgTgDgXQgKg/AchpQAShDAdhTIA1iTQBvkpCJkdQAag2ArhUIBHiKIABAAQACgIAEgIIAFgHIAUgsIABgDIAHgQIAOg1IgCgQIAAgCIgBgGQgEgaAKgUQAFgIAGgGQABgTgBgSQgCgYATgSQATgRAYgBQAXgBATASQAOAPAEAcIABASQABAagCAaQgEAigJAkQAGBMgIBMQgEAqgJAqIACAIQASBOgIBKQgDArgLAsQgCBvgVC4QgOB6gFAlQgOBZgXBCQgLAigTAsIgiBNIg2CEQgmBmgjB1IgWBOQgJAYgTALQgNAIgQAAQgIAAgIgCgAj5J/IgBACQAAAAAAAAQABAAAAAAQAAgBABAAQAAgBABgBIAAgBgAgIgMIgBAEQhBCagtB9QgXA9gbBRQghBfgNAxIgJAuICpkJIAxhMQgRgDgPgOQgRgTgBgXQAAhDAYhJQAQgvAdhCIANgaIAEgXgACdIQIAAACIABgEgAB/ETIgKAsQAJgYAGgVIAFgOIgKAPgACiB/IAAAFIAAgDIABgEIgBACg");
	this.shape_12.setTransform(200.298,689.2224,1,1,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#994F2F").s().p("AjvKKQgagGgagUQgYgTgOgYQgQgagCgeQgGgeAJgeQAUhvAehlQA6jEBhi+QArhWAzhRIAwhNQATghAOgdQAJgaAFgXIgBALIAEgZIgDAOIABgQQAAg6AsgwQAlgoBFgEQAbgBAeANQAdAMAUAUQAUAVAMAcQAMAdAAAcQAAAzgOA3QgFAVgKAbIgUAvQgUAugoBAIhDBrQg8BngyByQhRDJgnDVQgFAbgUAZQgSAVgaARQgfAUgpAAQgUAAgXgFg");
	this.shape_13.setTransform(221.006,679.0436,1,1,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#994F2F").s().p("AkBZSQgsgKgigsQgfgogBgzQgHitANjGQATkiBDmMQAThtApjaIAfihQAPhQAJg9QAQiFgQiAIgIg3IgYhTQgbhYgOhBQgRhUgBhJQAAghAOgeQABgOAEgPIAQgkQAFgLAIgJIgMggQgwh5gPgqQgghdgQhLQgNg+Acg1QAVgoAzgVQAtgUA0AMQAZAGAbAUQAcAVAKAWQAyBuAoBrQA8ChApCuQAYBSATBeQATBhATCPQAMBdAOCHIAYDlIBkOsQADAcgOAeQgLAZgWAXQgmAqhEACQgMABgNgCQgTBUgdBIQgyB9hABtQgfA1haCMQglA5g1AMQgUAEgUAAQgTAAgUgEg");
	this.shape_14.setTransform(214.0569,537.8117,1,1,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#994F2F").s().p("AAVLfQgcgMgUgUQgWgUgJgdQgOgaABgfQAKhfACgyQADhLgHg9IgBgJIgHg6QgGg3gBgrQgDhOgJhJIgBgKQgVibgMhNQgOhagFgZQgKgzgPgoQgIgPgJgPIgLgMQgpgngDhDQgCg3AugzQASgUAfgMQAdgMAcAAQAdAAAcAMQAbAMAVAUQBPBLAkCBQAPAzAQBsQANBQAPBrIAQBvQAJBAADAuQACAWACBGQABAxAEAhIABAIIAJBDQAGA6AAAuQgBA1gNB6QAAAogUAjIgYAfQglAohFAEIgEAAQgaAAgbgMg");
	this.shape_15.setTransform(227.4024,443.2787,1,1,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#994F2F").s().p("ADRGNQghgEgYgPQg6glhOg+QhCg1g6g+QgSAYgaAQQgaARgeABQgTAGgVgGQgegBgZgRIgfgXQgUgSgMgfQgMgeAAgbIAKlDQACg9AqgtQAmgpBEgDQAbgBAeANQAdAMAUAUQAUAVAMAcIAFAMIAHAHIAYAfQAoBKAvBBQBRBlBmBRQAnAcAnAZQAyAfATA7QARA2ggA9QgNAYgZATQgZATgbAHQgTAGgVAAIgTgCg");
	this.shape_16.setTransform(460.9198,455.352,1,1,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#994F2F").s().p("AKEHtQgdgBgagRIllk4IgygsIgggcIALAIIgRgNIgBAAIgBAAQmHAUmDgHQg8AAgugsQgWgTgJgdQgLgRAAgUQgGgdAJgeIAPgkQANgYAZgTQAXgRAdgJIACgBIgcgFQgagEgZgVQgWgSgRgaQgfgwAQhDQAGgaAUgaQATgYAYgOQAZgQAfgCQAdgGAfAJQBqARCGAYQGvBRGgBwQAmAKAcAcQATATALAXQAcAJATAWIAYAeQA6BZA3CBQApBjAXBnQAHAegDAdQgEAggPAYQgVAhghAVQgaARgeABQgKADgKAAQgKAAgKgDg");
	this.shape_17.setTransform(781.4023,280.1887,1,1,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#994F2F").s().p("AhpBqQgpgmgDhEQgBgaANgeQAMgdAUgUQAVgUAcgMQAcgMAcAAQA6AAAwAsQApAlADBEQABAcgMAeQgNAcgUAUQgUAVgcALQgdAMgdAAQg5AAgwgsg");
	this.shape_18.setTransform(1186.4041,541.45,1,1,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#994F2F").s().p("AhpBqQgpgmgDhEQgBgaANgeQAMgdAUgUQAUgUAdgMQAcgMAcAAQA6AAAwAsQApAlADBEQABAbgMAeQgNAdgUAUQgUAVgcALQgdAMgdAAQg5AAgwgsg");
	this.shape_19.setTransform(1186.4041,536.9,1,1,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#994F2F").s().p("AlFMSQgggFgZgOQgYgOgTgYQgSgYgIgcQgyitA7jZQAQg8AdhNIA0iGQAlhaAag0QAmhNAqg4QArg5A/hIIBuh8IDMjmQAlgpBFgDQAvgCAsAiQAmAdAQAxQARA0ggA/QgyBkg4BUQgaAmhWBzQgfAqgSAiIgoBPQgrBShMBLIg1A2QgXAWgQATQgNATgJASIgIAWIgLAcQgHARgGAKQgKAQgOARQgTA/gJA0IABgLIgEAYIADgNQgGA6AFA1QADAUAGAVQARA5ggA7QgZAwhAAVQgRAFgTAAQgLAAgMgBg");
	this.shape_20.setTransform(1131.1714,272.987,1,1,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#994F2F").s().p("Al8JHQgYgNgTgZQgTgZgHgbQgIgcAEgfQAEggAPgYQAohDAwhMQBLh2BaiAIBTh2QAlg4AXgxQATgtAThEQAZhUAKgbQAPgoATgbQAXggAggTQAogYAwAAQAWAAAUAFQAPgFARgCQAcgDAfAHQAaAGAZAUQAYATAPAYQAQAZABAfQAHAdgJAfQg5CZhpBoQgUAWgcAJIgBABQgkBTgtBBIg5BSIg5BRQh1CthmCpQgeAyg8ATQgTAGgTAAQglAAgogVg");
	this.shape_21.setTransform(1124.2833,259.9362,1,1,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#994F2F").s().p("A7TJpQgogLgagcQgdgcgKgnQgKgnAKgoIAHghQAFgxgEgyQgIgvgSgvQgLgYgNgWQgfg2ARg7QAQg6A0ghQAYgPAhgEQAfgEAcAIQAbAHAYATQAYASAOAYQBDBwASCEIAFAtQFXgzDvgoQGBhBE0hHQFphSE9hoQCWgyC1hHQB1gvDRhXQDNhWB6gvQC1hFCYgsQA7gRA2AgQA1AfATA7QAIAbgFAgQgEAggPAZQgOAYgYATQgYASgbAIIhTAZQiUAui3BJQhdAljpBiQl+CfkVBYQk5BilvBRQkxBDmFBBQjIAgnzBKQgUAGgUAAQgUAAgUgGg");
	this.shape_22.setTransform(1014.3803,507.0176,1,1,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#994F2F").s().p("A2cL4Qg1gMgsgdQgrgagbgcQgYgYgegtQgVgegUg9QgOguACgtQABgUALhIQAXhQA6g7QA7g6BQgXQCCgfChgqQEOhGD1hKQBwghCQguIB8goIBOgaQAbgPAngaQApgbA4gYQEHh1EnhkQAOgSAQgRQA1gsAkgZQAygjAvgVQBKgrBVAAIBUALQBQAWA7A7IAxBAQAjA2ADA/IADAPQBogKBhgDQBWABBIAqIBAAxQA7A7AWBQIAMBUQACBBgeA4QgSA6gvArQgrAug6ATQg6Aeg/gDQiUAFiTATQjsAikXBHQi7Avk1BbQl0Buh6AiQjQA4kmBAQicAhhfAjQgqARgVAHQgzAQg5ACIgIAAQgzAAgxgNg");
	this.shape_23.setTransform(971.0279,471.7534,1,1,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#994F2F").s().p("EggsAboIhLggQg4geghgzQgpgsgPg/Qg0i9gWj1QgQixANi6QAZl1BulWQBrlLCzlBQCRkEDLkLQBbh2BbhvIASgmQASgiAdgpIA2hGQAigqAoghQBWhIA5ggQBxg9CCAeQAkAIAfASQAngRAagHQAggIBFgGQAMgCAKABIAvAGQAbACAUAFQAEAAAGADQAwAPAgASIAIAGQAtAdAXAYIAIAJIAgAlQARAXAJATIAVAvQAMAcAEAVIAHAvQB8g2BcgdQDchHESgVQBCgCA4AdQAoALAdAdQAkAVAVAkQAdAdALAoQAeA5gDBBIgDAWQB4gnB7gZQA/gTA+AOQAqAAAmAVQAoALAdAeQAYAOARAUQAtARAjAgQA0AhAdA3QAWAmALApIBzgQQB7gQBdgDQBDgCBkATQBTAPBBAtQA5AqATASQAJAJAKANIARAXIASAXQALAOAGAKQAMAVAbBEQAJAZAFAkIAHA+QADAaAAAWQgCAmgHAyIgNBYQgJA6gLA5QgTBugcBzQg2DhhQDaQgWBQg7A7Ig/AyQgzAhhDAHQg9AGhAgPQg9gOgugqQg0ghgdg3Qgjg3gDg/QgOg+AUg/QAuiaAnibIg+AFQgXABgZAAQACAUgBAUIgLBTQgPA+gqAtQggAzg4AeIrYF9Ip4FMQl1DFkDCDQleCylGCDQlVCHkuA/QgpALgqAAQgqAAgqgLgA3pFyIB0g/QgeAHgdAKQgWAKgUANIgMAMIAAgBIAAABIAAAAIgDALgA0WlGQA7ABBXAIICRANQCBAKB0gKQBrgSCBgmIAzgQQgRgagJgeQgeg4ADhBQgBgWADgWIgVgEQgqAAgmgWQg7gTgqguIgyhAIgfhLIgMhUIgGhWIjCBvIgEACIg3BGQg1BGg3BNQh5CthiCtQA4gFAtAAIAIAAg");
	this.shape_24.setTransform(971.2878,374.9063,1,1,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#994F2F").s().p("EAYbAoSQgrAAglgWQhMgfgyhCQhEhXAAhnIAMhUIAfhLIAIgMIgCgIIgKgRIgDgFIgFgEIgdgQQgggLgjgHQhHgFhPAIQguAHgjADQhUAAhLgrQgXgNgUgRQggA4giA4Qg1BYhhAoQglAWgrAAQgqALgpgLQg/gCg3gjIg/gyQgygxgfhaQhgkPgkl+QgUjlAIktIADhZQjuhMkAhsQhegnhggsQgBAXgDAYQgKA8gfA7QgXArgqAiQglAfgxAVQhgAphtgZQg9gOgugrQgzghgeg3Qh2ighnigQhBhkg8hnQgKAdgRAcQgrBKhHApQhHAqhYACQg0ABgqgNIg/CHQgkBKhCA4QhGA5hOARQhBANgmgCQg3gDgjgKQgdgJg3gZQghgQgoghQgPgGgNgIQg0gegmgzQgkgugSg5IicjHQg7g6gWhRIgMhSQgCgyAUg0QARguAhgrQA9hQBnghQA/gUA+AOQA/ADA2AjQBiBHAtAuIALALIA0hxQAYgzA3goQAwgiA9gUQAWgHAXgDQAPg9ATg7QAihmBLg7Qgwh2gsh5QgVg3AMhFQADgXAHgWIkAmNQghgzgHhDQgGg8AOhBQANg5ApgyQAlguA2gjQAxgfBFgJQBCgIA7AQQBvAfBNByQCEDEB2C/IAcAvIAAgCIABgHQgWgqgFg0QgFg0AKg4Qgeh5gih5Qghh3BBh8QAXgqAqgjQAlgfAxgVQBggoBtAZQA3AMA1AqQAvAmAhA0QBKB0BLB6QAAgsASguQARgvAhgqQA+hQBlghQBAgUA+AOQA/ADA2AjIA6AoQAkgtA0geQAjgVAmgKQgEgaAAgaIALhUQANg5ApgzQAlgtA2gjQAxggBEgIQBCgIA6AQQA6AQAyAnQAzAmAeA0QDyGhC8G2QArBKAABVIgLBUQgKAvggAsQgdAogqAgQg3AqhDAQQBwJLgbKFIgGB/IBcARQAUgRAYgQQAzghBDgHQA8gGBBAPQA3AMA1AqQAhAaAYAeQBuAGCnAGQDIAIBjAFQCmAJCFAPQBzAMAxAHQBdANBGAUQBYAaBgAwQAnATAqAeQAcAUAuAnQAoAgAhArQAlAuARAYQAdAoASAjQBGCJAaCBQAZB/AHCWIALAYQALAcAFAaQALA7AAAmQABAvgNAxQgmCQiQBgIgRALIAIALQA7A7AWBQQAXBUgXBTQgWBQg7A7Qg6A7hRAWIwjCZQglAMgkAAQgbAAgZgGgAeUdwIAzgHIgngGIgRgDIAFAQgAa6PTIAXA2IAWAGIBLAgQB8A6B8BJIBOAwIAjgWIBjhEQAjgVAjgRIgVgjQgOgPgOgNQgUgNgWgLQhGgXhcgPQiogUjrgMIAGAOgAAcjkQgHAegQAdQAHAgAAAiIgLBUQgIAngXAkIBHAZQAFirgCiUIgNgFIgDAPg");
	this.shape_25.setTransform(573.4059,440.9342,1,1,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#994F2F").s().p("ABTbSQgfAAgagPQgpgOgfghIgjgtIhVidQgIgKgGgMIhSiZIgNAPQg4A8hnAGQgpACgtgUQgrgSgegeQghgfgOgqQgVgoACguQghkDAykPIAAgBIgSApQg6CBhtB7QgnArg/AQQgaAGgaABIgNALQgbAWgjAPQgaAPgfAAQgeAJgegJQgsgBgngZIgugjIgjguIgXg2Qg4jUgNjSQgaAPgaALQiLBBhnAOQguAPgsgLQgfAAgagPQgcgHgWgWQgYgOgQgaQgeghgKgsIgIg8QAAg0Aeg9ICakpQEPoHEnoMQAphKBdgdQAqgOAvAIQAOACANADIDqm3QATglAmgcQAigZArgOQAugOAsAKQAfAAAaAPQAqAPAeAgIAjAuQAZAmACAsQAKAMAIAPIAWA2QAcBkAUBoQAcCSANCNQAHgMAIgLQAcgmAkgTQA3gdA7gCQAZgBAXAGQAHgVALgSIAjguQAfghApgNQAagQAfAAQAugKAsAOIA1AXQBFAkAjBiQAzCPA1COIADgBQA6gPA7APQAagTAhgHIA7gIQAvgCAoAVQAYAIATANQAcgkAngZQAlgYAugCQAegIAeAIQAuACAmAYIAtAkQA/BDA4BHQARgEAQAAQAjgbArgMQA8gQA8AQQA4AQArAqQBPBFBWB3QAcAlAZAtQALAIAKAKQAtAsARA9QAJAjgBAdIgDAgQgDAVgDAKQgJAggQAbQgMAWgYAaQgqAqg5ASIgOAQIhRBgQhGBWhVBuIAEgFQhRBqhQBvQlFHHkJH1QgWAogkAXQghAegsAKQg7AOg8gOQhDgPgyhBQgeghgLgsIgIg8QAChfAIhrQAJhtAOhpQgFgNgEgNIgCgHIgKAeIgdDKQgOAwgeAkIgYEKQABAvgVAoQgNApghAfQgsAog4ASQgZAIgaAAQgTAAgTgEgANbEaQAiANAeAXQAkAYAWAnIAJAVQCNjLCgjLQgagOgVgWIgPgVQggAdgoAOIAAAJQADApgTAsQgSAnggAiQgdAhgrAOQgbAPgeAAQgsALgtgPIg2gWQgkgTgdgnQgcglgLgoQgIgigLghQgRAQgWALQgZAOgcAIIBaEDQArgTAygCIAHgBQAgAAAhANgAn7DmIgaAiQgOBFgMAyIAAADQAlgdAtgQQAAhVgFhWQgIAfgRAdg");
	this.shape_26.setTransform(425.4898,422.8378,1,1,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#994F2F").s().p("EAm+AHbMgrxgG9IuDCnQgPACgDgNQgEgOAOgEQE0hmEuhTIq0huQibAAh9ACQovAInMApQgOABAAgPQAAgOAOgCQGFg0GHglQKshAK/gVQEjgIEkAAQjggajigXInUgGQgPAAAAgOQAAgOAPgCIAhgEIhygJQgPgBAAgPQAAgPAPABIDmATIAjADIAEAAQC9gUC4gPQPahPPeA6QAPABAAAOQAAAOgPABQk8AckzAqIWkARQANAAACAOQABANgMADIh6AYQnOBYoaAoQm4Aho3AEInBBTQCBAWCCASQOBCHOWAfQAPABAAAPQAAAPgPgBQj2gIkSgSQp+gqp8heIBJAPQImB1H/BdIEJAxIEIAsQEOAtEMAoQAOADgEAOQgEANgLAAIgDgBgAL7CqQmphWmmhfIiHAYIPWCdIAAAAgAvUB8IJKhsIiKgVQjhA8jfBFgAnNgZICbAZICWgcIhLgRQgOgDAEgOQAEgOAOACIChAdIFuhFQijAAi+gCIgyAAQi2Ari0AwgAoWgkQCcgrCdgmIlSgFQkugEjzgBgAy3jVQmkAcmgArQEUgLE3gDIA8gBQADgNAMgBIXvgeQCHgdCHgaIjjgCIgPAAQqrAAqyAtgAORjYQAMACgCAOQgCANgMABIr/APIh1AaQEDACC4gBICJgaQAOgCAEAOQACAIgDAEQIQgHG0glQHKgmGWhMI3RgSQhnAQhnARIDTAQQAOABAAAPQAAAPgOgBQiXgFiYgEID6AkgArXiaIEgAEIFSAEIBdgWgAEqjMIGwgJIjageIgKgBQhmAThmAVgAJ7krICVgZIovgHgAmXl9IC0AOISiAPQEwguE2ghQi4gIiygDQiGgDiGAAQqkAAqiBAg");
	this.shape_27.setTransform(673.2178,327.2094,1,1,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#020202").s().p("EBPiAzxQg3gSgbgzQgbg0ARg4QAWhMAViNQAqkYgElSQgLw0nDzjQk3tgmtotQmsouobjwQnJjMnzAsQicANiPAlIhxAkQg0AVgzgUQg0gTgZgyQgxhdhyhsQjgjVlWhzQndihqMBAQtaBUxAHUQxRHdqIL3QqHL5ixQEQhbIPArIzQAcFvBOFCQZXk9U+pqQQAnYMZplQGBkrE+k/QBUAKBHANQBmASBPARQl3GQneFzQtBKIw1HtQ2LKJ60FBQg1AKgtgcQgugbgQgzQhOj6gvlrQhcrPB0qxQCfupIgrvQLMvdUvo7QcpsVSlD8QGlBZE3DZQDUCTCHC6QERhPExABQHPABGuC+QJTEIHUJWQHUJWFMObQHbUlAHRjQACFlguEpQgaCigbBWQgOAtgmAbQglAbguAAQgTAAgXgGg");
	this.shape_28.setTransform(697.2928,331.7907,1,1,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#020202").s().p("AFgHLQhFgrg0gZQgngTgpgRQgfi+gaiyQhtCMh8CKQhbgVhegSQhQgOg/gJQDqj0CsjqQBWh1AqhHQAXgnApgTQAqgTAtAKQAtAKAfAiQAeAiAFAtQAtGtBeIAIh0hLg");
	this.shape_29.setTransform(589.475,273.0167,1,1,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#020202").s().p("AFAYwQkvhSlTjrQmukqlLu7Qjvqtimu7QA+AeBlBCQBwBJAwAaIAXB1QhvgDg3AAQgXAAgOAPQgMAOAAAUQABAwAwADQBXAGBnAKQCoMdDWIiQEKKoE1DWQEaDED0BIQDzBHDGg2QC0gyCGiZQBEhMAfhFQAYg1A3gVQA2gUA1AXQA2AYAUA2QAVA2gXA1QgvBphfBtQi7DYkGBKQh9AkiGAAQiUAAifgrg");
	this.shape_30.setTransform(423.5045,482.9608,1,1,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#390075").s().p("Ag+AvIBAh2IA8ARIgTAeQgmA3gXApg");
	this.shape_31.setTransform(1001.2,1627.725,1,1,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#020202").s().p("EgCPAhQQjjhrkJilQiehjkzjSQmekajOh2QlTjBkkhOQlahclgAxQmFA2muDnQhFAlhNgOQhOgPg1g7Qgzg5gIhMQgHhMAmhAMAaWgwTQAhg8A/gYQBAgZBAAWIDKA9QD8BIEVA8QNzC+MkAAQMWAAMRi8QGJhfDxhgQBDgbBDAYQBDAZAiBAMAYWAugQBRCbg0CwQgzCwiaBdQqZGUqFEWQvoGvqoAAQo1AAo5kLgA74K2QDQBkD4CcQCUBdEhDFQEmDJCTBcQDzCZDMBhQH3DxHrAAQJ1AAPWm1QJUkJJOlmQAegSALgjQALghgNgXMgXKgsRQl8CCnBBXQqnCEqqAAQrBAAr5iKQnrhZmwiBMgWGAohQGxilGbAAQHxAAILD7g");
	this.shape_32.setTransform(767.3603,1844.5101,1,1,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#AAAABA").s().p("AguevQjUhij1iXQikhlkQi6Qj7irh+hTQjdiQiwheQoPkdnfgVQpLgbqJFbQgdAQgXgcQgXgbASgbMAaZgwYIAIADQFjBwHTBgQN2C2L6ABQMDAANAjFQGfhiEGhjIL1WoICJEGQEwJCFoKyQAvBaggBpQgfBnhcA4QjZCEjmB+QoKEcnZDBQpwD+nkBHQi2AaihABQoCAAoMjzg");
	this.shape_33.setTransform(767.4134,1844.55,1,1,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#390075").s().p("ABQTUQjwgwjvhcQlgiJkfjQQkWjKi0jzQi0jzg5j4Qg7kBBRjkQCKmGGhiOQIli8PaEGQGUBrFGD4QFHD3CvFMQBzDZAaDZQAZDYhCC8Qg6Ckh9CBQh8CAi2BTQiRBDitAiQirAhi+AAQjhAAjugugAw6s+QjSBbhFDBQg2CYA7C5QA5CyCZC0QCZC1DgCaQDoCfERBqQFuCPFnAQQFmARD5hyQDjhpBCi6QAohygUiLQgUiMhPiTQiLkJkJjGQkIjHlKhXQoLiLl+AAQkZAAi0BOg");
	this.shape_34.setTransform(1122.1854,2502.0979,1,1,0,0,180);

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(1130.3,2526,1,1,0,0,180,149.1,85.7);
	this.instance_1.alpha = 0.1992;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AKyJUQlzgInPi0QnQi0kej2QiHh0g8hrQg8huAdhTQAehTBzgpQBvgpCvAEQFyAIHPC0QHRC0EeD2QCHB0A7BrQA+BugeBTQgeBThyApQhnAlicAAIgcAAg");
	this.shape_35.setTransform(1140.95,2553.5002,1,1,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B87BFF").s().p("AlMOaQk4h5kEi4Qj6iyinjUQimjVg5jUQg7jcBDi/IAEgIQCKl4HqhRQHZhOL7DLQE+BUEKC1QD4CoCoDiQCiDbA2DkQA4DohEDAQgtCAhiBkQjzD4naAiQhGAFhGAAQmjAAnBiug");
	this.shape_36.setTransform(1122.1538,2502.1089,1,1,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#050405").s().p("EgVVA5rIyuvXQgrgkgRg1QgQg2AQg2QBNj8CJmKQEQsSFBsJUAQAgmsARogXNQAtg8BKgLQBLgMA9AsIerVpQAgAXAUAiQAUAiAFAnQAFAngMAmQgMAmgaAeIh3CMQiTCtijDJQoDJ8nlKfUgYKAhYgKuAaiQgQApgiAdQghAdgrAMQgYAFgWAAQhDAAgzgqgA1FCUQoITElpRsIOMLpQKH3eT/8gQL9xEMku6I5xyLUgPNAU0gOEAg6g");
	this.shape_37.setTransform(864.6015,2192.9048,1,1,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#390075").s().p("EgmuAoKIAEgQQA2ivBikjQEUszFQs2QHkygIRveIAcg1QIswHI8ryIAPgTIfVWIIgTAUIh4CNQiTCvilDKQoGKAnqKlUgYUAhngK1Aa0IgMAfgApx7bIgYAuQoSPdnkSfQlQM4kUMyQhYEEg5C7ISGO3UAKhgZ0AXAggLQHhqhIHqIQElluDkkJI+A1MQozLsoiP1g");
	this.shape_38.setTransform(864.15,2193.25,1,1,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFB78A").s().p("EgmNAoEQAzirBkklQERsrFNswQHqytITviIAAAAIAYgvQIqwEI9ryIeqVpIhxCEQiRCsiiDGQoFJ8nqKkUgYdAhvgK9AbJg");
	this.shape_39.setTransform(864.6,2192.95,1,1,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#020202").s().p("EAJSAg6QtaovpXuyQkundjhoqQipmfhymuQoJMTv3HPQlECSlUBiQi1A0h9AWQgwAJgugQQgugQgggkQgggkgLgvQgKgvAOgvQEZuxGsvzQDWn7CilGQAfg/BBgaQBBgaBDAXMBy4AojQBCAXAiA8QAiA9gOBEMgGtAhNQgFAagMAYIktI7QgXArgpAbQgqAbgxACQiWAIibAAQ3BAAxhragA2G8mIAnDJQA3D6BSEJQEFNMGzKqQKhQlPXIDQPWICT5gpIDunFIGI+VMhUogd3gEg1ggYOQkmLMjbKrQJqi6HzlKQLpntEyrMQATgrAkgeI0ynVQi8GQjAHUg");
	this.shape_40.setTransform(775.0729,503.6602,1,1,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#994F2F").s().p("ANCf5QuNofp3vkQnCrHkKtkQhTkQg3j+IgmjIQjkIVnGGjQltFQnuD4QljCymCBzQh7AlhxAbQg/AOghAGQEZuxGovpQDUn1Cck4MBy4AojMgGtAhNIksI7QiZAIiUAAQ0uAAv/phg");
	this.shape_41.setTransform(775.075,503.6833,1,1,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#070707").s().p("Ege8BGvQo5iMn+kKQnUj0mFlMQlnkzkAlfQjylNhylBQj6rFBEvvQBEvuGA0HQEZuyGsv0QDWn6CilGQAfg/BBgbQBBgaBDAXMBy4AojQBCAYAiA8QAiA8gOBEIl/dtQE9AMEABQQFoBxC6DrQCQC2AdDvQAdDvhXEjIAAAAQjlL9pCFeQlhDWmQAYQqwJzrPGmQrPGlriDQQrDDHq6AAQpSAApAiPgEg50gzCQlMM6jlMCQlqS8hGPCQhGPDDjKCQBmEkDmEwQDuE5FQEWQFkEnGpDZQHLDrHzB8QRPEQRvkbQXWl0WJ0fQAcgaAjgNQAkgNAlADQBFADBigQQC5gdCrhUQIYkHDSq+QA8jJgMiYQgNiYhWhtQiPi1lchLQkIg6kWARIgKAAQgrADgogRQgogQgdghQgcghgLgqQgLgpAIgrIGN+vMhuDgm2QjYHLjVIQg");
	this.shape_42.setTransform(752.3661,687.1102,1,1,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF8288").s().p("AgwDcQipglhphbQhphbAUhaQAUhcCGgmQCGgmCoAmQCpAlBpBbQBpBbgUBaQgUBbiGAnQhEAThNAAQhLAAhSgTg");
	this.shape_43.setTransform(1213.975,728.55,1,1,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF8288").s().p("AhBEtQjngziPh8QiQh8Abh8QAch9C3g0QC2g0DmAzQDmAzCQB8QCPB8gbB8QgcB9i2A0QhcAahpAAQhmAAhxgZg");
	this.shape_44.setTransform(697.7244,860.775,1,1,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#390075").s().p("EgeWBEWQoOiDnjj5QnAjml5k7Qljkoj7lPQj0lFhuk4Qhvk7gsl6QhMp6BssoQBrsnEgvHQClonDPouIACgEQDfpXEEpHIDanWIAKgTMBziAoxMgGsAhDQESgMEGAzQHGBXDID8QDvEtiYH5QhPELh/DWQkWHXnjC7QkBBlj3ABQxLP3yDHVQvEGIvNAAQpGAAoyiLgEg4Pg9OQjuIcjNImIgBAFQjTI1iiIgQkePChrMhQhrMkBKJ1QAtF3BsEzQBsEzDxFBQD4FJFeEkQF1E2G6DkQHdD1IICBQRyEaSQkiQYCl7Wt1BIAIgHIAKAAICEgHQCggSCcg3QHyivEcngQB7jPBOkHQCQnfjfkZQjIj8nWhOQkBgrjxAQIgMAAIgfAAMAGvghVMhyPgoVQhtDgiIE0g");
	this.shape_45.setTransform(752.3436,686.9,1,1,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFB78A").s().p("EgdlBEFQoUh+nnj2QnDjjl8k5Qllkmj+lRQj2lGhwk+Qhtk1gtl7QhRqtCGt8QBwrvEGtuQCioeDTo5IAAAAQDhpdEEpGIDXnOMBy4AojMgGtAhNIALAAQCNgJCpANQEoAYDdBWQErB2B6DfQCXESh+GlQhQEJh8DSQkkHun+CwQifA3iiARIiCAGQ1PTq2vGiQq4DIqrAAQoiAAoaiAg");
	this.shape_46.setTransform(752.3601,687.1627,1,1,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#050505").s().p("AqBQRQknh9jljkQjkjlh9koQiCkwAAlQIAAn7QAAhOA2g2QA2g3BNAAMAtuAAAQBNAAA3A3QA2A2AABOIAAH7QAAFQiCEwQh9EojkDlQjlDkkoB9QkyCDlPAAQlOAAkziDgAz9ndQAAEEBlDsQBhDlCxCyQCxCxDlBgQDtBlEDAAQEDAADuhlQDlhgCxixQCxiyBhjlQBkjsAAkEIAAlBMgn6AAAg");
	this.shape_47.setTransform(784.775,1144.25,1,1,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#390075").s().p("AtcLgQmDkSidm/QhTjrAAkBIAAoVMAufAAAIAAIVQAACVgbCLQgzEAiHDgQiEDajGCiQjFCjjvBXQj2BakHAAQnYAAmEkTgA2dndQAAD4BQDlQCYGuF2EKQF3EJHIAAQD+AADuhXQDnhUC/idQC+idCAjSQCDjZAwj3QAbiIAAiPIAAnjMgs7AAAg");
	this.shape_48.setTransform(784.775,1144.275,1,1,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFB78A").s().p("AtWLGQl2kNiYmyQhSjnAAj9IAAn8MAttAAAIAAH8QAACSgbCJQgxD5iDDbQiADWjBCgQjCChjrBXQj0BakGAAQnYAAl+kUg");
	this.shape_49.setTransform(784.775,1144.275,1,1,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#050505").s().p("AgpG6Qg9gogOhHQgPhHAog8IgFAFIgBABIgCAAIgCgDIgCgIIgBgXIgBg6IgHhIQgGgtgLgmQgDgQgJgcIgOgvQgHgPgLgfQgLghgHgQIgphjQgZg2gTg0IAAgBQgEgLAEgKQAFgKALgEQAJgDAJADQAzASA6AdQAWALAeASIAzAgQAzAmAqAnIAsAsQAbAbAPAWQBdByAcCFQAQBPgMBPQgEAjgRAwQgHASgMAYIgiA0QgoA9hHAOQgTAEgSAAQgyAAgrgdg");
	this.shape_50.setTransform(110.7287,1607.4929,1,1,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#020202").s().p("AibGQQg7gJg9gYQhHgag0grQhDg1gfg/QgSgogJgZQgMgkgDgjQgFgdAEgrQACgYADgLIAKghQAHgWAEgKIAPgdIAhgzQBBhQBig1QBYgwBbgVQALgDAKAGQAKAGACALQADAPgJAKIgCACQiUCfgaBpQgPA0AaAhQADAFAIAHIAOANQAFADAHACIANADQAbAHA+gFQA+gEBFgNICUgeQBygZAlgGIAUgCQBMgLA+AuQA+AtALBNQAJA6gbA1QgaAzgyAcQhTAuhmAeQhdAdhoALQgxAEgsAAQhDAAg6gKg");
	this.shape_51.setTransform(1389.898,1616.8953,1,1,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#020202").s().p("ABFLrQgygOghgnQggglgegsQgggygSggQglhBgqhsQg8ijgTjPQgTi4AhjCQAbiqBfi0QAFgJALgDQAKgDAJAFQAMAGACAPIAAACIANCtQAIBfAQBGQAfCjA2CVQAYBBAjBSIBBCQIBiDWQAaA7ACAIIALAgQAWBEgiBBQghBAhEAWQgbAIgaAAQgZAAgYgHg");
	this.shape_52.setTransform(996.3111,1367.0259,1,1,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#050505").s().p("AEmEDQhdgNh7g4QhNgkh4hNQhmhChZhCQhzhbhChCQgIgIAAgMQAAgLAIgIQAHgHALgBQA4gCBCADQAuACBIAHQBqALB8AWQCLAaBSAbQB+AqBPA3QA9ArANBJQANBJgrA9QgeAqgvAUQgiAPgkAAQgNAAgNgCg");
	this.shape_53.setTransform(545.3741,1376.9654,1,1,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#020202").s().p("EgQ+AtdQonh3nhjuQiZhMiBhQQhDgpgpgeQglgbgTgqQgTgqAEguICX52IiXBNQgpAVgtgCQgugBgngYQgmgXgXgoQgWgngBguQgGqzmjpAQiDi1ieiUQgygugugmIgngeQghgYgUgkQgUglgBgpQgBgqASglQARgmAhgaQRzuCN/lBQF1iGF6g1QEcgoF9gCQCKgBDVgGQGrgKDHAPQE7AYFEBlQFsByH5D3QIID+McHKIBtA/QApAYAXApQAYApAAAvQgBAvgXAoQgYApgpAXQkgCkiqInQg/DMgmDpQgfC7gICUQgCAtgZAnQgYAngpAWQgoAWgugBQgtgBgogXIiIhPMgBtAgiQgCAugZAnQgZAngpAWQqpFqq4CpQpUCQpQAAQn9AAnihpgEginAAmQAwADAoAbQAoAbAUArQAVArgFAwIiqdKQDEB5D4BrQF3ChGWBWQMXCpMnh9QMnh8MqmfMAB3gjdQACguAZgmQAYgnApgWQAogWAuABQAuABAnAXICVBYQAzlnBmksQCQmmDjjuQrXmfndjnQnOjhlOhnQkohckhgVQi1gOmEAJQjbAGiLABQlTACj+AjQlRAtlMBzQsdEUvuMAQEOD8DAFBQEWHRA+ITIDEhlQAmgTAqAAIAKAAg");
	this.shape_54.setTransform(760.7777,1405.163,1,1,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B87BFF").s().p("EgQZAqxQoUhznQjnQiShIh5hLIhcg8ICz+0ImxDfQgFnsjIm8QiWlNj3kZQiaiviZh0IgPgLIABgBQRctwNqk4QFoiBFsgyQELgkFqgDQB8gBESgGQDfgGB4ACQFlAGE2BPQF0BfIGD2QIeEBNnH1IBuBAQi6BpiNDgQiDDShbExQhKD9gnEkQgUCSgFBeIl/jgMgB8AlCQu7H7vHB0QkYAhkUAAQnmAAnahng");
	this.shape_55.setTransform(760.8,1405.2178,1,1,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#020202").s().p("EgN1AtnQooh3nijvQiahMiBhPQhDgqgpgeQgogdgUgsQgUgtAFgxICU5jMguzAX/Qj0D2kWC1QncE1luguQiTgSh9hNQijhmhujDQiWkMAij6QAhjqDHj9QCtjbFakgQDVizITmSQHmlwEVjbQHbl3GalkQE9kUEwjwQR1uEOBlCQF2iGF7g0QEcgoF+gDQBpgBD2gFQGsgLDHAPQE8AYFEBlQFtByH6D4QIID/MdHKIBuA/QMHHEJ+HlQJzHcG+HXQG+HXDlGsQDqG0gMFiQgHDfhtCsQhtCrjFBiQnwD2oJnhQkwkYjsmzMglegV+MgBsAgRQgDAxgaApQgbApgrAXQqqFrq6CpQpUCRpTAAQn6AAnnhqgA/aAcQAzADAqAcQAqAcAWAuQAWAugFAzIipdEQDFB5D2BpQF0CfGSBVQMTCnMjh7QMkh8MmmcMAB3gjXQADgwAagpQAagpAqgXQArgXAxAAQAxABAqAZMAqTAYzQAvAbAZAyIBjCrQB6DFCBCWQGbHdFFiiQBpg0A1hVQA2hVAEh5QAIj8i6laQjDlul/mdQtxu54auNIhrg/Qr8m3nwj0QnijulXhsQkyhhklgYQi4gOmKAJQj5AGhtABQlgACkHAmQlfAylcB+QtEEww3NTQkmDok5ERQmgFpngF7QkWDbntF2QnfFrjYCxQkrD1iTCpQiiC7ghCaQgiCeBaCiQA+BvBQAzQA4AjBGAIQDsAeFxj1QEFitDNjVQAVgWAcgPMAz7gamQAogVAtAAIALABg");
	this.shape_56.setTransform(781.1956,1405.1838,1,1,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#390075").s().p("EgNVArKQoShznUjnQiThJh7hMIhhg/IgLgIICw+UMgzPAaQQizC6jpCoQmyE4lEAAQgnAAglgEQkNgiickWQgbgwgSgsQgQglgLgoQg4jCBKjDQBFi2DCjSQCoi3Eyj4QC+ibHPlfQHiltEdjgQHcl4GdlnQFGkaEhjlIAfgYQRNtgNfk0QFniBFtgzQERgmFugCQBwgBDzgFQFRgJCdAHQD9ALDpA1QIQB3NmHFQGuDhIyFDIBuBAQYbOON2OtQF7GTDaF2QDJFXAsEZQAbCsgiCPQgiCPhcBnQgRATgQAPQhCA+hZAsQm4Dbnin8QieimiRjjQhSiAg5hvMgpqgYbMgB7AknIgNAGQqXFhqlCkQpECNpAAAQnrAAnThmgEgiBAh8QCyB5EKB5QHdDaIUBkQLUCJLnhkQOXh7OHndMAB+glcMAq+AZLIADAHIBwDBQCKDeCXCoQDSDoDMBcQD/BxDnhyQBTgqA8g5QARgQAMgOIABAAQCsjBgzlHQgqkJjGlQQjZlxl3mQQt6uz4KuEIhtg/QoqlAm0jjQnOjxlOiJQk/iCkFg8Qjlg0j7gLQicgHlWAIQjZAGiKABQlrACkOAmQlpAzlkB/QtXEyxENZIgfAZQkrDsk6ERQmcFmnfF6QkRDXnvF3QnGFZi7CXQkuD0ilCxQi/DMhGCvQhKC6A1C2QAKAiAPAmQATAtAXAqQCQD/D0AfQFDApHYlSQCUhrCRiEIB3hyIAHgFMA0jga7g");
	this.shape_57.setTransform(780.9413,1405.1669,1,1,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFB78A").s().p("EgNQAqxQoUhznRjnQiRhIh5hLIhcg8ICz+0Mgz7AanIgzAzQhBA+hIA/QjoDIjaB6QkyCsjqgJQkkgKilklQgagtgSgsQgQgpgKghQhOkPDAkfQCkj2G+lrQCpiKEkjfQFikMDFiXQLwo/I5nuQE5kQEtjvIAfgYQROthNkkzQFlh/FpgxQEIgkFogDQD1gBGGgKQE5gCDrAnQEkAxFZCEQFzCPISEUQGjDaI8FJIBuBAQPSI6LfJdQKiIqGWITQF8HxBbGSQBZGHjJDhQgUAWgLAJQhAA+hWApQjxB4kHh0QjThdjXjvQiaiqiMjiIhujBMgkUgVSIAAgBIl/jgMgB9AlCQu7H7vGB0QkYAhkVAAQnlAAnahng");
	this.shape_58.setTransform(780.8863,1405.2167,1,1,0,0,180);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("EgEVBwTQ9ph6zpoIQzpoGpQuKQqzwfDM4bQBLpGDNqwQB3mOD2qoQBgkIAlhsQA/i5AchvUADigNyAC1gtIQBa2oAv0YQAChKA1g0QA0g0BKgBIABAAUABxAAABCHANfQh5gBjwAAQgXAAgOAPQgMAOAAAUQAAAVAMAOQAOAPAXAAQGCAAC9AJQFBAND8AsQCoAdBzAeQCcAoB2A1QBCAeCPBeQCCBVBRAfQBtApCFAnQhbADiQgDIjrgFQgYABgOAQQgMAPACAWUhJ1gPJgOegCvQg+ZWhlW0UgCrAmsgDVAM/QgfB7hCDBQgpB4hhEKQjpKFhxF4QjEKKhLIiQjLW6JwO5QIeM8SgHdQShHecNB0QbNBwTEleQTElfKjsnQN1wigw84QgRqOiIrtQhMmjiXpjQg8jygShYQh7pmBF8gQAow2BcyzMgu7gJpQDSAcE3A7IIIBhQAXAEARgNQAQgMAFgTQAFgUgIgPQgJgSgWgDQhrgUkHgyQjrgtiGgWQAvgIAfgHQAkgIAAgoQAAgogkgJQkLg7jChHQhBgYhPgvIiIhWMA30ALeQBFAOArA4QAqA4gGBHQhNO+gxQnUgBjAhIACBAJ/QAMA+A+D9QCeJ/BPG5QCNMVAOKzQAmeivDR/QqIMIw/GGQw/GH3lAAQmPAAmzgcg");
	this.shape_59.setTransform(725.294,923.25,1,1,0,0,180);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#390075").s().p("EgEVBwTQ9ph6zpoIQzpoGpQuKQqzwfDM4bQBLpGDNqwQB3mOD2qoQBgkIAlhsQA/i5AchvUADigNyAC1gtIQBa2oAv0YQAChKA1g0QA0g0BKgBIABAAUABxAAABCHANfQh5gBjwAAQgXAAgOAPQgMAOAAAUQAAAVAMAOQAOAPAXAAQGCAAC9AJQFBAND8AsQCoAdBzAeQCcAoB2A1QBCAeCPBeQCCBVBRAfQBtApCFAnQhbADiQgDIjrgFQgYABgOAQQgMAPACAWUhJ1gPJgOegCvQg+ZWhlW0UgCrAmsgDVAM/QgfB7hCDBQgpB4hhEKQjpKFhxF4QjEKKhLIiQjLW6JwO5QIeM8SgHdQShHecNB0QbNBwTEleQTElfKjsnQN1wigw84QgRqOiIrtQhMmjiXpjQg8jygShYQh7pmBF8gQAow2BcyzMgu7gJpQDSAcE3A7IIIBhQAXAEARgNQAQgMAFgTQAFgUgIgPQgJgSgWgDQhrgUkHgyQjrgtiGgWQAvgIAfgHQAkgIAAgoQAAgogkgJQkLg7jChHQhBgYhPgvIiIhWMA30ALeQBFAOArA4QAqA4gGBHQhNO+gxQnUgBjAhIACBAJ/QAMA+A+D9QCeJ/BPG5QCNMVAOKzQAmeivDR/QqIMIw/GGQw/GH3lAAQmPAAmzgcg");
	this.shape_60.setTransform(725.294,923.25,1,1,0,0,180);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#994F2F").s().p("EgEMBtaUg76gD4gRFgczQmwragCvXQgBsAELvAQB+nHD0qjICinEQBOjgAhiDUADogOHAC2gtnQBb20Atz/UABkgACBdeATKIAWAJQBtAqCFAmQhbAEiQgEIjrgEQgXAAgNAPQgMANAAAUQAAAxAwADQEmASGUBHQDnApHNBYQAXAEARgNQAQgLAFgUQAFgTgIgQQgJgRgWgEQhrgTkHgyQjrgtiGgXQAvgHAfgIQAcgFAHgeMArHAI3QhNOvgxQ0UgBkAhnACEAKWQAbCFB+H4QCDIoBJHUQDmXAj3RQQlRXhy4MHUgTgAMighigABQmQAAmvgbg");
	this.shape_61.setTransform(725.0734,923.2458,1,1,0,0,180);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#390075").s().p("EgELBtzQ9Ch4zJn1QzKn1o6toQqWvzDL3xQBMo2DJqgQB0mEDwqZQBekBAqh5QBAi8Aeh1UADkgN8AC2gtWQBb2uAv0cIABgYIAYAAUABSAAAA8WAMSQANAPAWAAIAkAAIe9GVQA6AhAzATQA2AVBbAeUha5gSogGZgBAQg1WlhfW0UgCzArOgDeANlQgfB2hAC8QgrB+hdD/QjvKUhzGBQjIKbhLIyQjLXjKNPmQIzNdTAHwQTAHuc1B4Qb1BzTmltQTmltK9tHQOWxKgr9mQgQqeiKr+QhNmtiapwQg7jrgShXQh/p8BY/yQAvw2BUwtMgq5gI0QASgTgGgdUAlLAHoAGBABQIAWAEIgCAWQhNPEgxQvUgBjAhZACDAKNQAOBDA+D9QCcJzBNGxQCLMEAPKjQAqdzuhRXQpwLrwgF4QwfF42/AAQmSAAmngbg");
	this.shape_62.setTransform(725.2426,923.225,1,1,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A1523F").s().p("EgEMBtaUhOfgFFgE9gv0QhovsGg1gQBxl3DepnQDEocAtiuUADngOHAC2gtoQBb2zAtz/UABggACBdjATKIAWAJQBtAqCEAmQhbAEiPgEIjrgEQgXAAgOAPQgMANAAAUQABAxAwADQElASGUBHQDoApHNBYQAWAEARgNQAQgLAFgUQAGgTgIgQQgJgRgXgEQhqgTkHgyQjrgtiHgXQAvgHAggIQAbgFAHgeMArHAI3QhMOvgyQ0UgBkAhnACFAKWQAaCEB/H5QCCInBKHVQDlXAj3RPQlRXiy3MHUgTgAMighigABQmQAAmvgbg");
	this.shape_63.setTransform(725.0392,923.2458,1,1,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#020202").s().p("EARWA1OQjKheiMisQtOwSrbxWQxt62od2WQgZhDAZhCQAahCA/ghMAhQgQ9QAlgTApgBQAqgCAmAQQAmARAbAeQAcAfAMAoICrIQQDbKGEBKUUAMzAgzAN5AWoQBwC2AaDUQAZDUhBDLQhBDLiQCdQiQCcjEBTQizBLjDAAQjaAAjHhdgEggcghZQIfVWQ7ZdQK/QjMkPdQB9CaDEAxQDDAxC4hNQB5gzBZhhQBZhgAoh+QAoh9gQiDQgPiDhGhxQsX0Jro8UQnExQlUwcg");
	this.shape_64.setTransform(702.5615,2120.6436,1,1,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#390075").s().p("EASZAzBQikhOh1iQQtIwKrVxNQxl6poY2HIgIgVMAh/gRWIAJAdIBUEJQBrFKCBFrQGaSCHTQTIBiDZQISSEIjN7QBKB6AdCHQAeCIgTCMQgQB2gwBtQgxBshOBaQh6COixBLQiWBAilAAQi5AAilhPgEgjjgihQIYV/ReadQLTRINBQBQBtCGCbBKQCbBKCtAAQCaAACNg8QCnhGByiFQBJhVAuhmQAuhlAOhwQASiDgch/Qgbh/hGhyQomuCoRyDIhjjZQm3vVmHw8QjbpiiNnKg");
	this.shape_65.setTransform(702.8528,2120.125,1,1,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFB78A").s().p("EASkAynQiihNhyiMQtbwhrYxVQxP6NoU1+MAhQgQ9IBRD/QBqFICAFrQGbSEHYQfQArBjA4B3QIQSBImOBQBJB3AcCHQAbCCgRCEQgPBygvBpQgwBqhLBXQh2CKitBIQiSA/ieAAQiwgBighKg");
	this.shape_66.setTransform(702.5428,2120.7,1,1,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#390075").s().p("AqjY8QjkgUi5heQi5heiAigQkYlgBEnVQBapqKzsCQESkyFkihQFjiiF1ALQEQAIDmBoQDlBpCTC3QCnDRAqEaQApERhQEyQhRExi+EmQjEEwkgD7Qk6ESlpCYQlnCWlRAAQhEAAg3gFgAhHxJQkTCDjSDqQmvHginGMQjcIKEHFKQBbBxCNA8QBsAtCBAMQEcAZFDh/QFCiAEfj7QDhjDChjxQCcjoBLjuQBLjvgSjOQgSjXh1iSQhfh3ichEQidhEi+gGIghAAQkYAAkRCDg");
	this.shape_67.setTransform(540.4976,2487.14,1,1,0,0,180);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B87BFF").s().p("At2VUQjkhMiNixQiwjcgHkcQgHkVCZlJQAkhNAmhEQC6lSFSl3QDhj6EgiRQEMiGEcgYQESgXDqBVQDtBWCPCzQA+BOApBdQBMCsABDVQABFcjCF1QjHGBleEyQkADfkgCIQkWCDkOAfQhRAJhMAAQizAAibgzg");
	this.shape_68.setTransform(540.5403,2487.1515,1,1,0,0,180);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("EgRUApCQt/jEtmobQk7jElAj2Qi3iMkPjlIhehPQh/hpgcijQgciiBViFMAaOgwGQAYgtAsgaQAsgaAzAAMBKWAAAQA0AAAsAbQAsAbAYAuMAYSAuYQBRCbgkCzQglCyiKB3Qv+N2wIG9QwIG9wCAAQoHAAn+hwgEg8AAJ+QgKAOAGAXQAGAYAUAQIBfBRQEFDbCtCGQEvDpEpC4QMwH7NHC3QQ9DuRPkzQUplvUjxzQAogiAMg0QANgzgVgpMgXegs0MhG3AAAg");
	this.shape_69.setTransform(768.4074,1878.825,1,1,0,0,180);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#AAAABA").s().p("EgUTAlUQtHjksxoeQkci9kpjuImRlNQhKg+gRheQgQheAyhLMAaRgwMMBKWAAAMAYRAuYQAzBigYBzQgZBzhYBMQhxBjiXB6Q1LRI1QEtQn+Bxn6AAQpjAApdikg");
	this.shape_70.setTransform(768.4307,1878.8341,1,1,0,0,180);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#994F2F").s().p("EgcJBfIQw8hbs4laQpMj3mQlfQh8huhbhqIhChVQFgj0BQopQAZitgFi4IgKiUQiHkfiGlvQkOrfAAmTQAAk7hyzGQhyzEAAljQgEjAAAh3QgBjbAPi2QAroTC/nUQIo1IcVvCQPMoENahkQKuhQJGC9QGgCGFDEAQCiCABOBkQLjjlJ3DbQIyDEHQIlQGWHgE+LdQEPJxDBMCQCjKLAnJFQAhHtg3HpQgmFbhpHlQiMKNgWB/Qh0KQEYMuQBXD+B1DwQA6B3ApBFQgoBVhyCIQjkEQlwEDQoEFprSEaQuHFgyZDOQzFDWwWAAQmRAAl2gggEAT0gpVQgMAOAAAUQABAwAwADQElASGUBHQDoApHNBZQAWAEARgNQAQgMAFgTQAGgUgIgPQgJgSgXgEQhqgTkHgyQjrgtiHgXQAvgHAggHQAkgIAAgoQgBgogjgJQkLg8jDhHQhTgeh+hRQiThfg5gcQh2g5ibgrQh1ghingfQkDgxkzgRQiRgIi2gCQhugCjbAAQgXAAgNAQQgMAOAAAUQAAAVAMAOQANAPAXAAQGEAAC9AIQE/AOD9AsQCnAdB0AeQCbAoB2A1QBDAeCOBdQCDBWBRAfQBtApCEAnQhbADiPgDIjrgFQgXAAgOAPg");
	this.shape_71.setTransform(684.9008,617.2711,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:540.5403}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_1},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8,p:{scaleX:1.6872,scaleY:1.6872,rotation:-14.9997,skewX:0,skewY:0,y:647.5194,x:1068.9164}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{scaleX:1.6872,scaleY:1.6872,rotation:-14.9997,skewX:0,skewY:0,x:782.2215,y:743.6811}},{t:this.shape_4,p:{scaleX:1.6872,scaleY:1.6872,rotation:-14.9997,x:1028.9444,y:551.3642}},{t:this.shape_3,p:{rotation:-14.9997,x:733.6373,y:636.4656}},{t:this.shape_2,p:{scaleX:2.5288,scaleY:2.5288,rotation:-14.9988,x:994.734,y:923.979}},{t:this.shape_1,p:{scaleX:2.5288,scaleY:2.5288,rotation:-14.9988,x:1011.8802,y:981.1048}},{t:this.shape,p:{scaleX:2.5288,scaleY:2.5288,rotation:-14.9988,x:994.5461,y:987.0491}}]}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:540.5402}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_1},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8,p:{scaleX:1.6872,scaleY:1.6872,rotation:-14.9997,skewX:0,skewY:0,y:647.5194,x:1068.9164}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{scaleX:1.6872,scaleY:1.6872,rotation:-14.9997,skewX:0,skewY:0,x:782.2215,y:743.6811}},{t:this.shape_4,p:{scaleX:1.6871,scaleY:1.6871,rotation:0,x:1030.421,y:551.081}},{t:this.shape_3,p:{rotation:-29.9977,x:732.9792,y:637.0377}},{t:this.shape_2,p:{scaleX:2.5288,scaleY:2.5288,rotation:-14.9988,x:994.734,y:923.979}},{t:this.shape_1,p:{scaleX:2.5288,scaleY:2.5288,rotation:-14.9988,x:1011.8802,y:981.1048}},{t:this.shape,p:{scaleX:2.5288,scaleY:2.5288,rotation:-14.9988,x:994.5461,y:987.0491}}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:540.5402}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_1},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8,p:{scaleX:1.6872,scaleY:1.6872,rotation:-14.9997,skewX:0,skewY:0,y:647.5194,x:1068.9164}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{scaleX:1.6872,scaleY:1.6872,rotation:-14.9997,skewX:0,skewY:0,x:782.2215,y:743.6811}},{t:this.shape_4,p:{scaleX:1.6871,scaleY:1.6871,rotation:14.9988,x:1030.3966,y:551.0578}},{t:this.shape_3,p:{rotation:-44.9974,x:731.9326,y:638.2063}},{t:this.shape_2,p:{scaleX:2.5288,scaleY:2.5288,rotation:-14.9988,x:994.734,y:923.979}},{t:this.shape_1,p:{scaleX:2.5288,scaleY:2.5288,rotation:-14.9988,x:1011.8802,y:981.1048}},{t:this.shape,p:{scaleX:2.5288,scaleY:2.5288,rotation:-14.9988,x:994.5461,y:987.0491}}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:540.5402}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_1},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8,p:{scaleX:1.7252,scaleY:2.1577,rotation:0,skewX:-11.6756,skewY:-19.1567,y:647.5529,x:1068.9164}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{scaleX:1.7198,scaleY:2.097,rotation:0,skewX:-12.0206,skewY:-18.6336,x:782.2763,y:743.6271}},{t:this.shape_4,p:{scaleX:1.6871,scaleY:1.6871,rotation:14.9988,x:1030.3966,y:551.0578}},{t:this.shape_3,p:{rotation:-44.9974,x:731.9326,y:638.2063}},{t:this.shape_2,p:{scaleX:2.5288,scaleY:2.5288,rotation:-14.9988,x:994.734,y:923.979}},{t:this.shape_1,p:{scaleX:2.5288,scaleY:2.5288,rotation:-14.9988,x:1011.8802,y:981.1048}},{t:this.shape,p:{scaleX:2.5288,scaleY:2.5288,rotation:-14.9988,x:994.5461,y:987.0491}}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:540.5402}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_1},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8,p:{scaleX:2.3482,scaleY:2.1996,rotation:0,skewX:-16.1164,skewY:-13.9524,y:647.5419,x:1068.8934}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{scaleX:2.5235,scaleY:2.1546,rotation:0,skewX:-17.8381,skewY:-12.5809,x:782.2284,y:743.6642}},{t:this.shape_4,p:{scaleX:1.6871,scaleY:1.6871,rotation:14.9988,x:1030.3966,y:551.0578}},{t:this.shape_3,p:{rotation:-44.9974,x:731.9326,y:638.2063}},{t:this.shape_2,p:{scaleX:2.5288,scaleY:2.5288,rotation:-14.9988,x:994.734,y:923.979}},{t:this.shape_1,p:{scaleX:2.5288,scaleY:2.5288,rotation:-14.9988,x:1011.8802,y:981.1048}},{t:this.shape,p:{scaleX:2.5288,scaleY:2.5288,rotation:-14.9988,x:994.5461,y:987.0491}}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:540.5402}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_1},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8,p:{scaleX:2.3482,scaleY:2.1996,rotation:0,skewX:-16.1164,skewY:-13.9524,y:647.5419,x:1068.8934}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{scaleX:2.5235,scaleY:2.1546,rotation:0,skewX:-17.8381,skewY:-12.5809,x:782.2284,y:743.6642}},{t:this.shape_4,p:{scaleX:1.6871,scaleY:1.6871,rotation:14.9988,x:1030.3966,y:539.3578}},{t:this.shape_3,p:{rotation:-44.9974,x:731.9326,y:626.5063}},{t:this.shape_2,p:{scaleX:3.1416,scaleY:3.1416,rotation:-14.9975,x:993.4492,y:923.1091}},{t:this.shape_1,p:{scaleX:3.1416,scaleY:3.1416,rotation:-14.9975,x:1014.7493,y:994.0802}},{t:this.shape,p:{scaleX:3.1416,scaleY:3.1416,rotation:-14.9975,x:993.214,y:1001.4647}}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:540.5402}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_1},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8,p:{scaleX:2.9505,scaleY:2.7638,rotation:0,skewX:-16.1163,skewY:-13.9551,y:647.53,x:1068.8417}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{scaleX:2.9773,scaleY:2.5421,rotation:0,skewX:-17.8394,skewY:-12.5793,x:782.2549,y:743.6543}},{t:this.shape_4,p:{scaleX:1.6871,scaleY:1.6871,rotation:14.9988,x:1030.3966,y:539.3578}},{t:this.shape_3,p:{rotation:-44.9974,x:731.9326,y:626.5063}},{t:this.shape_2,p:{scaleX:3.1416,scaleY:3.1416,rotation:-14.9975,x:993.4492,y:923.1091}},{t:this.shape_1,p:{scaleX:3.1416,scaleY:3.1416,rotation:-14.9975,x:1014.7493,y:994.0802}},{t:this.shape,p:{scaleX:3.1416,scaleY:3.1416,rotation:-14.9975,x:993.214,y:1001.4647}}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:540.5402}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_1},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8,p:{scaleX:2.9505,scaleY:2.7638,rotation:0,skewX:-16.1163,skewY:-13.9551,y:647.53,x:1068.8417}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{scaleX:2.9773,scaleY:2.5421,rotation:0,skewX:-17.8394,skewY:-12.5793,x:782.2549,y:743.6543}},{t:this.shape_4,p:{scaleX:1.6871,scaleY:1.6871,rotation:14.9988,x:1030.3966,y:539.3578}},{t:this.shape_3,p:{rotation:-44.9974,x:731.9326,y:626.5063}},{t:this.shape_2,p:{scaleX:3.1416,scaleY:3.1416,rotation:-14.9975,x:993.4492,y:923.1091}},{t:this.shape_1,p:{scaleX:3.1416,scaleY:3.1416,rotation:-14.9975,x:1014.7493,y:994.0802}},{t:this.shape,p:{scaleX:3.1416,scaleY:3.1416,rotation:-14.9975,x:993.214,y:1001.4647}}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:540.5402}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_1},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8,p:{scaleX:2.9505,scaleY:2.7638,rotation:0,skewX:-16.1163,skewY:-13.9551,y:647.53,x:1068.8417}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{scaleX:2.9773,scaleY:2.5421,rotation:0,skewX:-17.8394,skewY:-12.5793,x:782.2549,y:743.6543}},{t:this.shape_4,p:{scaleX:1.6871,scaleY:1.6871,rotation:14.9988,x:1042.0966,y:559.1078}},{t:this.shape_3,p:{rotation:-44.9974,x:743.6326,y:646.2563}},{t:this.shape_2,p:{scaleX:3.1416,scaleY:3.1416,rotation:-14.9975,x:993.4492,y:923.1091}},{t:this.shape_1,p:{scaleX:3.1416,scaleY:3.1416,rotation:-14.9975,x:1014.7493,y:994.0802}},{t:this.shape,p:{scaleX:3.1416,scaleY:3.1416,rotation:-14.9975,x:993.214,y:1001.4647}}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:540.5402}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_1},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8,p:{scaleX:2.3631,scaleY:2.2138,rotation:0,skewX:-16.1165,skewY:-13.9522,y:647.5937,x:1068.8087}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{scaleX:2.4873,scaleY:2.1238,rotation:0,skewX:-17.8382,skewY:-12.5769,x:782.2549,y:743.6674}},{t:this.shape_4,p:{scaleX:1.6871,scaleY:1.6871,rotation:14.9988,x:1042.0966,y:559.1078}},{t:this.shape_3,p:{rotation:-44.9974,x:743.6326,y:646.2563}},{t:this.shape_2,p:{scaleX:3.1416,scaleY:3.1416,rotation:-14.9975,x:993.4492,y:923.1091}},{t:this.shape_1,p:{scaleX:3.1416,scaleY:3.1416,rotation:-14.9975,x:1014.7493,y:994.0802}},{t:this.shape,p:{scaleX:3.1416,scaleY:3.1416,rotation:-14.9975,x:993.214,y:1001.4647}}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:540.5402}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_1},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8,p:{scaleX:2.3631,scaleY:2.2138,rotation:0,skewX:-16.1165,skewY:-13.9522,y:647.5937,x:1068.8087}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{scaleX:2.4873,scaleY:2.1238,rotation:0,skewX:-17.8382,skewY:-12.5769,x:782.2549,y:743.6674}},{t:this.shape_4,p:{scaleX:1.6871,scaleY:1.6871,rotation:14.9988,x:1042.0966,y:559.1078}},{t:this.shape_3,p:{rotation:-44.9974,x:743.6326,y:646.2563}},{t:this.shape_2,p:{scaleX:2.784,scaleY:2.784,rotation:-14.9978,x:994.0924,y:923.548}},{t:this.shape_1,p:{scaleX:2.784,scaleY:2.784,rotation:-14.9978,x:1012.9686,y:986.4414}},{t:this.shape,p:{scaleX:2.784,scaleY:2.784,rotation:-14.9978,x:993.8843,y:992.9856}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.8,-0.1,1452.8,2647.4);


(lib.text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Heart();
	this.instance.setTransform(136,-154.85,0.3953,0.3953,0,0,0,184.9,153.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AAoCxIAAggQgRARgPAHQgPAIgSAAQgkAAgcgeQgbggAAgwQAAgwAegnQAegoAwABQAdgBATAUIAAgqQAAgngCgIQgCgJgEgDQgEgDgFAAQgHAAgKAEIgEgJIBDgbIALAAIAAECQAAAmACAKQACAIAEADQAEAEAFAAQAHAAALgFIACAJIhCAcgAgxgZQgWAZAAAwQAAAyAVAaQAVAaAbAAQAVAAAVgWIAAhzQgCgQgHgNQgHgOgMgIQgMgGgLgBQgVABgRATg");
	this.shape.setTransform(44.875,-136.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAgohVQgQAQgDAcIBmAAQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPg");
	this.shape_1.setTransform(20.625,-130.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AAuBzIAAgvQgdAfgPAIQgOAIgQAAQgUAAgNgLQgOgLgFgRQgFgRgBgfIAAhjQABgQgEgGQgDgGgHgDQgHgEgSABIAAgJIBPAAIAACUQAAAgALAJQAKAKAQAAQAJAAAOgHQANgGASgTIAAh9QABgTgIgHQgGgHgXAAIAAgJIBNAAIAACGQAAAnACAJQACAIADAEQAFADAFAAQAIAAAJgEIAEAIIhEAcg");
	this.shape_2.setTransform(-3.2,-130.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AALBzIAAgJIAGAAQAPAAAGgEQAGgFADgKQABgDAAgTIAAhbQAAgegIgOQgIgOgTAAQgcAAgcAgIAAB1QgBAWADAGQAEAGAFAEQAGADATAAIAAAJIhvAAIAAgJIAFAAQARAAAGgJQAGgIAAgYIAAhSQAAgpgCgJQgBgJgFgCQgDgEgHAAQgGAAgKAEIgEgJIBEgbIALAAIAAAvQAmgvAjAAQASAAAOAJQANAJAIAVQAFAOAAAfIAABfQAAAUAEAIQACAGAHAEQAFADAQAAIAAAJg");
	this.shape_3.setTransform(-28.15,-131.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("Ag0CuIAAgJQARAAAGgDQAFgEAEgHQACgIAAgUIAAhWQAAgkgBgLQgCgHgEgDQgDgDgHAAQgHAAgKADIgDgJIBCgbIAMAAIAACzQAAAVACAHQAEAHAFAEQAGADAQAAIAAAJgAgPiDQgHgHAAgKQAAgKAHgIQAIgGAJgBQALABAGAGQAIAIgBAKQABAKgIAHQgGAIgLAAQgJAAgIgIg");
	this.shape_4.setTransform(-47.55,-137.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgKCQQgLgGgFgMQgFgLAAgYIAAiWIgjAAIAAgIQANgFAOgNQAOgNALgRQAGgKAJgYIAHAAIAABJIA1AAIAAARIg1AAIAACQQAAAWAHAIQAGAHAKAAQAIAAAHgFQAIgFAEgKIAJAAQgIAYgQAMQgPAMgRAAQgLAAgKgGg");
	this.shape_5.setTransform(-61.275,-134.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AALBzIAAgJIAGAAQAPAAAGgEQAHgFACgKQABgDAAgTIAAhbQAAgegIgOQgIgOgTAAQgcAAgdAgIAAB1QABAWACAGQADAGAGAEQAHADARAAIAAAJIhuAAIAAgJIAFAAQARAAAGgJQAGgIAAgYIAAhSQAAgpgCgJQgCgJgDgCQgEgEgGAAQgIAAgJAEIgEgJIBEgbIAKAAIAAAvQAogvAiAAQATAAANAJQANAJAIAVQAFAOAAAfIAABfQAAAUADAIQADAGAGAEQAGADARAAIAAAJg");
	this.shape_6.setTransform(-80.95,-131.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AhSBOQgZgiAAgqQAAgeAPgeQAQgeAZgPQAYgPAbAAQAzAAAfAnQAaAhAAAqQAAAdgOAgQgPAegZAQQgZAQgeAAQgzAAgegpgAggheQgNAIgIATQgIATAAAeQAAAwATAkQATAjAfAAQAYAAAPgTQAQgUAAgwQAAg6gagiQgRgYgaAAQgNAAgNAIg");
	this.shape_7.setTransform(-106.025,-130.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AhyBwQgiguAAg9QAAgwAXgqQAVgqAogWQAmgXAtAAQAkAAAkARQAKAGAEAAQAGAAAGgFQAGgHADgLIAIAAIAIBxIgIAAQgPgzgcgWQgdgXgnAAQggABgaAQQgbARgPAkQgPAlgBA1QAAAtAPAiQAPAhAdARQAcARAkAAQAhAAAZgNQAYgOAegpIAHAFQgYAsgiAUQghAVguAAQhRAAgtg9g");
	this.shape_8.setTransform(-135.15,-136.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AhBBXQgdgfAAg1QAAg5AegfQAdghAsAAQAlAAAYAZQAZAZAAApIiaAAQAAAxAYAcQAZAdAgAAQAVAAARgMQAQgMALgeIAIAFQgGAigYAbQgZAcglAAQgnAAgdgggAgohVQgQAQgDAcIBmAAQgBgVgEgJQgGgOgMgIQgMgHgMAAQgUAAgQAPg");
	this.shape_9.setTransform(-175.225,-130.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AiUCmIAAgJIANAAQAUgBAJgNQAGgIAAgcIAAjVQAAgfgHgIQgKgLgSAAIgNAAIAAgJICPAAQAnAAAYAHQAlAIATAWQAUAXAAAdQAAAYgQAVQgPATgdAJQAiAHARAQQAYAXAAAgQAAAYgQAXQgPAWgbALQgcALg4AAgAgkAEQgLAAgGACIAACHQAcAHAbAAQAsAAAXgTQAXgVAAgdQAAgTgKgSQgLgSgXgKQgYgKgiAAIgaAAgAg1iPIAACAIAVACIAZABQAjAAASgIQARgIAKgPQAJgRAAgSQAAgdgXgVQgYgUgsAAQgZAAgTAFg");
	this.shape_10.setTransform(-204.175,-136.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AhSBOQgZgiAAgqQAAgeAPgeQAQgeAZgPQAYgPAbAAQAzAAAfAnQAaAhAAAqQAAAdgOAgQgPAegZAQQgZAQgeAAQgzAAgegpgAggheQgNAIgIATQgIATAAAeQAAAwATAkQATAjAfAAQAYAAAPgTQAQgUAAgwQAAg6gagiQgRgYgaAAQgNAAgNAIg");
	this.shape_11.setTransform(-244.925,-130.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AhGCmIAAgJIAMAAQAUAAAKgNQAEgIAAgcIAAj8IgnAAQgXAAgKAEQgNAEgJAOQgJANgBAWIgKAAIAEhOIENAAIAEBOIgJAAQgDgUgEgJQgIgPgMgGQgNgHgVAAIguAAIAAD8QgBAfAHAHQAKALATAAIALAAIAAAJg");
	this.shape_12.setTransform(-272.55,-136.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.9,-215.5,518.9,121.5);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Group_1_1();
	this.instance.setTransform(83.65,31.7,0.1097,0.1097,0,0,0,47.9,55.6);
	this.instance.alpha = 0.3516;

	this.instance_1 = new lib.Group_2();
	this.instance_1.setTransform(73,60,0.1097,0.1097,0,0,0,70.2,168.7);
	this.instance_1.alpha = 0.3516;

	this.instance_2 = new lib.Group_24();
	this.instance_2.setTransform(130.4,38.85,0.1097,0.1097,0,0,0,526.5,331.9);
	this.instance_2.alpha = 0.3516;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362045").s().p("AgLCHQgtgBgsgWQgpgVgeghQg0g6gWhXQgFgUAOgQQAKgLAPAAQAOAAAKALIADADIAtAvQAYAYAUANQApAbAtABQAjgBA7gaQAfgOBKgtIADgCQAOgIAPAFQAOAFAHAOQAHAOgFAPQgXBNhIA4QgiAagpAOQgmANgmAAIgKAAg");
	this.shape.setTransform(119.0013,55.4329,0.1579,0.1419,0,-19.0953,-14.9828);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#362045").s().p("ACqGDQgmgbgbgkQgXgegWgnIglhDIhEiDQgphMgdgvQgohBgngwQhVhsh4g+IgBAAQgLgGgFgMQgGgMADgMQAEgPAMgIQAMgIAOAEQBIATBEAoQBEApA3A4QAzAzAxBEQAlA1AsBMIBJCBQA1BdARAZQAlA1AeAKQAPAGAVgIQASgGAdgWIAHgFQAPgMASAIQANAGAGAOQAFAOgGAOQgTAughAfQgqAmg3AAQg1AAgughg");
	this.shape_1.setTransform(109.1454,34.4858,0.0866,0.0866,-16.9477);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#362045").s().p("AoeBqQgXgSgRgYQgSgagIgbQgPg1AMg4QADgKAGgHQAHgHAJgCQAOgEAMAIQAMAHADAPIADAJQAIAlAPAVQARAXAWAJQArATBNgJQA8gHBUgYQAegJAtgPIBLgbQBdghBBgRQBagYBOgHQBVgIBWAOQBWANBPAhQALAFAGALQAGAMgCANQgDAPgMAJQgMAIgOgDIAAAAQiYggiXAcQhDANhQAaQg4AThcAlQh2AtgmANQhcAdhPAHIgdABQhhAAhDgyg");
	this.shape_2.setTransform(122.3546,35.7863,0.0866,0.0866,-16.9477);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#362045").s().p("APkLdQgPgHgFgRQgFgQAHgQQgDADAAAEIAAgDIgFhFQgFgugGglQgLhNgVhXQgoisg+iNQhCibhbh6QhjiDh4hSQhzhUiYgYQiHgWifAZQiIAWifA9QiCAwidBVQgUALgYgCIgBgBQgmgFgnAOQgnAOgVAaQgVAZgBAeQgBAeAUAoQAQAfAYALQAZALAigKQAjgKAdgdQAdgeANglIAAgCQAIgWASgOIAWgQIAugZQAagOAggOQA4gZBAgUQCJgsBwgKQCPgPB0AXQCMAbBtBMQBvBNBMB/QBBBtAjCQQAeB6AICNQAHB1gICRQAAAQgMAMQgLALgPABQgRAAgMgMQgMgMAAgSQgHkYhAjQQglh3g8haQhChihXg1Qijhlj8AgQhqAPhxAjQhAAVgrARQgjAOgQAIIgZAMIAAAAQgaA4grAsQg4A3hJAXQhVAbhNghQgmgQgigiQgegegSglQgphOAChRQABgtASgrQAQgrAcgfQA2g9BKgaQA5gUA+ACQE1i3EtgxQC6gfCgAeQBXAPBVAlQBUAkBIA2QCMBnBrCcQBjCPA/CwQA5CcAfC7QAOBYAGBYQADAxABAoIgEBZQgBAKgEAIQgHAQgPAGQgHADgHAAQgJAAgIgFg");
	this.shape_3.setTransform(97.5608,26.4113,0.0865,0.0865,-29.5769);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#64C141").s().p("AAeD6QhJgChIguIg5guQADjfghizQCCCoBigVQBRgQAriGQAjCVAMCQQAKBygHAQQgNAUgcATQg1AlhFAAIgHAAg");
	this.shape_4.setTransform(107.1678,28.7885,0.0866,0.0866,-31.9401);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8AEA55").s().p("AJuKOQADjgghizQhAlPjEiZQieh7jsADQivACjEBFQiQAygpAiQgUA8guArQgrAqg1APQg2APgvgSQg0gUgeg3QhKiGBVhiQAkgpA4gVQA3gUA5AIQBCgnBNglQCUhICQgqQG/iEEoC5QDRCDCKDzQBtC+A7D3QAjCVAMCRQAKBygHAQg");
	this.shape_5.setTransform(98.4197,26.9198,0.0867,0.0867,-16.9514);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#362045").s().p("AICMWQhXgOhIg8QhKg9gghZQgSgvABg2QABg3AUgvQAbhBA6g0QAFhUgFhLQgIhlgbhLQgOgmgWggQgKgOgOgNQgPgOgQgMQhAgzhJACQhGAChQA0QhFAshJBNQhyB6h9DFIAAABQgIANgPAEQgPAEgNgIQgPgIgFgRQgFgRAIgPQA3huAthMQA7hiA+hNQBPhjBMg4QBqhQBrgKQA8gHA/ASQA8ARAzAjQAYAQAYAWQAZAWAUAaQAlAwAaA/QAnBhAJCGQAHBwgSB2QgGAkgcAUIAAABQgvAigNAjQgOAiAOApQAOAqAoAiQApAiArAGQAWADARgEQAQgEASgMQAjgZAPgtQAPgrgMgvQgLgugkgoQgbgeAGgqIAAgEQAXiWgGiTQgFikgph7QguiPhchLQgqgjhGgdIgfgMIgggKQgrgNgWgDQh+gZiLAmQh9AjiBBVQhuBIh0B0Qg1A1gxA6IhhB9QgIALgMADQgNAEgNgGQgOgHgGgQQgFgQAHgQIAEgKIAnhFQAYgkAVgfQArg9A4hCQBuiAB6hdQCKhqCUgvQChg2ClAXQARACAYAFIApAJQA8ASATAIQBeAlA7AvQBGA2A1BRQAxBKAdBZQAxCTAGDDQABCdgXCLQAqA7AQBBQAMAvgCAyQgCAygQAtQghBihOA3QgqAeguALQgZAGgcAAQgVAAgVgDg");
	this.shape_6.setTransform(127.5538,29.6597,0.0866,0.0866,-16.9477);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#64C141").s().p("AgLEdQhIgVhAg7QhBg6gXhUQgIgagCgaIgBgTQAHgTA2hLQBKhmBYhaQgdCeBiBIQBHAzCCADQhjB7hlC2IgEAAQgWAAgggKg");
	this.shape_7.setTransform(123.0491,30.6756,0.0867,0.0867,-16.9514);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8AEA55").s().p("AI4LGQhDgCg9grQg9grgdhAQgfhEARhCQAThLBNg4QAPhggIh1QgPjohxhkQh0hniCAVQiiAaiuDZQhjB7hlC1IkmkvQAHgTA2hLQBKhmBYhZQDIjNDShRQEWhrEKCBQD9B6AqGJQAYDfgoDMQA6BAANBNQAMBEgZBAQgYA9gxAlQgvAkg3AAIgGAAg");
	this.shape_8.setTransform(127.557,30.0395,0.0867,0.0867,-16.9514);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#362045").s().p("Ag4A0QgMgOAKgZQAIgYAYgWQAXgWAYgFQAZgGALAOQAMAOgKAZQgIAZgXAWQgYAWgYAFIgMACQgQAAgIgLg");
	this.shape_9.setTransform(115.6537,50.7997,0.0867,0.0867,-16.9514);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#362045").s().p("AgSA+QgQgVgGghQgGgfAIgaQAIgZARgEQAQgEAQAVQAQAVAGAgQAGAggIAaQgIAZgRAEIgFABQgNAAgOgSg");
	this.shape_10.setTransform(114.4311,50.7273,0.0867,0.0867,-16.9514);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#362045").s().p("ApdMzQiOg2hfhWQhghXghhnQgfhkAJiEQAKiVA8iWQCVl3GFkDQDoibEJgoQEKgoDvBVQCBAtBZBLQBZBLAhBaQAoBtgBCOQgCCgg1CfQiGGNmLEHQiYBmitAyQiaAsiiAAQjLAAithCgACqraQkCAcjhCWQlXDliIE/Qg2B/gLB9QgKBwAaBSQAWBGBLBAQBLA/BuAqQC/BJDegSQEGgVDgiWQFNjeB/lPQA1iKAGiIQAGh+gjhgQgWg6hEg1QhFg2higiQiIgxibAAQg3AAg5AGg");
	this.shape_11.setTransform(125.2213,44.3484,0.0867,0.0867,-16.9514);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#362045").s().p("AgYQMQizg8iTinQiujHhHklQhqm6BzmPQAuihBNiCQBFh0BNhBQBCg3BdgKQBdgKBnAlQCrA+CPCqQCpDJBHEnQBpG0hfGGQgmCdhCB+Qg8BxhEA+QguArg8AWQg8AVhEAAQhNAAhTgcgAjotxQhFA6g8BsQhAB0gmCTQhbFgBcF9QA9D9CSCqQB7CPCUAxQBQAbBGgHQBGgIAtgpQAzguAwheQA4hsAiiIQBVlghgmQQg+kAiOitQh3iRiNg0Qg9gWg1AAQhHAAgqAkg");
	this.shape_12.setTransform(106.676,42.6652,0.0867,0.0867,-16.9514);

	this.instance_3 = new lib.Group_17_1();
	this.instance_3.setTransform(124.6,41.85,0.0868,0.0868,-16.9531,0,0,93.8,52.1);
	this.instance_3.alpha = 0.6992;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#362045").s().p("AmuMYQi1gkiChaQiBhZgjhxQgehcAKh7QALiIA6iMQCOlZFtj0QDAh/DXgtQDBgoC7AeQCsAcB9BOQB7BNAkBjQAlBmgDCFQgDCUg1CUQiBFuluD1QjACAjdAoQhhAShfAAQhmAAhkgUg");
	this.shape_13.setTransform(125.2225,44.3577,0.0867,0.0867,-16.9514);

	this.instance_4 = new lib.Group_20_1();
	this.instance_4.setTransform(106.55,41.5,0.0868,0.0868,-16.9531,0,0,56.9,86);
	this.instance_4.alpha = 0.6992;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#362045").s().p("AB9PfQh7gDh9hOQiIhShniTQhyikg1jaQhkmeBol3QAqiaBHh6QBAhvBJg9QBHg8BxAJQBxAKB2BOQB/BWBhCSQBsCkA1DZQBkGdhWFvQgjCUg9B2Qg3Brg/A6QhKBEh0AAIgKAAg");
	this.shape_14.setTransform(106.6788,42.6638,0.0867,0.0867,-16.9514);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#362045").s().p("EgONAs+QgggDhfgPQgZgEgngIIhAgOQkOg9jih0Qjvh5jHjFQjHjFiEj1Qj4nKgxpdQgroSBvo0QBpofEDnjQEHnrGDlnQGWl7Hci9QD1hiEBgsQEEgsEBAPQEEAPD9BHQD8BGDrB6QDoB5DPCvQDMCsCpDWQFLGjCuIdQCpIMgEIuQgBETgqESQgPBpgkClIghCFIhDDJIhYC/IhIB3IgkA8Ih7ClIiJCYIiTCJQmNFMn9C/QklBmjKApQi9AnhAAHQiQANhyglQgWgHgKgVQgMgWAGgYQAHgYATgNIADgCQA0ggBCgVQAhgLBWgVQAogJBPgNQAogIBPgTQBtgZB9goQBjgfCDgwQHzjIFWkeICHh7IB8iHIBwiRIBgidIBOimIA8ivIAfh8QAkigANhcQApj8AAkDQAEoIienpQihn1kxmCQibjEi7ieQi9ifjVhwQjWhwjohBQjqhBjsgNQjsgOjuApQjrAojiBaQjfBZjPCGQjMCFi1CrQlnFRjzHKQjvHDhgH8QhkIJAoH2QAWEIBADtQBFD8ByDRQB1DaCpCsQCsCtDRBtQDJBqD0A7IB0AZIB4ATQCJAaBiAwIAEACQAUAKAJAWQAIAYgJAXQgJAXgWAJQg9AbhHAIQgfADgjAAQgeAAgigCg");
	this.shape_15.setTransform(123.898,37.1754,0.0867,0.0867,-16.9514);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#64C141").s().p("Ay0DQQmUkIjenVQC6DTD1CjQFRDgGZBrQIOCJKvgLQK7gLI7iiQkkCPlHBYQk8BVk9AaIqhAzQqRgXnEkng");
	this.shape_16.setTransform(125.0261,57.3079,0.0867,0.0867,-16.9514);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8AEA55").s().p("EgbhAmbQmUkJjdnVQjknhgOqAQgNo4CYotQCdo+FNndQFHnVHAkvQHIk1H+hZQIYhdIRClQIRClGWGDQGCFwDlILQDhIAAoJIQAoJQidI+Qh4G6lVFlQk2FGnMDgQklCPlHBYQk8BVk9AaIqgAzQqSgXnEkng");
	this.shape_17.setTransform(123.9533,37.242,0.0867,0.0867,-16.9514);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#362045").s().p("AkxfuQhPghg1hIQgug9gUhaQgQhCADhOQABgzALhOQAkkXAFikQALjqgRjSQgNjUgnjkQghjGg+jtQgsithPkFQgGgUAHgTQAIgUASgJQATgKAVAHQAVAHAKAVIAAAAQDWHEBgGhQBnG8gPHsQgDC2ghEeQgHA9AAAmQgBAsAJAnQAIAjAOAUQAOATAYALQAZAMAlAAQAmAAAlgLQATgGAPgHQAPgHAMgJQAfgZAYgeQAxg8AhhlQAehaAKhmIACgPQAEgqAegdQAegdAoAAQAsAAAfAhQAfAhAAAvQANClArCAQAYBIAhAtQAgAsAgAJQAYAEAQgCQAPgCANgJQAggWAZg8QAthoANi2QALiZgNihQgKiLgci1Qgyk7hmk4QjGpel3oSQlxoKnxmAQgjgcgHguQgHguAZgnQAaglArgIQAsgIAjAcQILGVGDIjQGLIvDSKBQBsFKA0FMQAeC7ALCZQAPCygMCtQgJBrgOBJQgTBigjBUQgzB2hTA7Qg2Ang+AHQg3AJg8gPQg6gOgzgoQgrghgigxQghgvgag6QgUAkgXAfQgtA9g3AoQgdAYgkAQQgiAQggAKQhGAUhBAAQhPAAhHgeg");
	this.shape_18.setTransform(142.2048,69.4058,0.0867,0.0867,-16.9359);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#64C141").s().p("AlNmRQFtEbEuFnQkCBxk3Awg");
	this.shape_19.setTransform(134.354,58.0938,0.0868,0.0868,-16.9531);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#64C141").s().p("AF4RiQiPgkhJkNQgWhUgNhhIgIhRIgGA8QgJBJgTBEQg9DciIBdQg0AjhMANQhXAOhFgaQi5hHArk3QBLocg1nuQgqmOiFmjQCHDaBME7QA5DqAeFDQARCxAUEiQAVDUApAyQBnB+CkiDQAzgpAzg/IApg1IAvBmQA8BxBDA3QDUCwDCnZQAAEehDCnQhGCuiAAAQgZAAgcgHg");
	this.shape_20.setTransform(145.7403,76.0235,0.0868,0.0868,-16.9531);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8AEA55").s().p("AIKeSQiPgjhJkNQgWhUgNhiIgIhQIgGA7QgJBJgTBFQg9DbiJBdQgzAkhMAMQhXAPhFgbQi5hHArk2QBLodg1nuQgqmOiFmiIAAgBQg5izhWjgIiWzNQLZI0G6M2QG8M2A9OJQAFBRgBBEQAAEehDCoQhFCtiBAAQgZAAgcgHg");
	this.shape_21.setTransform(142.4617,69.6192,0.0868,0.0868,-16.9531);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#362045").s().p("AhHBqQACgtAcgsQgxgOgdgfQgZgbAIgIQAEgDAiANQAvASAqAIQAZgjAZgvQASgiAEAAQALAAgCAmQgDAsgbAtQAwAOAeAfQAZAbgIAIQgEADgigNQgwgSgpgIQgZAigZAwQgSAigEAAQgLAAACgmg");
	this.shape_22.setTransform(126.2958,78.8287,0.0867,0.0867,-16.9514);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#362045").s().p("Ag2GeQhsghhOhhQhLhcgYh6QgZh8Alh1QATg8AjgzQAlg1AygjQAygiA8gPQA6gNA8AKQBxATBWBaQBPBTAdBxQADANgFAMQgGAMgLAGQgNAHgNgFQgNgFgHgOQgnhWhGg4QhHg4hNgGQhNgGg+AwQg+AxgYBQQgYBOAPBYQAOBYAxBGQAyBKBLAjQBPAnBRgUIAAgBQAMgCALAFQALAFAFAMQAGAOgEAOQgFAPgNAGQgwAag7AEIgXABQgsAAgsgNg");
	this.shape_23.setTransform(126.2732,78.9617,0.0867,0.0867,-16.9514);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#62C340").s().p("AhsEYQh4hGgyiSQgTg2gFg8IAEAHQBNCJB+A0QB8AzBjhAQBeg8ATiDQATiDhAiFQBBBCAhBeIAJBYQAEBpggBbQggBag8A3QgeAbgXAJQgwAUgwAAQhGAAhIgrg");
	this.shape_24.setTransform(126.6093,79.3883,0.0867,0.0867,-16.9514);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#362045").s().p("Ag2GeQhsghhOhhQhLhcgYh6QgZh8Alh1QATg8AjgzQAlg1AygjQAygiA8gPQA6gNA8AKQBxATBWBaQBPBTAdBxQADANgFAMQgGAMgLAGQgNAHgNgFQgNgFgHgOQgnhWhGg4QhHg4hNgGQhNgGg+AwQg+AxgYBQQgYBOAPBYQAOBYAxBGQAyBKBLAjQBPAnBRgUIAAgBQAMgCALAFQALAFAFAMQAGAOgEAOQgFAPgNAGQgwAag7AEIgXABQgsAAgsgNg");
	this.shape_25.setTransform(126.2245,78.8881,0.0866,0.0866,-16.9527);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8AEA55").s().p("AhmFKQh4hGgyiSQgziRAwiJQAwiJB3gvQB1gvB4BGQB4BGAzCSIikHSQgwATgwAAQhGAAhIgqg");
	this.shape_26.setTransform(126.3853,78.9204,0.0866,0.0866,-16.9527);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#362045").s().p("AjEc1QjRgjiNgsQi9g7iIhdQlPjohSnsQh0rDGQuIQCAkgCnkUQBYiSBEhfIASgZIAbgLQFkiaE1hRQH8iGCpCBQAwAlAYA3QAYA4gDBCQgMDiA6FDQAjDCBlGiQCFIhAnEPQBBHEg+FJIgFASQhnElljDCQleC/mgAAQh/AAh8gVgAEc46QlEBOlqCYQj/F1i7G+QlOMaBjJZQBCGQEGCzQBuBLChAxQB5AkDDAhQC8AfDMgZQDDgZCyhIQCxhIB7hpQCChvAvh/QA2kmhAmmQgmj9h+oFQhpmygkjOQg8lVAMj5QABgKgCgDQAAgDgDgCQghgZhQAAQhvAAjLAxg");
	this.shape_27.setTransform(131.2405,71.4908,0.0868,0.0868,-16.9531);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#64C141").s().p("AlNmRQFtEbEuFnQkCBxk3Awg");
	this.shape_28.setTransform(134.354,58.0938,0.0868,0.0868,-16.9531);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#64C141").s().p("AmEF1QjTgii7hBQBSiUBXiEIBFhoIDNhRQD1hdDLg2QKKivgNELQgMDpA5FCQlYBjmEAAQjiAAjZgjg");
	this.shape_29.setTransform(128.4891,60.107,0.0868,0.0868,-16.9531);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#64C141").s().p("Ai0ROQjMgiiGgqQivg3h7hVQkmjNhJm7QgXiKgBiXQB2DXCwCIQDYCoEjAnQDJAaDegqQDbgqC2hgQC9hkBjiGQBsiRgVifQgKhSgfiaIg1kIQg9k+AhhkQATg6CBCJQBnBtClDhQBTFvAZEAQAhFJgwD+Qg0CWiNB/QiHB6jBBTQjBBSjXAcQhmANhiAAQh1AAhygTg");
	this.shape_30.setTransform(132.8428,76.7332,0.0868,0.0868,-16.9531);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8AEA55").s().p("Ai0bHQjMgiiGgqQivg3h7hVQkmjNhJm7QgXiKgBiYQgCmXCenaQB3llDIlwIAZguQBSiUBXiFIBFhoIDNhRQD1hdDLg2QKKivgNELQgMDpA5FDIARBaQAgCmBBERQBZFxASBRQBTFuAZEAQAhFKgwD+Qg0CWiNB/QiHB6jBBTQjBBSjXAcQhmANhiAAQh1AAhygTg");
	this.shape_31.setTransform(131.2407,71.4778,0.0868,0.0868,-16.9531);

	this.instance_5 = new lib.Group_0_1();
	this.instance_5.setTransform(32.15,95.45,0.1097,0.1097,0,0,0,132.2,54.7);
	this.instance_5.alpha = 0.5;

	this.instance_6 = new lib.Group_1_1();
	this.instance_6.setTransform(83.3,32.35,0.1097,0.1097,0,0,0,47.9,55.6);
	this.instance_6.alpha = 0.3516;

	this.instance_7 = new lib.Group_2();
	this.instance_7.setTransform(72.65,60.65,0.1097,0.1097,0,0,0,70.2,168.7);
	this.instance_7.alpha = 0.3516;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#362045").s().p("A0FUUQg0gagTg4QgSg3Aag1QHgu3QJsoQFJkBFejXQC5hxCBhBQA0gaA4ASQA4ASAaA0QAbA0gTA4QgSA4g0AaQhuA5ioBnQlODMk7D1QvrMMnDOAQgTAkgjAVQghAUgoAAQgiAAgdgPg");
	this.shape_32.setTransform(57.9218,106.155,0.1096,0.1096);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#362045").s().p("AWZPSQgcgMgVgYQqOr4ygoIQl0ijl9h4Qh4gmhrgdIhYgWQg5gNgfgyQgfgxANg6QANg5AygfQAxgfA5ANQCOAhDWBCQGPB+GECsQTDIcK3MmQAnAtgFA6QgEA6gtAmQgnAjg1AAQgeAAgcgNg");
	this.shape_33.setTransform(192.4567,89.5739,0.1096,0.1096);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#362045").s().p("AnqF5Qi7iBgPjDQgQjSC+igQC9ihEkgWQEjgVDTCBQDUCCAQDTQAIBpgxBiQgxBjhkBPQhbBJh4AsQh4AsiGAKQgmADglAAQkLAAi6h/gAgWksQjIAPiMBkQiMBlAJB6QAKB6CZBPQCZBODIgPQBogIBcghQBbghBFg2QAwgmAdgsQAqhAgFhAQgJh7iZhOQiAhCihAAQggAAggADg");
	this.shape_34.setTransform(36.4736,106.3347,0.1096,0.1096);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_35.setTransform(36.4742,106.333,0.1096,0.1096);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2F3A55").s().p("AoGGXQjHiLgQjUQgRjjDIitQDJiuE1gXQE0gYDgCNQDhCNARDlQAJBxg2BuQg2BthqBVQhhBMh9AuQh+AviMAKQgoADgmAAQkbAAjGiKgAgTkDQi/AOiABfQh5BYAIBgQAHBiCEBFQCNBKC/gPQBggHBXgfQBYgfA+gyQAqghAZgkQAkg2gEgzQgHhiiFhFQh2g9iYAAQgeAAgfACg");
	this.shape_36.setTransform(36.4479,106.2574,0.1095,0.1095);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FDF5AE").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_37.setTransform(36.4488,106.2601,0.1095,0.1095);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#362045").s().p("Aj+HeQhpgahYgxQhuhAhAhaQg/hagIhqQgIhpAxhjQAxhjBjhPQBchIB4gtQB4gsCGgKQCFgKB9AaQB9AZBmA6QBuA/A/BaQBABaAIBqQAIBpgxBjQgxBjhkBPQhbBJh4AsQh4AsiGAKQgpADghAAQhxAAhpgagAgWksQhoAIhcAhQhbAhhFA2QgwAmgeAsQgqBAAFBAQAGBBAzA4QAkAnA1AfQBLArBhATQBfATBngIQBogIBcghQBcghBEg3QAwgmAegsQApg/gFhBQgEhBg0g4Qgjgng2gfQhAgkhQgUQhPgThYAAQgaAAghADg");
	this.shape_38.setTransform(78.2683,108.2672,0.1096,0.1096);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_39.setTransform(78.2686,108.2669,0.1096,0.1096);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#362045").s().p("AmYG6Qh0g1hHhUQhIhUgRhoQgShpAnhmQAohnBchYQBUhRB0g3QBzg3CEgWQCEgXB/AOQB/AOBqAwQB0A1BHBUQBIBUASBpQAjDPiuCxQiuCykgAwQhRAOhRAAQi1AAiVhDgAgykpQhnARhYAqQhZApg/A8QgsAqgZAvQgkBDALBAQALBAA4A0QAnAkA4AZQBQAkBgAKQBiAKBlgSQDHghCBhyQCChxgUh4QgMhAg4g0Qgngkg4gZQhtgxiJAAQg9AAhEALg");
	this.shape_40.setTransform(213.6482,84.6101,0.1096,0.1096);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_41.setTransform(213.6461,84.6108,0.1096,0.1096);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#362045").s().p("AnkGSQiqhtgeixQgShoAohmQAohnBchYQBUhRB0g3QBzg3CEgWQEfgxDfBuQDfBuAjDQQASBpgoBmQgoBnhcBYQhUBQhzA3Qh0A3iEAXQhTAOhRAAQjsAAiohsgAgykpQhmARhZAqQhYApg/A8QgsAqgaAvQgkBDALBAQAVB5CgBAQCfBADGgiQBmgRBZgpQBYgqA/g8QAtgqAZgvQAkhCgLhAQgRhlh2g/Qhzg/ihAAQhAAAg/ALg");
	this.shape_42.setTransform(173.556,96.5794,0.1096,0.1096);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_43.setTransform(173.556,96.5857,0.1096,0.1096);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#362045").s().p("AmrGnQhyg6hDhXQhDhXgNhqQgajQC2ipQC2iqEigjQEhgkDaB4QDZB4AaDSQANBpgsBlQgtBlhgBTQhYBNh2AxQh2AyiFAQQg8AIg6AAQjPAAijhUgAgjkqQjIAYiHBrQiHBrAPB5QAIBBA2A2QAlAlA3AcQBOAoBgAOQBhAOBmgMQBogNBaglQBaglBCg6QAugoAbgtQAnhBgIhBQgNhqh9hGQh8hFisAAQguAAguAGg");
	this.shape_44.setTransform(125.5038,104.0279,0.1096,0.1096);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_45.setTransform(125.5059,104.034,0.1096,0.1096);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#362045").s().p("Eg/tBCsQuwhEnvi6Qnui5glkqQh/wMCMxkQCm03ICw/QJe0EQHsZQSluSafjQQafjQVfJYQSnIIODRMQL5OkHkTnQGXQfB/QNQAkEqmzErQm0EruDEnQs7EOw4DfQw4DfysCSQtMBosnA1QsjA1rLAAQpSAAn3gkgEgMfg+CQ5RDHxtNtQvXL4pBTRQnpQTieUBQiEQ3B6PjQAHA5BSBAQBhBKC2BBQHPClNvBAQNWA+RAgtQRAgsSdiRQSfiRQqjcQQqjcMukKQNFkSGZkQQChhrBMhgQBBhRgHg6Qhxudldu5QmbxiqDtmQrxv9vlowQx6qE2AAAQmFAAmfAyg");
	this.shape_46.setTransform(122.1492,48.7114,0.1096,0.1096);

	this.instance_8 = new lib.Group_24();
	this.instance_8.setTransform(130.05,39.5,0.1097,0.1097,0,0,0,526.5,331.9);
	this.instance_8.alpha = 0.3516;

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#272C2E").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape_47.setTransform(122.5061,48.712,0.1096,0.1096);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#362045").s().p("Eh4jApnQ2zhqt6kCQyUlThGo+QhGo+QfpkQMhnQVvnHQYOn7fpmhUAfpgGiAjDgETUAjEgETAgRgBUUAgTgBUAZaAB1QWzBqN6ECQSUFTBGI+QBGI+wfJkQshHQ1vHHQ4OH7/pGiUgfpAGhgjDAETQ4wDD3sBkQ3iBj0+AAQxOAAu4hEgEAsPgksQ3iBj4oDBUgi4AESgfaAGfQ/cGe4BH3Q2mHYsYHfQsXHeAuF1QAuF1NzERQNzERXvBuUAZMAB1AgFgBUUAgDgBUAi2gERUAi2gERAfcgGfQfbmfYCn3QWmnYMYneQMXnfgul1Qgul1tzkRQtzkQ3vhvQuqhDxIAAQ01AA3ZBjg");
	this.shape_48.setTransform(123.9412,91.2713,0.1096,0.1096);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7B7B7B").s().p("EheBAMEQgbjhOZkRQLgjbUbjuQOlirRlikQIzhSF4gwIOthlQRqhwO0g8QUuhTL/AiQPAAqAbDhQAOBwhcB7UgIdgEFgrVADFQtiA9vaBkIsrBYQz8Cj1ZDuUgqyAHfgHOAGAQh3hhgOhwg");
	this.shape_49.setTransform(122.328,77.7099,0.1096,0.1096);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2F3A55").s().p("Egu4ALLQmLgzjbhbQjjhegPiBQgYjERJj7QL0itSkizQDNgeDNgdIApgGQDQgdB/gQIBzgNQCVgRClgRIErgeQS3h0MWgRQSIgZAYDHQAQCEjPCWQjICRmECUQsfEwz4DaIAAAAQm6BMnYA6QkQAikNAZIn0ApQonAlnSAAQpIAAnCg6g");
	this.shape_50.setTransform(122.9256,84.3015,0.1096,0.1096);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2F3A55").s().p("EhA4ASRQtUg+njidQn0ihgejxQgbjhOZkRQLgjaUbjvQOlirRlikQIzhSF4gwIOthlQRrhwOzg8QUuhTL/AiQPAAqAbDhQAeDxm+EWQmvEMssEJQstEKwtDfQxSDmzICWQzHCWxqAsQm9ARmWAAQpMAAn5gkg");
	this.shape_51.setTransform(122.3279,80.1663,0.1096,0.1096);

	this.instance_9 = new lib.Group_30();
	this.instance_9.setTransform(126.5,99.1,0.1097,0.1097,0,0,0,749,188.2);
	this.instance_9.alpha = 0.3516;

	this.instance_10 = new lib.Group_31();
	this.instance_10.setTransform(38.35,104.35,0.1097,0.1097,0,0,0,324.1,134.9);
	this.instance_10.alpha = 0.3516;

	this.instance_11 = new lib.Group_32();
	this.instance_11.setTransform(210.1,83.9,0.1097,0.1097,0,0,0,331.4,136.3);
	this.instance_11.alpha = 0.3516;

	this.instance_12 = new lib.Group_33();
	this.instance_12.setTransform(123.4,81.9,0.1097,0.1097,0,0,0,649.1,142.2);
	this.instance_12.alpha = 0.5;

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#BBC5D2").s().p("Eh4YAnaQ4vhzuAkiQugktg3m/Qg2m/M7oDQMfnyXlnuQXknte/mcUAgGgGsAjggEWUAjegEXAgwgBRQfphPYvByQYuBzOAEiQOgEsA3G/QA2G/s7IEQsfHx3kHuQ3lHu+/GcUggGAGrgjgAEXUgjfAEXggvABRQs7AgrxAAQxDAAuohDg");
	this.shape_52.setTransform(123.7987,91.2906,0.1096,0.1096);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#362045").s().p("Eh37AkDQ2uhpt2j/QyPlQhFo2IhQqMQgHg0AggoQAggpA0gGQAzgGApAfQApAgAGA0IBQKMQAuF7N4EVQN3EVX1BuUAZOAB1AgFgBUUAgFgBUAi2gERUAi2gESAfdgGfQfcmeYCn4QWtnaManiQMbnkgvl7IhQqMID4gfIBQKMQBGI3wbJgQsfHN1pHEQ4NH7/pGhUgfnAGhgjEAEUQ4wDC3qBkQ3jBk08AAQxZAAushFg");
	this.shape_53.setTransform(124.3971,102.1329,0.1096,0.1096);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFF66").s().p("Eh4JAgKQ4vhyt/kjQugksg3m/IgjklQA/G4OVEqQOAEiYvBzQYvByfohPUAgwgBRAjfgEXUAjggEWAgGgGsQe/mcXlntQXkntMfnyQMzn/gtm7IAkElQA2G/s7IEQsfHy3kHtQ3lHt+/GdUggGAGrgjgAEWUgjfAEXggvABSQs7AgrxAAQxDAAuphEg");
	this.shape_54.setTransform(124.6926,103.5598,0.1096,0.1096);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFF66").s().p("Eh3yAi+Q4vhzuAkiQufktg3m/IhQqMMFc8gqxIBQKMQA3G/s8IEQsfHy3kHsQ3kHu/AGcUggFAGrgjgAEXUgjfAEWggwABSQs6AgrxAAQxEAAuohDg");
	this.shape_55.setTransform(124.4488,101.5929,0.1096,0.1096);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#362045").s().p("EhI7AeSQuMhyovjfQrfkmg4nKQg4nKKCnNQHolgNXlKQOrlsTQkbQTQkcVXinQVXioTvgWQTwgXPnB+QONByIvDfQLfEmA4HKQA4HKqCHNQnoFgtXFKQurFszPEbQzQEc1YCnQsPBgr5AxQr0Axq+AAQwYAAtMhrgAU46xQrvAwsJBfQ1HCmy+EXQy9EXucFlQtZFLnQFZQnQFaAiEaQAjEXIKDcQIKDcOKB1QO0B7SugOQUMgQWGitQVHimS/kXQS/kXObllQNYlLHQlZQHQlagjkaQgikZoWjgQoWjfuOhzQs9howFAAQqzAArsAwg");
	this.shape_56.setTransform(126.6559,113.4221,0.1096,0.1096);

	this.instance_13 = new lib.Group_40();
	this.instance_13.setTransform(127,115.75,0.1097,0.1097,0,0,0,677.4,134.5);
	this.instance_13.alpha = 0.3516;

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FDFEFF").s().p("Eg80AXSQtpg3qGiOQqOiQlkjaQkJijhSjDQBEjWIgj7QIRjzOMj4QOPj4SMjZQS0jhUpiiQUniiTIhJQSehGOvAVQOuAVI7BtQJOBwB1C/QghDSjZDeQklEppYEqQpREltBEIQtLEMvtDTQwPDaxeCJQ4pDB1hAAQpIAAolgjg");
	this.shape_57.setTransform(126.8202,117.5801,0.1096,0.1096);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#9A9A9A").s().p("EhIpAcGQvIh5opj0Qo8j9grlcQgqlcHul/QHdlxOOlgQOOlgSykXQTdkhVkiqQVkipT9gUQTSgUPIB6QPIB6IpDzQI8D9ArFcQAqFcnuF/QndFxuOFgQuOFgyyEXQzdEh1kCqQ1kCpz9AUQirADilAAQwIAAtChpg");
	this.shape_58.setTransform(126.6586,113.4217,0.1096,0.1096);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#362045").s().p("AgZLtQk9gKkhg8Qkhg7jghlQj6hxiCiUQiDiVAGikQAFimCNiLQCMiLEBhgQDnhVEkgoQEkgoE8ALQFcAMExBEQEoBBDeBuQDdBuB1CLQB5CQgFCdQgGCliMCMQiMCLkBBfQjOBNkBAoQkAAokZAAQg7AAhJgDgApYnRQjpAki6BFQivBBhlBTQhlBTgDBSQgDBRBfBaQBfBaCrBNQDKBbEJA2QEIA2EmAKQElAKELgkQEMgkDQhNQCvhBBlhTQBlhUADhSQADhXhnhdQhmhci6hPQmhivpCgUQhFgCg3AAQkDAAjqAkg");
	this.shape_59.setTransform(86.5083,132.9401,0.1096,0.1096);

	this.instance_14 = new lib.Group_44();
	this.instance_14.setTransform(86.65,133.1,0.1097,0.1097,0,0,0,153.2,62.9);
	this.instance_14.alpha = 0.1992;

	this.instance_15 = new lib.Group_45();
	this.instance_15.setTransform(170.55,122.8,0.1097,0.1097,0,0,0,148.2,73.4);
	this.instance_15.alpha = 0.1992;

	this.instance_16 = new lib.Group_46();
	this.instance_16.setTransform(129.1,132.35,0.1097,0.1097,0,0,0,151.8,65.2);
	this.instance_16.alpha = 0.1992;

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FDFEFF").s().p("AgUJxQp4gWm4jGQjRhdhwh1Qhzh4AEh+QAEh/B8hwQB4hsDWhPQHEioJ3AWQE2AKEaA7QEQA5DQBdQDQBeBwB0QB0B4gEB+QgEB/h8BwQh4BtjWBPQjWBPkTAmQjhAfjwAAQhAAAhBgCg");
	this.shape_60.setTransform(86.5084,132.9382,0.1096,0.1096);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#362045").s().p("AuhNPQkQgfirhlQiphlguigQgtifBaiwQBbiuDXiqQDCiYEJh/QELiAExhXQKmjCIBBNQD1AlCaBhQCfBjArCYQAuCghbCvQhbCvjXCpQjBCYkKCAQkKB/kxBYQjqBDjmAiQjmAjjQAAQh6AAhvgMgAEzo+QjcAgjgBAQkbBRjyBzQj1B1iuCJQiTBzhHBuQhGBuAWBPQAYBPB2A4QB1A5C6AUQDdAZENgeQEMgeEZhRQEahQD0h1QD0h0CviJQCThzBGhuQBGhugWhPQgdhmiug8Qiwg9kNAAQi6AAjOAfg");
	this.shape_61.setTransform(170.3318,122.6484,0.1096,0.1096);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FDFEFF").s().p("AuTLRQjjgZiOhMQiThPgjh6Qgjh7BTiQQBRiMCziMQF8krJgitQJeiuHgA2QDjAZCOBMQCTBPAjB6QAjB7hTCQQhRCMizCMQl7ErpgCtQnRCFmHAAQh3AAhwgNg");
	this.shape_62.setTransform(170.3291,122.663,0.1096,0.1096);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#362045").s().p("AzlJrQlhidggkFQgTidBsiZQBoiVDTiBQDTiBEhhbQEqheFZgqQFYgrE4ATQEvATDsBKQDsBKCJB4QCOB8ATCcQAVClh1CeQh1CfjvCGQjXB4kaBVQkbBVk7AmQjnAdjkAAQoZAAlciagAg8nvQo+BGmQDUQiyBeheBlQhfBlALBXQALBYB0BMQB0BLDDAxQG3BtI+hHQEjgjEDhNQEDhNDBhtQCkhbBWhiQBXhhgKhSQgSiSkehlQkohpmvAAQjMAAjXAbg");
	this.shape_63.setTransform(128.958,132.1676,0.1096,0.1096);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FDFEFF").s().p("Av4I6Qjdg8iAhhQiFhlgPh+QgQh+BpiBQBlh+DHhvQGljsJ0hNQJzhNHRB/QDdA8CABhQCFBlAPB+QAQB+hpCBQhlB+jIBvQmkDsp0BNQjrAdjWAAQlhAAkihPg");
	this.shape_64.setTransform(128.9569,132.1697,0.1096,0.1096);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E2E2E2").s().p("Av4I6Qjdg8iAhhQiFhlgPh+QgQh+BpiBQBlh+DHhvQGljsJ0hNQJzhNHRB/QDdA8CABhQCFBlAPB+QAQB+hpCBQhlB+jIBvQmkDsp0BNQjrAdjWAAQlhAAkihPg");
	this.shape_65.setTransform(128.9569,132.1697,0.1096,0.1096);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(39,44,46,0)").s().p("Am9HkQhcgHg1gSQg2gTgDgcQgNhzAOh/QARiZA2h8QBAiWBuhcQCAhrC4gZQC3gYCVBHQCAA9BgCBQBQBsA0CPQAqB4ANByQADAcgwAgQgvAfhYAfQhXAfh0AaQh4AaiEASQiEARh6AFQgvACgrAAQhBAAg3gEg");
	this.shape_66.setTransform(121.3238,48.7968);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.instance_13},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.instance_8},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_4},{t:this.shape_13},{t:this.instance_3},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,248.6,141.2), null);


(lib.spaceship_black = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Group_0_1();
	this.instance.setTransform(64.6,481.8,1,1,0,0,0,131.8,54.6);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Group_1_1();
	this.instance_1.setTransform(531.1,-93.5,1,1,0,0,0,47.8,55.5);
	this.instance_1.alpha = 0.3516;

	this.instance_2 = new lib.Group_2();
	this.instance_2.setTransform(433.95,164.5,1,1,0,0,0,70.2,168.5);
	this.instance_2.alpha = 0.3516;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362045").s().p("A0FUUQg0gagTg4QgSg3Aag1QHgu3QJsoQFJkBFejXQC5hxCBhBQA0gaA4ASQA4ASAaA0QAbA0gTA4QgSA4g0AaQhuA5ioBnQlODMk7D1QvrMMnDOAQgTAkgjAVQghAUgoAAQgiAAgdgPg");
	this.shape.setTransform(300.4621,580.6068);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#362045").s().p("AWZPSQgcgMgVgYQqOr4ygoIQl0ijl9h4Qh4gmhrgdIhYgWQg5gNgfgyQgfgxANg6QANg5AygfQAxgfA5ANQCOAhDWBCQGPB+GECsQTDIcK3MmQAnAtgFA6QgEA6gtAmQgnAjg1AAQgeAAgcgNg");
	this.shape_1.setTransform(1528.2689,429.283);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#362045").s().p("AnqF5Qi7iBgPjDQgQjSC+igQC9ihEkgWQEjgVDTCBQDUCCAQDTQAIBpgxBiQgxBjhkBPQhbBJh4AsQh4AsiGAKQgmADglAAQkLAAi6h/gAgWksQjIAPiMBkQiMBlAJB6QAKB6CZBPQCZBODIgPQBogIBcghQBbghBFg2QAwgmAdgsQAqhAgFhAQgJh7iZhOQiAhCihAAQggAAggADg");
	this.shape_2.setTransform(104.7189,582.2469);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_3.setTransform(104.7249,582.232);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2F3A55").s().p("AoGGXQjHiLgQjUQgRjjDIitQDJiuE1gXQE0gYDgCNQDhCNARDlQAJBxg2BuQg2BthqBVQhhBMh9AuQh+AviMAKQgoADgmAAQkbAAjGiKgAgTkDQi/AOiABfQh5BYAIBgQAHBiCEBFQCNBKC/gPQBggHBXgfQBYgfA+gyQAqghAZgkQAkg2gEgzQgHhiiFhFQh2g9iYAAQgeAAgfACg");
	this.shape_4.setTransform(104.7168,582.2071);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDF5AE").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_5.setTransform(104.7249,582.232);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#362045").s().p("Aj+HeQhpgahYgxQhuhAhAhaQg/hagIhqQgIhpAxhjQAxhjBjhPQBchIB4gtQB4gsCGgKQCFgKB9AaQB9AZBmA6QBuA/A/BaQBABaAIBqQAIBpgxBjQgxBjhkBPQhbBJh4AsQh4AsiGAKQgpADghAAQhxAAhpgagAgWksQhoAIhcAhQhbAhhFA2QgwAmgeAsQgqBAAFBAQAGBBAzA4QAkAnA1AfQBLArBhATQBfATBngIQBogIBcghQBcghBEg3QAwgmAegsQApg/gFhBQgEhBg0g4Qgjgng2gfQhAgkhQgUQhPgThYAAQgaAAghADg");
	this.shape_6.setTransform(486.15,599.8842);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3300FF").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_7.setTransform(486.1533,599.8815);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#362045").s().p("AmYG6Qh0g1hHhUQhIhUgRhoQgShpAnhmQAohnBchYQBUhRB0g3QBzg3CEgWQCEgXB/AOQB/AOBqAwQB0A1BHBUQBIBUASBpQAjDPiuCxQiuCykgAwQhRAOhRAAQi1AAiVhDgAgykpQhnARhYAqQhZApg/A8QgsAqgZAvQgkBDALBAQALBAA4A0QAnAkA4AZQBQAkBgAKQBiAKBlgSQDHghCBhyQCChxgUh4QgMhAg4g0Qgngkg4gZQhtgxiJAAQg9AAhEALg");
	this.shape_8.setTransform(1721.6683,383.9815);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3300FF").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_9.setTransform(1721.6494,383.9885);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#362045").s().p("AnkGSQiqhtgeixQgShoAohmQAohnBchYQBUhRB0g3QBzg3CEgWQEfgxDfBuQDfBuAjDQQASBpgoBmQgoBnhcBYQhUBQhzA3Qh0A3iEAXQhTAOhRAAQjsAAiohsgAgykpQhmARhZAqQhYApg/A8QgsAqgaAvQgkBDALBAQAVB5CgBAQCfBADGgiQBmgRBZgpQBYgqA/g8QAtgqAZgvQAkhCgLhAQgRhlh2g/Qhzg/ihAAQhAAAg/ALg");
	this.shape_10.setTransform(1355.775,493.2176);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3300FF").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_11.setTransform(1355.775,493.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#362045").s().p("AmrGnQhyg6hDhXQhDhXgNhqQgajQC2ipQC2iqEigjQEhgkDaB4QDZB4AaDSQANBpgsBlQgtBlhgBTQhYBNh2AxQh2AyiFAQQg8AIg6AAQjPAAijhUgAgjkqQjIAYiHBrQiHBrAPB5QAIBBA2A2QAlAlA3AcQBOAoBgAOQBhAOBmgMQBogNBaglQBaglBCg6QAugoAbgtQAnhBgIhBQgNhqh9hGQh8hFisAAQguAAguAGg");
	this.shape_12.setTransform(917.2357,561.1948);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3300FF").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_13.setTransform(917.255,561.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#362045").s().p("Eg/tBCsQuwhEnvi6Qnui5glkqQh/wMCMxkQCm03ICw/QJe0EQHsZQSluSafjQQafjQVfJYQSnIIODRMQL5OkHkTnQGXQfB/QNQAkEqmzErQm0EruDEnQs7EOw4DfQw4DfysCSQtMBosnA1QsjA1rLAAQpSAAn3gkgEgMfg+CQ5RDHxtNtQvXL4pBTRQnpQTieUBQiEQ3B6PjQAHA5BSBAQBhBKC2BBQHPClNvBAQNWA+RAgtQRAgsSdiRQSfiRQqjcQQqjcMukKQNFkSGZkQQChhrBMhgQBBhRgHg6Qhxudldu5QmbxiqDtmQrxv9vlowQx6qE2AAAQmFAAmfAyg");
	this.shape_14.setTransform(886.6207,56.359);

	this.instance_3 = new lib.Group_24();
	this.instance_3.setTransform(957.05,-28.4,1,1,0,0,0,526.3,331.5);
	this.instance_3.alpha = 0.3516;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#272C2E").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape_15.setTransform(886.6836,56.365);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#362045").s().p("Eh4jApnQ2zhqt6kCQyUlThGo+QhGo+QfpkQMhnQVvnHQYOn7fpmhUAfpgGiAjDgETUAjEgETAgRgBUUAgTgBUAZaAB1QWzBqN6ECQSUFTBGI+QBGI+wfJkQshHQ1vHHQ4OH7/pGiUgfpAGhgjDAETQ4wDD3sBkQ3iBj0+AAQxOAAu4hEgEAsPgksQ3iBj4oDBUgi4AESgfaAGfQ/cGe4BH3Q2mHYsYHfQsXHeAuF1QAuF1NzERQNzERXvBuUAZMAB1AgFgBUUAgDgBUAi2gERUAi2gERAfcgGfQfbmfYCn3QWmnYMYneQMXnfgul1Qgul1tzkRQtzkQ3vhvQuqhDxIAAQ01AA3ZBjg");
	this.shape_16.setTransform(902.975,444.7741);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7B7B7B").s().p("EheBAMEQgbjhOZkRQLgjbUbjuQOlirRlikQIzhSF4gwIOthlQRqhwO0g8QUuhTL/AiQPAAqAbDhQAOBwhcB7UgIdgEFgrVADFQtiA9vaBkIsrBYQz8Cj1ZDuUgqyAHfgHOAGAQh3hhgOhwg");
	this.shape_17.setTransform(888.2526,321.0081);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2F3A55").s().p("Egu4ALLQmLgzjbhbQjjhegPiBQgYjERJj7QL0itSkizQDNgeDNgdIApgGQDQgdB/gQIBzgNQCVgRClgRIErgeQS3h0MWgRQSIgZAYDHQAQCEjPCWQjICRmECUQsfEwz4DaIAAAAQm6BMnYA6QkQAikNAZIn0ApQonAlnSAAQpIAAnCg6g");
	this.shape_18.setTransform(893.7067,381.1651);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2F3A55").s().p("EhA4ASRQtUg+njidQn0ihgejxQgbjhOZkRQLgjaUbjvQOlirRlikQIzhSF4gwIOthlQRrhwOzg8QUuhTL/AiQPAAqAbDhQAeDxm+EWQmvEMssEJQstEKwtDfQxSDmzICWQzHCWxqAsQm9ARmWAAQpMAAn5gkg");
	this.shape_19.setTransform(888.2517,343.4265);

	this.instance_4 = new lib.Group_30();
	this.instance_4.setTransform(924.65,515.05,1,1,0,0,0,748.3,187.8);
	this.instance_4.alpha = 0.3516;

	this.instance_5 = new lib.Group_31();
	this.instance_5.setTransform(121.3,562.95,1,1,0,0,0,323.7,134.7);
	this.instance_5.alpha = 0.3516;

	this.instance_6 = new lib.Group_32();
	this.instance_6.setTransform(1687.15,376.6,1,1,0,0,0,331.5,136.1);
	this.instance_6.alpha = 0.3516;

	this.instance_7 = new lib.Group_33();
	this.instance_7.setTransform(896.35,358.4,1,1,0,0,0,648.8,142.3);
	this.instance_7.alpha = 0.5;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BBC5D2").s().p("Eh4YAnaQ4vhzuAkiQugktg3m/Qg2m/M7oDQMfnyXlnuQXknte/mcUAgGgGsAjggEWUAjegEXAgwgBRQfphPYvByQYuBzOAEiQOgEsA3G/QA2G/s7IEQsfHx3kHuQ3lHu+/GcUggGAGrgjgAEXUgjfAEXggvABRQs7AgrxAAQxDAAuohDg");
	this.shape_20.setTransform(901.675,444.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#362045").s().p("Eh37AkDQ2uhpt2j/QyPlQhFo2IhQqMQgHg0AggoQAggpA0gGQAzgGApAfQApAgAGA0IBQKMQAuF7N4EVQN3EVX1BuUAZOAB1AgFgBUUAgFgBUAi2gERUAi2gESAfdgGfQfcmeYCn4QWtnaManiQMbnkgvl7IhQqMID4gfIBQKMQBGI3wbJgQsfHN1pHEQ4NH7/pGhUgfnAGhgjEAEUQ4wDC3qBkQ3jBk08AAQxZAAushFg");
	this.shape_21.setTransform(907.1357,543.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFF66").s().p("Eh4JAgKQ4vhyt/kjQugksg3m/IgjklQA/G4OVEqQOAEiYvBzQYvByfohPUAgwgBRAjfgEXUAjggEWAgGgGsQe/mcXlntQXkntMfnyQMzn/gtm7IAkElQA2G/s7IEQsfHy3kHtQ3lHt+/GdUggGAGrgjgAEWUgjfAEXggvABSQs7AgrxAAQxDAAuphEg");
	this.shape_22.setTransform(909.3684,556.3377);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFF66").s().p("Eh3yAi+Q4vhzuAkiQufktg3m/IhQqMMFc8gqxIBQKMQA3G/s8IEQsfHy3kHsQ3kHu/AGcUggFAGrgjgAEXUgjfAEWggwABSQs6AgrxAAQxEAAuohDg");
	this.shape_23.setTransform(907.1434,538.3877);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#362045").s().p("EhI7AeSQuMhyovjfQrfkmg4nKQg4nKKCnNQHolgNXlKQOrlsTQkbQTQkcVXinQVXioTvgWQTwgXPnB+QONByIvDfQLfEmA4HKQA4HKqCHNQnoFgtXFKQurFszPEbQzQEc1YCnQsPBgr5AxQr0Axq+AAQwYAAtMhrgAU46xQrvAwsJBfQ1HCmy+EXQy9EXucFlQtZFLnQFZQnQFaAiEaQAjEXIKDcQIKDcOKB1QO0B7SugOQUMgQWGitQVHimS/kXQS/kXObllQNYlLHQlZQHQlagjkaQgikZoWjgQoWjfuOhzQs9howFAAQqzAArsAwg");
	this.shape_24.setTransform(927.75,646.929);

	this.instance_8 = new lib.Group_40();
	this.instance_8.setTransform(929.3,666.7,1,1,0,0,0,676.9,134.3);
	this.instance_8.alpha = 0.3516;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FDFEFF").s().p("Eg80AXSQtpg3qGiOQqOiQlkjaQkJijhSjDQBEjWIgj7QIRjzOMj4QOPj4SMjZQS0jhUpiiQUniiTIhJQSehGOvAVQOuAVI7BtQJOBwB1C/QghDSjZDeQklEppYEqQpREltBEIQtLEMvtDTQwPDaxeCJQ4pDB1hAAQpIAAolgjg");
	this.shape_25.setTransform(929.25,684.8765);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9A9A9A").s().p("EhIpAcGQvIh5opj0Qo8j9grlcQgqlcHul/QHdlxOOlgQOOlgSykXQTdkhVkiqQVkipT9gUQTSgUPIB6QPIB6IpDzQI8D9ArFcQAqFcnuF/QndFxuOFgQuOFgyyEXQzdEh1kCqQ1kCpz9AUQirADilAAQwIAAtChpg");
	this.shape_26.setTransform(927.775,646.9255);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#362045").s().p("AgZLtQk9gKkhg8Qkhg7jghlQj6hxiCiUQiDiVAGikQAFimCNiLQCMiLEBhgQDnhVEkgoQEkgoE8ALQFcAMExBEQEoBBDeBuQDdBuB1CLQB5CQgFCdQgGCliMCMQiMCLkBBfQjOBNkBAoQkAAokZAAQg7AAhJgDgApYnRQjpAki6BFQivBBhlBTQhlBTgDBSQgDBRBfBaQBfBaCrBNQDKBbEJA2QEIA2EmAKQElAKELgkQEMgkDQhNQCvhBBlhTQBlhUADhSQADhXhnhdQhmhci6hPQmhivpCgUQhFgCg3AAQkDAAjqAkg");
	this.shape_27.setTransform(561.3508,825.0564);

	this.instance_9 = new lib.Group_44();
	this.instance_9.setTransform(561.35,825.05,1,1,0,0,0,152.5,62.7);
	this.instance_9.alpha = 0.1992;

	this.instance_10 = new lib.Group_45();
	this.instance_10.setTransform(1326.3,731.2,1,1,0,0,0,147.7,73.2);
	this.instance_10.alpha = 0.1992;

	this.instance_11 = new lib.Group_46();
	this.instance_11.setTransform(948.8,818.05,1,1,0,0,0,151.7,64.8);
	this.instance_11.alpha = 0.1992;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FDFEFF").s().p("AgUJxQp4gWm4jGQjRhdhwh1Qhzh4AEh+QAEh/B8hwQB4hsDWhPQHEioJ3AWQE2AKEaA7QEQA5DQBdQDQBeBwB0QB0B4gEB+QgEB/h8BwQh4BtjWBPQjWBPkTAmQjhAfjwAAQhAAAhBgCg");
	this.shape_28.setTransform(561.3517,825.0391);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#362045").s().p("AuhNPQkQgfirhlQiphlguigQgtifBaiwQBbiuDXiqQDCiYEJh/QELiAExhXQKmjCIBBNQD1AlCaBhQCfBjArCYQAuCghbCvQhbCvjXCpQjBCYkKCAQkKB/kxBYQjqBDjmAiQjmAjjQAAQh6AAhvgMgAEzo+QjcAgjgBAQkbBRjyBzQj1B1iuCJQiTBzhHBuQhGBuAWBPQAYBPB2A4QB1A5C6AUQDdAZENgeQEMgeEZhRQEahQD0h1QD0h0CviJQCThzBGhuQBGhugWhPQgdhmiug8Qiwg9kNAAQi6AAjOAfg");
	this.shape_29.setTransform(1326.35,731.1311);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FDFEFF").s().p("AuTLRQjjgZiOhMQiThPgjh6Qgjh7BTiQQBRiMCziMQF8krJgitQJeiuHgA2QDjAZCOBMQCTBPAjB6QAjB7hTCQQhRCMizCMQl7ErpgCtQnRCFmHAAQh3AAhwgNg");
	this.shape_30.setTransform(1326.325,731.2646);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#362045").s().p("AzlJrQlhidggkFQgTidBsiZQBoiVDTiBQDTiBEhhbQEqheFZgqQFYgrE4ATQEvATDsBKQDsBKCJB4QCOB8ATCcQAVClh1CeQh1CfjvCGQjXB4kaBVQkbBVk7AmQjnAdjkAAQoZAAlciagAg8nvQo+BGmQDUQiyBeheBlQhfBlALBXQALBYB0BMQB0BLDDAxQG3BtI+hHQEjgjEDhNQEDhNDBhtQCkhbBWhiQBXhhgKhSQgSiSkehlQkohpmvAAQjMAAjXAbg");
	this.shape_31.setTransform(948.7601,818.0065);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FDFEFF").s().p("Av4I6Qjdg8iAhhQiFhlgPh+QgQh+BpiBQBlh+DHhvQGljsJ0hNQJzhNHRB/QDdA8CABhQCFBlAPB+QAQB+hpCBQhlB+jIBvQmkDsp0BNQjrAdjWAAQlhAAkihPg");
	this.shape_32.setTransform(948.75,818.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E2E2E2").s().p("Av4I6Qjdg8iAhhQiFhlgPh+QgQh+BpiBQBlh+DHhvQGljsJ0hNQJzhNHRB/QDdA8CABhQCFBlAPB+QAQB+hpCBQhlB+jIBvQmkDsp0BNQjrAdjWAAQlhAAkihPg");
	this.shape_33.setTransform(948.75,818.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_34.setTransform(104.7249,582.232);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF0000").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_35.setTransform(486.1533,599.8815);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_36.setTransform(1721.6494,383.9885);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_37.setTransform(1355.775,493.275);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_38.setTransform(917.255,561.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#66FF00").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_39.setTransform(104.7249,582.232);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#66FF00").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_40.setTransform(486.1533,599.8815);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#66FF00").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_41.setTransform(1721.6494,383.9885);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#66FF00").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_42.setTransform(1355.775,493.275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#66FF00").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_43.setTransform(917.255,561.25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#66FFFF").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_44.setTransform(104.7249,582.232);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#66FFFF").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_45.setTransform(486.1533,599.8815);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#66FFFF").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_46.setTransform(1721.6494,383.9885);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#66FFFF").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_47.setTransform(1355.775,493.275);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#66FFFF").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_48.setTransform(917.255,561.25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F7CE48").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_49.setTransform(104.7249,582.232);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F7CE48").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_50.setTransform(486.1533,599.8815);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F7CE48").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_51.setTransform(1721.6494,383.9885);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F7CE48").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_52.setTransform(1355.775,493.275);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F7CE48").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_53.setTransform(917.255,561.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.instance_8},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_3},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.instance_8},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_3},{t:this.shape_14},{t:this.shape_38},{t:this.shape_12},{t:this.shape_37},{t:this.shape_10},{t:this.shape_36},{t:this.shape_8},{t:this.shape_35},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_34},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.instance_8},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_3},{t:this.shape_14},{t:this.shape_43},{t:this.shape_12},{t:this.shape_42},{t:this.shape_10},{t:this.shape_41},{t:this.shape_8},{t:this.shape_40},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_39},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.instance_8},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_3},{t:this.shape_14},{t:this.shape_48},{t:this.shape_12},{t:this.shape_47},{t:this.shape_10},{t:this.shape_46},{t:this.shape_8},{t:this.shape_45},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_44},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.instance_8},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_3},{t:this.shape_14},{t:this.shape_53},{t:this.shape_12},{t:this.shape_52},{t:this.shape_10},{t:this.shape_51},{t:this.shape_8},{t:this.shape_50},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_49},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.1,-374.1,2268.6,1274.4);


(lib.spaceship_alien = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Group_2();
	this.instance.setTransform(433.95,164.5,1,1,0,0,0,70.2,168.5);
	this.instance.alpha = 0.3516;

	this.instance_1 = new lib.Group_1_1();
	this.instance_1.setTransform(531.1,-93.5,1,1,0,0,0,47.8,55.5);
	this.instance_1.alpha = 0.3516;

	this.instance_2 = new lib.Group_24();
	this.instance_2.setTransform(957.05,-28.4,1,1,0,0,0,526.3,331.5);
	this.instance_2.alpha = 0.3516;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272C2E").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape.setTransform(883.0336,47.665);

	this.instance_3 = new lib.Group_0_1();
	this.instance_3.setTransform(64.6,481.8,1,1,0,0,0,131.8,54.6);
	this.instance_3.alpha = 0.5;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#362045").s().p("A0FUUQg0gagTg4QgSg3Aag1QHgu3QJsoQFJkBFejXQC5hxCBhBQA0gaA4ASQA4ASAaA0QAbA0gTA4QgSA4g0AaQhuA5ioBnQlODMk7D1QvrMMnDOAQgTAkgjAVQghAUgoAAQgiAAgdgPg");
	this.shape_1.setTransform(300.4621,580.6068);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#362045").s().p("AWZPSQgcgMgVgYQqOr4ygoIQl0ijl9h4Qh4gmhrgdIhYgWQg5gNgfgyQgfgxANg6QANg5AygfQAxgfA5ANQCOAhDWBCQGPB+GECsQTDIcK3MmQAnAtgFA6QgEA6gtAmQgnAjg1AAQgeAAgcgNg");
	this.shape_2.setTransform(1528.2689,429.283);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#362045").s().p("AnqF5Qi7iBgPjDQgQjSC+igQC9ihEkgWQEjgVDTCBQDUCCAQDTQAIBpgxBiQgxBjhkBPQhbBJh4AsQh4AsiGAKQgmADglAAQkLAAi6h/gAgWksQjIAPiMBkQiMBlAJB6QAKB6CZBPQCZBODIgPQBogIBcghQBbghBFg2QAwgmAdgsQAqhAgFhAQgJh7iZhOQiAhCihAAQggAAggADg");
	this.shape_3.setTransform(104.7189,582.2469);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7CE48").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_4.setTransform(104.7249,582.232);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2F3A55").s().p("AoGGXQjHiLgQjUQgRjjDIitQDJiuE1gXQE0gYDgCNQDhCNARDlQAJBxg2BuQg2BthqBVQhhBMh9AuQh+AviMAKQgoADgmAAQkbAAjGiKgAgTkDQi/AOiABfQh5BYAIBgQAHBiCEBFQCNBKC/gPQBggHBXgfQBYgfA+gyQAqghAZgkQAkg2gEgzQgHhiiFhFQh2g9iYAAQgeAAgfACg");
	this.shape_5.setTransform(104.7168,582.2071);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDF5AE").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_6.setTransform(104.7249,582.232);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#362045").s().p("Aj+HeQhpgahYgxQhuhAhAhaQg/hagIhqQgIhpAxhjQAxhjBjhPQBchIB4gtQB4gsCGgKQCFgKB9AaQB9AZBmA6QBuA/A/BaQBABaAIBqQAIBpgxBjQgxBjhkBPQhbBJh4AsQh4AsiGAKQgpADghAAQhxAAhpgagAgWksQhoAIhcAhQhbAhhFA2QgwAmgeAsQgqBAAFBAQAGBBAzA4QAkAnA1AfQBLArBhATQBfATBngIQBogIBcghQBcghBEg3QAwgmAegsQApg/gFhBQgEhBg0g4Qgjgng2gfQhAgkhQgUQhPgThYAAQgaAAghADg");
	this.shape_7.setTransform(486.15,599.8842);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7CE48").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_8.setTransform(486.1533,599.8815);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#362045").s().p("AmYG6Qh0g1hHhUQhIhUgRhoQgShpAnhmQAohnBchYQBUhRB0g3QBzg3CEgWQCEgXB/AOQB/AOBqAwQB0A1BHBUQBIBUASBpQAjDPiuCxQiuCykgAwQhRAOhRAAQi1AAiVhDgAgykpQhnARhYAqQhZApg/A8QgsAqgZAvQgkBDALBAQALBAA4A0QAnAkA4AZQBQAkBgAKQBiAKBlgSQDHghCBhyQCChxgUh4QgMhAg4g0Qgngkg4gZQhtgxiJAAQg9AAhEALg");
	this.shape_9.setTransform(1721.6683,383.9815);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7CE48").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_10.setTransform(1721.6494,383.9885);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#362045").s().p("AnkGSQiqhtgeixQgShoAohmQAohnBchYQBUhRB0g3QBzg3CEgWQEfgxDfBuQDfBuAjDQQASBpgoBmQgoBnhcBYQhUBQhzA3Qh0A3iEAXQhTAOhRAAQjsAAiohsgAgykpQhmARhZAqQhYApg/A8QgsAqgaAvQgkBDALBAQAVB5CgBAQCfBADGgiQBmgRBZgpQBYgqA/g8QAtgqAZgvQAkhCgLhAQgRhlh2g/Qhzg/ihAAQhAAAg/ALg");
	this.shape_11.setTransform(1355.775,493.2176);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7CE48").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_12.setTransform(1355.775,493.275);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#362045").s().p("AmrGnQhyg6hDhXQhDhXgNhqQgajQC2ipQC2iqEigjQEhgkDaB4QDZB4AaDSQANBpgsBlQgtBlhgBTQhYBNh2AxQh2AyiFAQQg8AIg6AAQjPAAijhUgAgjkqQjIAYiHBrQiHBrAPB5QAIBBA2A2QAlAlA3AcQBOAoBgAOQBhAOBmgMQBogNBaglQBaglBCg6QAugoAbgtQAnhBgIhBQgNhqh9hGQh8hFisAAQguAAguAGg");
	this.shape_13.setTransform(917.2357,561.1948);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F7CE48").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_14.setTransform(917.255,561.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#362045").s().p("AgLCHQgtgBgsgWQgpgVgeghQg0g6gWhXQgFgUAOgQQAKgLAPAAQAOAAAKALIADADIAtAvQAYAYAUANQApAbAtABQAjgBA7gaQAfgOBKgtIADgCQAOgIAPAFQAOAFAHAOQAHAOgFAPQgXBNhIA4QgiAagpAOQgmANgmAAIgKAAg");
	this.shape_15.setTransform(871.4442,109.9069,0.791,0.791,-16.9549);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#362045").s().p("ACqGDQgmgbgbgkQgXgegWgnIglhDIhEiDQgphMgdgvQgohBgngwQhVhsh4g+IgBAAQgLgGgFgMQgGgMADgMQAEgPAMgIQAMgIAOAEQBIATBEAoQBEApA3A4QAzAzAxBEQAlA1AsBMIBJCBQA1BdARAZQAlA1AeAKQAPAGAVgIQASgGAdgWIAHgFQAPgMASAIQANAGAGAOQAFAOgGAOQgTAughAfQgqAmg3AAQg1AAgughg");
	this.shape_16.setTransform(780.9902,-82.0386,0.791,0.791,-16.9549);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#362045").s().p("AoeBqQgXgSgRgYQgSgagIgbQgPg1AMg4QADgKAGgHQAHgHAJgCQAOgEAMAIQAMAHADAPIADAJQAIAlAPAVQARAXAWAJQArATBNgJQA8gHBUgYQAegJAtgPIBLgbQBdghBBgRQBagYBOgHQBVgIBWAOQBWANBPAhQALAFAGALQAGAMgCANQgDAPgMAJQgMAIgOgDIAAAAQiYggiXAcQhDANhQAaQg4AThcAlQh2AtgmANQhcAdhPAHIgdABQhhAAhDgyg");
	this.shape_17.setTransform(901.1394,-70.6364,0.791,0.791,-16.9549);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#362045").s().p("APkLdQgPgHgFgRQgFgQAHgQQgDADAAAEIAAgDIgFhFQgFgugGglQgLhNgVhXQgoisg+iNQhCibhbh6QhjiDh4hSQhzhUiYgYQiHgWifAZQiIAWifA9QiCAwidBVQgUALgYgCIgBgBQgmgFgnAOQgnAOgVAaQgVAZgBAeQgBAeAUAoQAQAfAYALQAZALAigKQAjgKAdgdQAdgeANglIAAgCQAIgWASgOIAWgQIAugZQAagOAggOQA4gZBAgUQCJgsBwgKQCPgPB0AXQCMAbBtBMQBvBNBMB/QBBBtAjCQQAeB6AICNQAHB1gICRQAAAQgMAMQgLALgPABQgRAAgMgMQgMgMAAgSQgHkYhAjQQglh3g8haQhChihXg1Qijhlj8AgQhqAPhxAjQhAAVgrARQgjAOgQAIIgZAMIAAAAQgaA4grAsQg4A3hJAXQhVAbhNghQgmgQgigiQgegegSglQgphOAChRQABgtASgrQAQgrAcgfQA2g9BKgaQA5gUA+ACQE1i3EtgxQC6gfCgAeQBXAPBVAlQBUAkBIA2QCMBnBrCcQBjCPA/CwQA5CcAfC7QAOBYAGBYQADAxABAoIgEBZQgBAKgEAIQgHAQgPAGQgHADgHAAQgJAAgIgFg");
	this.shape_18.setTransform(680.6413,-155.4008,0.791,0.791,-16.9556);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#64C141").s().p("AAeD6QhJgChIguIg5guQADjfghizQCCCoBigVQBRgQAriGQAjCVAMCQQAKBygHAQQgNAUgcATQg1AlhFAAIgHAAg");
	this.shape_19.setTransform(753.7533,-133.1411,0.791,0.791,-16.9549);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8AEA55").s().p("AJuKOQADjgghizQhAlPjEiZQieh7jsADQivACjEBFQiQAygpAiQgUA8guArQgrAqg1APQg2APgvgSQg0gUgeg3QhKiGBVhiQAkgpA4gVQA3gUA5AIQBCgnBNglQCUhICQgqQG/iEEoC5QDRCDCKDzQBtC+A7D3QAjCVAMCRQAKBygHAQg");
	this.shape_20.setTransform(682.1995,-154.0362,0.791,0.791,-16.9556);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8AEA55").s().p("AJuKOQADjgghizQhAlPjEiZQieh7jsADQivACjEBFQiQAygpAiQgUA8guArQgrAqg1APQg2APgvgSQg0gUgeg3QhKiGBVhiQAkgpA4gVQA3gUA5AIQBCgnBNglQCUhICQgqQG/iEEoC5QDRCDCKDzQBtC+A7D3QAjCVAMCRQAKBygHAQg");
	this.shape_21.setTransform(682.0965,-152.4859,0.791,0.791,-16.9549);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#362045").s().p("AICMWQhXgOhIg8QhKg9gghZQgSgvABg2QABg3AUgvQAbhBA6g0QAFhUgFhLQgIhlgbhLQgOgmgWggQgKgOgOgNQgPgOgQgMQhAgzhJACQhGAChQA0QhFAshJBNQhyB6h9DFIAAABQgIANgPAEQgPAEgNgIQgPgIgFgRQgFgRAIgPQA3huAthMQA7hiA+hNQBPhjBMg4QBqhQBrgKQA8gHA/ASQA8ARAzAjQAYAQAYAWQAZAWAUAaQAlAwAaA/QAnBhAJCGQAHBwgSB2QgGAkgcAUIAAABQgvAigNAjQgOAiAOApQAOAqAoAiQApAiArAGQAWADARgEQAQgEASgMQAjgZAPgtQAPgrgMgvQgLgugkgoQgbgeAGgqIAAgEQAXiWgGiTQgFikgph7QguiPhchLQgqgjhGgdIgfgMIgggKQgrgNgWgDQh+gZiLAmQh9AjiBBVQhuBIh0B0Qg1A1gxA6IhhB9QgIALgMADQgNAEgNgGQgOgHgGgQQgFgQAHgQIAEgKIAnhFQAYgkAVgfQArg9A4hCQBuiAB6hdQCKhqCUgvQChg2ClAXQARACAYAFIApAJQA8ASATAIQBeAlA7AvQBGA2A1BRQAxBKAdBZQAxCTAGDDQABCdgXCLQAqA7AQBBQAMAvgCAyQgCAygQAtQghBihOA3QgqAeguALQgZAGgcAAQgVAAgVgDg");
	this.shape_22.setTransform(949.5164,-124.2976,0.791,0.791,-16.9549);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#64C141").s().p("AgLEdQhIgVhAg7QhBg6gXhUQgIgagCgaIgBgTQAHgTA2hLQBKhmBYhaQgdCeBiBIQBHAzCCADQhjB7hlC2IgEAAQgWAAgggKg");
	this.shape_23.setTransform(906.8857,-118.2208,0.791,0.791,-16.9549);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8AEA55").s().p("AI4LGQhDgCg9grQg9grgdhAQgfhEARhCQAThLBNg4QAPhggIh1QgPjohxhkQh0hniCAVQiiAaiuDZQhjB7hlC1IkmkvQAHgTA2hLQBKhmBYhZQDIjNDShRQEWhrEKCBQD9B6AqGJQAYDfgoDMQA6BAANBNQAMBEgZBAQgYA9gxAlQgvAkg3AAIgGAAg");
	this.shape_24.setTransform(948.0283,-124.0287,0.791,0.791,-16.9549);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#362045").s().p("Ag4A0QgMgOAKgZQAIgYAYgWQAXgWAYgFQAZgGALAOQAMAOgKAZQgIAZgXAWQgYAWgYAFIgMACQgQAAgIgLg");
	this.shape_25.setTransform(839.4007,65.4521,0.791,0.791,-16.9549);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#362045").s().p("AgSA+QgQgVgGghQgGgfAIgaQAIgZARgEQAQgEAQAVQAQAVAGAgQAGAggIAaQgIAZgRAEIgFABQgNAAgOgSg");
	this.shape_26.setTransform(828.2425,64.7915,0.791,0.791,-16.9549);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#362045").s().p("ApdMzQiOg2hfhWQhghXghhnQgfhkAJiEQAKiVA8iWQCVl3GFkDQDoibEJgoQEKgoDvBVQCBAtBZBLQBZBLAhBaQAoBtgBCOQgCCgg1CfQiGGNmLEHQiYBmitAyQiaAsiiAAQjLAAithCgACqraQkCAcjhCWQlXDliIE/Qg2B/gLB9QgKBwAaBSQAWBGBLBAQBLA/BuAqQC/BJDegSQEGgVDgiWQFNjeB/lPQA1iKAGiIQAGh+gjhgQgWg6hEg1QhFg2higiQiIgxibAAQg3AAg5AGg");
	this.shape_27.setTransform(926.7188,6.5668,0.791,0.791,-16.9549);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#362045").s().p("AgYQMQizg8iTinQiujHhHklQhqm6BzmPQAuihBNiCQBFh0BNhBQBCg3BdgKQBdgKBnAlQCrA+CPCqQCpDJBHEnQBpG0hfGGQgmCdhCB+Qg8BxhEA+QguArg8AWQg8AVhEAAQhNAAhTgcgAjotxQhFA6g8BsQhAB0gmCTQhbFgBcF9QA9D9CSCqQB7CPCUAxQBQAbBGgHQBGgIAtgpQAzguAwheQA4hsAiiIQBVlghgmQQg+kAiOitQh3iRiNg0Qg9gWg1AAQhHAAgqAkg");
	this.shape_28.setTransform(757.4586,-8.7856,0.791,0.791,-16.9549);

	this.instance_4 = new lib.Group_17_1();
	this.instance_4.setTransform(920.4,-16.25,0.7912,0.7912,-16.9562,0,0,93,51.7);
	this.instance_4.alpha = 0.6992;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#362045").s().p("AmuMYQi1gkiChaQiBhZgjhxQgehcAKh7QALiIA6iMQCOlZFtj0QDAh/DXgtQDBgoC7AeQCsAcB9BOQB7BNAkBjQAlBmgDCFQgDCUg1CUQiBFuluD1QjACAjdAoQhhAShfAAQhmAAhkgUg");
	this.shape_29.setTransform(926.7296,6.6512,0.791,0.791,-16.9549);

	this.instance_5 = new lib.Group_20_1();
	this.instance_5.setTransform(756.15,-19.4,0.7912,0.7912,-16.9562,0,0,56.4,85.7);
	this.instance_5.alpha = 0.6992;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#362045").s().p("AB9PfQh7gDh9hOQiIhShniTQhyikg1jaQhkmeBol3QAqiaBHh6QBAhvBJg9QBHg8BxAJQBxAKB2BOQB/BWBhCSQBsCkA1DZQBkGdhWFvQgjCUg9B2Qg3Brg/A6QhKBEh0AAIgKAAg");
	this.shape_30.setTransform(756.9841,-2.1984,0.791,0.791,-16.9549);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#362045").s().p("EgONAs+QgggDhfgPQgZgEgngIIhAgOQkOg9jih0Qjvh5jHjFQjHjFiEj1Qj4nKgxpdQgroSBvo0QBpofEDnjQEHnrGDlnQGWl7Hci9QD1hiEBgsQEEgsEBAPQEEAPD9BHQD8BGDrB6QDoB5DPCvQDMCsCpDWQFLGjCuIdQCpIMgEIuQgBETgqESQgPBpgkClIghCFIhDDJIhYC/IhIB3IgkA8Ih7ClIiJCYIiTCJQmNFMn9C/QklBmjKApQi9AnhAAHQiQANhyglQgWgHgKgVQgMgWAGgYQAHgYATgNIADgCQA0ggBCgVQAhgLBWgVQAogJBPgNQAogIBPgTQBtgZB9goQBjgfCDgwQHzjIFWkeICHh7IB8iHIBwiRIBgidIBOimIA8ivIAfh8QAkigANhcQApj8AAkDQAEoIienpQihn1kxmCQibjEi7ieQi9ifjVhwQjWhwjohBQjqhBjsgNQjsgOjuApQjrAojiBaQjfBZjPCGQjMCFi1CrQlnFRjzHKQjvHDhgH8QhkIJAoH2QAWEIBADtQBFD8ByDRQB1DaCpCsQCsCtDRBtQDJBqD0A7IB0AZIB4ATQCJAaBiAwIAEACQAUAKAJAWQAIAYgJAXQgJAXgWAJQg9AbhHAIQgfADgjAAQgeAAgigCg");
	this.shape_31.setTransform(914.6372,-58.8989,0.791,0.791,-16.9549);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#64C141").s().p("Ay0DQQmUkIjenVQC6DTD1CjQFRDgGZBrQIOCJKvgLQK7gLI7iiQkkCPlHBYQk8BVk9AaIqhAzQqRgXnEkng");
	this.shape_32.setTransform(924.9442,124.8455,0.791,0.791,-16.9549);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8AEA55").s().p("EgbhAmbQmUkJjdnVQjknhgOqAQgNo4CYotQCdo+FNndQFHnVHAkvQHIk1H+hZQIYhdIRClQIRClGWGDQGCFwDlILQDhIAAoJIQAoJQidI+Qh4G6lVFlQk2FGnMDgQklCPlHBYQk8BVk9AaIqgAzQqSgXnEkng");
	this.shape_33.setTransform(915.1417,-58.2911,0.791,0.791,-16.9549);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#362045").s().p("AkxfuQhPghg1hIQgug9gUhaQgQhCADhOQABgzALhOQAkkXAFikQALjqgRjSQgNjUgnjkQghjGg+jtQgsithPkFQgGgUAHgTQAIgUASgJQATgKAVAHQAVAHAKAVIAAAAQDWHEBgGhQBnG8gPHsQgDC2ghEeQgHA9AAAmQgBAsAJAnQAIAjAOAUQAOATAYALQAZAMAlAAQAmAAAlgLQATgGAPgHQAPgHAMgJQAfgZAYgeQAxg8AhhlQAehaAKhmIACgPQAEgqAegdQAegdAoAAQAsAAAfAhQAfAhAAAvQANClArCAQAYBIAhAtQAgAsAgAJQAYAEAQgCQAPgCANgJQAggWAZg8QAthoANi2QALiZgNihQgKiLgci1Qgyk7hmk4QjGpel3oSQlxoKnxmAQgjgcgHguQgHguAZgnQAaglArgIQAsgIAjAcQILGVGDIjQGLIvDSKBQBsFKA0FMQAeC7ALCZQAPCygMCtQgJBrgOBJQgTBigjBUQgzB2hTA7Qg2Ang+AHQg3AJg8gPQg6gOgzgoQgrghgigxQghgvgag6QgUAkgXAfQgtA9g3AoQgdAYgkAQQgiAQggAKQhGAUhBAAQhPAAhHgeg");
	this.shape_34.setTransform(1083.6418,236.8861,0.7912,0.7912,-16.9562);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#64C141").s().p("AlNmRQFtEbEuFnQkCBxk3Awg");
	this.shape_35.setTransform(1009.6798,131.7132,0.7912,0.7912,-16.9562);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#64C141").s().p("AF4RiQiPgkhJkNQgWhUgNhhIgIhRIgGA8QgJBJgTBEQg9DciIBdQg0AjhMANQhXAOhFgaQi5hHArk3QBLocg1nuQgqmOiFmjQCHDaBME7QA5DqAeFDQARCxAUEiQAVDUApAyQBnB+CkiDQAzgpAzg/IApg1IAvBmQA8BxBDA3QDUCwDCnZQAAEehDCnQhGCuiAAAQgZAAgcgHg");
	this.shape_36.setTransform(1113.5138,295.1973,0.7912,0.7912,-16.9562);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8AEA55").s().p("AIKeSQiPgjhJkNQgWhUgNhiIgIhQIgGA7QgJBJgTBFQg9DbiJBdQgzAkhMAMQhXAPhFgbQi5hHArk2QBLodg1nuQgqmOiFmiIAAgBQg5izhWjgIiWzNQLZI0G6M2QG8M2A9OJQAFBRgBBEQAAEehDCoQhFCtiBAAQgZAAgcgHg");
	this.shape_37.setTransform(1083.615,236.8019,0.7912,0.7912,-16.9562);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#362045").s().p("AhHBqQACgtAcgsQgxgOgdgfQgZgbAIgIQAEgDAiANQAvASAqAIQAZgjAZgvQASgiAEAAQALAAgCAmQgDAsgbAtQAwAOAeAfQAZAbgIAIQgEADgigNQgwgSgpgIQgZAigZAwQgSAigEAAQgLAAACgmg");
	this.shape_38.setTransform(936.5443,321.2608,0.791,0.791,-16.9549);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#362045").s().p("Ag2GeQhsghhOhhQhLhcgYh6QgZh8Alh1QATg8AjgzQAlg1AygjQAygiA8gPQA6gNA8AKQBxATBWBaQBPBTAdBxQADANgFAMQgGAMgLAGQgNAHgNgFQgNgFgHgOQgnhWhGg4QhHg4hNgGQhNgGg+AwQg+AxgYBQQgYBOAPBYQAOBYAxBGQAyBKBLAjQBPAnBRgUIAAgBQAMgCALAFQALAFAFAMQAGAOgEAOQgFAPgNAGQgwAag7AEIgXABQgsAAgsgNg");
	this.shape_39.setTransform(936.3389,322.4745,0.791,0.791,-16.9549);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#62C340").s().p("AhsEYQh4hGgyiSQgTg2gFg8IAEAHQBNCJB+A0QB8AzBjhAQBeg8ATiDQATiDhAiFQBBBCAhBeIAJBYQAEBpggBbQggBag8A3QgeAbgXAJQgwAUgwAAQhGAAhIgrg");
	this.shape_40.setTransform(939.4063,326.3678,0.791,0.791,-16.9549);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#362045").s().p("Ag2GeQhsghhOhhQhLhcgYh6QgZh8Alh1QATg8AjgzQAlg1AygjQAygiA8gPQA6gNA8AKQBxATBWBaQBPBTAdBxQADANgFAMQgGAMgLAGQgNAHgNgFQgNgFgHgOQgnhWhGg4QhHg4hNgGQhNgGg+AwQg+AxgYBQQgYBOAPBYQAOBYAxBGQAyBKBLAjQBPAnBRgUIAAgBQAMgCALAFQALAFAFAMQAGAOgEAOQgFAPgNAGQgwAag7AEIgXABQgsAAgsgNg");
	this.shape_41.setTransform(936.2676,322.3699,0.7908,0.7908,-16.955);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#8AEA55").s().p("AhmFKQh4hGgyiSQgziRAwiJQAwiJB3gvQB1gvB4BGQB4BGAzCSIikHSQgwATgwAAQhGAAhIgqg");
	this.shape_42.setTransform(937.7368,322.6653,0.7908,0.7908,-16.955);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#362045").s().p("AjEc1QjRgjiNgsQi9g7iIhdQlPjohSnsQh0rDGQuIQCAkgCnkUQBYiSBEhfIASgZIAbgLQFkiaE1hRQH8iGCpCBQAwAlAYA3QAYA4gDBCQgMDiA6FDQAjDCBlGiQCFIhAnEPQBBHEg+FJIgFASQhnElljDCQleC/mgAAQh/AAh8gVgAEc46QlEBOlqCYQj/F1i7G+QlOMaBjJZQBCGQEGCzQBuBLChAxQB5AkDDAhQC8AfDMgZQDDgZCyhIQCxhIB7hpQCChvAvh/QA2kmhAmmQgmj9h+oFQhpmygkjOQg8lVAMj5QABgKgCgDQAAgDgDgCQghgZhQAAQhvAAjLAxg");
	this.shape_43.setTransform(981.297,253.8741,0.7912,0.7912,-16.9562);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#64C141").s().p("AlNmRQFtEbEuFnQkCBxk3Awg");
	this.shape_44.setTransform(1009.6798,131.7132,0.7912,0.7912,-16.9562);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#64C141").s().p("AmEF1QjTgii7hBQBSiUBXiEIBFhoIDNhRQD1hdDLg2QKKivgNELQgMDpA5FCQlYBjmEAAQjiAAjZgjg");
	this.shape_45.setTransform(956.2028,150.0739,0.7912,0.7912,-16.9562);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#64C141").s().p("Ai0ROQjMgiiGgqQivg3h7hVQkmjNhJm7QgXiKgBiXQB2DXCwCIQDYCoEjAnQDJAaDegqQDbgqC2hgQC9hkBjiGQBsiRgVifQgKhSgfiaIg1kIQg9k+AhhkQATg6CBCJQBnBtClDhQBTFvAZEAQAhFJgwD+Qg0CWiNB/QiHB6jBBTQjBBSjXAcQhmANhiAAQh1AAhygTg");
	this.shape_46.setTransform(995.9097,301.6752,0.7912,0.7912,-16.9562);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#8AEA55").s().p("Ai0bHQjMgiiGgqQivg3h7hVQkmjNhJm7QgXiKgBiYQgCmXCenaQB3llDIlwIAZguQBSiUBXiFIBFhoIDNhRQD1hdDLg2QKKivgNELQgMDpA5FDIARBaQAgCmBBERQBZFxASBRQBTFuAZEAQAhFKgwD+Qg0CWiNB/QiHB6jBBTQjBBSjXAcQhmANhiAAQh1AAhygTg");
	this.shape_47.setTransform(981.298,253.755,0.7912,0.7912,-16.9562);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#362045").s().p("Eg/tBCsQuwhEnvi6Qnui5glkqQh/wMCMxkQCm03ICw/QJe0EQHsZQSluSafjQQafjQVfJYQSnIIODRMQL5OkHkTnQGXQfB/QNQAkEqmzErQm0EruDEnQs7EOw4DfQw4DfysCSQtMBosnA1QsjA1rLAAQpSAAn3gkgEgMfg+CQ5RDHxtNtQvXL4pBTRQnpQTieUBQiEQ3B6PjQAHA5BSBAQBhBKC2BBQHPClNvBAQNWA+RAgtQRAgsSdiRQSfiRQqjcQQqjcMukKQNFkSGZkQQChhrBMhgQBBhRgHg6Qhxudldu5QmbxiqDtmQrxv9vlowQx6qE2AAAQmFAAmfAyg");
	this.shape_48.setTransform(886.6207,56.359);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#272C2E").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape_49.setTransform(889.9336,70.515);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#362045").s().p("Eh4jApnQ2zhqt6kCQyUlThGo+QhGo+QfpkQMhnQVvnHQYOn7fpmhUAfpgGiAjDgETUAjEgETAgRgBUUAgTgBUAZaAB1QWzBqN6ECQSUFTBGI+QBGI+wfJkQshHQ1vHHQ4OH7/pGiUgfpAGhgjDAETQ4wDD3sBkQ3iBj0+AAQxOAAu4hEgEAsPgksQ3iBj4oDBUgi4AESgfaAGfQ/cGe4BH3Q2mHYsYHfQsXHeAuF1QAuF1NzERQNzERXvBuUAZMAB1AgFgBUUAgDgBUAi2gERUAi2gERAfcgGfQfbmfYCn3QWmnYMYneQMXnfgul1Qgul1tzkRQtzkQ3vhvQuqhDxIAAQ01AA3ZBjg");
	this.shape_50.setTransform(902.975,444.7741);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7B7B7B").s().p("EheBAMEQgbjhOZkRQLgjbUbjuQOlirRlikQIzhSF4gwIOthlQRqhwO0g8QUuhTL/AiQPAAqAbDhQAOBwhcB7UgIdgEFgrVADFQtiA9vaBkIsrBYQz8Cj1ZDuUgqyAHfgHOAGAQh3hhgOhwg");
	this.shape_51.setTransform(888.2526,321.0081);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2F3A55").s().p("Egu4ALLQmLgzjbhbQjjhegPiBQgYjERJj7QL0itSkizQDNgeDNgdIApgGQDQgdB/gQIBzgNQCVgRClgRIErgeQS3h0MWgRQSIgZAYDHQAQCEjPCWQjICRmECUQsfEwz4DaIAAAAQm6BMnYA6QkQAikNAZIn0ApQonAlnSAAQpIAAnCg6g");
	this.shape_52.setTransform(893.7067,381.1651);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2F3A55").s().p("EhA4ASRQtUg+njidQn0ihgejxQgbjhOZkRQLgjaUbjvQOlirRlikQIzhSF4gwIOthlQRrhwOzg8QUuhTL/AiQPAAqAbDhQAeDxm+EWQmvEMssEJQstEKwtDfQxSDmzICWQzHCWxqAsQm9ARmWAAQpMAAn5gkg");
	this.shape_53.setTransform(888.2517,343.4265);

	this.instance_6 = new lib.Group_30();
	this.instance_6.setTransform(924.65,515.05,1,1,0,0,0,748.3,187.8);
	this.instance_6.alpha = 0.3516;

	this.instance_7 = new lib.Group_31();
	this.instance_7.setTransform(121.3,562.95,1,1,0,0,0,323.7,134.7);
	this.instance_7.alpha = 0.3516;

	this.instance_8 = new lib.Group_32();
	this.instance_8.setTransform(1687.15,376.6,1,1,0,0,0,331.5,136.1);
	this.instance_8.alpha = 0.3516;

	this.instance_9 = new lib.Group_33();
	this.instance_9.setTransform(896.35,358.4,1,1,0,0,0,648.8,142.3);
	this.instance_9.alpha = 0.5;

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BBC5D2").s().p("Eh4YAnaQ4vhzuAkiQugktg3m/Qg2m/M7oDQMfnyXlnuQXknte/mcUAgGgGsAjggEWUAjegEXAgwgBRQfphPYvByQYuBzOAEiQOgEsA3G/QA2G/s7IEQsfHx3kHuQ3lHu+/GcUggGAGrgjgAEXUgjfAEXggvABRQs7AgrxAAQxDAAuohDg");
	this.shape_54.setTransform(901.675,444.95);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#362045").s().p("Eh37AkDQ2uhpt2j/QyPlQhFo2IhQqMQgHg0AggoQAggpA0gGQAzgGApAfQApAgAGA0IBQKMQAuF7N4EVQN3EVX1BuUAZOAB1AgFgBUUAgFgBUAi2gERUAi2gESAfdgGfQfcmeYCn4QWtnaManiQMbnkgvl7IhQqMID4gfIBQKMQBGI3wbJgQsfHN1pHEQ4NH7/pGhUgfnAGhgjEAEUQ4wDC3qBkQ3jBk08AAQxZAAushFg");
	this.shape_55.setTransform(907.1357,543.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFF66").s().p("Eh4JAgKQ4vhyt/kjQugksg3m/IgjklQA/G4OVEqQOAEiYvBzQYvByfohPUAgwgBRAjfgEXUAjggEWAgGgGsQe/mcXlntQXkntMfnyQMzn/gtm7IAkElQA2G/s7IEQsfHy3kHtQ3lHt+/GdUggGAGrgjgAEWUgjfAEXggvABSQs7AgrxAAQxDAAuphEg");
	this.shape_56.setTransform(909.3684,556.3377);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFF66").s().p("Eh3yAi+Q4vhzuAkiQufktg3m/IhQqMMFc8gqxIBQKMQA3G/s8IEQsfHy3kHsQ3kHu/AGcUggFAGrgjgAEXUgjfAEWggwABSQs6AgrxAAQxEAAuohDg");
	this.shape_57.setTransform(907.1434,538.3877);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#362045").s().p("EhI7AeSQuMhyovjfQrfkmg4nKQg4nKKCnNQHolgNXlKQOrlsTQkbQTQkcVXinQVXioTvgWQTwgXPnB+QONByIvDfQLfEmA4HKQA4HKqCHNQnoFgtXFKQurFszPEbQzQEc1YCnQsPBgr5AxQr0Axq+AAQwYAAtMhrgAU46xQrvAwsJBfQ1HCmy+EXQy9EXucFlQtZFLnQFZQnQFaAiEaQAjEXIKDcQIKDcOKB1QO0B7SugOQUMgQWGitQVHimS/kXQS/kXObllQNYlLHQlZQHQlagjkaQgikZoWjgQoWjfuOhzQs9howFAAQqzAArsAwg");
	this.shape_58.setTransform(927.75,646.929);

	this.instance_10 = new lib.Group_40();
	this.instance_10.setTransform(929.3,666.7,1,1,0,0,0,676.9,134.3);
	this.instance_10.alpha = 0.3516;

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FDFEFF").s().p("Eg80AXSQtpg3qGiOQqOiQlkjaQkJijhSjDQBEjWIgj7QIRjzOMj4QOPj4SMjZQS0jhUpiiQUniiTIhJQSehGOvAVQOuAVI7BtQJOBwB1C/QghDSjZDeQklEppYEqQpREltBEIQtLEMvtDTQwPDaxeCJQ4pDB1hAAQpIAAolgjg");
	this.shape_59.setTransform(929.25,684.8765);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#9A9A9A").s().p("EhIpAcGQvIh5opj0Qo8j9grlcQgqlcHul/QHdlxOOlgQOOlgSykXQTdkhVkiqQVkipT9gUQTSgUPIB6QPIB6IpDzQI8D9ArFcQAqFcnuF/QndFxuOFgQuOFgyyEXQzdEh1kCqQ1kCpz9AUQirADilAAQwIAAtChpg");
	this.shape_60.setTransform(927.775,646.9255);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#362045").s().p("AgZLtQk9gKkhg8Qkhg7jghlQj6hxiCiUQiDiVAGikQAFimCNiLQCMiLEBhgQDnhVEkgoQEkgoE8ALQFcAMExBEQEoBBDeBuQDdBuB1CLQB5CQgFCdQgGCliMCMQiMCLkBBfQjOBNkBAoQkAAokZAAQg7AAhJgDgApYnRQjpAki6BFQivBBhlBTQhlBTgDBSQgDBRBfBaQBfBaCrBNQDKBbEJA2QEIA2EmAKQElAKELgkQEMgkDQhNQCvhBBlhTQBlhUADhSQADhXhnhdQhmhci6hPQmhivpCgUQhFgCg3AAQkDAAjqAkg");
	this.shape_61.setTransform(561.3508,825.0564);

	this.instance_11 = new lib.Group_44();
	this.instance_11.setTransform(561.35,825.05,1,1,0,0,0,152.5,62.7);
	this.instance_11.alpha = 0.1992;

	this.instance_12 = new lib.Group_45();
	this.instance_12.setTransform(1326.3,731.2,1,1,0,0,0,147.7,73.2);
	this.instance_12.alpha = 0.1992;

	this.instance_13 = new lib.Group_46();
	this.instance_13.setTransform(948.8,818.05,1,1,0,0,0,151.7,64.8);
	this.instance_13.alpha = 0.1992;

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FDFEFF").s().p("AgUJxQp4gWm4jGQjRhdhwh1Qhzh4AEh+QAEh/B8hwQB4hsDWhPQHEioJ3AWQE2AKEaA7QEQA5DQBdQDQBeBwB0QB0B4gEB+QgEB/h8BwQh4BtjWBPQjWBPkTAmQjhAfjwAAQhAAAhBgCg");
	this.shape_62.setTransform(561.3517,825.0391);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#362045").s().p("AuhNPQkQgfirhlQiphlguigQgtifBaiwQBbiuDXiqQDCiYEJh/QELiAExhXQKmjCIBBNQD1AlCaBhQCfBjArCYQAuCghbCvQhbCvjXCpQjBCYkKCAQkKB/kxBYQjqBDjmAiQjmAjjQAAQh6AAhvgMgAEzo+QjcAgjgBAQkbBRjyBzQj1B1iuCJQiTBzhHBuQhGBuAWBPQAYBPB2A4QB1A5C6AUQDdAZENgeQEMgeEZhRQEahQD0h1QD0h0CviJQCThzBGhuQBGhugWhPQgdhmiug8Qiwg9kNAAQi6AAjOAfg");
	this.shape_63.setTransform(1326.35,731.1311);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FDFEFF").s().p("AuTLRQjjgZiOhMQiThPgjh6Qgjh7BTiQQBRiMCziMQF8krJgitQJeiuHgA2QDjAZCOBMQCTBPAjB6QAjB7hTCQQhRCMizCMQl7ErpgCtQnRCFmHAAQh3AAhwgNg");
	this.shape_64.setTransform(1326.325,731.2646);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#362045").s().p("AzlJrQlhidggkFQgTidBsiZQBoiVDTiBQDTiBEhhbQEqheFZgqQFYgrE4ATQEvATDsBKQDsBKCJB4QCOB8ATCcQAVClh1CeQh1CfjvCGQjXB4kaBVQkbBVk7AmQjnAdjkAAQoZAAlciagAg8nvQo+BGmQDUQiyBeheBlQhfBlALBXQALBYB0BMQB0BLDDAxQG3BtI+hHQEjgjEDhNQEDhNDBhtQCkhbBWhiQBXhhgKhSQgSiSkehlQkohpmvAAQjMAAjXAbg");
	this.shape_65.setTransform(948.7601,818.0065);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FDFEFF").s().p("Av4I6Qjdg8iAhhQiFhlgPh+QgQh+BpiBQBlh+DHhvQGljsJ0hNQJzhNHRB/QDdA8CABhQCFBlAPB+QAQB+hpCBQhlB+jIBvQmkDsp0BNQjrAdjWAAQlhAAkihPg");
	this.shape_66.setTransform(948.75,818.025);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E2E2E2").s().p("Av4I6Qjdg8iAhhQiFhlgPh+QgQh+BpiBQBlh+DHhvQGljsJ0hNQJzhNHRB/QDdA8CABhQCFBlAPB+QAQB+hpCBQhlB+jIBvQmkDsp0BNQjrAdjWAAQlhAAkihPg");
	this.shape_67.setTransform(948.75,818.025);

	this.instance_14 = new lib.Group_1_1();
	this.instance_14.setTransform(531.1,-93.5,1,1,0,0,0,47.8,55.5);
	this.instance_14.alpha = 0.3516;

	this.instance_15 = new lib.Group_2();
	this.instance_15.setTransform(433.95,164.5,1,1,0,0,0,70.2,168.5);
	this.instance_15.alpha = 0.3516;

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_68.setTransform(104.7249,582.232);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_69.setTransform(486.1533,599.8815);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_70.setTransform(1721.6494,383.9885);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_71.setTransform(1355.775,493.275);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_72.setTransform(917.255,561.25);

	this.instance_16 = new lib.Group_24();
	this.instance_16.setTransform(957.05,-28.4,1,1,0,0,0,526.3,331.5);
	this.instance_16.alpha = 0.3516;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_10},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{y:70.515}},{t:this.shape_48},{t:this.shape_47,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:981.298,y:253.755}},{t:this.shape_46,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:995.9097,y:301.6752}},{t:this.shape_45,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:956.2028,y:150.0739}},{t:this.shape_44,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1009.6798,y:131.7132}},{t:this.shape_43,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:981.297,y:253.8741}},{t:this.shape_42,p:{scaleX:0.7908,scaleY:0.7908,rotation:-16.955,x:937.7368,y:322.6653}},{t:this.shape_41,p:{scaleX:0.7908,scaleY:0.7908,rotation:-16.955,x:936.2676,y:322.3699}},{t:this.shape_40,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:939.4063,y:326.3678}},{t:this.shape_39,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:936.3389,y:322.4745}},{t:this.shape_38,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:936.5443,y:321.2608}},{t:this.shape_37,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1083.615,y:236.8019}},{t:this.shape_36,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1113.5138,y:295.1973}},{t:this.shape_35,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1009.6798,y:131.7132}},{t:this.shape_34,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1083.6418,y:236.8861}},{t:this.shape_33,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:915.1417,y:-58.2911}},{t:this.shape_32,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:924.9442,y:124.8455}},{t:this.shape_31,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:914.6372,y:-58.8989}},{t:this.shape_30,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:756.9841,y:-2.1984}},{t:this.instance_5,p:{regX:56.4,regY:85.7,scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:756.15,y:-19.4}},{t:this.shape_29,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:926.7296,y:6.6512}},{t:this.instance_4,p:{regX:93,regY:51.7,scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:920.4,y:-16.25}},{t:this.shape_28,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:757.4586,y:-8.7856}},{t:this.shape_27,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:926.7188,y:6.5668}},{t:this.shape_26,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:828.2425,y:64.7915}},{t:this.shape_25,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:839.4007,y:65.4521}},{t:this.shape_24,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:948.0283,y:-124.0287}},{t:this.shape_23,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:906.8857,y:-118.2208}},{t:this.shape_22,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:949.5164,y:-124.2976}},{t:this.shape_21,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:682.0965,y:-152.4859}},{t:this.shape_20,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9556,x:682.1995,y:-154.0362}},{t:this.shape_19,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:753.7533,y:-133.1411}},{t:this.shape_18,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9556,x:680.6413,y:-155.4008}},{t:this.shape_17,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:901.1394,y:-70.6364}},{t:this.shape_16,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:780.9902,y:-82.0386}},{t:this.shape_15,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:871.4442,y:109.9069}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_3},{t:this.shape,p:{x:883.0336,y:47.665}},{t:this.instance_2,p:{x:957.05,y:-28.4}},{t:this.instance_1,p:{x:531.1,y:-93.5}},{t:this.instance,p:{x:433.95,y:164.5}}]}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_10},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{y:56.365}},{t:this.instance_16},{t:this.shape_48},{t:this.shape_72},{t:this.shape_13},{t:this.shape_71},{t:this.shape_11},{t:this.shape_70},{t:this.shape_9},{t:this.shape_69},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_68},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_15},{t:this.instance_14},{t:this.instance_3},{t:this.shape_47,p:{scaleX:0.7906,scaleY:0.7906,rotation:-16.9542,x:968.0607,y:263.2657}},{t:this.shape_46,p:{scaleX:0.7906,scaleY:0.7906,rotation:-16.9542,x:982.6608,y:311.1541}},{t:this.shape_45,p:{scaleX:0.7906,scaleY:0.7906,rotation:-16.9542,x:942.9861,y:159.6539}},{t:this.shape_44,p:{scaleX:0.7906,scaleY:0.7906,rotation:-16.9542,x:996.4276,y:141.3075}},{t:this.shape_43,p:{scaleX:0.7906,scaleY:0.7906,rotation:-16.9542,x:968.0596,y:263.3848}},{t:this.shape_42,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:924.5721,y:332.1515}},{t:this.shape_41,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:923.1038,y:331.8562}},{t:this.shape_40,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:926.2216,y:335.8322}},{t:this.shape_39,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:923.1562,y:331.9413}},{t:this.shape_38,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:923.3615,y:330.7284}},{t:this.shape_37,p:{scaleX:0.7906,scaleY:0.7906,rotation:-16.9542,x:1070.309,y:246.3278}},{t:this.shape_36,p:{scaleX:0.7906,scaleY:0.7906,rotation:-16.9542,x:1100.1856,y:304.6848}},{t:this.shape_35,p:{scaleX:0.7906,scaleY:0.7906,rotation:-16.9542,x:996.4276,y:141.3075}},{t:this.shape_34,p:{scaleX:0.7906,scaleY:0.7906,rotation:-16.9542,x:1070.3358,y:246.4119}},{t:this.shape_33,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:901.9744,y:-48.5781}},{t:this.shape_32,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:911.7697,y:134.4401}},{t:this.shape_31,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:901.4703,y:-49.1855}},{t:this.shape_30,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:744.4186,y:0.8819}},{t:this.instance_5,p:{regX:58.1,regY:86.2,scaleX:0.7906,scaleY:0.7906,rotation:-16.9542,x:743.5,y:-9.95}},{t:this.shape_29,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:913.5546,y:16.3223}},{t:this.instance_4,p:{regX:94.5,regY:51.9,scaleX:0.7906,scaleY:0.7906,rotation:-16.9542,x:907.65,y:-7.05}},{t:this.shape_28,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:744.393,y:0.8947}},{t:this.shape_27,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:913.5438,y:16.2379}},{t:this.shape_26,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:815.1308,y:74.4245}},{t:this.shape_25,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:826.2819,y:75.0848}},{t:this.shape_24,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:934.84,y:-114.273}},{t:this.shape_23,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:893.724,y:-108.469}},{t:this.shape_22,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:936.3272,y:-114.5417}},{t:this.shape_21,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:669.0803,y:-142.713}},{t:this.shape_20,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:669.0803,y:-142.713}},{t:this.shape_19,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:740.6907,y:-123.3804}},{t:this.shape_18,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:667.1735,y:-144.0767}},{t:this.shape_17,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:887.9812,y:-60.9155}},{t:this.shape_16,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:767.9098,y:-72.3108}},{t:this.shape_15,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9547,x:858.3044,y:119.5109}},{t:this.shape,p:{x:889.9336,y:56.365}},{t:this.instance_2,p:{x:960.3,y:-34.25}},{t:this.instance,p:{x:437.2,y:158.65}},{t:this.instance_1,p:{x:534.35,y:-99.35}}]},2).to({state:[]},1).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.1,-374.1,2268.6,1274.4);


(lib.Scene_1_woman = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// woman
	this.instance = new lib.womansing("synched",11);
	this.instance.setTransform(206.65,669.85,0.0388,0.0388,0,0,0,1944.7,1133.9);
	this.instance._off = true;

	this.instance_1 = new lib.woman("synched",0);
	this.instance_1.setTransform(384.35,681.1,0.0379,0.0379,0,0,0,838,1388.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(250).to({_off:false},0).wait(1).to({regX:1966,regY:1140.6,scaleX:0.0389,scaleY:0.0389,x:213.4,y:670.05,startPosition:12},0).wait(1).to({x:219.35,startPosition:13},0).wait(1).to({x:225.35,startPosition:14},0).wait(1).to({x:231.3,startPosition:15},0).wait(1).to({x:237.25,startPosition:16},0).wait(1).to({x:243.2,startPosition:17},0).wait(1).to({x:249.15,startPosition:18},0).wait(1).to({x:255.15,startPosition:19},0).wait(1).to({x:261.1,startPosition:20},0).wait(1).to({x:267.05,startPosition:21},0).wait(1).to({x:273,startPosition:22},0).wait(1).to({x:279,startPosition:23},0).wait(1).to({x:284.95,startPosition:24},0).wait(1).to({x:290.9,startPosition:25},0).wait(1).to({x:296.85,startPosition:26},0).wait(1).to({x:302.8,startPosition:27},0).wait(1).to({x:308.8,startPosition:0},0).wait(1).to({x:314.75,startPosition:1},0).wait(1).to({x:320.7,startPosition:2},0).wait(1).to({x:326.65,startPosition:3},0).wait(1).to({x:332.6,startPosition:4},0).wait(1).to({x:338.6,startPosition:5},0).wait(1).to({x:344.55,startPosition:6},0).wait(1).to({x:350.5,startPosition:7},0).wait(1).to({x:356.45,startPosition:8},0).wait(1).to({x:362.45,startPosition:9},0).wait(1).to({x:368.4,startPosition:10},0).wait(1).to({x:374.35,startPosition:11},0).wait(1).to({x:380.3,startPosition:12},0).wait(1).to({x:386.25,startPosition:13},0).wait(1).to({x:392.25,startPosition:14},0).wait(1).to({x:398.2,startPosition:15},0).wait(1).to({x:404.15,startPosition:16},0).wait(1).to({x:410.1,startPosition:17},0).wait(1).to({x:416.05,startPosition:18},0).wait(1).to({x:422.05,startPosition:19},0).wait(1).to({x:428,startPosition:20},0).to({_off:true},1).wait(69));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(288).to({_off:false},0).wait(7).to({regX:839.2,regY:1391.3,rotation:-45,x:384.25,y:681.05,startPosition:3},0).wait(2).to({regX:838.4,regY:1391,y:671.85,startPosition:4},0).wait(1).to({regX:781.2,regY:1323.6,x:380.4,y:661.35,startPosition:5},0).wait(1).to({x:380,y:651.1,startPosition:6},0).wait(1).to({x:379.55,y:640.85,startPosition:7},0).wait(1).to({x:379.15,y:630.65,startPosition:8},0).wait(1).to({x:378.7,y:620.4,startPosition:9},0).wait(1).to({x:378.25,y:610.15,startPosition:10},0).wait(1).to({x:377.85,y:599.95,startPosition:0},0).wait(1).to({x:377.4,y:589.7,startPosition:1},0).wait(1).to({x:377,y:579.45,startPosition:2},0).wait(1).to({x:376.55,y:569.25,startPosition:3},0).wait(1).to({x:376.1,y:559,startPosition:4},0).wait(1).to({x:375.7,y:548.75,startPosition:5},0).wait(1).to({x:375.25,y:538.55,startPosition:6},0).wait(1).to({x:374.85,y:528.3,startPosition:7},0).wait(1).to({x:374.4,y:518.05,startPosition:8},0).wait(1).to({x:373.95,y:507.85,startPosition:9},0).wait(1).to({x:373.55,y:497.6,startPosition:10},0).wait(1).to({x:373.1,y:487.35,startPosition:0},0).wait(1).to({x:372.7,y:477.15,startPosition:1},0).wait(1).to({x:372.25,y:466.9,startPosition:2},0).wait(1).to({x:371.8,y:456.65,startPosition:3},0).wait(1).to({x:371.4,y:446.45,startPosition:4},0).wait(1).to({x:370.95,y:436.2,startPosition:5},0).wait(1).to({x:370.55,y:425.95,startPosition:6},0).wait(1).to({x:370.1,y:415.75,startPosition:7},0).wait(1).to({x:369.65,y:405.5,startPosition:8},0).wait(1).to({x:369.25,y:395.25,startPosition:9},0).wait(1).to({x:368.8,y:385.05,startPosition:10},0).wait(1).to({x:368.4,y:374.8,startPosition:0},0).wait(1).to({x:367.95,y:364.55,startPosition:1},0).wait(1).to({regX:782.5,regY:1326.2,scaleX:0.0378,scaleY:0.0378,rotation:-44.9673,x:369.6,y:359,startPosition:0},0).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_spaceship = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// spaceship
	this.instance = new lib.spaceship_black("synched",0);
	this.instance.setTransform(1369.75,71.2,0.0796,0.0796,0,0,0,901.1,263.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(63).to({_off:false},0).wait(1).to({regX:906.2,regY:263.1,scaleX:0.0799,scaleY:0.0799,x:1359.45,y:75.1,startPosition:1},0).wait(1).to({scaleX:0.0801,scaleY:0.0801,x:1348.7,y:78.9,startPosition:2},0).wait(1).to({scaleX:0.0804,scaleY:0.0804,x:1337.9,y:82.6,startPosition:3},0).wait(1).to({scaleX:0.0807,scaleY:0.0807,x:1327.1,y:86.2,startPosition:4},0).wait(1).to({scaleX:0.081,scaleY:0.081,x:1316.25,y:89.7,startPosition:5},0).wait(1).to({scaleX:0.0813,scaleY:0.0813,x:1305.45,y:93.2,startPosition:6},0).wait(1).to({scaleX:0.0815,scaleY:0.0815,x:1294.55,y:96.6,startPosition:7},0).wait(1).to({scaleX:0.0818,scaleY:0.0818,x:1283.65,y:99.9,startPosition:8},0).wait(1).to({scaleX:0.0821,scaleY:0.0821,x:1272.75,y:103.25,startPosition:0},0).wait(1).to({scaleX:0.0824,scaleY:0.0824,x:1261.85,y:106.5,startPosition:1},0).wait(1).to({scaleX:0.0827,scaleY:0.0827,x:1250.9,y:109.7,startPosition:2},0).wait(1).to({scaleX:0.0829,scaleY:0.0829,x:1239.95,y:112.85,startPosition:3},0).wait(1).to({scaleX:0.0832,scaleY:0.0832,x:1229,y:116,startPosition:4},0).wait(1).to({scaleX:0.0835,scaleY:0.0835,x:1218,y:119.1,startPosition:5},0).wait(1).to({scaleX:0.0838,scaleY:0.0838,x:1207,y:122.15,startPosition:6},0).wait(1).to({scaleX:0.0841,scaleY:0.0841,x:1196,y:125.1,startPosition:7},0).wait(1).to({scaleX:0.0843,scaleY:0.0843,x:1185,y:128.1,startPosition:8},0).wait(1).to({scaleX:0.0846,scaleY:0.0846,x:1174,y:131,startPosition:0},0).wait(1).to({scaleX:0.0849,scaleY:0.0849,x:1162.95,y:133.9,startPosition:1},0).wait(1).to({scaleX:0.0852,scaleY:0.0852,x:1151.95,y:136.7,startPosition:2},0).wait(1).to({scaleX:0.0855,scaleY:0.0855,x:1140.9,y:139.5,startPosition:3},0).wait(1).to({scaleX:0.0857,scaleY:0.0857,x:1129.85,y:142.2,startPosition:4},0).wait(1).to({scaleX:0.086,scaleY:0.086,x:1118.75,y:144.9,startPosition:5},0).wait(1).to({scaleX:0.0863,scaleY:0.0863,x:1107.7,y:147.5,startPosition:6},0).wait(1).to({scaleX:0.0866,scaleY:0.0866,x:1096.6,y:150.05,startPosition:7},0).wait(1).to({scaleX:0.0869,scaleY:0.0869,x:1085.45,y:152.6,startPosition:8},0).wait(1).to({scaleX:0.0871,scaleY:0.0871,x:1074.3,y:155.05,startPosition:0},0).wait(1).to({scaleX:0.0874,scaleY:0.0874,x:1063.2,y:157.5,startPosition:1},0).wait(1).to({scaleX:0.0877,scaleY:0.0877,x:1052.05,y:159.8,startPosition:2},0).wait(1).to({scaleX:0.088,scaleY:0.088,x:1040.85,y:162.05,startPosition:3},0).wait(1).to({scaleX:0.0883,scaleY:0.0883,x:1029.7,y:164.25,startPosition:4},0).wait(1).to({scaleX:0.0885,scaleY:0.0885,x:1018.5,y:166.35,startPosition:5},0).wait(1).to({scaleX:0.0888,scaleY:0.0888,x:1007.3,y:168.35,startPosition:6},0).wait(1).to({scaleX:0.0891,scaleY:0.0891,x:996.05,y:170.25,startPosition:7},0).wait(1).to({scaleX:0.0894,scaleY:0.0894,x:984.8,y:172.05,startPosition:8},0).wait(1).to({scaleX:0.0897,scaleY:0.0897,x:973.5,y:173.75,startPosition:0},0).wait(1).to({scaleX:0.0899,scaleY:0.0899,x:962.2,y:175.3,startPosition:1},0).wait(1).to({scaleX:0.0902,scaleY:0.0902,x:950.9,y:176.7,startPosition:2},0).wait(1).to({scaleX:0.0905,scaleY:0.0905,x:939.55,y:177.9,startPosition:3},0).wait(1).to({scaleX:0.0908,scaleY:0.0908,x:928.25,y:179,startPosition:4},0).wait(1).to({scaleX:0.0911,scaleY:0.0911,x:916.85,y:179.95,startPosition:5},0).wait(1).to({scaleX:0.0913,scaleY:0.0913,x:905.5,y:180.8,startPosition:6},0).wait(1).to({scaleX:0.0916,scaleY:0.0916,x:894.15,y:181.5,startPosition:7},0).wait(1).to({scaleX:0.0919,scaleY:0.0919,x:882.75,y:182.15,startPosition:8},0).wait(1).to({scaleX:0.0922,scaleY:0.0922,x:871.4,y:182.65,startPosition:0},0).wait(1).to({scaleX:0.0925,scaleY:0.0925,x:860,y:183.05,startPosition:1},0).wait(1).to({scaleX:0.0927,scaleY:0.0927,x:848.6,y:183.45,startPosition:2},0).wait(1).to({scaleX:0.093,scaleY:0.093,x:837.25,y:183.7,startPosition:3},0).wait(1).to({scaleX:0.0933,scaleY:0.0933,x:825.85,y:183.95,startPosition:4},0).wait(1).to({scaleX:0.0936,scaleY:0.0936,x:814.45,y:184.05,startPosition:5},0).wait(1).to({scaleX:0.0939,scaleY:0.0939,x:803.05,y:184.15,startPosition:6},0).wait(1).to({scaleX:0.0941,scaleY:0.0941,x:791.65,startPosition:7},0).wait(1).to({scaleX:0.0944,scaleY:0.0944,x:780.25,startPosition:8},0).wait(1).to({scaleX:0.0947,scaleY:0.0947,x:768.85,y:184,startPosition:0},0).wait(1).to({scaleX:0.095,scaleY:0.095,x:757.45,y:183.9,startPosition:1},0).wait(1).to({scaleX:0.0953,scaleY:0.0953,x:746.1,y:183.65,startPosition:2},0).wait(1).to({scaleX:0.0955,scaleY:0.0955,x:734.65,y:183.45,startPosition:3},0).wait(1).to({scaleX:0.0958,scaleY:0.0958,x:723.25,y:183.1,startPosition:4},0).wait(1).to({scaleX:0.0961,scaleY:0.0961,x:711.9,y:182.75,startPosition:5},0).wait(1).to({scaleX:0.0964,scaleY:0.0964,x:700.5,y:182.35,startPosition:6},0).wait(1).to({scaleX:0.0967,scaleY:0.0967,x:689.1,y:181.9,startPosition:7},0).wait(1).to({scaleX:0.0969,scaleY:0.0969,x:677.75,y:181.4,startPosition:8},0).wait(1).to({scaleX:0.0972,scaleY:0.0972,x:666.35,y:180.9,startPosition:0},0).wait(1).to({scaleX:0.0975,scaleY:0.0975,x:654.95,y:180.25,startPosition:1},0).wait(1).to({scaleX:0.0978,scaleY:0.0978,x:643.6,y:179.65,startPosition:2},0).wait(1).to({scaleX:0.0981,scaleY:0.0981,x:632.2,y:178.95,startPosition:3},0).wait(1).to({scaleX:0.0983,scaleY:0.0983,x:620.85,y:178.25,startPosition:4},0).wait(1).to({scaleX:0.0986,scaleY:0.0986,x:609.45,y:177.5,startPosition:5},0).wait(1).to({scaleX:0.0989,scaleY:0.0989,x:598.1,y:176.65,startPosition:6},0).wait(1).to({scaleX:0.0992,scaleY:0.0992,x:586.75,y:175.85,startPosition:7},0).wait(1).to({scaleX:0.0995,scaleY:0.0995,x:575.4,y:174.9,startPosition:8},0).wait(1).to({scaleX:0.0997,scaleY:0.0997,x:564.05,y:174,startPosition:0},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:552.7,y:172.95,startPosition:1},0).wait(1).to({scaleX:0.1003,scaleY:0.1003,x:541.35,y:171.95,startPosition:2},0).wait(1).to({scaleX:0.1006,scaleY:0.1006,x:530,y:170.8,startPosition:3},0).wait(1).to({scaleX:0.1009,scaleY:0.1009,x:518.65,y:169.65,startPosition:4},0).wait(1).to({scaleX:0.1011,scaleY:0.1011,x:507.3,y:168.35,startPosition:5},0).wait(1).to({scaleX:0.1014,scaleY:0.1014,x:496,y:167.05,startPosition:6},0).wait(1).to({scaleX:0.1017,scaleY:0.1017,x:484.7,y:165.6,startPosition:7},0).wait(1).to({scaleX:0.102,scaleY:0.102,x:473.4,y:164.05,startPosition:8},0).wait(1).to({scaleX:0.1023,scaleY:0.1023,x:462.15,y:162.3,startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_play_idn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// play_idn
	this.instance = new lib.starMC();
	this.instance.setTransform(964.75,46.6,0.6298,0.6298,0,0,0,12.4,-422.7);

	this.instance_1 = new lib.starMC();
	this.instance_1.setTransform(649.15,36.15,0.5101,0.5101,0,0,0,12.3,-422.8);

	this.instance_2 = new lib.starMC();
	this.instance_2.setTransform(149.1,19.9,1,1,0,0,0,12.3,-422.7);

	this.instance_3 = new lib.starMC();
	this.instance_3.setTransform(527.6,178.5,0.7935,0.7935,0,0,0,12.3,-422.7);

	this.instance_4 = new lib.starMC();
	this.instance_4.setTransform(368.15,83.65,0.417,0.417,0,0,0,12.3,-422.8);

	this.instance_5 = new lib.starMC();
	this.instance_5.setTransform(793.85,107.2,1,1,0,0,0,12.3,-422.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(500));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_light = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// light
	this.instance = new lib.lightai("synched",0);
	this.instance.setTransform(398,330.95,0.1095,0.1994,0,0,0,1289.4,1308.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(251).to({_off:false},0).wait(2).to({regX:1295.7,regY:1311.8,scaleX:0.1093,scaleY:0.1992,y:340},0).wait(2).to({regX:1296.4,regY:1312.2,x:393.35,y:356.8},0).wait(2).to({regX:1297,regY:1312.5,y:368.9},0).wait(2).to({regX:1297.7,regY:1312.9,scaleX:0.1092,x:393.4,y:380.35},0).wait(2).to({regX:1298.2,regY:1313.2,y:396.2},0).wait(2).to({regX:1298.9,regY:1313.5,x:393.5,y:414.45},0).wait(2).to({regX:1299.5,regY:1313.9,scaleY:0.1991,x:393.55,y:430.7},0).wait(2).to({regX:1300.2,regY:1314.2,x:393.6,y:442},0).wait(2).to({regX:1300.9,regY:1314.6,x:393.65,y:455.4},0).wait(2).to({regX:1302.1,regY:1315.3,scaleX:0.1091,x:393.75,y:460.8},0).wait(2).to({regX:1301.5,regY:1315,x:393.7,y:469.2},0).wait(2).to({regX:1302.1,regY:1315.3,x:393.75,y:476.85},0).wait(2).to({regX:1302.8,regY:1315.7,x:393.8,y:496.35},0).wait(2).to({regX:1303.4,regY:1316,x:393.85,y:511.35},0).wait(2).to({regX:1304,regY:1316.4,y:526},0).wait(2).to({regX:1304.7,regY:1316.7,scaleY:0.199,x:393.95,y:538.2},0).wait(2).to({regX:1305.3,regY:1317,x:394,y:551.6},0).wait(2).to({regX:1306,regY:1317.4,scaleX:0.109,y:562.05},0).wait(70));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_end = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// end
	this.instance = new lib.text();
	this.instance.setTransform(939.45,143.6,0.8825,0.8825,0,0,0,-8.7,-121.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(479).to({_off:false},0).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ALIEN_s = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ALIEN_s
	this.instance = new lib.spaceship_alien("synched",0);
	this.instance.setTransform(464.5,157.85,0.1097,0.1097,0,0,0,908.9,265.8);

	this.instance_1 = new lib.Group_1_1();
	this.instance_1.setTransform(423.4,117.8,0.1097,0.1097,0,0,0,47.9,55.6);
	this.instance_1.alpha = 0.3516;

	this.instance_2 = new lib.Group_2();
	this.instance_2.setTransform(412.75,146.1,0.1097,0.1097,0,0,0,70.2,168.7);
	this.instance_2.alpha = 0.3516;

	this.instance_3 = new lib.Group_24();
	this.instance_3.setTransform(470.15,124.95,0.1097,0.1097,0,0,0,526.5,331.9);
	this.instance_3.alpha = 0.3516;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(39,44,46,0.898)").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape.setTransform(461.0741,134.8958,0.1096,0.1172);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#362045").s().p("AgLCHQgtgBgsgWQgpgVgeghQg0g6gWhXQgFgUAOgQQAKgLAPAAQAOAAAKALIADADIAtAvQAYAYAUANQApAbAtABQAjgBA7gaQAfgOBKgtIADgCQAOgIAPAFQAOAFAHAOQAHAOgFAPQgXBNhIA4QgiAagpAOQgmANgmAAIgKAAg");
	this.shape_1.setTransform(458.5531,141.4152,0.0857,0.0857,-16.9318);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#362045").s().p("ACqGDQgmgbgbgkQgXgegWgnIglhDIhEiDQgphMgdgvQgohBgngwQhVhsh4g+IgBAAQgLgGgFgMQgGgMADgMQAEgPAMgIQAMgIAOAEQBIATBEAoQBEApA3A4QAzAzAxBEQAlA1AsBMIBJCBQA1BdARAZQAlA1AeAKQAPAGAVgIQASgGAdgWIAHgFQAPgMASAIQANAGAGAOQAFAOgGAOQgTAughAfQgqAmg3AAQg1AAgughg");
	this.shape_2.setTransform(448.7593,120.6108,0.0857,0.0857,-16.9318);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#362045").s().p("AoeBqQgXgSgRgYQgSgagIgbQgPg1AMg4QADgKAGgHQAHgHAJgCQAOgEAMAIQAMAHADAPIADAJQAIAlAPAVQARAXAWAJQArATBNgJQA8gHBUgYQAegJAtgPIBLgbQBdghBBgRQBagYBOgHQBVgIBWAOQBWANBPAhQALAFAGALQAGAMgCANQgDAPgMAJQgMAIgOgDIAAAAQiYggiXAcQhDANhQAaQg4AThcAlQh2AtgmANQhcAdhPAHIgdABQhhAAhDgyg");
	this.shape_3.setTransform(461.7789,121.8517,0.0857,0.0857,-16.9318);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#362045").s().p("APkLdQgPgHgFgRQgFgQAHgQQgDADAAAEIAAgDIgFhFQgFgugGglQgLhNgVhXQgoisg+iNQhCibhbh6QhjiDh4hSQhzhUiYgYQiHgWifAZQiIAWifA9QiCAwidBVQgUALgYgCIgBgBQgmgFgnAOQgnAOgVAaQgVAZgBAeQgBAeAUAoQAQAfAYALQAZALAigKQAjgKAdgdQAdgeANglIAAgCQAIgWASgOIAWgQIAugZQAagOAggOQA4gZBAgUQCJgsBwgKQCPgPB0AXQCMAbBtBMQBvBNBMB/QBBBtAjCQQAeB6AICNQAHB1gICRQAAAQgMAMQgLALgPABQgRAAgMgMQgMgMAAgSQgHkYhAjQQglh3g8haQhChihXg1Qijhlj8AgQhqAPhxAjQhAAVgrARQgjAOgQAIIgZAMIAAAAQgaA4grAsQg4A3hJAXQhVAbhNghQgmgQgigiQgegegSglQgphOAChRQABgtASgrQAQgrAcgfQA2g9BKgaQA5gUA+ACQE1i3EtgxQC6gfCgAeQBXAPBVAlQBUAkBIA2QCMBnBrCcQBjCPA/CwQA5CcAfC7QAOBYAGBYQADAxABAoIgEBZQgBAKgEAIQgHAQgPAGQgHADgHAAQgJAAgIgFg");
	this.shape_4.setTransform(437.839,112.8244,0.0857,0.0857,-16.9318);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#64C141").s().p("AAeD6QhJgChIguIg5guQADjfghizQCCCoBigVQBRgQAriGQAjCVAMCQQAKBygHAQQgNAUgcATQg1AlhFAAIgHAAg");
	this.shape_5.setTransform(445.81,115.0719,0.0857,0.0857,-16.9318);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8AEA55").s().p("AJuKOQADjgghizQhAlPjEiZQieh7jsADQivACjEBFQiQAygpAiQgUA8guArQgrAqg1APQg2APgvgSQg0gUgeg3QhKiGBVhiQAkgpA4gVQA3gUA5AIQBCgnBNglQCUhICQgqQG/iEEoC5QDRCDCKDzQBtC+A7D3QAjCVAMCRQAKBygHAQg");
	this.shape_6.setTransform(438.0457,112.9724,0.0857,0.0857,-16.9318);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8AEA55").s().p("AJuKOQADjgghizQhAlPjEiZQieh7jsADQivACjEBFQiQAygpAiQgUA8guArQgrAqg1APQg2APgvgSQg0gUgeg3QhKiGBVhiQAkgpA4gVQA3gUA5AIQBCgnBNglQCUhICQgqQG/iEEoC5QDRCDCKDzQBtC+A7D3QAjCVAMCRQAKBygHAQg");
	this.shape_7.setTransform(438.0457,112.9724,0.0857,0.0857,-16.9318);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#362045").s().p("AICMWQhXgOhIg8QhKg9gghZQgSgvABg2QABg3AUgvQAbhBA6g0QAFhUgFhLQgIhlgbhLQgOgmgWggQgKgOgOgNQgPgOgQgMQhAgzhJACQhGAChQA0QhFAshJBNQhyB6h9DFIAAABQgIANgPAEQgPAEgNgIQgPgIgFgRQgFgRAIgPQA3huAthMQA7hiA+hNQBPhjBMg4QBqhQBrgKQA8gHA/ASQA8ARAzAjQAYAQAYAWQAZAWAUAaQAlAwAaA/QAnBhAJCGQAHBwgSB2QgGAkgcAUIAAABQgvAigNAjQgOAiAOApQAOAqAoAiQApAiArAGQAWADARgEQAQgEASgMQAjgZAPgtQAPgrgMgvQgLgugkgoQgbgeAGgqIAAgEQAXiWgGiTQgFikgph7QguiPhchLQgqgjhGgdIgfgMIgggKQgrgNgWgDQh+gZiLAmQh9AjiBBVQhuBIh0B0Qg1A1gxA6IhhB9QgIALgMADQgNAEgNgGQgOgHgGgQQgFgQAHgQIAEgKIAnhFQAYgkAVgfQArg9A4hCQBuiAB6hdQCKhqCUgvQChg2ClAXQARACAYAFIApAJQA8ASATAIQBeAlA7AvQBGA2A1BRQAxBKAdBZQAxCTAGDDQABCdgXCLQAqA7AQBBQAMAvgCAyQgCAygQAtQghBihOA3QgqAeguALQgZAGgcAAQgVAAgVgDg");
	this.shape_8.setTransform(467.0237,116.0388,0.0857,0.0857,-16.9318);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#64C141").s().p("AgLEdQhIgVhAg7QhBg6gXhUQgIgagCgaIgBgTQAHgTA2hLQBKhmBYhaQgdCeBiBIQBHAzCCADQhjB7hlC2IgEAAQgWAAgggKg");
	this.shape_9.setTransform(462.4037,116.6954,0.0857,0.0857,-16.9318);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8AEA55").s().p("AI4LGQhDgCg9grQg9grgdhAQgfhEARhCQAThLBNg4QAPhggIh1QgPjohxhkQh0hniCAVQiiAaiuDZQhjB7hlC1IkmkvQAHgTA2hLQBKhmBYhZQDIjNDShRQEWhrEKCBQD9B6AqGJQAYDfgoDMQA6BAANBNQAMBEgZBAQgYA9gxAlQgvAkg3AAIgGAAg");
	this.shape_10.setTransform(466.8625,116.0678,0.0857,0.0857,-16.9318);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#362045").s().p("Ag4A0QgMgOAKgZQAIgYAYgWQAXgWAYgFQAZgGALAOQAMAOgKAZQgIAZgXAWQgYAWgYAFIgMACQgQAAgIgLg");
	this.shape_11.setTransform(455.0826,136.5964,0.0857,0.0857,-16.9318);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#362045").s().p("AgSA+QgQgVgGghQgGgfAIgaQAIgZARgEQAQgEAQAVQAQAVAGAgQAGAggIAaQgIAZgRAEIgFABQgNAAgOgSg");
	this.shape_12.setTransform(453.8735,136.5243,0.0857,0.0857,-16.9318);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#362045").s().p("ApdMzQiOg2hfhWQhghXghhnQgfhkAJiEQAKiVA8iWQCVl3GFkDQDoibEJgoQEKgoDvBVQCBAtBZBLQBZBLAhBaQAoBtgBCOQgCCgg1CfQiGGNmLEHQiYBmitAyQiaAsiiAAQjLAAithCgACqraQkCAcjhCWQlXDliIE/Qg2B/gLB9QgKBwAaBSQAWBGBLBAQBLA/BuAqQC/BJDegSQEGgVDgiWQFNjeB/lPQA1iKAGiIQAGh+gjhgQgWg6hEg1QhFg2higiQiIgxibAAQg3AAg5AGg");
	this.shape_13.setTransform(464.5475,130.219,0.0857,0.0857,-16.9318);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#362045").s().p("AgYQMQizg8iTinQiujHhHklQhqm6BzmPQAuihBNiCQBFh0BNhBQBCg3BdgKQBdgKBnAlQCrA+CPCqQCpDJBHEnQBpG0hfGGQgmCdhCB+Qg8BxhEA+QguArg8AWQg8AVhEAAQhNAAhTgcgAjotxQhFA6g8BsQhAB0gmCTQhbFgBcF9QA9D9CSCqQB7CPCUAxQBQAbBGgHQBGgIAtgpQAzguAwheQA4hsAiiIQBVlghgmQQg+kAiOitQh3iRiNg0Qg9gWg1AAQhHAAgqAkg");
	this.shape_14.setTransform(446.2061,128.5479,0.0857,0.0857,-16.9318);

	this.instance_4 = new lib.Group_17_1();
	this.instance_4.setTransform(464.35,127.95,0.086,0.086,-16.9427,0,0,109.9,70.5);
	this.instance_4.alpha = 0.6992;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#362045").s().p("AmuMYQi1gkiChaQiBhZgjhxQgehcAKh7QALiIA6iMQCOlZFtj0QDAh/DXgtQDBgoC7AeQCsAcB9BOQB7BNAkBjQAlBmgDCFQgDCUg1CUQiBFuluD1QjACAjdAoQhhAShfAAQhmAAhkgUg");
	this.shape_15.setTransform(464.5487,130.2282,0.0857,0.0857,-16.9318);

	this.instance_5 = new lib.Group_20_1();
	this.instance_5.setTransform(446.35,127.6,0.086,0.086,-16.9427,0,0,72,107);
	this.instance_5.alpha = 0.6992;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#362045").s().p("AB9PfQh7gDh9hOQiIhShniTQhyikg1jaQhkmeBol3QAqiaBHh6QBAhvBJg9QBHg8BxAJQBxAKB2BOQB/BWBhCSQBsCkA1DZQBkGdhWFvQgjCUg9B2Qg3Brg/A6QhKBEh0AAIgKAAg");
	this.shape_16.setTransform(446.2089,128.5466,0.0857,0.0857,-16.9318);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#362045").s().p("EgONAs+QgggDhfgPQgZgEgngIIhAgOQkOg9jih0Qjvh5jHjFQjHjFiEj1Qj4nKgxpdQgroSBvo0QBpofEDnjQEHnrGDlnQGWl7Hci9QD1hiEBgsQEEgsEBAPQEEAPD9BHQD8BGDrB6QDoB5DPCvQDMCsCpDWQFLGjCuIdQCpIMgEIuQgBETgqESQgPBpgkClIghCFIhDDJIhYC/IhIB3IgkA8Ih7ClIiJCYIiTCJQmNFMn9C/QklBmjKApQi9AnhAAHQiQANhyglQgWgHgKgVQgMgWAGgYQAHgYATgNIADgCQA0ggBCgVQAhgLBWgVQAogJBPgNQAogIBPgTQBtgZB9goQBjgfCDgwQHzjIFWkeICHh7IB8iHIBwiRIBgidIBOimIA8ivIAfh8QAkigANhcQApj8AAkDQAEoIienpQihn1kxmCQibjEi7ieQi9ifjVhwQjWhwjohBQjqhBjsgNQjsgOjuApQjrAojiBaQjfBZjPCGQjMCFi1CrQlnFRjzHKQjvHDhgH8QhkIJAoH2QAWEIBADtQBFD8ByDRQB1DaCpCsQCsCtDRBtQDJBqD0A7IB0AZIB4ATQCJAaBiAwIAEACQAUAKAJAWQAIAYgJAXQgJAXgWAJQg9AbhHAIQgfADgjAAQgeAAgigCg");
	this.shape_17.setTransform(463.2411,123.1242,0.0857,0.0857,-16.9318);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#64C141").s().p("Ay0DQQmUkIjenVQC6DTD1CjQFRDgGZBrQIOCJKvgLQK7gLI7iiQkkCPlHBYQk8BVk9AaIqhAzQqRgXnEkng");
	this.shape_18.setTransform(464.35,143.0364,0.0857,0.0857,-16.9318);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8AEA55").s().p("EgbhAmbQmUkJjdnVQjknhgOqAQgNo4CYotQCdo+FNndQFHnVHAkvQHIk1H+hZQIYhdIRClQIRClGWGDQGCFwDlILQDhIAAoJIQAoJQidI+Qh4G6lVFlQk2FGnMDgQklCPlHBYQk8BVk9AaIqgAzQqSgXnEkng");
	this.shape_19.setTransform(463.2958,123.1901,0.0857,0.0857,-16.9318);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#362045").s().p("AkxfuQhPghg1hIQgug9gUhaQgQhCADhOQABgzALhOQAkkXAFikQALjqgRjSQgNjUgnjkQghjGg+jtQgsithPkFQgGgUAHgTQAIgUASgJQATgKAVAHQAVAHAKAVIAAAAQDWHEBgGhQBnG8gPHsQgDC2ghEeQgHA9AAAmQgBAsAJAnQAIAjAOAUQAOATAYALQAZAMAlAAQAmAAAlgLQATgGAPgHQAPgHAMgJQAfgZAYgeQAxg8AhhlQAehaAKhmIACgPQAEgqAegdQAegdAoAAQAsAAAfAhQAfAhAAAvQANClArCAQAYBIAhAtQAgAsAgAJQAYAEAQgCQAPgCANgJQAggWAZg8QAthoANi2QALiZgNihQgKiLgci1Qgyk7hmk4QjGpel3oSQlxoKnxmAQgjgcgHguQgHguAZgnQAaglArgIQAsgIAjAcQILGVGDIjQGLIvDSKBQBsFKA0FMQAeC7ALCZQAPCygMCtQgJBrgOBJQgTBigjBUQgzB2hTA7Qg2Ang+AHQg3AJg8gPQg6gOgzgoQgrghgigxQghgvgag6QgUAkgXAfQgtA9g3AoQgdAYgkAQQgiAQggAKQhGAUhBAAQhPAAhHgeg");
	this.shape_20.setTransform(481.7058,155.3089,0.086,0.086,-16.9427);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#64C141").s().p("AlNmRQFtEbEuFnQkCBxk3Awg");
	this.shape_21.setTransform(473.6706,143.8773,0.086,0.086,-16.9427);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#64C141").s().p("AF4RiQiPgkhJkNQgWhUgNhhIgIhRIgGA8QgJBJgTBEQg9DciIBdQg0AjhMANQhXAOhFgaQi5hHArk3QBLocg1nuQgqmOiFmjQCHDaBME7QA5DqAeFDQARCxAUEiQAVDUApAyQBnB+CkiDQAzgpAzg/IApg1IAvBmQA8BxBDA3QDUCwDCnZQAAEehDCnQhGCuiAAAQgZAAgcgHg");
	this.shape_22.setTransform(484.9506,161.6466,0.086,0.086,-16.9427);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8AEA55").s().p("AIKeSQiPgjhJkNQgWhUgNhiIgIhQIgGA7QgJBJgTBFQg9DbiJBdQgzAkhMAMQhXAPhFgbQi5hHArk2QBLodg1nuQgqmOiFmiIAAgBQg5izhWjgIiWzNQLZI0G6M2QG8M2A9OJQAFBRgBBEQAAEehDCoQhFCtiBAAQgZAAgcgHg");
	this.shape_23.setTransform(481.7028,155.2997,0.086,0.086,-16.9427);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#362045").s().p("AhHBqQACgtAcgsQgxgOgdgfQgZgbAIgIQAEgDAiANQAvASAqAIQAZgjAZgvQASgiAEAAQALAAgCAmQgDAsgbAtQAwAOAeAfQAZAbgIAIQgEADgigNQgwgSgpgIQgZAigZAwQgSAigEAAQgLAAACgmg");
	this.shape_24.setTransform(465.5985,164.3217,0.0857,0.0857,-16.9318);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#362045").s().p("Ag2GeQhsghhOhhQhLhcgYh6QgZh8Alh1QATg8AjgzQAlg1AygjQAygiA8gPQA6gNA8AKQBxATBWBaQBPBTAdBxQADANgFAMQgGAMgLAGQgNAHgNgFQgNgFgHgOQgnhWhGg4QhHg4hNgGQhNgGg+AwQg+AxgYBQQgYBOAPBYQAOBYAxBGQAyBKBLAjQBPAnBRgUIAAgBQAMgCALAFQALAFAFAMQAGAOgEAOQgFAPgNAGQgwAag7AEIgXABQgsAAgsgNg");
	this.shape_25.setTransform(465.5762,164.4532,0.0857,0.0857,-16.9318);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#62C340").s().p("AhsEYQh4hGgyiSQgTg2gFg8IAEAHQBNCJB+A0QB8AzBjhAQBeg8ATiDQATiDhAiFQBBBCAhBeIAJBYQAEBpggBbQggBag8A3QgeAbgXAJQgwAUgwAAQhGAAhIgrg");
	this.shape_26.setTransform(465.9084,164.8752,0.0857,0.0857,-16.9318);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#362045").s().p("Ag2GeQhsghhOhhQhLhcgYh6QgZh8Alh1QATg8AjgzQAlg1AygjQAygiA8gPQA6gNA8AKQBxATBWBaQBPBTAdBxQADANgFAMQgGAMgLAGQgNAHgNgFQgNgFgHgOQgnhWhGg4QhHg4hNgGQhNgGg+AwQg+AxgYBQQgYBOAPBYQAOBYAxBGQAyBKBLAjQBPAnBRgUIAAgBQAMgCALAFQALAFAFAMQAGAOgEAOQgFAPgNAGQgwAag7AEIgXABQgsAAgsgNg");
	this.shape_27.setTransform(465.5012,164.3371,0.0855,0.0855,-16.9352);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8AEA55").s().p("AhmFKQh4hGgyiSQgziRAwiJQAwiJB3gvQB1gvB4BGQB4BGAzCSIikHSQgwATgwAAQhGAAhIgqg");
	this.shape_28.setTransform(465.6601,164.3691,0.0855,0.0855,-16.9352);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#362045").s().p("AjEc1QjRgjiNgsQi9g7iIhdQlPjohSnsQh0rDGQuIQCAkgCnkUQBYiSBEhfIASgZIAbgLQFkiaE1hRQH8iGCpCBQAwAlAYA3QAYA4gDBCQgMDiA6FDQAjDCBlGiQCFIhAnEPQBBHEg+FJIgFASQhnElljDCQleC/mgAAQh/AAh8gVgAEc46QlEBOlqCYQj/F1i7G+QlOMaBjJZQBCGQEGCzQBuBLChAxQB5AkDDAhQC8AfDMgZQDDgZCyhIQCxhIB7hpQCChvAvh/QA2kmhAmmQgmj9h+oFQhpmygkjOQg8lVAMj5QABgKgCgDQAAgDgDgCQghgZhQAAQhvAAjLAxg");
	this.shape_29.setTransform(470.583,157.1524,0.086,0.086,-16.9427);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#64C141").s().p("AlNmRQFtEbEuFnQkCBxk3Awg");
	this.shape_30.setTransform(473.6706,143.8773,0.086,0.086,-16.9427);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#64C141").s().p("AmEF1QjTgii7hBQBSiUBXiEIBFhoIDNhRQD1hdDLg2QKKivgNELQgMDpA5FCQlYBjmEAAQjiAAjZgjg");
	this.shape_31.setTransform(467.8586,145.8713,0.086,0.086,-16.9427);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#64C141").s().p("Ai0ROQjMgiiGgqQivg3h7hVQkmjNhJm7QgXiKgBiXQB2DXCwCIQDYCoEjAnQDJAaDegqQDbgqC2hgQC9hkBjiGQBsiRgVifQgKhSgfiaIg1kIQg9k+AhhkQATg6CBCJQBnBtClDhQBTFvAZEAQAhFJgwD+Qg0CWiNB/QiHB6jBBTQjBBSjXAcQhmANhiAAQh1AAhygTg");
	this.shape_32.setTransform(472.1698,162.3475,0.086,0.086,-16.9427);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8AEA55").s().p("Ai0bHQjMgiiGgqQivg3h7hVQkmjNhJm7QgXiKgBiYQgCmXCenaQB3llDIlwIAZguQBSiUBXiFIBFhoIDNhRQD1hdDLg2QKKivgNELQgMDpA5FDIARBaQAgCmBBERQBZFxASBRQBTFuAZEAQAhFKgwD+Qg0CWiNB/QiHB6jBBTQjBBSjXAcQhmANhiAAQh1AAhygTg");
	this.shape_33.setTransform(470.5831,157.1394,0.086,0.086,-16.9427);

	this.instance_6 = new lib.Group_0_1();
	this.instance_6.setTransform(371.9,181.55,0.1097,0.1097,0,0,0,132.2,54.7);
	this.instance_6.alpha = 0.5;

	this.instance_7 = new lib.Group_1_1();
	this.instance_7.setTransform(423.05,118.45,0.1097,0.1097,0,0,0,47.9,55.6);
	this.instance_7.alpha = 0.3516;

	this.instance_8 = new lib.Group_2();
	this.instance_8.setTransform(412.4,146.75,0.1097,0.1097,0,0,0,70.2,168.7);
	this.instance_8.alpha = 0.3516;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#362045").s().p("A0FUUQg0gagTg4QgSg3Aag1QHgu3QJsoQFJkBFejXQC5hxCBhBQA0gaA4ASQA4ASAaA0QAbA0gTA4QgSA4g0AaQhuA5ioBnQlODMk7D1QvrMMnDOAQgTAkgjAVQghAUgoAAQgiAAgdgPg");
	this.shape_34.setTransform(397.5911,192.1093,0.1094,0.1094);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#362045").s().p("AWZPSQgcgMgVgYQqOr4ygoIQl0ijl9h4Qh4gmhrgdIhYgWQg5gNgfgyQgfgxANg6QANg5AygfQAxgfA5ANQCOAhDWBCQGPB+GECsQTDIcK3MmQAnAtgFA6QgEA6gtAmQgnAjg1AAQgeAAgcgNg");
	this.shape_35.setTransform(531.9387,175.5513,0.1094,0.1094);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#362045").s().p("AnqF5Qi7iBgPjDQgQjSC+igQC9ihEkgWQEjgVDTCBQDUCCAQDTQAIBpgxBiQgxBjhkBPQhbBJh4AsQh4AsiGAKQgmADglAAQkLAAi6h/gAgWksQjIAPiMBkQiMBlAJB6QAKB6CZBPQCZBODIgPQBogIBcghQBbghBFg2QAwgmAdgsQAqhAgFhAQgJh7iZhOQiAhCihAAQggAAggADg");
	this.shape_36.setTransform(376.1728,192.2888,0.1094,0.1094);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_37.setTransform(376.1734,192.2871,0.1094,0.1094);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2F3A55").s().p("AoGGXQjHiLgQjUQgRjjDIitQDJiuE1gXQE0gYDgCNQDhCNARDlQAJBxg2BuQg2BthqBVQhhBMh9AuQh+AviMAKQgoADgmAAQkbAAjGiKgAgTkDQi/AOiABfQh5BYAIBgQAHBiCEBFQCNBKC/gPQBggHBXgfQBYgfA+gyQAqghAZgkQAkg2gEgzQgHhiiFhFQh2g9iYAAQgeAAgfACg");
	this.shape_38.setTransform(376.1268,192.1531,0.1093,0.1093);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FDF5AE").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_39.setTransform(376.1277,192.1558,0.1093,0.1093);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#362045").s().p("Aj+HeQhpgahYgxQhuhAhAhaQg/hagIhqQgIhpAxhjQAxhjBjhPQBchIB4gtQB4gsCGgKQCFgKB9AaQB9AZBmA6QBuA/A/BaQBABaAIBqQAIBpgxBjQgxBjhkBPQhbBJh4AsQh4AsiGAKQgpADghAAQhxAAhpgagAgWksQhoAIhcAhQhbAhhFA2QgwAmgeAsQgqBAAFBAQAGBBAzA4QAkAnA1AfQBLArBhATQBfATBngIQBogIBcghQBcghBEg3QAwgmAegsQApg/gFhBQgEhBg0g4Qgjgng2gfQhAgkhQgUQhPgThYAAQgaAAghADg");
	this.shape_40.setTransform(417.9093,194.2186,0.1094,0.1094);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF0000").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_41.setTransform(417.9096,194.2183,0.1094,0.1094);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#362045").s().p("AmYG6Qh0g1hHhUQhIhUgRhoQgShpAnhmQAohnBchYQBUhRB0g3QBzg3CEgWQCEgXB/AOQB/AOBqAwQB0A1BHBUQBIBUASBpQAjDPiuCxQiuCykgAwQhRAOhRAAQi1AAiVhDgAgykpQhnARhYAqQhZApg/A8QgsAqgZAvQgkBDALBAQALBAA4A0QAnAkA4AZQBQAkBgAKQBiAKBlgSQDHghCBhyQCChxgUh4QgMhAg4g0Qgngkg4gZQhtgxiJAAQg9AAhEALg");
	this.shape_42.setTransform(553.1006,170.5944,0.1094,0.1094);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF0000").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_43.setTransform(553.0986,170.5952,0.1094,0.1094);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#362045").s().p("AnkGSQiqhtgeixQgShoAohmQAohnBchYQBUhRB0g3QBzg3CEgWQEfgxDfBuQDfBuAjDQQASBpgoBmQgoBnhcBYQhUBQhzA3Qh0A3iEAXQhTAOhRAAQjsAAiohsgAgykpQhmARhZAqQhYApg/A8QgsAqgaAvQgkBDALBAQAVB5CgBAQCfBADGgiQBmgRBZgpQBYgqA/g8QAtgqAZgvQAkhCgLhAQgRhlh2g/Qhzg/ihAAQhAAAg/ALg");
	this.shape_44.setTransform(513.0643,182.5471,0.1094,0.1094);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF0000").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_45.setTransform(513.0643,182.5534,0.1094,0.1094);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#362045").s().p("AmrGnQhyg6hDhXQhDhXgNhqQgajQC2ipQC2iqEigjQEhgkDaB4QDZB4AaDSQANBpgsBlQgtBlhgBTQhYBNh2AxQh2AyiFAQQg8AIg6AAQjPAAijhUgAgjkqQjIAYiHBrQiHBrAPB5QAIBBA2A2QAlAlA3AcQBOAoBgAOQBhAOBmgMQBogNBaglQBaglBCg6QAugoAbgtQAnhBgIhBQgNhqh9hGQh8hFisAAQguAAguAGg");
	this.shape_46.setTransform(465.079,189.9852,0.1094,0.1094);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF0000").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_47.setTransform(465.0811,189.9913,0.1094,0.1094);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#362045").s().p("Eg/tBCsQuwhEnvi6Qnui5glkqQh/wMCMxkQCm03ICw/QJe0EQHsZQSluSafjQQafjQVfJYQSnIIODRMQL5OkHkTnQGXQfB/QNQAkEqmzErQm0EruDEnQs7EOw4DfQw4DfysCSQtMBosnA1QsjA1rLAAQpSAAn3gkgEgMfg+CQ5RDHxtNtQvXL4pBTRQnpQTieUBQiEQ3B6PjQAHA5BSBAQBhBKC2BBQHPClNvBAQNWA+RAgtQRAgsSdiRQSfiRQqjcQQqjcMukKQNFkSGZkQQChhrBMhgQBBhRgHg6Qhxudldu5QmbxiqDtmQrxv9vlowQx6qE2AAAQmFAAmfAyg");
	this.shape_48.setTransform(461.7291,134.7457,0.1094,0.1094);

	this.instance_9 = new lib.Group_24();
	this.instance_9.setTransform(469.8,125.6,0.1097,0.1097,0,0,0,526.5,331.9);
	this.instance_9.alpha = 0.3516;

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#272C2E").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape_49.setTransform(462.086,134.7463,0.1094,0.1094);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#362045").s().p("Eh4jApnQ2zhqt6kCQyUlThGo+QhGo+QfpkQMhnQVvnHQYOn7fpmhUAfpgGiAjDgETUAjEgETAgRgBUUAgTgBUAZaAB1QWzBqN6ECQSUFTBGI+QBGI+wfJkQshHQ1vHHQ4OH7/pGiUgfpAGhgjDAETQ4wDD3sBkQ3iBj0+AAQxOAAu4hEgEAsPgksQ3iBj4oDBUgi4AESgfaAGfQ/cGe4BH3Q2mHYsYHfQsXHeAuF1QAuF1NzERQNzERXvBuUAZMAB1AgFgBUUAgDgBUAi2gERUAi2gERAfcgGfQfbmfYCn3QWmnYMYneQMXnfgul1Qgul1tzkRQtzkQ3vhvQuqhDxIAAQ01AA3ZBjg");
	this.shape_50.setTransform(463.5186,177.2464,0.1094,0.1094);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7B7B7B").s().p("EheBAMEQgbjhOZkRQLgjbUbjuQOlirRlikQIzhSF4gwIOthlQRqhwO0g8QUuhTL/AiQPAAqAbDhQAOBwhcB7UgIdgEFgrVADFQtiA9vaBkIsrBYQz8Cj1ZDuUgqyAHfgHOAGAQh3hhgOhwg");
	this.shape_51.setTransform(461.9076,163.7038,0.1094,0.1094);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2F3A55").s().p("Egu4ALLQmLgzjbhbQjjhegPiBQgYjERJj7QL0itSkizQDNgeDNgdIApgGQDQgdB/gQIBzgNQCVgRClgRIErgeQS3h0MWgRQSIgZAYDHQAQCEjPCWQjICRmECUQsfEwz4DaIAAAAQm6BMnYA6QkQAikNAZIn0ApQonAlnSAAQpIAAnCg6g");
	this.shape_52.setTransform(462.5044,170.2862,0.1094,0.1094);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2F3A55").s().p("EhA4ASRQtUg+njidQn0ihgejxQgbjhOZkRQLgjaUbjvQOlirRlikQIzhSF4gwIOthlQRrhwOzg8QUuhTL/AiQPAAqAbDhQAeDxm+EWQmvEMssEJQstEKwtDfQxSDmzICWQzHCWxqAsQm9ARmWAAQpMAAn5gkg");
	this.shape_53.setTransform(461.9075,166.1568,0.1094,0.1094);

	this.instance_10 = new lib.Group_30();
	this.instance_10.setTransform(466.25,185.2,0.1097,0.1097,0,0,0,748.9,188.2);
	this.instance_10.alpha = 0.3516;

	this.instance_11 = new lib.Group_31();
	this.instance_11.setTransform(378.1,190.45,0.1097,0.1097,0,0,0,324.1,134.9);
	this.instance_11.alpha = 0.3516;

	this.instance_12 = new lib.Group_32();
	this.instance_12.setTransform(549.85,170,0.1097,0.1097,0,0,0,331.4,136.3);
	this.instance_12.alpha = 0.3516;

	this.instance_13 = new lib.Group_33();
	this.instance_13.setTransform(463.15,168,0.1097,0.1097,0,0,0,649.1,142.2);
	this.instance_13.alpha = 0.5;

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BBC5D2").s().p("Eh4YAnaQ4vhzuAkiQugktg3m/Qg2m/M7oDQMfnyXlnuQXknte/mcUAgGgGsAjggEWUAjegEXAgwgBRQfphPYvByQYuBzOAEiQOgEsA3G/QA2G/s7IEQsfHx3kHuQ3lHu+/GcUggGAGrgjgAEXUgjfAEXggvABRQs7AgrxAAQxDAAuohDg");
	this.shape_54.setTransform(463.3763,177.2656,0.1094,0.1094);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#362045").s().p("Eh37AkDQ2uhpt2j/QyPlQhFo2IhQqMQgHg0AggoQAggpA0gGQAzgGApAfQApAgAGA0IBQKMQAuF7N4EVQN3EVX1BuUAZOAB1AgFgBUUAgFgBUAi2gERUAi2gESAfdgGfQfcmeYCn4QWtnaManiQMbnkgvl7IhQqMID4gfIBQKMQBGI3wbJgQsfHN1pHEQ4NH7/pGhUgfnAGhgjEAEUQ4wDC3qBkQ3jBk08AAQxZAAushFg");
	this.shape_55.setTransform(463.9738,188.0928,0.1094,0.1094);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFF66").s().p("Eh4JAgKQ4vhyt/kjQugksg3m/IgjklQA/G4OVEqQOAEiYvBzQYvByfohPUAgwgBRAjfgEXUAjggEWAgGgGsQe/mcXlntQXkntMfnyQMzn/gtm7IAkElQA2G/s7IEQsfHy3kHtQ3lHt+/GdUggGAGrgjgAEWUgjfAEXggvABSQs7AgrxAAQxDAAuphEg");
	this.shape_56.setTransform(464.3038,189.5749,0.1094,0.1094);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFF66").s().p("Eh3yAi+Q4vhzuAkiQufktg3m/IhQqMMFc8gqxIBQKMQA3G/s8IEQsfHy3kHsQ3kHu/AGcUggFAGrgjgAEXUgjfAEWggwABSQs6AgrxAAQxEAAuohDg");
	this.shape_57.setTransform(464.0603,187.6108,0.1094,0.1094);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#362045").s().p("EhI7AeSQuMhyovjfQrfkmg4nKQg4nKKCnNQHolgNXlKQOrlsTQkbQTQkcVXinQVXioTvgWQTwgXPnB+QONByIvDfQLfEmA4HKQA4HKqCHNQnoFgtXFKQurFszPEbQzQEc1YCnQsPBgr5AxQr0Axq+AAQwYAAtMhrgAU46xQrvAwsJBfQ1HCmy+EXQy9EXucFlQtZFLnQFZQnQFaAiEaQAjEXIKDcQIKDcOKB1QO0B7SugOQUMgQWGitQVHimS/kXQS/kXObllQNYlLHQlZQHQlagjkaQgikZoWjgQoWjfuOhzQs9howFAAQqzAArsAwg");
	this.shape_58.setTransform(466.2295,199.3663,0.1094,0.1094);

	this.instance_14 = new lib.Group_40();
	this.instance_14.setTransform(466.75,201.85,0.1097,0.1097,0,0,0,677.4,134.4);
	this.instance_14.alpha = 0.3516;

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FDFEFF").s().p("Eg80AXSQtpg3qGiOQqOiQlkjaQkJijhSjDQBEjWIgj7QIRjzOMj4QOPj4SMjZQS0jhUpiiQUniiTIhJQSehGOvAVQOuAVI7BtQJOBwB1C/QghDSjZDeQklEppYEqQpREltBEIQtLEMvtDTQwPDaxeCJQ4pDB1hAAQpIAAolgjg");
	this.shape_59.setTransform(466.3936,203.5186,0.1094,0.1094);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#9A9A9A").s().p("EhIpAcGQvIh5opj0Qo8j9grlcQgqlcHul/QHdlxOOlgQOOlgSykXQTdkhVkiqQVkipT9gUQTSgUPIB6QPIB6IpDzQI8D9ArFcQAqFcnuF/QndFxuOFgQuOFgyyEXQzdEh1kCqQ1kCpz9AUQirADilAAQwIAAtChpg");
	this.shape_60.setTransform(466.2322,199.3659,0.1094,0.1094);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#362045").s().p("AgZLtQk9gKkhg8Qkhg7jghlQj6hxiCiUQiDiVAGikQAFimCNiLQCMiLEBhgQDnhVEkgoQEkgoE8ALQFcAMExBEQEoBBDeBuQDdBuB1CLQB5CQgFCdQgGCliMCMQiMCLkBBfQjOBNkBAoQkAAokZAAQg7AAhJgDgApYnRQjpAki6BFQivBBhlBTQhlBTgDBSQgDBRBfBaQBfBaCrBNQDKBbEJA2QEIA2EmAKQElAKELgkQEMgkDQhNQCvhBBlhTQBlhUADhSQADhXhnhdQhmhci6hPQmhivpCgUQhFgCg3AAQkDAAjqAkg");
	this.shape_61.setTransform(426.1378,218.8572,0.1094,0.1094);

	this.instance_15 = new lib.Group_44();
	this.instance_15.setTransform(426.4,219.2,0.1097,0.1097,0,0,0,153.2,62.9);
	this.instance_15.alpha = 0.1992;

	this.instance_16 = new lib.Group_45();
	this.instance_16.setTransform(510.3,208.9,0.1097,0.1097,0,0,0,148.2,73.4);
	this.instance_16.alpha = 0.1992;

	this.instance_17 = new lib.Group_46();
	this.instance_17.setTransform(468.85,218.45,0.1097,0.1097,0,0,0,151.8,65.2);
	this.instance_17.alpha = 0.1992;

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FDFEFF").s().p("AgUJxQp4gWm4jGQjRhdhwh1Qhzh4AEh+QAEh/B8hwQB4hsDWhPQHEioJ3AWQE2AKEaA7QEQA5DQBdQDQBeBwB0QB0B4gEB+QgEB/h8BwQh4BtjWBPQjWBPkTAmQjhAfjwAAQhAAAhBgCg");
	this.shape_62.setTransform(426.1379,218.8553,0.1094,0.1094);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#362045").s().p("AuhNPQkQgfirhlQiphlguigQgtifBaiwQBbiuDXiqQDCiYEJh/QELiAExhXQKmjCIBBNQD1AlCaBhQCfBjArCYQAuCghbCvQhbCvjXCpQjBCYkKCAQkKB/kxBYQjqBDjmAiQjmAjjQAAQh6AAhvgMgAEzo+QjcAgjgBAQkbBRjyBzQj1B1iuCJQiTBzhHBuQhGBuAWBPQAYBPB2A4QB1A5C6AUQDdAZENgeQEMgeEZhRQEahQD0h1QD0h0CviJQCThzBGhuQBGhugWhPQgdhmiug8Qiwg9kNAAQi6AAjOAfg");
	this.shape_63.setTransform(509.8446,208.5798,0.1094,0.1094);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FDFEFF").s().p("AuTLRQjjgZiOhMQiThPgjh6Qgjh7BTiQQBRiMCziMQF8krJgitQJeiuHgA2QDjAZCOBMQCTBPAjB6QAjB7hTCQQhRCMizCMQl7ErpgCtQnRCFmHAAQh3AAhwgNg");
	this.shape_64.setTransform(509.8419,208.5944,0.1094,0.1094);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#362045").s().p("AzlJrQlhidggkFQgTidBsiZQBoiVDTiBQDTiBEhhbQEqheFZgqQFYgrE4ATQEvATDsBKQDsBKCJB4QCOB8ATCcQAVClh1CeQh1CfjvCGQjXB4kaBVQkbBVk7AmQjnAdjkAAQoZAAlciagAg8nvQo+BGmQDUQiyBeheBlQhfBlALBXQALBYB0BMQB0BLDDAxQG3BtI+hHQEjgjEDhNQEDhNDBhtQCkhbBWhiQBXhhgKhSQgSiSkehlQkohpmvAAQjMAAjXAbg");
	this.shape_65.setTransform(468.5284,218.0857,0.1094,0.1094);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FDFEFF").s().p("Av4I6Qjdg8iAhhQiFhlgPh+QgQh+BpiBQBlh+DHhvQGljsJ0hNQJzhNHRB/QDdA8CABhQCFBlAPB+QAQB+hpCBQhlB+jIBvQmkDsp0BNQjrAdjWAAQlhAAkihPg");
	this.shape_66.setTransform(468.5273,218.0878,0.1094,0.1094);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E2E2E2").s().p("Av4I6Qjdg8iAhhQiFhlgPh+QgQh+BpiBQBlh+DHhvQGljsJ0hNQJzhNHRB/QDdA8CABhQCFBlAPB+QAQB+hpCBQhlB+jIBvQmkDsp0BNQjrAdjWAAQlhAAkihPg");
	this.shape_67.setTransform(468.5273,218.0878,0.1094,0.1094);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(39,44,46,0.8)").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape_68.setTransform(461.0741,134.8958,0.1096,0.1172);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(39,44,46,0.698)").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape_69.setTransform(461.0741,134.8958,0.1096,0.1172);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(39,44,46,0.6)").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape_70.setTransform(461.0741,134.8958,0.1096,0.1172);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(39,44,46,0.498)").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape_71.setTransform(461.0741,134.8958,0.1096,0.1172);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(39,44,46,0.4)").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape_72.setTransform(461.0741,134.8958,0.1096,0.1172);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(39,44,46,0.298)").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape_73.setTransform(461.0741,134.8958,0.1096,0.1172);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(39,44,46,0.2)").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape_74.setTransform(461.0741,134.8958,0.1096,0.1172);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(39,44,46,0.098)").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape_75.setTransform(461.0741,134.8958,0.1096,0.1172);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(39,44,46,0)").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape_76.setTransform(461.0741,134.8958,0.1096,0.1172);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(39,44,46,0)").s().p("Am9HkQhcgHg1gSQg2gTgDgcQgNhzAOh/QARiZA2h8QBAiWBuhcQCAhrC4gZQC3gYCVBHQCAA9BgCBQBQBsA0CPQAqB4ANByQADAcgwAgQgvAfhYAfQhXAfh0AaQh4AaiEASQiEARh6AFQgvACgrAAQhBAAg3gEg");
	this.shape_77.setTransform(461.0738,134.8968);

	this.instance_18 = new lib.Symbol3();
	this.instance_18.setTransform(464.15,156.8,1,1,0,0,0,124.4,70.7);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},145).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.5831,y:157.1394}},{t:this.shape_32,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:472.1698,y:162.3475}},{t:this.shape_31,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:467.8586,y:145.8713}},{t:this.shape_30,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_29,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.583,y:157.1524}},{t:this.shape_28,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.6601,y:164.3691}},{t:this.shape_27,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.5012,y:164.3371}},{t:this.shape_26,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.9084,y:164.8752}},{t:this.shape_25,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5762,y:164.4532}},{t:this.shape_24,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5985,y:164.3217}},{t:this.shape_23,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7028,y:155.2997}},{t:this.shape_22,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:484.9506,y:161.6466}},{t:this.shape_21,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_20,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7058,y:155.3089}},{t:this.shape_19,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2958,y:123.1901}},{t:this.shape_18,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.35,y:143.0364}},{t:this.shape_17,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2411,y:123.1242}},{t:this.shape_16,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2089,y:128.5466}},{t:this.instance_5,p:{regX:72,regY:107,scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:446.35}},{t:this.shape_15,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5487,y:130.2282}},{t:this.instance_4,p:{regX:109.9,regY:70.5,scaleX:0.086,scaleY:0.086,rotation:-16.9427}},{t:this.shape_14,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2061,y:128.5479}},{t:this.shape_13,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5475,y:130.219}},{t:this.shape_12,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:453.8735,y:136.5243}},{t:this.shape_11,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:455.0826,y:136.5964}},{t:this.shape_10,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:466.8625,y:116.0678}},{t:this.shape_9,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:462.4037,y:116.6954}},{t:this.shape_8,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:467.0237,y:116.0388}},{t:this.shape_7,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_6,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_5,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:445.81,y:115.0719}},{t:this.shape_4,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:437.839,y:112.8244}},{t:this.shape_3,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:461.7789,y:121.8517}},{t:this.shape_2,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:448.7593,y:120.6108}},{t:this.shape_1,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:458.5531,y:141.4152,skewX:0,skewY:0}},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},3).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.5831,y:157.1394}},{t:this.shape_32,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:472.1698,y:162.3475}},{t:this.shape_31,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:467.8586,y:145.8713}},{t:this.shape_30,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_29,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.583,y:157.1524}},{t:this.shape_28,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.6601,y:164.3691}},{t:this.shape_27,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.5012,y:164.3371}},{t:this.shape_26,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.9084,y:164.8752}},{t:this.shape_25,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5762,y:164.4532}},{t:this.shape_24,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5985,y:164.3217}},{t:this.shape_23,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7028,y:155.2997}},{t:this.shape_22,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:484.9506,y:161.6466}},{t:this.shape_21,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_20,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7058,y:155.3089}},{t:this.shape_19,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2958,y:123.1901}},{t:this.shape_18,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.35,y:143.0364}},{t:this.shape_17,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2411,y:123.1242}},{t:this.shape_16,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2089,y:128.5466}},{t:this.instance_5,p:{regX:72,regY:107,scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:446.35}},{t:this.shape_15,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5487,y:130.2282}},{t:this.instance_4,p:{regX:109.9,regY:70.5,scaleX:0.086,scaleY:0.086,rotation:-16.9427}},{t:this.shape_14,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2061,y:128.5479}},{t:this.shape_13,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5475,y:130.219}},{t:this.shape_12,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:453.8735,y:136.5243}},{t:this.shape_11,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:455.0826,y:136.5964}},{t:this.shape_10,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:466.8625,y:116.0678}},{t:this.shape_9,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:462.4037,y:116.6954}},{t:this.shape_8,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:467.0237,y:116.0388}},{t:this.shape_7,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_6,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_5,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:445.81,y:115.0719}},{t:this.shape_4,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:437.839,y:112.8244}},{t:this.shape_3,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:461.7789,y:121.8517}},{t:this.shape_2,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:448.7593,y:120.6108}},{t:this.shape_1,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:458.5531,y:141.4152,skewX:0,skewY:0}},{t:this.shape_68},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.5831,y:157.1394}},{t:this.shape_32,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:472.1698,y:162.3475}},{t:this.shape_31,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:467.8586,y:145.8713}},{t:this.shape_30,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_29,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.583,y:157.1524}},{t:this.shape_28,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.6601,y:164.3691}},{t:this.shape_27,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.5012,y:164.3371}},{t:this.shape_26,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.9084,y:164.8752}},{t:this.shape_25,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5762,y:164.4532}},{t:this.shape_24,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5985,y:164.3217}},{t:this.shape_23,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7028,y:155.2997}},{t:this.shape_22,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:484.9506,y:161.6466}},{t:this.shape_21,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_20,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7058,y:155.3089}},{t:this.shape_19,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2958,y:123.1901}},{t:this.shape_18,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.35,y:143.0364}},{t:this.shape_17,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2411,y:123.1242}},{t:this.shape_16,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2089,y:128.5466}},{t:this.instance_5,p:{regX:72,regY:107,scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:446.35}},{t:this.shape_15,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5487,y:130.2282}},{t:this.instance_4,p:{regX:109.9,regY:70.5,scaleX:0.086,scaleY:0.086,rotation:-16.9427}},{t:this.shape_14,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2061,y:128.5479}},{t:this.shape_13,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5475,y:130.219}},{t:this.shape_12,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:453.8735,y:136.5243}},{t:this.shape_11,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:455.0826,y:136.5964}},{t:this.shape_10,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:466.8625,y:116.0678}},{t:this.shape_9,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:462.4037,y:116.6954}},{t:this.shape_8,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:467.0237,y:116.0388}},{t:this.shape_7,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_6,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_5,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:445.81,y:115.0719}},{t:this.shape_4,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:437.839,y:112.8244}},{t:this.shape_3,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:461.7789,y:121.8517}},{t:this.shape_2,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:448.7593,y:120.6108}},{t:this.shape_1,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:458.5531,y:141.4152,skewX:0,skewY:0}},{t:this.shape_69},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.5831,y:157.1394}},{t:this.shape_32,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:472.1698,y:162.3475}},{t:this.shape_31,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:467.8586,y:145.8713}},{t:this.shape_30,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_29,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.583,y:157.1524}},{t:this.shape_28,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.6601,y:164.3691}},{t:this.shape_27,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.5012,y:164.3371}},{t:this.shape_26,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.9084,y:164.8752}},{t:this.shape_25,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5762,y:164.4532}},{t:this.shape_24,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5985,y:164.3217}},{t:this.shape_23,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7028,y:155.2997}},{t:this.shape_22,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:484.9506,y:161.6466}},{t:this.shape_21,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_20,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7058,y:155.3089}},{t:this.shape_19,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2958,y:123.1901}},{t:this.shape_18,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.35,y:143.0364}},{t:this.shape_17,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2411,y:123.1242}},{t:this.shape_16,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2089,y:128.5466}},{t:this.instance_5,p:{regX:72,regY:107,scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:446.35}},{t:this.shape_15,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5487,y:130.2282}},{t:this.instance_4,p:{regX:109.9,regY:70.5,scaleX:0.086,scaleY:0.086,rotation:-16.9427}},{t:this.shape_14,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2061,y:128.5479}},{t:this.shape_13,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5475,y:130.219}},{t:this.shape_12,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:453.8735,y:136.5243}},{t:this.shape_11,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:455.0826,y:136.5964}},{t:this.shape_10,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:466.8625,y:116.0678}},{t:this.shape_9,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:462.4037,y:116.6954}},{t:this.shape_8,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:467.0237,y:116.0388}},{t:this.shape_7,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_6,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_5,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:445.81,y:115.0719}},{t:this.shape_4,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:437.839,y:112.8244}},{t:this.shape_3,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:461.7789,y:121.8517}},{t:this.shape_2,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:448.7593,y:120.6108}},{t:this.shape_1,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:458.5531,y:141.4152,skewX:0,skewY:0}},{t:this.shape_70},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.5831,y:157.1394}},{t:this.shape_32,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:472.1698,y:162.3475}},{t:this.shape_31,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:467.8586,y:145.8713}},{t:this.shape_30,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_29,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.583,y:157.1524}},{t:this.shape_28,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.6601,y:164.3691}},{t:this.shape_27,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.5012,y:164.3371}},{t:this.shape_26,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.9084,y:164.8752}},{t:this.shape_25,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5762,y:164.4532}},{t:this.shape_24,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5985,y:164.3217}},{t:this.shape_23,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7028,y:155.2997}},{t:this.shape_22,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:484.9506,y:161.6466}},{t:this.shape_21,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_20,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7058,y:155.3089}},{t:this.shape_19,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2958,y:123.1901}},{t:this.shape_18,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.35,y:143.0364}},{t:this.shape_17,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2411,y:123.1242}},{t:this.shape_16,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2089,y:128.5466}},{t:this.instance_5,p:{regX:72,regY:107,scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:446.35}},{t:this.shape_15,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5487,y:130.2282}},{t:this.instance_4,p:{regX:109.9,regY:70.5,scaleX:0.086,scaleY:0.086,rotation:-16.9427}},{t:this.shape_14,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2061,y:128.5479}},{t:this.shape_13,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5475,y:130.219}},{t:this.shape_12,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:453.8735,y:136.5243}},{t:this.shape_11,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:455.0826,y:136.5964}},{t:this.shape_10,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:466.8625,y:116.0678}},{t:this.shape_9,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:462.4037,y:116.6954}},{t:this.shape_8,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:467.0237,y:116.0388}},{t:this.shape_7,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_6,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_5,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:445.81,y:115.0719}},{t:this.shape_4,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:437.839,y:112.8244}},{t:this.shape_3,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:461.7789,y:121.8517}},{t:this.shape_2,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:448.7593,y:120.6108}},{t:this.shape_1,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:458.5531,y:141.4152,skewX:0,skewY:0}},{t:this.shape_71},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},3).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.5831,y:157.1394}},{t:this.shape_32,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:472.1698,y:162.3475}},{t:this.shape_31,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:467.8586,y:145.8713}},{t:this.shape_30,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_29,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.583,y:157.1524}},{t:this.shape_28,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.6601,y:164.3691}},{t:this.shape_27,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.5012,y:164.3371}},{t:this.shape_26,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.9084,y:164.8752}},{t:this.shape_25,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5762,y:164.4532}},{t:this.shape_24,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5985,y:164.3217}},{t:this.shape_23,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7028,y:155.2997}},{t:this.shape_22,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:484.9506,y:161.6466}},{t:this.shape_21,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_20,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7058,y:155.3089}},{t:this.shape_19,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2958,y:123.1901}},{t:this.shape_18,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.35,y:143.0364}},{t:this.shape_17,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2411,y:123.1242}},{t:this.shape_16,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2089,y:128.5466}},{t:this.instance_5,p:{regX:72,regY:107,scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:446.35}},{t:this.shape_15,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5487,y:130.2282}},{t:this.instance_4,p:{regX:109.9,regY:70.5,scaleX:0.086,scaleY:0.086,rotation:-16.9427}},{t:this.shape_14,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2061,y:128.5479}},{t:this.shape_13,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5475,y:130.219}},{t:this.shape_12,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:453.8735,y:136.5243}},{t:this.shape_11,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:455.0826,y:136.5964}},{t:this.shape_10,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:466.8625,y:116.0678}},{t:this.shape_9,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:462.4037,y:116.6954}},{t:this.shape_8,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:467.0237,y:116.0388}},{t:this.shape_7,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_6,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_5,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:445.81,y:115.0719}},{t:this.shape_4,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:437.839,y:112.8244}},{t:this.shape_3,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:461.7789,y:121.8517}},{t:this.shape_2,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:448.7593,y:120.6108}},{t:this.shape_1,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:458.5531,y:141.4152,skewX:0,skewY:0}},{t:this.shape_72},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},3).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.5831,y:157.1394}},{t:this.shape_32,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:472.1698,y:162.3475}},{t:this.shape_31,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:467.8586,y:145.8713}},{t:this.shape_30,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_29,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.583,y:157.1524}},{t:this.shape_28,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.6601,y:164.3691}},{t:this.shape_27,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.5012,y:164.3371}},{t:this.shape_26,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.9084,y:164.8752}},{t:this.shape_25,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5762,y:164.4532}},{t:this.shape_24,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5985,y:164.3217}},{t:this.shape_23,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7028,y:155.2997}},{t:this.shape_22,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:484.9506,y:161.6466}},{t:this.shape_21,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_20,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7058,y:155.3089}},{t:this.shape_19,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2958,y:123.1901}},{t:this.shape_18,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.35,y:143.0364}},{t:this.shape_17,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2411,y:123.1242}},{t:this.shape_16,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2089,y:128.5466}},{t:this.instance_5,p:{regX:72,regY:107,scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:446.35}},{t:this.shape_15,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5487,y:130.2282}},{t:this.instance_4,p:{regX:109.9,regY:70.5,scaleX:0.086,scaleY:0.086,rotation:-16.9427}},{t:this.shape_14,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2061,y:128.5479}},{t:this.shape_13,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5475,y:130.219}},{t:this.shape_12,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:453.8735,y:136.5243}},{t:this.shape_11,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:455.0826,y:136.5964}},{t:this.shape_10,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:466.8625,y:116.0678}},{t:this.shape_9,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:462.4037,y:116.6954}},{t:this.shape_8,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:467.0237,y:116.0388}},{t:this.shape_7,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_6,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_5,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:445.81,y:115.0719}},{t:this.shape_4,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:437.839,y:112.8244}},{t:this.shape_3,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:461.7789,y:121.8517}},{t:this.shape_2,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:448.7593,y:120.6108}},{t:this.shape_1,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:458.5531,y:141.4152,skewX:0,skewY:0}},{t:this.shape_73},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},3).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.5831,y:157.1394}},{t:this.shape_32,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:472.1698,y:162.3475}},{t:this.shape_31,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:467.8586,y:145.8713}},{t:this.shape_30,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_29,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.583,y:157.1524}},{t:this.shape_28,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.6601,y:164.3691}},{t:this.shape_27,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.5012,y:164.3371}},{t:this.shape_26,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.9084,y:164.8752}},{t:this.shape_25,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5762,y:164.4532}},{t:this.shape_24,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5985,y:164.3217}},{t:this.shape_23,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7028,y:155.2997}},{t:this.shape_22,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:484.9506,y:161.6466}},{t:this.shape_21,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_20,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7058,y:155.3089}},{t:this.shape_19,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2958,y:123.1901}},{t:this.shape_18,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.35,y:143.0364}},{t:this.shape_17,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2411,y:123.1242}},{t:this.shape_16,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2089,y:128.5466}},{t:this.instance_5,p:{regX:72,regY:107,scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:446.35}},{t:this.shape_15,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5487,y:130.2282}},{t:this.instance_4,p:{regX:109.9,regY:70.5,scaleX:0.086,scaleY:0.086,rotation:-16.9427}},{t:this.shape_14,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2061,y:128.5479}},{t:this.shape_13,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5475,y:130.219}},{t:this.shape_12,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:453.8735,y:136.5243}},{t:this.shape_11,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:455.0826,y:136.5964}},{t:this.shape_10,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:466.8625,y:116.0678}},{t:this.shape_9,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:462.4037,y:116.6954}},{t:this.shape_8,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:467.0237,y:116.0388}},{t:this.shape_7,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_6,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_5,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:445.81,y:115.0719}},{t:this.shape_4,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:437.839,y:112.8244}},{t:this.shape_3,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:461.7789,y:121.8517}},{t:this.shape_2,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:448.7593,y:120.6108}},{t:this.shape_1,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:458.5531,y:141.4152,skewX:0,skewY:0}},{t:this.shape_74},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},3).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.5831,y:157.1394}},{t:this.shape_32,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:472.1698,y:162.3475}},{t:this.shape_31,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:467.8586,y:145.8713}},{t:this.shape_30,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_29,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.583,y:157.1524}},{t:this.shape_28,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.6601,y:164.3691}},{t:this.shape_27,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.5012,y:164.3371}},{t:this.shape_26,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.9084,y:164.8752}},{t:this.shape_25,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5762,y:164.4532}},{t:this.shape_24,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5985,y:164.3217}},{t:this.shape_23,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7028,y:155.2997}},{t:this.shape_22,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:484.9506,y:161.6466}},{t:this.shape_21,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_20,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7058,y:155.3089}},{t:this.shape_19,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2958,y:123.1901}},{t:this.shape_18,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.35,y:143.0364}},{t:this.shape_17,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2411,y:123.1242}},{t:this.shape_16,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2089,y:128.5466}},{t:this.instance_5,p:{regX:72,regY:107,scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:446.35}},{t:this.shape_15,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5487,y:130.2282}},{t:this.instance_4,p:{regX:109.9,regY:70.5,scaleX:0.086,scaleY:0.086,rotation:-16.9427}},{t:this.shape_14,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2061,y:128.5479}},{t:this.shape_13,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5475,y:130.219}},{t:this.shape_12,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:453.8735,y:136.5243}},{t:this.shape_11,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:455.0826,y:136.5964}},{t:this.shape_10,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:466.8625,y:116.0678}},{t:this.shape_9,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:462.4037,y:116.6954}},{t:this.shape_8,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:467.0237,y:116.0388}},{t:this.shape_7,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_6,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_5,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:445.81,y:115.0719}},{t:this.shape_4,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:437.839,y:112.8244}},{t:this.shape_3,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:461.7789,y:121.8517}},{t:this.shape_2,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:448.7593,y:120.6108}},{t:this.shape_1,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:458.5531,y:141.4152,skewX:0,skewY:0}},{t:this.shape_75},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},3).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.5831,y:157.1394}},{t:this.shape_32,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:472.1698,y:162.3475}},{t:this.shape_31,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:467.8586,y:145.8713}},{t:this.shape_30,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_29,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:470.583,y:157.1524}},{t:this.shape_28,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.6601,y:164.3691}},{t:this.shape_27,p:{scaleX:0.0855,scaleY:0.0855,rotation:-16.9352,x:465.5012,y:164.3371}},{t:this.shape_26,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.9084,y:164.8752}},{t:this.shape_25,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5762,y:164.4532}},{t:this.shape_24,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:465.5985,y:164.3217}},{t:this.shape_23,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7028,y:155.2997}},{t:this.shape_22,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:484.9506,y:161.6466}},{t:this.shape_21,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:473.6706,y:143.8773}},{t:this.shape_20,p:{scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:481.7058,y:155.3089}},{t:this.shape_19,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2958,y:123.1901}},{t:this.shape_18,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.35,y:143.0364}},{t:this.shape_17,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:463.2411,y:123.1242}},{t:this.shape_16,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2089,y:128.5466}},{t:this.instance_5,p:{regX:72,regY:107,scaleX:0.086,scaleY:0.086,rotation:-16.9427,x:446.35}},{t:this.shape_15,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5487,y:130.2282}},{t:this.instance_4,p:{regX:109.9,regY:70.5,scaleX:0.086,scaleY:0.086,rotation:-16.9427}},{t:this.shape_14,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:446.2061,y:128.5479}},{t:this.shape_13,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:464.5475,y:130.219}},{t:this.shape_12,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:453.8735,y:136.5243}},{t:this.shape_11,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:455.0826,y:136.5964}},{t:this.shape_10,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:466.8625,y:116.0678}},{t:this.shape_9,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:462.4037,y:116.6954}},{t:this.shape_8,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:467.0237,y:116.0388}},{t:this.shape_7,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_6,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:438.0457,y:112.9724}},{t:this.shape_5,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:445.81,y:115.0719}},{t:this.shape_4,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:437.839,y:112.8244}},{t:this.shape_3,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:461.7789,y:121.8517}},{t:this.shape_2,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:448.7593,y:120.6108}},{t:this.shape_1,p:{scaleX:0.0857,scaleY:0.0857,rotation:-16.9318,x:458.5531,y:141.4152,skewX:0,skewY:0}},{t:this.shape_76},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},3).to({state:[{t:this.shape_77},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9907,y:157.5778}},{t:this.shape_32,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:472.5928,y:162.8332}},{t:this.shape_31,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:468.2391,y:146.207}},{t:this.shape_30,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_29,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9905,y:157.5908}},{t:this.shape_28,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:466.0259,y:164.8769}},{t:this.shape_27,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:465.8655,y:164.8446}},{t:this.shape_26,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.3138,y:165.4258}},{t:this.shape_25,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:465.9782,y:164.9997}},{t:this.shape_24,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.0007,y:164.8668}},{t:this.shape_23,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:482.2117,y:155.7192}},{t:this.shape_22,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:485.4903,y:162.1235}},{t:this.shape_21,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_20,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:482.2147,y:155.7284}},{t:this.shape_19,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.662,y:123.3264}},{t:this.shape_18,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.733,y:143.37}},{t:this.shape_17,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.6068,y:123.2599}},{t:this.shape_16,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4066,y:128.7416}},{t:this.instance_5,p:{regX:56.9,regY:86,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:446.3}},{t:this.shape_15,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9296,y:130.4341}},{t:this.instance_4,p:{regX:93.8,regY:52.1,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531}},{t:this.shape_14,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4038,y:128.743}},{t:this.shape_13,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9284,y:130.4249}},{t:this.shape_12,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:454.15,y:136.7964}},{t:this.shape_11,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:455.3712,y:136.8688}},{t:this.shape_10,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:467.2619,y:116.132}},{t:this.shape_9,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:462.759,y:116.7673}},{t:this.shape_8,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:467.4248,y:116.1026}},{t:this.shape_7,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:438.1572,y:113.0149}},{t:this.shape_6,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:438.1572,y:113.0149}},{t:this.shape_5,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:445.9995,y:115.1328}},{t:this.shape_4,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:437.9483,y:112.8656}},{t:this.shape_3,p:{scaleX:0.0866,scaleY:0.0866,rotation:-1.9499,x:462.0499,y:121.9984}},{t:this.shape_2,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:448.9799,y:120.726}},{t:this.shape_1,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:458.8778,y:141.7345,skewX:0,skewY:0}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},5).to({state:[{t:this.shape_77},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9907,y:157.5778}},{t:this.shape_32,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:472.5928,y:162.8332}},{t:this.shape_31,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:468.2391,y:146.207}},{t:this.shape_30,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_29,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9905,y:157.5908}},{t:this.shape_28,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:466.0259,y:164.8769}},{t:this.shape_27,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:465.8655,y:164.8446}},{t:this.shape_26,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.3138,y:165.4258}},{t:this.shape_25,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:465.9782,y:164.9997}},{t:this.shape_24,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.0007,y:164.8668}},{t:this.shape_23,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:482.2117,y:155.7192}},{t:this.shape_22,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:485.4903,y:162.1235}},{t:this.shape_21,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_20,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:482.2147,y:155.7284}},{t:this.shape_19,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.662,y:123.3264}},{t:this.shape_18,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.733,y:143.37}},{t:this.shape_17,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.6068,y:123.2599}},{t:this.shape_16,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4066,y:128.7416}},{t:this.instance_5,p:{regX:56.9,regY:86,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:446.3}},{t:this.shape_15,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9296,y:130.4341}},{t:this.instance_4,p:{regX:93.8,regY:52.1,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531}},{t:this.shape_14,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4038,y:128.743}},{t:this.shape_13,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9284,y:130.4249}},{t:this.shape_12,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:454.15,y:136.7964}},{t:this.shape_11,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:455.3712,y:136.8688}},{t:this.shape_10,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:467.2619,y:116.132}},{t:this.shape_9,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:462.759,y:116.7673}},{t:this.shape_8,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:467.4248,y:116.1026}},{t:this.shape_7,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:438.1572,y:113.0149}},{t:this.shape_6,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:438.1572,y:113.0149}},{t:this.shape_5,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:445.9995,y:115.1328}},{t:this.shape_4,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:437.9483,y:112.8656}},{t:this.shape_3,p:{scaleX:0.0866,scaleY:0.0866,rotation:-1.9499,x:462.0499,y:121.9984}},{t:this.shape_2,p:{scaleX:0.0865,scaleY:0.0865,rotation:-31.9379,x:448.8645,y:120.5659}},{t:this.shape_1,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:458.8778,y:141.7345,skewX:0,skewY:0}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[{t:this.shape_77},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9907,y:157.5778}},{t:this.shape_32,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:472.5928,y:162.8332}},{t:this.shape_31,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:468.2391,y:146.207}},{t:this.shape_30,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_29,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9905,y:157.5908}},{t:this.shape_28,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:466.0259,y:164.8769}},{t:this.shape_27,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:465.8655,y:164.8446}},{t:this.shape_26,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.3138,y:165.4258}},{t:this.shape_25,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:465.9782,y:164.9997}},{t:this.shape_24,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.0007,y:164.8668}},{t:this.shape_23,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:482.2117,y:155.7192}},{t:this.shape_22,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:485.4903,y:162.1235}},{t:this.shape_21,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_20,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:482.2147,y:155.7284}},{t:this.shape_19,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.662,y:123.3264}},{t:this.shape_18,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.733,y:143.37}},{t:this.shape_17,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.6068,y:123.2599}},{t:this.shape_16,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4066,y:128.7416}},{t:this.instance_5,p:{regX:56.9,regY:86,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:446.3}},{t:this.shape_15,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9296,y:130.4341}},{t:this.instance_4,p:{regX:93.8,regY:52.1,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531}},{t:this.shape_14,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4038,y:128.743}},{t:this.shape_13,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9284,y:130.4249}},{t:this.shape_12,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:454.15,y:136.7964}},{t:this.shape_11,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:455.3712,y:136.8688}},{t:this.shape_10,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:467.2619,y:116.132}},{t:this.shape_9,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:462.759,y:116.7673}},{t:this.shape_8,p:{scaleX:0.0865,scaleY:0.0865,rotation:-31.9379,x:467.6736,y:116.0865}},{t:this.shape_7,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:438.1572,y:113.0149}},{t:this.shape_6,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:438.1572,y:113.0149}},{t:this.shape_5,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:445.9995,y:115.1328}},{t:this.shape_4,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:437.9483,y:112.8656}},{t:this.shape_3,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:462.065,y:121.8721}},{t:this.shape_2,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:448.8706,y:120.5727}},{t:this.shape_1,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:458.8778,y:141.7345,skewX:0,skewY:0}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[{t:this.shape_77},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9907,y:157.5778}},{t:this.shape_32,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:472.5928,y:162.8332}},{t:this.shape_31,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:468.2391,y:146.207}},{t:this.shape_30,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_29,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9905,y:157.5908}},{t:this.shape_28,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:466.0259,y:164.8769}},{t:this.shape_27,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:465.8655,y:164.8446}},{t:this.shape_26,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.3138,y:165.4258}},{t:this.shape_25,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:465.9782,y:164.9997}},{t:this.shape_24,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.0007,y:164.8668}},{t:this.shape_23,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:482.2117,y:155.7192}},{t:this.shape_22,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:485.4903,y:162.1235}},{t:this.shape_21,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_20,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:482.2147,y:155.7284}},{t:this.shape_19,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.662,y:123.3264}},{t:this.shape_18,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.733,y:143.37}},{t:this.shape_17,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.6068,y:123.2599}},{t:this.shape_16,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4066,y:128.7416}},{t:this.instance_5,p:{regX:56.9,regY:86,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:446.3}},{t:this.shape_15,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9296,y:130.4341}},{t:this.instance_4,p:{regX:93.8,regY:52.1,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531}},{t:this.shape_14,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4038,y:128.743}},{t:this.shape_13,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9284,y:130.4249}},{t:this.shape_12,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:454.15,y:136.7964}},{t:this.shape_11,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:455.3712,y:136.8688}},{t:this.shape_10,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:467.2619,y:116.132}},{t:this.shape_9,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:462.759,y:116.7673}},{t:this.shape_8,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:467.2585,y:115.7523}},{t:this.shape_7,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:438.1572,y:113.0149}},{t:this.shape_6,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:438.1572,y:113.0149}},{t:this.shape_5,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:445.9995,y:115.1328}},{t:this.shape_4,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:437.9483,y:112.8656}},{t:this.shape_3,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:462.065,y:121.8721}},{t:this.shape_2,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:448.8706,y:120.5727}},{t:this.shape_1,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:458.8778,y:141.7345,skewX:0,skewY:0}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[{t:this.shape_77},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9907,y:157.5778}},{t:this.shape_32,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:472.5928,y:162.8332}},{t:this.shape_31,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:468.2391,y:146.207}},{t:this.shape_30,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_29,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9905,y:157.5908}},{t:this.shape_28,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:466.0259,y:164.8769}},{t:this.shape_27,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:465.8655,y:164.8446}},{t:this.shape_26,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.3138,y:165.4258}},{t:this.shape_25,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:465.9782,y:164.9997}},{t:this.shape_24,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.0007,y:164.8668}},{t:this.shape_23,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:482.2117,y:155.7192}},{t:this.shape_22,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:485.4903,y:162.1235}},{t:this.shape_21,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_20,p:{scaleX:0.0867,scaleY:0.0867,rotation:-16.9359,x:481.9548,y:155.5058}},{t:this.shape_19,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.662,y:123.3264}},{t:this.shape_18,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.733,y:143.37}},{t:this.shape_17,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.6068,y:123.2599}},{t:this.shape_16,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4066,y:128.7416}},{t:this.instance_5,p:{regX:56.9,regY:86,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:446.3}},{t:this.shape_15,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9296,y:130.4341}},{t:this.instance_4,p:{regX:93.8,regY:52.1,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531}},{t:this.shape_14,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4038,y:128.743}},{t:this.shape_13,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9284,y:130.4249}},{t:this.shape_12,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:454.15,y:136.7964}},{t:this.shape_11,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:455.3712,y:136.8688}},{t:this.shape_10,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:467.2619,y:116.132}},{t:this.shape_9,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:462.759,y:116.7673}},{t:this.shape_8,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:467.2585,y:115.7523}},{t:this.shape_6,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:438.1572,y:113.0149}},{t:this.shape_5,p:{scaleX:0.0865,scaleY:0.0865,rotation:-31.9347,x:446.8872,y:114.888}},{t:this.shape_4,p:{scaleX:0.0864,scaleY:0.0864,rotation:-29.5766,x:437.2942,y:112.5085}},{t:this.shape_3,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:462.065,y:121.8721}},{t:this.shape_2,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:448.8706,y:120.5727}},{t:this.shape_1,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:458.8778,y:141.7345,skewX:0,skewY:0}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[{t:this.shape_77},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9907,y:157.5778}},{t:this.shape_32,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:472.5928,y:162.8332}},{t:this.shape_31,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:468.2391,y:146.207}},{t:this.shape_30,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_29,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9905,y:157.5908}},{t:this.shape_28,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:466.0259,y:164.8769}},{t:this.shape_27,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:465.8655,y:164.8446}},{t:this.shape_26,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.3138,y:165.4258}},{t:this.shape_25,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:465.9782,y:164.9997}},{t:this.shape_24,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.0007,y:164.8668}},{t:this.shape_23,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:482.2117,y:155.7192}},{t:this.shape_22,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:485.4903,y:162.1235}},{t:this.shape_21,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_20,p:{scaleX:0.0867,scaleY:0.0867,rotation:-16.9359,x:481.9548,y:155.5058}},{t:this.shape_19,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.662,y:123.3264}},{t:this.shape_18,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.733,y:143.37}},{t:this.shape_17,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.6068,y:123.2599}},{t:this.shape_16,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4066,y:128.7416}},{t:this.instance_5,p:{regX:56.9,regY:86,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:446.3}},{t:this.shape_15,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9296,y:130.4341}},{t:this.instance_4,p:{regX:93.8,regY:52.1,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531}},{t:this.shape_14,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4038,y:128.743}},{t:this.shape_13,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9284,y:130.4249}},{t:this.shape_12,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:454.15,y:136.7964}},{t:this.shape_11,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:455.3712,y:136.8688}},{t:this.shape_10,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:467.2619,y:116.132}},{t:this.shape_9,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:462.759,y:116.7673}},{t:this.shape_8,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:467.2585,y:115.7523}},{t:this.shape_6,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:438.1572,y:113.0149}},{t:this.shape_5,p:{scaleX:0.0865,scaleY:0.0865,rotation:-31.9347,x:446.8872,y:114.888}},{t:this.shape_4,p:{scaleX:0.0864,scaleY:0.0864,rotation:-29.5766,x:437.2942,y:112.5085}},{t:this.shape_3,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:462.065,y:121.8721}},{t:this.shape_2,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:448.8706,y:120.5727}},{t:this.shape_1,p:{scaleX:0.1251,scaleY:0.0908,rotation:0,x:458.869,y:141.6236,skewX:-24.2734,skewY:-11.6141}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[{t:this.shape_77},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9907,y:157.5778}},{t:this.shape_32,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:472.5928,y:162.8332}},{t:this.shape_31,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:468.2391,y:146.207}},{t:this.shape_30,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_29,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9905,y:157.5908}},{t:this.shape_28,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:466.0259,y:164.8769}},{t:this.shape_27,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:465.8655,y:164.8446}},{t:this.shape_26,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.3138,y:165.4258}},{t:this.shape_25,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:465.9782,y:164.9997}},{t:this.shape_24,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.0007,y:164.8668}},{t:this.shape_23,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:482.2117,y:155.7192}},{t:this.shape_22,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:485.4903,y:162.1235}},{t:this.shape_21,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_20,p:{scaleX:0.0867,scaleY:0.0867,rotation:-16.9359,x:481.9548,y:155.5058}},{t:this.shape_19,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.662,y:123.3264}},{t:this.shape_18,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.733,y:143.37}},{t:this.shape_17,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.6068,y:123.2599}},{t:this.shape_16,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4066,y:128.7416}},{t:this.instance_5,p:{regX:56.9,regY:86,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:446.3}},{t:this.shape_15,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9296,y:130.4341}},{t:this.instance_4,p:{regX:93.8,regY:52.1,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531}},{t:this.shape_14,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4038,y:128.743}},{t:this.shape_13,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9284,y:130.4249}},{t:this.shape_12,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:454.15,y:136.7964}},{t:this.shape_11,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:455.3712,y:136.8688}},{t:this.shape_10,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:467.2619,y:116.132}},{t:this.shape_9,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:462.759,y:116.7673}},{t:this.shape_8,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:467.2585,y:115.7523}},{t:this.shape_6,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:438.1572,y:113.0149}},{t:this.shape_5,p:{scaleX:0.0865,scaleY:0.0865,rotation:-31.9347,x:446.8872,y:114.888}},{t:this.shape_4,p:{scaleX:0.0864,scaleY:0.0864,rotation:-29.5766,x:437.2942,y:112.5085}},{t:this.shape_3,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:462.065,y:121.8721}},{t:this.shape_2,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:448.8706,y:120.5727}},{t:this.shape_1,p:{scaleX:0.1545,scaleY:0.0949,rotation:0,x:458.8575,y:141.52,skewX:-29.2774,skewY:-9.3888}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[{t:this.shape_77},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9907,y:157.5778}},{t:this.shape_32,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:472.5928,y:162.8332}},{t:this.shape_31,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:468.2391,y:146.207}},{t:this.shape_30,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_29,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9905,y:157.5908}},{t:this.shape_28,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:466.0259,y:164.8769}},{t:this.shape_27,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:465.8655,y:164.8446}},{t:this.shape_26,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.3138,y:165.4258}},{t:this.shape_25,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:465.9782,y:164.9997}},{t:this.shape_24,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.0007,y:164.8668}},{t:this.shape_23,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:482.2117,y:155.7192}},{t:this.shape_22,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:485.4903,y:162.1235}},{t:this.shape_21,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_20,p:{scaleX:0.0867,scaleY:0.0867,rotation:-16.9359,x:481.9548,y:155.5058}},{t:this.shape_19,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.662,y:123.3264}},{t:this.shape_18,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.733,y:143.37}},{t:this.shape_17,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.6068,y:123.2599}},{t:this.shape_16,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4066,y:128.7416}},{t:this.instance_5,p:{regX:56.9,regY:86,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:446.3}},{t:this.shape_15,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9296,y:130.4341}},{t:this.instance_4,p:{regX:93.8,regY:52.1,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531}},{t:this.shape_14,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4038,y:128.743}},{t:this.shape_13,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9284,y:130.4249}},{t:this.shape_12,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:454.15,y:136.7964}},{t:this.shape_11,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:455.3712,y:136.8688}},{t:this.shape_10,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:467.2619,y:116.132}},{t:this.shape_9,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:462.759,y:116.7673}},{t:this.shape_8,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:467.2585,y:115.7523}},{t:this.shape_6,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:438.1572,y:113.0149}},{t:this.shape_5,p:{scaleX:0.0865,scaleY:0.0865,rotation:-31.9347,x:446.8872,y:114.888}},{t:this.shape_4,p:{scaleX:0.0864,scaleY:0.0864,rotation:-29.5766,x:437.2942,y:112.5085}},{t:this.shape_3,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:462.065,y:121.8721}},{t:this.shape_2,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:448.8706,y:120.5727}},{t:this.shape_1,p:{scaleX:0.1556,scaleY:0.1125,rotation:0,x:458.793,y:141.4597,skewX:-24.35,skewY:-11.5733}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[{t:this.shape_77},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9907,y:157.5778}},{t:this.shape_32,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:472.5928,y:162.8332}},{t:this.shape_31,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:468.2391,y:146.207}},{t:this.shape_30,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_29,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9905,y:157.5908}},{t:this.shape_28,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:466.0259,y:164.8769}},{t:this.shape_27,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:465.8655,y:164.8446}},{t:this.shape_26,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.3138,y:165.4258}},{t:this.shape_25,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:465.9782,y:164.9997}},{t:this.shape_24,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.0007,y:164.8668}},{t:this.shape_23,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:482.2117,y:155.7192}},{t:this.shape_22,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:485.4903,y:162.1235}},{t:this.shape_21,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_20,p:{scaleX:0.0867,scaleY:0.0867,rotation:-16.9359,x:481.9548,y:155.5058}},{t:this.shape_19,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.662,y:123.3264}},{t:this.shape_18,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.733,y:143.37}},{t:this.shape_17,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.6068,y:123.2599}},{t:this.shape_16,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4066,y:128.7416}},{t:this.instance_5,p:{regX:56.9,regY:86,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:446.3}},{t:this.shape_15,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9296,y:130.4341}},{t:this.instance_4,p:{regX:93.8,regY:52.1,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531}},{t:this.shape_14,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4038,y:128.743}},{t:this.shape_13,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9284,y:130.4249}},{t:this.shape_12,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:454.15,y:136.7964}},{t:this.shape_11,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:455.3712,y:136.8688}},{t:this.shape_10,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:467.2619,y:116.132}},{t:this.shape_9,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:462.759,y:116.7673}},{t:this.shape_8,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:467.2585,y:115.7523}},{t:this.shape_6,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:438.1572,y:113.0149}},{t:this.shape_5,p:{scaleX:0.0865,scaleY:0.0865,rotation:-31.9347,x:446.8872,y:114.888}},{t:this.shape_4,p:{scaleX:0.0864,scaleY:0.0864,rotation:-29.5766,x:437.2942,y:112.5085}},{t:this.shape_3,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:462.065,y:121.8721}},{t:this.shape_2,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:448.8706,y:120.5727}},{t:this.shape_1,p:{scaleX:0.1578,scaleY:0.1418,rotation:0,x:458.6966,y:141.4858,skewX:-19.096,skewY:-14.9689}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[{t:this.shape_77},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.instance_14},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_9},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_33,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9907,y:157.5778}},{t:this.shape_32,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:472.5928,y:162.8332}},{t:this.shape_31,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:468.2391,y:146.207}},{t:this.shape_30,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_29,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:470.9905,y:157.5908}},{t:this.shape_28,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:466.0259,y:164.8769}},{t:this.shape_27,p:{scaleX:0.0863,scaleY:0.0863,rotation:-16.9456,x:465.8655,y:164.8446}},{t:this.shape_26,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.3138,y:165.4258}},{t:this.shape_25,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:465.9782,y:164.9997}},{t:this.shape_24,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:466.0007,y:164.8668}},{t:this.shape_23,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:482.2117,y:155.7192}},{t:this.shape_22,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:485.4903,y:162.1235}},{t:this.shape_21,p:{scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:474.104,y:144.1938}},{t:this.shape_20,p:{scaleX:0.0867,scaleY:0.0867,rotation:-16.9359,x:481.9548,y:155.5058}},{t:this.shape_19,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.662,y:123.3264}},{t:this.shape_18,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.733,y:143.37}},{t:this.shape_17,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:463.6068,y:123.2599}},{t:this.shape_16,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4066,y:128.7416}},{t:this.instance_5,p:{regX:56.9,regY:86,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531,x:446.3}},{t:this.shape_15,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9296,y:130.4341}},{t:this.instance_4,p:{regX:93.8,regY:52.1,scaleX:0.0868,scaleY:0.0868,rotation:-16.9531}},{t:this.shape_14,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:446.4038,y:128.743}},{t:this.shape_13,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:464.9284,y:130.4249}},{t:this.shape_12,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:454.15,y:136.7964}},{t:this.shape_11,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:455.3712,y:136.8688}},{t:this.shape_10,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:467.2619,y:116.132}},{t:this.shape_9,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:462.759,y:116.7673}},{t:this.shape_8,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:467.2585,y:115.7523}},{t:this.shape_6,p:{scaleX:0.0866,scaleY:0.0866,rotation:-16.9498,x:438.1572,y:113.0149}},{t:this.shape_5,p:{scaleX:0.0865,scaleY:0.0865,rotation:-31.9347,x:446.8872,y:114.888}},{t:this.shape_4,p:{scaleX:0.0864,scaleY:0.0864,rotation:-29.5766,x:437.2942,y:112.5085}},{t:this.shape_3,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:462.065,y:121.8721}},{t:this.shape_2,p:{scaleX:0.0865,scaleY:0.0865,rotation:-16.946,x:448.8706,y:120.5727}},{t:this.shape_1,p:{scaleX:0.1578,scaleY:0.1418,rotation:0,x:458.6966,y:141.4858,skewX:-19.096,skewY:-14.9689}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).to({state:[{t:this.instance_18}]},5).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[]},40).to({state:[{t:this.instance_18}]},63).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(200).to({_off:false},0).wait(1).to({regX:124.3,regY:70.6,scaleX:0.9534,scaleY:0.9534,x:449.95,y:162.8},0).wait(1).to({scaleX:0.9067,scaleY:0.9067,x:435.9,y:168.9},0).wait(1).to({scaleX:0.8601,scaleY:0.8601,x:421.85,y:175},0).wait(1).to({scaleX:0.8135,scaleY:0.8135,x:407.8,y:181.2},0).wait(1).to({scaleX:0.7669,scaleY:0.7669,x:393.75,y:187.3},0).wait(1).to({scaleX:0.7202,scaleY:0.7202,x:379.7,y:193.4},0).wait(1).to({scaleX:0.6736,scaleY:0.6736,x:365.7,y:199.5},0).wait(1).to({scaleX:0.627,scaleY:0.627,x:351.65,y:205.65},0).wait(1).to({scaleX:0.5803,scaleY:0.5803,x:337.6,y:211.75},0).wait(1).to({scaleX:0.5337,scaleY:0.5337,x:323.55,y:217.9},0).wait(1).to({regX:124.5,regY:70.7,x:318.2,y:218.15},0).to({_off:true},40).wait(63).to({_off:false,regX:124.8,regY:70.9,scaleX:0.98,scaleY:0.98,x:366.9,y:249.15},0).wait(43));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_action = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// action
	this.start = new lib.play();
	this.start.name = "start";
	this.start.setTransform(420.2,42.2);
	new cjs.ButtonHelper(this.start, 0, 1, 2, false, new lib.play(), 3);

	this.replay = new lib.repllay();
	this.replay.name = "replay";
	this.replay.setTransform(795.1,73.75,0.5322,0.5322,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.replay, 0, 1, 2, false, new lib.repllay(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.start}]}).to({state:[]},5).to({state:[{t:this.replay}]},494).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.man1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.eyebrows("synched",0);
	this.instance.setTransform(620.4,780.7,3.3441,2.2654,0,0,0,99.2,242.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgC6AsLQiVAfiTgmQi8gwiAiZQhVgjhIg1QhlhMg9hoQiIhJhJiUQhfjCAmkhQAmkiCsl7QgjjigQkMQgZmtAhmUQBjyqI9rIIIrogQAcgcAlgNQAlgNAoADQAnAEAiATQAjAUAWAgIQ2XvQAlA0gEA/QgDA/grAvIq6MHIhzTdQB1CYBFCiQBpD1giDVQgRBug4BiQhIB/iEBeQghCwhBCMQhfDNiVBVQhiA4hvAAQhIAAhOgZgEgCpAmaQAjABAgAPQApASAcgBQAPAAAOgIQA8gjA1iMQAuh6APh7QAFgqAXgkQAXgkAlgVQCdhcAViDQAViDhci3QhCiChVhfQgZgcgLgkQgMgjADgmICA1iQAGg7AogtIKBrIItozNIl+F1QoeKpg2TBQgRF9AjGHQARDEAWB+QAKA5gYA0QisFvgfD/QgUClAmBdQAZA5AoATQAtAGAeAcQAbAYAUAuQAfBHBNAwQAnAYAgAKQBAARAmA2QBGBlBwAOQA/AJA5gUQAegLAfAAIAIABg");
	this.shape.setTransform(217.9122,1657.2879);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB78A").s().p("EgEkAlHQgwhmgeiHIgUhzQl+jeCZmuQAwiHBfiLIBWhwIiA1hIqOuqISp0AIFVGYQCbDAB1DpQFxLYAIQsQACFOgiFIQgRClgRBhQCFEcA3DjQBfGEiEDCQgpA8g7AiQgeARgVAEQgbA9gtAzQg8BEhZAtQgtAWggAJQh9CxjOAPQhAAEhBgMIg0gOQhMAihCAAQivAAhujsg");
	this.shape_1.setTransform(222.0786,1668.6915,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhsDdQhAhQgNh5QgMh4AthcQAthbBNgJQBMgIA/BQQBABQANB5QANB5guBbQgtBchNAIIgPABQhDAAg5hJg");
	this.shape_2.setTransform(815.0336,836.0295);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiZM8Qh1g2hihwQjPjsgmlpQgnloCZkSQBIiCBnhOQBrhQB9gOQB8gNB5A4QB2A3BiBvQDPDsAmFpQAnFoiZETQhICBhoBOQhqBRh9ANQgYADgYAAQhkAAhigug");
	this.shape_3.setTransform(832.874,854.6077);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeElQhNgIgthcQgthbAMh5QANh5BAhQQA/hQBMAIQBNAJAtBbQAuBcgNB4QgNB5hABQQg5BJhEAAIgOgBg");
	this.shape_4.setTransform(430.4836,836.0295);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhcNnQh9gNhqhRQhohOhIiBQiYkTAmloQAmlpDPjsQBihvB1g3QB6g4B8ANQB9AOBqBQQBoBOBICCQCZESgnFoQgmFpjPDsQhiBwh1A2QhiAuhkAAQgYAAgYgDg");
	this.shape_5.setTransform(412.633,854.6077);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FC476B").s().p("AgyGJQixgDi1gqQkDg8j7iIQCAinCXh4QDhi1D6g1QBXgSBZgEQDdgJDYBQQCRA2CHBcIC+DvQlOEEmLA3QhbANhwAAIglAAg");
	this.shape_6.setTransform(627.8773,1126.1819,1.3961,1.6702);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("EBE1BIWQg6gEgsgjQgtgkgQg3QguifhSjnQiknNi+mTQpe0FqKj0QkEhhmYAbQj6AQo8BhQnWBQj7AeQmoAyligJQuQgXrfmsQAaDBBGCYQBaDECcBwQAsAgATAzQAUAygMA1QgMA1gnAlQgnAmg1AKQg/ALhbgCQivgCi6g0QpGihngpDQl8EmlhH7QopMZlDRXQgQA4gvAkQguAjg6ACQg6ADgxghQgwghgUg3QhQjahhlLQizpihlo5QiLsRAepcQAmrtErmrQFanuKUg1QAsj/BjkEQCPl0Dtk8QGmoxKrlCQODmpT8AfQSMAdMnj2QJli8FvlMQEEjsB2kcQA7iQAIhqQADgrAWglQAXgmAkgXQAkgXArgFQArgEAoAPQC/BLDBB/QDgCTCxC7QG9HTAoJJIJ7qxQAbgdAkgPQAjgPAnABQAnABAjARQAkARAYAeQBDBQBQCFQCWD6BhEhQEwOHk3PBIC5hlQAjgTApgCQApgDAmAQQAlAQAcAeQAbAeAMAnQApCPAhDIQA/F9gRFpQgYHxiwGKQjaHqm6EvQg+KcheJvQiiQrjIHhQgVAzgtAeQgtAeg3AAgEApGAVkQJCDYITNYQFwJQEtMyQCLpBBxuQQAkkfAdkfIAWjtQAEgqAWglQAWgkAlgXQJIlsCMr2QBanthoo+ImfDjQg0Acg6gIQg6gHgrgpQgqgogLg6QgKg6AZg1QGFslhhsQQhAoEkBmsItKOSQgpAug9AKQg9AKg3gdQg2gdgZg5QgZg4APg8QCWpZlPniQjflBmOjfQhMDzigDeQjYErlaDiQukJg7HAAQh5AAh/gDQwRgartEdQruEcm6JNQkQFqh/G2QhADcgKCXQgEBHg0AyQg0AxhIAAQkpAAjXBjQjYBiiNDKQlyIQBzSKQBNMTEaPDQGryTKjryQDYjxDZirQB1hbBNgsQA8ghBCAOQBCAPApA2QDqE8EKDCQDTCaDdBGQiPkHggldQgKhwADhtQACg7AEgnQAGgwAcgmQAdgnAsgUQAsgTAvAFQAwAFAnAcQLPIIOKAzQFkAUGxgwQEDgdHwhVQFwg+CwgXQEmgnDcAAQFkAAEHBjg");
	this.shape_7.setTransform(656.1324,462.9994);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#330000").s().p("EBDAA/ZQiondjImlQkYpMkumFQl6nnmHiSQjIhLkFgLQjcgJkvAkQi+AXmBBCQmfBGjMAcQr5Bmo2hWQrxhzp3nIIgFB+QAACbAbCVQBVHcFADnQgwAJhTgCQingFiyg3Qo5iynOpuIgzAhQhCAshLA9QjvDAjpEWQrqN5mZV7QhDi4hYkmQiwpOhnooQiRsGAUpOQAZrhEbmVQFOneKsAAQAJigBEjvQCIndEnmJQGeomKhkwQNKl8SyAdQSxAeNBkAQKajMGRl4QEfkNB9lIQA/ikAFhuIBPAjQBiAvBkA9QE/DCDVD/QCXCzBXDLIAAAAQChF1hDGrIAAABQgNBTgTBMIPjw5IAyBDQA9BZA6BpQC7FTBSGDQBTF/ghGSQgXEmhWEnQhPEQiBELIJxlWIAYBeQAcB4AUCFQBBGngmGCQgeE/hlEOQh2E7jTDuQihC2jZCHIggFNQgqGag2GBQirTPjVICQgsiahVjvg");
	this.shape_8.setTransform(655.9048,462.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("EgfSBKBQuLlSqkpzQqkp0lrtKQl2thAAvjQAAv7F9vkQF9vlK2saQLXs/OSm8QOTm8PaAAQPbAAOTG8QOSG8LXM/QK2MaF9PlQF9PkAAP7QAAPjl2NhQlsNKqkJ0QqkJzuKFSQukFbwvAAQwuAAuklbgEgbmhDPQs6GUqNLXQqNLXlqOYQl6O9AAPyQAAOVFbMeQFRMJJ0JDQJzJDNJE3QNhFAPhAAQPiAANhlAQNJk3JzpDQJzpDFRsJQFbseAAuVQAAvyl5u9QlruYqMrXQqNrXs6mUQtbmkuMAAQuLAAtbGkg");
	this.shape_9.setTransform(615.775,863.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFB78A").s().p("EgZ7BIzQsOjxp0nKQp9nPmjqBQmyqWijscQhgnMAAnvQAAvqF7vQQFxu3KXr4QKksENYmvQOJnGPKAAQPLAAOIHGQNZGvKjMEQKXL4FyO3QF7PQAAPqQAACCgHB1QguOvmNMfQl7L9qYIyQqMIptUEnQtcEpvCAAQtlAAsWj1g");
	this.shape_10.setTransform(615.775,863.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ak+V9QkCg7jRihQjSihiHj0QiEjugkkUQglkTA/kXQA/kWCYjpQCZjpDeifQDjihECg3QECg3ECA7QECA6DRCiQDSChCHDzQCEDvAlEUQAkETg/EWQg4D6iDDXQh9DQi1CaQi0CZjUBSQjZBTjhAAQiGAAiCgdgAjZwEQiHAsh5BXQioB3h0CyQhzCygxDWQgwDVAbDSQAcDSBjC1QBhCvCVBzQCVB0C2ApQC7ArC9gsQC4grCgh1QChh0BxiuQB1izAxjWQAwjVgbjSQgcjShji0QhhiviVh0QiVh0i2gpQhcgVhdAAQiJAAiGAtg");
	this.shape_11.setTransform(1097.635,965.6174);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AmCVHQjVhSiziZQi1iah+jQQiCjXg5j6Qg/kWAlkTQAkkUCEjvQCHjzDSihQDSiiEBg6QEDg7EFA5QD8A3DdCaQDcCbCaDmQCgDuBAEdQBBEegpEaQgnESiEDrQiFDqjMCfQjTCkkDA7QiCAdiFAAQjhAAjZhTgAjuwcQi2ApiUB0QiVB0hhCvQhkC0gbDSQgcDTAxDUQAwDWB1CzQBxCuChB0QChB1C3ArQC9AsC7grQC8gqCYh6QCTh2BfiuQBeivAbjNQAcjUgwjVQhWl8kXj0QkTjxlPAAQhcAAhdAVg");
	this.shape_12.setTransform(131.2868,965.6371);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFB78A").s().p("AkWTNQjfgzi2iPQiwiKhxjMQhxjNgijvQgij4A5j5QA5j6CKjRQCFjJC+iIQC/iIDagwQDhgyDfAyQDfAzC2CPQCwCKBxDNQBxDMAiDvQAiD4g5D5Qg4D6iKDRQiGDKi+CHQi/CIjaAwQhwAZhvAAQhwAAhxgZg");
	this.shape_13.setTransform(1097.625,965.6375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFB78A").s().p("AipTNQjagwi/iIQi+iHiGjKQiKjRg5j6Qg4j5Aij4QAhjvByjMQBxjNCwiKQC2iPDfgzQDfgyDhAyQDaAwC/CIQC+CICGDJQCKDRA4D6QA5D5giD4QghDvhxDNQhyDMiwCKQi2CPjfAzQhwAZhxAAQhvAAhwgZg");
	this.shape_14.setTransform(131.3,965.6375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ApoUlQkdhtjbjGQjbjGh5kAQh9kKAAkiQAAkhB9kKQB5kADbjGQDcjHEchsQEnhxFBAAQFCAAEmBxQEdBtDcDGQDbDFB5EBQB9EKAAEhQAAEih9EKQh5EAjbDGQjcDGkdBtQkmBxlCAAQlBAAknhxgAnMuzQjVBOikCOQikCPhbC5QhdC/AADQQAADRBdC/QBbC5CkCPQCkCODVBOQDcBRDwAAQDxAADchRQDVhOCkiOQCkiPBai5QBei/AAjRQAAjQhei/Qhai5ikiPQikiOjVhOQjchRjxAAQjwAAjcBRg");
	this.shape_15.setTransform(640.65,1306.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFB78A").s().p("AoaRtQj5hejAipQjAirhpjcQhtjlAAj6QAAj5BtjkQBpjdDAiqQDAiqD5heQEBhgEZAAQEaAAECBgQD4BeDACqQDACqBpDdQBtDkAAD5QAAD6htDlQhpDcjACrQjACpj4BeQkCBhkaAAQkZAAkBhhg");
	this.shape_16.setTransform(640.65,1306.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("EgP2A1YQs1gysci1Qj+g7jfhBQh0gihJgaQg6gTghgzQgigzAEg8IB9+6QnTCPl4AJQoaANkGkNQjSjXgClyQgBlwDQoFQEcrBHYoJQHZoKKLlIQGSjMHhiGQHtiKIVhJQIVhLH6AAQX9AASJD6QOmDJKNFhQHaD/EdE3QCWCkA4B7QAYA3gNA5QgNA6gtAoI1MSbQgyAqhBACQhBABgzgpIgIgFMABJAnjQABAugUApQgVAoglAaQuFJwxtEcQuNDjv1AAQkUAAkNgQgEgwEAGWQAuAGAnAbQAmAbATAqQAVAqgDAuMgCGAg5QGhB8HyBaQMMCML6AMQPjAPNxjPQQqj7NVo5MgBSgsHQgCg1AcgtQAbgtAvgYQAvgXA1AGQA0AFAqAhIDBCdIRkvRQiMiyjtitQlYj6nrjBUgVggIfgjQAAAQniAAn8BGQn8BHnWCDQm+B+l0C6QpXEumnHUQmnHVkHKLQihGSgTEUQgSEUB/CCQC7C/IJg7QGIguGSiWIALgFQAggNAjAAIAWABg");
	this.shape_17.setTransform(639.7998,1571.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#27B7FF").s().p("EgPqAykQsrgxsZi3Qj4g5jYg/Iing1MACOgjGIgQAGQirBBjVA3QltBfkiAGQoPAMi9kfQjylwFPtCQGqwfNQpkQDwiuEYiNQGCjDHQiDQH9iOIjhIQHuhBHTAAQQMAANeBzQOiB8LID+QMaEbHFGgQCNCCBbB/QAtBAARAmInFGJIgBABIuGMQIjjlxMAAAAvhQvcKszrEGQr3CetAAAQkPAAkXgRg");
	this.shape_18.setTransform(639.6795,1571.3924);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("EgCsArsQiVhVhfjNQhBiMghiwQiEhehIh/Qg4higRhuQgijVBpj1QBFiiB1iYIhzzdIq6sHQgrgvgDg/QgEg/Alg0IQ23vQAWggAjgUQAigTAngEQAogDAlANQAlANAcAcIIrIgQI9LIBjSqQAhGUgZGtQgQEMgjDiQCsF7AmEiQAmEhhfDCQhJCUiIBJQg9BohlBMQhIA1hVAjQiACZi8AwQiTAmiVgfQhOAZhIAAQhvAAhig4gAvXyNIKBLIQAoAtAGA7ICAViQADAmgMAjQgLAkgZAcQhVBfhCCCQhcC3AVCDQAVCDCdBcQAlAVAXAkQAXAkAFAqQAPB7AuB6QA1CMA8AjQAOAIAPAAQAcABApgSQAggPAjgBQAkgCAhAMQA5AUA/gJQBwgOBGhlQAmg2BAgRQAggKAngYQBNgwAfhHQAUguAbgYQAegcAtgGQAogTAZg5QAmhdgUilQgfj/islvQgYg0AKg5QAWh+ARjEQAjmHgRl9Qg2zBoeqpIl+l1g");
	this.shape_19.setTransform(1091.2878,1609.1879);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFB78A").s().p("EgEkAlHQgwhmgeiHIgUhzQl+jeCZmuQAwiHBfiLIBWhwIiA1hIqOuqISp0AIFVGYQCbDAB1DpQFxLYAIQsQACFOgiFIQgRClgRBhQCFEcA3DjQBfGEiEDCQgpA8g7AiQgeARgVAEQgbA9gtAzQg8BEhZAtQgtAWggAJQh9CxjOAPQhAAEhBgMIg0gOQhMAihCAAQivAAhujsg");
	this.shape_20.setTransform(1101.3714,1635.5415);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AEVCvQgQgCgIgOQghg4gegiQgmgsgugZQgtgZgYgLQgogSgjAFQgdgCgxAHQg2AIgWAAIgiABQgUAAgNgDQgegGgMgnQgEgOAIgMQAGgIAOgLQAdgVApgLQAdgIAwgFQAVgCAfACIA1ACQAOABAQAGIAeAMQArAQAfAQQAVALAXASIApAjQA7A1AsBdQAIARgCATQgCAQgIAVQgEAMgKAAIgCAAg");
	this.shape_21.setTransform(850.3216,768.9192,3.3441,2.2654,14.999);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("Aj0DYQgTgcgCgfQAGgnAFgUQAahgBBhPQASgXAsgiIAxgjQAfgYBAgRQBRgVAzAEQAYACAnAPQAeAMgCAXQgCAUgFAMQgIAPgRAHQgfAOgoAIQgXAEgzAHQg0AHgiANQgsASgfAgIgrAuQgZAbgPAXQgVAjgMAxIgIAYQgGAPgCAJQgEAQgNACIgDAAQgLAAgJgMg");
	this.shape_22.setTransform(377.6535,781.5094,3.3441,2.2654,-14.999);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("Am6ASIN1gj");
	this.shape_23.setTransform(862.675,727.3875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#390176").s().p("ALqVyQgogVgZglQghgug+g7Qh2huiZhPQnhj5qVCFIgvAKQgyAJgwgSQgvgTgfgoQgegpgGgyQgFgyAWguQE7qTIGo+QCli3CmiaQBbhTA6guII1ltQArgcAygBQAygCAsAZQArAZAZAsQAZAsgCAyIgDB0MgBCAgcIgIERQgCA7gkAuQgkAug4ARQgXAHgbAAQgtAAgngUgADrJqQDoBODDCIIAJkxIAt2OIh6BPIiEBVQisCNjUDlQmCGhkRHYQBggIBgAAQFNAAEjBig");
	this.shape_24.setTransform(248.6572,1429.8458);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#27B7FF").s().p("EgaOA3cIgNgCIgNgDIgNgEIgMgGIgMgHIgKgJIgKgNIgLgNIgKgNIgBgBIgLgIIgMgHIgKgJIgJgKIgHgMIgGgLIgGgMIgEgEIgIgKIgEgEMABBggcIAJgGIAPgHIAPgHIAPgFIAPgEIAQgCIAQAAIAOACIAMACIANAFIALAFIALAHIAJAIIAJAKIAHAKIAGAMIAFANIADAPIAAAQIgBAMIACADIAIANIAGAPIAEAPIABAQIgBANIgDANIgEANIAEAMIADANIABAOIgBAMIgCANIgEANIgGANIgHALIgKAIIgLALIgMAKIgGAFIAIgCIANgDIAOgCIAOgBIANAAIANADIAMAEIAMAGIALAIIAKAIIAIAKIAIAKIAFAMIAFANIACANIABANIABAOIgBAOIgBAOIgDAPIAIAJIAGAKIAHAOIAFAPIACAQIgBAQIgDAQIgEALIgFAMIgIALIgIAKIgKAJIgLAGIgMAGIADARIAAAOIABAAIAJAJIAJAJIAHALIAGAMIAEAMIADASIAAARIgDASIgEAMIgGALIgHAMIAAAAIABADIADAQIAAAQIgCAPIgFAQIgGAOIgJANIAIANIAGANIAEAPIACAPIAAAPIgDAPIgFAOIgFANIgGANIgGALIgJAKIgKAIIgLAJIgDACIgCAMIgFAMIgFAMIgIALIgIAJIgKAJIgFADIAGAOIALAIIAKALIAIAMIAHAMIAGAMIAFANIACARIACARIgBAOIAAABQAnBOAPBVQANBOgDBQQgBAZgDAXIgDANIgEAMIgFALIgHALIgIAKIgKAIIgKAIIgMAGIgBAAQAGAWAEAXIABAPIgCAPIgDAPIgGANIgIANIgKAMIgGAFIAAALIgBANIgCANIgEAMIgGAMIgHALIgJAKIgKAIIgIAGIACAEIAIAOIAGAOIAGAKIAEAMIADALIADANIACANIABABIAFANIAFANIAEAOIACAOIACAOIgBASIgDASIAAANIgCANIgFANIgGAMIgIALIgIAJIgKAJIgKAHIgMAFIgMAFIgNACIgOABIgNgBgEginAt/IgKgOIgLgLIgJgOIgHgNIgGgOIgHgLIgGgMIgFgMIgGgTIgCgDIgHgJIgEgFIgKgOIgGgLIAAgBIgEgEIgIgNIgGgOIgGgOIgLgKIgKgKIgLgNIgLgNIgKgOIgKgIIgKgIIgIgKIgHgKIgGgNIgGgNIgKgRIgKgQIgKgQIgKgQIgKgQIgKgOIgKgOIgKgPIgJgPIAAgBIgJgJIgHgLIgGgLIgEgNIgGgOIgBgLIgGgEIgOgIIgMgLIgJgLIgIgMIgGgNIgEgOIgCgOIgCgOIAAgBIgCgFIgIgKIgIgKIgHgOIgGgPIgHgKIgHgPIgGgQIgKgJIgIgJIgHgLIgGgLIgFgNIgFgNIgCgPIgCgPIgCgPIgBgPIACgPIACgQIADgPIAEgNIAGgMIAIgLIAIgKIALgOIAMgNIAMgOIAKgJIAJgKIALgJIAJgLIALgJIAJgLIAKgJIALgHIANgFIAMgGIAEgCIACgCIAGgHIAGgGIAHgHIAIgGIALgLIAIgGIAIgGIAJgMIALgKIAGgFIAHgKIAIgKIAIgGIAIgGIANgKIANgLIAJgEIAJgEIADgDIAJgJIAJgHIAIgGIAHgGIAMgJIALgIIAMgHIAOgFIAJgDIAKgDIAHgDIANgGIAAAAIgIgJIgHgLIgHgOIgBgEIB6hPIgtWPIgIgJgEAmMgYsQApjZAUhfQAkiuAmiHQAyipAWhWQAliTAHhwQADgrgFgeQgGgngVgaQgRgWgdgQQgUgKglgNQkQhflOgsQkNgkligIQhPgCohgBQl7gBj0gSQgTgCgMgGQgPgHgBgOQAAgOAVgQQBNg4BpgqQBPggB4ghQFLhbFWgpQErgkEsAEQrKgWrKACQARgQArAAQKhgPHVARQJsAWIDBSQhUANhaABQhTAChzgKIjEgUQoZgyoVBEQkIAijPA7Qj4BHjBBxQD5AUF5AEIJ0AFQFlAJEOAlQFPAtESBgQAqAPAYANQAjATAUAZQAaAgAHAxQAFAlgFA1QgKB9gwCuQgbBig5DFQgaBohHGPQg4E3hEC4g");
	this.shape_25.setTransform(536.619,1187.3734);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5B2FAF").s().p("EguEAEDIgQgDIgRgEIgPgIIgOgKIgNgMIgKgJIgHgLIgGgMIgEgMIgCgNIAAgNIABgNIACgNIAEgMIAGgMIAHgLIAIgKIAOgMIAOgLIAPgLIAKgJIAKgIIALgIIADgEIAKgLIAJgKIAKgKIAMgHIAQgHIARgHIACgBIAMgIIANgHIANgFIAKgDIAIgHIAHgEIANgGIAOgFIAAgBIAIgGIAIgHIALgJIAKgIIALgHIALgGIAMgEIAQgGIALgHIALgGIAMgFIATgEIATgDIASgCIAGgCIAOgGIAPgFIAOgEIAQgEIARgCIARgCIACAAIAQgIIARgGIAOgEIAOgEIAOgDIAPgIIAQgFIAQgFIAPgEIAQgEIANgFIAOgFIAOgEQAQgDAQgCIAggBIAnAAIAOABIANACIAMAFIALAGIALAHIAKAIIAIAKIAHALIAGALIAFAMIACANIABAOIgBAPIgDAOIgGAOIgHANIABARIgBAOIgCANIgFAMIgGALIgHALIgIAKIgKAIIgLAGIgLAGIgMAFIgNACIgOABIgPAAIgQABIgPAAIgQAAIgKAHIgLAGIgNAEIgMAEIgNAEIgMADIgOAGIgPAFIgOAEIgQAEIgRACIgQACIgCAAIgQAIIgRAGIgLAEIgMAEIgLAHIgLAGIgMAFIgQADIgQAEIgKAHIgKAHIgLAIIgLAIIgMAHIgNAFIgSAEIgSACIgSADIgEABIgPAGIgPAGIgQAHIgOAIIgOAHIgPAGIgOAFIgOAEIgPAIIgQAJIgPALIgLAGIgMAEIgMADIgNACIgMABIgOABIgPgBgAVuBBIgUAAIgNgBIgNgDIgMgEIgMgGIgLgHIgJgJIgJgJIgHgLIgGgMIgEgLIgDgNIgBgNIABgOIADgNIAEgMIAGgLIAHgLIAJgKIAJgIIALgHIAMgGIAMgFIANgCIANgBIASAAIASAAIARAAIASAAIASAAIASgBIBFgQQAlgIAmAAIBNABQAkAAAlgBIAQgFIARgFIAOgFIAOgEIAPgFIAOgFIARgGQAagJAcgCQAdgCAcgBIAyAAIAqAAIABgBIAIgFIALgEIAMgEIAKgDIAQgDIAQgCIAQgBIAQgBQBEgcBLABQBTACBTAAICaAAIBfgBQAZAAAYAFIAQAEIAPAHIAOAIIATABIATAAIATAAIATAAIATAAIATABIAOAAIAMADIANAEIALAGIALAHIAKAJIAIAJIAHALIAGAMIAFAMIACANIABANIgBAOIgCANIgFAMIgGALIgHALIgIAKIgKAIIgLAHIgGADIgFADIgNAFIgMACQgZACgZAAIg2gBQgZAAgYgDIgFgBQgWgCgVgIIgLgFIgKgGIhrABIh4AAIiGgBQgxAAgxACIgHADIgOAFIgPAFIgOAFIgPADIgPABIgPACIgPABIgPAIIgPAFQgYAIgYABIgxABIgmAAIgzABIgRABIgQAGIg1ATQglANgnAFQgnAFgngBIhaAAIgnABIgsALQgYAHgZACQgZADgbAAIg4AAg");
	this.shape_26.setTransform(625.625,729.2713);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:615.775,y:863.75}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{scaleX:1.3961,scaleY:1.6702,x:627.8773,y:1126.1819}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:615.775,y:863.75}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{scaleX:1.6623,scaleY:1.9697,x:627.7877,y:1126.1703}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_22,p:{y:781.5094,x:377.6535}},{t:this.shape_21,p:{y:768.9192,x:850.3216}}]},3).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:615.775,y:863.75}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{scaleX:1.664,scaleY:1.9718,x:627.8609,y:1126.3755}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_22,p:{y:781.5094,x:377.6535}},{t:this.shape_21,p:{y:768.9192,x:850.3216}}]},3).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:615.775,y:863.75}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{scaleX:1.0671,scaleY:1.2645,x:627.9577,y:1126.5246}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_22,p:{y:781.5094,x:377.6535}},{t:this.shape_21,p:{y:768.9192,x:850.3216}}]},2).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:624.675,y:857.75}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{scaleX:1.356,scaleY:1.356,x:627.8571,y:1126.4012}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_22,p:{y:769.2594,x:377.6535}},{t:this.shape_21,p:{y:756.6692,x:850.3216}}]},2).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:624.675,y:857.75}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{scaleX:1.2618,scaleY:1.2618,x:627.8449,y:1126.3506}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_22,p:{y:776.6094,x:377.6535}},{t:this.shape_21,p:{y:764.0192,x:850.3216}}]},3).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:624.675,y:857.75}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{scaleX:1.2618,scaleY:1.2618,x:627.8449,y:1126.3506}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_22,p:{y:771.7094,x:370.3035}},{t:this.shape_21,p:{y:756.6692,x:855.2216}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1252.4,1942.5);


(lib.emptyAlien = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#371A45").s().p("AgLCHQgtgBgsgWQgpgVgeghQg0g6gWhXQgFgUAOgQQAKgLAPAAQAOAAAKALIADADIAtAvQAYAYAUANQApAbAtABQAjgBA7gaQAfgOBKgtIADgCQAOgIAPAFQAOAFAHAOQAHAOgFAPQgXBNhIA4QgiAagpAOQgmANgmAAIgKAAg");
	this.shape.setTransform(239.8105,476.2357);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#371A45").s().p("ACqGDQgmgbgbgkQgXgegWgnIglhDIhEiDQgphMgdgvQgohBgngwQhVhsh4g+IgBAAQgLgGgFgMQgGgMADgMQAEgPAMgIQAMgIAOAEQBIATBEAoQBEApA3A4QAzAzAxBEQAlA1AsBMIBJCBQA1BdARAZQAlA1AeAKQAPAGAVgIQASgGAdgWIAHgFQAPgMASAIQANAGAGAOQAFAOgGAOQgTAughAfQgqAmg3AAQg1AAgughg");
	this.shape_1.setTransform(201.1911,210.7693);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#371A45").s().p("AoeBqQgXgSgRgYQgSgagIgbQgPg1AMg4QADgKAGgHQAHgHAJgCQAOgEAMAIQAMAHADAPIADAJQAIAlAPAVQARAXAWAJQArATBNgJQA8gHBUgYQAegJAtgPIBLgbQBdghBBgRQBagYBOgHQBVgIBWAOQBWANBPAhQALAFAGALQAGAMgCANQgDAPgMAJQgMAIgOgDIAAAAQiYggiXAcQhDANhQAaQg4AThcAlQh2AtgmANQhcAdhPAHIgdABQhhAAhDgyg");
	this.shape_2.setTransform(342.2827,268.8542);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#371A45").s().p("APkLdQgPgHgFgRQgFgQAHgQQgDADAAAEIAAgDIgFhFQgFgugGglQgLhNgVhXQgoisg+iNQhCibhbh6QhjiDh4hSQhzhUiYgYQiHgWifAZQiIAWifA9QiCAwidBVQgUALgYgCIgBgBQgmgFgnAOQgnAOgVAaQgVAZgBAeQgBAeAUAoQAQAfAYALQAZALAigKQAjgKAdgdQAdgeANglIAAgCQAIgWASgOIAWgQIAugZQAagOAggOQA4gZBAgUQCJgsBwgKQCPgPB0AXQCMAbBtBMQBvBNBMB/QBBBtAjCQQAeB6AICNQAHB1gICRQAAAQgMAMQgLALgPABQgRAAgMgMQgMgMAAgSQgHkYhAjQQglh3g8haQhChihXg1Qijhlj8AgQhqAPhxAjQhAAVgrARQgjAOgQAIIgZAMIAAAAQgaA4grAsQg4A3hJAXQhVAbhNghQgmgQgigiQgegegSglQgphOAChRQABgtASgrQAQgrAcgfQA2g9BKgaQA5gUA+ACQE1i3EtgxQC6gfCgAeQBXAPBVAlQBUAkBIA2QCMBnBrCcQBjCPA/CwQA5CcAfC7QAOBYAGBYQADAxABAoIgEBZQgBAKgEAIQgHAQgPAGQgHADgHAAQgJAAgIgFg");
	this.shape_3.setTransform(105.7678,86.7645);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#31C418").s().p("AAeD6QhJgChIguIg5guQADjfghizQCCCoBigVQBRgQAriGQAjCVAMCQQAKBygHAQQgNAUgcATQg1AlhFAAIgHAAg");
	this.shape_4.setTransform(187.0941,138.9299);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#62ED2E").s().p("AJuKOQADjgghizQhAlPjEiZQieh7jsADQivACjEBFQiQAygpAiQgUA8guArQgrAqg1APQg2APgvgSQg0gUgeg3QhKiGBVhiQAkgpA4gVQA3gUA5AIQBCgnBNglQCUhICQgqQG/iEEoC5QDRCDCKDzQBtC+A7D3QAjCVAMCRQAKBygHAQg");
	this.shape_5.setTransform(107.5721,89.1182);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#62ED2E").s().p("AJuKOQADjgghizQhAlPjEiZQieh7jsADQivACjEBFQiQAygpAiQgUA8guArQgrAqg1APQg2APgvgSQg0gUgeg3QhKiGBVhiQAkgpA4gVQA3gUA5AIQBCgnBNglQCUhICQgqQG/iEEoC5QDRCDCKDzQBtC+A7D3QAjCVAMCRQAKBygHAQg");
	this.shape_6.setTransform(107.5721,89.1182);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#371A45").s().p("AICMWQhXgOhIg8QhKg9gghZQgSgvABg2QABg3AUgvQAbhBA6g0QAFhUgFhLQgIhlgbhLQgOgmgWggQgKgOgOgNQgPgOgQgMQhAgzhJACQhGAChQA0QhFAshJBNQhyB6h9DFIAAABQgIANgPAEQgPAEgNgIQgPgIgFgRQgFgRAIgPQA3huAthMQA7hiA+hNQBPhjBMg4QBqhQBrgKQA8gHA/ASQA8ARAzAjQAYAQAYAWQAZAWAUAaQAlAwAaA/QAnBhAJCGQAHBwgSB2QgGAkgcAUIAAABQgvAigNAjQgOAiAOApQAOAqAoAiQApAiArAGQAWADARgEQAQgEASgMQAjgZAPgtQAPgrgMgvQgLgugkgoQgbgeAGgqIAAgEQAXiWgGiTQgFikgph7QguiPhchLQgqgjhGgdIgfgMIgggKQgrgNgWgDQh+gZiLAmQh9AjiBBVQhuBIh0B0Qg1A1gxA6IhhB9QgIALgMADQgNAEgNgGQgOgHgGgQQgFgQAHgQIAEgKIAnhFQAYgkAVgfQArg9A4hCQBuiAB6hdQCKhqCUgvQChg2ClAXQARACAYAFIApAJQA8ASATAIQBeAlA7AvQBGA2A1BRQAxBKAdBZQAxCTAGDDQABCdgXCLQAqA7AQBBQAMAvgCAyQgCAygQAtQghBihOA3QgqAeguALQgZAGgcAAQgVAAgVgDg");
	this.shape_7.setTransform(420.5683,221.7977);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#31C418").s().p("AgLEdQhIgVhAg7QhBg6gXhUQgIgagCgaIgBgTQAHgTA2hLQBKhmBYhaQgdCeBiBIQBHAzCCADQhjB7hlC2IgEAAQgWAAgggKg");
	this.shape_8.setTransform(366.775,213.4293);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#62ED2E").s().p("AI4LGQhDgCg9grQg9grgdhAQgfhEARhCQAThLBNg4QAPhggIh1QgPjohxhkQh0hniCAVQiiAaiuDZQhjB7hlC1IkmkvQAHgTA2hLQBKhmBYhZQDIjNDShRQEWhrEKCBQD9B6AqGJQAYDfgoDMQA6BAANBNQAMBEgZBAQgYA9gxAlQgvAkg3AAIgGAAg");
	this.shape_9.setTransform(418.6696,221.5742);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#371A45").s().p("Ag4A0QgMgOAKgZQAIgYAYgWQAXgWAYgFQAZgGALAOQAMAOgKAZQgIAZgXAWQgYAWgYAFIgMACQgQAAgIgLg");
	this.shape_10.setTransform(217.45,410.6632);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#371A45").s().p("AgSA+QgQgVgGghQgGgfAIgaQAIgZARgEQAQgEAQAVQAQAVAGAgQAGAggIAaQgIAZgRAEIgFABQgNAAgOgSg");
	this.shape_11.setTransform(204.2,405.7505);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#371A45").s().p("ApdMzQiOg2hfhWQhghXghhnQgfhkAJiEQAKiVA8iWQCVl3GFkDQDoibEJgoQEKgoDvBVQCBAtBZBLQBZBLAhBaQAoBtgBCOQgCCgg1CfQiGGNmLEHQiYBmitAyQiaAsiiAAQjLAAithCgACqraQkCAcjhCWQlXDliIE/Qg2B/gLB9QgKBwAaBSQAWBGBLBAQBLA/BuAqQC/BJDegSQEGgVDgiWQFNjeB/lPQA1iKAGiIQAGh+gjhgQgWg6hEg1QhFg2higiQiIgxibAAQg3AAg5AGg");
	this.shape_12.setTransform(344.7527,371.6459);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#371A45").s().p("AgYQMQizg8iTinQiujHhHklQhqm6BzmPQAuihBNiCQBFh0BNhBQBCg3BdgKQBdgKBnAlQCrA+CPCqQCpDJBHEnQBpG0hfGGQgmCdhCB+Qg8BxhEA+QguArg8AWQg8AVhEAAQhNAAhTgcgAjotxQhFA6g8BsQhAB0gmCTQhbFgBcF9QA9D9CSCqQB7CPCUAxQBQAbBGgHQBGgIAtgpQAzguAwheQA4hsAiiIQBVlghgmQQg+kAiOitQh3iRiNg0Qg9gWg1AAQhHAAgqAkg");
	this.shape_13.setTransform(145.7278,290.678);

	this.instance = new lib.Group_17();
	this.instance.setTransform(345,341.8,1,1,0,0,0,92.5,51.2);
	this.instance.alpha = 0.6992;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#371A45").s().p("AmuMYQi1gkiChaQiBhZgjhxQgehcAKh7QALiIA6iMQCOlZFtj0QDAh/DXgtQDBgoC7AeQCsAcB9BOQB7BNAkBjQAlBmgDCFQgDCUg1CUQiBFuluD1QjACAjdAoQhhAShfAAQhmAAhkgUg");
	this.shape_14.setTransform(344.7347,371.7519);

	this.instance_1 = new lib.Group_20();
	this.instance_1.setTransform(147.7,277.5,1,1,0,0,0,55.9,85.9);
	this.instance_1.alpha = 0.6992;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#371A45").s().p("AB9PfQh7gDh9hOQiIhShniTQhyikg1jaQhkmeBol3QAqiaBHh6QBAhvBJg9QBHg8BxAJQBxAKB2BOQB/BWBhCSQBsCkA1DZQBkGdhWFvQgjCUg9B2Qg3Brg/A6QhKBEh0AAIgKAAg");
	this.shape_15.setTransform(145.7634,290.672);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#371A45").s().p("EgONAs+QgggDhfgPQgZgEgngIIhAgOQkOg9jih0Qjvh5jHjFQjHjFiEj1Qj4nKgxpdQgroSBvo0QBpofEDnjQEHnrGDlnQGWl7Hci9QD1hiEBgsQEEgsEBAPQEEAPD9BHQD8BGDrB6QDoB5DPCvQDMCsCpDWQFLGjCuIdQCpIMgEIuQgBETgqESQgPBpgkClIghCFIhDDJIhYC/IhIB3IgkA8Ih7ClIiJCYIiTCJQmNFMn9C/QklBmjKApQi9AnhAAHQiQANhyglQgWgHgKgVQgMgWAGgYQAHgYATgNIADgCQA0ggBCgVQAhgLBWgVQAogJBPgNQAogIBPgTQBtgZB9goQBjgfCDgwQHzjIFWkeICHh7IB8iHIBwiRIBgidIBOimIA8ivIAfh8QAkigANhcQApj8AAkDQAEoIienpQihn1kxmCQibjEi7ieQi9ifjVhwQjWhwjohBQjqhBjsgNQjsgOjuApQjrAojiBaQjfBZjPCGQjMCFi1CrQlnFRjzHKQjvHDhgH8QhkIJAoH2QAWEIBADtQBFD8ByDRQB1DaCpCsQCsCtDRBtQDJBqD0A7IB0AZIB4ATQCJAaBiAwIAEACQAUAKAJAWQAIAYgJAXQgJAXgWAJQg9AbhHAIQgfADgjAAQgeAAgigCg");
	this.shape_16.setTransform(354.2782,288.0246);

	this.instance_2 = new lib.Group_23();
	this.instance_2.setTransform(358.9,212.6,1,1,0,0,0,257.9,198.7);
	this.instance_2.alpha = 0.6992;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#31C418").s().p("Ay0DQQmUkIjenVQC6DTD1CjQFRDgGZBrQIOCJKvgLQK7gLI7iiQkkCPlHBYQk8BVk9AaIqhAzQqRgXnEkng");
	this.shape_17.setTransform(299,514.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#62ED2E").s().p("EgbhAmbQmUkJjdnVQjknhgOqAQgNo4CYotQCdo+FNndQFHnVHAkvQHIk1H+hZQIYhdIRClQIRClGWGDQGCFwDlILQDhIAAoJIQAoJQidI+Qh4G6lVFlQk2FGnMDgQklCPlHBYQk8BVk9AaIqgAzQqSgXnEkng");
	this.shape_18.setTransform(354.6642,288.9456);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#371A45").s().p("AkxfuQhPghg1hIQgug9gUhaQgQhCADhOQABgzALhOQAkkXAFikQALjqgRjSQgNjUgnjkQghjGg+jtQgsithPkFQgGgUAHgTQAIgUASgJQATgKAVAHQAVAHAKAVIAAAAQDWHEBgGhQBnG8gPHsQgDC2ghEeQgHA9AAAmQgBAsAJAnQAIAjAOAUQAOATAYALQAZAMAlAAQAmAAAlgLQATgGAPgHQAPgHAMgJQAfgZAYgeQAxg8AhhlQAehaAKhmIACgPQAEgqAegdQAegdAoAAQAsAAAfAhQAfAhAAAvQANClArCAQAYBIAhAtQAgAsAgAJQAYAEAQgCQAPgCANgJQAggWAZg8QAthoANi2QALiZgNihQgKiLgci1Qgyk7hmk4QjGpel3oSQlxoKnxmAQgjgcgHguQgHguAZgnQAaglArgIQAsgIAjAcQILGVGDIjQGLIvDSKBQBsFKA0FMQAeC7ALCZQAPCygMCtQgJBrgOBJQgTBigjBUQgzB2hTA7Qg2Ang+AHQg3AJg8gPQg6gOgzgoQgrghgigxQghgvgag6QgUAkgXAfQgtA9g3AoQgdAYgkAQQgiAQggAKQhGAUhBAAQhPAAhHgeg");
	this.shape_19.setTransform(449.5036,707.8999);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#31C418").s().p("AlNmRQFtEbEuFnQkCBxk3Awg");
	this.shape_20.setTransform(398.85,553.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#31C418").s().p("AF4RiQiPgkhJkNQgWhUgNhhIgIhRIgGA8QgJBJgTBEQg9DciIBdQg0AjhMANQhXAOhFgaQi5hHArk3QBLocg1nuQgqmOiFmjQCHDaBME7QA5DqAeFDQARCxAUEiQAVDUApAyQBnB+CkiDQAzgpAzg/IApg1IAvBmQA8BxBDA3QDUCwDCnZQAAEehDCnQhGCuiAAAQgZAAgcgHg");
	this.shape_21.setTransform(464.125,789.4132);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#62ED2E").s().p("AIKeSQiPgjhJkNQgWhUgNhiIgIhQIgGA7QgJBJgTBFQg9DbiJBdQgzAkhMAMQhXAPhFgbQi5hHArk2QBLodg1nuQgqmOiFmiIAAgBQg5izhWjgIiWzNQLZI0G6M2QG8M2A9OJQAFBRgBBEQAAEehDCoQhFCtiBAAQgZAAgcgHg");
	this.shape_22.setTransform(449.5023,707.7882);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#371A45").s().p("AhHBqQACgtAcgsQgxgOgdgfQgZgbAIgIQAEgDAiANQAvASAqAIQAZgjAZgvQASgiAEAAQALAAgCAmQgDAsgbAtQAwAOAeAfQAZAbgIAIQgEADgigNQgwgSgpgIQgZAigZAwQgSAigEAAQgLAAACgmg");
	this.shape_23.setTransform(240.6141,755.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#371A45").s().p("Ag2GeQhsghhOhhQhLhcgYh6QgZh8Alh1QATg8AjgzQAlg1AygjQAygiA8gPQA6gNA8AKQBxATBWBaQBPBTAdBxQADANgFAMQgGAMgLAGQgNAHgNgFQgNgFgHgOQgnhWhGg4QhHg4hNgGQhNgGg+AwQg+AxgYBQQgYBOAPBYQAOBYAxBGQAyBKBLAjQBPAnBRgUIAAgBQAMgCALAFQALAFAFAMQAGAOgEAOQgFAPgNAGQgwAag7AEIgXABQgsAAgsgNg");
	this.shape_24.setTransform(239.9182,757.217);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2BC614").s().p("AhsEYQh4hGgyiSQgTg2gFg8IAEAHQBNCJB+A0QB8AzBjhAQBeg8ATiDQATiDhAiFQBBBCAhBeIAJBYQAEBpggBbQggBag8A3QgeAbgXAJQgwAUgwAAQhGAAhIgrg");
	this.shape_25.setTransform(242.1923,763.056);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#371A45").s().p("Ag2GeQhsghhOhhQhLhcgYh6QgZh8Alh1QATg8AjgzQAlg1AygjQAygiA8gPQA6gNA8AKQBxATBWBaQBPBTAdBxQADANgFAMQgGAMgLAGQgNAHgNgFQgNgFgHgOQgnhWhGg4QhHg4hNgGQhNgGg+AwQg+AxgYBQQgYBOAPBYQAOBYAxBGQAyBKBLAjQBPAnBRgUIAAgBQAMgCALAFQALAFAFAMQAGAOgEAOQgFAPgNAGQgwAag7AEIgXABQgsAAgsgNg");
	this.shape_26.setTransform(239.9182,757.217);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#62ED2E").s().p("AhmFKQh4hGgyiSQgziRAwiJQAwiJB3gvQB1gvB4BGQB4BGAzCSIikHSQgwATgwAAQhGAAhIgqg");
	this.shape_27.setTransform(241.5864,758.1161);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#371A45").s().p("AjEc1QjRgjiNgsQi9g7iIhdQlPjohSnsQh0rDGQuIQCAkgCnkUQBYiSBEhfIASgZIAbgLQFkiaE1hRQH8iGCpCBQAwAlAYA3QAYA4gDBCQgMDiA6FDQAjDCBlGiQCFIhAnEPQBBHEg+FJIgFASQhnElljDCQleC/mgAAQh/AAh8gVgAEc46QlEBOlqCYQj/F1i7G+QlOMaBjJZQBCGQEGCzQBuBLChAxQB5AkDDAhQC8AfDMgZQDDgZCyhIQCxhIB7hpQCChvAvh/QA2kmhAmmQgmj9h+oFQhpmygkjOQg8lVAMj5QABgKgCgDQAAgDgDgCQghgZhQAAQhvAAjLAxg");
	this.shape_28.setTransform(319.5008,690.7113);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#31C418").s().p("AlNmRQFtEbEuFnQkCBxk3Awg");
	this.shape_29.setTransform(398.85,553.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#31C418").s().p("AmEF1QjTgii7hBQBSiUBXiEIBFhoIDNhRQD1hdDLg2QKKivgNELQgMDpA5FCQlYBjmEAAQjiAAjZgjg");
	this.shape_30.setTransform(327.425,555.9606);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#31C418").s().p("Ai0ROQjMgiiGgqQivg3h7hVQkmjNhJm7QgXiKgBiXQB2DXCwCIQDYCoEjAnQDJAaDegqQDbgqC2hgQC9hkBjiGQBsiRgVifQgKhSgfiaIg1kIQg9k+AhhkQATg6CBCJQBnBtClDhQBTFvAZEAQAhFJgwD+Qg0CWiNB/QiHB6jBBTQjBBSjXAcQhmANhiAAQh1AAhygTg");
	this.shape_31.setTransform(319.5472,753.8923);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#62ED2E").s().p("Ai0bHQjMgiiGgqQivg3h7hVQkmjNhJm7QgXiKgBiYQgCmXCenaQB3llDIlwIAZguQBSiUBXiFIBFhoIDNhRQD1hdDLg2QKKivgNELQgMDpA5FDIARBaQAgCmBBERQBZFxASBRQBTFuAZEAQAhFKgwD+Qg0CWiNB/QiHB6jBBTQjBBSjXAcQhmANhiAAQh1AAhygTg");
	this.shape_32.setTransform(319.546,690.5677);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance_2},{t:this.shape_16},{t:this.shape_15},{t:this.instance_1},{t:this.shape_14},{t:this.instance},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,628.2,913.9);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg+fA+gMAAAh8/MB8/AAAMAAAB8/g");
	mask.setTransform(454.45,405);

	// Layer_3
	this.instance = new lib.Path();
	this.instance.setTransform(725.1,112.8,1,1,0,0,0,59.8,59.9);
	this.instance.compositeOperation = "overlay";

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(579.2,219.25,1,1,0,0,0,122.3,30.6);
	this.instance_1.alpha = 0.3008;
	this.instance_1.compositeOperation = "overlay";

	this.instance_2 = new lib.Path_2();
	this.instance_2.setTransform(401.85,294.7,1,1,0,0,0,41.9,20.4);
	this.instance_2.alpha = 0.1992;
	this.instance_2.compositeOperation = "overlay";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A2D69").s().p("AANgJQgNATgMAAg");
	this.shape.setTransform(446.7,136.375);

	this.text = new cjs.Text(" ", "51px 'Arial'", "#FBB040");
	this.text.lineHeight = 68;
	this.text.parent = this;
	this.text.setTransform(491.85,102.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B4B51").s().p("Eg/uAKuIAA1bMB/dAAAIAAVbg");
	this.shape_1.setTransform(453.35,741.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#08021D").s().p("AxSAuIAAhbMAilAAAIAABbg");
	this.shape_2.setTransform(307.525,676.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#110B29").s().p("AhpDqIAAk1QAAhBAfguQAfgvArAAQAsAAAfAvQAfAuAABBIAAE1g");
	this.shape_3.setTransform(385.175,649.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#08021D").s().p("AiGEqIAAmJQAAhUAng7QAog7A3AAQA4AAAoA7QAnA7AABUIAAGJg");
	this.shape_4.setTransform(385.175,651.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhWALIAAgVICtAAIAAAVg");
	this.shape_5.setTransform(346.95,631.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLCEIAAkHIAXAAIAAEHg");
	this.shape_6.setTransform(346.975,635.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhkCOIAAi4QAAgpAdgcQAegeApAAQAqAAAeAeQAdAcAAApIAAC4gAg5hiQgYAXAAAhIAAClICjAAIAAilQAAghgYgXQgYgYgiAAQghAAgYAYg");
	this.shape_7.setTransform(346.975,635.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBB040").s().p("AhbCEIAAiuQAAgkAbgbQAbgaAlAAQAmAAAbAaQAbAbAAAkIAACug");
	this.shape_8.setTransform(346.975,635.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#110B29").s().p("AiEAYIAAgvIEJAAIAAAvg");
	this.shape_9.setTransform(346.95,652.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0F1010").s().p("AhWALIAAgVICtAAIAAAVg");
	this.shape_10.setTransform(307.55,631.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0F1010").s().p("AgLCEIAAkHIAXAAIAAEHg");
	this.shape_11.setTransform(307.525,635.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0F1010").s().p("AhkCNIAAi3QAAgpAegcQAegdAoAAQAqAAAdAdQAeAcAAApIAAC3gAg5hiQgZAXAAAhIAAClIClAAIAAilQAAghgYgXQgZgYgiAAQghAAgYAYg");
	this.shape_12.setTransform(307.525,635.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhbCEIAAiuQAAgkAbgbQAbgaAlAAQAmAAAbAaQAbAbAAAkIAACug");
	this.shape_13.setTransform(307.525,635.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#110B29").s().p("AiEAYIAAgvIEKAAIAAAvg");
	this.shape_14.setTransform(307.55,652.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhWALIAAgVICtAAIAAAVg");
	this.shape_15.setTransform(268.1,631.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgLCEIAAkHIAXAAIAAEHg");
	this.shape_16.setTransform(268.1,635.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhkCOIAAi4QAAgpAdgcQAegeApAAQAqAAAdAeQAeAcAAApIAAC4gAg5hiQgYAXAAAhIAAClICjAAIAAilQAAghgYgXQgYgYgiAAQghAAgYAYg");
	this.shape_17.setTransform(268.1,635.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FBB040").s().p("AhbCEIAAiuQAAgkAbgbQAbgaAlAAQAmAAAbAaQAbAbAAAkIAACug");
	this.shape_18.setTransform(268.1,635.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#110B29").s().p("AiEAYIAAgvIEJAAIAAAvg");
	this.shape_19.setTransform(268.1,652.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhWALIAAgVICtAAIAAAVg");
	this.shape_20.setTransform(228.65,631.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgLCEIAAkHIAXAAIAAEHg");
	this.shape_21.setTransform(228.675,635.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhkCOIAAi4QAAgpAdgcQAegeApAAQAqAAAeAeQAdAcAAApIAAC4gAg5hiQgYAXAAAhIAAClICjAAIAAilQAAghgYgXQgYgYgiAAQghAAgYAYg");
	this.shape_22.setTransform(228.675,635.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FBB040").s().p("AhbCEIAAiuQAAgkAbgbQAbgaAlAAQAmAAAbAaQAbAbAAAkIAACug");
	this.shape_23.setTransform(228.675,635.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#110B29").s().p("AiFAYIAAgvIELAAIAAAvg");
	this.shape_24.setTransform(228.65,652.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0F1010").s().p("AhWALIAAgVICtAAIAAAVg");
	this.shape_25.setTransform(386.4,587.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0F1010").s().p("AgLCEIAAkHIAXAAIAAEHg");
	this.shape_26.setTransform(386.4,592.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0F1010").s().p("AhjCNIAAi3QAAgoAdgdQAegdAoAAQApAAAeAdQAdAdAAAoIAAC3gAg6hjQgYAYAAAhIAAClIClAAIAAilQAAghgZgYQgYgXgiAAQghAAgZAXg");
	this.shape_27.setTransform(386.4,592.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhaCEIAAiuQAAglAbgaQAagaAlAAQAmAAAbAaQAaAaAAAlIAACug");
	this.shape_28.setTransform(386.4,592.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#110B29").s().p("AiFAYIAAgwIELAAIAAAwg");
	this.shape_29.setTransform(386.4,609.05);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0F1010").s().p("AhWALIAAgVICtAAIAAAVg");
	this.shape_30.setTransform(346.95,587.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0F1010").s().p("AgLCEIAAkHIAXAAIAAEHg");
	this.shape_31.setTransform(346.975,592.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#0F1010").s().p("AhkCNIAAi3QAAgoAegdQAdgdApAAQApAAAeAdQAeAdAAAoIAAC3gAg6hjQgYAYAAAhIAAClIClAAIAAilQAAghgYgYQgZgXgiAAQghAAgZAXg");
	this.shape_32.setTransform(346.975,592.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhbCEIAAiuQAAglAbgaQAbgaAlAAQAmAAAbAaQAbAaAAAlIAACug");
	this.shape_33.setTransform(346.975,592.575);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#110B29").s().p("AiEAYIAAgwIEJAAIAAAwg");
	this.shape_34.setTransform(346.95,609.05);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhWALIAAgVICtAAIAAAVg");
	this.shape_35.setTransform(307.55,587.675);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgLCEIAAkHIAXAAIAAEHg");
	this.shape_36.setTransform(307.525,592.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhkCNIAAi3QAAgpAegcQAdgdApAAQAqAAAeAdQAdAcAAApIAAC3gAg5hiQgYAXAAAhIAACkICjAAIAAikQAAghgYgXQgYgYgiAAQghAAgYAYg");
	this.shape_37.setTransform(307.525,592.575);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FBB040").s().p("AhbCEIAAiuQAAglAbgaQAbgaAlAAQAmAAAbAaQAbAaAAAlIAACug");
	this.shape_38.setTransform(307.525,592.575);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#110B29").s().p("AiEAYIAAgwIEKAAIAAAwg");
	this.shape_39.setTransform(307.55,609.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#0F1010").s().p("AhWALIAAgVICtAAIAAAVg");
	this.shape_40.setTransform(268.1,587.675);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0F1010").s().p("AgLCEIAAkHIAXAAIAAEHg");
	this.shape_41.setTransform(268.1,592.575);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#0F1010").s().p("AhkCNIAAi3QABgoAdgdQAdgdApAAQAqAAAdAdQAeAdAAAoIAAC3gAg5hjQgZAYAAAhIAAClIClAAIAAilQAAghgYgYQgZgXgiAAQghAAgYAXg");
	this.shape_42.setTransform(268.1,592.575);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhbCEIAAiuQAAglAbgaQAbgaAlAAQAmAAAbAaQAbAaAAAlIAACug");
	this.shape_43.setTransform(268.1,592.575);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#110B29").s().p("AiEAYIAAgwIEJAAIAAAwg");
	this.shape_44.setTransform(268.1,609.05);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhWALIAAgVICtAAIAAAVg");
	this.shape_45.setTransform(228.65,587.675);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgLCEIAAkHIAXAAIAAEHg");
	this.shape_46.setTransform(228.675,592.575);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhkCNIAAi3QAAgpAdgcQAegdApAAQAqAAAeAdQAdAcAAApIAAC3gAg5hiQgYAXAAAhIAACkICjAAIAAikQAAghgYgXQgYgYgiAAQghAAgYAYg");
	this.shape_47.setTransform(228.675,592.575);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FBB040").s().p("AhbCEIAAiuQAAglAbgaQAbgaAlAAQAmAAAbAaQAbAaAAAlIAACug");
	this.shape_48.setTransform(228.675,592.575);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#110B29").s().p("AiFAYIAAgwIELAAIAAAwg");
	this.shape_49.setTransform(228.65,609.05);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#08021D").s().p("Ay8CMIDUkXIfxAAIC0EXg");
	this.shape_50.setTransform(307.525,548.225);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#292245").s().p("AwiJUIAAynMAhFAAAIAASng");
	this.shape_51.setTransform(307.525,621.875);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#110B29").s().p("AklAJIAAgRIJLAAIAAARg");
	this.shape_52.setTransform(799.725,260.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#110B29").s().p("AklAJIAAgRIJLAAIAAARg");
	this.shape_53.setTransform(799.725,256.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#110B29").s().p("AklAJIAAgRIJLAAIAAARg");
	this.shape_54.setTransform(799.725,252);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#08021D").s().p("ArpBVIAAipIXTAAIAACpg");
	this.shape_55.setTransform(799.725,276.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#110B29").s().p("Ar9BHIAAiNIX7AAIAACNg");
	this.shape_56.setTransform(799.725,680.825);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#08021D").s().p("AgmCDIAAkFIBNAAIAAEFg");
	this.shape_57.setTransform(818.15,602.975);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#08021D").s().p("AgnCDIAAkFIBPAAIAAEFg");
	this.shape_58.setTransform(805.125,602.975);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#08021D").s().p("AgnCDIAAkFIBOAAIAAEFg");
	this.shape_59.setTransform(792.1,602.975);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#08021D").s().p("AgnCDIAAkFIBPAAIAAEFg");
	this.shape_60.setTransform(779.05,602.975);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#110B29").s().p("AjqDDIAAmFIHVAAIAAGFg");
	this.shape_61.setTransform(798.6,603);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#08021D").s().p("AihFhIAArBIFDAAIAALBg");
	this.shape_62.setTransform(799.725,652.55);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AotDJIAAmRIRbAAIAAGRgAoOCrIQdAAIAAlUIwdAAg");
	this.shape_63.setTransform(801.275,641.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FBB040").s().p("AoeC5IAAlyIQ9AAIAAFyg");
	this.shape_64.setTransform(801.275,641.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AiFATIAAglIELAAIAAAlg");
	this.shape_65.setTransform(833.75,511.825);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgRBvIAAjdIAjAAIAADdg");
	this.shape_66.setTransform(833.825,523.425);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AiWDXIAAmtIEtAAIAAGtgAh1C2IDqAAIAAlrIjqAAg");
	this.shape_67.setTransform(833.75,515.725);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FBB040").s().p("AiFDHIAAmNIELAAIAAGNg");
	this.shape_68.setTransform(833.75,515.725);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_69.setTransform(849.375,554.275);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_70.setTransform(839.275,554.275);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_71.setTransform(829.125,554.275);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_72.setTransform(819.025,554.275);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#110B29").s().p("Ai2C/IAAl9IFtAAIAAF9g");
	this.shape_73.setTransform(834.2,554.275);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#0F1010").s().p("AiFATIAAglIELAAIAAAlg");
	this.shape_74.setTransform(764.8,511.825);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#0F1010").s().p("AgRBvIAAjdIAjAAIAADdg");
	this.shape_75.setTransform(764.875,523.425);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#0F1010").s().p("AiUDVIAAmpIEpAAIAAGpgAh3C4IDvAAIAAlvIjvAAg");
	this.shape_76.setTransform(764.8,515.725);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AiFDHIAAmNIELAAIAAGNg");
	this.shape_77.setTransform(764.8,515.725);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_78.setTransform(780.425,554.275);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_79.setTransform(770.325,554.275);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_80.setTransform(760.175,554.275);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_81.setTransform(750.075,554.275);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#110B29").s().p("Ai2C/IAAl9IFtAAIAAF9g");
	this.shape_82.setTransform(765.25,554.275);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AiFATIAAglIELAAIAAAlg");
	this.shape_83.setTransform(833.75,416.875);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgRBvIAAjdIAjAAIAADdg");
	this.shape_84.setTransform(833.825,428.525);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AiWDYIAAmvIEtAAIAAGvgAh1C2IDqAAIAAlrIjqAAg");
	this.shape_85.setTransform(833.75,420.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FBB040").s().p("AiFDGIAAmMIELAAIAAGMg");
	this.shape_86.setTransform(833.75,420.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_87.setTransform(849.375,459.375);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_88.setTransform(839.275,459.375);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_89.setTransform(829.125,459.375);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_90.setTransform(819.025,459.375);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#110B29").s().p("Ai2C/IAAl9IFtAAIAAF9g");
	this.shape_91.setTransform(834.2,459.35);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#0F1010").s().p("AiFATIAAglIELAAIAAAlg");
	this.shape_92.setTransform(764.8,416.875);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#0F1010").s().p("AgRBvIAAjdIAjAAIAADdg");
	this.shape_93.setTransform(764.875,428.525);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#0F1010").s().p("AiUDWIAAmrIEpAAIAAGrgAh3C4IDvAAIAAlvIjvAAg");
	this.shape_94.setTransform(764.8,420.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AiFDGIAAmMIELAAIAAGMg");
	this.shape_95.setTransform(764.8,420.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_96.setTransform(780.425,459.375);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_97.setTransform(770.325,459.375);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_98.setTransform(760.175,459.375);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_99.setTransform(750.075,459.375);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#110B29").s().p("Ai2C/IAAl9IFtAAIAAF9g");
	this.shape_100.setTransform(765.25,459.35);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0F1010").s().p("AiFATIAAglIELAAIAAAlg");
	this.shape_101.setTransform(833.75,321.95);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0F1010").s().p("AgRBvIAAjdIAjAAIAADdg");
	this.shape_102.setTransform(833.825,333.575);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#0F1010").s().p("AiUDVIAAmpIEpAAIAAGpgAh3C4IDvAAIAAlvIjvAAg");
	this.shape_103.setTransform(833.75,325.875);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AiFDHIAAmNIELAAIAAGNg");
	this.shape_104.setTransform(833.75,325.875);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_105.setTransform(849.375,364.425);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_106.setTransform(839.275,364.425);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_107.setTransform(829.125,364.425);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_108.setTransform(819.025,364.425);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#110B29").s().p("Ai2C/IAAl9IFtAAIAAF9g");
	this.shape_109.setTransform(834.2,364.425);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AiFATIAAglIELAAIAAAlg");
	this.shape_110.setTransform(764.8,321.95);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgRBvIAAjdIAjAAIAADdg");
	this.shape_111.setTransform(764.875,333.575);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AiWDXIAAmtIEtAAIAAGtgAh1C2IDqAAIAAlrIjqAAg");
	this.shape_112.setTransform(764.8,325.875);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FBB040").s().p("AiFDHIAAmNIELAAIAAGNg");
	this.shape_113.setTransform(764.8,325.875);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_114.setTransform(780.425,364.425);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_115.setTransform(770.325,364.425);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_116.setTransform(760.175,364.425);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#08021D").s().p("AgeCDIAAkFIA9AAIAAEFg");
	this.shape_117.setTransform(750.075,364.425);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#110B29").s().p("Ai2C/IAAl9IFtAAIAAF9g");
	this.shape_118.setTransform(765.25,364.425);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#292245").s().p("EgKxAgFMAAAhAJIViAAMAAABAJg");
	this.shape_119.setTransform(799.75,482.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#110B29").s().p("AifC1IAAlpIE/AAIAAFpg");
	this.shape_120.setTransform(835.675,261.65);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#110B29").s().p("AifC1IAAlpIE/AAIAAFpg");
	this.shape_121.setTransform(763.025,261.65);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#110B29").s().p("A6rAoIAAhPMA1XAAAIAABPg");
	this.shape_122.setTransform(568.2,458.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#110B29").s().p("A9VBJIAAiRMA6rAAAIAACRg");
	this.shape_123.setTransform(567.95,477.675);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#08021D").s().p("AhFDAIAAl/ICLAAIAAF/g");
	this.shape_124.setTransform(568.225,660.725);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#08021D").s().p("AhFDAIAAl/ICLAAIAAF/g");
	this.shape_125.setTransform(675.025,660.725);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#08021D").s().p("AhFDAIAAl/ICLAAIAAF/g");
	this.shape_126.setTransform(461.425,660.725);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#110B29").s().p("A+fBBIAAiBMA8/AAAIAACBg");
	this.shape_127.setTransform(568.225,681.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#110B29").s().p("AhtDDIAAmFIDbAAIAAGFg");
	this.shape_128.setTransform(675.025,657.575);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#110B29").s().p("AhtDDIAAmFIDbAAIAAGFg");
	this.shape_129.setTransform(568.225,657.575);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#110B29").s().p("AhtDDIAAmFIDbAAIAAGFg");
	this.shape_130.setTransform(461.425,657.575);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_131.setTransform(711.925,602.975);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_132.setTransform(711.925,602.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_133.setTransform(711.925,602.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_134.setTransform(711.925,622.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#0F1010").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_135.setTransform(664.025,602.975);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#0F1010").s().p("Ah2CEIAAkHIDtAAIAAEHgAhbBpIC3AAIAAjRIi3AAg");
	this.shape_136.setTransform(664.025,602.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_137.setTransform(664.025,602.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_138.setTransform(664.025,622.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#0F1010").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_139.setTransform(616.125,602.975);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#0F1010").s().p("Ah2CEIAAkHIDtAAIAAEHgAhbBpIC3AAIAAjRIi3AAg");
	this.shape_140.setTransform(616.125,602.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_141.setTransform(616.125,602.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_142.setTransform(616.125,622.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_143.setTransform(568.225,602.975);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_144.setTransform(568.225,602.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_145.setTransform(568.225,602.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_146.setTransform(568.225,622.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_147.setTransform(520.3,602.975);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_148.setTransform(520.325,602.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_149.setTransform(520.3,602.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#110B29").s().p("AiKBKIAAiTIEUAAIAACTg");
	this.shape_150.setTransform(520.3,622.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#0F1010").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_151.setTransform(472.4,602.975);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#0F1010").s().p("Ah3CEIAAkHIDvAAIAAEHgAhcBpIC5AAIAAjRIi5AAg");
	this.shape_152.setTransform(472.4,602.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_153.setTransform(472.4,602.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#110B29").s().p("AiKBKIAAiTIEVAAIAACTg");
	this.shape_154.setTransform(472.4,622.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_155.setTransform(424.5,602.975);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_156.setTransform(424.5,602.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_157.setTransform(424.5,602.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#110B29").s().p("AiJBKIAAiTIEUAAIAACTg");
	this.shape_158.setTransform(424.5,622.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#0F1010").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_159.setTransform(711.925,556.325);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#0F1010").s().p("Ah2CFIAAkJIDtAAIAAEJgAhbBqIC3AAIAAjTIi3AAg");
	this.shape_160.setTransform(711.925,556.125);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_161.setTransform(711.925,556.125);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_162.setTransform(711.925,575.425);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_163.setTransform(664.025,556.325);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_164.setTransform(664.025,556.125);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_165.setTransform(664.025,556.125);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_166.setTransform(664.025,575.425);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_167.setTransform(616.125,556.325);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_168.setTransform(616.125,556.125);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_169.setTransform(616.125,556.125);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_170.setTransform(616.125,575.425);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#0F1010").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_171.setTransform(568.225,556.325);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#0F1010").s().p("Ah2CFIAAkJIDtAAIAAEJgAhcBqIC4AAIAAjTIi4AAg");
	this.shape_172.setTransform(568.225,556.125);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_173.setTransform(568.225,556.125);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_174.setTransform(568.225,575.425);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_175.setTransform(520.3,556.325);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_176.setTransform(520.325,556.125);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_177.setTransform(520.3,556.125);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#110B29").s().p("AiKBKIAAiTIEUAAIAACTg");
	this.shape_178.setTransform(520.3,575.425);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#0F1010").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_179.setTransform(472.4,556.325);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#0F1010").s().p("Ah3CFIAAkJIDvAAIAAEJgAhcBqIC5AAIAAjTIi5AAg");
	this.shape_180.setTransform(472.4,556.125);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_181.setTransform(472.4,556.125);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#110B29").s().p("AiKBKIAAiTIEVAAIAACTg");
	this.shape_182.setTransform(472.4,575.425);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_183.setTransform(424.5,556.325);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_184.setTransform(424.5,556.125);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_185.setTransform(424.5,556.125);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#110B29").s().p("AiJBKIAAiTIEUAAIAACTg");
	this.shape_186.setTransform(424.5,575.425);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_187.setTransform(711.925,509.625);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_188.setTransform(711.925,509.45);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_189.setTransform(711.925,509.45);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_190.setTransform(711.925,528.75);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#0F1010").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_191.setTransform(664.025,509.625);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#0F1010").s().p("Ah2CFIAAkJIDtAAIAAEJgAhbBqIC3AAIAAjTIi3AAg");
	this.shape_192.setTransform(664.025,509.45);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_193.setTransform(664.025,509.45);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_194.setTransform(664.025,528.75);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_195.setTransform(616.125,509.625);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_196.setTransform(616.125,509.45);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_197.setTransform(616.125,509.45);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_198.setTransform(616.125,528.75);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#0F1010").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_199.setTransform(568.225,509.625);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#0F1010").s().p("Ah2CFIAAkJIDtAAIAAEJgAhcBqIC4AAIAAjTIi4AAg");
	this.shape_200.setTransform(568.225,509.45);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_201.setTransform(568.225,509.45);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#110B29").s().p("AiJBKIAAiTIETAAIAACTg");
	this.shape_202.setTransform(568.225,528.75);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_203.setTransform(520.3,509.625);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_204.setTransform(520.325,509.45);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_205.setTransform(520.3,509.45);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#110B29").s().p("AiKBKIAAiTIEUAAIAACTg");
	this.shape_206.setTransform(520.3,528.75);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#0F1010").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_207.setTransform(472.4,509.625);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#0F1010").s().p("Ah3CFIAAkJIDvAAIAAEJgAhcBqIC5AAIAAjTIi5AAg");
	this.shape_208.setTransform(472.4,509.45);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_209.setTransform(472.4,509.45);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#110B29").s().p("AiKBKIAAiTIEVAAIAACTg");
	this.shape_210.setTransform(472.4,528.75);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgJB1IAAjpIATAAIAADpg");
	this.shape_211.setTransform(424.5,509.625);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AhwB+IAAj7IDhAAIAAD7gAhiBwIDFAAIAAjfIjFAAg");
	this.shape_212.setTransform(424.5,509.45);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FBB040").s().p("AhpB3IAAjtIDTAAIAADtg");
	this.shape_213.setTransform(424.5,509.45);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#110B29").s().p("AiJBKIAAiTIEUAAIAACTg");
	this.shape_214.setTransform(424.5,528.75);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#1E1736").s().p("A8lPyIAA/jMA5LAAAIAAfjg");
	this.shape_215.setTransform(568.2,578.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#241E3D").s().p("A6rCUIAAkmMA1XAAAIAAEmg");
	this.shape_216.setTransform(568.2,459.35);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#08021D").s().p("AhFDAIAAl/ICLAAIAAF/g");
	this.shape_217.setTransform(675.025,660.725);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#1E1736").s().p("AgQBkIAAjHIAhAAIAADHg");
	this.shape_218.setTransform(209.325,122.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#1E1736").s().p("AgQBkIAAjHIAhAAIAADHg");
	this.shape_219.setTransform(190.325,122.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#1E1736").s().p("AgQBkIAAjHIAhAAIAADHg");
	this.shape_220.setTransform(171.325,122.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#1E1736").s().p("AgQBkIAAjHIAhAAIAADHg");
	this.shape_221.setTransform(152.275,122.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#1E1736").s().p("AgQBkIAAjHIAhAAIAADHg");
	this.shape_222.setTransform(133.275,122.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#1E1736").s().p("AgQBkIAAjHIAhAAIAADHg");
	this.shape_223.setTransform(114.275,122.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#1E1736").s().p("AgQBkIAAjHIAhAAIAADHg");
	this.shape_224.setTransform(95.275,122.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#1E1736").s().p("AgQBkIAAjHIAhAAIAADHg");
	this.shape_225.setTransform(76.275,122.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#1E1736").s().p("AgQBkIAAjHIAhAAIAADHg");
	this.shape_226.setTransform(57.275,122.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#1E1736").s().p("Aw/ASIAAgkMAh/AAAIAAAkg");
	this.shape_227.setTransform(114.3,110.95);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#110B29").s().p("Ax2AzIAAhlMAjtAAAIAABlg");
	this.shape_228.setTransform(114.3,690.25);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#08021D").s().p("AifFdIAAq5IE/AAIAAK5g");
	this.shape_229.setTransform(114.275,650.275);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#110B29").s().p("AjdGMIAAsXIG7AAIAAMXg");
	this.shape_230.setTransform(114.275,648.325);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("Ah0ARIAAghIDpAAIAAAhg");
	this.shape_231.setTransform(191.175,555.225);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AiMEEIAAoHIEZAAIAAIHgAhqDiIDWAAIAAnDIjWAAg");
	this.shape_232.setTransform(190.45,563.075);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FBB040").s().p("Ah7DzIAAnlID3AAIAAHlg");
	this.shape_233.setTransform(190.475,563.075);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_234.setTransform(190.45,592);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#0F1010").s().p("Ah0ARIAAghIDpAAIAAAhg");
	this.shape_235.setTransform(140.575,555.225);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#0F1010").s().p("AiMEEIAAoHIEZAAIAAIHgAhqDiIDVAAIAAnDIjVAAg");
	this.shape_236.setTransform(139.875,563.075);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("Ah7DzIAAnlID3AAIAAHlg");
	this.shape_237.setTransform(139.875,563.075);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_238.setTransform(139.875,592);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("Ah0ARIAAghIDpAAIAAAhg");
	this.shape_239.setTransform(89.975,555.225);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AiMEEIAAoHIEZAAIAAIHgAhqDiIDVAAIAAnDIjVAAg");
	this.shape_240.setTransform(89.275,563.075);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FBB040").s().p("Ah7DzIAAnlID3AAIAAHlg");
	this.shape_241.setTransform(89.275,563.075);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_242.setTransform(89.275,592);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_243.setTransform(38.725,592);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("Ah0ARIAAghIDpAAIAAAhg");
	this.shape_244.setTransform(191.175,479.775);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AiMEEIAAoHIEZAAIAAIHgAhqDiIDWAAIAAnEIjWAAg");
	this.shape_245.setTransform(190.45,487.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FBB040").s().p("Ah7DzIAAnlID3AAIAAHlg");
	this.shape_246.setTransform(190.475,487.6);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_247.setTransform(190.45,516.525);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("Ah0ARIAAghIDpAAIAAAhg");
	this.shape_248.setTransform(140.575,479.775);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AiMEEIAAoHIEZAAIAAIHgAhqDiIDVAAIAAnEIjVAAg");
	this.shape_249.setTransform(139.875,487.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FBB040").s().p("Ah7DzIAAnlID3AAIAAHlg");
	this.shape_250.setTransform(139.875,487.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_251.setTransform(139.875,516.525);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("Ah0ARIAAghIDpAAIAAAhg");
	this.shape_252.setTransform(89.975,479.775);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AiMEEIAAoHIEZAAIAAIHgAhqDiIDVAAIAAnEIjVAAg");
	this.shape_253.setTransform(89.275,487.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FBB040").s().p("Ah7DzIAAnlID3AAIAAHlg");
	this.shape_254.setTransform(89.275,487.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_255.setTransform(89.275,516.525);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_256.setTransform(38.725,516.525);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("Ah0ARIAAghIDpAAIAAAhg");
	this.shape_257.setTransform(191.175,404.325);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AiMEEIAAoHIEZAAIAAIHgAhqDiIDWAAIAAnDIjWAAg");
	this.shape_258.setTransform(190.45,412.15);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FBB040").s().p("Ah7DzIAAnlID3AAIAAHlg");
	this.shape_259.setTransform(190.475,412.125);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_260.setTransform(190.45,441.075);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#0F1010").s().p("Ah0ARIAAghIDpAAIAAAhg");
	this.shape_261.setTransform(140.575,404.325);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#0F1010").s().p("AiMEEIAAoHIEZAAIAAIHgAhqDiIDVAAIAAnDIjVAAg");
	this.shape_262.setTransform(139.875,412.15);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("Ah7DzIAAnlID3AAIAAHlg");
	this.shape_263.setTransform(139.875,412.125);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_264.setTransform(139.875,441.075);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("Ah0ARIAAghIDpAAIAAAhg");
	this.shape_265.setTransform(89.975,404.325);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AiMEEIAAoHIEZAAIAAIHgAhqDiIDVAAIAAnDIjVAAg");
	this.shape_266.setTransform(89.275,412.15);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FBB040").s().p("Ah7DzIAAnlID3AAIAAHlg");
	this.shape_267.setTransform(89.275,412.125);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_268.setTransform(89.275,441.075);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_269.setTransform(38.725,441.075);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("Ah0ARIAAghIDpAAIAAAhg");
	this.shape_270.setTransform(191.175,328.825);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AiMEEIAAoHIEZAAIAAIHgAhqDiIDWAAIAAnDIjWAAg");
	this.shape_271.setTransform(190.45,336.65);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FBB040").s().p("Ah7DzIAAnlID3AAIAAHlg");
	this.shape_272.setTransform(190.475,336.675);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_273.setTransform(190.45,365.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("Ah0ARIAAghIDpAAIAAAhg");
	this.shape_274.setTransform(140.575,328.825);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AiMEEIAAoHIEZAAIAAIHgAhqDiIDVAAIAAnDIjVAAg");
	this.shape_275.setTransform(139.875,336.65);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FBB040").s().p("Ah7DzIAAnlID3AAIAAHlg");
	this.shape_276.setTransform(139.875,336.675);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_277.setTransform(139.875,365.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("Ah0ARIAAghIDpAAIAAAhg");
	this.shape_278.setTransform(89.975,328.825);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AiMEEIAAoHIEZAAIAAIHgAhqDiIDVAAIAAnDIjVAAg");
	this.shape_279.setTransform(89.275,336.65);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FBB040").s().p("Ah7DzIAAnlID3AAIAAHlg");
	this.shape_280.setTransform(89.275,336.675);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_281.setTransform(89.275,365.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_282.setTransform(38.725,365.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("Ah0ARIAAghIDpAAIAAAhg");
	this.shape_283.setTransform(191.175,253.375);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AiMEEIAAoHIEZAAIAAIHgAhqDjIDWAAIAAnEIjWAAg");
	this.shape_284.setTransform(190.45,261.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FBB040").s().p("Ah7DzIAAnlID3AAIAAHlg");
	this.shape_285.setTransform(190.475,261.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_286.setTransform(190.45,290.125);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("Ah0ARIAAghIDpAAIAAAhg");
	this.shape_287.setTransform(140.575,253.375);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AiMEEIAAoHIEZAAIAAIHgAhqDjIDVAAIAAnEIjVAAg");
	this.shape_288.setTransform(139.875,261.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FBB040").s().p("Ah7DzIAAnlID3AAIAAHlg");
	this.shape_289.setTransform(139.875,261.2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_290.setTransform(139.875,290.125);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#0F1010").s().p("AiKARIAAghIEWAAIAAAhg");
	this.shape_291.setTransform(89.25,253.375);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#0F1010").s().p("AiMEEIAAoHIEZAAIAAIHgAhqDjIDVAAIAAnEIjVAAg");
	this.shape_292.setTransform(89.275,261.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("Ah7DzIAAnlID3AAIAAHlg");
	this.shape_293.setTransform(89.275,261.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_294.setTransform(89.275,290.125);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_295.setTransform(38.725,290.125);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#0F1010").s().p("Ah0ARIAAghIDpAAIAAAhg");
	this.shape_296.setTransform(191.175,177.925);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#0F1010").s().p("AiMEEIAAoHIEZAAIAAIHgAhqDiIDWAAIAAnDIjWAAg");
	this.shape_297.setTransform(190.45,185.725);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("Ah7DzIAAnlID3AAIAAHlg");
	this.shape_298.setTransform(190.475,185.725);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_299.setTransform(190.45,214.65);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("Ah0ARIAAghIDpAAIAAAhg");
	this.shape_300.setTransform(140.575,177.925);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AiMEEIAAoHIEZAAIAAIHgAhqDiIDVAAIAAnDIjVAAg");
	this.shape_301.setTransform(139.875,185.725);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FBB040").s().p("Ah7DzIAAnlID3AAIAAHlg");
	this.shape_302.setTransform(139.875,185.725);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_303.setTransform(139.875,214.65);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("Ah0ARIAAghIDpAAIAAAhg");
	this.shape_304.setTransform(89.975,177.925);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AiMEEIAAoHIEZAAIAAIHgAhqDiIDVAAIAAnDIjVAAg");
	this.shape_305.setTransform(89.275,185.725);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FBB040").s().p("Ah7DzIAAnlID3AAIAAHlg");
	this.shape_306.setTransform(89.275,185.725);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_307.setTransform(89.275,214.65);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#110B29").s().p("Ai2AuIAAhbIFtAAIAABbg");
	this.shape_308.setTransform(38.725,214.65);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#1E1736").s().p("EgRJArXMAAAhWtMAiTAAAMAAABWtg");
	this.shape_309.setTransform(114.325,410.35);

	this.instance_3 = new lib.Group_6();
	this.instance_3.setTransform(301.1,442.95,1,1,0,0,0,31.7,225.9);
	this.instance_3.alpha = 0.3008;

	this.instance_4 = new lib.Group_7();
	this.instance_4.setTransform(616.1,480.5,1,1,0,0,0,71,174.7);
	this.instance_4.alpha = 0.5;

	this.instance_5 = new lib.Group_8();
	this.instance_5.setTransform(471.35,517.55,1,1,0,0,0,50.1,176.2);
	this.instance_5.alpha = 0.3008;

	this.instance_6 = new lib.Group_9();
	this.instance_6.setTransform(854.4,464.25,1,1,0,0,0,173.7,108.4);
	this.instance_6.alpha = 0.1016;

	this.instance_7 = new lib.Group_10();
	this.instance_7.setTransform(308.8,532.7,1,1,0,0,0,195.2,121.8);
	this.instance_7.alpha = 0.1016;

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#524D7A").s().p("Eg/uA2VMAAAhspMB/dAAAMAAABspg");
	this.shape_310.setTransform(453.35,347.65);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.shape,this.text,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.shape_221,this.shape_222,this.shape_223,this.shape_224,this.shape_225,this.shape_226,this.shape_227,this.shape_228,this.shape_229,this.shape_230,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239,this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246,this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251,this.shape_252,this.shape_253,this.shape_254,this.shape_255,this.shape_256,this.shape_257,this.shape_258,this.shape_259,this.shape_260,this.shape_261,this.shape_262,this.shape_263,this.shape_264,this.shape_265,this.shape_266,this.shape_267,this.shape_268,this.shape_269,this.shape_270,this.shape_271,this.shape_272,this.shape_273,this.shape_274,this.shape_275,this.shape_276,this.shape_277,this.shape_278,this.shape_279,this.shape_280,this.shape_281,this.shape_282,this.shape_283,this.shape_284,this.shape_285,this.shape_286,this.shape_287,this.shape_288,this.shape_289,this.shape_290,this.shape_291,this.shape_292,this.shape_293,this.shape_294,this.shape_295,this.shape_296,this.shape_297,this.shape_298,this.shape_299,this.shape_300,this.shape_301,this.shape_302,this.shape_303,this.shape_304,this.shape_305,this.shape_306,this.shape_307,this.shape_308,this.shape_309,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.shape_310];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_310},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(54.5,5,800,800), null);


(lib.WomansideSTATIC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Heart();
	this.instance.setTransform(872.15,-281.4,0.2597,0.2597,0,0,0,184.8,153.7);

	this.instance_1 = new lib.Heart();
	this.instance_1.setTransform(768.1,-209.9,0.1733,0.1733,0,0,0,184.9,153.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(26));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#020202").s().p("AlVQjQi8gjiYhRQopklgpsjQgNkAApkZQAWiXAchmQAMgvAigjQAigjAugOQAvgOAvALQAwALAkAgQA7A1BmBEQC9B/DYBZQKkEXK6i4QAugMAuAMQAuALAjAhQAjAgAPAtQAPAtgIAvQgEAWgLAyQgUBRgbBXQhUEQh+DhQjIFnkcC8QkbC7lTAAQh3AAh5gXgAtqBHQBUGJEbCXQBnA2CDAZQEpA4DwiFQDviECxk+QBZieBCi+QoIBHn/iVQluhqlFjOQgtFtA6EVg");
	this.shape.setTransform(762.0605,185.8124,0.3308,0.3308,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F227A").s().p("Am2GtQijgeiEhGIgMgHIAAgOIAAgsQAJiYBKiHQBKiHCChlQCChlCigwQCigxCuAKQCdAICRA4QCRA4ByBfIAPANIgKASQibEWjPCjQkLDSlNAAQhnAAhtgVgAiYlqQiaAuh6BfQh6BehFB/QhFB9gICOIgBAaQB5A9CSAbQGJBKE1jLQDuibCukwQhqhViFgyQiGgxiQgIIg0gCQiJAAiCAng");
	this.shape_1.setTransform(757.8537,201.4134,0.3308,0.3308,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF5283").s().p("AmuGVQifgdiBhFIABgpQAIiWBLiEQBHiBB7hfQB8hgCbgvQChgyCsAKQCdAICPA4QCJA2BuBcQi2FGj6CiQjnCXkUAAQhmAAhsgVg");
	this.shape_2.setTransform(757.9667,201.4103,0.3308,0.3308,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#390075").s().p("AkzNtQifgeiAhEQncj8gWrgQgGjmAnj8IApjNIAoAiQA2AqA/AsQDMCLDrBjQLsE9MAjJIgNA7QgSBLgYBQQhPD/h2DSQi2FHj5CjQjnCWkVAAQhmAAhsgUg");
	this.shape_3.setTransform(762.0506,185.8228,0.3308,0.3308,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373737").s().p("AEiBfIgBgBQgIgGgYgPIglgTQghgRgsgQQhSgbhRgGQgSgCgYAAIgrABIgqAGQgZADgQAEQhBANhfAzIgCABQgKAFgKgCQgLgDgGgJQgHgKADgMQACgLAKgHQBihBBHgWQATgIAcgGIAvgMQBIgJAZAAQBfgDBiAYQA4AOAmAPQASAHAcAMQAdAOARAKIAGADQAWAPAEAbQAFAbgQAVQgQAWgaAEIgMABQgUAAgRgMg");
	this.shape_4.setTransform(669.6838,81.7284,0.6286,0.6286,-14.9964);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373737").s().p("AlRBqQgagEgQgWQgQgVAEgbQAEgaAWgPIAGgEQAWgNAZgLQAZgMAUgHQArgQAzgNQBfgXBiACQAUAAAcAEIAxAGIAwALQAbAGATAIQBHAWBiBBQAKAHADALQACAMgHAKQgGAJgLADQgKADgKgGIgCgBQhigzg+gNQgQgEgZgDIgqgGIgqgBQgZAAgRACQhSAGhSAbQgvASgeAPQgSAJgTALQgVAMgLAIIgBABQgRAMgUAAIgLgBg");
	this.shape_5.setTransform(779.7082,50.0245,0.6286,0.6286,-14.9964);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhGBrQgegtAAg+QAAg9AegtQAdgrApgBQAqABAdArQAdAtABA9QgBA+gdAtQgdAsgqAAQgpAAgdgsg");
	this.shape_6.setTransform(687.7739,112.1596,0.6286,0.6286,-14.9964);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Aj2FOQhniLAAjDQAAjDBniKQBmiKCQAAQCRAABmCKQBnCKAADDQAADDhnCLQhmCKiRAAQiQAAhmiKg");
	this.shape_7.setTransform(691.5286,120.533,0.6286,0.6286,-14.9926);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373737").s().p("ABSBrIhUgaQgzgWgbgWQgngcgVgkQgXgqAEgnIAAgBIABABQALAjAgAaQAaAVAlAJQAZAHAsACIBHgGIADAAQAZgDAVAQQAUAPADAaQADAagQAUQgQAUgaADIgGABQgJAAgIgDg");
	this.shape_8.setTransform(662.8864,116.3048,0.6286,0.6286,-14.9964);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhGBrQgegtAAg+QAAg9AegtQAdgrApgBQAqABAdArQAeAtAAA9QAAA+geAtQgdAsgqAAQgpAAgdgsg");
	this.shape_9.setTransform(794.6015,76.3493,0.6286,0.6286,-14.9964);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Aj2FOQhniKAAjEQAAjDBniKQBmiKCQAAQCRAABmCKQBnCKgBDDQABDDhnCLQhmCKiRAAQiQAAhmiKg");
	this.shape_10.setTransform(799.1805,85.9746,0.6286,0.6286,-14.9926);

	this.instance_2 = new lib.Group_0();
	this.instance_2.setTransform(666.3,-26.8,0.3726,0.3726,0,0,180,457.8,231.8);
	this.instance_2.alpha = 0.3984;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00080F").s().p("AgTBJQgygOgkgkQgRgRgBgZQgBgWATgUQAHgIAMgFQAMgFALAAQAZAAARASIAJAHIAOAJIAVAFIATAAIAGgBQAYgGAVAMQAVAMAIAXQADAKgCAOQgBAMgGAKQgNAWgXAGQgYAGgYAAQgaAAgZgHg");
	this.shape_11.setTransform(833.8045,47.8096,0.3725,0.3725,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00080F").s().p("AC4GYQhEgng8g4QhQhLhdiKIhIhvQg1hTgXgzQgLgYAFgWQAGgWAVgOQAKgHALgBIgjhoQgHgXANgWQANgVAXgHQAXgIAXAOQAUAMAIAXIBdERIAAAAIACADQAHASAJAPQAQAcAaAiIABABID0E5QARAVABAWQAAATgNARQgOARgWAFIgMABQgQAAgNgIg");
	this.shape_12.setTransform(841.3013,36.9726,0.3725,0.3725,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00080F").s().p("AgvO+QgYgFgMgXQgNgWAHgXQAPgqAKguIAEgRIAPhZIAAgCIARirIhABlQgdAxgRAYQgdApgeATQgXAPgaABQgcACgXgNQgUgLgNgUQgNgTgDgXQgKg/AchpQAShDAdhTIA1iTQBvkpCJkdQAag2ArhUIBHiKIABAAQACgIAEgIIAFgHIAUgsIABgDIAHgQIAOg1IgCgQIAAgCIgBgGQgEgaAKgUQAFgIAGgGQABgTgBgSQgCgYATgSQATgRAYgBQAXgBATASQAOAPAEAcIABASQABAagCAaQgEAigJAkQAGBMgIBMQgEAqgJAqIACAIQASBOgIBKQgDArgLAsQgCBvgVC4QgOB6gFAlQgOBZgXBCQgLAigTAsIgiBNIg2CEQgmBmgjB1IgWBOQgJAYgTALQgNAIgQAAQgIAAgIgCgAj5J/IgBACQAAAAAAAAQABAAAAAAQAAgBABAAQAAgBABgBIAAgBgAgIgMIgBAEQhBCagtB9QgXA9gbBRQghBfgNAxIgJAuICpkJIAxhMQgRgDgPgOQgRgTgBgXQAAhDAYhJQAQgvAdhCIANgaIAEgXgACdIQIAAACIABgEgAB/ETIgKAsQAJgYAGgVIAFgOIgKAPgACiB/IAAAFIAAgDIABgEIgBACg");
	this.shape_13.setTransform(471.1031,91.8732,0.3725,0.3725,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#994F2F").s().p("AjvKKQgagGgagUQgYgTgOgYQgQgagCgeQgGgeAJgeQAUhvAehlQA6jEBhi+QArhWAzhRIAwhNQATghAOgdQAJgaAFgXIgBALIAEgZIgDAOIABgQQAAg6AsgwQAlgoBFgEQAbgBAeANQAdAMAUAUQAUAVAMAcQAMAdAAAcQAAAzgOA3QgFAVgKAbIgUAvQgUAugoBAIhDBrQg8BngyByQhRDJgnDVQgFAbgUAZQgSAVgaARQgfAUgpAAQgUAAgXgFg");
	this.shape_14.setTransform(478.8165,88.0817,0.3725,0.3725,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#994F2F").s().p("AkBZSQgsgKgigsQgfgogBgzQgHitANjGQATkiBDmMQAThtApjaIAfihQAPhQAJg9QAQiFgQiAIgIg3IgYhTQgbhYgOhBQgRhUgBhJQAAghAOgeQABgOAEgPIAQgkQAFgLAIgJIgMggQgwh5gPgqQgghdgQhLQgNg+Acg1QAVgoAzgVQAtgUA0AMQAZAGAbAUQAcAVAKAWQAyBuAoBrQA8ChApCuQAYBSATBeQATBhATCPQAMBdAOCHIAYDlIBkOsQADAcgOAeQgLAZgWAXQgmAqhEACQgMABgNgCQgTBUgdBIQgyB9hABtQgfA1haCMQglA5g1AMQgUAEgUAAQgTAAgUgEg");
	this.shape_15.setTransform(476.2281,35.4753,0.3725,0.3725,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#994F2F").s().p("AAVLfQgcgMgUgUQgWgUgJgdQgOgaABgfQAKhfACgyQADhLgHg9IgBgJIgHg6QgGg3gBgrQgDhOgJhJIgBgKQgVibgMhNQgOhagFgZQgKgzgPgoQgIgPgJgPIgLgMQgpgngDhDQgCg3AugzQASgUAfgMQAdgMAcAAQAdAAAcAMQAbAMAVAUQBPBLAkCBQAPAzAQBsQANBQAPBrIAQBvQAJBAADAuQACAWACBGQABAxAEAhIABAIIAJBDQAGA6AAAuQgBA1gNB6QAAAogUAjIgYAfQglAohFAEIgEAAQgaAAgbgMg");
	this.shape_16.setTransform(481.199,0.2635,0.3725,0.3725,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#994F2F").s().p("ADRGNQghgEgYgPQg6glhOg+QhCg1g6g+QgSAYgaAQQgaARgeABQgTAGgVgGQgegBgZgRIgfgXQgUgSgMgfQgMgeAAgbIAKlDQACg9AqgtQAmgpBEgDQAbgBAeANQAdAMAUAUQAUAVAMAcIAFAMIAHAHIAYAfQAoBKAvBBQBRBlBmBRQAnAcAnAZQAyAfATA7QARA2ggA9QgNAYgZATQgZATgbAHQgTAGgVAAIgTgCg");
	this.shape_17.setTransform(568.1801,4.7606,0.3725,0.3725,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#994F2F").s().p("AKEHtQgdgBgagRIllk4IgygsIgggcIALAIIgRgNIgBAAIgBAAQmHAUmDgHQg8AAgugsQgWgTgJgdQgLgRAAgUQgGgdAJgeIAPgkQANgYAZgTQAXgRAdgJIACgBIgcgFQgagEgZgVQgWgSgRgaQgfgwAQhDQAGgaAUgaQATgYAYgOQAZgQAfgCQAdgGAfAJQBqARCGAYQGvBRGgBwQAmAKAcAcQATATALAXQAcAJATAWIAYAeQA6BZA3CBQApBjAXBnQAHAegDAdQgEAggPAYQgVAhghAVQgaARgeABQgKADgKAAQgKAAgKgDg");
	this.shape_18.setTransform(687.5542,-60.4847,0.3725,0.3725,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#994F2F").s().p("AhpBqQgpgmgDhEQgBgaANgeQAMgdAUgUQAVgUAcgMQAcgMAcAAQA6AAAwAsQApAlADBEQABAcgMAeQgNAcgUAUQgUAVgcALQgdAMgdAAQg5AAgwgsg");
	this.shape_19.setTransform(838.4102,36.8305,0.3725,0.3725,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#994F2F").s().p("AhpBqQgpgmgDhEQgBgaANgeQAMgdAUgUQAUgUAdgMQAcgMAcAAQA6AAAwAsQApAlADBEQABAbgMAeQgNAdgUAUQgUAVgcALQgdAMgdAAQg5AAgwgsg");
	this.shape_20.setTransform(838.4102,35.1357,0.3725,0.3725,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#994F2F").s().p("AlFMSQgggFgZgOQgYgOgTgYQgSgYgIgcQgyitA7jZQAQg8AdhNIA0iGQAlhaAag0QAmhNAqg4QArg5A/hIIBuh8IDMjmQAlgpBFgDQAvgCAsAiQAmAdAQAxQARA0ggA/QgyBkg4BUQgaAmhWBzQgfAqgSAiIgoBPQgrBShMBLIg1A2QgXAWgQATQgNATgJASIgIAWIgLAcQgHARgGAKQgKAQgOARQgTA/gJA0IABgLIgEAYIADgNQgGA6AFA1QADAUAGAVQARA5ggA7QgZAwhAAVQgRAFgTAAQgLAAgMgBg");
	this.shape_21.setTransform(817.837,-63.1672,0.3725,0.3725,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#994F2F").s().p("Al8JHQgYgNgTgZQgTgZgHgbQgIgcAEgfQAEggAPgYQAohDAwhMQBLh2BaiAIBTh2QAlg4AXgxQATgtAThEQAZhUAKgbQAPgoATgbQAXggAggTQAogYAwAAQAWAAAUAFQAPgFARgCQAcgDAfAHQAaAGAZAUQAYATAPAYQAQAZABAfQAHAdgJAfQg5CZhpBoQgUAWgcAJIgBABQgkBTgtBBIg5BSIg5BRQh1CthmCpQgeAyg8ATQgTAGgTAAQglAAgogVg");
	this.shape_22.setTransform(815.2713,-68.0283,0.3725,0.3725,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#994F2F").s().p("A7TJpQgogLgagcQgdgcgKgnQgKgnAKgoIAHghQAFgxgEgyQgIgvgSgvQgLgYgNgWQgfg2ARg7QAQg6A0ghQAYgPAhgEQAfgEAcAIQAbAHAYATQAYASAOAYQBDBwASCEIAFAtQFXgzDvgoQGBhBE0hHQFphSE9hoQCWgyC1hHQB1gvDRhXQDNhWB6gvQC1hFCYgsQA7gRA2AgQA1AfATA7QAIAbgFAgQgEAggPAZQgOAYgYATQgYASgbAIIhTAZQiUAui3BJQhdAljpBiQl+CfkVBYQk5BilvBRQkxBDmFBBQjIAgnzBKQgUAGgUAAQgUAAgUgGg");
	this.shape_23.setTransform(774.3344,24.0051,0.3725,0.3725,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#994F2F").s().p("A2cL4Qg1gMgsgdQgrgagbgcQgYgYgegtQgVgegUg9QgOguACgtQABgUALhIQAXhQA6g7QA7g6BQgXQCCgfChgqQEOhGD1hKQBwghCQguIB8goIBOgaQAbgPAngaQApgbA4gYQEHh1EnhkQAOgSAQgRQA1gsAkgZQAygjAvgVQBKgrBVAAIBUALQBQAWA7A7IAxBAQAjA2ADA/IADAPQBogKBhgDQBWABBIAqIBAAxQA7A7AWBQIAMBUQACBBgeA4QgSA6gvArQgrAug6ATQg6Aeg/gDQiUAFiTATQjsAikXBHQi7Avk1BbQl0Buh6AiQjQA4kmBAQicAhhfAjQgqARgVAHQgzAQg5ACIgIAAQgzAAgxgNg");
	this.shape_24.setTransform(758.1864,10.8698,0.3725,0.3725,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#994F2F").s().p("EggsAboIhLggQg4geghgzQgpgsgPg/Qg0i9gWj1QgQixANi6QAZl1BulWQBrlLCzlBQCRkEDLkLQBbh2BbhvIASgmQASgiAdgpIA2hGQAigqAoghQBWhIA5ggQBxg9CCAeQAkAIAfASQAngRAagHQAggIBFgGQAMgCAKABIAvAGQAbACAUAFQAEAAAGADQAwAPAgASIAIAGQAtAdAXAYIAIAJIAgAlQARAXAJATIAVAvQAMAcAEAVIAHAvQB8g2BcgdQDchHESgVQBCgCA4AdQAoALAdAdQAkAVAVAkQAdAdALAoQAeA5gDBBIgDAWQB4gnB7gZQA/gTA+AOQAqAAAmAVQAoALAdAeQAYAOARAUQAtARAjAgQA0AhAdA3QAWAmALApIBzgQQB7gQBdgDQBDgCBkATQBTAPBBAtQA5AqATASQAJAJAKANIARAXIASAXQALAOAGAKQAMAVAbBEQAJAZAFAkIAHA+QADAaAAAWQgCAmgHAyIgNBYQgJA6gLA5QgTBugcBzQg2DhhQDaQgWBQg7A7Ig/AyQgzAhhDAHQg9AGhAgPQg9gOgugqQg0ghgdg3Qgjg3gDg/QgOg+AUg/QAuiaAnibIg+AFQgXABgZAAQACAUgBAUIgLBTQgPA+gqAtQggAzg4AeIrYF9Ip4FMQl1DFkDCDQleCylGCDQlVCHkuA/QgpALgqAAQgqAAgqgLgA3pFyIB0g/QgeAHgdAKQgWAKgUANIgMAMIAAgBIAAABIAAAAIgDALgA0WlGQA7ABBXAIICRANQCBAKB0gKQBrgSCBgmIAzgQQgRgagJgeQgeg4ADhBQgBgWADgWIgVgEQgqAAgmgWQg7gTgqguIgyhAIgfhLIgMhUIgGhWIjCBvIgEACIg3BGQg1BGg3BNQh5CthiCtQA4gFAtAAIAIAAg");
	this.shape_25.setTransform(758.2832,-25.2041,0.3725,0.3725,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#994F2F").s().p("EAYbAoSQgrAAglgWQhMgfgyhCQhEhXAAhnIAMhUIAfhLIAIgMIgCgIIgKgRIgDgFIgFgEIgdgQQgggLgjgHQhHgFhPAIQguAHgjADQhUAAhLgrQgXgNgUgRQggA4giA4Qg1BYhhAoQglAWgrAAQgqALgpgLQg/gCg3gjIg/gyQgygxgfhaQhgkPgkl+QgUjlAIktIADhZQjuhMkAhsQhegnhggsQgBAXgDAYQgKA8gfA7QgXArgqAiQglAfgxAVQhgAphtgZQg9gOgugrQgzghgeg3Qh2ighnigQhBhkg8hnQgKAdgRAcQgrBKhHApQhHAqhYACQg0ABgqgNIg/CHQgkBKhCA4QhGA5hOARQhBANgmgCQg3gDgjgKQgdgJg3gZQghgQgoghQgPgGgNgIQg0gegmgzQgkgugSg5IicjHQg7g6gWhRIgMhSQgCgyAUg0QARguAhgrQA9hQBnghQA/gUA+AOQA/ADA2AjQBiBHAtAuIALALIA0hxQAYgzA3goQAwgiA9gUQAWgHAXgDQAPg9ATg7QAihmBLg7Qgwh2gsh5QgVg3AMhFQADgXAHgWIkAmNQghgzgHhDQgGg8AOhBQANg5ApgyQAlguA2gjQAxgfBFgJQBCgIA7AQQBvAfBNByQCEDEB2C/IAcAvIAAgCIABgHQgWgqgFg0QgFg0AKg4Qgeh5gih5Qghh3BBh8QAXgqAqgjQAlgfAxgVQBggoBtAZQA3AMA1AqQAvAmAhA0QBKB0BLB6QAAgsASguQARgvAhgqQA+hQBlghQBAgUA+AOQA/ADA2AjIA6AoQAkgtA0geQAjgVAmgKQgEgaAAgaIALhUQANg5ApgzQAlgtA2gjQAxggBEgIQBCgIA6AQQA6AQAyAnQAzAmAeA0QDyGhC8G2QArBKAABVIgLBUQgKAvggAsQgdAogqAgQg3AqhDAQQBwJLgbKFIgGB/IBcARQAUgRAYgQQAzghBDgHQA8gGBBAPQA3AMA1AqQAhAaAYAeQBuAGCnAGQDIAIBjAFQCmAJCFAPQBzAMAxAHQBdANBGAUQBYAaBgAwQAnATAqAeQAcAUAuAnQAoAgAhArQAlAuARAYQAdAoASAjQBGCJAaCBQAZB/AHCWIALAYQALAcAFAaQALA7AAAmQABAvgNAxQgmCQiQBgIgRALIAIALQA7A7AWBQQAXBUgXBTQgWBQg7A7Qg6A7hRAWIwjCZQglAMgkAAQgbAAgZgGgAeUdwIAzgHIgngGIgRgDIAFAQgAa6PTIAXA2IAWAGIBLAgQB8A6B8BJIBOAwIAjgWIBjhEQAjgVAjgRIgVgjQgOgPgOgNQgUgNgWgLQhGgXhcgPQiogUjrgMIAGAOgAAcjkQgHAegQAdQAHAgAAAiIgLBUQgIAngXAkIBHAZQAFirgCiUIgNgFIgDAPg");
	this.shape_26.setTransform(610.0792,-0.6098,0.3725,0.3725,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#994F2F").s().p("ABTbSQgfAAgagPQgpgOgfghIgjgtIhVidQgIgKgGgMIhSiZIgNAPQg4A8hnAGQgpACgtgUQgrgSgegeQghgfgOgqQgVgoACguQghkDAykPIAAgBIgSApQg6CBhtB7QgnArg/AQQgaAGgaABIgNALQgbAWgjAPQgaAPgfAAQgeAJgegJQgsgBgngZIgugjIgjguIgXg2Qg4jUgNjSQgaAPgaALQiLBBhnAOQguAPgsgLQgfAAgagPQgcgHgWgWQgYgOgQgaQgeghgKgsIgIg8QAAg0Aeg9ICakpQEPoHEnoMQAphKBdgdQAqgOAvAIQAOACANADIDqm3QATglAmgcQAigZArgOQAugOAsAKQAfAAAaAPQAqAPAeAgIAjAuQAZAmACAsQAKAMAIAPIAWA2QAcBkAUBoQAcCSANCNQAHgMAIgLQAcgmAkgTQA3gdA7gCQAZgBAXAGQAHgVALgSIAjguQAfghApgNQAagQAfAAQAugKAsAOIA1AXQBFAkAjBiQAzCPA1COIADgBQA6gPA7APQAagTAhgHIA7gIQAvgCAoAVQAYAIATANQAcgkAngZQAlgYAugCQAegIAeAIQAuACAmAYIAtAkQA/BDA4BHQARgEAQAAQAjgbArgMQA8gQA8AQQA4AQArAqQBPBFBWB3QAcAlAZAtQALAIAKAKQAtAsARA9QAJAjgBAdIgDAgQgDAVgDAKQgJAggQAbQgMAWgYAaQgqAqg5ASIgOAQIhRBgQhGBWhVBuIAEgFQhRBqhQBvQlFHHkJH1QgWAogkAXQghAegsAKQg7AOg8gOQhDgPgyhBQgeghgLgsIgIg8QAChfAIhrQAJhtAOhpQgFgNgEgNIgCgHIgKAeIgdDKQgOAwgeAkIgYEKQABAvgVAoQgNApghAfQgsAog4ASQgZAIgaAAQgTAAgTgEgANbEaQAiANAeAXQAkAYAWAnIAJAVQCNjLCgjLQgagOgVgWIgPgVQggAdgoAOIAAAJQADApgTAsQgSAnggAiQgdAhgrAOQgbAPgeAAQgsALgtgPIg2gWQgkgTgdgnQgcglgLgoQgIgigLghQgRAQgWALQgZAOgcAIIBaEDQArgTAygCIAHgBQAgAAAhANgAn7DmIgaAiQgOBFgMAyIAAADQAlgdAtgQQAAhVgFhWQgIAfgRAdg");
	this.shape_27.setTransform(554.9831,-7.3504,0.3725,0.3725,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#994F2F").s().p("EAm+AHbMgrxgG9IuDCnQgPACgDgNQgEgOAOgEQE0hmEuhTIq0huQibAAh9ACQovAInMApQgOABAAgPQAAgOAOgCQGFg0GHglQKshAK/gVQEjgIEkAAQjggajigXInUgGQgPAAAAgOQAAgOAPgCIAhgEIhygJQgPgBAAgPQAAgPAPABIDmATIAjADIAEAAQC9gUC4gPQPahPPeA6QAPABAAAOQAAAOgPABQk8AckzAqIWkARQANAAACAOQABANgMADIh6AYQnOBYoaAoQm4Aho3AEInBBTQCBAWCCASQOBCHOWAfQAPABAAAPQAAAPgPgBQj2gIkSgSQp+gqp8heIBJAPQImB1H/BdIEJAxIEIAsQEOAtEMAoQAOADgEAOQgEANgLAAIgDgBgAL7CqQmphWmmhfIiHAYIPWCdIAAAAgAvUB8IJKhsIiKgVQjhA8jfBFgAnNgZICbAZICWgcIhLgRQgOgDAEgOQAEgOAOACIChAdIFuhFQijAAi+gCIgyAAQi2Ari0AwgAoWgkQCcgrCdgmIlSgFQkugEjzgBgAy3jVQmkAcmgArQEUgLE3gDIA8gBQADgNAMgBIXvgeQCHgdCHgaIjjgCIgPAAQqrAAqyAtgAORjYQAMACgCAOQgCANgMABIr/APIh1AaQEDACC4gBICJgaQAOgCAEAOQACAIgDAEQIQgHG0glQHKgmGWhMI3RgSQhnAQhnARIDTAQQAOABAAAPQAAAPgOgBQiXgFiYgEID6AkgArXiaIEgAEIFSAEIBdgWgAEqjMIGwgJIjageIgKgBQhmAThmAVgAJ7krICVgZIovgHgAmXl9IC0AOISiAPQEwguE2ghQi4gIiygDQiGgDiGAAQqkAAqiBAg");
	this.shape_28.setTransform(647.2574,-42.9703,0.3725,0.3725,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#020202").s().p("EBPiAzxQg3gSgbgzQgbg0ARg4QAWhMAViNQAqkYgElSQgLw0nDzjQk3tgmtotQmsouobjwQnJjMnzAsQicANiPAlIhxAkQg0AVgzgUQg0gTgZgyQgxhdhyhsQjgjVlWhzQndihqMBAQtaBUxAHUQxRHdqIL3QqHL5ixQEQhbIPArIzQAcFvBOFCQZXk9U+pqQQAnYMZplQGBkrE+k/QBUAKBHANQBmASBPARQl3GQneFzQtBKIw1HtQ2LKJ60FBQg1AKgtgcQgugbgQgzQhOj6gvlrQhcrPB0qxQCfupIgrvQLMvdUvo7QcpsVSlD8QGlBZE3DZQDUCTCHC6QERhPExABQHPABGuC+QJTEIHUJWQHUJWFMObQHbUlAHRjQACFlguEpQgaCigbBWQgOAtgmAbQglAbguAAQgTAAgXgGg");
	this.shape_29.setTransform(656.2249,-41.2638,0.3725,0.3725,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#020202").s().p("AFgHLQhFgrg0gZQgngTgpgRQgfi+gaiyQhtCMh8CKQhbgVhegSQhQgOg/gJQDqj0CsjqQBWh1AqhHQAXgnApgTQAqgTAtAKQAtAKAfAiQAeAiAFAtQAtGtBeIAIh0hLg");
	this.shape_30.setTransform(616.0647,-63.1561,0.3725,0.3725,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#020202").s().p("AFAYwQkvhSlTjrQmukqlLu7Qjvqtimu7QA+AeBlBCQBwBJAwAaIAXB1QhvgDg3AAQgXAAgOAPQgMAOAAAUQABAwAwADQBXAGBnAKQCoMdDWIiQEKKoE1DWQEaDED0BIQDzBHDGg2QC0gyCGiZQBEhMAfhFQAYg1A3gVQA2gUA1AXQA2AYAUA2QAVA2gXA1QgvBphfBtQi7DYkGBKQh9AkiGAAQiUAAifgrg");
	this.shape_31.setTransform(554.2436,15.0443,0.3725,0.3725,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#390075").s().p("Ag+AvIBAh2IA8ARIgTAeQgmA3gXApg");
	this.shape_32.setTransform(769.425,441.4488,0.3725,0.3725,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#020202").s().p("EAJSAg6QtaovpXuyQkundjhoqQipmfhymuQoJMTv3HPQlECSlUBiQi1A0h9AWQgwAJgugQQgugQgggkQgggkgLgvQgKgvAOgvQEZuxGsvzQDWn7CilGQAfg/BBgaQBBgaBDAXMBy4AojQBCAXAiA8QAiA9gOBEMgGtAhNQgFAagMAYIktI7QgXArgpAbQgqAbgxACQiWAIibAAQ3BAAxhragA2G8mIAnDJQA3D6BSEJQEFNMGzKqQKhQlPXIDQPWICT5gpIDunFIGI+VMhUogd3gEg1ggYOQkmLMjbKrQJqi6HzlKQLpntEyrMQATgrAkgeI0ynVQi8GQjAHUg");
	this.shape_33.setTransform(685.1966,22.7545,0.3725,0.3725,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#994F2F").s().p("ANCf5QuNofp3vkQnCrHkKtkQhTkQg3j+IgmjIQjkIVnGGjQltFQnuD4QljCymCBzQh7AlhxAbQg/AOghAGQEZuxGovpQDUn1Cck4MBy4AojMgGtAhNIksI7QiZAIiUAAQ0uAAv/phg");
	this.shape_34.setTransform(685.1974,22.7631,0.3725,0.3725,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#070707").s().p("Ege8BGvQo5iMn+kKQnUj0mFlMQlnkzkAlfQjylNhylBQj6rFBEvvQBEvuGA0HQEZuyGsv0QDWn6CilGQAfg/BBgbQBBgaBDAXMBy4AojQBCAYAiA8QAiA8gOBEIl/dtQE9AMEABQQFoBxC6DrQCQC2AdDvQAdDvhXEjIAAAAQjlL9pCFeQlhDWmQAYQqwJzrPGmQrPGlriDQQrDDHq6AAQpSAApAiPgEg50gzCQlMM6jlMCQlqS8hGPCQhGPDDjKCQBmEkDmEwQDuE5FQEWQFkEnGpDZQHLDrHzB8QRPEQRvkbQXWl0WJ0fQAcgaAjgNQAkgNAlADQBFADBigQQC5gdCrhUQIYkHDSq+QA8jJgMiYQgNiYhWhtQiPi1lchLQkIg6kWARIgKAAQgrADgogRQgogQgdghQgcghgLgqQgLgpAIgrIGN+vMhuDgm2QjYHLjVIQg");
	this.shape_35.setTransform(676.7387,91.0864,0.3725,0.3725,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF8288").s().p("AgwDcQipglhphbQhphbAUhaQAUhcCGgmQCGgmCoAmQCpAlBpBbQBpBbgUBaQgUBbiGAnQhEAThNAAQhLAAhSgTg");
	this.shape_36.setTransform(848.6799,106.522,0.3725,0.3725,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF8288").s().p("AhBEtQjngziPh8QiQh8Abh8QAch9C3g0QC2g0DmAzQDmAzCQB8QCPB8gbB8QgcB9i2A0QhcAahpAAQhmAAhxgZg");
	this.shape_37.setTransform(656.258,155.9061,0.517,0.517,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#390075").s().p("EgeWBEWQoOiDnjj5QnAjml5k7Qljkoj7lPQj0lFhuk4Qhvk7gsl6QhMp6BssoQBrsnEgvHQClonDPouIACgEQDfpXEEpHIDanWIAKgTMBziAoxMgGsAhDQESgMEGAzQHGBXDID8QDvEtiYH5QhPELh/DWQkWHXnjC7QkBBlj3ABQxLP3yDHVQvEGIvNAAQpGAAoyiLgEg4Pg9OQjuIcjNImIgBAFQjTI1iiIgQkePChrMhQhrMkBKJ1QAtF3BsEzQBsEzDxFBQD4FJFeEkQF1E2G6DkQHdD1IICBQRyEaSQkiQYCl7Wt1BIAIgHIAKAAICEgHQCggSCcg3QHyivEcngQB7jPBOkHQCQnfjfkZQjIj8nWhOQkBgrjxAQIgMAAIgfAAMAGvghVMhyPgoVQhtDgiIE0g");
	this.shape_38.setTransform(676.7534,90.9871,0.3725,0.3725,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFB78A").s().p("EgdlBEFQoUh+nnj2QnDjjl8k5Qllkmj+lRQj2lGhwk+Qhtk1gtl7QhRqtCGt8QBwrvEGtuQCioeDTo5IAAAAQDhpdEEpGIDXnOMBy4AojMgGtAhNIALAAQCNgJCpANQEoAYDdBWQErB2B6DfQCXESh+GlQhQEJh8DSQkkHun+CwQifA3iiARIiCAGQ1PTq2vGiQq4DIqrAAQoiAAoaiAg");
	this.shape_39.setTransform(676.7596,91.085,0.3725,0.3725,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#050505").s().p("AqBQRQknh9jljkQjkjlh9koQiCkwAAlQIAAn7QAAhOA2g2QA2g3BNAAMAtuAAAQBNAAA3A3QA2A2AABOIAAH7QAAFQiCEwQh9EojkDlQjlDkkoB9QkyCDlPAAQlOAAkziDgAz9ndQAAEEBlDsQBhDlCxCyQCxCxDlBgQDtBlEDAAQEDAADuhlQDlhgCxixQCxiyBhjlQBkjsAAkEIAAlBMgn6AAAg");
	this.shape_40.setTransform(688.8105,261.3629,0.3725,0.3725,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#390075").s().p("AtcLgQmDkSidm/QhTjrAAkBIAAoVMAufAAAIAAIVQAACVgbCLQgzEAiHDgQiEDajGCiQjFCjjvBXQj2BakHAAQnYAAmEkTgA2dndQAAD4BQDlQCYGuF2EKQF3EJHIAAQD+AADuhXQDnhUC/idQC+idCAjSQCDjZAwj3QAbiIAAiPIAAnjMgs7AAAg");
	this.shape_41.setTransform(688.8325,261.3373,0.3725,0.3725,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFB78A").s().p("AtWLGQl2kNiYmyQhSjnAAj9IAAn8MAttAAAIAAH8QAACSgbCJQgxD5iDDbQiADWjBCgQjCChjrBXQj0BakGAAQnYAAl+kUg");
	this.shape_42.setTransform(688.8325,261.3373,0.3725,0.3725,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#050505").s().p("AgpG6Qg9gogOhHQgPhHAog8IgFAFIgBABIgCAAIgCgDIgCgIIgBgXIgBg6IgHhIQgGgtgLgmQgDgQgJgcIgOgvQgHgPgLgfQgLghgHgQIgphjQgZg2gTg0IAAgBQgEgLAEgKQAFgKALgEQAJgDAJADQAzASA6AdQAWALAeASIAzAgQAzAmAqAnIAsAsQAbAbAPAWQBdByAcCFQAQBPgMBPQgEAjgRAwQgHASgMAYIgiA0QgoA9hHAOQgTAEgSAAQgyAAgrgdg");
	this.shape_43.setTransform(437.7828,433.8636,0.3725,0.3725,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#020202").s().p("AibGQQg7gJg9gYQhHgag0grQhDg1gfg/QgSgogJgZQgMgkgDgjQgFgdAEgrQACgYADgLIAKghQAHgWAEgKIAPgdIAhgzQBBhQBig1QBYgwBbgVQALgDAKAGQAKAGACALQADAPgJAKIgCACQiUCfgaBpQgPA0AaAhQADAFAIAHIAOANQAFADAHACIANADQAbAHA+gFQA+gEBFgNICUgeQBygZAlgGIAUgCQBMgLA+AuQA+AtALBNQAJA6gbA1QgaAzgyAcQhTAuhmAeQhdAdhoALQgxAEgsAAQhDAAg6gKg");
	this.shape_44.setTransform(914.2117,437.3655,0.3725,0.3725,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#020202").s().p("ABFLrQgygOghgnQggglgegsQgggygSggQglhBgqhsQg8ijgTjPQgTi4AhjCQAbiqBfi0QAFgJALgDQAKgDAJAFQAMAGACAPIAAACIANCtQAIBfAQBGQAfCjA2CVQAYBBAjBSIBBCQIBiDWQAaA7ACAIIALAgQAWBEgiBBQghBAhEAWQgbAIgaAAQgZAAgYgHg");
	this.shape_45.setTransform(767.6195,344.3012,0.3725,0.3725,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#050505").s().p("AEmEDQhdgNh7g4QhNgkh4hNQhmhChZhCQhzhbhChCQgIgIAAgMQAAgLAIgIQAHgHALgBQA4gCBCADQAuACBIAHQBqALB8AWQCLAaBSAbQB+AqBPA3QA9ArANBJQANBJgrA9QgeAqgvAUQgiAPgkAAQgNAAgNgCg");
	this.shape_46.setTransform(599.6673,348.0032,0.3725,0.3725,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#020202").s().p("EgQ+AtdQonh3nhjuQiZhMiBhQQhDgpgpgeQglgbgTgqQgTgqAEguICX52IiXBNQgpAVgtgCQgugBgngYQgmgXgXgoQgWgngBguQgGqzmjpAQiDi1ieiUQgygugugmIgngeQghgYgUgkQgUglgBgpQgBgqASglQARgmAhgaQRzuCN/lBQF1iGF6g1QEcgoF9gCQCKgBDVgGQGrgKDHAPQE7AYFEBlQFsByH5D3QIID+McHKIBtA/QApAYAXApQAYApAAAvQgBAvgXAoQgYApgpAXQkgCkiqInQg/DMgmDpQgfC7gICUQgCAtgZAnQgYAngpAWQgoAWgugBQgtgBgogXIiIhPMgBtAgiQgCAugZAnQgZAngpAWQqpFqq4CpQpUCQpQAAQn9AAnihpgEginAAmQAwADAoAbQAoAbAUArQAVArgFAwIiqdKQDEB5D4BrQF3ChGWBWQMXCpMnh9QMnh8MqmfMAB3gjdQACguAZgmQAYgnApgWQAogWAuABQAuABAnAXICVBYQAzlnBmksQCQmmDjjuQrXmfndjnQnOjhlOhnQkohckhgVQi1gOmEAJQjbAGiLABQlTACj+AjQlRAtlMBzQsdEUvuMAQEOD8DAFBQEWHRA+ITIDEhlQAmgTAqAAIAKAAg");
	this.shape_47.setTransform(679.8947,358.5055,0.3725,0.3725,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B87BFF").s().p("EgQZAqxQoUhznQjnQiShIh5hLIhcg8ICz+0ImxDfQgFnsjIm8QiWlNj3kZQiaiviZh0IgPgLIABgBQRctwNqk4QFoiBFsgyQELgkFqgDQB8gBESgGQDfgGB4ACQFlAGE2BPQF0BfIGD2QIeEBNnH1IBuBAQi6BpiNDgQiDDShbExQhKD9gnEkQgUCSgFBeIl/jgMgB8AlCQu7H7vHB0QkYAhkUAAQnmAAnahng");
	this.shape_48.setTransform(679.903,358.5259,0.3725,0.3725,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#020202").s().p("EgN1AtnQooh3nijvQiahMiBhPQhDgqgpgeQgogdgUgsQgUgtAFgxICU5jMguzAX/Qj0D2kWC1QncE1luguQiTgSh9hNQijhmhujDQiWkMAij6QAhjqDHj9QCtjbFakgQDVizITmSQHmlwEVjbQHbl3GalkQE9kUEwjwQR1uEOBlCQF2iGF7g0QEcgoF+gDQBpgBD2gFQGsgLDHAPQE8AYFEBlQFtByH6D4QIID/MdHKIBuA/QMHHEJ+HlQJzHcG+HXQG+HXDlGsQDqG0gMFiQgHDfhtCsQhtCrjFBiQnwD2oJnhQkwkYjsmzMglegV+MgBsAgRQgDAxgaApQgbApgrAXQqqFrq6CpQpUCRpTAAQn6AAnnhqgA/aAcQAzADAqAcQAqAcAWAuQAWAugFAzIipdEQDFB5D2BpQF0CfGSBVQMTCnMjh7QMkh8MmmcMAB3gjXQADgwAagpQAagpAqgXQArgXAxAAQAxABAqAZMAqTAYzQAvAbAZAyIBjCrQB6DFCBCWQGbHdFFiiQBpg0A1hVQA2hVAEh5QAIj8i6laQjDlul/mdQtxu54auNIhrg/Qr8m3nwj0QnijulXhsQkyhhklgYQi4gOmKAJQj5AGhtABQlgACkHAmQlfAylcB+QtEEww3NTQkmDok5ERQmgFpngF7QkWDbntF2QnfFrjYCxQkrD1iTCpQiiC7ghCaQgiCeBaCiQA+BvBQAzQA4AjBGAIQDsAeFxj1QEFitDNjVQAVgWAcgPMAz7gamQAogVAtAAIALABg");
	this.shape_49.setTransform(687.4994,358.5132,0.3725,0.3725,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#390075").s().p("EgNVArKQoShznUjnQiThJh7hMIhhg/IgLgIICw+UMgzPAaQQizC6jpCoQmyE4lEAAQgnAAglgEQkNgiickWQgbgwgSgsQgQglgLgoQg4jCBKjDQBFi2DCjSQCoi3Eyj4QC+ibHPlfQHiltEdjgQHcl4GdlnQFGkaEhjlIAfgYQRNtgNfk0QFniBFtgzQERgmFugCQBwgBDzgFQFRgJCdAHQD9ALDpA1QIQB3NmHFQGuDhIyFDIBuBAQYbOON2OtQF7GTDaF2QDJFXAsEZQAbCsgiCPQgiCPhcBnQgRATgQAPQhCA+hZAsQm4Dbnin8QieimiRjjQhSiAg5hvMgpqgYbMgB7AknIgNAGQqXFhqlCkQpECNpAAAQnrAAnThmgEgiBAh8QCyB5EKB5QHdDaIUBkQLUCJLnhkQOXh7OHndMAB+glcMAq+AZLIADAHIBwDBQCKDeCXCoQDSDoDMBcQD/BxDnhyQBTgqA8g5QARgQAMgOIABAAQCsjBgzlHQgqkJjGlQQjZlxl3mQQt6uz4KuEIhtg/QoqlAm0jjQnOjxlOiJQk/iCkFg8Qjlg0j7gLQicgHlWAIQjZAGiKABQlrACkOAmQlpAzlkB/QtXEyxENZIgfAZQkrDsk6ERQmcFmnfF6QkRDXnvF3QnGFZi7CXQkuD0ilCxQi/DMhGCvQhKC6A1C2QAKAiAPAmQATAtAXAqQCQD/D0AfQFDApHYlSQCUhrCRiEIB3hyIAHgFMA0jga7g");
	this.shape_50.setTransform(687.4934,358.3354,0.3723,0.3723,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFB78A").s().p("EgNQAqxQoUhznRjnQiRhIh5hLIhcg8ICz+0Mgz7AanIgzAzQhBA+hIA/QjoDIjaB6QkyCsjqgJQkkgKilklQgagtgSgsQgQgpgKghQhOkPDAkfQCkj2G+lrQCpiKEkjfQFikMDFiXQLwo/I5nuQE5kQEtjvIAfgYQROthNkkzQFlh/FpgxQEIgkFogDQD1gBGGgKQE5gCDrAnQEkAxFZCEQFzCPISEUQGjDaI8FJIBuBAQPSI6LfJdQKiIqGWITQF8HxBbGSQBZGHjJDhQgUAWgLAJQhAA+hWApQjxB4kHh0QjThdjXjvQiaiqiMjiIhujBMgkUgVSIAAgBIl/jgMgB9AlCQu7H7vGB0QkYAhkVAAQnlAAnahng");
	this.shape_51.setTransform(687.4729,358.3539,0.3723,0.3723,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("EgEVBwTQ9ph6zpoIQzpoGpQuKQqzwfDM4bQBLpGDNqwQB3mOD2qoQBgkIAlhsQA/i5AchvUADigNyAC1gtIQBa2oAv0YQAChKA1g0QA0g0BKgBIABAAUABxAAABCHANfQh5gBjwAAQgXAAgOAPQgMAOAAAUQAAAVAMAOQAOAPAXAAQGCAAC9AJQFBAND8AsQCoAdBzAeQCcAoB2A1QBCAeCPBeQCCBVBRAfQBtApCFAnQhbADiQgDIjrgFQgYABgOAQQgMAPACAWUhJ1gPJgOegCvQg+ZWhlW0UgCrAmsgDVAM/QgfB7hCDBQgpB4hhEKQjpKFhxF4QjEKKhLIiQjLW6JwO5QIeM8SgHdQShHecNB0QbNBwTEleQTElfKjsnQN1wigw84QgRqOiIrtQhMmjiXpjQg8jygShYQh7pmBF8gQAow2BcyzMgu7gJpQDSAcE3A7IIIBhQAXAEARgNQAQgMAFgTQAFgUgIgPQgJgSgWgDQhrgUkHgyQjrgtiGgWQAvgIAfgHQAkgIAAgoQAAgogkgJQkLg7jChHQhBgYhPgvIiIhWMA30ALeQBFAOArA4QAqA4gGBHQhNO+gxQnUgBjAhIACBAJ/QAMA+A+D9QCeJ/BPG5QCNMVAOKzQAmeivDR/QqIMIw/GGQw/GH3lAAQmPAAmzgcg");
	this.shape_52.setTransform(666.6548,179.0443,0.3725,0.3725,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#390075").s().p("EgEVBwTQ9ph6zpoIQzpoGpQuKQqzwfDM4bQBLpGDNqwQB3mOD2qoQBgkIAlhsQA/i5AchvUADigNyAC1gtIQBa2oAv0YQAChKA1g0QA0g0BKgBIABAAUABxAAABCHANfQh5gBjwAAQgXAAgOAPQgMAOAAAUQAAAVAMAOQAOAPAXAAQGCAAC9AJQFBAND8AsQCoAdBzAeQCcAoB2A1QBCAeCPBeQCCBVBRAfQBtApCFAnQhbADiQgDIjrgFQgYABgOAQQgMAPACAWUhJ1gPJgOegCvQg+ZWhlW0UgCrAmsgDVAM/QgfB7hCDBQgpB4hhEKQjpKFhxF4QjEKKhLIiQjLW6JwO5QIeM8SgHdQShHecNB0QbNBwTEleQTElfKjsnQN1wigw84QgRqOiIrtQhMmjiXpjQg8jygShYQh7pmBF8gQAow2BcyzMgu7gJpQDSAcE3A7IIIBhQAXAEARgNQAQgMAFgTQAFgUgIgPQgJgSgWgDQhrgUkHgyQjrgtiGgWQAvgIAfgHQAkgIAAgoQAAgogkgJQkLg7jChHQhBgYhPgvIiIhWMA30ALeQBFAOArA4QAqA4gGBHQhNO+gxQnUgBjAhIACBAJ/QAMA+A+D9QCeJ/BPG5QCNMVAOKzQAmeivDR/QqIMIw/GGQw/GH3lAAQmPAAmzgcg");
	this.shape_53.setTransform(666.6548,179.0443,0.3725,0.3725,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#994F2F").s().p("EgEMBtaUg76gD4gRFgczQmwragCvXQgBsAELvAQB+nHD0qjICinEQBOjgAhiDUADogOHAC2gtnQBb20Atz/UABkgACBdeATKIAWAJQBtAqCFAmQhbAEiQgEIjrgEQgXAAgNAPQgMANAAAUQAAAxAwADQEmASGUBHQDnApHNBYQAXAEARgNQAQgLAFgUQAFgTgIgQQgJgRgWgEQhrgTkHgyQjrgtiGgXQAvgHAfgIQAcgFAHgeMArHAI3QhNOvgxQ0UgBkAhnACEAKWQAbCFB+H4QCDIoBJHUQDmXAj3RQQlRXhy4MHUgTgAMighigABQmQAAmvgbg");
	this.shape_54.setTransform(666.5727,179.0427,0.3725,0.3725,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#390075").s().p("EgELBtzQ9Ch4zJn1QzKn1o6toQqWvzDL3xQBMo2DJqgQB0mEDwqZQBekBAqh5QBAi8Aeh1UADkgN8AC2gtWQBb2uAv0cIABgYIAYAAUABSAAAA8WAMSQANAPAWAAIAkAAIe9GVQA6AhAzATQA2AVBbAeUha5gSogGZgBAQg1WlhfW0UgCzArOgDeANlQgfB2hAC8QgrB+hdD/QjvKUhzGBQjIKbhLIyQjLXjKNPmQIzNdTAHwQTAHuc1B4Qb1BzTmltQTmltK9tHQOWxKgr9mQgQqeiKr+QhNmtiapwQg7jrgShXQh/p8BY/yQAvw2BUwtMgq5gI0QASgTgGgdUAlLAHoAGBABQIAWAEIgCAWQhNPEgxQvUgBjAhZACDAKNQAOBDA+D9QCcJzBNGxQCLMEAPKjQAqdzuhRXQpwLrwgF4QwfF42/AAQmSAAmngbg");
	this.shape_55.setTransform(666.6596,179.0068,0.3725,0.3725,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A1523F").s().p("EgEMBtaUhOfgFFgE9gv0QhovsGg1gQBxl3DepnQDEocAtiuUADngOHAC2gtoQBb2zAtz/UABggACBdjATKIAWAJQBtAqCEAmQhbAEiPgEIjrgEQgXAAgOAPQgMANAAAUQABAxAwADQElASGUBHQDoApHNBYQAWAEARgNQAQgLAFgUQAGgTgIgQQgJgRgXgEQhqgTkHgyQjrgtiHgXQAvgHAggIQAbgFAHgeMArHAI3QhMOvgyQ0UgBkAhnACFAKWQAaCEB/H5QCCInBKHVQDlXAj3RPQlRXiy3MHUgTgAMighigABQmQAAmvgbg");
	this.shape_56.setTransform(666.5838,179.0146,0.3725,0.3725,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#994F2F").s().p("EgcJBfIQw8hbs4laQpMj3mQlfQh8huhbhqIhChVQFgj0BQopQAZitgFi4IgKiUQiHkfiGlvQkOrfAAmTQAAk7hyzGQhyzEAAljQgEjAAAh3QgBjbAPi2QAroTC/nUQIo1IcVvCQPMoENahkQKuhQJGC9QGgCGFDEAQCiCABOBkQLjjlJ3DbQIyDEHQIlQGWHgE+LdQEPJxDBMCQCjKLAnJFQAhHtg3HpQgmFbhpHlQiMKNgWB/Qh0KQEYMuQBXD+B1DwQA6B3ApBFQgoBVhyCIQjkEQlwEDQoEFprSEaQuHFgyZDOQzFDWwWAAQmRAAl2gggEAT0gpVQgMAOAAAUQABAwAwADQElASGUBHQDoApHNBZQAWAEARgNQAQgMAFgTQAGgUgIgPQgJgSgXgEQhqgTkHgyQjrgtiHgXQAvgHAggHQAkgIAAgoQgBgogjgJQkLg8jDhHQhTgeh+hRQiThfg5gcQh2g5ibgrQh1ghingfQkDgxkzgRQiRgIi2gCQhugCjbAAQgXAAgNAQQgMAOAAAUQAAAVAMAOQANAPAXAAQGEAAC9AIQE/AOD9AsQCnAdB0AeQCbAoB2A1QBDAeCOBdQCDBWBRAfQBtApCEAnQhbADiPgDIjrgFQgXAAgOAPg");
	this.shape_57.setTransform(651.6091,65.0726,0.3725,0.3725,0,0,180);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373737").s().p("AlRBqQgagEgQgWQgQgVAEgbQAEgaAWgPIAGgEQAWgNAZgLQAZgMAUgHQArgQAzgNQBfgXBiACQAUAAAcAEIAxAGIAwALQAbAGATAIQBHAWBiBBQAKAHADALQACAMgHAKQgGAJgLADQgKADgKgGIgCgBQhigzg+gNQgQgEgZgDIgqgGIgqgBQgZAAgRACQhSAGhSAbQgvASgeAPQgSAJgTALQgVAMgLAIIgBABQgRAMgUAAIgLgBg");
	this.shape_58.setTransform(530.5664,50.4338,0.6209,0.6209,0,14.9943,-165.0057);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373737").s().p("ABSBrIhUgaQgzgWgbgWQgngcgVgkQgXgqAEgnIAAgBIABABQALAjAgAaQAaAVAlAJQAZAHAsACIBHgGIADAAQAZgDAVAQQAUAPADAaQADAagQAUQgQAUgaADIgGABQgJAAgIgDg");
	this.shape_59.setTransform(645.9679,125.2552,0.6209,0.6209,0,14.9943,-165.0057);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AhGBrQgegtAAg+QAAg9AegtQAdgrApgBQAqABAdArQAeAtAAA9QAAA+geAtQgdAsgqAAQgpAAgdgsg");
	this.shape_60.setTransform(515.875,85.7893,0.6209,0.6209,0,14.9943,-165.0057);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00080F").s().p("AgTBJQgygOgkgkQgRgRgBgZQgBgWATgUQAHgIAMgFQAMgFALAAQAZAAARASIAJAHIAOAJIAVAFIATAAIAGgBQAYgGAVAMQAVAMAIAXQADAKgCAOQgBAMgGAKQgNAWgXAGQgYAGgYAAQgaAAgZgHg");
	this.shape_61.setTransform(477.1185,57.4961,0.3679,0.3679);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00080F").s().p("AC4GYQhEgng8g4QhQhLhdiKIhIhvQg1hTgXgzQgLgYAFgWQAGgWAVgOQAKgHALgBIgjhoQgHgXANgWQANgVAXgHQAXgIAXAOQAUAMAIAXIBdERIAAAAIACADQAHASAJAPQAQAcAaAiIABABID0E5QARAVABAWQAAATgNARQgOARgWAFIgMABQgQAAgNgIg");
	this.shape_62.setTransform(469.7139,46.7923,0.3679,0.3679);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#994F2F").s().p("AkBZSQgsgKgigsQgfgogBgzQgHitANjGQATkiBDmMQAThtApjaIAfihQAPhQAJg9QAQiFgQiAIgIg3IgYhTQgbhYgOhBQgRhUgBhJQAAghAOgeQABgOAEgPIAQgkQAFgLAIgJIgMggQgwh5gPgqQgghdgQhLQgNg+Acg1QAVgoAzgVQAtgUA0AMQAZAGAbAUQAcAVAKAWQAyBuAoBrQA8ChApCuQAYBSATBeQATBhATCPQAMBdAOCHIAYDlIBkOsQADAcgOAeQgLAZgWAXQgmAqhEACQgMABgNgCQgTBUgdBIQgyB9hABtQgfA1haCMQglA5g1AMQgUAEgUAAQgTAAgUgEg");
	this.shape_63.setTransform(830.3006,45.3134,0.3679,0.3679);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#994F2F").s().p("AAVLfQgcgMgUgUQgWgUgJgdQgOgaABgfQAKhfACgyQADhLgHg9IgBgJIgHg6QgGg3gBgrQgDhOgJhJIgBgKQgVibgMhNQgOhagFgZQgKgzgPgoQgIgPgJgPIgLgMQgpgngDhDQgCg3AugzQASgUAfgMQAdgMAcAAQAdAAAcAMQAbAMAVAUQBPBLAkCBQAPAzAQBsQANBQAPBrIAQBvQAJBAADAuQACAWACBGQABAxAEAhIABAIIAJBDQAGA6AAAuQgBA1gNB6QAAAogUAjIgYAfQglAohFAEIgEAAQgaAAgbgMg");
	this.shape_64.setTransform(825.3907,10.5343,0.3679,0.3679);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#994F2F").s().p("AKEHtQgdgBgagRIllk4IgygsIgggcIALAIIgRgNIgBAAIgBAAQmHAUmDgHQg8AAgugsQgWgTgJgdQgLgRAAgUQgGgdAJgeIAPgkQANgYAZgTQAXgRAdgJIACgBIgcgFQgagEgZgVQgWgSgRgaQgfgwAQhDQAGgaAUgaQATgYAYgOQAZgQAfgCQAdgGAfAJQBqARCGAYQGvBRGgBwQAmAKAcAcQATATALAXQAcAJATAWIAYAeQA6BZA3CBQApBjAXBnQAHAegDAdQgEAggPAYQgVAhghAVQgaARgeABQgKADgKAAQgKAAgKgDg");
	this.shape_65.setTransform(621.5715,-49.4673,0.3679,0.3679);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#994F2F").s().p("AhpBqQgpgmgDhEQgBgaANgeQAMgdAUgUQAVgUAcgMQAcgMAcAAQA6AAAwAsQApAlADBEQABAcgMAeQgNAcgUAUQgUAVgcALQgdAMgdAAQg5AAgwgsg");
	this.shape_66.setTransform(472.5695,46.652,0.3679,0.3679);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#994F2F").s().p("AhpBqQgpgmgDhEQgBgaANgeQAMgdAUgUQAUgUAdgMQAcgMAcAAQA6AAAwAsQApAlADBEQABAbgMAeQgNAdgUAUQgUAVgcALQgdAMgdAAQg5AAgwgsg");
	this.shape_67.setTransform(472.5695,44.978,0.3679,0.3679);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#994F2F").s().p("AlFMSQgggFgZgOQgYgOgTgYQgSgYgIgcQgyitA7jZQAQg8AdhNIA0iGQAlhaAag0QAmhNAqg4QArg5A/hIIBuh8IDMjmQAlgpBFgDQAvgCAsAiQAmAdAQAxQARA0ggA/QgyBkg4BUQgaAmhWBzQgfAqgSAiIgoBPQgrBShMBLIg1A2QgXAWgQATQgNATgJASIgIAWIgLAcQgHARgGAKQgKAQgOARQgTA/gJA0IABgLIgEAYIADgNQgGA6AFA1QADAUAGAVQARA5ggA7QgZAwhAAVQgRAFgTAAQgLAAgMgBg");
	this.shape_68.setTransform(492.8898,-52.1168,0.3679,0.3679);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#994F2F").s().p("Al8JHQgYgNgTgZQgTgZgHgbQgIgcAEgfQAEggAPgYQAohDAwhMQBLh2BaiAIBTh2QAlg4AXgxQATgtAThEQAZhUAKgbQAPgoATgbQAXggAggTQAogYAwAAQAWAAAUAFQAPgFARgCQAcgDAfAHQAaAGAZAUQAYATAPAYQAQAZABAfQAHAdgJAfQg5CZhpBoQgUAWgcAJIgBABQgkBTgtBBIg5BSIg5BRQh1CthmCpQgeAyg8ATQgTAGgTAAQglAAgogVg");
	this.shape_69.setTransform(495.424,-56.9182,0.3679,0.3679);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#390075").s().p("Ag+AvIBAh2IA8ARIgTAeQgmA3gXApg");
	this.shape_70.setTransform(540.7069,446.2976,0.3679,0.3679);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#371A45").s().p("AgLCHQgtgBgsgWQgpgVgeghQg0g6gWhXQgFgUAOgQQAKgLAPAAQAOAAAKALIADADIAtAvQAYAYAUANQApAbAtABQAjgBA7gaQAfgOBKgtIADgCQAOgIAPAFQAOAFAHAOQAHAOgFAPQgXBNhIA4QgiAagpAOQgmANgmAAIgKAAg");
	this.shape_71.setTransform(1004.1129,123.4957,1.3538,1.0737,0,-10.7766,-6.6809);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#371A45").s().p("ACqGDQgmgbgbgkQgXgegWgnIglhDIhEiDQgphMgdgvQgohBgngwQhVhsh4g+IgBAAQgLgGgFgMQgGgMADgMQAEgPAMgIQAMgIAOAEQBIATBEAoQBEApA3A4QAzAzAxBEQAlA1AsBMIBJCBQA1BdARAZQAlA1AeAKQAPAGAVgIQASgGAdgWIAHgFQAPgMASAIQANAGAGAOQAFAOgGAOQgTAughAfQgqAmg3AAQg1AAgughg");
	this.shape_72.setTransform(948.113,-64.325,0.7115,0.7115,-23.4913);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#371A45").s().p("AoeBqQgXgSgRgYQgSgagIgbQgPg1AMg4QADgKAGgHQAHgHAJgCQAOgEAMAIQAMAHADAPIADAJQAIAlAPAVQARAXAWAJQArATBNgJQA8gHBUgYQAegJAtgPIBLgbQBdghBBgRQBagYBOgHQBVgIBWAOQBWANBPAhQALAFAGALQAGAMgCANQgDAPgMAJQgMAIgOgDIAAAAQiYggiXAcQhDANhQAaQg4AThcAlQh2AtgmANQhcAdhPAHIgdABQhhAAhDgyg");
	this.shape_73.setTransform(1053.7899,-37.9524,0.7115,0.7115,6.5056);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#371A45").s().p("APkLdQgPgHgFgRQgFgQAHgQQgDADAAAEIAAgDIgFhFQgFgugGglQgLhNgVhXQgoisg+iNQhCibhbh6QhjiDh4hSQhzhUiYgYQiHgWifAZQiIAWifA9QiCAwidBVQgUALgYgCIgBgBQgmgFgnAOQgnAOgVAaQgVAZgBAeQgBAeAUAoQAQAfAYALQAZALAigKQAjgKAdgdQAdgeANglIAAgCQAIgWASgOIAWgQIAugZQAagOAggOQA4gZBAgUQCJgsBwgKQCPgPB0AXQCMAbBtBMQBvBNBMB/QBBBtAjCQQAeB6AICNQAHB1gICRQAAAQgMAMQgLALgPABQgRAAgMgMQgMgMAAgSQgHkYhAjQQglh3g8haQhChihXg1Qijhlj8AgQhqAPhxAjQhAAVgrARQgjAOgQAIIgZAMIAAAAQgaA4grAsQg4A3hJAXQhVAbhNghQgmgQgigiQgegegSglQgphOAChRQABgtASgrQAQgrAcgfQA2g9BKgaQA5gUA+ACQE1i3EtgxQC6gfCgAeQBXAPBVAlQBUAkBIA2QCMBnBrCcQBjCPA/CwQA5CcAfC7QAOBYAGBYQADAxABAoIgEBZQgBAKgEAIQgHAQgPAGQgHADgHAAQgJAAgIgFg");
	this.shape_74.setTransform(868.1458,-136.4566,0.7115,0.7115,-8.4922);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#31C418").s().p("AAeD6QhJgChIguIg5guQADjfghizQCCCoBigVQBRgQAriGQAjCVAMCQQAKBygHAQQgNAUgcATQg1AlhFAAIgHAAg");
	this.shape_75.setTransform(930.8567,-108.2927,0.7115,0.7115,-8.4922);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#62ED2E").s().p("AJuKOQADjgghizQhAlPjEiZQieh7jsADQivACjEBFQiQAygpAiQgUA8guArQgrAqg1APQg2APgvgSQg0gUgeg3QhKiGBVhiQAkgpA4gVQA3gUA5AIQBCgnBNglQCUhICQgqQG/iEEoC5QDRCDCKDzQBtC+A7D3QAjCVAMCRQAKBygHAQg");
	this.shape_76.setTransform(869.6628,-134.9899,0.7115,0.7115,-8.4922);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#62ED2E").s().p("AJuKOQADjgghizQhAlPjEiZQieh7jsADQivACjEBFQiQAygpAiQgUA8guArQgrAqg1APQg2APgvgSQg0gUgeg3QhKiGBVhiQAkgpA4gVQA3gUA5AIQBCgnBNglQCUhICQgqQG/iEEoC5QDRCDCKDzQBtC+A7D3QAjCVAMCRQAKBygHAQg");
	this.shape_77.setTransform(869.6628,-134.9899,0.7115,0.7115,-8.4922);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#371A45").s().p("AICMWQhXgOhIg8QhKg9gghZQgSgvABg2QABg3AUgvQAbhBA6g0QAFhUgFhLQgIhlgbhLQgOgmgWggQgKgOgOgNQgPgOgQgMQhAgzhJACQhGAChQA0QhFAshJBNQhyB6h9DFIAAABQgIANgPAEQgPAEgNgIQgPgIgFgRQgFgRAIgPQA3huAthMQA7hiA+hNQBPhjBMg4QBqhQBrgKQA8gHA/ASQA8ARAzAjQAYAQAYAWQAZAWAUAaQAlAwAaA/QAnBhAJCGQAHBwgSB2QgGAkgcAUIAAABQgvAigNAjQgOAiAOApQAOAqAoAiQApAiArAGQAWADARgEQAQgEASgMQAjgZAPgtQAPgrgMgvQgLgugkgoQgbgeAGgqIAAgEQAXiWgGiTQgFikgph7QguiPhchLQgqgjhGgdIgfgMIgggKQgrgNgWgDQh+gZiLAmQh9AjiBBVQhuBIh0B0Qg1A1gxA6IhhB9QgIALgMADQgNAEgNgGQgOgHgGgQQgFgQAHgQIAEgKIAnhFQAYgkAVgfQArg9A4hCQBuiAB6hdQCKhqCUgvQChg2ClAXQARACAYAFIApAJQA8ASATAIQBeAlA7AvQBGA2A1BRQAxBKAdBZQAxCTAGDDQABCdgXCLQAqA7AQBBQAMAvgCAyQgCAygQAtQghBihOA3QgqAeguALQgZAGgcAAQgVAAgVgDg");
	this.shape_78.setTransform(1103.8607,-74.5099,0.7115,0.7115,-8.4922);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#31C418").s().p("AgLEdQhIgVhAg7QhBg6gXhUQgIgagCgaIgBgTQAHgTA2hLQBKhmBYhaQgdCeBiBIQBHAzCCADQhjB7hlC2IgEAAQgWAAgggKg");
	this.shape_79.setTransform(1065.1268,-74.7465,0.7115,0.7115,-8.4922);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#62ED2E").s().p("AI4LGQhDgCg9grQg9grgdhAQgfhEARhCQAThLBNg4QAPhggIh1QgPjohxhkQh0hniCAVQiiAaiuDZQhjB7hlC1IkmkvQAHgTA2hLQBKhmBYhZQDIjNDShRQEWhrEKCBQD9B6AqGJQAYDfgoDMQA6BAANBNQAMBEgZBAQgYA9gxAlQgvAkg3AAIgGAAg");
	this.shape_80.setTransform(1102.5011,-74.4676,0.7115,0.7115,-8.4922);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#371A45").s().p("Ag4A0QgMgOAKgZQAIgYAYgWQAXgWAYgFQAZgGALAOQAMAOgKAZQgIAZgXAWQgYAWgYAFIgMACQgQAAgIgLg");
	this.shape_81.setTransform(980.7698,79.7378,0.7115,0.7115,-8.4922);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#371A45").s().p("AgSA+QgQgVgGghQgGgfAIgaQAIgZARgEQAQgEAQAVQAQAVAGAgQAGAggIAaQgIAZgRAEIgFABQgNAAgOgSg");
	this.shape_82.setTransform(970.9296,77.6729,0.7115,0.7115,-8.4922);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#371A45").s().p("ApdMzQiOg2hfhWQhghXghhnQgfhkAJiEQAKiVA8iWQCVl3GFkDQDoibEJgoQEKgoDvBVQCBAtBZBLQBZBLAhBaQAoBtgBCOQgCCgg1CfQiGGNmLEHQiYBmitAyQiaAsiiAAQjLAAithCgACqraQkCAcjhCWQlXDliIE/Qg2B/gLB9QgKBwAaBSQAWBGBLBAQBLA/BuAqQC/BJDegSQEGgVDgiWQFNjeB/lPQA1iKAGiIQAGh+gjhgQgWg6hEg1QhFg2higiQiIgxibAAQg3AAg5AGg");
	this.shape_83.setTransform(1066.2537,38.9051,0.7115,0.7115,-8.4922);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#371A45").s().p("AgYQMQizg8iTinQiujHhHklQhqm6BzmPQAuihBNiCQBFh0BNhBQBCg3BdgKQBdgKBnAlQCrA+CPCqQCpDJBHEnQBpG0hfGGQgmCdhCB+Qg8BxhEA+QguArg8AWQg8AVhEAAQhNAAhTgcgAjotxQhFA6g8BsQhAB0gmCTQhbFgBcF9QA9D9CSCqQB7CPCUAxQBQAbBGgHQBGgIAtgpQAzguAwheQA4hsAiiIQBVlghgmQQg+kAiOitQh3iRiNg0Qg9gWg1AAQhHAAgqAkg");
	this.shape_84.setTransform(917.6915,2.8396,0.7115,0.7115,-8.4922);

	this.instance_3 = new lib.Group_17();
	this.instance_3.setTransform(1063.35,17.95,0.7116,0.7116,-8.4944,0,0,92.5,51.2);
	this.instance_3.alpha = 0.6992;

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#371A45").s().p("AmuMYQi1gkiChaQiBhZgjhxQgehcAKh7QALiIA6iMQCOlZFtj0QDAh/DXgtQDBgoC7AeQCsAcB9BOQB7BNAkBjQAlBmgDCFQgDCUg1CUQiBFuluD1QjACAjdAoQhhAShfAAQhmAAhkgUg");
	this.shape_85.setTransform(1066.2522,38.9817,0.7115,0.7115,-8.4922);

	this.instance_4 = new lib.Group_20();
	this.instance_4.setTransform(917.7,-6.6,0.7116,0.7116,-8.4944,0,0,55.9,85.9);
	this.instance_4.alpha = 0.6992;

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#371A45").s().p("AB9PfQh7gDh9hOQiIhShniTQhyikg1jaQhkmeBol3QAqiaBHh6QBAhvBJg9QBHg8BxAJQBxAKB2BOQB/BWBhCSQBsCkA1DZQBkGdhWFvQgjCUg9B2Qg3Brg/A6QhKBEh0AAIgKAAg");
	this.shape_86.setTransform(917.7159,2.8316,0.7115,0.7115,-8.4922);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#371A45").s().p("EgONAs+QgggDhfgPQgZgEgngIIhAgOQkOg9jih0Qjvh5jHjFQjHjFiEj1Qj4nKgxpdQgroSBvo0QBpofEDnjQEHnrGDlnQGWl7Hci9QD1hiEBgsQEEgsEBAPQEEAPD9BHQD8BGDrB6QDoB5DPCvQDMCsCpDWQFLGjCuIdQCpIMgEIuQgBETgqESQgPBpgkClIghCFIhDDJIhYC/IhIB3IgkA8Ih7ClIiJCYIiTCJQmNFMn9C/QklBmjKApQi9AnhAAHQiQANhyglQgWgHgKgVQgMgWAGgYQAHgYATgNIADgCQA0ggBCgVQAhgLBWgVQAogJBPgNQAogIBPgTQBtgZB9goQBjgfCDgwQHzjIFWkeICHh7IB8iHIBwiRIBgidIBOimIA8ivIAfh8QAkigANhcQApj8AAkDQAEoIienpQihn1kxmCQibjEi7ieQi9ifjVhwQjWhwjohBQjqhBjsgNQjsgOjuApQjrAojiBaQjfBZjPCGQjMCFi1CrQlnFRjzHKQjvHDhgH8QhkIJAoH2QAWEIBADtQBFD8ByDRQB1DaCpCsQCsCtDRBtQDJBqD0A7IB0AZIB4ATQCJAaBiAwIAEACQAUAKAJAWQAIAYgJAXQgJAXgWAJQg9AbhHAIQgfADgjAAQgeAAgigCg");
	this.shape_87.setTransform(1064.1706,-20.9405,0.7115,0.7115,-8.4922);

	this.instance_5 = new lib.Group_23();
	this.instance_5.setTransform(1059.5,-74.45,0.7116,0.7116,-8.4944,0,0,257.9,198.7);
	this.instance_5.alpha = 0.6992;

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#31C418").s().p("Ay0DQQmUkIjenVQC6DTD1CjQFRDgGZBrQIOCJKvgLQK7gLI7iiQkkCPlHBYQk8BVk9AaIqhAzQqRgXnEkng");
	this.shape_88.setTransform(1049.0174,143.9053,0.7115,0.7115,-8.4922);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#62ED2E").s().p("EgbhAmbQmUkJjdnVQjknhgOqAQgNo4CYotQCdo+FNndQFHnVHAkvQHIk1H+hZQIYhdIRClQIRClGWGDQGCFwDlILQDhIAAoJIQAoJQidI+Qh4G6lVFlQk2FGnMDgQklCPlHBYQk8BVk9AaIqgAzQqSgXnEkng");
	this.shape_89.setTransform(1064.539,-20.3329,0.7115,0.7115,-8.4922);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#371A45").s().p("AkxfuQhPghg1hIQgug9gUhaQgQhCADhOQABgzALhOQAkkXAFikQALjqgRjSQgNjUgnjkQghjGg+jtQgsithPkFQgGgUAHgTQAIgUASgJQATgKAVAHQAVAHAKAVIAAAAQDWHEBgGhQBnG8gPHsQgDC2ghEeQgHA9AAAmQgBAsAJAnQAIAjAOAUQAOATAYALQAZAMAlAAQAmAAAlgLQATgGAPgHQAPgHAMgJQAfgZAYgeQAxg8AhhlQAehaAKhmIACgPQAEgqAegdQAegdAoAAQAsAAAfAhQAfAhAAAvQANClArCAQAYBIAhAtQAgAsAgAJQAYAEAQgCQAPgCANgJQAggWAZg8QAthoANi2QALiZgNihQgKiLgci1Qgyk7hmk4QjGpel3oSQlxoKnxmAQgjgcgHguQgHguAZgnQAaglArgIQAsgIAjAcQILGVGDIjQGLIvDSKBQBsFKA0FMQAeC7ALCZQAPCygMCtQgJBrgOBJQgTBigjBUQgzB2hTA7Qg2Ang+AHQg3AJg8gPQg6gOgzgoQgrghgigxQghgvgag6QgUAkgXAfQgtA9g3AoQgdAYgkAQQgiAQggAKQhGAUhBAAQhPAAhHgeg");
	this.shape_90.setTransform(1175.3856,264.5881,0.7116,0.7116,-8.4944);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#31C418").s().p("AlNmRQFtEbEuFnQkCBxk3Awg");
	this.shape_91.setTransform(1123.5014,161.2244,0.7116,0.7116,-8.4944);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#31C418").s().p("AF4RiQiPgkhJkNQgWhUgNhhIgIhRIgGA8QgJBJgTBEQg9DciIBdQg0AjhMANQhXAOhFgaQi5hHArk3QBLocg1nuQgqmOiFmjQCHDaBME7QA5DqAeFDQARCxAUEiQAVDUApAyQBnB+CkiDQAzgpAzg/IApg1IAvBmQA8BxBDA3QDUCwDCnZQAAEehDCnQhGCuiAAAQgZAAgcgHg");
	this.shape_92.setTransform(1194.245,320.4225,0.7116,0.7116,-8.4944);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#62ED2E").s().p("AIKeSQiPgjhJkNQgWhUgNhiIgIhQIgGA7QgJBJgTBFQg9DbiJBdQgzAkhMAMQhXAPhFgbQi5hHArk2QBLodg1nuQgqmOiFmiIAAgBQg5izhWjgIiWzNQLZI0G6M2QG8M2A9OJQAFBRgBBEQAAEehDCoQhFCtiBAAQgZAAgcgHg");
	this.shape_93.setTransform(1175.3729,264.5097,0.7116,0.7116,-8.4944);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#371A45").s().p("AhHBqQACgtAcgsQgxgOgdgfQgZgbAIgIQAEgDAiANQAvASAqAIQAZgjAZgvQASgiAEAAQALAAgCAmQgDAsgbAtQAwAOAeAfQAZAbgIAIQgEADgigNQgwgSgpgIQgZAigZAwQgSAigEAAQgLAAACgmg");
	this.shape_94.setTransform(1033.3374,320.1959,0.7115,0.7115,-8.4922);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#371A45").s().p("Ag2GeQhsghhOhhQhLhcgYh6QgZh8Alh1QATg8AjgzQAlg1AygjQAygiA8gPQA6gNA8AKQBxATBWBaQBPBTAdBxQADANgFAMQgGAMgLAGQgNAHgNgFQgNgFgHgOQgnhWhGg4QhHg4hNgGQhNgGg+AwQg+AxgYBQQgYBOAPBYQAOBYAxBGQAyBKBLAjQBPAnBRgUIAAgBQAMgCALAFQALAFAFAMQAGAOgEAOQgFAPgNAGQgwAag7AEIgXABQgsAAgsgNg");
	this.shape_95.setTransform(1032.9939,321.2486,0.7115,0.7115,-8.4922);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#2BC614").s().p("AhsEYQh4hGgyiSQgTg2gFg8IAEAHQBNCJB+A0QB8AzBjhAQBeg8ATiDQATiDhAiFQBBBCAhBeIAJBYQAEBpggBbQggBag8A3QgeAbgXAJQgwAUgwAAQhGAAhIgrg");
	this.shape_96.setTransform(1035.2077,325.1186,0.7115,0.7115,-8.4922);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#371A45").s().p("Ag2GeQhsghhOhhQhLhcgYh6QgZh8Alh1QATg8AjgzQAlg1AygjQAygiA8gPQA6gNA8AKQBxATBWBaQBPBTAdBxQADANgFAMQgGAMgLAGQgNAHgNgFQgNgFgHgOQgnhWhGg4QhHg4hNgGQhNgGg+AwQg+AxgYBQQgYBOAPBYQAOBYAxBGQAyBKBLAjQBPAnBRgUIAAgBQAMgCALAFQALAFAFAMQAGAOgEAOQgFAPgNAGQgwAag7AEIgXABQgsAAgsgNg");
	this.shape_97.setTransform(1032.9494,321.1482,0.7114,0.7114,-8.4927);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#62ED2E").s().p("AhmFKQh4hGgyiSQgziRAwiJQAwiJB3gvQB1gvB4BGQB4BGAzCSIikHSQgwATgwAAQhGAAhIgqg");
	this.shape_98.setTransform(1034.2175,321.6056,0.7114,0.7114,-8.4927);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#371A45").s().p("AjEc1QjRgjiNgsQi9g7iIhdQlPjohSnsQh0rDGQuIQCAkgCnkUQBYiSBEhfIASgZIAbgLQFkiaE1hRQH8iGCpCBQAwAlAYA3QAYA4gDBCQgMDiA6FDQAjDCBlGiQCFIhAnEPQBBHEg+FJIgFASQhnElljDCQleC/mgAAQh/AAh8gVgAEc46QlEBOlqCYQj/F1i7G+QlOMaBjJZQBCGQEGCzQBuBLChAxQB5AkDDAhQC8AfDMgZQDDgZCyhIQCxhIB7hpQCChvAvh/QA2kmhAmmQgmj9h+oFQhpmygkjOQg8lVAMj5QABgKgCgDQAAgDgDgCQghgZhQAAQhvAAjLAxg");
	this.shape_99.setTransform(1082.0793,266.156,0.7116,0.7116,-8.4944);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#31C418").s().p("AlNmRQFtEbEuFnQkCBxk3Awg");
	this.shape_100.setTransform(1123.5014,161.2244,0.7116,0.7116,-8.4944);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#31C418").s().p("AmEF1QjTgii7hBQBSiUBXiEIBFhoIDNhRQD1hdDLg2QKKivgNELQgMDpA5FCQlYBjmEAAQjiAAjZgjg");
	this.shape_101.setTransform(1073.4919,170.4819,0.7116,0.7116,-8.4944);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#31C418").s().p("Ai0ROQjMgiiGgqQivg3h7hVQkmjNhJm7QgXiKgBiXQB2DXCwCIQDYCoEjAnQDJAaDegqQDbgqC2hgQC9hkBjiGQBsiRgVifQgKhSgfiaIg1kIQg9k+AhhkQATg6CBCJQBnBtClDhQBTFvAZEAQAhFJgwD+Qg0CWiNB/QiHB6jBBTQjBBSjXAcQhmANhiAAQh1AAhygTg");
	this.shape_102.setTransform(1088.7534,310.6195,0.7116,0.7116,-8.4944);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#62ED2E").s().p("Ai0bHQjMgiiGgqQivg3h7hVQkmjNhJm7QgXiKgBiYQgCmXCenaQB3llDIlwIAZguQBSiUBXiFIBFhoIDNhRQD1hdDLg2QKKivgNELQgMDpA5FDIARBaQAgCmBBERQBZFxASBRQBTFuAZEAQAhFKgwD+Qg0CWiNB/QiHB6jBBTQjBBSjXAcQhmANhiAAQh1AAhygTg");
	this.shape_103.setTransform(1082.096,266.0501,0.7116,0.7116,-8.4944);

	this.instance_6 = new lib.spaceship_black("synched",1);
	this.instance_6.setTransform(907.3,256,1,1,0,0,0,906.1,263.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.instance_5},{t:this.shape_87},{t:this.shape_86},{t:this.instance_4},{t:this.shape_85},{t:this.instance_3},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_2},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(26));

	// lights
	this.instance_7 = new lib.Group_2();
	this.instance_7.setTransform(433.95,164.5,1,1,0,0,0,70.2,168.5);
	this.instance_7.alpha = 0.3516;

	this.instance_8 = new lib.Group_1_1();
	this.instance_8.setTransform(531.1,-93.5,1,1,0,0,0,47.8,55.5);
	this.instance_8.alpha = 0.3516;

	this.instance_9 = new lib.Group_24();
	this.instance_9.setTransform(957.05,-28.4,1,1,0,0,0,526.3,331.5);
	this.instance_9.alpha = 0.3516;

	this.instance_10 = new lib.Group_0_1();
	this.instance_10.setTransform(64.6,481.8,1,1,0,0,0,131.8,54.6);
	this.instance_10.alpha = 0.5;

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#362045").s().p("A0FUUQg0gagTg4QgSg3Aag1QHgu3QJsoQFJkBFejXQC5hxCBhBQA0gaA4ASQA4ASAaA0QAbA0gTA4QgSA4g0AaQhuA5ioBnQlODMk7D1QvrMMnDOAQgTAkgjAVQghAUgoAAQgiAAgdgPg");
	this.shape_104.setTransform(300.4621,580.6068);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#362045").s().p("AWZPSQgcgMgVgYQqOr4ygoIQl0ijl9h4Qh4gmhrgdIhYgWQg5gNgfgyQgfgxANg6QANg5AygfQAxgfA5ANQCOAhDWBCQGPB+GECsQTDIcK3MmQAnAtgFA6QgEA6gtAmQgnAjg1AAQgeAAgcgNg");
	this.shape_105.setTransform(1528.2689,429.283);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#362045").s().p("AnqF5Qi7iBgPjDQgQjSC+igQC9ihEkgWQEjgVDTCBQDUCCAQDTQAIBpgxBiQgxBjhkBPQhbBJh4AsQh4AsiGAKQgmADglAAQkLAAi6h/gAgWksQjIAPiMBkQiMBlAJB6QAKB6CZBPQCZBODIgPQBogIBcghQBbghBFg2QAwgmAdgsQAqhAgFhAQgJh7iZhOQiAhCihAAQggAAggADg");
	this.shape_106.setTransform(104.7189,582.2469);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F7CE48").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_107.setTransform(104.7249,582.232);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#2F3A55").s().p("AoGGXQjHiLgQjUQgRjjDIitQDJiuE1gXQE0gYDgCNQDhCNARDlQAJBxg2BuQg2BthqBVQhhBMh9AuQh+AviMAKQgoADgmAAQkbAAjGiKgAgTkDQi/AOiABfQh5BYAIBgQAHBiCEBFQCNBKC/gPQBggHBXgfQBYgfA+gyQAqghAZgkQAkg2gEgzQgHhiiFhFQh2g9iYAAQgeAAgfACg");
	this.shape_108.setTransform(104.7168,582.2071);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FDF5AE").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_109.setTransform(104.7249,582.232);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#362045").s().p("Aj+HeQhpgahYgxQhuhAhAhaQg/hagIhqQgIhpAxhjQAxhjBjhPQBchIB4gtQB4gsCGgKQCFgKB9AaQB9AZBmA6QBuA/A/BaQBABaAIBqQAIBpgxBjQgxBjhkBPQhbBJh4AsQh4AsiGAKQgpADghAAQhxAAhpgagAgWksQhoAIhcAhQhbAhhFA2QgwAmgeAsQgqBAAFBAQAGBBAzA4QAkAnA1AfQBLArBhATQBfATBngIQBogIBcghQBcghBEg3QAwgmAegsQApg/gFhBQgEhBg0g4Qgjgng2gfQhAgkhQgUQhPgThYAAQgaAAghADg");
	this.shape_110.setTransform(486.15,599.8842);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#F7CE48").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_111.setTransform(486.1533,599.8815);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#362045").s().p("AmYG6Qh0g1hHhUQhIhUgRhoQgShpAnhmQAohnBchYQBUhRB0g3QBzg3CEgWQCEgXB/AOQB/AOBqAwQB0A1BHBUQBIBUASBpQAjDPiuCxQiuCykgAwQhRAOhRAAQi1AAiVhDgAgykpQhnARhYAqQhZApg/A8QgsAqgZAvQgkBDALBAQALBAA4A0QAnAkA4AZQBQAkBgAKQBiAKBlgSQDHghCBhyQCChxgUh4QgMhAg4g0Qgngkg4gZQhtgxiJAAQg9AAhEALg");
	this.shape_112.setTransform(1721.6683,383.9815);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F7CE48").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_113.setTransform(1721.6494,383.9885);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#362045").s().p("AnkGSQiqhtgeixQgShoAohmQAohnBchYQBUhRB0g3QBzg3CEgWQEfgxDfBuQDfBuAjDQQASBpgoBmQgoBnhcBYQhUBQhzA3Qh0A3iEAXQhTAOhRAAQjsAAiohsgAgykpQhmARhZAqQhYApg/A8QgsAqgaAvQgkBDALBAQAVB5CgBAQCfBADGgiQBmgRBZgpQBYgqA/g8QAtgqAZgvQAkhCgLhAQgRhlh2g/Qhzg/ihAAQhAAAg/ALg");
	this.shape_114.setTransform(1355.775,493.2176);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F7CE48").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_115.setTransform(1355.775,493.275);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#362045").s().p("AmrGnQhyg6hDhXQhDhXgNhqQgajQC2ipQC2iqEigjQEhgkDaB4QDZB4AaDSQANBpgsBlQgtBlhgBTQhYBNh2AxQh2AyiFAQQg8AIg6AAQjPAAijhUgAgjkqQjIAYiHBrQiHBrAPB5QAIBBA2A2QAlAlA3AcQBOAoBgAOQBhAOBmgMQBogNBaglQBaglBCg6QAugoAbgtQAnhBgIhBQgNhqh9hGQh8hFisAAQguAAguAGg");
	this.shape_116.setTransform(917.2357,561.1948);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F7CE48").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_117.setTransform(917.255,561.25);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#362045").s().p("AgLCHQgtgBgsgWQgpgVgeghQg0g6gWhXQgFgUAOgQQAKgLAPAAQAOAAAKALIADADIAtAvQAYAYAUANQApAbAtABQAjgBA7gaQAfgOBKgtIADgCQAOgIAPAFQAOAFAHAOQAHAOgFAPQgXBNhIA4QgiAagpAOQgmANgmAAIgKAAg");
	this.shape_118.setTransform(871.4077,109.8706,0.7909,0.7909,-16.9547);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#362045").s().p("ACqGDQgmgbgbgkQgXgegWgnIglhDIhEiDQgphMgdgvQgohBgngwQhVhsh4g+IgBAAQgLgGgFgMQgGgMADgMQAEgPAMgIQAMgIAOAEQBIATBEAoQBEApA3A4QAzAzAxBEQAlA1AsBMIBJCBQA1BdARAZQAlA1AeAKQAPAGAVgIQASgGAdgWIAHgFQAPgMASAIQANAGAGAOQAFAOgGAOQgTAughAfQgqAmg3AAQg1AAgughg");
	this.shape_119.setTransform(780.9653,-82.0518,0.7909,0.7909,-16.9547);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#362045").s().p("AoeBqQgXgSgRgYQgSgagIgbQgPg1AMg4QADgKAGgHQAHgHAJgCQAOgEAMAIQAMAHADAPIADAJQAIAlAPAVQARAXAWAJQArATBNgJQA8gHBUgYQAegJAtgPIBLgbQBdghBBgRQBagYBOgHQBVgIBWAOQBWANBPAhQALAFAGALQAGAMgCANQgDAPgMAJQgMAIgOgDIAAAAQiYggiXAcQhDANhQAaQg4AThcAlQh2AtgmANQhcAdhPAHIgdABQhhAAhDgyg");
	this.shape_120.setTransform(901.0998,-70.6506,0.7909,0.7909,-16.9547);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#362045").s().p("APkLdQgPgHgFgRQgFgQAHgQQgDADAAAEIAAgDIgFhFQgFgugGglQgLhNgVhXQgoisg+iNQhCibhbh6QhjiDh4hSQhzhUiYgYQiHgWifAZQiIAWifA9QiCAwidBVQgUALgYgCIgBgBQgmgFgnAOQgnAOgVAaQgVAZgBAeQgBAeAUAoQAQAfAYALQAZALAigKQAjgKAdgdQAdgeANglIAAgCQAIgWASgOIAWgQIAugZQAagOAggOQA4gZBAgUQCJgsBwgKQCPgPB0AXQCMAbBtBMQBvBNBMB/QBBBtAjCQQAeB6AICNQAHB1gICRQAAAQgMAMQgLALgPABQgRAAgMgMQgMgMAAgSQgHkYhAjQQglh3g8haQhChihXg1Qijhlj8AgQhqAPhxAjQhAAVgrARQgjAOgQAIIgZAMIAAAAQgaA4grAsQg4A3hJAXQhVAbhNghQgmgQgigiQgegegSglQgphOAChRQABgtASgrQAQgrAcgfQA2g9BKgaQA5gUA+ACQE1i3EtgxQC6gfCgAeQBXAPBVAlQBUAkBIA2QCMBnBrCcQBjCPA/CwQA5CcAfC7QAOBYAGBYQADAxABAoIgEBZQgBAKgEAIQgHAQgPAGQgHADgHAAQgJAAgIgFg");
	this.shape_121.setTransform(680.6336,-155.4045,0.791,0.791,-16.9559);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#64C141").s().p("AAeD6QhJgChIguIg5guQADjfghizQCCCoBigVQBRgQAriGQAjCVAMCQQAKBygHAQQgNAUgcATQg1AlhFAAIgHAAg");
	this.shape_122.setTransform(753.7319,-133.1481,0.7909,0.7909,-16.9547);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#8AEA55").s().p("AJuKOQADjgghizQhAlPjEiZQieh7jsADQivACjEBFQiQAygpAiQgUA8guArQgrAqg1APQg2APgvgSQg0gUgeg3QhKiGBVhiQAkgpA4gVQA3gUA5AIQBCgnBNglQCUhICQgqQG/iEEoC5QDRCDCKDzQBtC+A7D3QAjCVAMCRQAKBygHAQg");
	this.shape_123.setTransform(682.1915,-154.04,0.791,0.791,-16.9559);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#8AEA55").s().p("AJuKOQADjgghizQhAlPjEiZQieh7jsADQivACjEBFQiQAygpAiQgUA8guArQgrAqg1APQg2APgvgSQg0gUgeg3QhKiGBVhiQAkgpA4gVQA3gUA5AIQBCgnBNglQCUhICQgqQG/iEEoC5QDRCDCKDzQBtC+A7D3QAjCVAMCRQAKBygHAQg");
	this.shape_124.setTransform(682.0839,-152.4908,0.7909,0.7909,-16.9547);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#362045").s().p("AICMWQhXgOhIg8QhKg9gghZQgSgvABg2QABg3AUgvQAbhBA6g0QAFhUgFhLQgIhlgbhLQgOgmgWggQgKgOgOgNQgPgOgQgMQhAgzhJACQhGAChQA0QhFAshJBNQhyB6h9DFIAAABQgIANgPAEQgPAEgNgIQgPgIgFgRQgFgRAIgPQA3huAthMQA7hiA+hNQBPhjBMg4QBqhQBrgKQA8gHA/ASQA8ARAzAjQAYAQAYAWQAZAWAUAaQAlAwAaA/QAnBhAJCGQAHBwgSB2QgGAkgcAUIAAABQgvAigNAjQgOAiAOApQAOAqAoAiQApAiArAGQAWADARgEQAQgEASgMQAjgZAPgtQAPgrgMgvQgLgugkgoQgbgeAGgqIAAgEQAXiWgGiTQgFikgph7QguiPhchLQgqgjhGgdIgfgMIgggKQgrgNgWgDQh+gZiLAmQh9AjiBBVQhuBIh0B0Qg1A1gxA6IhhB9QgIALgMADQgNAEgNgGQgOgHgGgQQgFgQAHgQIAEgKIAnhFQAYgkAVgfQArg9A4hCQBuiAB6hdQCKhqCUgvQChg2ClAXQARACAYAFIApAJQA8ASATAIQBeAlA7AvQBGA2A1BRQAxBKAdBZQAxCTAGDDQABCdgXCLQAqA7AQBBQAMAvgCAyQgCAygQAtQghBihOA3QgqAeguALQgZAGgcAAQgVAAgVgDg");
	this.shape_125.setTransform(949.4711,-124.3051,0.7909,0.7909,-16.9547);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#64C141").s().p("AgLEdQhIgVhAg7QhBg6gXhUQgIgagCgaIgBgTQAHgTA2hLQBKhmBYhaQgdCeBiBIQBHAzCCADQhjB7hlC2IgEAAQgWAAgggKg");
	this.shape_126.setTransform(906.8456,-118.2291,0.7909,0.7909,-16.9547);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#8AEA55").s().p("AI4LGQhDgCg9grQg9grgdhAQgfhEARhCQAThLBNg4QAPhggIh1QgPjohxhkQh0hniCAVQiiAaiuDZQhjB7hlC1IkmkvQAHgTA2hLQBKhmBYhZQDIjNDShRQEWhrEKCBQD9B6AqGJQAYDfgoDMQA6BAANBNQAMBEgZBAQgYA9gxAlQgvAkg3AAIgGAAg");
	this.shape_127.setTransform(947.9832,-124.0362,0.7909,0.7909,-16.9547);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#362045").s().p("Ag4A0QgMgOAKgZQAIgYAYgWQAXgWAYgFQAZgGALAOQAMAOgKAZQgIAZgXAWQgYAWgYAFIgMACQgQAAgIgLg");
	this.shape_128.setTransform(839.3683,65.4212,0.7909,0.7909,-16.9547);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#362045").s().p("AgSA+QgQgVgGghQgGgfAIgaQAIgZARgEQAQgEAQAVQAQAVAGAgQAGAggIAaQgIAZgRAEIgFABQgNAAgOgSg");
	this.shape_129.setTransform(828.2114,64.7606,0.7909,0.7909,-16.9547);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#362045").s().p("ApdMzQiOg2hfhWQhghXghhnQgfhkAJiEQAKiVA8iWQCVl3GFkDQDoibEJgoQEKgoDvBVQCBAtBZBLQBZBLAhBaQAoBtgBCOQgCCgg1CfQiGGNmLEHQiYBmitAyQiaAsiiAAQjLAAithCgACqraQkCAcjhCWQlXDliIE/Qg2B/gLB9QgKBwAaBSQAWBGBLBAQBLA/BuAqQC/BJDegSQEGgVDgiWQFNjeB/lPQA1iKAGiIQAGh+gjhgQgWg6hEg1QhFg2higiQiIgxibAAQg3AAg5AGg");
	this.shape_130.setTransform(926.6759,6.5433,0.7909,0.7909,-16.9547);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#362045").s().p("AgYQMQizg8iTinQiujHhHklQhqm6BzmPQAuihBNiCQBFh0BNhBQBCg3BdgKQBdgKBnAlQCrA+CPCqQCpDJBHEnQBpG0hfGGQgmCdhCB+Qg8BxhEA+QguArg8AWQg8AVhEAAQhNAAhTgcgAjotxQhFA6g8BsQhAB0gmCTQhbFgBcF9QA9D9CSCqQB7CPCUAxQBQAbBGgHQBGgIAtgpQAzguAwheQA4hsAiiIQBVlghgmQQg+kAiOitQh3iRiNg0Qg9gWg1AAQhHAAgqAkg");
	this.shape_131.setTransform(757.4363,-8.8078,0.7909,0.7909,-16.9547);

	this.instance_11 = new lib.Group_17_1();
	this.instance_11.setTransform(920.4,-16.25,0.7912,0.7912,-16.9562,0,0,93,51.7);
	this.instance_11.alpha = 0.6992;

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#362045").s().p("AmuMYQi1gkiChaQiBhZgjhxQgehcAKh7QALiIA6iMQCOlZFtj0QDAh/DXgtQDBgoC7AeQCsAcB9BOQB7BNAkBjQAlBmgDCFQgDCUg1CUQiBFuluD1QjACAjdAoQhhAShfAAQhmAAhkgUg");
	this.shape_132.setTransform(926.6867,6.6277,0.7909,0.7909,-16.9547);

	this.instance_12 = new lib.Group_20_1();
	this.instance_12.setTransform(756.15,-19.4,0.7912,0.7912,-16.9562,0,0,56.4,85.7);
	this.instance_12.alpha = 0.6992;

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#362045").s().p("AB9PfQh7gDh9hOQiIhShniTQhyikg1jaQhkmeBol3QAqiaBHh6QBAhvBJg9QBHg8BxAJQBxAKB2BOQB/BWBhCSQBsCkA1DZQBkGdhWFvQgjCUg9B2Qg3Brg/A6QhKBEh0AAIgKAAg");
	this.shape_133.setTransform(756.9619,-2.2205,0.7909,0.7909,-16.9547);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#362045").s().p("EgONAs+QgggDhfgPQgZgEgngIIhAgOQkOg9jih0Qjvh5jHjFQjHjFiEj1Qj4nKgxpdQgroSBvo0QBpofEDnjQEHnrGDlnQGWl7Hci9QD1hiEBgsQEEgsEBAPQEEAPD9BHQD8BGDrB6QDoB5DPCvQDMCsCpDWQFLGjCuIdQCpIMgEIuQgBETgqESQgPBpgkClIghCFIhDDJIhYC/IhIB3IgkA8Ih7ClIiJCYIiTCJQmNFMn9C/QklBmjKApQi9AnhAAHQiQANhyglQgWgHgKgVQgMgWAGgYQAHgYATgNIADgCQA0ggBCgVQAhgLBWgVQAogJBPgNQAogIBPgTQBtgZB9goQBjgfCDgwQHzjIFWkeICHh7IB8iHIBwiRIBgidIBOimIA8ivIAfh8QAkigANhcQApj8AAkDQAEoIienpQihn1kxmCQibjEi7ieQi9ifjVhwQjWhwjohBQjqhBjsgNQjsgOjuApQjrAojiBaQjfBZjPCGQjMCFi1CrQlnFRjzHKQjvHDhgH8QhkIJAoH2QAWEIBADtQBFD8ByDRQB1DaCpCsQCsCtDRBtQDJBqD0A7IB0AZIB4ATQCJAaBiAwIAEACQAUAKAJAWQAIAYgJAXQgJAXgWAJQg9AbhHAIQgfADgjAAQgeAAgigCg");
	this.shape_134.setTransform(914.596,-58.9145,0.7909,0.7909,-16.9547);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#64C141").s().p("Ay0DQQmUkIjenVQC6DTD1CjQFRDgGZBrQIOCJKvgLQK7gLI7iiQkkCPlHBYQk8BVk9AaIqhAzQqRgXnEkng");
	this.shape_135.setTransform(924.9011,124.8075,0.7909,0.7909,-16.9547);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#8AEA55").s().p("EgbhAmbQmUkJjdnVQjknhgOqAQgNo4CYotQCdo+FNndQFHnVHAkvQHIk1H+hZQIYhdIRClQIRClGWGDQGCFwDlILQDhIAAoJIQAoJQidI+Qh4G6lVFlQk2FGnMDgQklCPlHBYQk8BVk9AaIqgAzQqSgXnEkng");
	this.shape_136.setTransform(915.1004,-58.3067,0.7909,0.7909,-16.9547);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#362045").s().p("AkxfuQhPghg1hIQgug9gUhaQgQhCADhOQABgzALhOQAkkXAFikQALjqgRjSQgNjUgnjkQghjGg+jtQgsithPkFQgGgUAHgTQAIgUASgJQATgKAVAHQAVAHAKAVIAAAAQDWHEBgGhQBnG8gPHsQgDC2ghEeQgHA9AAAmQgBAsAJAnQAIAjAOAUQAOATAYALQAZAMAlAAQAmAAAlgLQATgGAPgHQAPgHAMgJQAfgZAYgeQAxg8AhhlQAehaAKhmIACgPQAEgqAegdQAegdAoAAQAsAAAfAhQAfAhAAAvQANClArCAQAYBIAhAtQAgAsAgAJQAYAEAQgCQAPgCANgJQAggWAZg8QAthoANi2QALiZgNihQgKiLgci1Qgyk7hmk4QjGpel3oSQlxoKnxmAQgjgcgHguQgHguAZgnQAaglArgIQAsgIAjAcQILGVGDIjQGLIvDSKBQBsFKA0FMQAeC7ALCZQAPCygMCtQgJBrgOBJQgTBigjBUQgzB2hTA7Qg2Ang+AHQg3AJg8gPQg6gOgzgoQgrghgigxQghgvgag6QgUAkgXAfQgtA9g3AoQgdAYgkAQQgiAQggAKQhGAUhBAAQhPAAhHgeg");
	this.shape_137.setTransform(1083.6418,236.8861,0.7912,0.7912,-16.9562);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#64C141").s().p("AlNmRQFtEbEuFnQkCBxk3Awg");
	this.shape_138.setTransform(1009.6798,131.7132,0.7912,0.7912,-16.9562);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#64C141").s().p("AF4RiQiPgkhJkNQgWhUgNhhIgIhRIgGA8QgJBJgTBEQg9DciIBdQg0AjhMANQhXAOhFgaQi5hHArk3QBLocg1nuQgqmOiFmjQCHDaBME7QA5DqAeFDQARCxAUEiQAVDUApAyQBnB+CkiDQAzgpAzg/IApg1IAvBmQA8BxBDA3QDUCwDCnZQAAEehDCnQhGCuiAAAQgZAAgcgHg");
	this.shape_139.setTransform(1113.5138,295.1973,0.7912,0.7912,-16.9562);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#8AEA55").s().p("AIKeSQiPgjhJkNQgWhUgNhiIgIhQIgGA7QgJBJgTBFQg9DbiJBdQgzAkhMAMQhXAPhFgbQi5hHArk2QBLodg1nuQgqmOiFmiIAAgBQg5izhWjgIiWzNQLZI0G6M2QG8M2A9OJQAFBRgBBEQAAEehDCoQhFCtiBAAQgZAAgcgHg");
	this.shape_140.setTransform(1083.615,236.8019,0.7912,0.7912,-16.9562);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#362045").s().p("AhHBqQACgtAcgsQgxgOgdgfQgZgbAIgIQAEgDAiANQAvASAqAIQAZgjAZgvQASgiAEAAQALAAgCAmQgDAsgbAtQAwAOAeAfQAZAbgIAIQgEADgigNQgwgSgpgIQgZAigZAwQgSAigEAAQgLAAACgmg");
	this.shape_141.setTransform(936.4992,321.1989,0.7909,0.7909,-16.9547);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#362045").s().p("Ag2GeQhsghhOhhQhLhcgYh6QgZh8Alh1QATg8AjgzQAlg1AygjQAygiA8gPQA6gNA8AKQBxATBWBaQBPBTAdBxQADANgFAMQgGAMgLAGQgNAHgNgFQgNgFgHgOQgnhWhGg4QhHg4hNgGQhNgGg+AwQg+AxgYBQQgYBOAPBYQAOBYAxBGQAyBKBLAjQBPAnBRgUIAAgBQAMgCALAFQALAFAFAMQAGAOgEAOQgFAPgNAGQgwAag7AEIgXABQgsAAgsgNg");
	this.shape_142.setTransform(936.2938,322.4125,0.7909,0.7909,-16.9547);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#62C340").s().p("AhsEYQh4hGgyiSQgTg2gFg8IAEAHQBNCJB+A0QB8AzBjhAQBeg8ATiDQATiDhAiFQBBBCAhBeIAJBYQAEBpggBbQggBag8A3QgeAbgXAJQgwAUgwAAQhGAAhIgrg");
	this.shape_143.setTransform(939.3608,326.3053,0.7909,0.7909,-16.9547);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#362045").s().p("Ag2GeQhsghhOhhQhLhcgYh6QgZh8Alh1QATg8AjgzQAlg1AygjQAygiA8gPQA6gNA8AKQBxATBWBaQBPBTAdBxQADANgFAMQgGAMgLAGQgNAHgNgFQgNgFgHgOQgnhWhGg4QhHg4hNgGQhNgGg+AwQg+AxgYBQQgYBOAPBYQAOBYAxBGQAyBKBLAjQBPAnBRgUIAAgBQAMgCALAFQALAFAFAMQAGAOgEAOQgFAPgNAGQgwAag7AEIgXABQgsAAgsgNg");
	this.shape_144.setTransform(936.15,322.2769,0.7907,0.7907,-16.9547);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#8AEA55").s().p("AhmFKQh4hGgyiSQgziRAwiJQAwiJB3gvQB1gvB4BGQB4BGAzCSIikHSQgwATgwAAQhGAAhIgqg");
	this.shape_145.setTransform(937.619,322.5723,0.7907,0.7907,-16.9547);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#362045").s().p("AjEc1QjRgjiNgsQi9g7iIhdQlPjohSnsQh0rDGQuIQCAkgCnkUQBYiSBEhfIASgZIAbgLQFkiaE1hRQH8iGCpCBQAwAlAYA3QAYA4gDBCQgMDiA6FDQAjDCBlGiQCFIhAnEPQBBHEg+FJIgFASQhnElljDCQleC/mgAAQh/AAh8gVgAEc46QlEBOlqCYQj/F1i7G+QlOMaBjJZQBCGQEGCzQBuBLChAxQB5AkDDAhQC8AfDMgZQDDgZCyhIQCxhIB7hpQCChvAvh/QA2kmhAmmQgmj9h+oFQhpmygkjOQg8lVAMj5QABgKgCgDQAAgDgDgCQghgZhQAAQhvAAjLAxg");
	this.shape_146.setTransform(981.297,253.8741,0.7912,0.7912,-16.9562);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#64C141").s().p("AlNmRQFtEbEuFnQkCBxk3Awg");
	this.shape_147.setTransform(1009.6798,131.7132,0.7912,0.7912,-16.9562);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#64C141").s().p("AmEF1QjTgii7hBQBSiUBXiEIBFhoIDNhRQD1hdDLg2QKKivgNELQgMDpA5FCQlYBjmEAAQjiAAjZgjg");
	this.shape_148.setTransform(956.2028,150.0739,0.7912,0.7912,-16.9562);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#64C141").s().p("Ai0ROQjMgiiGgqQivg3h7hVQkmjNhJm7QgXiKgBiXQB2DXCwCIQDYCoEjAnQDJAaDegqQDbgqC2hgQC9hkBjiGQBsiRgVifQgKhSgfiaIg1kIQg9k+AhhkQATg6CBCJQBnBtClDhQBTFvAZEAQAhFJgwD+Qg0CWiNB/QiHB6jBBTQjBBSjXAcQhmANhiAAQh1AAhygTg");
	this.shape_149.setTransform(995.9097,301.6752,0.7912,0.7912,-16.9562);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#8AEA55").s().p("Ai0bHQjMgiiGgqQivg3h7hVQkmjNhJm7QgXiKgBiYQgCmXCenaQB3llDIlwIAZguQBSiUBXiFIBFhoIDNhRQD1hdDLg2QKKivgNELQgMDpA5FDIARBaQAgCmBBERQBZFxASBRQBTFuAZEAQAhFKgwD+Qg0CWiNB/QiHB6jBBTQjBBSjXAcQhmANhiAAQh1AAhygTg");
	this.shape_150.setTransform(981.298,253.755,0.7912,0.7912,-16.9562);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#362045").s().p("Eg/tBCsQuwhEnvi6Qnui5glkqQh/wMCMxkQCm03ICw/QJe0EQHsZQSluSafjQQafjQVfJYQSnIIODRMQL5OkHkTnQGXQfB/QNQAkEqmzErQm0EruDEnQs7EOw4DfQw4DfysCSQtMBosnA1QsjA1rLAAQpSAAn3gkgEgMfg+CQ5RDHxtNtQvXL4pBTRQnpQTieUBQiEQ3B6PjQAHA5BSBAQBhBKC2BBQHPClNvBAQNWA+RAgtQRAgsSdiRQSfiRQqjcQQqjcMukKQNFkSGZkQQChhrBMhgQBBhRgHg6Qhxudldu5QmbxiqDtmQrxv9vlowQx6qE2AAAQmFAAmfAyg");
	this.shape_151.setTransform(886.6207,56.359);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#272C2E").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape_152.setTransform(889.9336,70.515);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#362045").s().p("Eh4jApnQ2zhqt6kCQyUlThGo+QhGo+QfpkQMhnQVvnHQYOn7fpmhUAfpgGiAjDgETUAjEgETAgRgBUUAgTgBUAZaAB1QWzBqN6ECQSUFTBGI+QBGI+wfJkQshHQ1vHHQ4OH7/pGiUgfpAGhgjDAETQ4wDD3sBkQ3iBj0+AAQxOAAu4hEgEAsPgksQ3iBj4oDBUgi4AESgfaAGfQ/cGe4BH3Q2mHYsYHfQsXHeAuF1QAuF1NzERQNzERXvBuUAZMAB1AgFgBUUAgDgBUAi2gERUAi2gERAfcgGfQfbmfYCn3QWmnYMYneQMXnfgul1Qgul1tzkRQtzkQ3vhvQuqhDxIAAQ01AA3ZBjg");
	this.shape_153.setTransform(902.975,444.7741);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#7B7B7B").s().p("EheBAMEQgbjhOZkRQLgjbUbjuQOlirRlikQIzhSF4gwIOthlQRqhwO0g8QUuhTL/AiQPAAqAbDhQAOBwhcB7UgIdgEFgrVADFQtiA9vaBkIsrBYQz8Cj1ZDuUgqyAHfgHOAGAQh3hhgOhwg");
	this.shape_154.setTransform(888.2526,321.0081);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#2F3A55").s().p("Egu4ALLQmLgzjbhbQjjhegPiBQgYjERJj7QL0itSkizQDNgeDNgdIApgGQDQgdB/gQIBzgNQCVgRClgRIErgeQS3h0MWgRQSIgZAYDHQAQCEjPCWQjICRmECUQsfEwz4DaIAAAAQm6BMnYA6QkQAikNAZIn0ApQonAlnSAAQpIAAnCg6g");
	this.shape_155.setTransform(893.7067,381.1651);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#2F3A55").s().p("EhA4ASRQtUg+njidQn0ihgejxQgbjhOZkRQLgjaUbjvQOlirRlikQIzhSF4gwIOthlQRrhwOzg8QUuhTL/AiQPAAqAbDhQAeDxm+EWQmvEMssEJQstEKwtDfQxSDmzICWQzHCWxqAsQm9ARmWAAQpMAAn5gkg");
	this.shape_156.setTransform(888.2517,343.4265);

	this.instance_13 = new lib.Group_30();
	this.instance_13.setTransform(924.65,515.05,1,1,0,0,0,748.3,187.8);
	this.instance_13.alpha = 0.3516;

	this.instance_14 = new lib.Group_31();
	this.instance_14.setTransform(121.3,562.95,1,1,0,0,0,323.7,134.7);
	this.instance_14.alpha = 0.3516;

	this.instance_15 = new lib.Group_32();
	this.instance_15.setTransform(1687.15,376.6,1,1,0,0,0,331.5,136.1);
	this.instance_15.alpha = 0.3516;

	this.instance_16 = new lib.Group_33();
	this.instance_16.setTransform(896.35,358.4,1,1,0,0,0,648.8,142.3);
	this.instance_16.alpha = 0.5;

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#BBC5D2").s().p("Eh4YAnaQ4vhzuAkiQugktg3m/Qg2m/M7oDQMfnyXlnuQXknte/mcUAgGgGsAjggEWUAjegEXAgwgBRQfphPYvByQYuBzOAEiQOgEsA3G/QA2G/s7IEQsfHx3kHuQ3lHu+/GcUggGAGrgjgAEXUgjfAEXggvABRQs7AgrxAAQxDAAuohDg");
	this.shape_157.setTransform(901.675,444.95);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#362045").s().p("Eh37AkDQ2uhpt2j/QyPlQhFo2IhQqMQgHg0AggoQAggpA0gGQAzgGApAfQApAgAGA0IBQKMQAuF7N4EVQN3EVX1BuUAZOAB1AgFgBUUAgFgBUAi2gERUAi2gESAfdgGfQfcmeYCn4QWtnaManiQMbnkgvl7IhQqMID4gfIBQKMQBGI3wbJgQsfHN1pHEQ4NH7/pGhUgfnAGhgjEAEUQ4wDC3qBkQ3jBk08AAQxZAAushFg");
	this.shape_158.setTransform(907.1357,543.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFF66").s().p("Eh4JAgKQ4vhyt/kjQugksg3m/IgjklQA/G4OVEqQOAEiYvBzQYvByfohPUAgwgBRAjfgEXUAjggEWAgGgGsQe/mcXlntQXkntMfnyQMzn/gtm7IAkElQA2G/s7IEQsfHy3kHtQ3lHt+/GdUggGAGrgjgAEWUgjfAEXggvABSQs7AgrxAAQxDAAuphEg");
	this.shape_159.setTransform(909.3684,556.3377);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFF66").s().p("Eh3yAi+Q4vhzuAkiQufktg3m/IhQqMMFc8gqxIBQKMQA3G/s8IEQsfHy3kHsQ3kHu/AGcUggFAGrgjgAEXUgjfAEWggwABSQs6AgrxAAQxEAAuohDg");
	this.shape_160.setTransform(907.1434,538.3877);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#362045").s().p("EhI7AeSQuMhyovjfQrfkmg4nKQg4nKKCnNQHolgNXlKQOrlsTQkbQTQkcVXinQVXioTvgWQTwgXPnB+QONByIvDfQLfEmA4HKQA4HKqCHNQnoFgtXFKQurFszPEbQzQEc1YCnQsPBgr5AxQr0Axq+AAQwYAAtMhrgAU46xQrvAwsJBfQ1HCmy+EXQy9EXucFlQtZFLnQFZQnQFaAiEaQAjEXIKDcQIKDcOKB1QO0B7SugOQUMgQWGitQVHimS/kXQS/kXObllQNYlLHQlZQHQlagjkaQgikZoWjgQoWjfuOhzQs9howFAAQqzAArsAwg");
	this.shape_161.setTransform(927.75,646.929);

	this.instance_17 = new lib.Group_40();
	this.instance_17.setTransform(929.3,666.7,1,1,0,0,0,676.9,134.3);
	this.instance_17.alpha = 0.3516;

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FDFEFF").s().p("Eg80AXSQtpg3qGiOQqOiQlkjaQkJijhSjDQBEjWIgj7QIRjzOMj4QOPj4SMjZQS0jhUpiiQUniiTIhJQSehGOvAVQOuAVI7BtQJOBwB1C/QghDSjZDeQklEppYEqQpREltBEIQtLEMvtDTQwPDaxeCJQ4pDB1hAAQpIAAolgjg");
	this.shape_162.setTransform(929.25,684.8765);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#9A9A9A").s().p("EhIpAcGQvIh5opj0Qo8j9grlcQgqlcHul/QHdlxOOlgQOOlgSykXQTdkhVkiqQVkipT9gUQTSgUPIB6QPIB6IpDzQI8D9ArFcQAqFcnuF/QndFxuOFgQuOFgyyEXQzdEh1kCqQ1kCpz9AUQirADilAAQwIAAtChpg");
	this.shape_163.setTransform(927.775,646.9255);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#362045").s().p("AgZLtQk9gKkhg8Qkhg7jghlQj6hxiCiUQiDiVAGikQAFimCNiLQCMiLEBhgQDnhVEkgoQEkgoE8ALQFcAMExBEQEoBBDeBuQDdBuB1CLQB5CQgFCdQgGCliMCMQiMCLkBBfQjOBNkBAoQkAAokZAAQg7AAhJgDgApYnRQjpAki6BFQivBBhlBTQhlBTgDBSQgDBRBfBaQBfBaCrBNQDKBbEJA2QEIA2EmAKQElAKELgkQEMgkDQhNQCvhBBlhTQBlhUADhSQADhXhnhdQhmhci6hPQmhivpCgUQhFgCg3AAQkDAAjqAkg");
	this.shape_164.setTransform(561.3508,825.0564);

	this.instance_18 = new lib.Group_44();
	this.instance_18.setTransform(561.35,825.05,1,1,0,0,0,152.5,62.7);
	this.instance_18.alpha = 0.1992;

	this.instance_19 = new lib.Group_45();
	this.instance_19.setTransform(1326.3,731.2,1,1,0,0,0,147.7,73.2);
	this.instance_19.alpha = 0.1992;

	this.instance_20 = new lib.Group_46();
	this.instance_20.setTransform(948.8,818.05,1,1,0,0,0,151.7,64.8);
	this.instance_20.alpha = 0.1992;

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FDFEFF").s().p("AgUJxQp4gWm4jGQjRhdhwh1Qhzh4AEh+QAEh/B8hwQB4hsDWhPQHEioJ3AWQE2AKEaA7QEQA5DQBdQDQBeBwB0QB0B4gEB+QgEB/h8BwQh4BtjWBPQjWBPkTAmQjhAfjwAAQhAAAhBgCg");
	this.shape_165.setTransform(561.3517,825.0391);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#362045").s().p("AuhNPQkQgfirhlQiphlguigQgtifBaiwQBbiuDXiqQDCiYEJh/QELiAExhXQKmjCIBBNQD1AlCaBhQCfBjArCYQAuCghbCvQhbCvjXCpQjBCYkKCAQkKB/kxBYQjqBDjmAiQjmAjjQAAQh6AAhvgMgAEzo+QjcAgjgBAQkbBRjyBzQj1B1iuCJQiTBzhHBuQhGBuAWBPQAYBPB2A4QB1A5C6AUQDdAZENgeQEMgeEZhRQEahQD0h1QD0h0CviJQCThzBGhuQBGhugWhPQgdhmiug8Qiwg9kNAAQi6AAjOAfg");
	this.shape_166.setTransform(1326.35,731.1311);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FDFEFF").s().p("AuTLRQjjgZiOhMQiThPgjh6Qgjh7BTiQQBRiMCziMQF8krJgitQJeiuHgA2QDjAZCOBMQCTBPAjB6QAjB7hTCQQhRCMizCMQl7ErpgCtQnRCFmHAAQh3AAhwgNg");
	this.shape_167.setTransform(1326.325,731.2646);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#362045").s().p("AzlJrQlhidggkFQgTidBsiZQBoiVDTiBQDTiBEhhbQEqheFZgqQFYgrE4ATQEvATDsBKQDsBKCJB4QCOB8ATCcQAVClh1CeQh1CfjvCGQjXB4kaBVQkbBVk7AmQjnAdjkAAQoZAAlciagAg8nvQo+BGmQDUQiyBeheBlQhfBlALBXQALBYB0BMQB0BLDDAxQG3BtI+hHQEjgjEDhNQEDhNDBhtQCkhbBWhiQBXhhgKhSQgSiSkehlQkohpmvAAQjMAAjXAbg");
	this.shape_168.setTransform(948.7601,818.0065);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FDFEFF").s().p("Av4I6Qjdg8iAhhQiFhlgPh+QgQh+BpiBQBlh+DHhvQGljsJ0hNQJzhNHRB/QDdA8CABhQCFBlAPB+QAQB+hpCBQhlB+jIBvQmkDsp0BNQjrAdjWAAQlhAAkihPg");
	this.shape_169.setTransform(948.75,818.025);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#E2E2E2").s().p("Av4I6Qjdg8iAhhQiFhlgPh+QgQh+BpiBQBlh+DHhvQGljsJ0hNQJzhNHRB/QDdA8CABhQCFBlAPB+QAQB+hpCBQhlB+jIBvQmkDsp0BNQjrAdjWAAQlhAAkihPg");
	this.shape_170.setTransform(948.75,818.025);

	this.instance_21 = new lib.Group_1_1();
	this.instance_21.setTransform(531.1,-93.5,1,1,0,0,0,47.8,55.5);
	this.instance_21.alpha = 0.3516;

	this.instance_22 = new lib.Group_2();
	this.instance_22.setTransform(433.95,164.5,1,1,0,0,0,70.2,168.5);
	this.instance_22.alpha = 0.3516;

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FF0000").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_171.setTransform(104.7249,582.232);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FF0000").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_172.setTransform(486.1533,599.8815);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FF0000").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_173.setTransform(1721.6494,383.9885);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FF0000").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_174.setTransform(1355.775,493.275);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FF0000").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_175.setTransform(917.255,561.25);

	this.instance_23 = new lib.Group_24();
	this.instance_23.setTransform(957.05,-28.4,1,1,0,0,0,526.3,331.5);
	this.instance_23.alpha = 0.3516;

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#272C2E").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape_176.setTransform(889.9336,56.365);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#66FF00").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_177.setTransform(104.7249,582.232);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#66FF00").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_178.setTransform(486.1533,599.8815);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#66FF00").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_179.setTransform(1721.6494,383.9885);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#66FF00").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_180.setTransform(1355.775,493.275);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#66FF00").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_181.setTransform(917.255,561.25);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#66FFFF").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_182.setTransform(104.7249,582.232);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#66FFFF").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_183.setTransform(486.1533,599.8815);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#66FFFF").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_184.setTransform(1721.6494,383.9885);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#66FFFF").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_185.setTransform(1355.775,493.275);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#66FFFF").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_186.setTransform(917.255,561.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.instance_17},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152,p:{y:70.515,x:889.9336}},{t:this.shape_151},{t:this.shape_150,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:981.298,y:253.755}},{t:this.shape_149,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:995.9097,y:301.6752}},{t:this.shape_148,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:956.2028,y:150.0739}},{t:this.shape_147,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1009.6798,y:131.7132}},{t:this.shape_146,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:981.297,y:253.8741}},{t:this.shape_145,p:{scaleX:0.7907,scaleY:0.7907,x:937.619,y:322.5723}},{t:this.shape_144,p:{scaleX:0.7907,scaleY:0.7907,x:936.15,y:322.2769}},{t:this.shape_143,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:939.3608,y:326.3053}},{t:this.shape_142,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:936.2938,y:322.4125}},{t:this.shape_141,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:936.4992,y:321.1989}},{t:this.shape_140,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1083.615,y:236.8019}},{t:this.shape_139,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1113.5138,y:295.1973}},{t:this.shape_138,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1009.6798,y:131.7132}},{t:this.shape_137,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1083.6418,y:236.8861}},{t:this.shape_136,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:915.1004,y:-58.3067}},{t:this.shape_135,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:924.9011,y:124.8075}},{t:this.shape_134,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:914.596,y:-58.9145}},{t:this.shape_133,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:756.9619,y:-2.2205}},{t:this.instance_12,p:{regX:56.4,regY:85.7,scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:756.15,y:-19.4}},{t:this.shape_132,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:926.6867,y:6.6277}},{t:this.instance_11,p:{regX:93,regY:51.7,scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:920.4,y:-16.25}},{t:this.shape_131,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:757.4363,y:-8.8078}},{t:this.shape_130,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:926.6759,y:6.5433}},{t:this.shape_129,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:828.2114,y:64.7606}},{t:this.shape_128,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:839.3683,y:65.4212}},{t:this.shape_127,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:947.9832,y:-124.0362}},{t:this.shape_126,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:906.8456,y:-118.2291}},{t:this.shape_125,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:949.4711,y:-124.3051}},{t:this.shape_124,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:682.0839,y:-152.4908}},{t:this.shape_123,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:682.1915,y:-154.04}},{t:this.shape_122,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:753.7319,y:-133.1481}},{t:this.shape_121,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:680.6336,y:-155.4045}},{t:this.shape_120,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:901.0998,y:-70.6506}},{t:this.shape_119,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:780.9653,y:-82.0518}},{t:this.shape_118,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9547,x:871.4077,y:109.8706}},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.instance_10},{t:this.instance_9,p:{x:957.05,y:-28.4}},{t:this.instance_8,p:{x:531.1,y:-93.5}},{t:this.instance_7,p:{x:433.95,y:164.5}}]}).to({state:[{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.instance_17},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_176,p:{x:889.9336}},{t:this.instance_23},{t:this.shape_151},{t:this.shape_175},{t:this.shape_116},{t:this.shape_174},{t:this.shape_114},{t:this.shape_173},{t:this.shape_112},{t:this.shape_172},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_171},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.instance_22},{t:this.instance_21},{t:this.instance_10},{t:this.shape_150,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:967.9503,y:263.1377}},{t:this.shape_149,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:982.5465,y:311.0125}},{t:this.shape_148,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:942.8822,y:159.5551}},{t:this.shape_147,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:996.3086,y:141.2136}},{t:this.shape_146,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:967.9492,y:263.2567}},{t:this.shape_145,p:{scaleX:0.79,scaleY:0.79,x:924.3374,y:331.9418}},{t:this.shape_144,p:{scaleX:0.79,scaleY:0.79,x:922.8698,y:331.6467}},{t:this.shape_143,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:926.0668,y:335.5865}},{t:this.shape_142,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:923.0027,y:331.6976}},{t:this.shape_141,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:923.2079,y:330.4852}},{t:this.shape_140,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1070.1698,y:246.2041}},{t:this.shape_139,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1100.0383,y:304.5445}},{t:this.shape_138,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:996.3086,y:141.2136}},{t:this.shape_137,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1070.1966,y:246.2882}},{t:this.shape_136,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:901.8235,y:-48.647}},{t:this.shape_135,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:911.6177,y:134.2871}},{t:this.shape_134,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:901.3196,y:-49.2541}},{t:this.shape_133,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:744.3408,y:0.7933}},{t:this.instance_12,p:{regX:58.6,regY:86.4,scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:743.4,y:-10}},{t:this.shape_132,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:913.3996,y:16.2234}},{t:this.instance_11,p:{regX:95.5,regY:52.1,scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:907.85,y:-7.2}},{t:this.shape_131,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:744.3153,y:0.806}},{t:this.shape_130,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:913.3888,y:16.139}},{t:this.shape_129,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:815.022,y:74.3008}},{t:this.shape_128,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:826.168,y:74.9606}},{t:this.shape_127,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:934.6728,y:-114.3124}},{t:this.shape_126,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:893.5758,y:-108.5104}},{t:this.shape_125,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:936.1593,y:-114.5811}},{t:this.shape_124,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:669.0344,y:-142.7344}},{t:this.shape_123,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:669.0344,y:-142.7344}},{t:this.shape_122,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:740.6124,y:-123.412}},{t:this.shape_121,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:667.1285,y:-144.0975}},{t:this.shape_120,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:887.8365,y:-60.9785}},{t:this.shape_119,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:767.8199,y:-72.3664}},{t:this.shape_118,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:858.1767,y:119.3658}},{t:this.shape_152,p:{y:56.365,x:889.9336}},{t:this.instance_9,p:{x:960.3,y:-34.25}},{t:this.instance_7,p:{x:437.2,y:158.65}},{t:this.instance_8,p:{x:534.35,y:-99.35}}]},4).to({state:[{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.instance_17},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_176,p:{x:886.6836}},{t:this.instance_23},{t:this.shape_151},{t:this.shape_181},{t:this.shape_116},{t:this.shape_180},{t:this.shape_114},{t:this.shape_179},{t:this.shape_112},{t:this.shape_178},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_177},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.instance_22},{t:this.instance_21},{t:this.instance_10},{t:this.shape_150,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:983.6003,y:262.8377}},{t:this.shape_149,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:998.1965,y:310.7125}},{t:this.shape_148,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:958.5322,y:159.2551}},{t:this.shape_147,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1011.9586,y:140.9136}},{t:this.shape_146,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:983.5992,y:262.9567}},{t:this.shape_145,p:{scaleX:0.79,scaleY:0.79,x:940.0374,y:331.5918}},{t:this.shape_144,p:{scaleX:0.79,scaleY:0.79,x:938.5698,y:331.2967}},{t:this.shape_143,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:941.7168,y:335.2865}},{t:this.shape_142,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:938.6527,y:331.3976}},{t:this.shape_141,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:938.8579,y:330.1852}},{t:this.shape_140,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1085.8198,y:245.9041}},{t:this.shape_139,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1115.6883,y:304.2445}},{t:this.shape_138,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1011.9586,y:140.9136}},{t:this.shape_137,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1085.8466,y:245.9882}},{t:this.shape_136,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:917.4735,y:-48.947}},{t:this.shape_135,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:927.2677,y:133.9871}},{t:this.shape_134,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:916.9696,y:-49.5541}},{t:this.shape_133,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:759.9908,y:0.4933}},{t:this.instance_12,p:{regX:58.6,regY:85.6,scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:759.1,y:-10.85}},{t:this.shape_132,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:929.0496,y:15.9234}},{t:this.instance_11,p:{regX:95,regY:52.4,scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:923.2,y:-7.45}},{t:this.shape_131,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:759.9653,y:0.506}},{t:this.shape_130,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:929.0388,y:15.839}},{t:this.shape_129,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:830.672,y:74.0008}},{t:this.shape_128,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:841.818,y:74.6606}},{t:this.shape_127,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:950.3228,y:-114.6124}},{t:this.shape_126,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:909.2258,y:-108.8104}},{t:this.shape_125,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:951.8093,y:-114.8811}},{t:this.shape_124,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:684.6844,y:-143.0344}},{t:this.shape_123,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:684.6844,y:-143.0344}},{t:this.shape_122,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:756.2624,y:-123.712}},{t:this.shape_121,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:682.7785,y:-144.3975}},{t:this.shape_120,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:903.4865,y:-61.2785}},{t:this.shape_119,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:783.4699,y:-72.6664}},{t:this.shape_118,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:873.8267,y:119.0658}},{t:this.shape_152,p:{y:56.365,x:883.0336}},{t:this.instance_9,p:{x:960.3,y:-28.4}},{t:this.instance_7,p:{x:433.95,y:164.5}},{t:this.instance_8,p:{x:531.1,y:-93.5}}]},4).to({state:[{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.instance_17},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_176,p:{x:886.6836}},{t:this.instance_23},{t:this.shape_151},{t:this.shape_186},{t:this.shape_116},{t:this.shape_185},{t:this.shape_114},{t:this.shape_184},{t:this.shape_112},{t:this.shape_183},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_182},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.instance_22},{t:this.instance_21},{t:this.instance_10},{t:this.shape_150,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:967.9503,y:272.3877}},{t:this.shape_149,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:982.5465,y:320.2625}},{t:this.shape_148,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:942.8822,y:168.8051}},{t:this.shape_147,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:996.3086,y:150.4636}},{t:this.shape_146,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:967.9492,y:272.5067}},{t:this.shape_145,p:{scaleX:0.79,scaleY:0.79,x:924.3374,y:341.1418}},{t:this.shape_144,p:{scaleX:0.79,scaleY:0.79,x:922.8698,y:340.8467}},{t:this.shape_143,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:926.0668,y:344.8365}},{t:this.shape_142,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:923.0027,y:340.9476}},{t:this.shape_141,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:923.2079,y:339.7352}},{t:this.shape_140,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1070.1698,y:255.4541}},{t:this.shape_139,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1100.0383,y:313.7945}},{t:this.shape_138,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:996.3086,y:150.4636}},{t:this.shape_137,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1070.1966,y:255.5382}},{t:this.shape_136,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:901.8235,y:-39.397}},{t:this.shape_135,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:911.6177,y:143.5371}},{t:this.shape_134,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:901.3196,y:-40.0041}},{t:this.shape_133,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:744.3408,y:10.0433}},{t:this.instance_12,p:{regX:58.6,regY:86,scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:743.3,y:-1.25}},{t:this.shape_132,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:913.3996,y:25.4734}},{t:this.instance_11,p:{regX:95.1,regY:52.5,scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:907.55,y:2.1}},{t:this.shape_131,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:744.3153,y:10.056}},{t:this.shape_130,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:913.3888,y:25.389}},{t:this.shape_129,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:815.022,y:83.5508}},{t:this.shape_128,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:826.168,y:84.2106}},{t:this.shape_127,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:934.6728,y:-105.0624}},{t:this.shape_126,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:893.5758,y:-99.2604}},{t:this.shape_125,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:936.1593,y:-105.3311}},{t:this.shape_124,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:669.0344,y:-133.4844}},{t:this.shape_123,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:669.0344,y:-133.4844}},{t:this.shape_122,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:740.6124,y:-114.162}},{t:this.shape_121,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:667.1285,y:-134.8475}},{t:this.shape_120,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:887.8365,y:-51.7285}},{t:this.shape_119,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:767.8199,y:-63.1164}},{t:this.shape_118,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:858.1767,y:128.6158}},{t:this.shape_152,p:{y:56.365,x:893.4336}},{t:this.instance_9,p:{x:963.8,y:-28.4}},{t:this.instance_7,p:{x:440.7,y:164.5}},{t:this.instance_8,p:{x:537.85,y:-93.5}}]},4).to({state:[{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.instance_17},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_176,p:{x:886.6836}},{t:this.instance_23},{t:this.shape_151},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.instance_22},{t:this.instance_21},{t:this.instance_10},{t:this.shape_150,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:985.3503,y:259.7377}},{t:this.shape_149,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:999.9465,y:307.6125}},{t:this.shape_148,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:960.2822,y:156.1551}},{t:this.shape_147,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1013.7086,y:137.8136}},{t:this.shape_146,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:985.3492,y:259.8567}},{t:this.shape_145,p:{scaleX:0.79,scaleY:0.79,x:941.7874,y:328.4918}},{t:this.shape_144,p:{scaleX:0.79,scaleY:0.79,x:940.3198,y:328.1967}},{t:this.shape_143,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:943.4668,y:332.1865}},{t:this.shape_142,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:940.4027,y:328.2976}},{t:this.shape_141,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:940.6079,y:327.0852}},{t:this.shape_140,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1087.5698,y:242.8041}},{t:this.shape_139,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1117.4383,y:301.1445}},{t:this.shape_138,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1013.7086,y:137.8136}},{t:this.shape_137,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1087.5966,y:242.8882}},{t:this.shape_136,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:919.2235,y:-52.047}},{t:this.shape_135,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:929.0177,y:130.8871}},{t:this.shape_134,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:918.7196,y:-52.6541}},{t:this.shape_133,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:761.7408,y:-2.6067}},{t:this.instance_12,p:{regX:58.7,regY:86,scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:760.85,y:-13.85}},{t:this.shape_132,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:930.7996,y:12.8234}},{t:this.instance_11,p:{regX:94.9,regY:51.6,scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:924.75,y:-11}},{t:this.shape_131,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:761.7153,y:-2.594}},{t:this.shape_130,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:930.7888,y:12.739}},{t:this.shape_129,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:832.422,y:70.9008}},{t:this.shape_128,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:843.568,y:71.5606}},{t:this.shape_127,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:952.0728,y:-117.7124}},{t:this.shape_126,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:910.9758,y:-111.9104}},{t:this.shape_125,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:953.5593,y:-117.9811}},{t:this.shape_124,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:686.4344,y:-146.1344}},{t:this.shape_123,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:686.4344,y:-146.1344}},{t:this.shape_122,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:758.0124,y:-126.812}},{t:this.shape_121,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:684.5285,y:-147.4975}},{t:this.shape_120,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:905.2365,y:-64.3785}},{t:this.shape_119,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:785.2199,y:-75.7664}},{t:this.shape_118,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:875.5767,y:115.9658}},{t:this.shape_152,p:{y:56.365,x:886.6836}},{t:this.instance_9,p:{x:957.05,y:-28.4}},{t:this.instance_7,p:{x:433.95,y:164.5}},{t:this.instance_8,p:{x:531.1,y:-93.5}}]},4).to({state:[{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.instance_17},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_176,p:{x:886.6836}},{t:this.instance_23},{t:this.shape_151},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.instance_22},{t:this.instance_21},{t:this.instance_10},{t:this.shape_150,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:985.3503,y:259.7377}},{t:this.shape_149,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:999.9465,y:307.6125}},{t:this.shape_148,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:960.2822,y:156.1551}},{t:this.shape_147,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1013.7086,y:137.8136}},{t:this.shape_146,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:985.3492,y:259.8567}},{t:this.shape_145,p:{scaleX:0.79,scaleY:0.79,x:941.7874,y:328.4918}},{t:this.shape_144,p:{scaleX:0.79,scaleY:0.79,x:940.3198,y:328.1967}},{t:this.shape_143,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:943.4668,y:332.1865}},{t:this.shape_142,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:940.4027,y:328.2976}},{t:this.shape_141,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:940.6079,y:327.0852}},{t:this.shape_140,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1087.5698,y:242.8041}},{t:this.shape_139,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1117.4383,y:301.1445}},{t:this.shape_138,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1013.7086,y:137.8136}},{t:this.shape_137,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1087.5966,y:242.8882}},{t:this.shape_136,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:919.2235,y:-52.047}},{t:this.shape_135,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:929.0177,y:130.8871}},{t:this.shape_134,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:918.7196,y:-52.6541}},{t:this.shape_133,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:761.7408,y:-2.6067}},{t:this.instance_12,p:{regX:58.7,regY:86,scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:760.85,y:-13.85}},{t:this.shape_132,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:930.7996,y:12.8234}},{t:this.instance_11,p:{regX:94.9,regY:51.6,scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:924.75,y:-11}},{t:this.shape_131,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:761.7153,y:-2.594}},{t:this.shape_130,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:930.7888,y:12.739}},{t:this.shape_129,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:832.422,y:70.9008}},{t:this.shape_128,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:843.568,y:71.5606}},{t:this.shape_127,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:952.0728,y:-117.7124}},{t:this.shape_126,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:910.9758,y:-111.9104}},{t:this.shape_125,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:953.5593,y:-117.9811}},{t:this.shape_124,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:686.4344,y:-146.1344}},{t:this.shape_123,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:686.4344,y:-146.1344}},{t:this.shape_122,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:758.0124,y:-126.812}},{t:this.shape_121,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:684.5285,y:-147.4975}},{t:this.shape_120,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:905.2365,y:-64.3785}},{t:this.shape_119,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:785.2199,y:-75.7664}},{t:this.shape_118,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:875.5767,y:115.9658}},{t:this.shape_152,p:{y:56.365,x:886.6836}},{t:this.instance_9,p:{x:957.05,y:-28.4}},{t:this.instance_7,p:{x:433.95,y:164.5}},{t:this.instance_8,p:{x:531.1,y:-93.5}}]},4).to({state:[{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.instance_17},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_176,p:{x:886.6836}},{t:this.instance_23},{t:this.shape_151},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.instance_22},{t:this.instance_21},{t:this.instance_10},{t:this.shape_150,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:985.3503,y:259.7377}},{t:this.shape_149,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:999.9465,y:307.6125}},{t:this.shape_148,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:960.2822,y:156.1551}},{t:this.shape_147,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1013.7086,y:137.8136}},{t:this.shape_146,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:985.3492,y:259.8567}},{t:this.shape_145,p:{scaleX:0.79,scaleY:0.79,x:941.7874,y:328.4918}},{t:this.shape_144,p:{scaleX:0.79,scaleY:0.79,x:940.3198,y:328.1967}},{t:this.shape_143,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:943.4668,y:332.1865}},{t:this.shape_142,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:940.4027,y:328.2976}},{t:this.shape_141,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:940.6079,y:327.0852}},{t:this.shape_140,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1087.5698,y:242.8041}},{t:this.shape_139,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1117.4383,y:301.1445}},{t:this.shape_138,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1013.7086,y:137.8136}},{t:this.shape_137,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:1087.5966,y:242.8882}},{t:this.shape_136,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:919.2235,y:-52.047}},{t:this.shape_135,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:929.0177,y:130.8871}},{t:this.shape_134,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:918.7196,y:-52.6541}},{t:this.shape_133,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:761.7408,y:-2.6067}},{t:this.instance_12,p:{regX:58.7,regY:86,scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:760.85,y:-13.85}},{t:this.shape_132,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:930.7996,y:12.8234}},{t:this.instance_11,p:{regX:94.9,regY:51.6,scaleX:0.7904,scaleY:0.7904,rotation:-16.9545,x:924.75,y:-11}},{t:this.shape_131,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:761.7153,y:-2.594}},{t:this.shape_130,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:930.7888,y:12.739}},{t:this.shape_129,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:832.422,y:70.9008}},{t:this.shape_128,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:843.568,y:71.5606}},{t:this.shape_127,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:952.0728,y:-117.7124}},{t:this.shape_126,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:910.9758,y:-111.9104}},{t:this.shape_125,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:953.5593,y:-117.9811}},{t:this.shape_124,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:686.4344,y:-146.1344}},{t:this.shape_123,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:686.4344,y:-146.1344}},{t:this.shape_122,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:758.0124,y:-126.812}},{t:this.shape_121,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:684.5285,y:-147.4975}},{t:this.shape_120,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:905.2365,y:-64.3785}},{t:this.shape_119,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:785.2199,y:-75.7664}},{t:this.shape_118,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9557,x:875.5767,y:115.9658}},{t:this.shape_152,p:{y:56.365,x:886.6836}},{t:this.instance_9,p:{x:957.05,y:-28.4}},{t:this.instance_7,p:{x:433.95,y:164.5}},{t:this.instance_8,p:{x:531.1,y:-93.5}}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.1,-381.2,2269.8,1281.5);


(lib.Womanside_spaceship = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F58E84").s().p("AgVBiQgjgMgUgVQgWgWgGgIQgPgSgFgRQgIgcAKgbQAKgdAZgLQAkgRA8AeQAMAGAGAAQAHAAAOgGQAZgNAQAAQALAAAKAFQAKAFAFAJQAHAOgIAQQgHAPgPAGQgXALgngMIgegJQgQgGgNAAQgOgBgMAEQgNAFgFALQgHANAGAPQAFAOAMANIAjAaQAXASABAMQABANgNAAQgIAAgNgEg");
	this.shape.setTransform(766.8628,202.6634,0.9421,0.9421,-14.9947);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE776B").s().p("AhCB9QhDgJgrgfQgWgQgOgVQgPgYgCgYQgCgeASgcQASgcAdgNQAcgNAiACQAfABAeAMIAQAFQAIAAANgHQBPgoBCASQAmAJAaAeQAbAeAAAlQAAAdgSAcQgRAZgbASQgpAZhMAMQgkAGggAAQgZAAgYgDg");
	this.shape_1.setTransform(773.3208,200.4492,0.9421,0.9421,-14.9947);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Aj7FDQhvhGgOihQgFgzAPhIQARhWAlhIQBljCDHACQDGABBtCtQBNB6AGCJQAEB7g9BUQhWB4jKADIgRAAQitAAheg7g");
	this.shape_2.setTransform(766.9346,179.1665,0.9421,0.9421,-14.9947);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373737").s().p("AEiBfIgBgBQgIgGgYgPIglgTQghgRgsgQQhSgbhRgGQgSgCgYAAIgrABIgqAGQgZADgQAEQhBANhfAzIgCABQgKAFgKgCQgLgDgGgJQgHgKADgMQACgLAKgHQBihBBHgWQATgIAcgGIAvgMQBIgJAZAAQBfgDBiAYQA4AOAmAPQASAHAcAMQAdAOARAKIAGADQAWAPAEAbQAFAbgQAVQgQAWgaAEIgMABQgUAAgRgMg");
	this.shape_3.setTransform(669.685,72.227,0.6286,0.6286,-14.9987);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373737").s().p("AlRBqQgagEgQgWQgQgVAEgbQAEgaAWgPIAGgEQAWgNAZgLQAZgMAUgHQArgQAzgNQBfgXBiACQAUAAAcAEIAxAGIAwALQAbAGATAIQBHAWBiBBQAKAHADALQACAMgHAKQgGAJgLADQgKADgKgGIgCgBQhigzg+gNQgQgEgZgDIgqgGIgqgBQgZAAgRACQhSAGhSAbQgvASgeAPQgSAJgTALQgVAMgLAIIgBABQgRAMgUAAIgLgBg");
	this.shape_4.setTransform(779.7122,40.5173,0.6286,0.6286,-14.9987);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGBrQgegtAAg+QAAg9AegtQAdgrApgBQAqABAdArQAdAtABA9QgBA+gdAtQgdAsgqAAQgpAAgdgsg");
	this.shape_5.setTransform(687.7775,112.1599,0.6286,0.6286,-14.9987);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Aj2FOQhniLAAjDQAAjDBniKQBmiKCQAAQCRAABmCKQBnCKAADDQAADDhnCLQhmCKiRAAQiQAAhmiKg");
	this.shape_6.setTransform(691.531,120.5839,0.6286,0.6286,-14.9936);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373737").s().p("ABSBrIhUgaQgzgWgbgWQgngcgVgkQgXgqAEgnIAAgBIABABQALAjAgAaQAaAVAlAJQAZAHAsACIBHgGIADAAQAZgDAVAQQAUAPADAaQADAagQAUQgQAUgaADIgGABQgJAAgIgDg");
	this.shape_7.setTransform(662.8895,116.3057,0.6286,0.6286,-14.9987);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhGBrQgegtAAg+QAAg9AegtQAdgrApgBQAqABAdArQAeAtAAA9QAAA+geAtQgdAsgqAAQgpAAgdgsg");
	this.shape_8.setTransform(794.6082,76.3435,0.6286,0.6286,-14.9987);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Aj2FOQhniKAAjEQAAjDBniKQBmiKCQAAQCRAABmCKQBnCKgBDDQABDDhnCLQhmCKiRAAQiQAAhmiKg");
	this.shape_9.setTransform(799.1859,86.0225,0.6286,0.6286,-14.9936);

	this.instance = new lib.Group_0();
	this.instance.setTransform(666.3,-26.8,0.3726,0.3726,0,0,180,457.8,231.8);
	this.instance.alpha = 0.3984;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00080F").s().p("AgTBJQgygOgkgkQgRgRgBgZQgBgWATgUQAHgIAMgFQAMgFALAAQAZAAARASIAJAHIAOAJIAVAFIATAAIAGgBQAYgGAVAMQAVAMAIAXQADAKgCAOQgBAMgGAKQgNAWgXAGQgYAGgYAAQgaAAgZgHg");
	this.shape_10.setTransform(833.7944,47.8271,0.3725,0.3725,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00080F").s().p("AC4GYQhEgng8g4QhQhLhdiKIhIhvQg1hTgXgzQgLgYAFgWQAGgWAVgOQAKgHALgBIgjhoQgHgXANgWQANgVAXgHQAXgIAXAOQAUAMAIAXIBdERIAAAAIACADQAHASAJAPQAQAcAaAiIABABID0E5QARAVABAWQAAATgNARQgOARgWAFIgMABQgQAAgNgIg");
	this.shape_11.setTransform(841.2917,36.9891,0.3725,0.3725,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00080F").s().p("AgvO+QgYgFgMgXQgNgWAHgXQAPgqAKguIAEgRIAPhZIAAgCIARirIhABlQgdAxgRAYQgdApgeATQgXAPgaABQgcACgXgNQgUgLgNgUQgNgTgDgXQgKg/AchpQAShDAdhTIA1iTQBvkpCJkdQAag2ArhUIBHiKIABAAQACgIAEgIIAFgHIAUgsIABgDIAHgQIAOg1IgCgQIAAgCIgBgGQgEgaAKgUQAFgIAGgGQABgTgBgSQgCgYATgSQATgRAYgBQAXgBATASQAOAPAEAcIABASQABAagCAaQgEAigJAkQAGBMgIBMQgEAqgJAqIACAIQASBOgIBKQgDArgLAsQgCBvgVC4QgOB6gFAlQgOBZgXBCQgLAigTAsIgiBNIg2CEQgmBmgjB1IgWBOQgJAYgTALQgNAIgQAAQgIAAgIgCgAj5J/IgBACQAAAAAAAAQABAAAAAAQAAgBABAAQAAgBABgBIAAgBgAgIgMIgBAEQhBCagtB9QgXA9gbBRQghBfgNAxIgJAuICpkJIAxhMQgRgDgPgOQgRgTgBgXQAAhDAYhJQAQgvAdhCIANgaIAEgXgACdIQIAAACIABgEgAB/ETIgKAsQAJgYAGgVIAFgOIgKAPgACiB/IAAAFIAAgDIABgEIgBACg");
	this.shape_12.setTransform(471.0633,91.8942,0.3725,0.3725,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#994F2F").s().p("AjvKKQgagGgagUQgYgTgOgYQgQgagCgeQgGgeAJgeQAUhvAehlQA6jEBhi+QArhWAzhRIAwhNQATghAOgdQAJgaAFgXIgBALIAEgZIgDAOIABgQQAAg6AsgwQAlgoBFgEQAbgBAeANQAdAMAUAUQAUAVAMAcQAMAdAAAcQAAAzgOA3QgFAVgKAbIgUAvQgUAugoBAIhDBrQg8BngyByQhRDJgnDVQgFAbgUAZQgSAVgaARQgfAUgpAAQgUAAgXgFg");
	this.shape_13.setTransform(478.7773,88.1025,0.3725,0.3725,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#994F2F").s().p("AkBZSQgsgKgigsQgfgogBgzQgHitANjGQATkiBDmMQAThtApjaIAfihQAPhQAJg9QAQiFgQiAIgIg3IgYhTQgbhYgOhBQgRhUgBhJQAAghAOgeQABgOAEgPIAQgkQAFgLAIgJIgMggQgwh5gPgqQgghdgQhLQgNg+Acg1QAVgoAzgVQAtgUA0AMQAZAGAbAUQAcAVAKAWQAyBuAoBrQA8ChApCuQAYBSATBeQATBhATCPQAMBdAOCHIAYDlIBkOsQADAcgOAeQgLAZgWAXQgmAqhEACQgMABgNgCQgTBUgdBIQgyB9hABtQgfA1haCMQglA5g1AMQgUAEgUAAQgTAAgUgEg");
	this.shape_14.setTransform(476.1886,35.4917,0.3725,0.3725,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#994F2F").s().p("AAVLfQgcgMgUgUQgWgUgJgdQgOgaABgfQAKhfACgyQADhLgHg9IgBgJIgHg6QgGg3gBgrQgDhOgJhJIgBgKQgVibgMhNQgOhagFgZQgKgzgPgoQgIgPgJgPIgLgMQgpgngDhDQgCg3AugzQASgUAfgMQAdgMAcAAQAdAAAcAMQAbAMAVAUQBPBLAkCBQAPAzAQBsQANBQAPBrIAQBvQAJBAADAuQACAWACBGQABAxAEAhIABAIIAJBDQAGA6AAAuQgBA1gNB6QAAAogUAjIgYAfQglAohFAEIgEAAQgaAAgbgMg");
	this.shape_15.setTransform(481.16,0.277,0.3725,0.3725,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#994F2F").s().p("ADRGNQghgEgYgPQg6glhOg+QhCg1g6g+QgSAYgaAQQgaARgeABQgTAGgVgGQgegBgZgRIgfgXQgUgSgMgfQgMgeAAgbIAKlDQACg9AqgtQAmgpBEgDQAbgBAeANQAdAMAUAUQAUAVAMAcIAFAMIAHAHIAYAfQAoBKAvBBQBRBlBmBRQAnAcAnAZQAyAfATA7QARA2ggA9QgNAYgZATQgZATgbAHQgTAGgVAAIgTgCg");
	this.shape_16.setTransform(568.1482,4.7744,0.3725,0.3725,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#994F2F").s().p("AKEHtQgdgBgagRIllk4IgygsIgggcIALAIIgRgNIgBAAIgBAAQmHAUmDgHQg8AAgugsQgWgTgJgdQgLgRAAgUQgGgdAJgeIAPgkQANgYAZgTQAXgRAdgJIACgBIgcgFQgagEgZgVQgWgSgRgaQgfgwAQhDQAGgaAUgaQATgYAYgOQAZgQAfgCQAdgGAfAJQBqARCGAYQGvBRGgBwQAmAKAcAcQATATALAXQAcAJATAWIAYAeQA6BZA3CBQApBjAXBnQAHAegDAdQgEAggPAYQgVAhghAVQgaARgeABQgKADgKAAQgKAAgKgDg");
	this.shape_17.setTransform(687.5321,-60.4761,0.3725,0.3725,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#994F2F").s().p("AhpBqQgpgmgDhEQgBgaANgeQAMgdAUgUQAVgUAcgMQAcgMAcAAQA6AAAwAsQApAlADBEQABAcgMAeQgNAcgUAUQgUAVgcALQgdAMgdAAQg5AAgwgsg");
	this.shape_18.setTransform(838.4004,36.8471,0.3725,0.3725,0,0,180);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#994F2F").s().p("AhpBqQgpgmgDhEQgBgaANgeQAMgdAUgUQAUgUAdgMQAcgMAcAAQA6AAAwAsQApAlADBEQABAbgMAeQgNAdgUAUQgUAVgcALQgdAMgdAAQg5AAgwgsg");
	this.shape_19.setTransform(838.4004,35.1521,0.3725,0.3725,0,0,180);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#994F2F").s().p("AlFMSQgggFgZgOQgYgOgTgYQgSgYgIgcQgyitA7jZQAQg8AdhNIA0iGQAlhaAag0QAmhNAqg4QArg5A/hIIBuh8IDMjmQAlgpBFgDQAvgCAsAiQAmAdAQAxQARA0ggA/QgyBkg4BUQgaAmhWBzQgfAqgSAiIgoBPQgrBShMBLIg1A2QgXAWgQATQgNATgJASIgIAWIgLAcQgHARgGAKQgKAQgOARQgTA/gJA0IABgLIgEAYIADgNQgGA6AFA1QADAUAGAVQARA5ggA7QgZAwhAAVQgRAFgTAAQgLAAgMgBg");
	this.shape_20.setTransform(817.8255,-63.1588,0.3725,0.3725,0,0,180);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#994F2F").s().p("Al8JHQgYgNgTgZQgTgZgHgbQgIgcAEgfQAEggAPgYQAohDAwhMQBLh2BaiAIBTh2QAlg4AXgxQATgtAThEQAZhUAKgbQAPgoATgbQAXggAggTQAogYAwAAQAWAAAUAFQAPgFARgCQAcgDAfAHQAaAGAZAUQAYATAPAYQAQAZABAfQAHAdgJAfQg5CZhpBoQgUAWgcAJIgBABQgkBTgtBBIg5BSIg5BRQh1CthmCpQgeAyg8ATQgTAGgTAAQglAAgogVg");
	this.shape_21.setTransform(815.2596,-68.0204,0.3725,0.3725,0,0,180);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#994F2F").s().p("A7TJpQgogLgagcQgdgcgKgnQgKgnAKgoIAHghQAFgxgEgyQgIgvgSgvQgLgYgNgWQgfg2ARg7QAQg6A0ghQAYgPAhgEQAfgEAcAIQAbAHAYATQAYASAOAYQBDBwASCEIAFAtQFXgzDvgoQGBhBE0hHQFphSE9hoQCWgyC1hHQB1gvDRhXQDNhWB6gvQC1hFCYgsQA7gRA2AgQA1AfATA7QAIAbgFAgQgEAggPAZQgOAYgYATQgYASgbAIIhTAZQiUAui3BJQhdAljpBiQl+CfkVBYQk5BilvBRQkxBDmFBBQjIAgnzBKQgUAGgUAAQgUAAgUgGg");
	this.shape_22.setTransform(774.3194,24.0206,0.3725,0.3725,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#994F2F").s().p("A2cL4Qg1gMgsgdQgrgagbgcQgYgYgegtQgVgegUg9QgOguACgtQABgUALhIQAXhQA6g7QA7g6BQgXQCCgfChgqQEOhGD1hKQBwghCQguIB8goIBOgaQAbgPAngaQApgbA4gYQEHh1EnhkQAOgSAQgRQA1gsAkgZQAygjAvgVQBKgrBVAAIBUALQBQAWA7A7IAxBAQAjA2ADA/IADAPQBogKBhgDQBWABBIAqIBAAxQA7A7AWBQIAMBUQACBBgeA4QgSA6gvArQgrAug6ATQg6Aeg/gDQiUAFiTATQjsAikXBHQi7Avk1BbQl0Buh6AiQjQA4kmBAQicAhhfAjQgqARgVAHQgzAQg5ACIgIAAQgzAAgxgNg");
	this.shape_23.setTransform(758.17,10.8842,0.3725,0.3725,0,0,180);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#994F2F").s().p("EggsAboIhLggQg4geghgzQgpgsgPg/Qg0i9gWj1QgQixANi6QAZl1BulWQBrlLCzlBQCRkEDLkLQBbh2BbhvIASgmQASgiAdgpIA2hGQAigqAoghQBWhIA5ggQBxg9CCAeQAkAIAfASQAngRAagHQAggIBFgGQAMgCAKABIAvAGQAbACAUAFQAEAAAGADQAwAPAgASIAIAGQAtAdAXAYIAIAJIAgAlQARAXAJATIAVAvQAMAcAEAVIAHAvQB8g2BcgdQDchHESgVQBCgCA4AdQAoALAdAdQAkAVAVAkQAdAdALAoQAeA5gDBBIgDAWQB4gnB7gZQA/gTA+AOQAqAAAmAVQAoALAdAeQAYAOARAUQAtARAjAgQA0AhAdA3QAWAmALApIBzgQQB7gQBdgDQBDgCBkATQBTAPBBAtQA5AqATASQAJAJAKANIARAXIASAXQALAOAGAKQAMAVAbBEQAJAZAFAkIAHA+QADAaAAAWQgCAmgHAyIgNBYQgJA6gLA5QgTBugcBzQg2DhhQDaQgWBQg7A7Ig/AyQgzAhhDAHQg9AGhAgPQg9gOgugqQg0ghgdg3Qgjg3gDg/QgOg+AUg/QAuiaAnibIg+AFQgXABgZAAQACAUgBAUIgLBTQgPA+gqAtQggAzg4AeIrYF9Ip4FMQl1DFkDCDQleCylGCDQlVCHkuA/QgpALgqAAQgqAAgqgLgA3pFyIB0g/QgeAHgdAKQgWAKgUANIgMAMIAAgBIAAABIAAAAIgDALgA0WlGQA7ABBXAIICRANQCBAKB0gKQBrgSCBgmIAzgQQgRgagJgeQgeg4ADhBQgBgWADgWIgVgEQgqAAgmgWQg7gTgqguIgyhAIgfhLIgMhUIgGhWIjCBvIgEACIg3BGQg1BGg3BNQh5CthiCtQA4gFAtAAIAIAAg");
	this.shape_24.setTransform(758.2668,-25.1926,0.3725,0.3725,0,0,180);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#994F2F").s().p("EAYbAoSQgrAAglgWQhMgfgyhCQhEhXAAhnIAMhUIAfhLIAIgMIgCgIIgKgRIgDgFIgFgEIgdgQQgggLgjgHQhHgFhPAIQguAHgjADQhUAAhLgrQgXgNgUgRQggA4giA4Qg1BYhhAoQglAWgrAAQgqALgpgLQg/gCg3gjIg/gyQgygxgfhaQhgkPgkl+QgUjlAIktIADhZQjuhMkAhsQhegnhggsQgBAXgDAYQgKA8gfA7QgXArgqAiQglAfgxAVQhgAphtgZQg9gOgugrQgzghgeg3Qh2ighnigQhBhkg8hnQgKAdgRAcQgrBKhHApQhHAqhYACQg0ABgqgNIg/CHQgkBKhCA4QhGA5hOARQhBANgmgCQg3gDgjgKQgdgJg3gZQghgQgoghQgPgGgNgIQg0gegmgzQgkgugSg5IicjHQg7g6gWhRIgMhSQgCgyAUg0QARguAhgrQA9hQBnghQA/gUA+AOQA/ADA2AjQBiBHAtAuIALALIA0hxQAYgzA3goQAwgiA9gUQAWgHAXgDQAPg9ATg7QAihmBLg7Qgwh2gsh5QgVg3AMhFQADgXAHgWIkAmNQghgzgHhDQgGg8AOhBQANg5ApgyQAlguA2gjQAxgfBFgJQBCgIA7AQQBvAfBNByQCEDEB2C/IAcAvIAAgCIABgHQgWgqgFg0QgFg0AKg4Qgeh5gih5Qghh3BBh8QAXgqAqgjQAlgfAxgVQBggoBtAZQA3AMA1AqQAvAmAhA0QBKB0BLB6QAAgsASguQARgvAhgqQA+hQBlghQBAgUA+AOQA/ADA2AjIA6AoQAkgtA0geQAjgVAmgKQgEgaAAgaIALhUQANg5ApgzQAlgtA2gjQAxggBEgIQBCgIA6AQQA6AQAyAnQAzAmAeA0QDyGhC8G2QArBKAABVIgLBUQgKAvggAsQgdAogqAgQg3AqhDAQQBwJLgbKFIgGB/IBcARQAUgRAYgQQAzghBDgHQA8gGBBAPQA3AMA1AqQAhAaAYAeQBuAGCnAGQDIAIBjAFQCmAJCFAPQBzAMAxAHQBdANBGAUQBYAaBgAwQAnATAqAeQAcAUAuAnQAoAgAhArQAlAuARAYQAdAoASAjQBGCJAaCBQAZB/AHCWIALAYQALAcAFAaQALA7AAAmQABAvgNAxQgmCQiQBgIgRALIAIALQA7A7AWBQQAXBUgXBTQgWBQg7A7Qg6A7hRAWIwjCZQglAMgkAAQgbAAgZgGgAeUdwIAzgHIgngGIgRgDIAFAQgAa6PTIAXA2IAWAGIBLAgQB8A6B8BJIBOAwIAjgWIBjhEQAjgVAjgRIgVgjQgOgPgOgNQgUgNgWgLQhGgXhcgPQiogUjrgMIAGAOgAAcjkQgHAegQAdQAHAgAAAiIgLBUQgIAngXAkIBHAZQAFirgCiUIgNgFIgDAPg");
	this.shape_25.setTransform(610.0507,-0.5964,0.3725,0.3725,0,0,180);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#994F2F").s().p("ABTbSQgfAAgagPQgpgOgfghIgjgtIhVidQgIgKgGgMIhSiZIgNAPQg4A8hnAGQgpACgtgUQgrgSgegeQghgfgOgqQgVgoACguQghkDAykPIAAgBIgSApQg6CBhtB7QgnArg/AQQgaAGgaABIgNALQgbAWgjAPQgaAPgfAAQgeAJgegJQgsgBgngZIgugjIgjguIgXg2Qg4jUgNjSQgaAPgaALQiLBBhnAOQguAPgsgLQgfAAgagPQgcgHgWgWQgYgOgQgaQgeghgKgsIgIg8QAAg0Aeg9ICakpQEPoHEnoMQAphKBdgdQAqgOAvAIQAOACANADIDqm3QATglAmgcQAigZArgOQAugOAsAKQAfAAAaAPQAqAPAeAgIAjAuQAZAmACAsQAKAMAIAPIAWA2QAcBkAUBoQAcCSANCNQAHgMAIgLQAcgmAkgTQA3gdA7gCQAZgBAXAGQAHgVALgSIAjguQAfghApgNQAagQAfAAQAugKAsAOIA1AXQBFAkAjBiQAzCPA1COIADgBQA6gPA7APQAagTAhgHIA7gIQAvgCAoAVQAYAIATANQAcgkAngZQAlgYAugCQAegIAeAIQAuACAmAYIAtAkQA/BDA4BHQARgEAQAAQAjgbArgMQA8gQA8AQQA4AQArAqQBPBFBWB3QAcAlAZAtQALAIAKAKQAtAsARA9QAJAjgBAdIgDAgQgDAVgDAKQgJAggQAbQgMAWgYAaQgqAqg5ASIgOAQIhRBgQhGBWhVBuIAEgFQhRBqhQBvQlFHHkJH1QgWAogkAXQghAegsAKQg7AOg8gOQhDgPgyhBQgeghgLgsIgIg8QAChfAIhrQAJhtAOhpQgFgNgEgNIgCgHIgKAeIgdDKQgOAwgeAkIgYEKQABAvgVAoQgNApghAfQgsAog4ASQgZAIgaAAQgTAAgTgEgANbEaQAiANAeAXQAkAYAWAnIAJAVQCNjLCgjLQgagOgVgWIgPgVQggAdgoAOIAAAJQADApgTAsQgSAnggAiQgdAhgrAOQgbAPgeAAQgsALgtgPIg2gWQgkgTgdgnQgcglgLgoQgIgigLghQgRAQgWALQgZAOgcAIIBaEDQArgTAygCIAHgBQAgAAAhANgAn7DmIgaAiQgOBFgMAyIAAADQAlgdAtgQQAAhVgFhWQgIAfgRAdg");
	this.shape_26.setTransform(554.9501,-7.3375,0.3725,0.3725,0,0,180);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#994F2F").s().p("EAm+AHbMgrxgG9IuDCnQgPACgDgNQgEgOAOgEQE0hmEuhTIq0huQibAAh9ACQovAInMApQgOABAAgPQAAgOAOgCQGFg0GHglQKshAK/gVQEjgIEkAAQjggajigXInUgGQgPAAAAgOQAAgOAPgCIAhgEIhygJQgPgBAAgPQAAgPAPABIDmATIAjADIAEAAQC9gUC4gPQPahPPeA6QAPABAAAOQAAAOgPABQk8AckzAqIWkARQANAAACAOQABANgMADIh6AYQnOBYoaAoQm4Aho3AEInBBTQCBAWCCASQOBCHOWAfQAPABAAAPQAAAPgPgBQj2gIkSgSQp+gqp8heIBJAPQImB1H/BdIEJAxIEIAsQEOAtEMAoQAOADgEAOQgEANgLAAIgDgBgAL7CqQmphWmmhfIiHAYIPWCdIAAAAgAvUB8IJKhsIiKgVQjhA8jfBFgAnNgZICbAZICWgcIhLgRQgOgDAEgOQAEgOAOACIChAdIFuhFQijAAi+gCIgyAAQi2Ari0AwgAoWgkQCcgrCdgmIlSgFQkugEjzgBgAy3jVQmkAcmgArQEUgLE3gDIA8gBQADgNAMgBIXvgeQCHgdCHgaIjjgCIgPAAQqrAAqyAtgAORjYQAMACgCAOQgCANgMABIr/APIh1AaQEDACC4gBICJgaQAOgCAEAOQACAIgDAEQIQgHG0glQHKgmGWhMI3RgSQhnAQhnARIDTAQQAOABAAAPQAAAPgOgBQiXgFiYgEID6AkgArXiaIEgAEIFSAEIBdgWgAEqjMIGwgJIjageIgKgBQhmAThmAVgAJ7krICVgZIovgHgAmXl9IC0AOISiAPQEwguE2ghQi4gIiygDQiGgDiGAAQqkAAqiBAg");
	this.shape_27.setTransform(647.2319,-42.9603,0.3725,0.3725,0,0,180);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#020202").s().p("EBPiAzxQg3gSgbgzQgbg0ARg4QAWhMAViNQAqkYgElSQgLw0nDzjQk3tgmtotQmsouobjwQnJjMnzAsQicANiPAlIhxAkQg0AVgzgUQg0gTgZgyQgxhdhyhsQjgjVlWhzQndihqMBAQtaBUxAHUQxRHdqIL3QqHL5ixQEQhbIPArIzQAcFvBOFCQZXk9U+pqQQAnYMZplQGBkrE+k/QBUAKBHANQBmASBPARQl3GQneFzQtBKIw1HtQ2LKJ60FBQg1AKgtgcQgugbgQgzQhOj6gvlrQhcrPB0qxQCfupIgrvQLMvdUvo7QcpsVSlD8QGlBZE3DZQDUCTCHC6QERhPExABQHPABGuC+QJTEIHUJWQHUJWFMObQHbUlAHRjQACFlguEpQgaCigbBWQgOAtgmAbQglAbguAAQgTAAgXgGg");
	this.shape_28.setTransform(656.2002,-41.2537,0.3725,0.3725,0,0,180);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#020202").s().p("AFgHLQhFgrg0gZQgngTgpgRQgfi+gaiyQhtCMh8CKQhbgVhegSQhQgOg/gJQDqj0CsjqQBWh1AqhHQAXgnApgTQAqgTAtAKQAtAKAfAiQAeAiAFAtQAtGtBeIAIh0hLg");
	this.shape_29.setTransform(616.0367,-63.1478,0.3725,0.3725,0,0,180);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#020202").s().p("AFAYwQkvhSlTjrQmukqlLu7Qjvqtimu7QA+AeBlBCQBwBJAwAaIAXB1QhvgDg3AAQgXAAgOAPQgMAOAAAUQABAwAwADQBXAGBnAKQCoMdDWIiQEKKoE1DWQEaDED0BIQDzBHDGg2QC0gyCGiZQBEhMAfhFQAYg1A3gVQA2gUA1AXQA2AYAUA2QAVA2gXA1QgvBphfBtQi7DYkGBKQh9AkiGAAQiUAAifgrg");
	this.shape_30.setTransform(554.2105,15.0591,0.3725,0.3725,0,0,180);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#390075").s().p("Ag+AvIBAh2IA8ARIgTAeQgmA3gXApg");
	this.shape_31.setTransform(769.4095,441.4984,0.3725,0.3725,0,0,180);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#020202").s().p("EAJSAg6QtaovpXuyQkundjhoqQipmfhymuQoJMTv3HPQlECSlUBiQi1A0h9AWQgwAJgugQQgugQgggkQgggkgLgvQgKgvAOgvQEZuxGsvzQDWn7CilGQAfg/BBgaQBBgaBDAXMBy4AojQBCAXAiA8QAiA9gOBEMgGtAhNQgFAagMAYIktI7QgXArgpAbQgqAbgxACQiWAIibAAQ3BAAxhragA2G8mIAnDJQA3D6BSEJQEFNMGzKqQKhQlPXIDQPWICT5gpIDunFIGI+VMhUogd3gEg1ggYOQkmLMjbKrQJqi6HzlKQLpntEyrMQATgrAkgeI0ynVQi8GQjAHUg");
	this.shape_32.setTransform(685.1743,22.7699,0.3725,0.3725,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#994F2F").s().p("ANCf5QuNofp3vkQnCrHkKtkQhTkQg3j+IgmjIQjkIVnGGjQltFQnuD4QljCymCBzQh7AlhxAbQg/AOghAGQEZuxGovpQDUn1Cck4MBy4AojMgGtAhNIksI7QiZAIiUAAQ0uAAv/phg");
	this.shape_33.setTransform(685.175,22.7785,0.3725,0.3725,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#070707").s().p("Ege8BGvQo5iMn+kKQnUj0mFlMQlnkzkAlfQjylNhylBQj6rFBEvvQBEvuGA0HQEZuyGsv0QDWn6CilGQAfg/BBgbQBBgaBDAXMBy4AojQBCAYAiA8QAiA8gOBEIl/dtQE9AMEABQQFoBxC6DrQCQC2AdDvQAdDvhXEjIAAAAQjlL9pCFeQlhDWmQAYQqwJzrPGmQrPGlriDQQrDDHq6AAQpSAApAiPgEg50gzCQlMM6jlMCQlqS8hGPCQhGPDDjKCQBmEkDmEwQDuE5FQEWQFkEnGpDZQHLDrHzB8QRPEQRvkbQXWl0WJ0fQAcgaAjgNQAkgNAlADQBFADBigQQC5gdCrhUQIYkHDSq+QA8jJgMiYQgNiYhWhtQiPi1lchLQkIg6kWARIgKAAQgrADgogRQgogQgdghQgcghgLgqQgLgpAIgrIGN+vMhuDgm2QjYHLjVIQg");
	this.shape_34.setTransform(676.7157,91.1074,0.3725,0.3725,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF8288").s().p("AgwDcQipglhphbQhphbAUhaQAUhcCGgmQCGgmCoAmQCpAlBpBbQBpBbgUBaQgUBbiGAnQhEAThNAAQhLAAhSgTg");
	this.shape_35.setTransform(848.6709,106.5442,0.3725,0.3725,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF8288").s().p("AhBEtQjngziPh8QiQh8Abh8QAch9C3g0QC2g0DmAzQDmAzCQB8QCPB8gbB8QgcB9i2A0QhcAahpAAQhmAAhxgZg");
	this.shape_36.setTransform(656.3609,155.7997,0.3725,0.3725,0,0,180);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#390075").s().p("EgeWBEWQoOiDnjj5QnAjml5k7Qljkoj7lPQj0lFhuk4Qhvk7gsl6QhMp6BssoQBrsnEgvHQClonDPouIACgEQDfpXEEpHIDanWIAKgTMBziAoxMgGsAhDQESgMEGAzQHGBXDID8QDvEtiYH5QhPELh/DWQkWHXnjC7QkBBlj3ABQxLP3yDHVQvEGIvNAAQpGAAoyiLgEg4Pg9OQjuIcjNImIgBAFQjTI1iiIgQkePChrMhQhrMkBKJ1QAtF3BsEzQBsEzDxFBQD4FJFeEkQF1E2G6DkQHdD1IICBQRyEaSQkiQYCl7Wt1BIAIgHIAKAAICEgHQCggSCcg3QHyivEcngQB7jPBOkHQCQnfjfkZQjIj8nWhOQkBgrjxAQIgMAAIgfAAMAGvghVMhyPgoVQhtDgiIE0g");
	this.shape_37.setTransform(676.7419,90.9976,0.3725,0.3725,0,0,180);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFB78A").s().p("EgdlBEFQoUh+nnj2QnDjjl8k5Qllkmj+lRQj2lGhwk+Qhtk1gtl7QhRqtCGt8QBwrvEGtuQCioeDTo5IAAAAQDhpdEEpGIDXnOMBy4AojMgGtAhNIALAAQCNgJCpANQEoAYDdBWQErB2B6DfQCXESh+GlQhQEJh8DSQkkHun+CwQifA3iiARIiCAGQ1PTq2vGiQq4DIqrAAQoiAAoaiAg");
	this.shape_38.setTransform(676.748,91.0954,0.3725,0.3725,0,0,180);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#050505").s().p("AqBQRQknh9jljkQjkjlh9koQiCkwAAlQIAAn7QAAhOA2g2QA2g3BNAAMAtuAAAQBNAAA3A3QA2A2AABOIAAH7QAAFQiCEwQh9EojkDlQjlDkkoB9QkyCDlPAAQlOAAkziDgAz9ndQAAEEBlDsQBhDlCxCyQCxCxDlBgQDtBlEDAAQEDAADuhlQDlhgCxixQCxiyBhjlQBkjsAAkEIAAlBMgn6AAAg");
	this.shape_39.setTransform(688.7884,261.3978,0.3725,0.3725,0,0,180);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#390075").s().p("AtcLgQmDkSidm/QhTjrAAkBIAAoVMAufAAAIAAIVQAACVgbCLQgzEAiHDgQiEDajGCiQjFCjjvBXQj2BakHAAQnYAAmEkTgA2dndQAAD4BQDlQCYGuF2EKQF3EJHIAAQD+AADuhXQDnhUC/idQC+idCAjSQCDjZAwj3QAbiIAAiPIAAnjMgs7AAAg");
	this.shape_40.setTransform(688.8215,261.3547,0.3725,0.3725,0,0,180);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFB78A").s().p("AtWLGQl2kNiYmyQhSjnAAj9IAAn8MAttAAAIAAH8QAACSgbCJQgxD5iDDbQiADWjBCgQjCChjrBXQj0BakGAAQnYAAl+kUg");
	this.shape_41.setTransform(688.8215,261.3547,0.3725,0.3725,0,0,180);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#050505").s().p("AgpG6Qg9gogOhHQgPhHAog8IgFAFIgBABIgCAAIgCgDIgCgIIgBgXIgBg6IgHhIQgGgtgLgmQgDgQgJgcIgOgvQgHgPgLgfQgLghgHgQIgphjQgZg2gTg0IAAgBQgEgLAEgKQAFgKALgEQAJgDAJADQAzASA6AdQAWALAeASIAzAgQAzAmAqAnIAsAsQAbAbAPAWQBdByAcCFQAQBPgMBPQgEAjgRAwQgHASgMAYIgiA0QgoA9hHAOQgTAEgSAAQgyAAgrgdg");
	this.shape_42.setTransform(437.7615,433.8881,0.3725,0.3725,0,0,180);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#020202").s().p("AibGQQg7gJg9gYQhHgag0grQhDg1gfg/QgSgogJgZQgMgkgDgjQgFgdAEgrQACgYADgLIAKghQAHgWAEgKIAPgdIAhgzQBBhQBig1QBYgwBbgVQALgDAKAGQAKAGACALQADAPgJAKIgCACQiUCfgaBpQgPA0AaAhQADAFAIAHIAOANQAFADAHACIANADQAbAHA+gFQA+gEBFgNICUgeQBygZAlgGIAUgCQBMgLA+AuQA+AtALBNQAJA6gbA1QgaAzgyAcQhTAuhmAeQhdAdhoALQgxAEgsAAQhDAAg6gKg");
	this.shape_43.setTransform(914.2099,437.3902,0.3725,0.3725,0,0,180);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#020202").s().p("ABFLrQgygOghgnQggglgegsQgggygSggQglhBgqhsQg8ijgTjPQgTi4AhjCQAbiqBfi0QAFgJALgDQAKgDAJAFQAMAGACAPIAAACIANCtQAIBfAQBGQAfCjA2CVQAYBBAjBSIBBCQIBiDWQAaA7ACAIIALAgQAWBEgiBBQghBAhEAWQgbAIgaAAQgZAAgYgHg");
	this.shape_44.setTransform(767.6117,344.3221,0.3725,0.3725,0,0,180);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#050505").s().p("AEmEDQhdgNh7g4QhNgkh4hNQhmhChZhCQhzhbhChCQgIgIAAgMQAAgLAIgIQAHgHALgBQA4gCBCADQAuACBIAHQBqALB8AWQCLAaBSAbQB+AqBPA3QA9ArANBJQANBJgrA9QgeAqgvAUQgiAPgkAAQgNAAgNgCg");
	this.shape_45.setTransform(599.6526,348.0242,0.3725,0.3725,0,0,180);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#020202").s().p("EgQ+AtdQonh3nhjuQiZhMiBhQQhDgpgpgeQglgbgTgqQgTgqAEguICX52IiXBNQgpAVgtgCQgugBgngYQgmgXgXgoQgWgngBguQgGqzmjpAQiDi1ieiUQgygugugmIgngeQghgYgUgkQgUglgBgpQgBgqASglQARgmAhgaQRzuCN/lBQF1iGF6g1QEcgoF9gCQCKgBDVgGQGrgKDHAPQE7AYFEBlQFsByH5D3QIID+McHKIBtA/QApAYAXApQAYApAAAvQgBAvgXAoQgYApgpAXQkgCkiqInQg/DMgmDpQgfC7gICUQgCAtgZAnQgYAngpAWQgoAWgugBQgtgBgogXIiIhPMgBtAgiQgCAugZAnQgZAngpAWQqpFqq4CpQpUCQpQAAQn9AAnihpgEginAAmQAwADAoAbQAoAbAUArQAVArgFAwIiqdKQDEB5D4BrQF3ChGWBWQMXCpMnh9QMnh8MqmfMAB3gjdQACguAZgmQAYgnApgWQAogWAuABQAuABAnAXICVBYQAzlnBmksQCQmmDjjuQrXmfndjnQnOjhlOhnQkohckhgVQi1gOmEAJQjbAGiLABQlTACj+AjQlRAtlMBzQsdEUvuMAQEOD8DAFBQEWHRA+ITIDEhlQAmgTAqAAIAKAAg");
	this.shape_46.setTransform(679.8833,358.5269,0.3725,0.3725,0,0,180);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B87BFF").s().p("EgQZAqxQoUhznQjnQiShIh5hLIhcg8ICz+0ImxDfQgFnsjIm8QiWlNj3kZQiaiviZh0IgPgLIABgBQRctwNqk4QFoiBFsgyQELgkFqgDQB8gBESgGQDfgGB4ACQFlAGE2BPQF0BfIGD2QIeEBNnH1IBuBAQi6BpiNDgQiDDShbExQhKD9gnEkQgUCSgFBeIl/jgMgB8AlCQu7H7vHB0QkYAhkUAAQnmAAnahng");
	this.shape_47.setTransform(679.8916,358.5473,0.3725,0.3725,0,0,180);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#020202").s().p("EgN1AtnQooh3nijvQiahMiBhPQhDgqgpgeQgogdgUgsQgUgtAFgxICU5jMguzAX/Qj0D2kWC1QncE1luguQiTgSh9hNQijhmhujDQiWkMAij6QAhjqDHj9QCtjbFakgQDVizITmSQHmlwEVjbQHbl3GalkQE9kUEwjwQR1uEOBlCQF2iGF7g0QEcgoF+gDQBpgBD2gFQGsgLDHAPQE8AYFEBlQFtByH6D4QIID/MdHKIBuA/QMHHEJ+HlQJzHcG+HXQG+HXDlGsQDqG0gMFiQgHDfhtCsQhtCrjFBiQnwD2oJnhQkwkYjsmzMglegV+MgBsAgRQgDAxgaApQgbApgrAXQqqFrq6CpQpUCRpTAAQn6AAnnhqgA/aAcQAzADAqAcQAqAcAWAuQAWAugFAzIipdEQDFB5D2BpQF0CfGSBVQMTCnMjh7QMkh8MmmcMAB3gjXQADgwAagpQAagpAqgXQArgXAxAAQAxABAqAZMAqTAYzQAvAbAZAyIBjCrQB6DFCBCWQGbHdFFiiQBpg0A1hVQA2hVAEh5QAIj8i6laQjDlul/mdQtxu54auNIhrg/Qr8m3nwj0QnijulXhsQkyhhklgYQi4gOmKAJQj5AGhtABQlgACkHAmQlfAylcB+QtEEww3NTQkmDok5ERQmgFpngF7QkWDbntF2QnfFrjYCxQkrD1iTCpQiiC7ghCaQgiCeBaCiQA+BvBQAzQA4AjBGAIQDsAeFxj1QEFitDNjVQAVgWAcgPMAz7gamQAogVAtAAIALABg");
	this.shape_48.setTransform(687.4883,358.5347,0.3725,0.3725,0,0,180);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#390075").s().p("EgNVArKQoShznUjnQiThJh7hMIhhg/IgLgIICw+UMgzPAaQQizC6jpCoQmyE4lEAAQgnAAglgEQkNgiickWQgbgwgSgsQgQglgLgoQg4jCBKjDQBFi2DCjSQCoi3Eyj4QC+ibHPlfQHiltEdjgQHcl4GdlnQFGkaEhjlIAfgYQRNtgNfk0QFniBFtgzQERgmFugCQBwgBDzgFQFRgJCdAHQD9ALDpA1QIQB3NmHFQGuDhIyFDIBuBAQYbOON2OtQF7GTDaF2QDJFXAsEZQAbCsgiCPQgiCPhcBnQgRATgQAPQhCA+hZAsQm4Dbnin8QieimiRjjQhSiAg5hvMgpqgYbMgB7AknIgNAGQqXFhqlCkQpECNpAAAQnrAAnThmgEgiBAh8QCyB5EKB5QHdDaIUBkQLUCJLnhkQOXh7OHndMAB+glcMAq+AZLIADAHIBwDBQCKDeCXCoQDSDoDMBcQD/BxDnhyQBTgqA8g5QARgQAMgOIABAAQCsjBgzlHQgqkJjGlQQjZlxl3mQQt6uz4KuEIhtg/QoqlAm0jjQnOjxlOiJQk/iCkFg8Qjlg0j7gLQicgHlWAIQjZAGiKABQlrACkOAmQlpAzlkB/QtXEyxENZIgfAZQkrDsk6ERQmcFmnfF6QkRDXnvF3QnGFZi7CXQkuD0ilCxQi/DMhGCvQhKC6A1C2QAKAiAPAmQATAtAXAqQCQD/D0AfQFDApHYlSQCUhrCRiEIB3hyIAHgFMA0jga7g");
	this.shape_49.setTransform(687.449,358.4212,0.3724,0.3724,0,0,180);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFB78A").s().p("EgNQAqxQoUhznRjnQiRhIh5hLIhcg8ICz+0Mgz7AanIgzAzQhBA+hIA/QjoDIjaB6QkyCsjqgJQkkgKilklQgagtgSgsQgQgpgKghQhOkPDAkfQCkj2G+lrQCpiKEkjfQFikMDFiXQLwo/I5nuQE5kQEtjvIAfgYQROthNkkzQFlh/FpgxQEIgkFogDQD1gBGGgKQE5gCDrAnQEkAxFZCEQFzCPISEUQGjDaI8FJIBuBAQPSI6LfJdQKiIqGWITQF8HxBbGSQBZGHjJDhQgUAWgLAJQhAA+hWApQjxB4kHh0QjThdjXjvQiaiqiMjiIhujBMgkUgVSIAAgBIl/jgMgB9AlCQu7H7vGB0QkYAhkVAAQnlAAnahng");
	this.shape_50.setTransform(687.4286,358.4397,0.3724,0.3724,0,0,180);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("EgEVBwTQ9ph6zpoIQzpoGpQuKQqzwfDM4bQBLpGDNqwQB3mOD2qoQBgkIAlhsQA/i5AchvUADigNyAC1gtIQBa2oAv0YQAChKA1g0QA0g0BKgBIABAAUABxAAABCHANfQh5gBjwAAQgXAAgOAPQgMAOAAAUQAAAVAMAOQAOAPAXAAQGCAAC9AJQFBAND8AsQCoAdBzAeQCcAoB2A1QBCAeCPBeQCCBVBRAfQBtApCFAnQhbADiQgDIjrgFQgYABgOAQQgMAPACAWUhJ1gPJgOegCvQg+ZWhlW0UgCrAmsgDVAM/QgfB7hCDBQgpB4hhEKQjpKFhxF4QjEKKhLIiQjLW6JwO5QIeM8SgHdQShHecNB0QbNBwTEleQTElfKjsnQN1wigw84QgRqOiIrtQhMmjiXpjQg8jygShYQh7pmBF8gQAow2BcyzMgu7gJpQDSAcE3A7IIIBhQAXAEARgNQAQgMAFgTQAFgUgIgPQgJgSgWgDQhrgUkHgyQjrgtiGgWQAvgIAfgHQAkgIAAgoQAAgogkgJQkLg7jChHQhBgYhPgvIiIhWMA30ALeQBFAOArA4QAqA4gGBHQhNO+gxQnUgBjAhIACBAJ/QAMA+A+D9QCeJ/BPG5QCNMVAOKzQAmeivDR/QqIMIw/GGQw/GH3lAAQmPAAmzgcg");
	this.shape_51.setTransform(666.631,179.0725,0.3725,0.3725,0,0,180);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#390075").s().p("EgEVBwTQ9ph6zpoIQzpoGpQuKQqzwfDM4bQBLpGDNqwQB3mOD2qoQBgkIAlhsQA/i5AchvUADigNyAC1gtIQBa2oAv0YQAChKA1g0QA0g0BKgBIABAAUABxAAABCHANfQh5gBjwAAQgXAAgOAPQgMAOAAAUQAAAVAMAOQAOAPAXAAQGCAAC9AJQFBAND8AsQCoAdBzAeQCcAoB2A1QBCAeCPBeQCCBVBRAfQBtApCFAnQhbADiQgDIjrgFQgYABgOAQQgMAPACAWUhJ1gPJgOegCvQg+ZWhlW0UgCrAmsgDVAM/QgfB7hCDBQgpB4hhEKQjpKFhxF4QjEKKhLIiQjLW6JwO5QIeM8SgHdQShHecNB0QbNBwTEleQTElfKjsnQN1wigw84QgRqOiIrtQhMmjiXpjQg8jygShYQh7pmBF8gQAow2BcyzMgu7gJpQDSAcE3A7IIIBhQAXAEARgNQAQgMAFgTQAFgUgIgPQgJgSgWgDQhrgUkHgyQjrgtiGgWQAvgIAfgHQAkgIAAgoQAAgogkgJQkLg7jChHQhBgYhPgvIiIhWMA30ALeQBFAOArA4QAqA4gGBHQhNO+gxQnUgBjAhIACBAJ/QAMA+A+D9QCeJ/BPG5QCNMVAOKzQAmeivDR/QqIMIw/GGQw/GH3lAAQmPAAmzgcg");
	this.shape_52.setTransform(666.631,179.0725,0.3725,0.3725,0,0,180);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#994F2F").s().p("EgEMBtaUg76gD4gRFgczQmwragCvXQgBsAELvAQB+nHD0qjICinEQBOjgAhiDUADogOHAC2gtnQBb20Atz/UABkgACBdeATKIAWAJQBtAqCFAmQhbAEiQgEIjrgEQgXAAgNAPQgMANAAAUQAAAxAwADQEmASGUBHQDnApHNBYQAXAEARgNQAQgLAFgUQAFgTgIgQQgJgRgWgEQhrgTkHgyQjrgtiGgXQAvgHAfgIQAcgFAHgeMArHAI3QhNOvgxQ0UgBkAhnACEAKWQAbCFB+H4QCDIoBJHUQDmXAj3RQQlRXhy4MHUgTgAMighigABQmQAAmvgbg");
	this.shape_53.setTransform(666.5488,179.0709,0.3725,0.3725,0,0,180);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#390075").s().p("EgELBtzQ9Ch4zJn1QzKn1o6toQqWvzDL3xQBMo2DJqgQB0mEDwqZQBekBAqh5QBAi8Aeh1UADkgN8AC2gtWQBb2uAv0cIABgYIAYAAUABSAAAA8WAMSQANAPAWAAIAkAAIe9GVQA6AhAzATQA2AVBbAeUha5gSogGZgBAQg1WlhfW0UgCzArOgDeANlQgfB2hAC8QgrB+hdD/QjvKUhzGBQjIKbhLIyQjLXjKNPmQIzNdTAHwQTAHuc1B4Qb1BzTmltQTmltK9tHQOWxKgr9mQgQqeiKr+QhNmtiapwQg7jrgShXQh/p8BY/yQAvw2BUwtMgq5gI0QASgTgGgdUAlLAHoAGBABQIAWAEIgCAWQhNPEgxQvUgBjAhZACDAKNQAOBDA+D9QCcJzBNGxQCLMEAPKjQAqdzuhRXQpwLrwgF4QwfF42/AAQmSAAmngbg");
	this.shape_54.setTransform(666.6476,179.0209,0.3725,0.3725,0,0,180);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A1523F").s().p("EgEMBtaUhOfgFFgE9gv0QhovsGg1gQBxl3DepnQDEocAtiuUADngOHAC2gtoQBb2zAtz/UABggACBdjATKIAWAJQBtAqCEAmQhbAEiPgEIjrgEQgXAAgOAPQgMANAAAUQABAxAwADQElASGUBHQDoApHNBYQAWAEARgNQAQgLAFgUQAGgTgIgQQgJgRgXgEQhqgTkHgyQjrgtiHgXQAvgHAggIQAbgFAHgeMArHAI3QhMOvgyQ0UgBkAhnACFAKWQAaCEB/H5QCCInBKHVQDlXAj3RPQlRXiy3MHUgTgAMighigABQmQAAmvgbg");
	this.shape_55.setTransform(666.5719,179.0286,0.3725,0.3725,0,0,180);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#994F2F").s().p("EgcJBfIQw8hbs4laQpMj3mQlfQh8huhbhqIhChVQFgj0BQopQAZitgFi4IgKiUQiHkfiGlvQkOrfAAmTQAAk7hyzGQhyzEAAljQgEjAAAh3QgBjbAPi2QAroTC/nUQIo1IcVvCQPMoENahkQKuhQJGC9QGgCGFDEAQCiCABOBkQLjjlJ3DbQIyDEHQIlQGWHgE+LdQEPJxDBMCQCjKLAnJFQAhHtg3HpQgmFbhpHlQiMKNgWB/Qh0KQEYMuQBXD+B1DwQA6B3ApBFQgoBVhyCIQjkEQlwEDQoEFprSEaQuHFgyZDOQzFDWwWAAQmRAAl2gggEAT0gpVQgMAOAAAUQABAwAwADQElASGUBHQDoApHNBZQAWAEARgNQAQgMAFgTQAGgUgIgPQgJgSgXgEQhqgTkHgyQjrgtiHgXQAvgHAggHQAkgIAAgoQgBgogjgJQkLg8jDhHQhTgeh+hRQiThfg5gcQh2g5ibgrQh1ghingfQkDgxkzgRQiRgIi2gCQhugCjbAAQgXAAgNAQQgMAOAAAUQAAAVAMAOQANAPAXAAQGEAAC9AIQE/AOD9AsQCnAdB0AeQCbAoB2A1QBDAeCOBdQCDBWBRAfQBtApCEAnQhbADiPgDIjrgFQgXAAgOAPg");
	this.shape_56.setTransform(651.584,65.0914,0.3725,0.3725,0,0,180);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373737").s().p("AlRBqQgagEgQgWQgQgVAEgbQAEgaAWgPIAGgEQAWgNAZgLQAZgMAUgHQArgQAzgNQBfgXBiACQAUAAAcAEIAxAGIAwALQAbAGATAIQBHAWBiBBQAKAHADALQACAMgHAKQgGAJgLADQgKADgKgGIgCgBQhigzg+gNQgQgEgZgDIgqgGIgqgBQgZAAgRACQhSAGhSAbQgvASgeAPQgSAJgTALQgVAMgLAIIgBABQgRAMgUAAIgLgBg");
	this.shape_57.setTransform(530.5587,50.4268,0.6209,0.6209,0,14.9963,-165.0037);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373737").s().p("ABSBrIhUgaQgzgWgbgWQgngcgVgkQgXgqAEgnIAAgBIABABQALAjAgAaQAaAVAlAJQAZAHAsACIBHgGIADAAQAZgDAVAQQAUAPADAaQADAagQAUQgQAUgaADIgGABQgJAAgIgDg");
	this.shape_58.setTransform(645.9646,125.2576,0.6209,0.6209,0,14.9963,-165.0037);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AhGBrQgegtAAg+QAAg9AegtQAdgrApgBQAqABAdArQAeAtAAA9QAAA+geAtQgdAsgqAAQgpAAgdgsg");
	this.shape_59.setTransform(515.8647,85.7851,0.6209,0.6209,0,14.9963,-165.0037);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00080F").s().p("AgTBJQgygOgkgkQgRgRgBgZQgBgWATgUQAHgIAMgFQAMgFALAAQAZAAARASIAJAHIAOAJIAVAFIATAAIAGgBQAYgGAVAMQAVAMAIAXQADAKgCAOQgBAMgGAKQgNAWgXAGQgYAGgYAAQgaAAgZgHg");
	this.shape_60.setTransform(477.1287,57.5136,0.3679,0.3679);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00080F").s().p("AC4GYQhEgng8g4QhQhLhdiKIhIhvQg1hTgXgzQgLgYAFgWQAGgWAVgOQAKgHALgBIgjhoQgHgXANgWQANgVAXgHQAXgIAXAOQAUAMAIAXIBdERIAAAAIACADQAHASAJAPQAQAcAaAiIABABID0E5QARAVABAWQAAATgNARQgOARgWAFIgMABQgQAAgNgIg");
	this.shape_61.setTransform(469.7235,46.8088,0.3679,0.3679);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#994F2F").s().p("AkBZSQgsgKgigsQgfgogBgzQgHitANjGQATkiBDmMQAThtApjaIAfihQAPhQAJg9QAQiFgQiAIgIg3IgYhTQgbhYgOhBQgRhUgBhJQAAghAOgeQABgOAEgPIAQgkQAFgLAIgJIgMggQgwh5gPgqQgghdgQhLQgNg+Acg1QAVgoAzgVQAtgUA0AMQAZAGAbAUQAcAVAKAWQAyBuAoBrQA8ChApCuQAYBSATBeQATBhATCPQAMBdAOCHIAYDlIBkOsQADAcgOAeQgLAZgWAXQgmAqhEACQgMABgNgCQgTBUgdBIQgyB9hABtQgfA1haCMQglA5g1AMQgUAEgUAAQgTAAgUgEg");
	this.shape_62.setTransform(830.34,45.3298,0.3679,0.3679);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#994F2F").s().p("AAVLfQgcgMgUgUQgWgUgJgdQgOgaABgfQAKhfACgyQADhLgHg9IgBgJIgHg6QgGg3gBgrQgDhOgJhJIgBgKQgVibgMhNQgOhagFgZQgKgzgPgoQgIgPgJgPIgLgMQgpgngDhDQgCg3AugzQASgUAfgMQAdgMAcAAQAdAAAcAMQAbAMAVAUQBPBLAkCBQAPAzAQBsQANBQAPBrIAQBvQAJBAADAuQACAWACBGQABAxAEAhIABAIIAJBDQAGA6AAAuQgBA1gNB6QAAAogUAjIgYAfQglAohFAEIgEAAQgaAAgbgMg");
	this.shape_63.setTransform(825.4297,10.5478,0.3679,0.3679);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#994F2F").s().p("AKEHtQgdgBgagRIllk4IgygsIgggcIALAIIgRgNIgBAAIgBAAQmHAUmDgHQg8AAgugsQgWgTgJgdQgLgRAAgUQgGgdAJgeIAPgkQANgYAZgTQAXgRAdgJIACgBIgcgFQgagEgZgVQgWgSgRgaQgfgwAQhDQAGgaAUgaQATgYAYgOQAZgQAfgCQAdgGAfAJQBqARCGAYQGvBRGgBwQAmAKAcAcQATATALAXQAcAJATAWIAYAeQA6BZA3CBQApBjAXBnQAHAegDAdQgEAggPAYQgVAhghAVQgaARgeABQgKADgKAAQgKAAgKgDg");
	this.shape_64.setTransform(621.5937,-49.4587,0.3679,0.3679);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#994F2F").s().p("AhpBqQgpgmgDhEQgBgaANgeQAMgdAUgUQAVgUAcgMQAcgMAcAAQA6AAAwAsQApAlADBEQABAcgMAeQgNAcgUAUQgUAVgcALQgdAMgdAAQg5AAgwgsg");
	this.shape_65.setTransform(472.5793,46.6685,0.3679,0.3679);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#994F2F").s().p("AhpBqQgpgmgDhEQgBgaANgeQAMgdAUgUQAUgUAdgMQAcgMAcAAQA6AAAwAsQApAlADBEQABAbgMAeQgNAdgUAUQgUAVgcALQgdAMgdAAQg5AAgwgsg");
	this.shape_66.setTransform(472.5793,44.9944,0.3679,0.3679);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#994F2F").s().p("AlFMSQgggFgZgOQgYgOgTgYQgSgYgIgcQgyitA7jZQAQg8AdhNIA0iGQAlhaAag0QAmhNAqg4QArg5A/hIIBuh8IDMjmQAlgpBFgDQAvgCAsAiQAmAdAQAxQARA0ggA/QgyBkg4BUQgaAmhWBzQgfAqgSAiIgoBPQgrBShMBLIg1A2QgXAWgQATQgNATgJASIgIAWIgLAcQgHARgGAKQgKAQgOARQgTA/gJA0IABgLIgEAYIADgNQgGA6AFA1QADAUAGAVQARA5ggA7QgZAwhAAVQgRAFgTAAQgLAAgMgBg");
	this.shape_67.setTransform(492.9013,-52.1085,0.3679,0.3679);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#994F2F").s().p("Al8JHQgYgNgTgZQgTgZgHgbQgIgcAEgfQAEggAPgYQAohDAwhMQBLh2BaiAIBTh2QAlg4AXgxQATgtAThEQAZhUAKgbQAPgoATgbQAXggAggTQAogYAwAAQAWAAAUAFQAPgFARgCQAcgDAfAHQAaAGAZAUQAYATAPAYQAQAZABAfQAHAdgJAfQg5CZhpBoQgUAWgcAJIgBABQgkBTgtBBIg5BSIg5BRQh1CthmCpQgeAyg8ATQgTAGgTAAQglAAgogVg");
	this.shape_68.setTransform(495.4357,-56.9103,0.3679,0.3679);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#390075").s().p("Ag+AvIBAh2IA8ARIgTAeQgmA3gXApg");
	this.shape_69.setTransform(540.7224,446.3473,0.3679,0.3679);

	this.instance_1 = new lib.emptyAlien("synched",0);
	this.instance_1.setTransform(1053.8,102.1,0.7116,0.7116,-8.4944,0,0,314.2,456.9);

	this.instance_2 = new lib.spaceship_black("synched",0);
	this.instance_2.setTransform(907.3,256,1,1,0,0,0,906.1,263.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#020202").s().p("AlVQjQi8gjiYhRQopklgpsjQgNkAApkZQAWiXAchmQAMgvAigjQAigjAugOQAvgOAvALQAwALAkAgQA7A1BmBEQC9B/DYBZQKkEXK6i4QAugMAuAMQAuALAjAhQAjAgAPAtQAPAtgIAvQgEAWgLAyQgUBRgbBXQhUEQh+DhQjIFnkcC8QkbC7lTAAQh3AAh5gXgAtqBHQBUGJEbCXQBnA2CDAZQEpA4DwiFQDviECxk+QBZieBCi+QoIBHn/iVQluhqlFjOQgtFtA6EVg");
	this.shape_70.setTransform(762.043,185.7919,0.2757,0.2757,0,0,180);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#0F227A").s().p("Am2GtQijgeiEhGIgMgHIAAgOIAAgsQAJiYBKiHQBKiHCChlQCChlCigwQCigxCuAKQCdAICRA4QCRA4ByBfIAPANIgKASQibEWjPCjQkLDSlNAAQhnAAhtgVgAiYlqQiaAuh6BfQh6BehFB/QhFB9gICOIgBAaQB5A9CSAbQGJBKE1jLQDuibCukwQhqhViFgyQiGgxiQgIIg0gCQiJAAiCAng");
	this.shape_71.setTransform(758.5367,198.7949,0.2757,0.2757,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF5283").s().p("AmuGVQifgdiBhFIABgpQAIiWBLiEQBHiBB7hfQB8hgCbgvQChgyCsAKQCdAICPA4QCJA2BuBcQi2FGj6CiQjnCXkUAAQhmAAhsgVg");
	this.shape_72.setTransform(758.6309,198.7923,0.2757,0.2757,0,0,180);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#390075").s().p("AkzNtQifgeiAhEQncj8gWrgQgGjmAnj8IApjNIAoAiQA2AqA/AsQDMCLDrBjQLsE9MAjJIgNA7QgSBLgYBQQhPD/h2DSQi2FHj5CjQjnCWkVAAQhmAAhsgUg");
	this.shape_73.setTransform(762.0348,185.8005,0.2757,0.2757,0,0,180);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#371A45").s().p("AgLCHQgtgBgsgWQgpgVgeghQg0g6gWhXQgFgUAOgQQAKgLAPAAQAOAAAKALIADADIAtAvQAYAYAUANQApAbAtABQAjgBA7gaQAfgOBKgtIADgCQAOgIAPAFQAOAFAHAOQAHAOgFAPQgXBNhIA4QgiAagpAOQgmANgmAAIgKAAg");
	this.shape_74.setTransform(1003.6278,123.5283,0.9033,0.7163,0,-10.7766,-6.6811);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#371A45").s().p("ACqGDQgmgbgbgkQgXgegWgnIglhDIhEiDQgphMgdgvQgohBgngwQhVhsh4g+IgBAAQgLgGgFgMQgGgMADgMQAEgPAMgIQAMgIAOAEQBIATBEAoQBEApA3A4QAzAzAxBEQAlA1AsBMIBJCBQA1BdARAZQAlA1AeAKQAPAGAVgIQASgGAdgWIAHgFQAPgMASAIQANAGAGAOQAFAOgGAOQgTAughAfQgqAmg3AAQg1AAgughg");
	this.shape_75.setTransform(948.3375,-59.2136,0.7116,0.7116,-8.4929);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#371A45").s().p("AoeBqQgXgSgRgYQgSgagIgbQgPg1AMg4QADgKAGgHQAHgHAJgCQAOgEAMAIQAMAHADAPIADAJQAIAlAPAVQARAXAWAJQArATBNgJQA8gHBUgYQAegJAtgPIBLgbQBdghBBgRQBagYBOgHQBVgIBWAOQBWANBPAhQALAFAGALQAGAMgCANQgDAPgMAJQgMAIgOgDIAAAAQiYggiXAcQhDANhQAaQg4AThcAlQh2AtgmANQhcAdhPAHIgdABQhhAAhDgyg");
	this.shape_76.setTransform(1053.7348,-33.1633,0.7116,0.7116,-8.4929);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#371A45").s().p("APkLdQgPgHgFgRQgFgQAHgQQgDADAAAEIAAgDIgFhFQgFgugGglQgLhNgVhXQgoisg+iNQhCibhbh6QhjiDh4hSQhzhUiYgYQiHgWifAZQiIAWifA9QiCAwidBVQgUALgYgCIgBgBQgmgFgnAOQgnAOgVAaQgVAZgBAeQgBAeAUAoQAQAfAYALQAZALAigKQAjgKAdgdQAdgeANglIAAgCQAIgWASgOIAWgQIAugZQAagOAggOQA4gZBAgUQCJgsBwgKQCPgPB0AXQCMAbBtBMQBvBNBMB/QBBBtAjCQQAeB6AICNQAHB1gICRQAAAQgMAMQgLALgPABQgRAAgMgMQgMgMAAgSQgHkYhAjQQglh3g8haQhChihXg1Qijhlj8AgQhqAPhxAjQhAAVgrARQgjAOgQAIIgZAMIAAAAQgaA4grAsQg4A3hJAXQhVAbhNghQgmgQgigiQgegegSglQgphOAChRQABgtASgrQAQgrAcgfQA2g9BKgaQA5gUA+ACQE1i3EtgxQC6gfCgAeQBXAPBVAlQBUAkBIA2QCMBnBrCcQBjCPA/CwQA5CcAfC7QAOBYAGBYQADAxABAoIgEBZQgBAKgEAIQgHAQgPAGQgHADgHAAQgJAAgIgFg");
	this.shape_77.setTransform(868.152,-136.4543,0.7116,0.7116,-8.4929);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#31C418").s().p("AAeD6QhJgChIguIg5guQADjfghizQCCCoBigVQBRgQAriGQAjCVAMCQQAKBygHAQQgNAUgcATQg1AlhFAAIgHAAg");
	this.shape_78.setTransform(930.8674,-108.2892,0.7116,0.7116,-8.4929);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#62ED2E").s().p("AJuKOQADjgghizQhAlPjEiZQieh7jsADQivACjEBFQiQAygpAiQgUA8guArQgrAqg1APQg2APgvgSQg0gUgeg3QhKiGBVhiQAkgpA4gVQA3gUA5AIQBCgnBNglQCUhICQgqQG/iEEoC5QDRCDCKDzQBtC+A7D3QAjCVAMCRQAKBygHAQg");
	this.shape_79.setTransform(869.6691,-134.9875,0.7116,0.7116,-8.4929);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#62ED2E").s().p("AJuKOQADjgghizQhAlPjEiZQieh7jsADQivACjEBFQiQAygpAiQgUA8guArQgrAqg1APQg2APgvgSQg0gUgeg3QhKiGBVhiQAkgpA4gVQA3gUA5AIQBCgnBNglQCUhICQgqQG/iEEoC5QDRCDCKDzQBtC+A7D3QAjCVAMCRQAKBygHAQg");
	this.shape_80.setTransform(869.6691,-134.9875,0.7116,0.7116,-8.4929);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#371A45").s().p("AICMWQhXgOhIg8QhKg9gghZQgSgvABg2QABg3AUgvQAbhBA6g0QAFhUgFhLQgIhlgbhLQgOgmgWggQgKgOgOgNQgPgOgQgMQhAgzhJACQhGAChQA0QhFAshJBNQhyB6h9DFIAAABQgIANgPAEQgPAEgNgIQgPgIgFgRQgFgRAIgPQA3huAthMQA7hiA+hNQBPhjBMg4QBqhQBrgKQA8gHA/ASQA8ARAzAjQAYAQAYAWQAZAWAUAaQAlAwAaA/QAnBhAJCGQAHBwgSB2QgGAkgcAUIAAABQgvAigNAjQgOAiAOApQAOAqAoAiQApAiArAGQAWADARgEQAQgEASgMQAjgZAPgtQAPgrgMgvQgLgugkgoQgbgeAGgqIAAgEQAXiWgGiTQgFikgph7QguiPhchLQgqgjhGgdIgfgMIgggKQgrgNgWgDQh+gZiLAmQh9AjiBBVQhuBIh0B0Qg1A1gxA6IhhB9QgIALgMADQgNAEgNgGQgOgHgGgQQgFgQAHgQIAEgKIAnhFQAYgkAVgfQArg9A4hCQBuiAB6hdQCKhqCUgvQChg2ClAXQARACAYAFIApAJQA8ASATAIQBeAlA7AvQBGA2A1BRQAxBKAdBZQAxCTAGDDQABCdgXCLQAqA7AQBBQAMAvgCAyQgCAygQAtQghBihOA3QgqAeguALQgZAGgcAAQgVAAgVgDg");
	this.shape_81.setTransform(1103.8833,-74.5061,0.7116,0.7116,-8.4929);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#31C418").s().p("AgLEdQhIgVhAg7QhBg6gXhUQgIgagCgaIgBgTQAHgTA2hLQBKhmBYhaQgdCeBiBIQBHAzCCADQhjB7hlC2IgEAAQgWAAgggKg");
	this.shape_82.setTransform(1065.1468,-74.7424,0.7116,0.7116,-8.4929);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#62ED2E").s().p("AI4LGQhDgCg9grQg9grgdhAQgfhEARhCQAThLBNg4QAPhggIh1QgPjohxhkQh0hniCAVQiiAaiuDZQhjB7hlC1IkmkvQAHgTA2hLQBKhmBYhZQDIjNDShRQEWhrEKCBQD9B6AqGJQAYDfgoDMQA6BAANBNQAMBEgZBAQgYA9gxAlQgvAkg3AAIgGAAg");
	this.shape_83.setTransform(1102.5236,-74.4639,0.7116,0.7116,-8.4929);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#371A45").s().p("Ag4A0QgMgOAKgZQAIgYAYgWQAXgWAYgFQAZgGALAOQAMAOgKAZQgIAZgXAWQgYAWgYAFIgMACQgQAAgIgLg");
	this.shape_84.setTransform(980.7861,79.7533,0.7116,0.7116,-8.4929);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#371A45").s().p("AgSA+QgQgVgGghQgGgfAIgaQAIgZARgEQAQgEAQAVQAQAVAGAgQAGAggIAaQgIAZgRAEIgFABQgNAAgOgSg");
	this.shape_85.setTransform(970.9451,77.6884,0.7116,0.7116,-8.4929);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#371A45").s().p("ApdMzQiOg2hfhWQhghXghhnQgfhkAJiEQAKiVA8iWQCVl3GFkDQDoibEJgoQEKgoDvBVQCBAtBZBLQBZBLAhBaQAoBtgBCOQgCCgg1CfQiGGNmLEHQiYBmitAyQiaAsiiAAQjLAAithCgACqraQkCAcjhCWQlXDliIE/Qg2B/gLB9QgKBwAaBSQAWBGBLBAQBLA/BuAqQC/BJDegSQEGgVDgiWQFNjeB/lPQA1iKAGiIQAGh+gjhgQgWg6hEg1QhFg2higiQiIgxibAAQg3AAg5AGg");
	this.shape_86.setTransform(1066.2752,38.9169,0.7116,0.7116,-8.4929);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#371A45").s().p("AgYQMQizg8iTinQiujHhHklQhqm6BzmPQAuihBNiCQBFh0BNhBQBCg3BdgKQBdgKBnAlQCrA+CPCqQCpDJBHEnQBpG0hfGGQgmCdhCB+Qg8BxhEA+QguArg8AWQg8AVhEAAQhNAAhTgcgAjotxQhFA6g8BsQhAB0gmCTQhbFgBcF9QA9D9CSCqQB7CPCUAxQBQAbBGgHQBGgIAtgpQAzguAwheQA4hsAiiIQBVlghgmQQg+kAiOitQh3iRiNg0Qg9gWg1AAQhHAAgqAkg");
	this.shape_87.setTransform(917.7026,2.8506,0.7116,0.7116,-8.4929);

	this.instance_3 = new lib.Group_17();
	this.instance_3.setTransform(1063.35,17.95,0.7116,0.7116,-8.4944,0,0,92.5,51.2);
	this.instance_3.alpha = 0.6992;

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#371A45").s().p("AmuMYQi1gkiChaQiBhZgjhxQgehcAKh7QALiIA6iMQCOlZFtj0QDAh/DXgtQDBgoC7AeQCsAcB9BOQB7BNAkBjQAlBmgDCFQgDCUg1CUQiBFuluD1QjACAjdAoQhhAShfAAQhmAAhkgUg");
	this.shape_88.setTransform(1066.2736,38.9934,0.7116,0.7116,-8.4929);

	this.instance_4 = new lib.Group_20();
	this.instance_4.setTransform(917.7,-6.6,0.7116,0.7116,-8.4944,0,0,55.9,85.9);
	this.instance_4.alpha = 0.6992;

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#371A45").s().p("AB9PfQh7gDh9hOQiIhShniTQhyikg1jaQhkmeBol3QAqiaBHh6QBAhvBJg9QBHg8BxAJQBxAKB2BOQB/BWBhCSQBsCkA1DZQBkGdhWFvQgjCUg9B2Qg3Brg/A6QhKBEh0AAIgKAAg");
	this.shape_89.setTransform(917.727,2.8427,0.7116,0.7116,-8.4929);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#371A45").s().p("EgONAs+QgggDhfgPQgZgEgngIIhAgOQkOg9jih0Qjvh5jHjFQjHjFiEj1Qj4nKgxpdQgroSBvo0QBpofEDnjQEHnrGDlnQGWl7Hci9QD1hiEBgsQEEgsEBAPQEEAPD9BHQD8BGDrB6QDoB5DPCvQDMCsCpDWQFLGjCuIdQCpIMgEIuQgBETgqESQgPBpgkClIghCFIhDDJIhYC/IhIB3IgkA8Ih7ClIiJCYIiTCJQmNFMn9C/QklBmjKApQi9AnhAAHQiQANhyglQgWgHgKgVQgMgWAGgYQAHgYATgNIADgCQA0ggBCgVQAhgLBWgVQAogJBPgNQAogIBPgTQBtgZB9goQBjgfCDgwQHzjIFWkeICHh7IB8iHIBwiRIBgidIBOimIA8ivIAfh8QAkigANhcQApj8AAkDQAEoIienpQihn1kxmCQibjEi7ieQi9ifjVhwQjWhwjohBQjqhBjsgNQjsgOjuApQjrAojiBaQjfBZjPCGQjMCFi1CrQlnFRjzHKQjvHDhgH8QhkIJAoH2QAWEIBADtQBFD8ByDRQB1DaCpCsQCsCtDRBtQDJBqD0A7IB0AZIB4ATQCJAaBiAwIAEACQAUAKAJAWQAIAYgJAXQgJAXgWAJQg9AbhHAIQgfADgjAAQgeAAgigCg");
	this.shape_90.setTransform(1064.1912,-20.9327,0.7116,0.7116,-8.4929);

	this.instance_5 = new lib.Group_23();
	this.instance_5.setTransform(1059.5,-74.45,0.7116,0.7116,-8.4944,0,0,257.9,198.7);
	this.instance_5.alpha = 0.6992;

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#31C418").s().p("Ay0DQQmUkIjenVQC6DTD1CjQFRDgGZBrQIOCJKvgLQK7gLI7iiQkkCPlHBYQk8BVk9AaIqhAzQqRgXnEkng");
	this.shape_91.setTransform(1049.0389,143.9243,0.7116,0.7116,-8.4929);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#62ED2E").s().p("EgbhAmbQmUkJjdnVQjknhgOqAQgNo4CYotQCdo+FNndQFHnVHAkvQHIk1H+hZQIYhdIRClQIRClGWGDQGCFwDlILQDhIAAoJIQAoJQidI+Qh4G6lVFlQk2FGnMDgQklCPlHBYQk8BVk9AaIqgAzQqSgXnEkng");
	this.shape_92.setTransform(1064.5596,-20.3251,0.7116,0.7116,-8.4929);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#371A45").s().p("AkxfuQhPghg1hIQgug9gUhaQgQhCADhOQABgzALhOQAkkXAFikQALjqgRjSQgNjUgnjkQghjGg+jtQgsithPkFQgGgUAHgTQAIgUASgJQATgKAVAHQAVAHAKAVIAAAAQDWHEBgGhQBnG8gPHsQgDC2ghEeQgHA9AAAmQgBAsAJAnQAIAjAOAUQAOATAYALQAZAMAlAAQAmAAAlgLQATgGAPgHQAPgHAMgJQAfgZAYgeQAxg8AhhlQAehaAKhmIACgPQAEgqAegdQAegdAoAAQAsAAAfAhQAfAhAAAvQANClArCAQAYBIAhAtQAgAsAgAJQAYAEAQgCQAPgCANgJQAggWAZg8QAthoANi2QALiZgNihQgKiLgci1Qgyk7hmk4QjGpel3oSQlxoKnxmAQgjgcgHguQgHguAZgnQAaglArgIQAsgIAjAcQILGVGDIjQGLIvDSKBQBsFKA0FMQAeC7ALCZQAPCygMCtQgJBrgOBJQgTBigjBUQgzB2hTA7Qg2Ang+AHQg3AJg8gPQg6gOgzgoQgrghgigxQghgvgag6QgUAkgXAfQgtA9g3AoQgdAYgkAQQgiAQggAKQhGAUhBAAQhPAAhHgeg");
	this.shape_93.setTransform(1175.3856,264.5881,0.7116,0.7116,-8.4944);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#31C418").s().p("AlNmRQFtEbEuFnQkCBxk3Awg");
	this.shape_94.setTransform(1123.5014,161.2244,0.7116,0.7116,-8.4944);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#31C418").s().p("AF4RiQiPgkhJkNQgWhUgNhhIgIhRIgGA8QgJBJgTBEQg9DciIBdQg0AjhMANQhXAOhFgaQi5hHArk3QBLocg1nuQgqmOiFmjQCHDaBME7QA5DqAeFDQARCxAUEiQAVDUApAyQBnB+CkiDQAzgpAzg/IApg1IAvBmQA8BxBDA3QDUCwDCnZQAAEehDCnQhGCuiAAAQgZAAgcgHg");
	this.shape_95.setTransform(1194.245,320.4225,0.7116,0.7116,-8.4944);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#62ED2E").s().p("AIKeSQiPgjhJkNQgWhUgNhiIgIhQIgGA7QgJBJgTBFQg9DbiJBdQgzAkhMAMQhXAPhFgbQi5hHArk2QBLodg1nuQgqmOiFmiIAAgBQg5izhWjgIiWzNQLZI0G6M2QG8M2A9OJQAFBRgBBEQAAEehDCoQhFCtiBAAQgZAAgcgHg");
	this.shape_96.setTransform(1175.3729,264.5097,0.7116,0.7116,-8.4944);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#371A45").s().p("AhHBqQACgtAcgsQgxgOgdgfQgZgbAIgIQAEgDAiANQAvASAqAIQAZgjAZgvQASgiAEAAQALAAgCAmQgDAsgbAtQAwAOAeAfQAZAbgIAIQgEADgigNQgwgSgpgIQgZAigZAwQgSAigEAAQgLAAACgmg");
	this.shape_97.setTransform(1033.3599,320.2268,0.7116,0.7116,-8.4929);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#371A45").s().p("Ag2GeQhsghhOhhQhLhcgYh6QgZh8Alh1QATg8AjgzQAlg1AygjQAygiA8gPQA6gNA8AKQBxATBWBaQBPBTAdBxQADANgFAMQgGAMgLAGQgNAHgNgFQgNgFgHgOQgnhWhGg4QhHg4hNgGQhNgGg+AwQg+AxgYBQQgYBOAPBYQAOBYAxBGQAyBKBLAjQBPAnBRgUIAAgBQAMgCALAFQALAFAFAMQAGAOgEAOQgFAPgNAGQgwAag7AEIgXABQgsAAgsgNg");
	this.shape_98.setTransform(1033.0165,321.2796,0.7116,0.7116,-8.4929);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#2BC614").s().p("AhsEYQh4hGgyiSQgTg2gFg8IAEAHQBNCJB+A0QB8AzBjhAQBeg8ATiDQATiDhAiFQBBBCAhBeIAJBYQAEBpggBbQggBag8A3QgeAbgXAJQgwAUgwAAQhGAAhIgrg");
	this.shape_99.setTransform(1035.2304,325.1498,0.7116,0.7116,-8.4929);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#371A45").s().p("Ag2GeQhsghhOhhQhLhcgYh6QgZh8Alh1QATg8AjgzQAlg1AygjQAygiA8gPQA6gNA8AKQBxATBWBaQBPBTAdBxQADANgFAMQgGAMgLAGQgNAHgNgFQgNgFgHgOQgnhWhGg4QhHg4hNgGQhNgGg+AwQg+AxgYBQQgYBOAPBYQAOBYAxBGQAyBKBLAjQBPAnBRgUIAAgBQAMgCALAFQALAFAFAMQAGAOgEAOQgFAPgNAGQgwAag7AEIgXABQgsAAgsgNg");
	this.shape_100.setTransform(1032.9641,321.1944,0.7114,0.7114,-8.4919);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#62ED2E").s().p("AhmFKQh4hGgyiSQgziRAwiJQAwiJB3gvQB1gvB4BGQB4BGAzCSIikHSQgwATgwAAQhGAAhIgqg");
	this.shape_101.setTransform(1034.2323,321.6518,0.7114,0.7114,-8.4919);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#371A45").s().p("AjEc1QjRgjiNgsQi9g7iIhdQlPjohSnsQh0rDGQuIQCAkgCnkUQBYiSBEhfIASgZIAbgLQFkiaE1hRQH8iGCpCBQAwAlAYA3QAYA4gDBCQgMDiA6FDQAjDCBlGiQCFIhAnEPQBBHEg+FJIgFASQhnElljDCQleC/mgAAQh/AAh8gVgAEc46QlEBOlqCYQj/F1i7G+QlOMaBjJZQBCGQEGCzQBuBLChAxQB5AkDDAhQC8AfDMgZQDDgZCyhIQCxhIB7hpQCChvAvh/QA2kmhAmmQgmj9h+oFQhpmygkjOQg8lVAMj5QABgKgCgDQAAgDgDgCQghgZhQAAQhvAAjLAxg");
	this.shape_102.setTransform(1082.0793,266.156,0.7116,0.7116,-8.4944);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#31C418").s().p("AlNmRQFtEbEuFnQkCBxk3Awg");
	this.shape_103.setTransform(1123.5014,161.2244,0.7116,0.7116,-8.4944);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#31C418").s().p("AmEF1QjTgii7hBQBSiUBXiEIBFhoIDNhRQD1hdDLg2QKKivgNELQgMDpA5FCQlYBjmEAAQjiAAjZgjg");
	this.shape_104.setTransform(1073.4919,170.4819,0.7116,0.7116,-8.4944);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#31C418").s().p("Ai0ROQjMgiiGgqQivg3h7hVQkmjNhJm7QgXiKgBiXQB2DXCwCIQDYCoEjAnQDJAaDegqQDbgqC2hgQC9hkBjiGQBsiRgVifQgKhSgfiaIg1kIQg9k+AhhkQATg6CBCJQBnBtClDhQBTFvAZEAQAhFJgwD+Qg0CWiNB/QiHB6jBBTQjBBSjXAcQhmANhiAAQh1AAhygTg");
	this.shape_105.setTransform(1088.7534,310.6195,0.7116,0.7116,-8.4944);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#62ED2E").s().p("Ai0bHQjMgiiGgqQivg3h7hVQkmjNhJm7QgXiKgBiYQgCmXCenaQB3llDIlwIAZguQBSiUBXiFIBFhoIDNhRQD1hdDLg2QKKivgNELQgMDpA5FDIARBaQAgCmBBERQBZFxASBRQBTFuAZEAQAhFKgwD+Qg0CWiNB/QiHB6jBBTQjBBSjXAcQhmANhiAAQh1AAhygTg");
	this.shape_106.setTransform(1082.096,266.0501,0.7116,0.7116,-8.4944);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{startPosition:0}},{t:this.instance_1,p:{regY:456.9,x:1053.8,y:102.1}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{scaleX:0.3725,scaleY:0.3725,x:656.3609,y:155.7997}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{y:40.5173}},{t:this.shape_3,p:{y:72.227}},{t:this.shape_2,p:{scaleX:0.9421,scaleY:0.9421,rotation:-14.9947,skewX:0,skewY:0,y:179.1665}},{t:this.shape_1,p:{scaleX:0.9421,scaleY:0.9421,rotation:-14.9947,skewX:0,skewY:0,y:200.4492}},{t:this.shape,p:{scaleX:0.9421,scaleY:0.9421,rotation:-14.9947,skewX:0,skewY:0,y:202.6634}}]}).to({state:[{t:this.instance_2,p:{startPosition:2}},{t:this.instance_1,p:{regY:456.8,x:1053.75,y:102.05}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{scaleX:0.3725,scaleY:0.3725,x:656.3609,y:155.7997}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{y:40.5173}},{t:this.shape_3,p:{y:72.227}},{t:this.shape_2,p:{scaleX:0.9306,scaleY:0.7665,rotation:0,skewX:-18.5417,skewY:-12.0722,y:179.2885}},{t:this.shape_1,p:{scaleX:0.9306,scaleY:0.7665,rotation:0,skewX:-18.5417,skewY:-12.0722,y:196.2846}},{t:this.shape,p:{scaleX:0.9306,scaleY:0.7665,rotation:0,skewX:-18.5417,skewY:-12.0722,y:198.0526}}]},2).to({state:[{t:this.instance_2,p:{startPosition:4}},{t:this.instance_1,p:{regY:456.8,x:1053.75,y:102.05}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{scaleX:0.3725,scaleY:0.3725,x:656.3609,y:155.7997}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{y:43.7173}},{t:this.shape_3,p:{y:75.427}},{t:this.shape_2,p:{scaleX:0.9207,scaleY:0.5773,rotation:0,skewX:-24.9727,skewY:-8.7555,y:179.4151}},{t:this.shape_1,p:{scaleX:0.9207,scaleY:0.5773,rotation:0,skewX:-24.9727,skewY:-8.7555,y:191.6552}},{t:this.shape,p:{scaleX:0.9207,scaleY:0.5773,rotation:0,skewX:-24.9727,skewY:-8.7555,y:192.9284}}]},2).to({state:[{t:this.instance_2,p:{startPosition:7}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.instance_5},{t:this.shape_90},{t:this.shape_89},{t:this.instance_4},{t:this.shape_88},{t:this.instance_3},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76,p:{scaleX:0.7116,scaleY:0.7116,rotation:-8.4929,x:1053.7348,y:-33.1633}},{t:this.shape_75,p:{scaleX:0.7116,scaleY:0.7116,rotation:-8.4929,x:948.3375,y:-59.2136}},{t:this.shape_74,p:{scaleX:0.9033,scaleY:0.7163,skewX:-10.7766,skewY:-6.6811,x:1003.6278,y:123.5283}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{scaleX:0.3725,scaleY:0.3725,x:656.3609,y:155.7997}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{y:48.5173}},{t:this.shape_3,p:{y:80.227}},{t:this.shape_73,p:{scaleX:0.2757,scaleY:0.2757,x:762.0348,y:185.8005}},{t:this.shape_72,p:{scaleX:0.2757,scaleY:0.2757,x:758.6309,y:198.7923}},{t:this.shape_71,p:{scaleX:0.2757,scaleY:0.2757,x:758.5367,y:198.7949}},{t:this.shape_70,p:{scaleX:0.2757,scaleY:0.2757,x:762.043,y:185.7919}}]},3).to({state:[{t:this.instance_2,p:{startPosition:1}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.instance_5},{t:this.shape_90},{t:this.shape_89},{t:this.instance_4},{t:this.shape_88},{t:this.instance_3},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76,p:{scaleX:0.7116,scaleY:0.7116,rotation:-8.4929,x:1053.7348,y:-33.1633}},{t:this.shape_75,p:{scaleX:0.7116,scaleY:0.7116,rotation:-8.4929,x:948.3375,y:-59.2136}},{t:this.shape_74,p:{scaleX:1.3539,scaleY:1.0737,skewX:-10.7771,skewY:-6.6807,x:1004.1275,y:123.5102}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{scaleX:0.3725,scaleY:0.3725,x:656.3609,y:155.7997}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{y:48.5173}},{t:this.shape_3,p:{y:80.227}},{t:this.shape_73,p:{scaleX:0.2938,scaleY:0.2938,x:762.0286,y:185.7844}},{t:this.shape_72,p:{scaleX:0.2938,scaleY:0.2938,x:758.4017,y:199.6275}},{t:this.shape_71,p:{scaleX:0.2938,scaleY:0.2938,x:758.3013,y:199.6302}},{t:this.shape_70,p:{scaleX:0.2938,scaleY:0.2938,x:762.0374,y:185.7752}}]},3).to({state:[{t:this.instance_2,p:{startPosition:5}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.instance_5},{t:this.shape_90},{t:this.shape_89},{t:this.instance_4},{t:this.shape_88},{t:this.instance_3},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76,p:{scaleX:0.7116,scaleY:0.7116,rotation:-8.4929,x:1053.7348,y:-33.1633}},{t:this.shape_75,p:{scaleX:0.7116,scaleY:0.7116,rotation:-8.4929,x:948.3375,y:-59.2136}},{t:this.shape_74,p:{scaleX:1.3539,scaleY:1.0737,skewX:-10.7771,skewY:-6.6807,x:1004.1275,y:123.5102}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{scaleX:0.3725,scaleY:0.3725,x:656.3609,y:155.7997}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{y:48.5173}},{t:this.shape_3,p:{y:80.227}},{t:this.shape_73,p:{scaleX:0.3308,scaleY:0.3308,x:762.0346,y:185.8494}},{t:this.shape_72,p:{scaleX:0.3308,scaleY:0.3308,x:757.9503,y:201.4383}},{t:this.shape_71,p:{scaleX:0.3308,scaleY:0.3308,x:757.8372,y:201.4414}},{t:this.shape_70,p:{scaleX:0.3308,scaleY:0.3308,x:762.0445,y:185.839}}]},4).to({state:[{t:this.instance_2,p:{startPosition:6}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.instance_5},{t:this.shape_90},{t:this.shape_89},{t:this.instance_4},{t:this.shape_88},{t:this.instance_3},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76,p:{scaleX:0.7116,scaleY:0.7116,rotation:-8.4929,x:1053.7348,y:-33.1633}},{t:this.shape_75,p:{scaleX:0.7116,scaleY:0.7116,rotation:-8.4929,x:948.3375,y:-59.2136}},{t:this.shape_74,p:{scaleX:1.3539,scaleY:1.0737,skewX:-10.7771,skewY:-6.6807,x:1004.1275,y:123.5102}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{scaleX:0.517,scaleY:0.517,x:656.258,y:155.9061}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{y:50.0173}},{t:this.shape_3,p:{y:81.727}},{t:this.shape_73,p:{scaleX:0.3308,scaleY:0.3308,x:762.0346,y:185.8494}},{t:this.shape_72,p:{scaleX:0.3308,scaleY:0.3308,x:757.9503,y:201.4383}},{t:this.shape_71,p:{scaleX:0.3308,scaleY:0.3308,x:757.8372,y:201.4414}},{t:this.shape_70,p:{scaleX:0.3308,scaleY:0.3308,x:762.0445,y:185.839}}]},4).to({state:[{t:this.instance_2,p:{startPosition:1}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.instance_5},{t:this.shape_90},{t:this.shape_89},{t:this.instance_4},{t:this.shape_88},{t:this.instance_3},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76,p:{scaleX:0.7115,scaleY:0.7115,rotation:6.5053,x:1053.8003,y:-37.9442}},{t:this.shape_75,p:{scaleX:0.7115,scaleY:0.7115,rotation:-23.493,x:948.1225,y:-64.3279}},{t:this.shape_74,p:{scaleX:1.3539,scaleY:1.0737,skewX:-10.7771,skewY:-6.6807,x:1004.1275,y:123.5102}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{scaleX:0.517,scaleY:0.517,x:656.258,y:155.9061}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{y:50.0173}},{t:this.shape_3,p:{y:81.727}},{t:this.shape_73,p:{scaleX:0.3308,scaleY:0.3308,x:762.0346,y:185.8494}},{t:this.shape_72,p:{scaleX:0.3308,scaleY:0.3308,x:757.9503,y:201.4383}},{t:this.shape_71,p:{scaleX:0.3308,scaleY:0.3308,x:757.8372,y:201.4414}},{t:this.shape_70,p:{scaleX:0.3308,scaleY:0.3308,x:762.0445,y:185.839}}]},4).wait(4));

	// lights
	this.instance_6 = new lib.Group_2();
	this.instance_6.setTransform(433.95,164.5,1,1,0,0,0,70.2,168.5);
	this.instance_6.alpha = 0.3516;

	this.instance_7 = new lib.Group_1_1();
	this.instance_7.setTransform(531.1,-93.5,1,1,0,0,0,47.8,55.5);
	this.instance_7.alpha = 0.3516;

	this.instance_8 = new lib.Group_24();
	this.instance_8.setTransform(957.05,-28.4,1,1,0,0,0,526.3,331.5);
	this.instance_8.alpha = 0.3516;

	this.instance_9 = new lib.Group_0_1();
	this.instance_9.setTransform(64.6,481.8,1,1,0,0,0,131.8,54.6);
	this.instance_9.alpha = 0.5;

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#362045").s().p("A0FUUQg0gagTg4QgSg3Aag1QHgu3QJsoQFJkBFejXQC5hxCBhBQA0gaA4ASQA4ASAaA0QAbA0gTA4QgSA4g0AaQhuA5ioBnQlODMk7D1QvrMMnDOAQgTAkgjAVQghAUgoAAQgiAAgdgPg");
	this.shape_107.setTransform(300.4621,580.6068);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#362045").s().p("AWZPSQgcgMgVgYQqOr4ygoIQl0ijl9h4Qh4gmhrgdIhYgWQg5gNgfgyQgfgxANg6QANg5AygfQAxgfA5ANQCOAhDWBCQGPB+GECsQTDIcK3MmQAnAtgFA6QgEA6gtAmQgnAjg1AAQgeAAgcgNg");
	this.shape_108.setTransform(1528.2689,429.283);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#362045").s().p("AnqF5Qi7iBgPjDQgQjSC+igQC9ihEkgWQEjgVDTCBQDUCCAQDTQAIBpgxBiQgxBjhkBPQhbBJh4AsQh4AsiGAKQgmADglAAQkLAAi6h/gAgWksQjIAPiMBkQiMBlAJB6QAKB6CZBPQCZBODIgPQBogIBcghQBbghBFg2QAwgmAdgsQAqhAgFhAQgJh7iZhOQiAhCihAAQggAAggADg");
	this.shape_109.setTransform(104.7189,582.2469);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F7CE48").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_110.setTransform(104.7249,582.232);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#2F3A55").s().p("AoGGXQjHiLgQjUQgRjjDIitQDJiuE1gXQE0gYDgCNQDhCNARDlQAJBxg2BuQg2BthqBVQhhBMh9AuQh+AviMAKQgoADgmAAQkbAAjGiKgAgTkDQi/AOiABfQh5BYAIBgQAHBiCEBFQCNBKC/gPQBggHBXgfQBYgfA+gyQAqghAZgkQAkg2gEgzQgHhiiFhFQh2g9iYAAQgeAAgfACg");
	this.shape_111.setTransform(104.7168,582.2071);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FDF5AE").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_112.setTransform(104.7249,582.232);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#362045").s().p("Aj+HeQhpgahYgxQhuhAhAhaQg/hagIhqQgIhpAxhjQAxhjBjhPQBchIB4gtQB4gsCGgKQCFgKB9AaQB9AZBmA6QBuA/A/BaQBABaAIBqQAIBpgxBjQgxBjhkBPQhbBJh4AsQh4AsiGAKQgpADghAAQhxAAhpgagAgWksQhoAIhcAhQhbAhhFA2QgwAmgeAsQgqBAAFBAQAGBBAzA4QAkAnA1AfQBLArBhATQBfATBngIQBogIBcghQBcghBEg3QAwgmAegsQApg/gFhBQgEhBg0g4Qgjgng2gfQhAgkhQgUQhPgThYAAQgaAAghADg");
	this.shape_113.setTransform(486.15,599.8842);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#F7CE48").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_114.setTransform(486.1533,599.8815);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#362045").s().p("AmYG6Qh0g1hHhUQhIhUgRhoQgShpAnhmQAohnBchYQBUhRB0g3QBzg3CEgWQCEgXB/AOQB/AOBqAwQB0A1BHBUQBIBUASBpQAjDPiuCxQiuCykgAwQhRAOhRAAQi1AAiVhDgAgykpQhnARhYAqQhZApg/A8QgsAqgZAvQgkBDALBAQALBAA4A0QAnAkA4AZQBQAkBgAKQBiAKBlgSQDHghCBhyQCChxgUh4QgMhAg4g0Qgngkg4gZQhtgxiJAAQg9AAhEALg");
	this.shape_115.setTransform(1721.6683,383.9815);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F7CE48").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_116.setTransform(1721.6494,383.9885);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#362045").s().p("AnkGSQiqhtgeixQgShoAohmQAohnBchYQBUhRB0g3QBzg3CEgWQEfgxDfBuQDfBuAjDQQASBpgoBmQgoBnhcBYQhUBQhzA3Qh0A3iEAXQhTAOhRAAQjsAAiohsgAgykpQhmARhZAqQhYApg/A8QgsAqgaAvQgkBDALBAQAVB5CgBAQCfBADGgiQBmgRBZgpQBYgqA/g8QAtgqAZgvQAkhCgLhAQgRhlh2g/Qhzg/ihAAQhAAAg/ALg");
	this.shape_117.setTransform(1355.775,493.2176);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F7CE48").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_118.setTransform(1355.775,493.275);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#362045").s().p("AmrGnQhyg6hDhXQhDhXgNhqQgajQC2ipQC2iqEigjQEhgkDaB4QDZB4AaDSQANBpgsBlQgtBlhgBTQhYBNh2AxQh2AyiFAQQg8AIg6AAQjPAAijhUgAgjkqQjIAYiHBrQiHBrAPB5QAIBBA2A2QAlAlA3AcQBOAoBgAOQBhAOBmgMQBogNBaglQBaglBCg6QAugoAbgtQAnhBgIhBQgNhqh9hGQh8hFisAAQguAAguAGg");
	this.shape_119.setTransform(917.2357,561.1948);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F7CE48").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_120.setTransform(917.255,561.25);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#362045").s().p("AgLCHQgtgBgsgWQgpgVgeghQg0g6gWhXQgFgUAOgQQAKgLAPAAQAOAAAKALIADADIAtAvQAYAYAUANQApAbAtABQAjgBA7gaQAfgOBKgtIADgCQAOgIAPAFQAOAFAHAOQAHAOgFAPQgXBNhIA4QgiAagpAOQgmANgmAAIgKAAg");
	this.shape_121.setTransform(871.4296,109.8778,0.7909,0.7909,-16.9562);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#362045").s().p("ACqGDQgmgbgbgkQgXgegWgnIglhDIhEiDQgphMgdgvQgohBgngwQhVhsh4g+IgBAAQgLgGgFgMQgGgMADgMQAEgPAMgIQAMgIAOAEQBIATBEAoQBEApA3A4QAzAzAxBEQAlA1AsBMIBJCBQA1BdARAZQAlA1AeAKQAPAGAVgIQASgGAdgWIAHgFQAPgMASAIQANAGAGAOQAFAOgGAOQgTAughAfQgqAmg3AAQg1AAgughg");
	this.shape_122.setTransform(780.9779,-82.0515,0.7909,0.7909,-16.9562);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#362045").s().p("AoeBqQgXgSgRgYQgSgagIgbQgPg1AMg4QADgKAGgHQAHgHAJgCQAOgEAMAIQAMAHADAPIADAJQAIAlAPAVQARAXAWAJQArATBNgJQA8gHBUgYQAegJAtgPIBLgbQBdghBBgRQBagYBOgHQBVgIBWAOQBWANBPAhQALAFAGALQAGAMgCANQgDAPgMAJQgMAIgOgDIAAAAQiYggiXAcQhDANhQAaQg4AThcAlQh2AtgmANQhcAdhPAHIgdABQhhAAhDgyg");
	this.shape_123.setTransform(901.1185,-70.6528,0.7909,0.7909,-16.9562);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#362045").s().p("APkLdQgPgHgFgRQgFgQAHgQQgDADAAAEIAAgDIgFhFQgFgugGglQgLhNgVhXQgoisg+iNQhCibhbh6QhjiDh4hSQhzhUiYgYQiHgWifAZQiIAWifA9QiCAwidBVQgUALgYgCIgBgBQgmgFgnAOQgnAOgVAaQgVAZgBAeQgBAeAUAoQAQAfAYALQAZALAigKQAjgKAdgdQAdgeANglIAAgCQAIgWASgOIAWgQIAugZQAagOAggOQA4gZBAgUQCJgsBwgKQCPgPB0AXQCMAbBtBMQBvBNBMB/QBBBtAjCQQAeB6AICNQAHB1gICRQAAAQgMAMQgLALgPABQgRAAgMgMQgMgMAAgSQgHkYhAjQQglh3g8haQhChihXg1Qijhlj8AgQhqAPhxAjQhAAVgrARQgjAOgQAIIgZAMIAAAAQgaA4grAsQg4A3hJAXQhVAbhNghQgmgQgigiQgegegSglQgphOAChRQABgtASgrQAQgrAcgfQA2g9BKgaQA5gUA+ACQE1i3EtgxQC6gfCgAeQBXAPBVAlQBUAkBIA2QCMBnBrCcQBjCPA/CwQA5CcAfC7QAOBYAGBYQADAxABAoIgEBZQgBAKgEAIQgHAQgPAGQgHADgHAAQgJAAgIgFg");
	this.shape_124.setTransform(680.6352,-155.4031,0.791,0.791,-16.9556);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#64C141").s().p("AAeD6QhJgChIguIg5guQADjfghizQCCCoBigVQBRgQAriGQAjCVAMCQQAKBygHAQQgNAUgcATQg1AlhFAAIgHAAg");
	this.shape_125.setTransform(753.7419,-133.1496,0.7909,0.7909,-16.9562);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#8AEA55").s().p("AJuKOQADjgghizQhAlPjEiZQieh7jsADQivACjEBFQiQAygpAiQgUA8guArQgrAqg1APQg2APgvgSQg0gUgeg3QhKiGBVhiQAkgpA4gVQA3gUA5AIQBCgnBNglQCUhICQgqQG/iEEoC5QDRCDCKDzQBtC+A7D3QAjCVAMCRQAKBygHAQg");
	this.shape_126.setTransform(682.1932,-154.0386,0.791,0.791,-16.9556);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#8AEA55").s().p("AJuKOQADjgghizQhAlPjEiZQieh7jsADQivACjEBFQiQAygpAiQgUA8guArQgrAqg1APQg2APgvgSQg0gUgeg3QhKiGBVhiQAkgpA4gVQA3gUA5AIQBCgnBNglQCUhICQgqQG/iEEoC5QDRCDCKDzQBtC+A7D3QAjCVAMCRQAKBygHAQg");
	this.shape_127.setTransform(682.0899,-152.4913,0.7909,0.7909,-16.9562);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#362045").s().p("AICMWQhXgOhIg8QhKg9gghZQgSgvABg2QABg3AUgvQAbhBA6g0QAFhUgFhLQgIhlgbhLQgOgmgWggQgKgOgOgNQgPgOgQgMQhAgzhJACQhGAChQA0QhFAshJBNQhyB6h9DFIAAABQgIANgPAEQgPAEgNgIQgPgIgFgRQgFgRAIgPQA3huAthMQA7hiA+hNQBPhjBMg4QBqhQBrgKQA8gHA/ASQA8ARAzAjQAYAQAYAWQAZAWAUAaQAlAwAaA/QAnBhAJCGQAHBwgSB2QgGAkgcAUIAAABQgvAigNAjQgOAiAOApQAOAqAoAiQApAiArAGQAWADARgEQAQgEASgMQAjgZAPgtQAPgrgMgvQgLgugkgoQgbgeAGgqIAAgEQAXiWgGiTQgFikgph7QguiPhchLQgqgjhGgdIgfgMIgggKQgrgNgWgDQh+gZiLAmQh9AjiBBVQhuBIh0B0Qg1A1gxA6IhhB9QgIALgMADQgNAEgNgGQgOgHgGgQQgFgQAHgQIAEgKIAnhFQAYgkAVgfQArg9A4hCQBuiAB6hdQCKhqCUgvQChg2ClAXQARACAYAFIApAJQA8ASATAIQBeAlA7AvQBGA2A1BRQAxBKAdBZQAxCTAGDDQABCdgXCLQAqA7AQBBQAMAvgCAyQgCAygQAtQghBihOA3QgqAeguALQgZAGgcAAQgVAAgVgDg");
	this.shape_128.setTransform(949.4907,-124.3111,0.7909,0.7909,-16.9562);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#64C141").s().p("AgLEdQhIgVhAg7QhBg6gXhUQgIgagCgaIgBgTQAHgTA2hLQBKhmBYhaQgdCeBiBIQBHAzCCADQhjB7hlC2IgEAAQgWAAgggKg");
	this.shape_129.setTransform(906.8633,-118.2338,0.7909,0.7909,-16.9562);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#8AEA55").s().p("AI4LGQhDgCg9grQg9grgdhAQgfhEARhCQAThLBNg4QAPhggIh1QgPjohxhkQh0hniCAVQiiAaiuDZQhjB7hlC1IkmkvQAHgTA2hLQBKhmBYhZQDIjNDShRQEWhrEKCBQD9B6AqGJQAYDfgoDMQA6BAANBNQAMBEgZBAQgYA9gxAlQgvAkg3AAIgGAAg");
	this.shape_130.setTransform(948.0027,-124.0422,0.7909,0.7909,-16.9562);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#362045").s().p("Ag4A0QgMgOAKgZQAIgYAYgWQAXgWAYgFQAZgGALAOQAMAOgKAZQgIAZgXAWQgYAWgYAFIgMACQgQAAgIgLg");
	this.shape_131.setTransform(839.3874,65.4271,0.7909,0.7909,-16.9562);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#362045").s().p("AgSA+QgQgVgGghQgGgfAIgaQAIgZARgEQAQgEAQAVQAQAVAGAgQAGAggIAaQgIAZgRAEIgFABQgNAAgOgSg");
	this.shape_132.setTransform(828.23,64.7667,0.7909,0.7909,-16.9562);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#362045").s().p("ApdMzQiOg2hfhWQhghXghhnQgfhkAJiEQAKiVA8iWQCVl3GFkDQDoibEJgoQEKgoDvBVQCBAtBZBLQBZBLAhBaQAoBtgBCOQgCCgg1CfQiGGNmLEHQiYBmitAyQiaAsiiAAQjLAAithCgACqraQkCAcjhCWQlXDliIE/Qg2B/gLB9QgKBwAaBSQAWBGBLBAQBLA/BuAqQC/BJDegSQEGgVDgiWQFNjeB/lPQA1iKAGiIQAGh+gjhgQgWg6hEg1QhFg2higiQiIgxibAAQg3AAg5AGg");
	this.shape_133.setTransform(926.6978,6.5441,0.7909,0.7909,-16.9562);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#362045").s().p("AgYQMQizg8iTinQiujHhHklQhqm6BzmPQAuihBNiCQBFh0BNhBQBCg3BdgKQBdgKBnAlQCrA+CPCqQCpDJBHEnQBpG0hfGGQgmCdhCB+Qg8BxhEA+QguArg8AWQg8AVhEAAQhNAAhTgcgAjotxQhFA6g8BsQhAB0gmCTQhbFgBcF9QA9D9CSCqQB7CPCUAxQBQAbBGgHQBGgIAtgpQAzguAwheQA4hsAiiIQBVlghgmQQg+kAiOitQh3iRiNg0Qg9gWg1AAQhHAAgqAkg");
	this.shape_134.setTransform(757.4497,-8.8034,0.7909,0.7909,-16.9562);

	this.instance_10 = new lib.Group_17_1();
	this.instance_10.setTransform(920.4,-16.25,0.7912,0.7912,-16.9562,0,0,93,51.7);
	this.instance_10.alpha = 0.6992;

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#362045").s().p("AmuMYQi1gkiChaQiBhZgjhxQgehcAKh7QALiIA6iMQCOlZFtj0QDAh/DXgtQDBgoC7AeQCsAcB9BOQB7BNAkBjQAlBmgDCFQgDCUg1CUQiBFuluD1QjACAjdAoQhhAShfAAQhmAAhkgUg");
	this.shape_135.setTransform(926.7086,6.6285,0.7909,0.7909,-16.9562);

	this.instance_11 = new lib.Group_20_1();
	this.instance_11.setTransform(756.15,-19.4,0.7912,0.7912,-16.9562,0,0,56.4,85.7);
	this.instance_11.alpha = 0.6992;

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#362045").s().p("AB9PfQh7gDh9hOQiIhShniTQhyikg1jaQhkmeBol3QAqiaBHh6QBAhvBJg9QBHg8BxAJQBxAKB2BOQB/BWBhCSQBsCkA1DZQBkGdhWFvQgjCUg9B2Qg3Brg/A6QhKBEh0AAIgKAAg");
	this.shape_136.setTransform(756.9752,-2.2161,0.7909,0.7909,-16.9562);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#362045").s().p("EgONAs+QgggDhfgPQgZgEgngIIhAgOQkOg9jih0Qjvh5jHjFQjHjFiEj1Qj4nKgxpdQgroSBvo0QBpofEDnjQEHnrGDlnQGWl7Hci9QD1hiEBgsQEEgsEBAPQEEAPD9BHQD8BGDrB6QDoB5DPCvQDMCsCpDWQFLGjCuIdQCpIMgEIuQgBETgqESQgPBpgkClIghCFIhDDJIhYC/IhIB3IgkA8Ih7ClIiJCYIiTCJQmNFMn9C/QklBmjKApQi9AnhAAHQiQANhyglQgWgHgKgVQgMgWAGgYQAHgYATgNIADgCQA0ggBCgVQAhgLBWgVQAogJBPgNQAogIBPgTQBtgZB9goQBjgfCDgwQHzjIFWkeICHh7IB8iHIBwiRIBgidIBOimIA8ivIAfh8QAkigANhcQApj8AAkDQAEoIienpQihn1kxmCQibjEi7ieQi9ifjVhwQjWhwjohBQjqhBjsgNQjsgOjuApQjrAojiBaQjfBZjPCGQjMCFi1CrQlnFRjzHKQjvHDhgH8QhkIJAoH2QAWEIBADtQBFD8ByDRQB1DaCpCsQCsCtDRBtQDJBqD0A7IB0AZIB4ATQCJAaBiAwIAEACQAUAKAJAWQAIAYgJAXQgJAXgWAJQg9AbhHAIQgfADgjAAQgeAAgigCg");
	this.shape_137.setTransform(914.6156,-58.9165,0.7909,0.7909,-16.9562);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#64C141").s().p("Ay0DQQmUkIjenVQC6DTD1CjQFRDgGZBrQIOCJKvgLQK7gLI7iiQkkCPlHBYQk8BVk9AaIqhAzQqRgXnEkng");
	this.shape_138.setTransform(924.9259,124.8141,0.7909,0.7909,-16.9562);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#8AEA55").s().p("EgbhAmbQmUkJjdnVQjknhgOqAQgNo4CYotQCdo+FNndQFHnVHAkvQHIk1H+hZQIYhdIRClQIRClGWGDQGCFwDlILQDhIAAoJIQAoJQidI+Qh4G6lVFlQk2FGnMDgQklCPlHBYQk8BVk9AaIqgAzQqSgXnEkng");
	this.shape_139.setTransform(915.12,-58.3087,0.7909,0.7909,-16.9562);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#362045").s().p("AkxfuQhPghg1hIQgug9gUhaQgQhCADhOQABgzALhOQAkkXAFikQALjqgRjSQgNjUgnjkQghjGg+jtQgsithPkFQgGgUAHgTQAIgUASgJQATgKAVAHQAVAHAKAVIAAAAQDWHEBgGhQBnG8gPHsQgDC2ghEeQgHA9AAAmQgBAsAJAnQAIAjAOAUQAOATAYALQAZAMAlAAQAmAAAlgLQATgGAPgHQAPgHAMgJQAfgZAYgeQAxg8AhhlQAehaAKhmIACgPQAEgqAegdQAegdAoAAQAsAAAfAhQAfAhAAAvQANClArCAQAYBIAhAtQAgAsAgAJQAYAEAQgCQAPgCANgJQAggWAZg8QAthoANi2QALiZgNihQgKiLgci1Qgyk7hmk4QjGpel3oSQlxoKnxmAQgjgcgHguQgHguAZgnQAaglArgIQAsgIAjAcQILGVGDIjQGLIvDSKBQBsFKA0FMQAeC7ALCZQAPCygMCtQgJBrgOBJQgTBigjBUQgzB2hTA7Qg2Ang+AHQg3AJg8gPQg6gOgzgoQgrghgigxQghgvgag6QgUAkgXAfQgtA9g3AoQgdAYgkAQQgiAQggAKQhGAUhBAAQhPAAhHgeg");
	this.shape_140.setTransform(1083.6418,236.8861,0.7912,0.7912,-16.9562);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#64C141").s().p("AlNmRQFtEbEuFnQkCBxk3Awg");
	this.shape_141.setTransform(1009.6798,131.7132,0.7912,0.7912,-16.9562);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#64C141").s().p("AF4RiQiPgkhJkNQgWhUgNhhIgIhRIgGA8QgJBJgTBEQg9DciIBdQg0AjhMANQhXAOhFgaQi5hHArk3QBLocg1nuQgqmOiFmjQCHDaBME7QA5DqAeFDQARCxAUEiQAVDUApAyQBnB+CkiDQAzgpAzg/IApg1IAvBmQA8BxBDA3QDUCwDCnZQAAEehDCnQhGCuiAAAQgZAAgcgHg");
	this.shape_142.setTransform(1113.5138,295.1973,0.7912,0.7912,-16.9562);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#8AEA55").s().p("AIKeSQiPgjhJkNQgWhUgNhiIgIhQIgGA7QgJBJgTBFQg9DbiJBdQgzAkhMAMQhXAPhFgbQi5hHArk2QBLodg1nuQgqmOiFmiIAAgBQg5izhWjgIiWzNQLZI0G6M2QG8M2A9OJQAFBRgBBEQAAEehDCoQhFCtiBAAQgZAAgcgHg");
	this.shape_143.setTransform(1083.615,236.8019,0.7912,0.7912,-16.9562);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#362045").s().p("AhHBqQACgtAcgsQgxgOgdgfQgZgbAIgIQAEgDAiANQAvASAqAIQAZgjAZgvQASgiAEAAQALAAgCAmQgDAsgbAtQAwAOAeAfQAZAbgIAIQgEADgigNQgwgSgpgIQgZAigZAwQgSAigEAAQgLAAACgmg");
	this.shape_144.setTransform(936.5296,321.2146,0.7909,0.7909,-16.9562);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#362045").s().p("Ag2GeQhsghhOhhQhLhcgYh6QgZh8Alh1QATg8AjgzQAlg1AygjQAygiA8gPQA6gNA8AKQBxATBWBaQBPBTAdBxQADANgFAMQgGAMgLAGQgNAHgNgFQgNgFgHgOQgnhWhGg4QhHg4hNgGQhNgGg+AwQg+AxgYBQQgYBOAPBYQAOBYAxBGQAyBKBLAjQBPAnBRgUIAAgBQAMgCALAFQALAFAFAMQAGAOgEAOQgFAPgNAGQgwAag7AEIgXABQgsAAgsgNg");
	this.shape_145.setTransform(936.3242,322.4282,0.7909,0.7909,-16.9562);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#62C340").s().p("AhsEYQh4hGgyiSQgTg2gFg8IAEAHQBNCJB+A0QB8AzBjhAQBeg8ATiDQATiDhAiFQBBBCAhBeIAJBYQAEBpggBbQggBag8A3QgeAbgXAJQgwAUgwAAQhGAAhIgrg");
	this.shape_146.setTransform(939.3915,326.3212,0.7909,0.7909,-16.9562);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#362045").s().p("Ag2GeQhsghhOhhQhLhcgYh6QgZh8Alh1QATg8AjgzQAlg1AygjQAygiA8gPQA6gNA8AKQBxATBWBaQBPBTAdBxQADANgFAMQgGAMgLAGQgNAHgNgFQgNgFgHgOQgnhWhGg4QhHg4hNgGQhNgGg+AwQg+AxgYBQQgYBOAPBYQAOBYAxBGQAyBKBLAjQBPAnBRgUIAAgBQAMgCALAFQALAFAFAMQAGAOgEAOQgFAPgNAGQgwAag7AEIgXABQgsAAgsgNg");
	this.shape_147.setTransform(936.1841,322.3042,0.7908,0.7908,-16.9558);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#8AEA55").s().p("AhmFKQh4hGgyiSQgziRAwiJQAwiJB3gvQB1gvB4BGQB4BGAzCSIikHSQgwATgwAAQhGAAhIgqg");
	this.shape_148.setTransform(937.6531,322.5996,0.7908,0.7908,-16.9558);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#362045").s().p("AjEc1QjRgjiNgsQi9g7iIhdQlPjohSnsQh0rDGQuIQCAkgCnkUQBYiSBEhfIASgZIAbgLQFkiaE1hRQH8iGCpCBQAwAlAYA3QAYA4gDBCQgMDiA6FDQAjDCBlGiQCFIhAnEPQBBHEg+FJIgFASQhnElljDCQleC/mgAAQh/AAh8gVgAEc46QlEBOlqCYQj/F1i7G+QlOMaBjJZQBCGQEGCzQBuBLChAxQB5AkDDAhQC8AfDMgZQDDgZCyhIQCxhIB7hpQCChvAvh/QA2kmhAmmQgmj9h+oFQhpmygkjOQg8lVAMj5QABgKgCgDQAAgDgDgCQghgZhQAAQhvAAjLAxg");
	this.shape_149.setTransform(981.297,253.8741,0.7912,0.7912,-16.9562);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#64C141").s().p("AlNmRQFtEbEuFnQkCBxk3Awg");
	this.shape_150.setTransform(1009.6798,131.7132,0.7912,0.7912,-16.9562);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#64C141").s().p("AmEF1QjTgii7hBQBSiUBXiEIBFhoIDNhRQD1hdDLg2QKKivgNELQgMDpA5FCQlYBjmEAAQjiAAjZgjg");
	this.shape_151.setTransform(956.2028,150.0739,0.7912,0.7912,-16.9562);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#64C141").s().p("Ai0ROQjMgiiGgqQivg3h7hVQkmjNhJm7QgXiKgBiXQB2DXCwCIQDYCoEjAnQDJAaDegqQDbgqC2hgQC9hkBjiGQBsiRgVifQgKhSgfiaIg1kIQg9k+AhhkQATg6CBCJQBnBtClDhQBTFvAZEAQAhFJgwD+Qg0CWiNB/QiHB6jBBTQjBBSjXAcQhmANhiAAQh1AAhygTg");
	this.shape_152.setTransform(995.9097,301.6752,0.7912,0.7912,-16.9562);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#8AEA55").s().p("Ai0bHQjMgiiGgqQivg3h7hVQkmjNhJm7QgXiKgBiYQgCmXCenaQB3llDIlwIAZguQBSiUBXiFIBFhoIDNhRQD1hdDLg2QKKivgNELQgMDpA5FDIARBaQAgCmBBERQBZFxASBRQBTFuAZEAQAhFKgwD+Qg0CWiNB/QiHB6jBBTQjBBSjXAcQhmANhiAAQh1AAhygTg");
	this.shape_153.setTransform(981.298,253.755,0.7912,0.7912,-16.9562);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#362045").s().p("Eg/tBCsQuwhEnvi6Qnui5glkqQh/wMCMxkQCm03ICw/QJe0EQHsZQSluSafjQQafjQVfJYQSnIIODRMQL5OkHkTnQGXQfB/QNQAkEqmzErQm0EruDEnQs7EOw4DfQw4DfysCSQtMBosnA1QsjA1rLAAQpSAAn3gkgEgMfg+CQ5RDHxtNtQvXL4pBTRQnpQTieUBQiEQ3B6PjQAHA5BSBAQBhBKC2BBQHPClNvBAQNWA+RAgtQRAgsSdiRQSfiRQqjcQQqjcMukKQNFkSGZkQQChhrBMhgQBBhRgHg6Qhxudldu5QmbxiqDtmQrxv9vlowQx6qE2AAAQmFAAmfAyg");
	this.shape_154.setTransform(886.6207,56.359);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#272C2E").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape_155.setTransform(889.9336,70.515);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#362045").s().p("Eh4jApnQ2zhqt6kCQyUlThGo+QhGo+QfpkQMhnQVvnHQYOn7fpmhUAfpgGiAjDgETUAjEgETAgRgBUUAgTgBUAZaAB1QWzBqN6ECQSUFTBGI+QBGI+wfJkQshHQ1vHHQ4OH7/pGiUgfpAGhgjDAETQ4wDD3sBkQ3iBj0+AAQxOAAu4hEgEAsPgksQ3iBj4oDBUgi4AESgfaAGfQ/cGe4BH3Q2mHYsYHfQsXHeAuF1QAuF1NzERQNzERXvBuUAZMAB1AgFgBUUAgDgBUAi2gERUAi2gERAfcgGfQfbmfYCn3QWmnYMYneQMXnfgul1Qgul1tzkRQtzkQ3vhvQuqhDxIAAQ01AA3ZBjg");
	this.shape_156.setTransform(902.975,444.7741);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#7B7B7B").s().p("EheBAMEQgbjhOZkRQLgjbUbjuQOlirRlikQIzhSF4gwIOthlQRqhwO0g8QUuhTL/AiQPAAqAbDhQAOBwhcB7UgIdgEFgrVADFQtiA9vaBkIsrBYQz8Cj1ZDuUgqyAHfgHOAGAQh3hhgOhwg");
	this.shape_157.setTransform(888.2526,321.0081);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#2F3A55").s().p("Egu4ALLQmLgzjbhbQjjhegPiBQgYjERJj7QL0itSkizQDNgeDNgdIApgGQDQgdB/gQIBzgNQCVgRClgRIErgeQS3h0MWgRQSIgZAYDHQAQCEjPCWQjICRmECUQsfEwz4DaIAAAAQm6BMnYA6QkQAikNAZIn0ApQonAlnSAAQpIAAnCg6g");
	this.shape_158.setTransform(893.7067,381.1651);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#2F3A55").s().p("EhA4ASRQtUg+njidQn0ihgejxQgbjhOZkRQLgjaUbjvQOlirRlikQIzhSF4gwIOthlQRrhwOzg8QUuhTL/AiQPAAqAbDhQAeDxm+EWQmvEMssEJQstEKwtDfQxSDmzICWQzHCWxqAsQm9ARmWAAQpMAAn5gkg");
	this.shape_159.setTransform(888.2517,343.4265);

	this.instance_12 = new lib.Group_30();
	this.instance_12.setTransform(924.65,515.05,1,1,0,0,0,748.3,187.8);
	this.instance_12.alpha = 0.3516;

	this.instance_13 = new lib.Group_31();
	this.instance_13.setTransform(121.3,562.95,1,1,0,0,0,323.7,134.7);
	this.instance_13.alpha = 0.3516;

	this.instance_14 = new lib.Group_32();
	this.instance_14.setTransform(1687.15,376.6,1,1,0,0,0,331.5,136.1);
	this.instance_14.alpha = 0.3516;

	this.instance_15 = new lib.Group_33();
	this.instance_15.setTransform(896.35,358.4,1,1,0,0,0,648.8,142.3);
	this.instance_15.alpha = 0.5;

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#BBC5D2").s().p("Eh4YAnaQ4vhzuAkiQugktg3m/Qg2m/M7oDQMfnyXlnuQXknte/mcUAgGgGsAjggEWUAjegEXAgwgBRQfphPYvByQYuBzOAEiQOgEsA3G/QA2G/s7IEQsfHx3kHuQ3lHu+/GcUggGAGrgjgAEXUgjfAEXggvABRQs7AgrxAAQxDAAuohDg");
	this.shape_160.setTransform(901.675,444.95);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#362045").s().p("Eh37AkDQ2uhpt2j/QyPlQhFo2IhQqMQgHg0AggoQAggpA0gGQAzgGApAfQApAgAGA0IBQKMQAuF7N4EVQN3EVX1BuUAZOAB1AgFgBUUAgFgBUAi2gERUAi2gESAfdgGfQfcmeYCn4QWtnaManiQMbnkgvl7IhQqMID4gfIBQKMQBGI3wbJgQsfHN1pHEQ4NH7/pGhUgfnAGhgjEAEUQ4wDC3qBkQ3jBk08AAQxZAAushFg");
	this.shape_161.setTransform(907.1357,543.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFF66").s().p("Eh4JAgKQ4vhyt/kjQugksg3m/IgjklQA/G4OVEqQOAEiYvBzQYvByfohPUAgwgBRAjfgEXUAjggEWAgGgGsQe/mcXlntQXkntMfnyQMzn/gtm7IAkElQA2G/s7IEQsfHy3kHtQ3lHt+/GdUggGAGrgjgAEWUgjfAEXggvABSQs7AgrxAAQxDAAuphEg");
	this.shape_162.setTransform(909.3684,556.3377);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFF66").s().p("Eh3yAi+Q4vhzuAkiQufktg3m/IhQqMMFc8gqxIBQKMQA3G/s8IEQsfHy3kHsQ3kHu/AGcUggFAGrgjgAEXUgjfAEWggwABSQs6AgrxAAQxEAAuohDg");
	this.shape_163.setTransform(907.1434,538.3877);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#362045").s().p("EhI7AeSQuMhyovjfQrfkmg4nKQg4nKKCnNQHolgNXlKQOrlsTQkbQTQkcVXinQVXioTvgWQTwgXPnB+QONByIvDfQLfEmA4HKQA4HKqCHNQnoFgtXFKQurFszPEbQzQEc1YCnQsPBgr5AxQr0Axq+AAQwYAAtMhrgAU46xQrvAwsJBfQ1HCmy+EXQy9EXucFlQtZFLnQFZQnQFaAiEaQAjEXIKDcQIKDcOKB1QO0B7SugOQUMgQWGitQVHimS/kXQS/kXObllQNYlLHQlZQHQlagjkaQgikZoWjgQoWjfuOhzQs9howFAAQqzAArsAwg");
	this.shape_164.setTransform(927.75,646.929);

	this.instance_16 = new lib.Group_40();
	this.instance_16.setTransform(929.3,666.7,1,1,0,0,0,676.9,134.3);
	this.instance_16.alpha = 0.3516;

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FDFEFF").s().p("Eg80AXSQtpg3qGiOQqOiQlkjaQkJijhSjDQBEjWIgj7QIRjzOMj4QOPj4SMjZQS0jhUpiiQUniiTIhJQSehGOvAVQOuAVI7BtQJOBwB1C/QghDSjZDeQklEppYEqQpREltBEIQtLEMvtDTQwPDaxeCJQ4pDB1hAAQpIAAolgjg");
	this.shape_165.setTransform(929.25,684.8765);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#9A9A9A").s().p("EhIpAcGQvIh5opj0Qo8j9grlcQgqlcHul/QHdlxOOlgQOOlgSykXQTdkhVkiqQVkipT9gUQTSgUPIB6QPIB6IpDzQI8D9ArFcQAqFcnuF/QndFxuOFgQuOFgyyEXQzdEh1kCqQ1kCpz9AUQirADilAAQwIAAtChpg");
	this.shape_166.setTransform(927.775,646.9255);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#362045").s().p("AgZLtQk9gKkhg8Qkhg7jghlQj6hxiCiUQiDiVAGikQAFimCNiLQCMiLEBhgQDnhVEkgoQEkgoE8ALQFcAMExBEQEoBBDeBuQDdBuB1CLQB5CQgFCdQgGCliMCMQiMCLkBBfQjOBNkBAoQkAAokZAAQg7AAhJgDgApYnRQjpAki6BFQivBBhlBTQhlBTgDBSQgDBRBfBaQBfBaCrBNQDKBbEJA2QEIA2EmAKQElAKELgkQEMgkDQhNQCvhBBlhTQBlhUADhSQADhXhnhdQhmhci6hPQmhivpCgUQhFgCg3AAQkDAAjqAkg");
	this.shape_167.setTransform(561.3508,825.0564);

	this.instance_17 = new lib.Group_44();
	this.instance_17.setTransform(561.35,825.05,1,1,0,0,0,152.5,62.7);
	this.instance_17.alpha = 0.1992;

	this.instance_18 = new lib.Group_45();
	this.instance_18.setTransform(1326.3,731.2,1,1,0,0,0,147.7,73.2);
	this.instance_18.alpha = 0.1992;

	this.instance_19 = new lib.Group_46();
	this.instance_19.setTransform(948.8,818.05,1,1,0,0,0,151.7,64.8);
	this.instance_19.alpha = 0.1992;

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FDFEFF").s().p("AgUJxQp4gWm4jGQjRhdhwh1Qhzh4AEh+QAEh/B8hwQB4hsDWhPQHEioJ3AWQE2AKEaA7QEQA5DQBdQDQBeBwB0QB0B4gEB+QgEB/h8BwQh4BtjWBPQjWBPkTAmQjhAfjwAAQhAAAhBgCg");
	this.shape_168.setTransform(561.3517,825.0391);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#362045").s().p("AuhNPQkQgfirhlQiphlguigQgtifBaiwQBbiuDXiqQDCiYEJh/QELiAExhXQKmjCIBBNQD1AlCaBhQCfBjArCYQAuCghbCvQhbCvjXCpQjBCYkKCAQkKB/kxBYQjqBDjmAiQjmAjjQAAQh6AAhvgMgAEzo+QjcAgjgBAQkbBRjyBzQj1B1iuCJQiTBzhHBuQhGBuAWBPQAYBPB2A4QB1A5C6AUQDdAZENgeQEMgeEZhRQEahQD0h1QD0h0CviJQCThzBGhuQBGhugWhPQgdhmiug8Qiwg9kNAAQi6AAjOAfg");
	this.shape_169.setTransform(1326.35,731.1311);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FDFEFF").s().p("AuTLRQjjgZiOhMQiThPgjh6Qgjh7BTiQQBRiMCziMQF8krJgitQJeiuHgA2QDjAZCOBMQCTBPAjB6QAjB7hTCQQhRCMizCMQl7ErpgCtQnRCFmHAAQh3AAhwgNg");
	this.shape_170.setTransform(1326.325,731.2646);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#362045").s().p("AzlJrQlhidggkFQgTidBsiZQBoiVDTiBQDTiBEhhbQEqheFZgqQFYgrE4ATQEvATDsBKQDsBKCJB4QCOB8ATCcQAVClh1CeQh1CfjvCGQjXB4kaBVQkbBVk7AmQjnAdjkAAQoZAAlciagAg8nvQo+BGmQDUQiyBeheBlQhfBlALBXQALBYB0BMQB0BLDDAxQG3BtI+hHQEjgjEDhNQEDhNDBhtQCkhbBWhiQBXhhgKhSQgSiSkehlQkohpmvAAQjMAAjXAbg");
	this.shape_171.setTransform(948.7601,818.0065);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FDFEFF").s().p("Av4I6Qjdg8iAhhQiFhlgPh+QgQh+BpiBQBlh+DHhvQGljsJ0hNQJzhNHRB/QDdA8CABhQCFBlAPB+QAQB+hpCBQhlB+jIBvQmkDsp0BNQjrAdjWAAQlhAAkihPg");
	this.shape_172.setTransform(948.75,818.025);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#E2E2E2").s().p("Av4I6Qjdg8iAhhQiFhlgPh+QgQh+BpiBQBlh+DHhvQGljsJ0hNQJzhNHRB/QDdA8CABhQCFBlAPB+QAQB+hpCBQhlB+jIBvQmkDsp0BNQjrAdjWAAQlhAAkihPg");
	this.shape_173.setTransform(948.75,818.025);

	this.instance_20 = new lib.Group_1_1();
	this.instance_20.setTransform(531.1,-93.5,1,1,0,0,0,47.8,55.5);
	this.instance_20.alpha = 0.3516;

	this.instance_21 = new lib.Group_2();
	this.instance_21.setTransform(433.95,164.5,1,1,0,0,0,70.2,168.5);
	this.instance_21.alpha = 0.3516;

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FF0000").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_174.setTransform(104.7249,582.232);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FF0000").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_175.setTransform(486.1533,599.8815);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FF0000").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_176.setTransform(1721.6494,383.9885);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FF0000").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_177.setTransform(1355.775,493.275);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FF0000").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_178.setTransform(917.255,561.25);

	this.instance_22 = new lib.Group_24();
	this.instance_22.setTransform(957.05,-28.4,1,1,0,0,0,526.3,331.5);
	this.instance_22.alpha = 0.3516;

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#272C2E").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape_179.setTransform(889.9336,56.365);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#66FF00").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_180.setTransform(104.7249,582.232);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#66FF00").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_181.setTransform(486.1533,599.8815);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#66FF00").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_182.setTransform(1721.6494,383.9885);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#66FF00").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_183.setTransform(1355.775,493.275);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#66FF00").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_184.setTransform(917.255,561.25);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#66FFFF").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_185.setTransform(104.7249,582.232);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#66FFFF").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_186.setTransform(486.1533,599.8815);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#66FFFF").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_187.setTransform(1721.6494,383.9885);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#66FFFF").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_188.setTransform(1355.775,493.275);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#66FFFF").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_189.setTransform(917.255,561.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.instance_16},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155,p:{y:70.515,x:889.9336}},{t:this.shape_154},{t:this.shape_153,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:981.298,y:253.755}},{t:this.shape_152,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:995.9097,y:301.6752}},{t:this.shape_151,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:956.2028,y:150.0739}},{t:this.shape_150,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1009.6798,y:131.7132}},{t:this.shape_149,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:981.297,y:253.8741}},{t:this.shape_148,p:{scaleX:0.7908,scaleY:0.7908,rotation:-16.9558,x:937.6531,y:322.5996}},{t:this.shape_147,p:{scaleX:0.7908,scaleY:0.7908,rotation:-16.9558,x:936.1841,y:322.3042}},{t:this.shape_146,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:939.3915,y:326.3212}},{t:this.shape_145,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:936.3242,y:322.4282}},{t:this.shape_144,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:936.5296,y:321.2146}},{t:this.shape_143,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1083.615,y:236.8019}},{t:this.shape_142,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1113.5138,y:295.1973}},{t:this.shape_141,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1009.6798,y:131.7132}},{t:this.shape_140,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1083.6418,y:236.8861}},{t:this.shape_139,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:915.12,y:-58.3087}},{t:this.shape_138,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:924.9259,y:124.8141}},{t:this.shape_137,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:914.6156,y:-58.9165}},{t:this.shape_136,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:756.9752,y:-2.2161}},{t:this.instance_11,p:{regX:56.4,regY:85.7,scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:756.15,y:-19.4}},{t:this.shape_135,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:926.7086,y:6.6285}},{t:this.instance_10,p:{regX:93,regY:51.7,scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:920.4,y:-16.25}},{t:this.shape_134,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:757.4497,y:-8.8034}},{t:this.shape_133,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:926.6978,y:6.5441}},{t:this.shape_132,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:828.23,y:64.7667}},{t:this.shape_131,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:839.3874,y:65.4271}},{t:this.shape_130,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:948.0027,y:-124.0422}},{t:this.shape_129,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:906.8633,y:-118.2338}},{t:this.shape_128,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:949.4907,y:-124.3111}},{t:this.shape_127,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:682.0899,y:-152.4913}},{t:this.shape_126,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9556,x:682.1932,y:-154.0386}},{t:this.shape_125,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:753.7419,y:-133.1496}},{t:this.shape_124,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9556,x:680.6352,y:-155.4031}},{t:this.shape_123,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:901.1185,y:-70.6528}},{t:this.shape_122,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:780.9779,y:-82.0515}},{t:this.shape_121,p:{scaleX:0.7909,scaleY:0.7909,rotation:-16.9562,x:871.4296,y:109.8778}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.instance_9},{t:this.instance_8,p:{x:957.05,y:-28.4}},{t:this.instance_7,p:{x:531.1,y:-93.5}},{t:this.instance_6,p:{x:433.95,y:164.5}}]}).to({state:[{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.instance_16},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_179,p:{x:889.9336}},{t:this.instance_22},{t:this.shape_154},{t:this.shape_178},{t:this.shape_119},{t:this.shape_177},{t:this.shape_117},{t:this.shape_176},{t:this.shape_115},{t:this.shape_175},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_174},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.instance_21},{t:this.instance_20},{t:this.instance_9},{t:this.shape_153,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:967.9803,y:263.175}},{t:this.shape_152,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:982.5775,y:311.0537}},{t:this.shape_151,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:942.9107,y:159.5841}},{t:this.shape_150,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:996.3414,y:141.2413}},{t:this.shape_149,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:967.9792,y:263.294}},{t:this.shape_148,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9539,x:924.3437,y:332.0385}},{t:this.shape_147,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9539,x:922.8759,y:331.7433}},{t:this.shape_146,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:926.1043,y:335.6643}},{t:this.shape_145,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:923.0399,y:331.7748}},{t:this.shape_144,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:923.2451,y:330.5622}},{t:this.shape_143,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1070.2081,y:246.2404}},{t:this.shape_142,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1100.0786,y:304.5856}},{t:this.shape_141,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:996.3414,y:141.2413}},{t:this.shape_140,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1070.2348,y:246.3245}},{t:this.shape_139,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:901.8658,y:-48.6216}},{t:this.shape_138,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:911.6575,y:134.3374}},{t:this.shape_137,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:901.3618,y:-49.2288}},{t:this.shape_136,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:744.3608,y:0.8221}},{t:this.instance_11,p:{regX:58.4,regY:86.5,scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:743.5,y:-9.85}},{t:this.shape_135,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:913.4421,y:16.2578}},{t:this.instance_10,p:{regX:95.2,regY:51.9,scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:907.8,y:-7.25}},{t:this.shape_134,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:744.3353,y:0.8348}},{t:this.shape_133,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:913.4312,y:16.1735}},{t:this.shape_132,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:815.05,y:74.341}},{t:this.shape_131,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:826.1974,y:75.0011}},{t:this.shape_130,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:934.7209,y:-114.2952}},{t:this.shape_129,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:893.6182,y:-108.4932}},{t:this.shape_128,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:936.2076,y:-114.5638}},{t:this.shape_127,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:669.0473,y:-142.7265}},{t:this.shape_126,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:669.0473,y:-142.7265}},{t:this.shape_125,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:740.6345,y:-123.4}},{t:this.shape_124,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:667.1411,y:-144.0898}},{t:this.shape_123,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:887.8771,y:-60.955}},{t:this.shape_122,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:767.8446,y:-72.3469}},{t:this.shape_121,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:858.2096,y:119.413}},{t:this.shape_155,p:{y:56.365,x:889.9336}},{t:this.instance_8,p:{x:960.3,y:-34.25}},{t:this.instance_6,p:{x:437.2,y:158.65}},{t:this.instance_7,p:{x:534.35,y:-99.35}}]},4).to({state:[{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.instance_16},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_179,p:{x:886.6836}},{t:this.instance_22},{t:this.shape_154},{t:this.shape_184},{t:this.shape_119},{t:this.shape_183},{t:this.shape_117},{t:this.shape_182},{t:this.shape_115},{t:this.shape_181},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_180},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.instance_21},{t:this.instance_20},{t:this.instance_9},{t:this.shape_153,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:983.6303,y:262.875}},{t:this.shape_152,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:998.2275,y:310.7537}},{t:this.shape_151,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:958.5607,y:159.2841}},{t:this.shape_150,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1011.9914,y:140.9413}},{t:this.shape_149,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:983.6292,y:262.994}},{t:this.shape_148,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9539,x:940.0937,y:331.6885}},{t:this.shape_147,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9539,x:938.6259,y:331.3933}},{t:this.shape_146,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:941.7543,y:335.3643}},{t:this.shape_145,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:938.6899,y:331.4748}},{t:this.shape_144,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:938.8951,y:330.2622}},{t:this.shape_143,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1085.8581,y:245.9404}},{t:this.shape_142,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1115.7286,y:304.2856}},{t:this.shape_141,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1011.9914,y:140.9413}},{t:this.shape_140,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1085.8848,y:246.0245}},{t:this.shape_139,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:917.5158,y:-48.9216}},{t:this.shape_138,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:927.3075,y:134.0374}},{t:this.shape_137,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:917.0118,y:-49.5288}},{t:this.shape_136,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:760.0108,y:0.5221}},{t:this.instance_11,p:{regX:58.4,regY:85.8,scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:759.15,y:-10.65}},{t:this.shape_135,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:929.0921,y:15.9578}},{t:this.instance_10,p:{regX:94.7,regY:52.5,scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:923.15,y:-7.3}},{t:this.shape_134,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:759.9853,y:0.5348}},{t:this.shape_133,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:929.0812,y:15.8735}},{t:this.shape_132,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:830.7,y:74.041}},{t:this.shape_131,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:841.8474,y:74.7011}},{t:this.shape_130,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:950.3709,y:-114.5952}},{t:this.shape_129,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:909.2682,y:-108.7932}},{t:this.shape_128,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:951.8576,y:-114.8638}},{t:this.shape_127,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:684.6973,y:-143.0265}},{t:this.shape_126,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:684.6973,y:-143.0265}},{t:this.shape_125,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:756.2845,y:-123.7}},{t:this.shape_124,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:682.7911,y:-144.3898}},{t:this.shape_123,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:903.5271,y:-61.255}},{t:this.shape_122,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:783.4946,y:-72.6469}},{t:this.shape_121,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:873.8596,y:119.113}},{t:this.shape_155,p:{y:56.365,x:883.0336}},{t:this.instance_8,p:{x:960.3,y:-28.4}},{t:this.instance_6,p:{x:433.95,y:164.5}},{t:this.instance_7,p:{x:531.1,y:-93.5}}]},4).to({state:[{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.instance_16},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_179,p:{x:886.6836}},{t:this.instance_22},{t:this.shape_154},{t:this.shape_189},{t:this.shape_119},{t:this.shape_188},{t:this.shape_117},{t:this.shape_187},{t:this.shape_115},{t:this.shape_186},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_185},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.instance_21},{t:this.instance_20},{t:this.instance_9},{t:this.shape_153,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:967.9803,y:272.425}},{t:this.shape_152,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:982.5775,y:320.3037}},{t:this.shape_151,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:942.9107,y:168.8341}},{t:this.shape_150,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:996.3414,y:150.4913}},{t:this.shape_149,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:967.9792,y:272.544}},{t:this.shape_148,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9539,x:924.3937,y:341.2385}},{t:this.shape_147,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9539,x:922.9259,y:340.9433}},{t:this.shape_146,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:926.1043,y:344.9143}},{t:this.shape_145,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:923.0399,y:341.0248}},{t:this.shape_144,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:923.2451,y:339.8122}},{t:this.shape_143,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1070.2081,y:255.4904}},{t:this.shape_142,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1100.0786,y:313.8356}},{t:this.shape_141,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:996.3414,y:150.4913}},{t:this.shape_140,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1070.2348,y:255.5745}},{t:this.shape_139,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:901.8658,y:-39.3716}},{t:this.shape_138,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:911.6575,y:143.5874}},{t:this.shape_137,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:901.3618,y:-39.9788}},{t:this.shape_136,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:744.3608,y:10.0721}},{t:this.instance_11,p:{regX:58.4,regY:85.9,scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:743.35,y:-1.25}},{t:this.shape_135,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:913.4421,y:25.5078}},{t:this.instance_10,p:{regX:95,regY:52.4,scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:907.7,y:2.05}},{t:this.shape_134,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:744.3353,y:10.0848}},{t:this.shape_133,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:913.4312,y:25.4235}},{t:this.shape_132,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:815.05,y:83.591}},{t:this.shape_131,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:826.1974,y:84.2511}},{t:this.shape_130,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:934.7209,y:-105.0452}},{t:this.shape_129,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:893.6182,y:-99.2432}},{t:this.shape_128,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:936.2076,y:-105.3138}},{t:this.shape_127,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:669.0473,y:-133.4765}},{t:this.shape_126,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:669.0473,y:-133.4765}},{t:this.shape_125,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:740.6345,y:-114.15}},{t:this.shape_124,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:667.1411,y:-134.8398}},{t:this.shape_123,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:887.8771,y:-51.705}},{t:this.shape_122,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:767.8446,y:-63.0969}},{t:this.shape_121,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:858.2096,y:128.663}},{t:this.shape_155,p:{y:56.365,x:893.4336}},{t:this.instance_8,p:{x:963.8,y:-28.4}},{t:this.instance_6,p:{x:440.7,y:164.5}},{t:this.instance_7,p:{x:537.85,y:-93.5}}]},4).to({state:[{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.instance_16},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_179,p:{x:886.6836}},{t:this.instance_22},{t:this.shape_154},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.instance_21},{t:this.instance_20},{t:this.instance_9},{t:this.shape_153,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:985.3803,y:259.775}},{t:this.shape_152,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:999.9775,y:307.6537}},{t:this.shape_151,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:960.3107,y:156.1841}},{t:this.shape_150,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1013.7414,y:137.8413}},{t:this.shape_149,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:985.3792,y:259.894}},{t:this.shape_148,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9539,x:941.8437,y:328.5885}},{t:this.shape_147,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9539,x:940.3759,y:328.2933}},{t:this.shape_146,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:943.5043,y:332.2643}},{t:this.shape_145,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:940.4399,y:328.3748}},{t:this.shape_144,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:940.6451,y:327.1622}},{t:this.shape_143,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1087.6081,y:242.8404}},{t:this.shape_142,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1117.4786,y:301.1856}},{t:this.shape_141,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1013.7414,y:137.8413}},{t:this.shape_140,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1087.6348,y:242.9245}},{t:this.shape_139,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:919.2658,y:-52.0216}},{t:this.shape_138,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:929.0575,y:130.9374}},{t:this.shape_137,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:918.7618,y:-52.6288}},{t:this.shape_136,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:761.7608,y:-2.5779}},{t:this.instance_11,p:{regX:58.4,regY:86,scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:760.8,y:-13.65}},{t:this.shape_135,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:930.8421,y:12.8578}},{t:this.instance_10,p:{regX:94.8,regY:51.7,scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:924.85,y:-10.85}},{t:this.shape_134,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:761.7353,y:-2.5652}},{t:this.shape_133,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:930.8312,y:12.7735}},{t:this.shape_132,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:832.45,y:70.941}},{t:this.shape_131,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:843.5974,y:71.6011}},{t:this.shape_130,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:952.1209,y:-117.6952}},{t:this.shape_129,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:911.0182,y:-111.8932}},{t:this.shape_128,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:953.6076,y:-117.9638}},{t:this.shape_127,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:686.4473,y:-146.1265}},{t:this.shape_126,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:686.4473,y:-146.1265}},{t:this.shape_125,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:758.0345,y:-126.8}},{t:this.shape_124,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:684.5411,y:-147.4898}},{t:this.shape_123,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:905.2771,y:-64.355}},{t:this.shape_122,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:785.2446,y:-75.7469}},{t:this.shape_121,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:875.6096,y:116.013}},{t:this.shape_155,p:{y:56.365,x:886.6836}},{t:this.instance_8,p:{x:957.05,y:-28.4}},{t:this.instance_6,p:{x:433.95,y:164.5}},{t:this.instance_7,p:{x:531.1,y:-93.5}}]},4).to({state:[{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.instance_16},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_179,p:{x:886.6836}},{t:this.instance_22},{t:this.shape_154},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.instance_21},{t:this.instance_20},{t:this.instance_9},{t:this.shape_153,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:985.3803,y:259.775}},{t:this.shape_152,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:999.9775,y:307.6537}},{t:this.shape_151,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:960.3107,y:156.1841}},{t:this.shape_150,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1013.7414,y:137.8413}},{t:this.shape_149,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:985.3792,y:259.894}},{t:this.shape_148,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9539,x:941.8437,y:328.5885}},{t:this.shape_147,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9539,x:940.3759,y:328.2933}},{t:this.shape_146,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:943.5043,y:332.2643}},{t:this.shape_145,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:940.4399,y:328.3748}},{t:this.shape_144,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:940.6451,y:327.1622}},{t:this.shape_143,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1087.6081,y:242.8404}},{t:this.shape_142,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1117.4786,y:301.1856}},{t:this.shape_141,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1013.7414,y:137.8413}},{t:this.shape_140,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1087.6348,y:242.9245}},{t:this.shape_139,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:919.2658,y:-52.0216}},{t:this.shape_138,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:929.0575,y:130.9374}},{t:this.shape_137,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:918.7618,y:-52.6288}},{t:this.shape_136,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:761.7608,y:-2.5779}},{t:this.instance_11,p:{regX:58.4,regY:86,scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:760.8,y:-13.65}},{t:this.shape_135,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:930.8421,y:12.8578}},{t:this.instance_10,p:{regX:94.8,regY:51.7,scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:924.85,y:-10.85}},{t:this.shape_134,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:761.7353,y:-2.5652}},{t:this.shape_133,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:930.8312,y:12.7735}},{t:this.shape_132,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:832.45,y:70.941}},{t:this.shape_131,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:843.5974,y:71.6011}},{t:this.shape_130,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:952.1209,y:-117.6952}},{t:this.shape_129,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:911.0182,y:-111.8932}},{t:this.shape_128,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:953.6076,y:-117.9638}},{t:this.shape_127,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:686.4473,y:-146.1265}},{t:this.shape_126,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:686.4473,y:-146.1265}},{t:this.shape_125,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:758.0345,y:-126.8}},{t:this.shape_124,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:684.5411,y:-147.4898}},{t:this.shape_123,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:905.2771,y:-64.355}},{t:this.shape_122,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:785.2446,y:-75.7469}},{t:this.shape_121,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:875.6096,y:116.013}},{t:this.shape_155,p:{y:56.365,x:886.6836}},{t:this.instance_8,p:{x:957.05,y:-28.4}},{t:this.instance_6,p:{x:433.95,y:164.5}},{t:this.instance_7,p:{x:531.1,y:-93.5}}]},4).to({state:[{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.instance_16},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_179,p:{x:886.6836}},{t:this.instance_22},{t:this.shape_154},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.instance_21},{t:this.instance_20},{t:this.instance_9},{t:this.shape_153,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:985.3803,y:259.775}},{t:this.shape_152,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:999.9775,y:307.6537}},{t:this.shape_151,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:960.3107,y:156.1841}},{t:this.shape_150,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1013.7414,y:137.8413}},{t:this.shape_149,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:985.3792,y:259.894}},{t:this.shape_148,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9539,x:941.8437,y:328.5885}},{t:this.shape_147,p:{scaleX:0.7901,scaleY:0.7901,rotation:-16.9539,x:940.3759,y:328.2933}},{t:this.shape_146,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:943.5043,y:332.2643}},{t:this.shape_145,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:940.4399,y:328.3748}},{t:this.shape_144,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:940.6451,y:327.1622}},{t:this.shape_143,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1087.6081,y:242.8404}},{t:this.shape_142,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1117.4786,y:301.1856}},{t:this.shape_141,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1013.7414,y:137.8413}},{t:this.shape_140,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:1087.6348,y:242.9245}},{t:this.shape_139,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:919.2658,y:-52.0216}},{t:this.shape_138,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:929.0575,y:130.9374}},{t:this.shape_137,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:918.7618,y:-52.6288}},{t:this.shape_136,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:761.7608,y:-2.5779}},{t:this.instance_11,p:{regX:58.4,regY:86,scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:760.8,y:-13.65}},{t:this.shape_135,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:930.8421,y:12.8578}},{t:this.instance_10,p:{regX:94.8,regY:51.7,scaleX:0.7905,scaleY:0.7905,rotation:-16.9542,x:924.85,y:-10.85}},{t:this.shape_134,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:761.7353,y:-2.5652}},{t:this.shape_133,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:930.8312,y:12.7735}},{t:this.shape_132,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:832.45,y:70.941}},{t:this.shape_131,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:843.5974,y:71.6011}},{t:this.shape_130,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:952.1209,y:-117.6952}},{t:this.shape_129,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:911.0182,y:-111.8932}},{t:this.shape_128,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:953.6076,y:-117.9638}},{t:this.shape_127,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:686.4473,y:-146.1265}},{t:this.shape_126,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:686.4473,y:-146.1265}},{t:this.shape_125,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:758.0345,y:-126.8}},{t:this.shape_124,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:684.5411,y:-147.4898}},{t:this.shape_123,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:905.2771,y:-64.355}},{t:this.shape_122,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:785.2446,y:-75.7469}},{t:this.shape_121,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9545,x:875.6096,y:116.013}},{t:this.shape_155,p:{y:56.365,x:886.6836}},{t:this.instance_8,p:{x:957.05,y:-28.4}},{t:this.instance_6,p:{x:433.95,y:164.5}},{t:this.instance_7,p:{x:531.1,y:-93.5}}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.1,-381.2,2269.8,1281.5);


(lib.spaceshipWoman = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F58E84").s().p("AgVBiQgjgMgUgVQgWgWgGgIQgPgSgFgRQgIgcAKgbQAKgdAZgLQAkgRA8AeQAMAGAGAAQAHAAAOgGQAZgNAQAAQALAAAKAFQAKAFAFAJQAHAOgIAQQgHAPgPAGQgXALgngMIgegJQgQgGgNAAQgOgBgMAEQgNAFgFALQgHANAGAPQAFAOAMANIAjAaQAXASABAMQABANgNAAQgIAAgNgEg");
	this.shape.setTransform(543.1948,210.5177,0.9306,0.9306,0,14.9938,-165.0062);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE776B").s().p("AhCB9QhDgJgrgfQgWgQgOgVQgPgYgCgYQgCgeASgcQASgcAdgNQAcgNAiACQAfABAeAMIAQAFQAIAAANgHQBPgoBCASQAmAJAaAeQAbAeAAAlQAAAdgSAcQgRAZgbASQgpAZhMAMQgkAGggAAQgZAAgYgDg");
	this.shape_1.setTransform(536.8156,208.3307,0.9306,0.9306,0,14.9938,-165.0062);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Aj7FDQhvhGgOihQgFgzAPhIQARhWAlhIQBljCDHACQDGABBtCtQBNB6AGCJQAEB7g9BUQhWB4jKADIgRAAQitAAheg7g");
	this.shape_2.setTransform(543.1236,187.3078,0.9306,0.9306,0,14.9938,-165.0062);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373737").s().p("AEiBfIgBgBQgIgGgYgPIglgTQghgRgsgQQhSgbhRgGQgSgCgYAAIgrABIgqAGQgZADgQAEQhBANhfAzIgCABQgKAFgKgCQgLgDgGgJQgHgKADgMQACgLAKgHQBihBBHgWQATgIAcgGIAvgMQBIgJAZAAQBfgDBiAYQA4AOAmAPQASAHAcAMQAdAOARAKIAGADQAWAPAEAbQAFAbgQAVQgQAWgaAEIgMABQgUAAgRgMg");
	this.shape_3.setTransform(639.2691,81.7196,0.6209,0.6209,0,14.9973,-165.0027);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373737").s().p("AlRBqQgagEgQgWQgQgVAEgbQAEgaAWgPIAGgEQAWgNAZgLQAZgMAUgHQArgQAzgNQBfgXBiACQAUAAAcAEIAxAGIAwALQAbAGATAIQBHAWBiBBQAKAHADALQACAMgHAKQgGAJgLADQgKADgKgGIgCgBQhigzg+gNQgQgEgZgDIgqgGIgqgBQgZAAgRACQhSAGhSAbQgvASgeAPQgSAJgTALQgVAMgLAIIgBABQgRAMgUAAIgLgBg");
	this.shape_4.setTransform(530.5548,50.4232,0.6209,0.6209,0,14.9973,-165.0027);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGBrQgegtAAg+QAAg9AegtQAdgrApgBQAqABAdArQAdAtABA9QgBA+gdAtQgdAsgqAAQgpAAgdgsg");
	this.shape_5.setTransform(621.3723,121.2028,0.6209,0.6209,0,14.9973,-165.0027);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Aj2FOQhniLAAjDQAAjDBniKQBmiKCQAAQCRAABmCKQBnCKAADDQAADDhnCLQhmCKiRAAQiQAAhmiKg");
	this.shape_6.setTransform(617.6137,129.4797,0.6209,0.6209,0,14.9915,-165.0085);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373737").s().p("ABSBrIhUgaQgzgWgbgWQgngcgVgkQgXgqAEgnIAAgBIABABQALAjAgAaQAaAVAlAJQAZAHAsACIBHgGIADAAQAZgDAVAQQAUAPADAaQADAagQAUQgQAUgaADIgGABQgJAAgIgDg");
	this.shape_7.setTransform(645.9629,125.2587,0.6209,0.6209,0,14.9973,-165.0027);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhGBrQgegtAAg+QAAg9AegtQAdgrApgBQAqABAdArQAeAtAAA9QAAA+geAtQgdAsgqAAQgpAAgdgsg");
	this.shape_8.setTransform(515.8595,85.783,0.6209,0.6209,0,14.9973,-165.0027);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Aj2FOQhniKAAjEQAAjDBniKQBmiKCQAAQCRAABmCKQBnCKgBDDQABDDhnCLQhmCKiRAAQiQAAhmiKg");
	this.shape_9.setTransform(511.3829,95.3179,0.6209,0.6209,0,14.9915,-165.0085);

	this.instance = new lib.Group_0();
	this.instance.setTransform(642.5,-16.2,0.368,0.368,0,0,0,457.4,231.8);
	this.instance.alpha = 0.3984;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00080F").s().p("AgTBJQgygOgkgkQgRgRgBgZQgBgWATgUQAHgIAMgFQAMgFALAAQAZAAARASIAJAHIAOAJIAVAFIATAAIAGgBQAYgGAVAMQAVAMAIAXQADAKgCAOQgBAMgGAKQgNAWgXAGQgYAGgYAAQgaAAgZgHg");
	this.shape_10.setTransform(477.1338,57.5223,0.368,0.368);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00080F").s().p("AC4GYQhEgng8g4QhQhLhdiKIhIhvQg1hTgXgzQgLgYAFgWQAGgWAVgOQAKgHALgBIgjhoQgHgXANgWQANgVAXgHQAXgIAXAOQAUAMAIAXIBdERIAAAAIACADQAHASAJAPQAQAcAaAiIABABID0E5QARAVABAWQAAATgNARQgOARgWAFIgMABQgQAAgNgIg");
	this.shape_11.setTransform(469.7283,46.8171,0.368,0.368);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00080F").s().p("AgvO+QgYgFgMgXQgNgWAHgXQAPgqAKguIAEgRIAPhZIAAgCIARirIhABlQgdAxgRAYQgdApgeATQgXAPgaABQgcACgXgNQgUgLgNgUQgNgTgDgXQgKg/AchpQAShDAdhTIA1iTQBvkpCJkdQAag2ArhUIBHiKIABAAQACgIAEgIIAFgHIAUgsIABgDIAHgQIAOg1IgCgQIAAgCIgBgGQgEgaAKgUQAFgIAGgGQABgTgBgSQgCgYATgSQATgRAYgBQAXgBATASQAOAPAEAcIABASQABAagCAaQgEAigJAkQAGBMgIBMQgEAqgJAqIACAIQASBOgIBKQgDArgLAsQgCBvgVC4QgOB6gFAlQgOBZgXBCQgLAigTAsIgiBNIg2CEQgmBmgjB1IgWBOQgJAYgTALQgNAIgQAAQgIAAgIgCgAj5J/IgBACQAAAAAAAAQABAAAAAAQAAgBABAAQAAgBABgBIAAgBgAgIgMIgBAEQhBCagtB9QgXA9gbBRQghBfgNAxIgJAuICpkJIAxhMQgRgDgPgOQgRgTgBgXQAAhDAYhJQAQgvAdhCIANgaIAEgXgACdIQIAAACIABgEgAB/ETIgKAsQAJgYAGgVIAFgOIgKAPgACiB/IAAAFIAAgDIABgEIgBACg");
	this.shape_12.setTransform(835.4223,101.0497,0.368,0.368);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#994F2F").s().p("AjvKKQgagGgagUQgYgTgOgYQgQgagCgeQgGgeAJgeQAUhvAehlQA6jEBhi+QArhWAzhRIAwhNQATghAOgdQAJgaAFgXIgBALIAEgZIgDAOIABgQQAAg6AsgwQAlgoBFgEQAbgBAeANQAdAMAUAUQAUAVAMAcQAMAdAAAcQAAAzgOA3QgFAVgKAbIgUAvQgUAugoBAIhDBrQg8BngyByQhRDJgnDVQgFAbgUAZQgSAVgaARQgfAUgpAAQgUAAgXgFg");
	this.shape_13.setTransform(827.8028,97.3044,0.368,0.368);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#994F2F").s().p("AkBZSQgsgKgigsQgfgogBgzQgHitANjGQATkiBDmMQAThtApjaIAfihQAPhQAJg9QAQiFgQiAIgIg3IgYhTQgbhYgOhBQgRhUgBhJQAAghAOgeQABgOAEgPIAQgkQAFgLAIgJIgMggQgwh5gPgqQgghdgQhLQgNg+Acg1QAVgoAzgVQAtgUA0AMQAZAGAbAUQAcAVAKAWQAyBuAoBrQA8ChApCuQAYBSATBeQATBhATCPQAMBdAOCHIAYDlIBkOsQADAcgOAeQgLAZgWAXQgmAqhEACQgMABgNgCQgTBUgdBIQgyB9hABtQgfA1haCMQglA5g1AMQgUAEgUAAQgTAAgUgEg");
	this.shape_14.setTransform(830.3598,45.338,0.368,0.368);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#994F2F").s().p("AAVLfQgcgMgUgUQgWgUgJgdQgOgaABgfQAKhfACgyQADhLgHg9IgBgJIgHg6QgGg3gBgrQgDhOgJhJIgBgKQgVibgMhNQgOhagFgZQgKgzgPgoQgIgPgJgPIgLgMQgpgngDhDQgCg3AugzQASgUAfgMQAdgMAcAAQAdAAAcAMQAbAMAVAUQBPBLAkCBQAPAzAQBsQANBQAPBrIAQBvQAJBAADAuQACAWACBGQABAxAEAhIABAIIAJBDQAGA6AAAuQgBA1gNB6QAAAogUAjIgYAfQglAohFAEIgEAAQgaAAgbgMg");
	this.shape_15.setTransform(825.4493,10.5546,0.368,0.368);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#994F2F").s().p("ADRGNQghgEgYgPQg6glhOg+QhCg1g6g+QgSAYgaAQQgaARgeABQgTAGgVgGQgegBgZgRIgfgXQgUgSgMgfQgMgeAAgbIAKlDQACg9AqgtQAmgpBEgDQAbgBAeANQAdAMAUAUQAUAVAMAcIAFAMIAHAHIAYAfQAoBKAvBBQBRBlBmBRQAnAcAnAZQAyAfATA7QARA2ggA9QgNAYgZATQgZATgbAHQgTAGgVAAIgTgCg");
	this.shape_16.setTransform(739.5265,14.997,0.368,0.368);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#994F2F").s().p("AKEHtQgdgBgagRIllk4IgygsIgggcIALAIIgRgNIgBAAIgBAAQmHAUmDgHQg8AAgugsQgWgTgJgdQgLgRAAgUQgGgdAJgeIAPgkQANgYAZgTQAXgRAdgJIACgBIgcgFQgagEgZgVQgWgSgRgaQgfgwAQhDQAGgaAUgaQATgYAYgOQAZgQAfgCQAdgGAfAJQBqARCGAYQGvBRGgBwQAmAKAcAcQATATALAXQAcAJATAWIAYAeQA6BZA3CBQApBjAXBnQAHAegDAdQgEAggPAYQgVAhghAVQgaARgeABQgKADgKAAQgKAAgKgDg");
	this.shape_17.setTransform(621.6047,-49.4544,0.368,0.368);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#994F2F").s().p("AhpBqQgpgmgDhEQgBgaANgeQAMgdAUgUQAVgUAcgMQAcgMAcAAQA6AAAwAsQApAlADBEQABAcgMAeQgNAcgUAUQgUAVgcALQgdAMgdAAQg5AAgwgsg");
	this.shape_18.setTransform(472.5842,46.6768,0.368,0.368);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#994F2F").s().p("AhpBqQgpgmgDhEQgBgaANgeQAMgdAUgUQAUgUAdgMQAcgMAcAAQA6AAAwAsQApAlADBEQABAbgMAeQgNAdgUAUQgUAVgcALQgdAMgdAAQg5AAgwgsg");
	this.shape_19.setTransform(472.5842,45.0026,0.368,0.368);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#994F2F").s().p("AlFMSQgggFgZgOQgYgOgTgYQgSgYgIgcQgyitA7jZQAQg8AdhNIA0iGQAlhaAag0QAmhNAqg4QArg5A/hIIBuh8IDMjmQAlgpBFgDQAvgCAsAiQAmAdAQAxQARA0ggA/QgyBkg4BUQgaAmhWBzQgfAqgSAiIgoBPQgrBShMBLIg1A2QgXAWgQATQgNATgJASIgIAWIgLAcQgHARgGAKQgKAQgOARQgTA/gJA0IABgLIgEAYIADgNQgGA6AFA1QADAUAGAVQARA5ggA7QgZAwhAAVQgRAFgTAAQgLAAgMgBg");
	this.shape_20.setTransform(492.9071,-52.1043,0.368,0.368);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#994F2F").s().p("Al8JHQgYgNgTgZQgTgZgHgbQgIgcAEgfQAEggAPgYQAohDAwhMQBLh2BaiAIBTh2QAlg4AXgxQATgtAThEQAZhUAKgbQAPgoATgbQAXggAggTQAogYAwAAQAWAAAUAFQAPgFARgCQAcgDAfAHQAaAGAZAUQAYATAPAYQAQAZABAfQAHAdgJAfQg5CZhpBoQgUAWgcAJIgBABQgkBTgtBBIg5BSIg5BRQh1CthmCpQgeAyg8ATQgTAGgTAAQglAAgogVg");
	this.shape_21.setTransform(495.4416,-56.9063,0.368,0.368);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#994F2F").s().p("A7TJpQgogLgagcQgdgcgKgnQgKgnAKgoIAHghQAFgxgEgyQgIgvgSgvQgLgYgNgWQgfg2ARg7QAQg6A0ghQAYgPAhgEQAfgEAcAIQAbAHAYATQAYASAOAYQBDBwASCEIAFAtQFXgzDvgoQGBhBE0hHQFphSE9hoQCWgyC1hHQB1gvDRhXQDNhWB6gvQC1hFCYgsQA7gRA2AgQA1AfATA7QAIAbgFAgQgEAggPAZQgOAYgYATQgYASgbAIIhTAZQiUAui3BJQhdAljpBiQl+CfkVBYQk5BilvBRQkxBDmFBBQjIAgnzBKQgUAGgUAAQgUAAgUgGg");
	this.shape_22.setTransform(535.8804,34.0073,0.368,0.368);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#994F2F").s().p("A2cL4Qg1gMgsgdQgrgagbgcQgYgYgegtQgVgegUg9QgOguACgtQABgUALhIQAXhQA6g7QA7g6BQgXQCCgfChgqQEOhGD1hKQBwghCQguIB8goIBOgaQAbgPAngaQApgbA4gYQEHh1EnhkQAOgSAQgRQA1gsAkgZQAygjAvgVQBKgrBVAAIBUALQBQAWA7A7IAxBAQAjA2ADA/IADAPQBogKBhgDQBWABBIAqIBAAxQA7A7AWBQIAMBUQACBBgeA4QgSA6gvArQgrAug6ATQg6Aeg/gDQiUAFiTATQjsAikXBHQi7Avk1BbQl0Buh6AiQjQA4kmBAQicAhhfAjQgqARgVAHQgzAQg5ACIgIAAQgzAAgxgNg");
	this.shape_23.setTransform(551.8319,21.0319,0.368,0.368);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#994F2F").s().p("EggsAboIhLggQg4geghgzQgpgsgPg/Qg0i9gWj1QgQixANi6QAZl1BulWQBrlLCzlBQCRkEDLkLQBbh2BbhvIASgmQASgiAdgpIA2hGQAigqAoghQBWhIA5ggQBxg9CCAeQAkAIAfASQAngRAagHQAggIBFgGQAMgCAKABIAvAGQAbACAUAFQAEAAAGADQAwAPAgASIAIAGQAtAdAXAYIAIAJIAgAlQARAXAJATIAVAvQAMAcAEAVIAHAvQB8g2BcgdQDchHESgVQBCgCA4AdQAoALAdAdQAkAVAVAkQAdAdALAoQAeA5gDBBIgDAWQB4gnB7gZQA/gTA+AOQAqAAAmAVQAoALAdAeQAYAOARAUQAtARAjAgQA0AhAdA3QAWAmALApIBzgQQB7gQBdgDQBDgCBkATQBTAPBBAtQA5AqATASQAJAJAKANIARAXIASAXQALAOAGAKQAMAVAbBEQAJAZAFAkIAHA+QADAaAAAWQgCAmgHAyIgNBYQgJA6gLA5QgTBugcBzQg2DhhQDaQgWBQg7A7Ig/AyQgzAhhDAHQg9AGhAgPQg9gOgugqQg0ghgdg3Qgjg3gDg/QgOg+AUg/QAuiaAnibIg+AFQgXABgZAAQACAUgBAUIgLBTQgPA+gqAtQggAzg4AeIrYF9Ip4FMQl1DFkDCDQleCylGCDQlVCHkuA/QgpALgqAAQgqAAgqgLgA3pFyIB0g/QgeAHgdAKQgWAKgUANIgMAMIAAgBIAAABIAAAAIgDALgA0WlGQA7ABBXAIICRANQCBAKB0gKQBrgSCBgmIAzgQQgRgagJgeQgeg4ADhBQgBgWADgWIgVgEQgqAAgmgWQg7gTgqguIgyhAIgfhLIgMhUIgGhWIjCBvIgEACIg3BGQg1BGg3BNQh5CthiCtQA4gFAtAAIAIAAg");
	this.shape_24.setTransform(551.7363,-14.6031,0.368,0.368);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#994F2F").s().p("EAYbAoSQgrAAglgWQhMgfgyhCQhEhXAAhnIAMhUIAfhLIAIgMIgCgIIgKgRIgDgFIgFgEIgdgQQgggLgjgHQhHgFhPAIQguAHgjADQhUAAhLgrQgXgNgUgRQggA4giA4Qg1BYhhAoQglAWgrAAQgqALgpgLQg/gCg3gjIg/gyQgygxgfhaQhgkPgkl+QgUjlAIktIADhZQjuhMkAhsQhegnhggsQgBAXgDAYQgKA8gfA7QgXArgqAiQglAfgxAVQhgAphtgZQg9gOgugrQgzghgeg3Qh2ighnigQhBhkg8hnQgKAdgRAcQgrBKhHApQhHAqhYACQg0ABgqgNIg/CHQgkBKhCA4QhGA5hOARQhBANgmgCQg3gDgjgKQgdgJg3gZQghgQgoghQgPgGgNgIQg0gegmgzQgkgugSg5IicjHQg7g6gWhRIgMhSQgCgyAUg0QARguAhgrQA9hQBnghQA/gUA+AOQA/ADA2AjQBiBHAtAuIALALIA0hxQAYgzA3goQAwgiA9gUQAWgHAXgDQAPg9ATg7QAihmBLg7Qgwh2gsh5QgVg3AMhFQADgXAHgWIkAmNQghgzgHhDQgGg8AOhBQANg5ApgyQAlguA2gjQAxgfBFgJQBCgIA7AQQBvAfBNByQCEDEB2C/IAcAvIAAgCIABgHQgWgqgFg0QgFg0AKg4Qgeh5gih5Qghh3BBh8QAXgqAqgjQAlgfAxgVQBggoBtAZQA3AMA1AqQAvAmAhA0QBKB0BLB6QAAgsASguQARgvAhgqQA+hQBlghQBAgUA+AOQA/ADA2AjIA6AoQAkgtA0geQAjgVAmgKQgEgaAAgaIALhUQANg5ApgzQAlgtA2gjQAxggBEgIQBCgIA6AQQA6AQAyAnQAzAmAeA0QDyGhC8G2QArBKAABVIgLBUQgKAvggAsQgdAogqAgQg3AqhDAQQBwJLgbKFIgGB/IBcARQAUgRAYgQQAzghBDgHQA8gGBBAPQA3AMA1AqQAhAaAYAeQBuAGCnAGQDIAIBjAFQCmAJCFAPQBzAMAxAHQBdANBGAUQBYAaBgAwQAnATAqAeQAcAUAuAnQAoAgAhArQAlAuARAYQAdAoASAjQBGCJAaCBQAZB/AHCWIALAYQALAcAFAaQALA7AAAmQABAvgNAxQgmCQiQBgIgRALIAIALQA7A7AWBQQAXBUgXBTQgWBQg7A7Qg6A7hRAWIwjCZQglAMgkAAQgbAAgZgGgAeUdwIAzgHIgngGIgRgDIAFAQgAa6PTIAXA2IAWAGIBLAgQB8A6B8BJIBOAwIAjgWIBjhEQAjgVAjgRIgVgjQgOgPgOgNQgUgNgWgLQhGgXhcgPQiogUjrgMIAGAOgAAcjkQgHAegQAdQAHAgAAAiIgLBUQgIAngXAkIBHAZQAFirgCiUIgNgFIgDAPg");
	this.shape_25.setTransform(698.1371,9.6919,0.368,0.368);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#994F2F").s().p("ABTbSQgfAAgagPQgpgOgfghIgjgtIhVidQgIgKgGgMIhSiZIgNAPQg4A8hnAGQgpACgtgUQgrgSgegeQghgfgOgqQgVgoACguQghkDAykPIAAgBIgSApQg6CBhtB7QgnArg/AQQgaAGgaABIgNALQgbAWgjAPQgaAPgfAAQgeAJgegJQgsgBgngZIgugjIgjguIgXg2Qg4jUgNjSQgaAPgaALQiLBBhnAOQguAPgsgLQgfAAgagPQgcgHgWgWQgYgOgQgaQgeghgKgsIgIg8QAAg0Aeg9ICakpQEPoHEnoMQAphKBdgdQAqgOAvAIQAOACANADIDqm3QATglAmgcQAigZArgOQAugOAsAKQAfAAAaAPQAqAPAeAgIAjAuQAZAmACAsQAKAMAIAPIAWA2QAcBkAUBoQAcCSANCNQAHgMAIgLQAcgmAkgTQA3gdA7gCQAZgBAXAGQAHgVALgSIAjguQAfghApgNQAagQAfAAQAugKAsAOIA1AXQBFAkAjBiQAzCPA1COIADgBQA6gPA7APQAagTAhgHIA7gIQAvgCAoAVQAYAIATANQAcgkAngZQAlgYAugCQAegIAeAIQAuACAmAYIAtAkQA/BDA4BHQARgEAQAAQAjgbArgMQA8gQA8AQQA4AQArAqQBPBFBWB3QAcAlAZAtQALAIAKAKQAtAsARA9QAJAjgBAdIgDAgQgDAVgDAKQgJAggQAbQgMAWgYAaQgqAqg5ASIgOAQIhRBgQhGBWhVBuIAEgFQhRBqhQBvQlFHHkJH1QgWAogkAXQghAegsAKQg7AOg8gOQhDgPgyhBQgeghgLgsIgIg8QAChfAIhrQAJhtAOhpQgFgNgEgNIgCgHIgKAeIgdDKQgOAwgeAkIgYEKQABAvgVAoQgNApghAfQgsAog4ASQgZAIgaAAQgTAAgTgEgANbEaQAiANAeAXQAkAYAWAnIAJAVQCNjLCgjLQgagOgVgWIgPgVQggAdgoAOIAAAJQADApgTAsQgSAnggAiQgdAhgrAOQgbAPgeAAQgsALgtgPIg2gWQgkgTgdgnQgcglgLgoQgIgigLghQgRAQgWALQgZAOgcAIIBaEDQArgTAygCIAHgBQAgAAAhANgAn7DmIgaAiQgOBFgMAyIAAADQAlgdAtgQQAAhVgFhWQgIAfgRAdg");
	this.shape_26.setTransform(752.5629,3.0334,0.368,0.368);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#994F2F").s().p("EAm+AHbMgrxgG9IuDCnQgPACgDgNQgEgOAOgEQE0hmEuhTIq0huQibAAh9ACQovAInMApQgOABAAgPQAAgOAOgCQGFg0GHglQKshAK/gVQEjgIEkAAQjggajigXInUgGQgPAAAAgOQAAgOAPgCIAhgEIhygJQgPgBAAgPQAAgPAPABIDmATIAjADIAEAAQC9gUC4gPQPahPPeA6QAPABAAAOQAAAOgPABQk8AckzAqIWkARQANAAACAOQABANgMADIh6AYQnOBYoaAoQm4Aho3AEInBBTQCBAWCCASQOBCHOWAfQAPABAAAPQAAAPgPgBQj2gIkSgSQp+gqp8heIBJAPQImB1H/BdIEJAxIEIAsQEOAtEMAoQAOADgEAOQgEANgLAAIgDgBgAL7CqQmphWmmhfIiHAYIPWCdIAAAAgAvUB8IJKhsIiKgVQjhA8jfBFgAnNgZICbAZICWgcIhLgRQgOgDAEgOQAEgOAOACIChAdIFuhFQijAAi+gCIgyAAQi2Ari0AwgAoWgkQCcgrCdgmIlSgFQkugEjzgBgAy3jVQmkAcmgArQEUgLE3gDIA8gBQADgNAMgBIXvgeQCHgdCHgaIjjgCIgPAAQqrAAqyAtgAORjYQAMACgCAOQgCANgMABIr/APIh1AaQEDACC4gBICJgaQAOgCAEAOQACAIgDAEQIQgHG0glQHKgmGWhMI3RgSQhnAQhnARIDTAQQAOABAAAPQAAAPgOgBQiXgFiYgEID6AkgArXiaIEgAEIFSAEIBdgWgAEqjMIGwgJIjageIgKgBQhmAThmAVgAJ7krICVgZIovgHgAmXl9IC0AOISiAPQEwguE2ghQi4gIiygDQiGgDiGAAQqkAAqiBAg");
	this.shape_27.setTransform(661.4113,-32.1532,0.368,0.368);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#020202").s().p("EBPiAzxQg3gSgbgzQgbg0ARg4QAWhMAViNQAqkYgElSQgLw0nDzjQk3tgmtotQmsouobjwQnJjMnzAsQicANiPAlIhxAkQg0AVgzgUQg0gTgZgyQgxhdhyhsQjgjVlWhzQndihqMBAQtaBUxAHUQxRHdqIL3QqHL5ixQEQhbIPArIzQAcFvBOFCQZXk9U+pqQQAnYMZplQGBkrE+k/QBUAKBHANQBmASBPARQl3GQneFzQtBKIw1HtQ2LKJ60FBQg1AKgtgcQgugbgQgzQhOj6gvlrQhcrPB0qxQCfupIgrvQLMvdUvo7QcpsVSlD8QGlBZE3DZQDUCTCHC6QERhPExABQHPABGuC+QJTEIHUJWQHUJWFMObQHbUlAHRjQACFlguEpQgaCigbBWQgOAtgmAbQglAbguAAQgTAAgXgGg");
	this.shape_28.setTransform(652.5529,-30.4675,0.368,0.368);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#020202").s().p("AFgHLQhFgrg0gZQgngTgpgRQgfi+gaiyQhtCMh8CKQhbgVhegSQhQgOg/gJQDqj0CsjqQBWh1AqhHQAXgnApgTQAqgTAtAKQAtAKAfAiQAeAiAFAtQAtGtBeIAIh0hLg");
	this.shape_29.setTransform(692.2245,-52.0934,0.368,0.368);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#020202").s().p("AFAYwQkvhSlTjrQmukqlLu7Qjvqtimu7QA+AeBlBCQBwBJAwAaIAXB1QhvgDg3AAQgXAAgOAPQgMAOAAAUQABAwAwADQBXAGBnAKQCoMdDWIiQEKKoE1DWQEaDED0BIQDzBHDGg2QC0gyCGiZQBEhMAfhFQAYg1A3gVQA2gUA1AXQA2AYAUA2QAVA2gXA1QgvBphfBtQi7DYkGBKQh9AkiGAAQiUAAifgrg");
	this.shape_30.setTransform(753.2934,25.1556,0.368,0.368);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#390075").s().p("Ag+AvIBAh2IA8ARIgTAeQgmA3gXApg");
	this.shape_31.setTransform(540.7301,446.3721,0.368,0.368);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#020202").s().p("EAJSAg6QtaovpXuyQkundjhoqQipmfhymuQoJMTv3HPQlECSlUBiQi1A0h9AWQgwAJgugQQgugQgggkQgggkgLgvQgKgvAOgvQEZuxGsvzQDWn7CilGQAfg/BBgaQBBgaBDAXMBy4AojQBCAXAiA8QAiA9gOBEMgGtAhNQgFAagMAYIktI7QgXArgpAbQgqAbgxACQiWAIibAAQ3BAAxhragA2G8mIAnDJQA3D6BSEJQEFNMGzKqQKhQlPXIDQPWICT5gpIDunFIGI+VMhUogd3gEg1ggYOQkmLMjbKrQJqi6HzlKQLpntEyrMQATgrAkgeI0ynVQi8GQjAHUg");
	this.shape_32.setTransform(623.9337,32.772,0.368,0.368);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#994F2F").s().p("ANCf5QuNofp3vkQnCrHkKtkQhTkQg3j+IgmjIQjkIVnGGjQltFQnuD4QljCymCBzQh7AlhxAbQg/AOghAGQEZuxGovpQDUn1Cck4MBy4AojMgGtAhNIksI7QiZAIiUAAQ0uAAv/phg");
	this.shape_33.setTransform(623.9329,32.7805,0.368,0.368);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#070707").s().p("Ege8BGvQo5iMn+kKQnUj0mFlMQlnkzkAlfQjylNhylBQj6rFBEvvQBEvuGA0HQEZuyGsv0QDWn6CilGQAfg/BBgbQBBgaBDAXMBy4AojQBCAYAiA8QAiA8gOBEIl/dtQE9AMEABQQFoBxC6DrQCQC2AdDvQAdDvhXEjIAAAAQjlL9pCFeQlhDWmQAYQqwJzrPGmQrPGlriDQQrDDHq6AAQpSAApAiPgEg50gzCQlMM6jlMCQlqS8hGPCQhGPDDjKCQBmEkDmEwQDuE5FQEWQFkEnGpDZQHLDrHzB8QRPEQRvkbQXWl0WJ0fQAcgaAjgNQAkgNAlADQBFADBigQQC5gdCrhUQIYkHDSq+QA8jJgMiYQgNiYhWhtQiPi1lchLQkIg6kWARIgKAAQgrADgogRQgogQgdghQgcghgLgqQgLgpAIgrIGN+vMhuDgm2QjYHLjVIQg");
	this.shape_34.setTransform(632.2886,100.2725,0.368,0.368);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF8288").s().p("AgwDcQipglhphbQhphbAUhaQAUhcCGgmQCGgmCoAmQCpAlBpBbQBpBbgUBaQgUBbiGAnQhEAThNAAQhLAAhSgTg");
	this.shape_35.setTransform(462.4394,115.5203,0.368,0.368);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF8288").s().p("AhBEtQjngziPh8QiQh8Abh8QAch9C3g0QC2g0DmAzQDmAzCQB8QCPB8gbB8QgcB9i2A0QhcAahpAAQhmAAhxgZg");
	this.shape_36.setTransform(652.3941,164.1725,0.368,0.368);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#390075").s().p("EgeWBEWQoOiDnjj5QnAjml5k7Qljkoj7lPQj0lFhuk4Qhvk7gsl6QhMp6BssoQBrsnEgvHQClonDPouIACgEQDfpXEEpHIDanWIAKgTMBziAoxMgGsAhDQESgMEGAzQHGBXDID8QDvEtiYH5QhPELh/DWQkWHXnjC7QkBBlj3ABQxLP3yDHVQvEGIvNAAQpGAAoyiLgEg4Pg9OQjuIcjNImIgBAFQjTI1iiIgQkePChrMhQhrMkBKJ1QAtF3BsEzQBsEzDxFBQD4FJFeEkQF1E2G6DkQHdD1IICBQRyEaSQkiQYCl7Wt1BIAIgHIAKAAICEgHQCggSCcg3QHyivEcngQB7jPBOkHQCQnfjfkZQjIj8nWhOQkBgrjxAQIgMAAIgfAAMAGvghVMhyPgoVQhtDgiIE0g");
	this.shape_37.setTransform(632.2508,100.1532,0.3679,0.3679);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFB78A").s().p("EgdlBEFQoUh+nnj2QnDjjl8k5Qllkmj+lRQj2lGhwk+Qhtk1gtl7QhRqtCGt8QBwrvEGtuQCioeDTo5IAAAAQDhpdEEpGIDXnOMBy4AojMgGtAhNIALAAQCNgJCpANQEoAYDdBWQErB2B6DfQCXESh+GlQhQEJh8DSQkkHun+CwQifA3iiARIiCAGQ1PTq2vGiQq4DIqrAAQoiAAoaiAg");
	this.shape_38.setTransform(632.2448,100.2499,0.3679,0.3679);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#050505").s().p("AqBQRQknh9jljkQjkjlh9koQiCkwAAlQIAAn7QAAhOA2g2QA2g3BNAAMAtuAAAQBNAAA3A3QA2A2AABOIAAH7QAAFQiCEwQh9EojkDlQjlDkkoB9QkyCDlPAAQlOAAkziDgAz9ndQAAEEBlDsQBhDlCxCyQCxCxDlBgQDtBlEDAAQEDAADuhlQDlhgCxixQCxiyBhjlQBkjsAAkEIAAlBMgn6AAAg");
	this.shape_39.setTransform(620.3638,268.4773,0.368,0.368);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#390075").s().p("AtcLgQmDkSidm/QhTjrAAkBIAAoVMAufAAAIAAIVQAACVgbCLQgzEAiHDgQiEDajGCiQjFCjjvBXQj2BakHAAQnYAAmEkTgA2dndQAAD4BQDlQCYGuF2EKQF3EJHIAAQD+AADuhXQDnhUC/idQC+idCAjSQCDjZAwj3QAbiIAAiPIAAnjMgs7AAAg");
	this.shape_40.setTransform(620.3197,268.4166,0.3679,0.3679);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFB78A").s().p("AtWLGQl2kNiYmyQhSjnAAj9IAAn8MAttAAAIAAH8QAACSgbCJQgxD5iDDbQiADWjBCgQjCChjrBXQj0BakGAAQnYAAl+kUg");
	this.shape_41.setTransform(620.3197,268.4166,0.3679,0.3679);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#050505").s().p("AgpG6Qg9gogOhHQgPhHAog8IgFAFIgBABIgCAAIgCgDIgCgIIgBgXIgBg6IgHhIQgGgtgLgmQgDgQgJgcIgOgvQgHgPgLgfQgLghgHgQIgphjQgZg2gTg0IAAgBQgEgLAEgKQAFgKALgEQAJgDAJADQAzASA6AdQAWALAeASIAzAgQAzAmAqAnIAsAsQAbAbAPAWQBdByAcCFQAQBPgMBPQgEAjgRAwQgHASgMAYIgiA0QgoA9hHAOQgTAEgSAAQgyAAgrgdg");
	this.shape_42.setTransform(868.2942,438.8296,0.3679,0.3679);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#020202").s().p("AibGQQg7gJg9gYQhHgag0grQhDg1gfg/QgSgogJgZQgMgkgDgjQgFgdAEgrQACgYADgLIAKghQAHgWAEgKIAPgdIAhgzQBBhQBig1QBYgwBbgVQALgDAKAGQAKAGACALQADAPgJAKIgCACQiUCfgaBpQgPA0AaAhQADAFAIAHIAOANQAFADAHACIANADQAbAHA+gFQA+gEBFgNICUgeQBygZAlgGIAUgCQBMgLA+AuQA+AtALBNQAJA6gbA1QgaAzgyAcQhTAuhmAeQhdAdhoALQgxAEgsAAQhDAAg6gKg");
	this.shape_43.setTransform(397.7013,442.2886,0.3679,0.3679);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#020202").s().p("ABFLrQgygOghgnQggglgegsQgggygSggQglhBgqhsQg8ijgTjPQgTi4AhjCQAbiqBfi0QAFgJALgDQAKgDAJAFQAMAGACAPIAAACIANCtQAIBfAQBGQAfCjA2CVQAYBBAjBSIBBCQIBiDWQAaA7ACAIIALAgQAWBEgiBBQghBAhEAWQgbAIgaAAQgZAAgYgHg");
	this.shape_44.setTransform(542.4978,350.3643,0.3679,0.3679);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#050505").s().p("AEmEDQhdgNh7g4QhNgkh4hNQhmhChZhCQhzhbhChCQgIgIAAgMQAAgLAIgIQAHgHALgBQA4gCBCADQAuACBIAHQBqALB8AWQCLAaBSAbQB+AqBPA3QA9ArANBJQANBJgrA9QgeAqgvAUQgiAPgkAAQgNAAgNgCg");
	this.shape_45.setTransform(708.3927,354.021,0.3679,0.3679);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#020202").s().p("EgQ+AtdQonh3nhjuQiZhMiBhQQhDgpgpgeQglgbgTgqQgTgqAEguICX52IiXBNQgpAVgtgCQgugBgngYQgmgXgXgoQgWgngBguQgGqzmjpAQiDi1ieiUQgygugugmIgngeQghgYgUgkQgUglgBgpQgBgqASglQARgmAhgaQRzuCN/lBQF1iGF6g1QEcgoF9gCQCKgBDVgGQGrgKDHAPQE7AYFEBlQFsByH5D3QIID+McHKIBtA/QApAYAXApQAYApAAAvQgBAvgXAoQgYApgpAXQkgCkiqInQg/DMgmDpQgfC7gICUQgCAtgZAnQgYAngpAWQgoAWgugBQgtgBgogXIiIhPMgBtAgiQgCAugZAnQgZAngpAWQqpFqq4CpQpUCQpQAAQn9AAnihpgEginAAmQAwADAoAbQAoAbAUArQAVArgFAwIiqdKQDEB5D4BrQF3ChGWBWQMXCpMnh9QMnh8MqmfMAB3gjdQACguAZgmQAYgnApgWQAogWAuABQAuABAnAXICVBYQAzlnBmksQCQmmDjjuQrXmfndjnQnOjhlOhnQkohckhgVQi1gOmEAJQjbAGiLABQlTACj+AjQlRAtlMBzQsdEUvuMAQEOD8DAFBQEWHRA+ITIDEhlQAmgTAqAAIAKAAg");
	this.shape_46.setTransform(629.148,364.3946,0.3679,0.3679);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B87BFF").s().p("EgQZAqxQoUhznQjnQiShIh5hLIhcg8ICz+0ImxDfQgFnsjIm8QiWlNj3kZQiaiviZh0IgPgLIABgBQRctwNqk4QFoiBFsgyQELgkFqgDQB8gBESgGQDfgGB4ACQFlAGE2BPQF0BfIGD2QIeEBNnH1IBuBAQi6BpiNDgQiDDShbExQhKD9gnEkQgUCSgFBeIl/jgMgB8AlCQu7H7vHB0QkYAhkUAAQnmAAnahng");
	this.shape_47.setTransform(629.1398,364.4147,0.3679,0.3679);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#020202").s().p("EgN1AtnQooh3nijvQiahMiBhPQhDgqgpgeQgogdgUgsQgUgtAFgxICU5jMguzAX/Qj0D2kWC1QncE1luguQiTgSh9hNQijhmhujDQiWkMAij6QAhjqDHj9QCtjbFakgQDVizITmSQHmlwEVjbQHbl3GalkQE9kUEwjwQR1uEOBlCQF2iGF7g0QEcgoF+gDQBpgBD2gFQGsgLDHAPQE8AYFEBlQFtByH6D4QIID/MdHKIBuA/QMHHEJ+HlQJzHcG+HXQG+HXDlGsQDqG0gMFiQgHDfhtCsQhtCrjFBiQnwD2oJnhQkwkYjsmzMglegV+MgBsAgRQgDAxgaApQgbApgrAXQqqFrq6CpQpUCRpTAAQn6AAnnhqgA/aAcQAzADAqAcQAqAcAWAuQAWAugFAzIipdEQDFB5D2BpQF0CfGSBVQMTCnMjh7QMkh8MmmcMAB3gjXQADgwAagpQAagpAqgXQArgXAxAAQAxABAqAZMAqTAYzQAvAbAZAyIBjCrQB6DFCBCWQGbHdFFiiQBpg0A1hVQA2hVAEh5QAIj8i6laQjDlul/mdQtxu54auNIhrg/Qr8m3nwj0QnijulXhsQkyhhklgYQi4gOmKAJQj5AGhtABQlgACkHAmQlfAylcB+QtEEww3NTQkmDok5ERQmgFpngF7QkWDbntF2QnfFrjYCxQkrD1iTCpQiiC7ghCaQgiCeBaCiQA+BvBQAzQA4AjBGAIQDsAeFxj1QEFitDNjVQAVgWAcgPMAz7gamQAogVAtAAIALABg");
	this.shape_48.setTransform(621.6365,364.4022,0.3679,0.3679);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#390075").s().p("EgNVArKQoShznUjnQiThJh7hMIhhg/IgLgIICw+UMgzPAaQQizC6jpCoQmyE4lEAAQgnAAglgEQkNgiickWQgbgwgSgsQgQglgLgoQg4jCBKjDQBFi2DCjSQCoi3Eyj4QC+ibHPlfQHiltEdjgQHcl4GdlnQFGkaEhjlIAfgYQRNtgNfk0QFniBFtgzQERgmFugCQBwgBDzgFQFRgJCdAHQD9ALDpA1QIQB3NmHFQGuDhIyFDIBuBAQYbOON2OtQF7GTDaF2QDJFXAsEZQAbCsgiCPQgiCPhcBnQgRATgQAPQhCA+hZAsQm4Dbnin8QieimiRjjQhSiAg5hvMgpqgYbMgB7AknIgNAGQqXFhqlCkQpECNpAAAQnrAAnThmgEgiBAh8QCyB5EKB5QHdDaIUBkQLUCJLnhkQOXh7OHndMAB+glcMAq+AZLIADAHIBwDBQCKDeCXCoQDSDoDMBcQD/BxDnhyQBTgqA8g5QARgQAMgOIABAAQCsjBgzlHQgqkJjGlQQjZlxl3mQQt6uz4KuEIhtg/QoqlAm0jjQnOjxlOiJQk/iCkFg8Qjlg0j7gLQicgHlWAIQjZAGiKABQlrACkOAmQlpAzlkB/QtXEyxENZIgfAZQkrDsk6ERQmcFmnfF6QkRDXnvF3QnGFZi7CXQkuD0ilCxQi/DMhGCvQhKC6A1C2QAKAiAPAmQATAtAXAqQCQD/D0AfQFDApHYlSQCUhrCRiEIB3hyIAHgFMA0jga7g");
	this.shape_49.setTransform(621.6302,364.2031,0.3678,0.3678);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFB78A").s().p("EgNQAqxQoUhznRjnQiRhIh5hLIhcg8ICz+0Mgz7AanIgzAzQhBA+hIA/QjoDIjaB6QkyCsjqgJQkkgKilklQgagtgSgsQgQgpgKghQhOkPDAkfQCkj2G+lrQCpiKEkjfQFikMDFiXQLwo/I5nuQE5kQEtjvIAfgYQROthNkkzQFlh/FpgxQEIgkFogDQD1gBGGgKQE5gCDrAnQEkAxFZCEQFzCPISEUQGjDaI8FJIBuBAQPSI6LfJdQKiIqGWITQF8HxBbGSQBZGHjJDhQgUAWgLAJQhAA+hWApQjxB4kHh0QjThdjXjvQiaiqiMjiIhujBMgkUgVSIAAgBIl/jgMgB9AlCQu7H7vGB0QkYAhkVAAQnlAAnahng");
	this.shape_50.setTransform(621.6505,364.2213,0.3678,0.3678);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("EgEVBwTQ9ph6zpoIQzpoGpQuKQqzwfDM4bQBLpGDNqwQB3mOD2qoQBgkIAlhsQA/i5AchvUADigNyAC1gtIQBa2oAv0YQAChKA1g0QA0g0BKgBIABAAUABxAAABCHANfQh5gBjwAAQgXAAgOAPQgMAOAAAUQAAAVAMAOQAOAPAXAAQGCAAC9AJQFBAND8AsQCoAdBzAeQCcAoB2A1QBCAeCPBeQCCBVBRAfQBtApCFAnQhbADiQgDIjrgFQgYABgOAQQgMAPACAWUhJ1gPJgOegCvQg+ZWhlW0UgCrAmsgDVAM/QgfB7hCDBQgpB4hhEKQjpKFhxF4QjEKKhLIiQjLW6JwO5QIeM8SgHdQShHecNB0QbNBwTEleQTElfKjsnQN1wigw84QgRqOiIrtQhMmjiXpjQg8jygShYQh7pmBF8gQAow2BcyzMgu7gJpQDSAcE3A7IIIBhQAXAEARgNQAQgMAFgTQAFgUgIgPQgJgSgWgDQhrgUkHgyQjrgtiGgWQAvgIAfgHQAkgIAAgoQAAgogkgJQkLg7jChHQhBgYhPgvIiIhWMA30ALeQBFAOArA4QAqA4gGBHQhNO+gxQnUgBjAhIACBAJ/QAMA+A+D9QCeJ/BPG5QCNMVAOKzQAmeivDR/QqIMIw/GGQw/GH3lAAQmPAAmzgcg");
	this.shape_51.setTransform(642.2499,187.1602,0.368,0.368);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#390075").s().p("EgEVBwTQ9ph6zpoIQzpoGpQuKQqzwfDM4bQBLpGDNqwQB3mOD2qoQBgkIAlhsQA/i5AchvUADigNyAC1gtIQBa2oAv0YQAChKA1g0QA0g0BKgBIABAAUABxAAABCHANfQh5gBjwAAQgXAAgOAPQgMAOAAAUQAAAVAMAOQAOAPAXAAQGCAAC9AJQFBAND8AsQCoAdBzAeQCcAoB2A1QBCAeCPBeQCCBVBRAfQBtApCFAnQhbADiQgDIjrgFQgYABgOAQQgMAPACAWUhJ1gPJgOegCvQg+ZWhlW0UgCrAmsgDVAM/QgfB7hCDBQgpB4hhEKQjpKFhxF4QjEKKhLIiQjLW6JwO5QIeM8SgHdQShHecNB0QbNBwTEleQTElfKjsnQN1wigw84QgRqOiIrtQhMmjiXpjQg8jygShYQh7pmBF8gQAow2BcyzMgu7gJpQDSAcE3A7IIIBhQAXAEARgNQAQgMAFgTQAFgUgIgPQgJgSgWgDQhrgUkHgyQjrgtiGgWQAvgIAfgHQAkgIAAgoQAAgogkgJQkLg7jChHQhBgYhPgvIiIhWMA30ALeQBFAOArA4QAqA4gGBHQhNO+gxQnUgBjAhIACBAJ/QAMA+A+D9QCeJ/BPG5QCNMVAOKzQAmeivDR/QqIMIw/GGQw/GH3lAAQmPAAmzgcg");
	this.shape_52.setTransform(642.2499,187.1602,0.368,0.368);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#994F2F").s().p("EgEMBtaUg76gD4gRFgczQmwragCvXQgBsAELvAQB+nHD0qjICinEQBOjgAhiDUADogOHAC2gtnQBb20Atz/UABkgACBdeATKIAWAJQBtAqCFAmQhbAEiQgEIjrgEQgXAAgNAPQgMANAAAUQAAAxAwADQEmASGUBHQDnApHNBYQAXAEARgNQAQgLAFgUQAFgTgIgQQgJgRgWgEQhrgTkHgyQjrgtiGgXQAvgHAfgIQAcgFAHgeMArHAI3QhNOvgxQ0UgBkAhnACEAKWQAbCFB+H4QCDIoBJHUQDmXAj3RQQlRXhy4MHUgTgAMighigABQmQAAmvgbg");
	this.shape_53.setTransform(642.331,187.1587,0.368,0.368);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#390075").s().p("EgELBtzQ9Ch4zJn1QzKn1o6toQqWvzDL3xQBMo2DJqgQB0mEDwqZQBekBAqh5QBAi8Aeh1UADkgN8AC2gtWQBb2uAv0cIABgYIAYAAUABSAAAA8WAMSQANAPAWAAIAkAAIe9GVQA6AhAzATQA2AVBbAeUha5gSogGZgBAQg1WlhfW0UgCzArOgDeANlQgfB2hAC8QgrB+hdD/QjvKUhzGBQjIKbhLIyQjLXjKNPmQIzNdTAHwQTAHuc1B4Qb1BzTmltQTmltK9tHQOWxKgr9mQgQqeiKr+QhNmtiapwQg7jrgShXQh/p8BY/yQAvw2BUwtMgq5gI0QASgTgGgdUAlLAHoAGBABQIAWAEIgCAWQhNPEgxQvUgBjAhZACDAKNQAOBDA+D9QCcJzBNGxQCLMEAPKjQAqdzuhRXQpwLrwgF4QwfF42/AAQmSAAmngbg");
	this.shape_54.setTransform(642.221,187.0947,0.3679,0.3679);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A1523F").s().p("EgEMBtaUhOfgFFgE9gv0QhovsGg1gQBxl3DepnQDEocAtiuUADngOHAC2gtoQBb2zAtz/UABggACBdjATKIAWAJQBtAqCEAmQhbAEiPgEIjrgEQgXAAgOAPQgMANAAAUQABAxAwADQElASGUBHQDoApHNBYQAWAEARgNQAQgLAFgUQAGgTgIgQQgJgRgXgEQhqgTkHgyQjrgtiHgXQAvgHAggIQAbgFAHgeMArHAI3QhMOvgyQ0UgBkAhnACFAKWQAaCEB/H5QCCInBKHVQDlXAj3RPQlRXiy3MHUgTgAMighigABQmQAAmvgbg");
	this.shape_55.setTransform(642.2958,187.1024,0.3679,0.3679);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#994F2F").s().p("EgcJBfIQw8hbs4laQpMj3mQlfQh8huhbhqIhChVQFgj0BQopQAZitgFi4IgKiUQiHkfiGlvQkOrfAAmTQAAk7hyzGQhyzEAAljQgEjAAAh3QgBjbAPi2QAroTC/nUQIo1IcVvCQPMoENahkQKuhQJGC9QGgCGFDEAQCiCABOBkQLjjlJ3DbQIyDEHQIlQGWHgE+LdQEPJxDBMCQCjKLAnJFQAhHtg3HpQgmFbhpHlQiMKNgWB/Qh0KQEYMuQBXD+B1DwQA6B3ApBFQgoBVhyCIQjkEQlwEDQoEFprSEaQuHFgyZDOQzFDWwWAAQmRAAl2gggEAT0gpVQgMAOAAAUQABAwAwADQElASGUBHQDoApHNBZQAWAEARgNQAQgMAFgTQAGgUgIgPQgJgSgXgEQhqgTkHgyQjrgtiHgXQAvgHAggHQAkgIAAgoQgBgogjgJQkLg8jDhHQhTgeh+hRQiThfg5gcQh2g5ibgrQh1ghingfQkDgxkzgRQiRgIi2gCQhugCjbAAQgXAAgNAQQgMAOAAAUQAAAVAMAOQANAPAXAAQGEAAC9AIQE/AOD9AsQCnAdB0AeQCbAoB2A1QBDAeCOBdQCDBWBRAfQBtApCEAnQhbADiPgDIjrgFQgXAAgOAPg");
	this.shape_56.setTransform(657.1125,74.5752,0.368,0.368);

	this.instance_1 = new lib.emptyAlien("synched",0);
	this.instance_1.setTransform(1053.8,102.1,0.7116,0.7116,-8.4944,0,0,314.2,456.9);

	this.instance_2 = new lib.spaceship_black("synched",0);
	this.instance_2.setTransform(907.3,256,1,1,0,0,0,906.1,263.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(17));

	// lights
	this.instance_3 = new lib.Group_2();
	this.instance_3.setTransform(433.95,164.5,1,1,0,0,0,70.2,168.5);
	this.instance_3.alpha = 0.3516;

	this.instance_4 = new lib.Group_1_1();
	this.instance_4.setTransform(531.1,-93.5,1,1,0,0,0,47.8,55.5);
	this.instance_4.alpha = 0.3516;

	this.instance_5 = new lib.Group_24();
	this.instance_5.setTransform(957.05,-28.4,1,1,0,0,0,526.3,331.5);
	this.instance_5.alpha = 0.3516;

	this.instance_6 = new lib.Group_0_1();
	this.instance_6.setTransform(64.6,481.8,1,1,0,0,0,131.8,54.6);
	this.instance_6.alpha = 0.5;

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#362045").s().p("A0FUUQg0gagTg4QgSg3Aag1QHgu3QJsoQFJkBFejXQC5hxCBhBQA0gaA4ASQA4ASAaA0QAbA0gTA4QgSA4g0AaQhuA5ioBnQlODMk7D1QvrMMnDOAQgTAkgjAVQghAUgoAAQgiAAgdgPg");
	this.shape_57.setTransform(300.4621,580.6068);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#362045").s().p("AWZPSQgcgMgVgYQqOr4ygoIQl0ijl9h4Qh4gmhrgdIhYgWQg5gNgfgyQgfgxANg6QANg5AygfQAxgfA5ANQCOAhDWBCQGPB+GECsQTDIcK3MmQAnAtgFA6QgEA6gtAmQgnAjg1AAQgeAAgcgNg");
	this.shape_58.setTransform(1528.2689,429.283);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#362045").s().p("AnqF5Qi7iBgPjDQgQjSC+igQC9ihEkgWQEjgVDTCBQDUCCAQDTQAIBpgxBiQgxBjhkBPQhbBJh4AsQh4AsiGAKQgmADglAAQkLAAi6h/gAgWksQjIAPiMBkQiMBlAJB6QAKB6CZBPQCZBODIgPQBogIBcghQBbghBFg2QAwgmAdgsQAqhAgFhAQgJh7iZhOQiAhCihAAQggAAggADg");
	this.shape_59.setTransform(104.7189,582.2469);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F7CE48").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_60.setTransform(104.7249,582.232);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2F3A55").s().p("AoGGXQjHiLgQjUQgRjjDIitQDJiuE1gXQE0gYDgCNQDhCNARDlQAJBxg2BuQg2BthqBVQhhBMh9AuQh+AviMAKQgoADgmAAQkbAAjGiKgAgTkDQi/AOiABfQh5BYAIBgQAHBiCEBFQCNBKC/gPQBggHBXgfQBYgfA+gyQAqghAZgkQAkg2gEgzQgHhiiFhFQh2g9iYAAQgeAAgfACg");
	this.shape_61.setTransform(104.7168,582.2071);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FDF5AE").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_62.setTransform(104.7249,582.232);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#362045").s().p("Aj+HeQhpgahYgxQhuhAhAhaQg/hagIhqQgIhpAxhjQAxhjBjhPQBchIB4gtQB4gsCGgKQCFgKB9AaQB9AZBmA6QBuA/A/BaQBABaAIBqQAIBpgxBjQgxBjhkBPQhbBJh4AsQh4AsiGAKQgpADghAAQhxAAhpgagAgWksQhoAIhcAhQhbAhhFA2QgwAmgeAsQgqBAAFBAQAGBBAzA4QAkAnA1AfQBLArBhATQBfATBngIQBogIBcghQBcghBEg3QAwgmAegsQApg/gFhBQgEhBg0g4Qgjgng2gfQhAgkhQgUQhPgThYAAQgaAAghADg");
	this.shape_63.setTransform(486.15,599.8842);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F7CE48").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_64.setTransform(486.1533,599.8815);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#362045").s().p("AmYG6Qh0g1hHhUQhIhUgRhoQgShpAnhmQAohnBchYQBUhRB0g3QBzg3CEgWQCEgXB/AOQB/AOBqAwQB0A1BHBUQBIBUASBpQAjDPiuCxQiuCykgAwQhRAOhRAAQi1AAiVhDgAgykpQhnARhYAqQhZApg/A8QgsAqgZAvQgkBDALBAQALBAA4A0QAnAkA4AZQBQAkBgAKQBiAKBlgSQDHghCBhyQCChxgUh4QgMhAg4g0Qgngkg4gZQhtgxiJAAQg9AAhEALg");
	this.shape_65.setTransform(1721.6683,383.9815);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F7CE48").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_66.setTransform(1721.6494,383.9885);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#362045").s().p("AnkGSQiqhtgeixQgShoAohmQAohnBchYQBUhRB0g3QBzg3CEgWQEfgxDfBuQDfBuAjDQQASBpgoBmQgoBnhcBYQhUBQhzA3Qh0A3iEAXQhTAOhRAAQjsAAiohsgAgykpQhmARhZAqQhYApg/A8QgsAqgaAvQgkBDALBAQAVB5CgBAQCfBADGgiQBmgRBZgpQBYgqA/g8QAtgqAZgvQAkhCgLhAQgRhlh2g/Qhzg/ihAAQhAAAg/ALg");
	this.shape_67.setTransform(1355.775,493.2176);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F7CE48").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_68.setTransform(1355.775,493.275);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#362045").s().p("AmrGnQhyg6hDhXQhDhXgNhqQgajQC2ipQC2iqEigjQEhgkDaB4QDZB4AaDSQANBpgsBlQgtBlhgBTQhYBNh2AxQh2AyiFAQQg8AIg6AAQjPAAijhUgAgjkqQjIAYiHBrQiHBrAPB5QAIBBA2A2QAlAlA3AcQBOAoBgAOQBhAOBmgMQBogNBaglQBaglBCg6QAugoAbgtQAnhBgIhBQgNhqh9hGQh8hFisAAQguAAguAGg");
	this.shape_69.setTransform(917.2357,561.1948);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F7CE48").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_70.setTransform(917.255,561.25);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#362045").s().p("AgLCHQgtgBgsgWQgpgVgeghQg0g6gWhXQgFgUAOgQQAKgLAPAAQAOAAAKALIADADIAtAvQAYAYAUANQApAbAtABQAjgBA7gaQAfgOBKgtIADgCQAOgIAPAFQAOAFAHAOQAHAOgFAPQgXBNhIA4QgiAagpAOQgmANgmAAIgKAAg");
	this.shape_71.setTransform(871.4332,109.8851,0.791,0.791,-16.9559);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#362045").s().p("ACqGDQgmgbgbgkQgXgegWgnIglhDIhEiDQgphMgdgvQgohBgngwQhVhsh4g+IgBAAQgLgGgFgMQgGgMADgMQAEgPAMgIQAMgIAOAEQBIATBEAoQBEApA3A4QAzAzAxBEQAlA1AsBMIBJCBQA1BdARAZQAlA1AeAKQAPAGAVgIQASgGAdgWIAHgFQAPgMASAIQANAGAGAOQAFAOgGAOQgTAughAfQgqAmg3AAQg1AAgughg");
	this.shape_72.setTransform(780.981,-82.0483,0.791,0.791,-16.9559);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#362045").s().p("AoeBqQgXgSgRgYQgSgagIgbQgPg1AMg4QADgKAGgHQAHgHAJgCQAOgEAMAIQAMAHADAPIADAJQAIAlAPAVQARAXAWAJQArATBNgJQA8gHBUgYQAegJAtgPIBLgbQBdghBBgRQBagYBOgHQBVgIBWAOQBWANBPAhQALAFAGALQAGAMgCANQgDAPgMAJQgMAIgOgDIAAAAQiYggiXAcQhDANhQAaQg4AThcAlQh2AtgmANQhcAdhPAHIgdABQhhAAhDgyg");
	this.shape_73.setTransform(901.1237,-70.6487,0.791,0.791,-16.9559);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#362045").s().p("APkLdQgPgHgFgRQgFgQAHgQQgDADAAAEIAAgDIgFhFQgFgugGglQgLhNgVhXQgoisg+iNQhCibhbh6QhjiDh4hSQhzhUiYgYQiHgWifAZQiIAWifA9QiCAwidBVQgUALgYgCIgBgBQgmgFgnAOQgnAOgVAaQgVAZgBAeQgBAeAUAoQAQAfAYALQAZALAigKQAjgKAdgdQAdgeANglIAAgCQAIgWASgOIAWgQIAugZQAagOAggOQA4gZBAgUQCJgsBwgKQCPgPB0AXQCMAbBtBMQBvBNBMB/QBBBtAjCQQAeB6AICNQAHB1gICRQAAAQgMAMQgLALgPABQgRAAgMgMQgMgMAAgSQgHkYhAjQQglh3g8haQhChihXg1Qijhlj8AgQhqAPhxAjQhAAVgrARQgjAOgQAIIgZAMIAAAAQgaA4grAsQg4A3hJAXQhVAbhNghQgmgQgigiQgegegSglQgphOAChRQABgtASgrQAQgrAcgfQA2g9BKgaQA5gUA+ACQE1i3EtgxQC6gfCgAeQBXAPBVAlQBUAkBIA2QCMBnBrCcQBjCPA/CwQA5CcAfC7QAOBYAGBYQADAxABAoIgEBZQgBAKgEAIQgHAQgPAGQgHADgHAAQgJAAgIgFg");
	this.shape_74.setTransform(680.6384,-155.4005,0.791,0.791,-16.9549);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#64C141").s().p("AAeD6QhJgChIguIg5guQADjfghizQCCCoBigVQBRgQAriGQAjCVAMCQQAKBygHAQQgNAUgcATQg1AlhFAAIgHAAg");
	this.shape_75.setTransform(753.7447,-133.1474,0.791,0.791,-16.9559);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#8AEA55").s().p("AJuKOQADjgghizQhAlPjEiZQieh7jsADQivACjEBFQiQAygpAiQgUA8guArQgrAqg1APQg2APgvgSQg0gUgeg3QhKiGBVhiQAkgpA4gVQA3gUA5AIQBCgnBNglQCUhICQgqQG/iEEoC5QDRCDCKDzQBtC+A7D3QAjCVAMCRQAKBygHAQg");
	this.shape_76.setTransform(682.1965,-154.0359,0.791,0.791,-16.9549);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#8AEA55").s().p("AJuKOQADjgghizQhAlPjEiZQieh7jsADQivACjEBFQiQAygpAiQgUA8guArQgrAqg1APQg2APgvgSQg0gUgeg3QhKiGBVhiQAkgpA4gVQA3gUA5AIQBCgnBNglQCUhICQgqQG/iEEoC5QDRCDCKDzQBtC+A7D3QAjCVAMCRQAKBygHAQg");
	this.shape_77.setTransform(682.0915,-152.49,0.791,0.791,-16.9559);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#362045").s().p("AICMWQhXgOhIg8QhKg9gghZQgSgvABg2QABg3AUgvQAbhBA6g0QAFhUgFhLQgIhlgbhLQgOgmgWggQgKgOgOgNQgPgOgQgMQhAgzhJACQhGAChQA0QhFAshJBNQhyB6h9DFIAAABQgIANgPAEQgPAEgNgIQgPgIgFgRQgFgRAIgPQA3huAthMQA7hiA+hNQBPhjBMg4QBqhQBrgKQA8gHA/ASQA8ARAzAjQAYAQAYAWQAZAWAUAaQAlAwAaA/QAnBhAJCGQAHBwgSB2QgGAkgcAUIAAABQgvAigNAjQgOAiAOApQAOAqAoAiQApAiArAGQAWADARgEQAQgEASgMQAjgZAPgtQAPgrgMgvQgLgugkgoQgbgeAGgqIAAgEQAXiWgGiTQgFikgph7QguiPhchLQgqgjhGgdIgfgMIgggKQgrgNgWgDQh+gZiLAmQh9AjiBBVQhuBIh0B0Qg1A1gxA6IhhB9QgIALgMADQgNAEgNgGQgOgHgGgQQgFgQAHgQIAEgKIAnhFQAYgkAVgfQArg9A4hCQBuiAB6hdQCKhqCUgvQChg2ClAXQARACAYAFIApAJQA8ASATAIQBeAlA7AvQBGA2A1BRQAxBKAdBZQAxCTAGDDQABCdgXCLQAqA7AQBBQAMAvgCAyQgCAygQAtQghBihOA3QgqAeguALQgZAGgcAAQgVAAgVgDg");
	this.shape_78.setTransform(949.4971,-124.3077,0.791,0.791,-16.9559);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#64C141").s().p("AgLEdQhIgVhAg7QhBg6gXhUQgIgagCgaIgBgTQAHgTA2hLQBKhmBYhaQgdCeBiBIQBHAzCCADQhjB7hlC2IgEAAQgWAAgggKg");
	this.shape_79.setTransform(906.8689,-118.2306,0.791,0.791,-16.9559);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#8AEA55").s().p("AI4LGQhDgCg9grQg9grgdhAQgfhEARhCQAThLBNg4QAPhggIh1QgPjohxhkQh0hniCAVQiiAaiuDZQhjB7hlC1IkmkvQAHgTA2hLQBKhmBYhZQDIjNDShRQEWhrEKCBQD9B6AqGJQAYDfgoDMQA6BAANBNQAMBEgZBAQgYA9gxAlQgvAkg3AAIgGAAg");
	this.shape_80.setTransform(948.0091,-124.0388,0.791,0.791,-16.9559);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#362045").s().p("Ag4A0QgMgOAKgZQAIgYAYgWQAXgWAYgFQAZgGALAOQAMAOgKAZQgIAZgXAWQgYAWgYAFIgMACQgQAAgIgLg");
	this.shape_81.setTransform(839.3908,65.4333,0.791,0.791,-16.9559);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#362045").s().p("AgSA+QgQgVgGghQgGgfAIgaQAIgZARgEQAQgEAQAVQAQAVAGAgQAGAggIAaQgIAZgRAEIgFABQgNAAgOgSg");
	this.shape_82.setTransform(828.2331,64.7729,0.791,0.791,-16.9559);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#362045").s().p("ApdMzQiOg2hfhWQhghXghhnQgfhkAJiEQAKiVA8iWQCVl3GFkDQDoibEJgoQEKgoDvBVQCBAtBZBLQBZBLAhBaQAoBtgBCOQgCCgg1CfQiGGNmLEHQiYBmitAyQiaAsiiAAQjLAAithCgACqraQkCAcjhCWQlXDliIE/Qg2B/gLB9QgKBwAaBSQAWBGBLBAQBLA/BuAqQC/BJDegSQEGgVDgiWQFNjeB/lPQA1iKAGiIQAGh+gjhgQgWg6hEg1QhFg2higiQiIgxibAAQg3AAg5AGg");
	this.shape_83.setTransform(926.703,6.5498,0.791,0.791,-16.9559);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#362045").s().p("AgYQMQizg8iTinQiujHhHklQhqm6BzmPQAuihBNiCQBFh0BNhBQBCg3BdgKQBdgKBnAlQCrA+CPCqQCpDJBHEnQBpG0hfGGQgmCdhCB+Qg8BxhEA+QguArg8AWQg8AVhEAAQhNAAhTgcgAjotxQhFA6g8BsQhAB0gmCTQhbFgBcF9QA9D9CSCqQB7CPCUAxQBQAbBGgHQBGgIAtgpQAzguAwheQA4hsAiiIQBVlghgmQQg+kAiOitQh3iRiNg0Qg9gWg1AAQhHAAgqAkg");
	this.shape_84.setTransform(757.4519,-8.7989,0.791,0.791,-16.9559);

	this.instance_7 = new lib.Group_17_1();
	this.instance_7.setTransform(920.4,-16.25,0.7912,0.7912,-16.9562,0,0,93,51.7);
	this.instance_7.alpha = 0.6992;

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#362045").s().p("AmuMYQi1gkiChaQiBhZgjhxQgehcAKh7QALiIA6iMQCOlZFtj0QDAh/DXgtQDBgoC7AeQCsAcB9BOQB7BNAkBjQAlBmgDCFQgDCUg1CUQiBFuluD1QjACAjdAoQhhAShfAAQhmAAhkgUg");
	this.shape_85.setTransform(926.7138,6.6342,0.791,0.791,-16.9559);

	this.instance_8 = new lib.Group_20_1();
	this.instance_8.setTransform(756.15,-19.4,0.7912,0.7912,-16.9562,0,0,56.4,85.7);
	this.instance_8.alpha = 0.6992;

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#362045").s().p("AB9PfQh7gDh9hOQiIhShniTQhyikg1jaQhkmeBol3QAqiaBHh6QBAhvBJg9QBHg8BxAJQBxAKB2BOQB/BWBhCSQBsCkA1DZQBkGdhWFvQgjCUg9B2Qg3Brg/A6QhKBEh0AAIgKAAg");
	this.shape_86.setTransform(756.9774,-2.2117,0.791,0.791,-16.9559);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#362045").s().p("EgONAs+QgggDhfgPQgZgEgngIIhAgOQkOg9jih0Qjvh5jHjFQjHjFiEj1Qj4nKgxpdQgroSBvo0QBpofEDnjQEHnrGDlnQGWl7Hci9QD1hiEBgsQEEgsEBAPQEEAPD9BHQD8BGDrB6QDoB5DPCvQDMCsCpDWQFLGjCuIdQCpIMgEIuQgBETgqESQgPBpgkClIghCFIhDDJIhYC/IhIB3IgkA8Ih7ClIiJCYIiTCJQmNFMn9C/QklBmjKApQi9AnhAAHQiQANhyglQgWgHgKgVQgMgWAGgYQAHgYATgNIADgCQA0ggBCgVQAhgLBWgVQAogJBPgNQAogIBPgTQBtgZB9goQBjgfCDgwQHzjIFWkeICHh7IB8iHIBwiRIBgidIBOimIA8ivIAfh8QAkigANhcQApj8AAkDQAEoIienpQihn1kxmCQibjEi7ieQi9ifjVhwQjWhwjohBQjqhBjsgNQjsgOjuApQjrAojiBaQjfBZjPCGQjMCFi1CrQlnFRjzHKQjvHDhgH8QhkIJAoH2QAWEIBADtQBFD8ByDRQB1DaCpCsQCsCtDRBtQDJBqD0A7IB0AZIB4ATQCJAaBiAwIAEACQAUAKAJAWQAIAYgJAXQgJAXgWAJQg9AbhHAIQgfADgjAAQgeAAgigCg");
	this.shape_87.setTransform(914.621,-58.9121,0.791,0.791,-16.9559);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#64C141").s().p("Ay0DQQmUkIjenVQC6DTD1CjQFRDgGZBrQIOCJKvgLQK7gLI7iiQkkCPlHBYQk8BVk9AaIqhAzQqRgXnEkng");
	this.shape_88.setTransform(924.9305,124.8219,0.791,0.791,-16.9559);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#8AEA55").s().p("EgbhAmbQmUkJjdnVQjknhgOqAQgNo4CYotQCdo+FNndQFHnVHAkvQHIk1H+hZQIYhdIRClQIRClGWGDQGCFwDlILQDhIAAoJIQAoJQidI+Qh4G6lVFlQk2FGnMDgQklCPlHBYQk8BVk9AaIqgAzQqSgXnEkng");
	this.shape_89.setTransform(915.1254,-58.3043,0.791,0.791,-16.9559);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#362045").s().p("AkxfuQhPghg1hIQgug9gUhaQgQhCADhOQABgzALhOQAkkXAFikQALjqgRjSQgNjUgnjkQghjGg+jtQgsithPkFQgGgUAHgTQAIgUASgJQATgKAVAHQAVAHAKAVIAAAAQDWHEBgGhQBnG8gPHsQgDC2ghEeQgHA9AAAmQgBAsAJAnQAIAjAOAUQAOATAYALQAZAMAlAAQAmAAAlgLQATgGAPgHQAPgHAMgJQAfgZAYgeQAxg8AhhlQAehaAKhmIACgPQAEgqAegdQAegdAoAAQAsAAAfAhQAfAhAAAvQANClArCAQAYBIAhAtQAgAsAgAJQAYAEAQgCQAPgCANgJQAggWAZg8QAthoANi2QALiZgNihQgKiLgci1Qgyk7hmk4QjGpel3oSQlxoKnxmAQgjgcgHguQgHguAZgnQAaglArgIQAsgIAjAcQILGVGDIjQGLIvDSKBQBsFKA0FMQAeC7ALCZQAPCygMCtQgJBrgOBJQgTBigjBUQgzB2hTA7Qg2Ang+AHQg3AJg8gPQg6gOgzgoQgrghgigxQghgvgag6QgUAkgXAfQgtA9g3AoQgdAYgkAQQgiAQggAKQhGAUhBAAQhPAAhHgeg");
	this.shape_90.setTransform(1083.6418,236.8861,0.7912,0.7912,-16.9562);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#64C141").s().p("AlNmRQFtEbEuFnQkCBxk3Awg");
	this.shape_91.setTransform(1009.6798,131.7132,0.7912,0.7912,-16.9562);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#64C141").s().p("AF4RiQiPgkhJkNQgWhUgNhhIgIhRIgGA8QgJBJgTBEQg9DciIBdQg0AjhMANQhXAOhFgaQi5hHArk3QBLocg1nuQgqmOiFmjQCHDaBME7QA5DqAeFDQARCxAUEiQAVDUApAyQBnB+CkiDQAzgpAzg/IApg1IAvBmQA8BxBDA3QDUCwDCnZQAAEehDCnQhGCuiAAAQgZAAgcgHg");
	this.shape_92.setTransform(1113.5138,295.1973,0.7912,0.7912,-16.9562);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#8AEA55").s().p("AIKeSQiPgjhJkNQgWhUgNhiIgIhQIgGA7QgJBJgTBFQg9DbiJBdQgzAkhMAMQhXAPhFgbQi5hHArk2QBLodg1nuQgqmOiFmiIAAgBQg5izhWjgIiWzNQLZI0G6M2QG8M2A9OJQAFBRgBBEQAAEehDCoQhFCtiBAAQgZAAgcgHg");
	this.shape_93.setTransform(1083.615,236.8019,0.7912,0.7912,-16.9562);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#362045").s().p("AhHBqQACgtAcgsQgxgOgdgfQgZgbAIgIQAEgDAiANQAvASAqAIQAZgjAZgvQASgiAEAAQALAAgCAmQgDAsgbAtQAwAOAeAfQAZAbgIAIQgEADgigNQgwgSgpgIQgZAigZAwQgSAigEAAQgLAAACgmg");
	this.shape_94.setTransform(936.5333,321.2262,0.791,0.791,-16.9559);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#362045").s().p("Ag2GeQhsghhOhhQhLhcgYh6QgZh8Alh1QATg8AjgzQAlg1AygjQAygiA8gPQA6gNA8AKQBxATBWBaQBPBTAdBxQADANgFAMQgGAMgLAGQgNAHgNgFQgNgFgHgOQgnhWhGg4QhHg4hNgGQhNgGg+AwQg+AxgYBQQgYBOAPBYQAOBYAxBGQAyBKBLAjQBPAnBRgUIAAgBQAMgCALAFQALAFAFAMQAGAOgEAOQgFAPgNAGQgwAag7AEIgXABQgsAAgsgNg");
	this.shape_95.setTransform(936.3279,322.4398,0.791,0.791,-16.9559);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#62C340").s().p("AhsEYQh4hGgyiSQgTg2gFg8IAEAHQBNCJB+A0QB8AzBjhAQBeg8ATiDQATiDhAiFQBBBCAhBeIAJBYQAEBpggBbQggBag8A3QgeAbgXAJQgwAUgwAAQhGAAhIgrg");
	this.shape_96.setTransform(939.3952,326.3329,0.791,0.791,-16.9559);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#362045").s().p("Ag2GeQhsghhOhhQhLhcgYh6QgZh8Alh1QATg8AjgzQAlg1AygjQAygiA8gPQA6gNA8AKQBxATBWBaQBPBTAdBxQADANgFAMQgGAMgLAGQgNAHgNgFQgNgFgHgOQgnhWhGg4QhHg4hNgGQhNgGg+AwQg+AxgYBQQgYBOAPBYQAOBYAxBGQAyBKBLAjQBPAnBRgUIAAgBQAMgCALAFQALAFAFAMQAGAOgEAOQgFAPgNAGQgwAag7AEIgXABQgsAAgsgNg");
	this.shape_97.setTransform(936.2451,322.3389,0.7908,0.7908,-16.9549);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#8AEA55").s().p("AhmFKQh4hGgyiSQgziRAwiJQAwiJB3gvQB1gvB4BGQB4BGAzCSIikHSQgwATgwAAQhGAAhIgqg");
	this.shape_98.setTransform(937.7142,322.6343,0.7908,0.7908,-16.9549);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#362045").s().p("AjEc1QjRgjiNgsQi9g7iIhdQlPjohSnsQh0rDGQuIQCAkgCnkUQBYiSBEhfIASgZIAbgLQFkiaE1hRQH8iGCpCBQAwAlAYA3QAYA4gDBCQgMDiA6FDQAjDCBlGiQCFIhAnEPQBBHEg+FJIgFASQhnElljDCQleC/mgAAQh/AAh8gVgAEc46QlEBOlqCYQj/F1i7G+QlOMaBjJZQBCGQEGCzQBuBLChAxQB5AkDDAhQC8AfDMgZQDDgZCyhIQCxhIB7hpQCChvAvh/QA2kmhAmmQgmj9h+oFQhpmygkjOQg8lVAMj5QABgKgCgDQAAgDgDgCQghgZhQAAQhvAAjLAxg");
	this.shape_99.setTransform(981.297,253.8741,0.7912,0.7912,-16.9562);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#64C141").s().p("AlNmRQFtEbEuFnQkCBxk3Awg");
	this.shape_100.setTransform(1009.6798,131.7132,0.7912,0.7912,-16.9562);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#64C141").s().p("AmEF1QjTgii7hBQBSiUBXiEIBFhoIDNhRQD1hdDLg2QKKivgNELQgMDpA5FCQlYBjmEAAQjiAAjZgjg");
	this.shape_101.setTransform(956.2028,150.0739,0.7912,0.7912,-16.9562);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#64C141").s().p("Ai0ROQjMgiiGgqQivg3h7hVQkmjNhJm7QgXiKgBiXQB2DXCwCIQDYCoEjAnQDJAaDegqQDbgqC2hgQC9hkBjiGQBsiRgVifQgKhSgfiaIg1kIQg9k+AhhkQATg6CBCJQBnBtClDhQBTFvAZEAQAhFJgwD+Qg0CWiNB/QiHB6jBBTQjBBSjXAcQhmANhiAAQh1AAhygTg");
	this.shape_102.setTransform(995.9097,301.6752,0.7912,0.7912,-16.9562);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#8AEA55").s().p("Ai0bHQjMgiiGgqQivg3h7hVQkmjNhJm7QgXiKgBiYQgCmXCenaQB3llDIlwIAZguQBSiUBXiFIBFhoIDNhRQD1hdDLg2QKKivgNELQgMDpA5FDIARBaQAgCmBBERQBZFxASBRQBTFuAZEAQAhFKgwD+Qg0CWiNB/QiHB6jBBTQjBBSjXAcQhmANhiAAQh1AAhygTg");
	this.shape_103.setTransform(981.298,253.755,0.7912,0.7912,-16.9562);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#362045").s().p("Eg/tBCsQuwhEnvi6Qnui5glkqQh/wMCMxkQCm03ICw/QJe0EQHsZQSluSafjQQafjQVfJYQSnIIODRMQL5OkHkTnQGXQfB/QNQAkEqmzErQm0EruDEnQs7EOw4DfQw4DfysCSQtMBosnA1QsjA1rLAAQpSAAn3gkgEgMfg+CQ5RDHxtNtQvXL4pBTRQnpQTieUBQiEQ3B6PjQAHA5BSBAQBhBKC2BBQHPClNvBAQNWA+RAgtQRAgsSdiRQSfiRQqjcQQqjcMukKQNFkSGZkQQChhrBMhgQBBhRgHg6Qhxudldu5QmbxiqDtmQrxv9vlowQx6qE2AAAQmFAAmfAyg");
	this.shape_104.setTransform(886.6207,56.359);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#272C2E").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape_105.setTransform(889.9336,70.515);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#362045").s().p("Eh4jApnQ2zhqt6kCQyUlThGo+QhGo+QfpkQMhnQVvnHQYOn7fpmhUAfpgGiAjDgETUAjEgETAgRgBUUAgTgBUAZaAB1QWzBqN6ECQSUFTBGI+QBGI+wfJkQshHQ1vHHQ4OH7/pGiUgfpAGhgjDAETQ4wDD3sBkQ3iBj0+AAQxOAAu4hEgEAsPgksQ3iBj4oDBUgi4AESgfaAGfQ/cGe4BH3Q2mHYsYHfQsXHeAuF1QAuF1NzERQNzERXvBuUAZMAB1AgFgBUUAgDgBUAi2gERUAi2gERAfcgGfQfbmfYCn3QWmnYMYneQMXnfgul1Qgul1tzkRQtzkQ3vhvQuqhDxIAAQ01AA3ZBjg");
	this.shape_106.setTransform(902.975,444.7741);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#7B7B7B").s().p("EheBAMEQgbjhOZkRQLgjbUbjuQOlirRlikQIzhSF4gwIOthlQRqhwO0g8QUuhTL/AiQPAAqAbDhQAOBwhcB7UgIdgEFgrVADFQtiA9vaBkIsrBYQz8Cj1ZDuUgqyAHfgHOAGAQh3hhgOhwg");
	this.shape_107.setTransform(888.2526,321.0081);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#2F3A55").s().p("Egu4ALLQmLgzjbhbQjjhegPiBQgYjERJj7QL0itSkizQDNgeDNgdIApgGQDQgdB/gQIBzgNQCVgRClgRIErgeQS3h0MWgRQSIgZAYDHQAQCEjPCWQjICRmECUQsfEwz4DaIAAAAQm6BMnYA6QkQAikNAZIn0ApQonAlnSAAQpIAAnCg6g");
	this.shape_108.setTransform(893.7067,381.1651);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#2F3A55").s().p("EhA4ASRQtUg+njidQn0ihgejxQgbjhOZkRQLgjaUbjvQOlirRlikQIzhSF4gwIOthlQRrhwOzg8QUuhTL/AiQPAAqAbDhQAeDxm+EWQmvEMssEJQstEKwtDfQxSDmzICWQzHCWxqAsQm9ARmWAAQpMAAn5gkg");
	this.shape_109.setTransform(888.2517,343.4265);

	this.instance_9 = new lib.Group_30();
	this.instance_9.setTransform(924.65,515.05,1,1,0,0,0,748.3,187.8);
	this.instance_9.alpha = 0.3516;

	this.instance_10 = new lib.Group_31();
	this.instance_10.setTransform(121.3,562.95,1,1,0,0,0,323.7,134.7);
	this.instance_10.alpha = 0.3516;

	this.instance_11 = new lib.Group_32();
	this.instance_11.setTransform(1687.15,376.6,1,1,0,0,0,331.5,136.1);
	this.instance_11.alpha = 0.3516;

	this.instance_12 = new lib.Group_33();
	this.instance_12.setTransform(896.35,358.4,1,1,0,0,0,648.8,142.3);
	this.instance_12.alpha = 0.5;

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#BBC5D2").s().p("Eh4YAnaQ4vhzuAkiQugktg3m/Qg2m/M7oDQMfnyXlnuQXknte/mcUAgGgGsAjggEWUAjegEXAgwgBRQfphPYvByQYuBzOAEiQOgEsA3G/QA2G/s7IEQsfHx3kHuQ3lHu+/GcUggGAGrgjgAEXUgjfAEXggvABRQs7AgrxAAQxDAAuohDg");
	this.shape_110.setTransform(901.675,444.95);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#362045").s().p("Eh37AkDQ2uhpt2j/QyPlQhFo2IhQqMQgHg0AggoQAggpA0gGQAzgGApAfQApAgAGA0IBQKMQAuF7N4EVQN3EVX1BuUAZOAB1AgFgBUUAgFgBUAi2gERUAi2gESAfdgGfQfcmeYCn4QWtnaManiQMbnkgvl7IhQqMID4gfIBQKMQBGI3wbJgQsfHN1pHEQ4NH7/pGhUgfnAGhgjEAEUQ4wDC3qBkQ3jBk08AAQxZAAushFg");
	this.shape_111.setTransform(907.1357,543.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFF66").s().p("Eh4JAgKQ4vhyt/kjQugksg3m/IgjklQA/G4OVEqQOAEiYvBzQYvByfohPUAgwgBRAjfgEXUAjggEWAgGgGsQe/mcXlntQXkntMfnyQMzn/gtm7IAkElQA2G/s7IEQsfHy3kHtQ3lHt+/GdUggGAGrgjgAEWUgjfAEXggvABSQs7AgrxAAQxDAAuphEg");
	this.shape_112.setTransform(909.3684,556.3377);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFF66").s().p("Eh3yAi+Q4vhzuAkiQufktg3m/IhQqMMFc8gqxIBQKMQA3G/s8IEQsfHy3kHsQ3kHu/AGcUggFAGrgjgAEXUgjfAEWggwABSQs6AgrxAAQxEAAuohDg");
	this.shape_113.setTransform(907.1434,538.3877);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#362045").s().p("EhI7AeSQuMhyovjfQrfkmg4nKQg4nKKCnNQHolgNXlKQOrlsTQkbQTQkcVXinQVXioTvgWQTwgXPnB+QONByIvDfQLfEmA4HKQA4HKqCHNQnoFgtXFKQurFszPEbQzQEc1YCnQsPBgr5AxQr0Axq+AAQwYAAtMhrgAU46xQrvAwsJBfQ1HCmy+EXQy9EXucFlQtZFLnQFZQnQFaAiEaQAjEXIKDcQIKDcOKB1QO0B7SugOQUMgQWGitQVHimS/kXQS/kXObllQNYlLHQlZQHQlagjkaQgikZoWjgQoWjfuOhzQs9howFAAQqzAArsAwg");
	this.shape_114.setTransform(927.75,646.929);

	this.instance_13 = new lib.Group_40();
	this.instance_13.setTransform(929.3,666.7,1,1,0,0,0,676.9,134.3);
	this.instance_13.alpha = 0.3516;

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FDFEFF").s().p("Eg80AXSQtpg3qGiOQqOiQlkjaQkJijhSjDQBEjWIgj7QIRjzOMj4QOPj4SMjZQS0jhUpiiQUniiTIhJQSehGOvAVQOuAVI7BtQJOBwB1C/QghDSjZDeQklEppYEqQpREltBEIQtLEMvtDTQwPDaxeCJQ4pDB1hAAQpIAAolgjg");
	this.shape_115.setTransform(929.25,684.8765);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#9A9A9A").s().p("EhIpAcGQvIh5opj0Qo8j9grlcQgqlcHul/QHdlxOOlgQOOlgSykXQTdkhVkiqQVkipT9gUQTSgUPIB6QPIB6IpDzQI8D9ArFcQAqFcnuF/QndFxuOFgQuOFgyyEXQzdEh1kCqQ1kCpz9AUQirADilAAQwIAAtChpg");
	this.shape_116.setTransform(927.775,646.9255);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#362045").s().p("AgZLtQk9gKkhg8Qkhg7jghlQj6hxiCiUQiDiVAGikQAFimCNiLQCMiLEBhgQDnhVEkgoQEkgoE8ALQFcAMExBEQEoBBDeBuQDdBuB1CLQB5CQgFCdQgGCliMCMQiMCLkBBfQjOBNkBAoQkAAokZAAQg7AAhJgDgApYnRQjpAki6BFQivBBhlBTQhlBTgDBSQgDBRBfBaQBfBaCrBNQDKBbEJA2QEIA2EmAKQElAKELgkQEMgkDQhNQCvhBBlhTQBlhUADhSQADhXhnhdQhmhci6hPQmhivpCgUQhFgCg3AAQkDAAjqAkg");
	this.shape_117.setTransform(561.3508,825.0564);

	this.instance_14 = new lib.Group_44();
	this.instance_14.setTransform(561.35,825.05,1,1,0,0,0,152.5,62.7);
	this.instance_14.alpha = 0.1992;

	this.instance_15 = new lib.Group_45();
	this.instance_15.setTransform(1326.3,731.2,1,1,0,0,0,147.7,73.2);
	this.instance_15.alpha = 0.1992;

	this.instance_16 = new lib.Group_46();
	this.instance_16.setTransform(948.8,818.05,1,1,0,0,0,151.7,64.8);
	this.instance_16.alpha = 0.1992;

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FDFEFF").s().p("AgUJxQp4gWm4jGQjRhdhwh1Qhzh4AEh+QAEh/B8hwQB4hsDWhPQHEioJ3AWQE2AKEaA7QEQA5DQBdQDQBeBwB0QB0B4gEB+QgEB/h8BwQh4BtjWBPQjWBPkTAmQjhAfjwAAQhAAAhBgCg");
	this.shape_118.setTransform(561.3517,825.0391);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#362045").s().p("AuhNPQkQgfirhlQiphlguigQgtifBaiwQBbiuDXiqQDCiYEJh/QELiAExhXQKmjCIBBNQD1AlCaBhQCfBjArCYQAuCghbCvQhbCvjXCpQjBCYkKCAQkKB/kxBYQjqBDjmAiQjmAjjQAAQh6AAhvgMgAEzo+QjcAgjgBAQkbBRjyBzQj1B1iuCJQiTBzhHBuQhGBuAWBPQAYBPB2A4QB1A5C6AUQDdAZENgeQEMgeEZhRQEahQD0h1QD0h0CviJQCThzBGhuQBGhugWhPQgdhmiug8Qiwg9kNAAQi6AAjOAfg");
	this.shape_119.setTransform(1326.35,731.1311);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FDFEFF").s().p("AuTLRQjjgZiOhMQiThPgjh6Qgjh7BTiQQBRiMCziMQF8krJgitQJeiuHgA2QDjAZCOBMQCTBPAjB6QAjB7hTCQQhRCMizCMQl7ErpgCtQnRCFmHAAQh3AAhwgNg");
	this.shape_120.setTransform(1326.325,731.2646);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#362045").s().p("AzlJrQlhidggkFQgTidBsiZQBoiVDTiBQDTiBEhhbQEqheFZgqQFYgrE4ATQEvATDsBKQDsBKCJB4QCOB8ATCcQAVClh1CeQh1CfjvCGQjXB4kaBVQkbBVk7AmQjnAdjkAAQoZAAlciagAg8nvQo+BGmQDUQiyBeheBlQhfBlALBXQALBYB0BMQB0BLDDAxQG3BtI+hHQEjgjEDhNQEDhNDBhtQCkhbBWhiQBXhhgKhSQgSiSkehlQkohpmvAAQjMAAjXAbg");
	this.shape_121.setTransform(948.7601,818.0065);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FDFEFF").s().p("Av4I6Qjdg8iAhhQiFhlgPh+QgQh+BpiBQBlh+DHhvQGljsJ0hNQJzhNHRB/QDdA8CABhQCFBlAPB+QAQB+hpCBQhlB+jIBvQmkDsp0BNQjrAdjWAAQlhAAkihPg");
	this.shape_122.setTransform(948.75,818.025);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#E2E2E2").s().p("Av4I6Qjdg8iAhhQiFhlgPh+QgQh+BpiBQBlh+DHhvQGljsJ0hNQJzhNHRB/QDdA8CABhQCFBlAPB+QAQB+hpCBQhlB+jIBvQmkDsp0BNQjrAdjWAAQlhAAkihPg");
	this.shape_123.setTransform(948.75,818.025);

	this.instance_17 = new lib.Group_1_1();
	this.instance_17.setTransform(531.1,-93.5,1,1,0,0,0,47.8,55.5);
	this.instance_17.alpha = 0.3516;

	this.instance_18 = new lib.Group_2();
	this.instance_18.setTransform(433.95,164.5,1,1,0,0,0,70.2,168.5);
	this.instance_18.alpha = 0.3516;

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FF0000").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_124.setTransform(104.7249,582.232);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FF0000").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_125.setTransform(486.1533,599.8815);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FF0000").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_126.setTransform(1721.6494,383.9885);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FF0000").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_127.setTransform(1355.775,493.275);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FF0000").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_128.setTransform(917.255,561.25);

	this.instance_19 = new lib.Group_24();
	this.instance_19.setTransform(957.05,-28.4,1,1,0,0,0,526.3,331.5);
	this.instance_19.alpha = 0.3516;

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#272C2E").s().p("Eg/jBAfQtKg9ncibQntifgdjuQh4vVB/w6QCb0dHqwsQJJz8PusTQSQuTaQjOQaOjOVKJdQSPIKNsRJQLeOWHSTQQGCP8B4PUQAdDum4ESQmpEJshEGQsiEHwfDbQxDDjy4CUQy3CUxaAsQm3ARmQAAQpFAAnygkg");
	this.shape_129.setTransform(889.9336,56.365);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#66FF00").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_130.setTransform(104.7249,582.232);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#66FF00").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_131.setTransform(486.1533,599.8815);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#66FF00").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_132.setTransform(1721.6494,383.9885);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#66FF00").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_133.setTransform(1355.775,493.275);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#66FF00").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_134.setTransform(917.255,561.25);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#66FFFF").s().p("AmNE8Qi2hpgNimQgNilCliDQCliCD2gTQD0gTC3BpQC3BoAMCmQANClilCDQilCDj2ASQglADgkAAQjHAAibhYg");
	this.shape_135.setTransform(104.7249,582.232);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#66FFFF").s().p("AmNE8Qi3hpgMimQgNilCliDQCliCD1gTQD1gTC2BoQC3BpANCmQANClilCDQilCDj2ASQgkADglAAQjHAAibhYg");
	this.shape_136.setTransform(486.1533,599.8815);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#66FFFF").s().p("AluFfQi/hXgcikQgcikCYiRQCYiRDzgqQDygpC/BXQDABXAcCkQAcCkiZCRQiYCSjyApQhOANhJAAQiZAAiCg7g");
	this.shape_137.setTransform(1721.6494,383.9885);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#66FFFF").s().p("AluFfQi/hYgcikQgcijCYiRQCYiSDzgpQDygpC/BXQDABXAbCkQAcCkiYCRQiYCSjzApQhNANhIAAQiaAAiCg7g");
	this.shape_138.setTransform(1355.775,493.275);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#66FFFF").s().p("Al+FOQi7hggVilQgUilCfiLQCeiJD1gfQDzgdC8BgQC7BfAUCmQAVCkifCKQifCKj0AeQg5AIg3AAQiwAAiPhJg");
	this.shape_139.setTransform(917.255,561.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.instance_13},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105,p:{y:70.515,x:889.9336}},{t:this.shape_104},{t:this.shape_103,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:981.298,y:253.755}},{t:this.shape_102,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:995.9097,y:301.6752}},{t:this.shape_101,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:956.2028,y:150.0739}},{t:this.shape_100,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1009.6798,y:131.7132}},{t:this.shape_99,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:981.297,y:253.8741}},{t:this.shape_98,p:{scaleX:0.7908,scaleY:0.7908,rotation:-16.9549,x:937.7142,y:322.6343}},{t:this.shape_97,p:{scaleX:0.7908,scaleY:0.7908,rotation:-16.9549,x:936.2451,y:322.3389}},{t:this.shape_96,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:939.3952,y:326.3329}},{t:this.shape_95,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:936.3279,y:322.4398}},{t:this.shape_94,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:936.5333,y:321.2262}},{t:this.shape_93,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1083.615,y:236.8019}},{t:this.shape_92,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1113.5138,y:295.1973}},{t:this.shape_91,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1009.6798,y:131.7132}},{t:this.shape_90,p:{scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:1083.6418,y:236.8861}},{t:this.shape_89,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:915.1254,y:-58.3043}},{t:this.shape_88,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:924.9305,y:124.8219}},{t:this.shape_87,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:914.621,y:-58.9121}},{t:this.shape_86,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:756.9774,y:-2.2117}},{t:this.instance_8,p:{regX:56.4,regY:85.7,scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:756.15,y:-19.4}},{t:this.shape_85,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:926.7138,y:6.6342}},{t:this.instance_7,p:{regX:93,regY:51.7,scaleX:0.7912,scaleY:0.7912,rotation:-16.9562,x:920.4,y:-16.25}},{t:this.shape_84,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:757.4519,y:-8.7989}},{t:this.shape_83,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:926.703,y:6.5498}},{t:this.shape_82,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:828.2331,y:64.7729}},{t:this.shape_81,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:839.3908,y:65.4333}},{t:this.shape_80,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:948.0091,y:-124.0388}},{t:this.shape_79,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:906.8689,y:-118.2306}},{t:this.shape_78,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:949.4971,y:-124.3077}},{t:this.shape_77,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:682.0915,y:-152.49}},{t:this.shape_76,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:682.1965,y:-154.0359}},{t:this.shape_75,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:753.7447,y:-133.1474}},{t:this.shape_74,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9549,x:680.6384,y:-155.4005}},{t:this.shape_73,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:901.1237,y:-70.6487}},{t:this.shape_72,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:780.981,y:-82.0483}},{t:this.shape_71,p:{scaleX:0.791,scaleY:0.791,rotation:-16.9559,x:871.4332,y:109.8851}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.instance_6},{t:this.instance_5,p:{x:957.05,y:-28.4}},{t:this.instance_4,p:{x:531.1,y:-93.5}},{t:this.instance_3,p:{x:433.95,y:164.5}}]}).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.instance_13},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_129,p:{x:889.9336}},{t:this.instance_19},{t:this.shape_104},{t:this.shape_128},{t:this.shape_69},{t:this.shape_127},{t:this.shape_67},{t:this.shape_126},{t:this.shape_65},{t:this.shape_125},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_124},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.instance_18},{t:this.instance_17},{t:this.instance_6},{t:this.shape_103,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:967.9603,y:263.2623}},{t:this.shape_102,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:982.5585,y:311.1448}},{t:this.shape_101,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:942.8892,y:159.663}},{t:this.shape_100,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:996.3242,y:141.319}},{t:this.shape_99,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:967.9593,y:263.3813}},{t:this.shape_98,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9538,x:924.4427,y:332.1121}},{t:this.shape_97,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9538,x:922.9746,y:331.8169}},{t:this.shape_96,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:926.1188,y:335.7964}},{t:this.shape_95,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:923.0538,y:331.9062}},{t:this.shape_94,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:923.2591,y:330.6935}},{t:this.shape_93,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1070.1963,y:246.3268}},{t:this.shape_92,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1100.069,y:304.6767}},{t:this.shape_91,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:996.3242,y:141.319}},{t:this.shape_90,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1070.2231,y:246.4109}},{t:this.shape_89,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:901.8723,y:-48.5525}},{t:this.shape_88,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:911.6676,y:134.4365}},{t:this.shape_87,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:901.3682,y:-49.1598}},{t:this.shape_86,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:744.3419,y:0.9009}},{t:this.instance_8,p:{regX:58.2,regY:86.4,scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:743.5,y:-9.85}},{t:this.shape_85,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:913.4512,y:16.3374}},{t:this.instance_7,p:{regX:95,regY:51.9,scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:907.8,y:-7.2}},{t:this.shape_84,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:744.3164,y:0.9136}},{t:this.shape_83,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:913.4403,y:16.2531}},{t:this.shape_82,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:815.0435,y:74.4312}},{t:this.shape_81,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:826.1928,y:75.0913}},{t:this.shape_80,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:934.7321,y:-114.2373}},{t:this.shape_79,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:893.6227,y:-108.4339}},{t:this.shape_78,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:936.2191,y:-114.506}},{t:this.shape_77,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:669.0145,y:-142.6706}},{t:this.shape_76,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:669.0145,y:-142.6706}},{t:this.shape_75,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:740.6137,y:-123.3416}},{t:this.shape_74,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:667.108,y:-144.0341}},{t:this.shape_73,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:887.8812,y:-60.8878}},{t:this.shape_72,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:767.8288,y:-72.2804}},{t:this.shape_71,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:858.2106,y:119.5101}},{t:this.shape_105,p:{y:56.365,x:889.9336}},{t:this.instance_5,p:{x:960.3,y:-34.25}},{t:this.instance_3,p:{x:437.2,y:158.65}},{t:this.instance_4,p:{x:534.35,y:-99.35}}]},2).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.instance_13},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_129,p:{x:886.6836}},{t:this.instance_19},{t:this.shape_104},{t:this.shape_134},{t:this.shape_69},{t:this.shape_133},{t:this.shape_67},{t:this.shape_132},{t:this.shape_65},{t:this.shape_131},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_130},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.instance_18},{t:this.instance_17},{t:this.instance_6},{t:this.shape_103,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:983.6603,y:262.9123}},{t:this.shape_102,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:998.2585,y:310.7948}},{t:this.shape_101,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:958.5892,y:159.313}},{t:this.shape_100,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1012.0242,y:140.969}},{t:this.shape_99,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:983.6593,y:263.0313}},{t:this.shape_98,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9538,x:940.1427,y:331.7621}},{t:this.shape_97,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9538,x:938.6746,y:331.4669}},{t:this.shape_96,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:941.8188,y:335.4464}},{t:this.shape_95,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:938.7538,y:331.5562}},{t:this.shape_94,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:938.9591,y:330.3435}},{t:this.shape_93,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1085.8963,y:245.9768}},{t:this.shape_92,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1115.769,y:304.3267}},{t:this.shape_91,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1012.0242,y:140.969}},{t:this.shape_90,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1085.9231,y:246.0609}},{t:this.shape_89,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:917.5723,y:-48.9025}},{t:this.shape_88,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:927.3676,y:134.0865}},{t:this.shape_87,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:917.0682,y:-49.5098}},{t:this.shape_86,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:760.0419,y:0.5509}},{t:this.instance_8,p:{regX:58.1,regY:85.8,scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:759.1,y:-10.55}},{t:this.shape_85,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:929.1512,y:15.9874}},{t:this.instance_7,p:{regX:94.5,regY:52.3,scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:923.15,y:-7.3}},{t:this.shape_84,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:760.0164,y:0.5636}},{t:this.shape_83,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:929.1403,y:15.9031}},{t:this.shape_82,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:830.7435,y:74.0812}},{t:this.shape_81,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:841.8928,y:74.7413}},{t:this.shape_80,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:950.4321,y:-114.5873}},{t:this.shape_79,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:909.3227,y:-108.7839}},{t:this.shape_78,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:951.9191,y:-114.856}},{t:this.shape_77,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:684.7145,y:-143.0206}},{t:this.shape_76,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:684.7145,y:-143.0206}},{t:this.shape_75,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:756.3137,y:-123.6916}},{t:this.shape_74,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:682.808,y:-144.3841}},{t:this.shape_73,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:903.5812,y:-61.2378}},{t:this.shape_72,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:783.5288,y:-72.6304}},{t:this.shape_71,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:873.9106,y:119.1601}},{t:this.shape_105,p:{y:56.365,x:883.0336}},{t:this.instance_5,p:{x:960.3,y:-28.4}},{t:this.instance_3,p:{x:433.95,y:164.5}},{t:this.instance_4,p:{x:531.1,y:-93.5}}]},2).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.instance_13},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_129,p:{x:886.6836}},{t:this.instance_19},{t:this.shape_104},{t:this.shape_139},{t:this.shape_69},{t:this.shape_138},{t:this.shape_67},{t:this.shape_137},{t:this.shape_65},{t:this.shape_136},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_135},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.instance_18},{t:this.instance_17},{t:this.instance_6},{t:this.shape_103,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:968.0103,y:272.4623}},{t:this.shape_102,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:982.6085,y:320.3448}},{t:this.shape_101,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:942.9392,y:168.863}},{t:this.shape_100,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:996.3742,y:150.519}},{t:this.shape_99,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:968.0093,y:272.5813}},{t:this.shape_98,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9538,x:924.4927,y:341.3121}},{t:this.shape_97,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9538,x:923.0246,y:341.0169}},{t:this.shape_96,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:926.1688,y:344.9964}},{t:this.shape_95,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:923.1038,y:341.1062}},{t:this.shape_94,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:923.3091,y:339.8935}},{t:this.shape_93,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1070.2463,y:255.5268}},{t:this.shape_92,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1100.119,y:313.8767}},{t:this.shape_91,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:996.3742,y:150.519}},{t:this.shape_90,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1070.2731,y:255.6109}},{t:this.shape_89,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:901.9223,y:-39.3525}},{t:this.shape_88,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:911.7176,y:143.6365}},{t:this.shape_87,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:901.4182,y:-39.9598}},{t:this.shape_86,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:744.3919,y:10.1009}},{t:this.instance_8,p:{regX:58.1,regY:85.8,scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:743.3,y:-1.1}},{t:this.shape_85,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:913.5012,y:25.5374}},{t:this.instance_7,p:{regX:94.6,regY:52.4,scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:907.6,y:2.2}},{t:this.shape_84,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:744.3664,y:10.1136}},{t:this.shape_83,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:913.4903,y:25.4531}},{t:this.shape_82,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:815.0935,y:83.6312}},{t:this.shape_81,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:826.2428,y:84.2913}},{t:this.shape_80,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:934.7821,y:-105.0373}},{t:this.shape_79,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:893.6727,y:-99.2339}},{t:this.shape_78,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:936.2691,y:-105.306}},{t:this.shape_77,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:669.0645,y:-133.4706}},{t:this.shape_76,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:669.0645,y:-133.4706}},{t:this.shape_75,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:740.6637,y:-114.1416}},{t:this.shape_74,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:667.158,y:-134.8341}},{t:this.shape_73,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:887.9312,y:-51.6878}},{t:this.shape_72,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:767.8788,y:-63.0804}},{t:this.shape_71,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:858.2606,y:128.7101}},{t:this.shape_105,p:{y:56.365,x:893.4336}},{t:this.instance_5,p:{x:963.8,y:-28.4}},{t:this.instance_3,p:{x:440.7,y:164.5}},{t:this.instance_4,p:{x:537.85,y:-93.5}}]},2).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.instance_13},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_129,p:{x:886.6836}},{t:this.instance_19},{t:this.shape_104},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.instance_18},{t:this.instance_17},{t:this.instance_6},{t:this.shape_103,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:985.4103,y:259.8123}},{t:this.shape_102,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1000.0085,y:307.6948}},{t:this.shape_101,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:960.3392,y:156.213}},{t:this.shape_100,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1013.7742,y:137.869}},{t:this.shape_99,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:985.4093,y:259.9313}},{t:this.shape_98,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9538,x:941.8927,y:328.6621}},{t:this.shape_97,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9538,x:940.4246,y:328.3669}},{t:this.shape_96,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:943.5688,y:332.3464}},{t:this.shape_95,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:940.5038,y:328.4562}},{t:this.shape_94,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:940.7091,y:327.2435}},{t:this.shape_93,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1087.6463,y:242.8768}},{t:this.shape_92,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1117.519,y:301.2267}},{t:this.shape_91,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1013.7742,y:137.869}},{t:this.shape_90,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1087.6731,y:242.9609}},{t:this.shape_89,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:919.3223,y:-52.0025}},{t:this.shape_88,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:929.1176,y:130.9865}},{t:this.shape_87,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:918.8182,y:-52.6098}},{t:this.shape_86,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:761.7919,y:-2.5491}},{t:this.instance_8,p:{regX:58.1,regY:85.9,scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:760.75,y:-13.6}},{t:this.shape_85,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:930.9012,y:12.8874}},{t:this.instance_7,p:{regX:94.5,regY:51.9,scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:924.75,y:-10.6}},{t:this.shape_84,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:761.7664,y:-2.5364}},{t:this.shape_83,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:930.8903,y:12.8031}},{t:this.shape_82,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:832.4935,y:70.9812}},{t:this.shape_81,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:843.6428,y:71.6413}},{t:this.shape_80,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:952.1821,y:-117.6873}},{t:this.shape_79,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:911.0727,y:-111.8839}},{t:this.shape_78,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:953.6691,y:-117.956}},{t:this.shape_77,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:686.4645,y:-146.1206}},{t:this.shape_76,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:686.4645,y:-146.1206}},{t:this.shape_75,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:758.0637,y:-126.7916}},{t:this.shape_74,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:684.558,y:-147.4841}},{t:this.shape_73,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:905.3312,y:-64.3378}},{t:this.shape_72,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:785.2788,y:-75.7304}},{t:this.shape_71,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:875.6606,y:116.0601}},{t:this.shape_105,p:{y:56.365,x:886.6836}},{t:this.instance_5,p:{x:957.05,y:-28.4}},{t:this.instance_3,p:{x:433.95,y:164.5}},{t:this.instance_4,p:{x:531.1,y:-93.5}}]},2).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.instance_13},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_129,p:{x:886.6836}},{t:this.instance_19},{t:this.shape_104},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.instance_18},{t:this.instance_17},{t:this.instance_6},{t:this.shape_103,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:985.4103,y:259.8123}},{t:this.shape_102,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1000.0085,y:307.6948}},{t:this.shape_101,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:960.3392,y:156.213}},{t:this.shape_100,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1013.7742,y:137.869}},{t:this.shape_99,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:985.4093,y:259.9313}},{t:this.shape_98,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9538,x:941.8927,y:328.6621}},{t:this.shape_97,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9538,x:940.4246,y:328.3669}},{t:this.shape_96,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:943.5688,y:332.3464}},{t:this.shape_95,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:940.5038,y:328.4562}},{t:this.shape_94,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:940.7091,y:327.2435}},{t:this.shape_93,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1087.6463,y:242.8768}},{t:this.shape_92,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1117.519,y:301.2267}},{t:this.shape_91,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1013.7742,y:137.869}},{t:this.shape_90,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1087.6731,y:242.9609}},{t:this.shape_89,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:919.3223,y:-52.0025}},{t:this.shape_88,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:929.1176,y:130.9865}},{t:this.shape_87,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:918.8182,y:-52.6098}},{t:this.shape_86,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:761.7919,y:-2.5491}},{t:this.instance_8,p:{regX:58.1,regY:85.9,scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:760.75,y:-13.6}},{t:this.shape_85,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:930.9012,y:12.8874}},{t:this.instance_7,p:{regX:94.5,regY:51.9,scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:924.75,y:-10.6}},{t:this.shape_84,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:761.7664,y:-2.5364}},{t:this.shape_83,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:930.8903,y:12.8031}},{t:this.shape_82,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:832.4935,y:70.9812}},{t:this.shape_81,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:843.6428,y:71.6413}},{t:this.shape_80,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:952.1821,y:-117.6873}},{t:this.shape_79,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:911.0727,y:-111.8839}},{t:this.shape_78,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:953.6691,y:-117.956}},{t:this.shape_77,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:686.4645,y:-146.1206}},{t:this.shape_76,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:686.4645,y:-146.1206}},{t:this.shape_75,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:758.0637,y:-126.7916}},{t:this.shape_74,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:684.558,y:-147.4841}},{t:this.shape_73,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:905.3312,y:-64.3378}},{t:this.shape_72,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:785.2788,y:-75.7304}},{t:this.shape_71,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:875.6606,y:116.0601}},{t:this.shape_105,p:{y:56.365,x:886.6836}},{t:this.instance_5,p:{x:957.05,y:-28.4}},{t:this.instance_3,p:{x:433.95,y:164.5}},{t:this.instance_4,p:{x:531.1,y:-93.5}}]},3).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.instance_13},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_129,p:{x:886.6836}},{t:this.instance_19},{t:this.shape_104},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.instance_18},{t:this.instance_17},{t:this.instance_6},{t:this.shape_103,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:985.4103,y:259.8123}},{t:this.shape_102,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1000.0085,y:307.6948}},{t:this.shape_101,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:960.3392,y:156.213}},{t:this.shape_100,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1013.7742,y:137.869}},{t:this.shape_99,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:985.4093,y:259.9313}},{t:this.shape_98,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9538,x:941.8927,y:328.6621}},{t:this.shape_97,p:{scaleX:0.7902,scaleY:0.7902,rotation:-16.9538,x:940.4246,y:328.3669}},{t:this.shape_96,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:943.5688,y:332.3464}},{t:this.shape_95,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:940.5038,y:328.4562}},{t:this.shape_94,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:940.7091,y:327.2435}},{t:this.shape_93,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1087.6463,y:242.8768}},{t:this.shape_92,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1117.519,y:301.2267}},{t:this.shape_91,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1013.7742,y:137.869}},{t:this.shape_90,p:{scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:1087.6731,y:242.9609}},{t:this.shape_89,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:919.3223,y:-52.0025}},{t:this.shape_88,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:929.1176,y:130.9865}},{t:this.shape_87,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:918.8182,y:-52.6098}},{t:this.shape_86,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:761.7919,y:-2.5491}},{t:this.instance_8,p:{regX:58.1,regY:85.9,scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:760.75,y:-13.6}},{t:this.shape_85,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:930.9012,y:12.8874}},{t:this.instance_7,p:{regX:94.5,regY:51.9,scaleX:0.7905,scaleY:0.7905,rotation:-16.954,x:924.75,y:-10.6}},{t:this.shape_84,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:761.7664,y:-2.5364}},{t:this.shape_83,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:930.8903,y:12.8031}},{t:this.shape_82,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:832.4935,y:70.9812}},{t:this.shape_81,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:843.6428,y:71.6413}},{t:this.shape_80,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:952.1821,y:-117.6873}},{t:this.shape_79,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:911.0727,y:-111.8839}},{t:this.shape_78,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:953.6691,y:-117.956}},{t:this.shape_77,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:686.4645,y:-146.1206}},{t:this.shape_76,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:686.4645,y:-146.1206}},{t:this.shape_75,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:758.0637,y:-126.7916}},{t:this.shape_74,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:684.558,y:-147.4841}},{t:this.shape_73,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:905.3312,y:-64.3378}},{t:this.shape_72,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:785.2788,y:-75.7304}},{t:this.shape_71,p:{scaleX:0.7904,scaleY:0.7904,rotation:-16.9551,x:875.6606,y:116.0601}},{t:this.shape_105,p:{y:56.365,x:886.6836}},{t:this.instance_5,p:{x:957.05,y:-28.4}},{t:this.instance_3,p:{x:433.95,y:164.5}},{t:this.instance_4,p:{x:531.1,y:-93.5}}]},3).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.1,-381.2,2269.8,1281.5);


(lib.Scene_1_man = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// man
	this.instance = new lib.man1("synched",0);
	this.instance.setTransform(218,233.95,0.0218,0.0218,0,0,0,632.5,978.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180).to({_off:false},0).wait(320));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// back
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(734.05,376.35,1.5987,1.0126,0,0,0,514,405.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(506));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_alien_woman = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// alien_woman
	this.instance = new lib.spaceshipWoman("synched",0);
	this.instance.setTransform(368.25,249.5,0.1087,0.1087,0,0,0,909.2,261.7);
	this.instance._off = true;

	this.instance_1 = new lib.Womanside_spaceship("synched",0);
	this.instance_1.setTransform(335.5,212.2,0.0824,0.0824,0,0,0,909.1,262);

	this.instance_2 = new lib.WomansideSTATIC("synched",0);
	this.instance_2.setTransform(337.85,211.5,0.0839,0.0839,0,0,0,912.1,263.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},357).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},26).to({state:[{t:this.instance_2}]},22).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(357).to({_off:false},0).wait(11).to({regX:907.9,startPosition:11},0).wait(1).to({regX:906.8,regY:259.5,scaleX:0.1077,scaleY:0.1077,x:366.9,y:248,startPosition:12},0).wait(1).to({scaleX:0.1066,scaleY:0.1066,x:365.7,y:246.7,startPosition:13},0).wait(1).to({scaleX:0.1056,scaleY:0.1056,x:364.5,y:245.5,startPosition:14},0).wait(1).to({scaleX:0.1045,scaleY:0.1045,x:363.3,y:244.2,startPosition:15},0).wait(1).to({scaleX:0.1034,scaleY:0.1034,x:362.1,y:243,startPosition:16},0).wait(1).to({scaleX:0.1024,scaleY:0.1024,x:360.9,y:241.7,startPosition:0},0).wait(1).to({scaleX:0.1013,scaleY:0.1013,x:359.7,y:240.5,startPosition:1},0).wait(1).to({scaleX:0.1003,scaleY:0.1003,x:358.5,y:239.2,startPosition:2},0).wait(1).to({scaleX:0.0992,scaleY:0.0992,x:357.3,y:238,startPosition:3},0).wait(1).to({scaleX:0.0982,scaleY:0.0982,x:356.05,y:236.7,startPosition:4},0).wait(1).to({scaleX:0.0971,scaleY:0.0971,x:354.85,y:235.5,startPosition:5},0).wait(1).to({scaleX:0.0961,scaleY:0.0961,x:353.65,y:234.25,startPosition:6},0).wait(1).to({scaleX:0.095,scaleY:0.095,x:352.45,y:233,startPosition:7},0).wait(1).to({scaleX:0.094,scaleY:0.094,x:351.3,y:231.75,startPosition:8},0).wait(1).to({scaleX:0.0929,scaleY:0.0929,x:350.1,y:230.5,startPosition:9},0).wait(1).to({scaleX:0.0918,scaleY:0.0918,x:348.9,y:229.25,startPosition:10},0).wait(1).to({scaleX:0.0908,scaleY:0.0908,x:347.7,y:228,startPosition:11},0).wait(1).to({scaleX:0.0897,scaleY:0.0897,x:346.45,y:226.75,startPosition:12},0).wait(1).to({scaleX:0.0887,scaleY:0.0887,x:345.25,y:225.5,startPosition:13},0).wait(1).to({scaleX:0.0876,scaleY:0.0876,x:344.05,y:224.25,startPosition:14},0).wait(1).to({scaleX:0.0866,scaleY:0.0866,x:342.85,y:223,startPosition:15},0).wait(1).to({scaleX:0.0855,scaleY:0.0855,x:341.65,y:221.75,startPosition:16},0).wait(1).to({scaleX:0.0845,scaleY:0.0845,x:340.45,y:220.5,startPosition:0},0).wait(1).to({scaleX:0.0834,scaleY:0.0834,x:339.25,y:219.25,startPosition:1},0).wait(1).to({scaleX:0.0824,scaleY:0.0824,x:338.05,y:218,startPosition:2},0).wait(1).to({scaleX:0.0813,scaleY:0.0813,x:336.8,y:216.75,startPosition:3},0).wait(1).to({scaleX:0.0802,scaleY:0.0802,x:335.65,y:215.5,startPosition:4},0).wait(1).to({scaleX:0.0792,scaleY:0.0792,x:334.45,y:214.25,startPosition:5},0).to({_off:true},1).wait(103));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(423).to({_off:false},0).wait(22).to({regX:911.7,regY:263.4,startPosition:22},0).wait(1).to({regX:906.8,regY:259.5,x:355.2,y:207.65,startPosition:23},0).wait(1).to({x:372.95,y:204.25,startPosition:24},0).wait(1).to({x:390.75,y:200.8,startPosition:25},0).wait(1).to({x:408.55,y:197.35,startPosition:0},0).wait(1).to({x:426.3,y:193.9,startPosition:1},0).wait(1).to({x:444.1,y:190.45,startPosition:2},0).wait(1).to({x:461.9,y:187,startPosition:3},0).wait(1).to({x:479.65,y:183.55,startPosition:4},0).wait(1).to({x:497.45,y:180.1,startPosition:5},0).wait(1).to({x:515.25,y:176.65,startPosition:6},0).wait(1).to({x:533,y:173.2,startPosition:7},0).wait(1).to({x:550.8,y:169.75,startPosition:8},0).wait(1).to({x:568.55,y:166.3,startPosition:9},0).wait(1).to({x:586.35,y:162.85,startPosition:10},0).wait(1).to({x:604.15,y:159.45,startPosition:11},0).wait(1).to({x:621.9,y:156,startPosition:12},0).wait(1).to({x:639.7,y:152.55,startPosition:13},0).wait(1).to({x:657.5,y:149.1,startPosition:14},0).wait(1).to({x:675.25,y:145.65,startPosition:15},0).wait(1).to({x:693.05,y:142.2,startPosition:16},0).wait(1).to({x:710.8,y:138.75,startPosition:17},0).wait(1).to({x:728.6,y:135.3,startPosition:18},0).wait(1).to({x:746.4,y:131.85,startPosition:19},0).wait(1).to({x:764.15,y:128.4,startPosition:20},0).wait(1).to({x:781.95,y:124.95,startPosition:21},0).wait(1).to({x:799.75,y:121.5,startPosition:22},0).wait(1).to({x:817.5,y:118.05,startPosition:23},0).wait(1).to({x:835.3,y:114.6,startPosition:24},0).wait(1).to({x:853.05,y:111.2,startPosition:25},0).wait(1).to({x:870.85,y:107.75,startPosition:0},0).wait(1).to({x:888.65,y:104.3,startPosition:1},0).wait(1).to({x:906.4,y:100.85,startPosition:2},0).wait(1).to({x:924.2,y:97.4,startPosition:3},0).wait(1).to({x:942,y:93.95,startPosition:4},0).wait(1).to({x:959.75,y:90.5,startPosition:5},0).wait(1).to({x:977.55,y:87.05,startPosition:6},0).wait(1).to({x:995.35,y:83.6,startPosition:7},0).wait(1).to({x:1013.1,y:80.15,startPosition:8},0).wait(1).to({x:1030.9,y:76.7,startPosition:9},0).wait(1).to({x:1048.65,y:73.25,startPosition:10},0).wait(1).to({x:1066.45,y:69.8,startPosition:11},0).wait(1).to({x:1084.25,y:66.4,startPosition:12},0).wait(1).to({x:1102,y:62.95,startPosition:13},0).wait(1).to({x:1119.8,y:59.5,startPosition:14},0).wait(1).to({x:1137.6,y:56.05,startPosition:15},0).wait(1).to({x:1155.35,y:52.6,startPosition:16},0).wait(1).to({x:1173.15,y:49.15,startPosition:17},0).wait(1).to({x:1190.9,y:45.7,startPosition:18},0).wait(1).to({x:1208.7,y:42.25,startPosition:19},0).wait(1).to({x:1226.5,y:38.8,startPosition:20},0).wait(1).to({x:1244.25,y:35.35,startPosition:21},0).wait(1).to({x:1262.05,y:31.9,startPosition:22},0).wait(1).to({x:1279.85,y:28.45,startPosition:23},0).wait(1).to({x:1297.6,y:25,startPosition:24},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.RECOVER_YarinElkayam1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,4,5,439,499,505];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.start = this.action.start;
		var self = this; 
		self.stop(); 
		
		self.start.addEventListener("click", startPlaying);
		
		function startPlaying()
		{
			self.gotoAndPlay(1);
		}
	}
	this.frame_4 = function() {
		playSound("start");
	}
	this.frame_5 = function() {
		this.start = undefined;
	}
	this.frame_439 = function() {
		playSound("end");
	}
	this.frame_499 = function() {
		this.replay = this.action.replay;
		var self = this;
		self.stop();
		
		
		self.replay.addEventListener("click", playAgain);
		
		function playAgain()
		{	
			self.gotoAndPlay(5); 
		}
	}
	this.frame_505 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1).call(this.frame_5).wait(434).call(this.frame_439).wait(60).call(this.frame_499).wait(6).call(this.frame_505).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(83).to({scaleX:0.9932,scaleY:0.9932},0).wait(1).to({scaleX:0.9863,scaleY:0.9863},0).wait(1).to({scaleX:0.9795,scaleY:0.9795},0).wait(1).to({scaleX:0.9726,scaleY:0.9726},0).wait(1).to({scaleX:0.9658,scaleY:0.9658},0).wait(1).to({scaleX:0.959,scaleY:0.959},0).wait(1).to({scaleX:0.9521,scaleY:0.9521},0).wait(1).to({scaleX:0.9453,scaleY:0.9453},0).wait(1).to({scaleX:0.9385,scaleY:0.9385},0).wait(1).to({scaleX:0.9316,scaleY:0.9316},0).wait(1).to({scaleX:0.9248,scaleY:0.9248},0).wait(1).to({scaleX:0.9179,scaleY:0.9179},0).wait(1).to({scaleX:0.9111,scaleY:0.9111},0).wait(1).to({scaleX:0.9043,scaleY:0.9043},0).wait(1).to({scaleX:0.8974,scaleY:0.8974},0).wait(1).to({scaleX:0.8906,scaleY:0.8906},0).wait(1).to({scaleX:0.8837,scaleY:0.8837},0).wait(1).to({scaleX:0.8769,scaleY:0.8769},0).wait(1).to({scaleX:0.8701,scaleY:0.8701},0).wait(1).to({scaleX:0.8632,scaleY:0.8632},0).wait(1).to({scaleX:0.8564,scaleY:0.8564},0).wait(1).to({scaleX:0.8496,scaleY:0.8496},0).wait(1).to({scaleX:0.8427,scaleY:0.8427},0).wait(1).to({scaleX:0.8359,scaleY:0.8359},0).wait(1).to({scaleX:0.829,scaleY:0.829},0).wait(1).to({scaleX:0.8222,scaleY:0.8222},0).wait(1).to({scaleX:0.8187,scaleY:0.8187,x:638.0319,y:358.8194},0).wait(1).to({scaleX:0.8152,scaleY:0.8152,x:636.0639,y:357.6389},0).wait(1).to({scaleX:0.8117,scaleY:0.8117,x:634.0958,y:356.4583},0).wait(1).to({scaleX:0.8082,scaleY:0.8082,x:632.1278,y:355.2778},0).wait(1).to({scaleX:0.8047,scaleY:0.8047,x:630.1597,y:354.0972},0).wait(1).to({scaleX:0.8013,scaleY:0.8013,x:628.1917,y:352.9167},0).wait(1).to({scaleX:0.7978,scaleY:0.7978,x:626.2236,y:351.7361},0).wait(1).to({scaleX:0.7943,scaleY:0.7943,x:624.2556,y:350.5556},0).wait(1).to({scaleX:0.7908,scaleY:0.7908,x:622.2875,y:349.375},0).wait(1).to({scaleX:0.7873,scaleY:0.7873,x:620.3194,y:348.1944},0).wait(1).to({scaleX:0.7838,scaleY:0.7838,x:618.3514,y:347.0139},0).wait(1).to({scaleX:0.7803,scaleY:0.7803,x:616.3833,y:345.8333},0).wait(1).to({scaleX:0.7768,scaleY:0.7768,x:614.4153,y:344.6528},0).wait(1).to({scaleX:0.7733,scaleY:0.7733,x:612.4472,y:343.4722},0).wait(1).to({scaleX:0.7698,scaleY:0.7698,x:610.4792,y:342.2917},0).wait(1).to({scaleX:0.7663,scaleY:0.7663,x:608.5111,y:341.1111},0).wait(1).to({scaleX:0.7629,scaleY:0.7629,x:606.5431,y:339.9306},0).wait(1).to({scaleX:0.7594,scaleY:0.7594,x:604.575,y:338.75},0).wait(1).to({scaleX:0.7559,scaleY:0.7559,x:602.6069,y:337.5694},0).wait(1).to({scaleX:0.7524,scaleY:0.7524,x:600.6389,y:336.3889},0).wait(1).to({scaleX:0.7489,scaleY:0.7489,x:598.6708,y:335.2083},0).wait(1).to({scaleX:0.7454,scaleY:0.7454,x:596.7028,y:334.0278},0).wait(1).to({scaleX:0.7419,scaleY:0.7419,x:594.7347,y:332.8472},0).wait(1).to({scaleX:0.7384,scaleY:0.7384,x:592.7667,y:331.6667},0).wait(1).to({scaleX:0.7349,scaleY:0.7349,x:590.7986,y:330.4861},0).wait(1).to({scaleX:0.7314,scaleY:0.7314,x:588.8306,y:329.3056},0).wait(1).to({scaleX:0.7279,scaleY:0.7279,x:586.8625,y:328.125},0).wait(1).to({scaleX:0.7244,scaleY:0.7244,x:584.8944,y:326.9444},0).wait(1).to({scaleX:0.721,scaleY:0.721,x:582.9264,y:325.7639},0).wait(1).to({scaleX:0.7175,scaleY:0.7175,x:580.9583,y:324.5833},0).wait(1).to({scaleX:0.714,scaleY:0.714,x:578.9903,y:323.4028},0).wait(1).to({scaleX:0.7105,scaleY:0.7105,x:577.0222,y:322.2222},0).wait(1).to({scaleX:0.707,scaleY:0.707,x:575.0542,y:321.0417},0).wait(1).to({scaleX:0.7035,scaleY:0.7035,x:573.0861,y:319.8611},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:571.1181,y:318.6806},0).wait(1).to({scaleX:0.6965,scaleY:0.6965,x:569.15,y:317.5},0).wait(1).to({scaleX:0.6921,scaleY:0.6921,x:565.4519,y:313.7352},0).wait(1).to({scaleX:0.6878,scaleY:0.6878,x:561.7537,y:309.9704},0).wait(1).to({scaleX:0.6834,scaleY:0.6834,x:558.0556,y:306.2056},0).wait(1).to({scaleX:0.679,scaleY:0.679,x:554.3574,y:302.4407},0).wait(1).to({scaleX:0.6746,scaleY:0.6746,x:550.6593,y:298.6759},0).wait(1).to({scaleX:0.6703,scaleY:0.6703,x:546.9611,y:294.9111},0).wait(1).to({scaleX:0.6659,scaleY:0.6659,x:543.263,y:291.1463},0).wait(1).to({scaleX:0.6615,scaleY:0.6615,x:539.5648,y:287.3815},0).wait(1).to({scaleX:0.6572,scaleY:0.6572,x:535.8667,y:283.6167},0).wait(1).to({scaleX:0.6528,scaleY:0.6528,x:532.1685,y:279.8519},0).wait(1).to({scaleX:0.6484,scaleY:0.6484,x:528.4704,y:276.087},0).wait(1).to({scaleX:0.644,scaleY:0.644,x:524.7722,y:272.3222},0).wait(1).to({scaleX:0.6397,scaleY:0.6397,x:521.0741,y:268.5574},0).wait(1).to({scaleX:0.6353,scaleY:0.6353,x:517.3759,y:264.7926},0).wait(1).to({scaleX:0.6309,scaleY:0.6309,x:513.6778,y:261.0278},0).wait(1).to({scaleX:0.6265,scaleY:0.6265,x:509.9796,y:257.263},0).wait(1).to({scaleX:0.6222,scaleY:0.6222,x:506.2815,y:253.4982},0).wait(1).to({scaleX:0.6178,scaleY:0.6178,x:502.5833,y:249.7333},0).wait(1).to({scaleX:0.6134,scaleY:0.6134,x:498.8852,y:245.9685},0).wait(1).to({scaleX:0.609,scaleY:0.609,x:495.187,y:242.2037},0).wait(1).to({scaleX:0.6047,scaleY:0.6047,x:491.4889,y:238.4389},0).wait(1).to({scaleX:0.6003,scaleY:0.6003,x:487.7907,y:234.6741},0).wait(1).to({scaleX:0.5959,scaleY:0.5959,x:484.0926,y:230.9093},0).wait(1).to({scaleX:0.5915,scaleY:0.5915,x:480.3944,y:227.1444},0).wait(1).to({scaleX:0.5872,scaleY:0.5872,x:476.6963,y:223.3796},0).wait(1).to({scaleX:0.5828,scaleY:0.5828,x:472.9982,y:219.6148},0).wait(1).to({scaleX:0.5784,scaleY:0.5784,x:469.3,y:215.85},0).wait(1).to({scaleX:0.5677,scaleY:0.5677,x:463.5062,y:214.9348},0).wait(1).to({scaleX:0.557,scaleY:0.557,x:457.7125,y:214.0197},0).wait(1).to({scaleX:0.5463,scaleY:0.5463,x:451.9187,y:213.1045},0).wait(1).to({scaleX:0.5355,scaleY:0.5355,x:446.1249,y:212.1893},0).wait(1).to({scaleX:0.5248,scaleY:0.5248,x:440.3312,y:211.2741},0).wait(1).to({scaleX:0.5141,scaleY:0.5141,x:434.5374,y:210.3589},0).wait(1).to({scaleX:0.5034,scaleY:0.5034,x:428.7437,y:209.4438},0).wait(1).to({scaleX:0.4927,scaleY:0.4927,x:422.9499,y:208.5286},0).wait(1).to({scaleX:0.482,scaleY:0.482,x:417.1561,y:207.6134},0).wait(1).to({scaleX:0.4712,scaleY:0.4712,x:411.3624,y:206.6982},0).wait(1).to({scaleX:0.4605,scaleY:0.4605,x:405.5686,y:205.7831},0).wait(1).to({scaleX:0.4498,scaleY:0.4498,x:399.7748,y:204.8679},0).wait(1).to({scaleX:0.4391,scaleY:0.4391,x:393.9811,y:203.9527},0).wait(1).to({scaleX:0.4284,scaleY:0.4284,x:388.1873,y:203.0375},0).wait(1).to({scaleX:0.4177,scaleY:0.4177,x:382.3935,y:202.1224},0).wait(1).to({scaleX:0.4069,scaleY:0.4069,x:376.5998,y:201.2072},0).wait(1).to({scaleX:0.3962,scaleY:0.3962,x:370.806,y:200.292},0).wait(1).to({scaleX:0.3804,scaleY:0.3804,x:364.156,y:201.7753},0).wait(1).to({scaleX:0.3646,scaleY:0.3646,x:357.506,y:203.2587},0).wait(1).to({scaleX:0.3488,scaleY:0.3488,x:350.856,y:204.742},0).wait(1).to({scaleX:0.333,scaleY:0.333,x:344.206,y:206.2253},0).wait(1).to({scaleX:0.3171,scaleY:0.3171,x:337.556,y:207.7087},0).wait(1).to({scaleX:0.3013,scaleY:0.3013,x:330.906,y:209.192},0).wait(1).to({scaleX:0.2855,scaleY:0.2855,x:324.256,y:210.6753},0).wait(1).to({scaleX:0.2697,scaleY:0.2697,x:317.606,y:212.1587},0).wait(1).to({scaleX:0.2539,scaleY:0.2539,x:310.956,y:213.642},0).wait(1).to({scaleX:0.2381,scaleY:0.2381,x:304.306,y:215.1253},0).wait(1).to({scaleX:0.2223,scaleY:0.2223,x:297.656,y:216.6087},0).wait(1).to({scaleX:0.2064,scaleY:0.2064,x:291.006,y:218.092},0).wait(1).to({regX:1.2,regY:1.2,scaleX:0.2033,scaleY:0.2033,x:291.3,y:218.95,visible:true},0).wait(8).to({regX:0,regY:0,scaleX:0.1988,scaleY:0.1988,x:289.2812,y:219.0385},0).wait(1).to({scaleX:0.1944,scaleY:0.1944,x:287.5124,y:219.377},0).wait(1).to({scaleX:0.1899,scaleY:0.1899,x:285.7436,y:219.7155},0).wait(1).to({scaleX:0.1854,scaleY:0.1854,x:283.9748,y:220.0541},0).wait(1).to({scaleX:0.1809,scaleY:0.1809,x:282.206,y:220.3926},0).wait(1).to({scaleX:0.1765,scaleY:0.1765,x:280.4372,y:220.7311},0).wait(1).to({scaleX:0.172,scaleY:0.172,x:278.6684,y:221.0696},0).wait(1).to({scaleX:0.1675,scaleY:0.1675,x:276.8996,y:221.4082},0).wait(1).to({scaleX:0.163,scaleY:0.163,x:275.1308,y:221.7467},0).wait(1).to({scaleX:0.1586,scaleY:0.1586,x:273.362,y:222.0852},0).wait(1).to({scaleX:0.1541,scaleY:0.1541,x:271.5932,y:222.4237},0).wait(1).to({scaleX:0.1496,scaleY:0.1496,x:269.8244,y:222.7622},0).wait(1).to({scaleX:0.1451,scaleY:0.1451,x:268.0556,y:223.1008},0).wait(1).to({scaleX:0.1406,scaleY:0.1406,x:266.2868,y:223.4393},0).wait(1).to({scaleX:0.1362,scaleY:0.1362,x:264.518,y:223.7778},0).wait(1).to({scaleX:0.1317,scaleY:0.1317,x:262.7493,y:224.1163},0).wait(1).to({scaleX:0.1272,scaleY:0.1272,x:260.9805,y:224.4548},0).wait(1).to({scaleX:0.1227,scaleY:0.1227,x:259.2117,y:224.7934},0).wait(1).to({scaleX:0.1183,scaleY:0.1183,x:257.4429,y:225.1319},0).wait(1).to({scaleX:0.1138,scaleY:0.1138,x:255.6741,y:225.4704},0).wait(1).to({scaleX:0.1093,scaleY:0.1093,x:253.9053,y:225.8089},0).wait(1).to({scaleX:0.1048,scaleY:0.1048,x:252.1365,y:226.1475},0).wait(1).to({scaleX:0.1004,scaleY:0.1004,x:250.3677,y:226.486},0).wait(1).to({scaleX:0.0959,scaleY:0.0959,x:248.5989,y:226.8245},0).wait(1).to({scaleX:0.0914,scaleY:0.0914,x:246.8301,y:227.163},0).wait(1).to({scaleX:0.0869,scaleY:0.0869,x:245.0613,y:227.5015},0).wait(1).to({scaleX:0.0825,scaleY:0.0825,x:243.2925,y:227.8401},0).wait(1).to({scaleX:0.078,scaleY:0.078,x:241.5237,y:228.1786},0).wait(1).to({scaleX:0.0735,scaleY:0.0735,x:239.7549,y:228.5171},0).wait(1).to({scaleX:0.069,scaleY:0.069,x:237.9861,y:228.8556},0).wait(1).to({scaleX:0.0646,scaleY:0.0646,x:236.2173,y:229.1941},0).wait(1).to({scaleX:0.0601,scaleY:0.0601,x:234.4485,y:229.5327},0).wait(1).to({scaleX:0.0556,scaleY:0.0556,x:232.6797,y:229.8712},0).wait(1).to({scaleX:0.0511,scaleY:0.0511,x:230.9109,y:230.2097},0).wait(1).to({scaleX:0.0467,scaleY:0.0467,x:229.1421,y:230.5482},0).wait(1).to({scaleX:0.0422,scaleY:0.0422,x:227.3733,y:230.8868},0).wait(1).to({scaleX:0.0377,scaleY:0.0377,x:225.6045,y:231.2253},0).wait(1).to({scaleX:0.0332,scaleY:0.0332,x:223.8357,y:231.5638},0).wait(1).to({scaleX:0.0288,scaleY:0.0288,x:222.067,y:231.9023},0).wait(1).to({scaleX:0.0243,scaleY:0.0243,x:220.2982,y:232.2408},0).wait(1).to({scaleX:0.0198,scaleY:0.0198,x:218.5294,y:232.5794},0).wait(1).to({regX:0.8,regY:1,scaleX:0.3035,scaleY:0.3035,x:243,y:634.85},0).wait(1).to({regX:0,regY:0,scaleX:0.3042,scaleY:0.3042,x:247.8568,y:634.6197},0).wait(1).to({scaleX:0.3049,scaleY:0.3049,x:252.9637,y:634.6893},0).wait(1).to({scaleX:0.3056,scaleY:0.3056,x:258.0705,y:634.759},0).wait(1).to({scaleX:0.3063,scaleY:0.3063,x:263.1774,y:634.8287},0).wait(1).to({scaleX:0.307,scaleY:0.307,x:268.2842,y:634.8983},0).wait(1).to({scaleX:0.3077,scaleY:0.3077,x:273.3911,y:634.968},0).wait(1).to({scaleX:0.3084,scaleY:0.3084,x:278.4979,y:635.0377},0).wait(1).to({scaleX:0.3091,scaleY:0.3091,x:283.6048,y:635.1074},0).wait(1).to({scaleX:0.3098,scaleY:0.3098,x:288.7116,y:635.177},0).wait(1).to({scaleX:0.3105,scaleY:0.3105,x:293.8185,y:635.2467},0).wait(1).to({scaleX:0.3112,scaleY:0.3112,x:298.9253,y:635.3164},0).wait(1).to({scaleX:0.3119,scaleY:0.3119,x:304.0322,y:635.386},0).wait(1).to({scaleX:0.3126,scaleY:0.3126,x:309.139,y:635.4557},0).wait(1).to({scaleX:0.3133,scaleY:0.3133,x:314.2459,y:635.5254},0).wait(1).to({scaleX:0.314,scaleY:0.314,x:319.3527,y:635.595},0).wait(1).to({scaleX:0.3147,scaleY:0.3147,x:324.4595,y:635.6647},0).wait(1).to({scaleX:0.3154,scaleY:0.3154,x:329.5664,y:635.7344},0).wait(1).to({scaleX:0.3161,scaleY:0.3161,x:334.6732,y:635.8041},0).wait(1).to({scaleX:0.3168,scaleY:0.3168,x:339.7801,y:635.8737},0).wait(1).to({scaleX:0.3175,scaleY:0.3175,x:344.8869,y:635.9434},0).wait(1).to({scaleX:0.3182,scaleY:0.3182,x:349.9938,y:636.0131},0).wait(1).to({scaleX:0.3189,scaleY:0.3189,x:355.1006,y:636.0827},0).wait(1).to({scaleX:0.3196,scaleY:0.3196,x:360.2075,y:636.1524},0).wait(1).to({scaleX:0.3203,scaleY:0.3203,x:365.3143,y:636.2221},0).wait(1).to({scaleX:0.321,scaleY:0.321,x:370.4212,y:636.2917},0).wait(1).to({scaleX:0.3217,scaleY:0.3217,x:375.528,y:636.3614},0).wait(1).to({scaleX:0.3224,scaleY:0.3224,x:380.6349,y:636.4311},0).wait(1).to({regX:0.6,regY:0.8,scaleX:0.332,scaleY:0.332,x:373.8,y:635.65},0).wait(24).to({regX:0.5,regY:0.5,scaleX:0.3107,scaleY:0.3107,x:374.65,y:608.75},0).wait(1).to({regX:0,regY:0,x:374.1548,y:594.0571},0).wait(1).to({x:373.8095,y:579.5143},0).wait(1).to({x:373.4643,y:564.9714},0).wait(1).to({x:373.119,y:550.4286},0).wait(1).to({x:372.7738,y:535.8857},0).wait(1).to({x:372.4286,y:521.3429},0).wait(1).to({x:372.0833,y:506.8},0).wait(1).to({x:371.7381,y:492.2571},0).wait(1).to({x:371.3929,y:477.7143},0).wait(1).to({x:371.0476,y:463.1714},0).wait(1).to({x:370.7024,y:448.6286},0).wait(1).to({x:370.3571,y:434.0857},0).wait(1).to({x:370.0119,y:419.5429},0).wait(1).to({x:369.6667,y:405},0).wait(1).to({x:369.3214,y:390.4571},0).wait(1).to({x:368.9762,y:375.9143},0).wait(1).to({x:368.631,y:361.3714},0).wait(1).to({x:368.2857,y:346.8286},0).wait(1).to({x:367.9405,y:332.2857},0).wait(1).to({x:367.5952,y:317.7429},0).wait(1).to({x:367.25,y:303.2},0).wait(1).to({regX:0.4,regY:0.1,scaleX:0.3025,scaleY:0.3025,x:370.45,y:298.75},0).wait(1).to({regX:0,regY:0,scaleX:0.2941,scaleY:0.2941,x:369.8436,y:299.9356},0).wait(1).to({scaleX:0.2856,scaleY:0.2856,x:369.3372,y:301.1713},0).wait(1).to({scaleX:0.2772,scaleY:0.2772,x:368.8307,y:302.4069},0).wait(1).to({scaleX:0.2688,scaleY:0.2688,x:368.3243,y:303.6426},0).wait(1).to({scaleX:0.2603,scaleY:0.2603,x:367.8179,y:304.8782},0).wait(1).to({scaleX:0.2519,scaleY:0.2519,x:367.3115,y:306.1138},0).wait(1).to({scaleX:0.2435,scaleY:0.2435,x:366.805,y:307.3495},0).wait(1).to({scaleX:0.235,scaleY:0.235,x:366.2986,y:308.5851},0).wait(1).to({scaleX:0.2266,scaleY:0.2266,x:365.7922,y:309.8208},0).wait(1).to({scaleX:0.2182,scaleY:0.2182,x:365.2858,y:311.0564},0).wait(1).to({scaleX:0.2097,scaleY:0.2097,x:364.7793,y:312.292},0).wait(1).to({scaleX:0.2013,scaleY:0.2013,x:364.2729,y:313.5277},0).wait(1).to({scaleX:0.1929,scaleY:0.1929,x:363.7665,y:314.7633},0).wait(1).to({scaleX:0.1845,scaleY:0.1845,x:363.2601,y:315.999},0).wait(1).to({scaleX:0.176,scaleY:0.176,x:362.7536,y:317.2346},0).wait(1).to({scaleX:0.1676,scaleY:0.1676,x:362.2472,y:318.4702},0).wait(1).to({scaleX:0.1592,scaleY:0.1592,x:361.7408,y:319.7059},0).wait(1).to({scaleX:0.1507,scaleY:0.1507,x:361.2344,y:320.9415},0).wait(1).to({scaleX:0.1423,scaleY:0.1423,x:360.728,y:322.1772},0).wait(1).to({scaleX:0.1339,scaleY:0.1339,x:360.2215,y:323.4128},0).wait(1).to({scaleX:0.1254,scaleY:0.1254,x:359.7151,y:324.6484},0).wait(1).to({scaleX:0.117,scaleY:0.117,x:359.2087,y:325.8841},0).wait(1).to({scaleX:0.1086,scaleY:0.1086,x:358.7023,y:327.1197},0).wait(1).to({scaleX:0.1001,scaleY:0.1001,x:358.1958,y:328.3554},0).wait(1).to({scaleX:0.0917,scaleY:0.0917,x:357.6894,y:329.591},0).wait(1).to({scaleX:0.0833,scaleY:0.0833,x:357.183,y:330.8266},0).wait(1).to({scaleX:0.0748,scaleY:0.0748,x:356.6766,y:332.0623},0).wait(1).to({scaleX:0.0664,scaleY:0.0664,x:356.1701,y:333.2979},0).wait(1).to({scaleX:0.058,scaleY:0.058,x:355.6637,y:334.5336},0).wait(1).to({scaleX:0.0495,scaleY:0.0495,x:355.1573,y:335.7692},0).wait(1).to({scaleX:0.0411,scaleY:0.0411,x:354.6509,y:337.0048},0).wait(1).to({scaleX:0.0327,scaleY:0.0327,x:354.1444,y:338.2405},0).wait(1).to({regX:0.4,regY:0.4,scaleX:0.3836,scaleY:0.3836,x:337.05,y:240.3},0).wait(12).to({regX:0,regY:0,scaleX:0.3776,scaleY:0.3776,x:335.4506,y:239.5506},0).wait(1).to({scaleX:0.3717,scaleY:0.3717,x:334.0012,y:238.9512},0).wait(1).to({scaleX:0.3657,scaleY:0.3657,x:332.5518,y:238.3518},0).wait(1).to({scaleX:0.3597,scaleY:0.3597,x:331.1024,y:237.7524},0).wait(1).to({scaleX:0.3537,scaleY:0.3537,x:329.653,y:237.153},0).wait(1).to({scaleX:0.3478,scaleY:0.3478,x:328.2036,y:236.5536},0).wait(1).to({scaleX:0.3418,scaleY:0.3418,x:326.7542,y:235.9542},0).wait(1).to({scaleX:0.3358,scaleY:0.3358,x:325.3048,y:235.3548},0).wait(1).to({scaleX:0.3298,scaleY:0.3298,x:323.8554,y:234.7554},0).wait(1).to({scaleX:0.3239,scaleY:0.3239,x:322.406,y:234.156},0).wait(1).to({scaleX:0.3179,scaleY:0.3179,x:320.9566,y:233.5566},0).wait(1).to({scaleX:0.3119,scaleY:0.3119,x:319.5073,y:232.9573},0).wait(1).to({scaleX:0.3059,scaleY:0.3059,x:318.0579,y:232.3579},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:316.6085,y:231.7585},0).wait(1).to({scaleX:0.294,scaleY:0.294,x:315.1591,y:231.1591},0).wait(1).to({scaleX:0.288,scaleY:0.288,x:313.7097,y:230.5597},0).wait(1).to({scaleX:0.282,scaleY:0.282,x:312.2603,y:229.9603},0).wait(1).to({scaleX:0.2761,scaleY:0.2761,x:310.8109,y:229.3609},0).wait(1).to({scaleX:0.2701,scaleY:0.2701,x:309.3615,y:228.7615},0).wait(1).to({scaleX:0.2641,scaleY:0.2641,x:307.9121,y:228.1621},0).wait(1).to({scaleX:0.2581,scaleY:0.2581,x:306.4627,y:227.5627},0).wait(1).to({scaleX:0.2522,scaleY:0.2522,x:305.0133,y:226.9633},0).wait(1).to({scaleX:0.2462,scaleY:0.2462,x:303.5639,y:226.3639},0).wait(1).to({scaleX:0.2402,scaleY:0.2402,x:302.1145,y:225.7645},0).wait(1).to({scaleX:0.2342,scaleY:0.2342,x:300.6651,y:225.1651},0).wait(1).to({scaleX:0.2283,scaleY:0.2283,x:299.2157,y:224.5657},0).wait(1).to({scaleX:0.2223,scaleY:0.2223,x:297.7663,y:223.9663},0).wait(1).to({scaleX:0.2163,scaleY:0.2163,x:296.3169,y:223.3669},0).wait(1).to({regX:0.9,regY:0.9,scaleX:0.219,scaleY:0.219,x:298.75,y:220.8},0).wait(26).to({regY:0.7},0).wait(1).to({regX:0,regY:0,scaleX:0.2166,scaleY:0.2166,x:300.2427,y:220.347},0).wait(1).to({scaleX:0.2141,scaleY:0.2141,x:301.9354,y:220.0439},0).wait(1).to({scaleX:0.2116,scaleY:0.2116,x:303.6281,y:219.7409},0).wait(1).to({scaleX:0.2092,scaleY:0.2092,x:305.3208,y:219.4378},0).wait(1).to({scaleX:0.2067,scaleY:0.2067,x:307.0134,y:219.1348},0).wait(1).to({scaleX:0.2043,scaleY:0.2043,x:308.7061,y:218.8318},0).wait(1).to({scaleX:0.2018,scaleY:0.2018,x:310.3988,y:218.5287},0).wait(1).to({scaleX:0.1993,scaleY:0.1993,x:312.0915,y:218.2257},0).wait(1).to({scaleX:0.1969,scaleY:0.1969,x:313.7842,y:217.9226},0).wait(1).to({scaleX:0.1944,scaleY:0.1944,x:315.4769,y:217.6196},0).wait(1).to({scaleX:0.192,scaleY:0.192,x:317.1696,y:217.3166},0).wait(1).to({scaleX:0.1895,scaleY:0.1895,x:318.8623,y:217.0135},0).wait(1).to({scaleX:0.187,scaleY:0.187,x:320.555,y:216.7105},0).wait(1).to({scaleX:0.1846,scaleY:0.1846,x:322.2476,y:216.4074},0).wait(1).to({scaleX:0.1821,scaleY:0.1821,x:323.9403,y:216.1044},0).wait(1).to({scaleX:0.1797,scaleY:0.1797,x:325.633,y:215.8013},0).wait(1).to({scaleX:0.1772,scaleY:0.1772,x:327.3257,y:215.4983},0).wait(1).to({scaleX:0.1748,scaleY:0.1748,x:329.0184,y:215.1953},0).wait(1).to({scaleX:0.1723,scaleY:0.1723,x:330.7111,y:214.8922},0).wait(1).to({scaleX:0.1698,scaleY:0.1698,x:332.4038,y:214.5892},0).wait(1).to({scaleX:0.1674,scaleY:0.1674,x:334.0965,y:214.2861},0).wait(1).to({regX:1.9,regY:2.6,scaleX:0.1541,scaleY:0.1541,x:336.75,y:213.85},0).wait(1).to({regX:0,regY:0,scaleX:0.1596,scaleY:0.1596,x:353.1439,y:208.8329},0).wait(1).to({scaleX:0.1651,scaleY:0.1651,x:369.8378,y:204.2159},0).wait(1).to({scaleX:0.1706,scaleY:0.1706,x:386.5317,y:199.5988},0).wait(1).to({scaleX:0.1761,scaleY:0.1761,x:403.2257,y:194.9818},0).wait(1).to({scaleX:0.1816,scaleY:0.1816,x:419.9196,y:190.3647},0).wait(1).to({scaleX:0.1871,scaleY:0.1871,x:436.6135,y:185.7476},0).wait(1).to({scaleX:0.1926,scaleY:0.1926,x:453.3074,y:181.1306},0).wait(1).to({scaleX:0.1981,scaleY:0.1981,x:470.0013,y:176.5135},0).wait(1).to({scaleX:0.2036,scaleY:0.2036,x:486.6952,y:171.8964},0).wait(1).to({scaleX:0.2091,scaleY:0.2091,x:503.3892,y:167.2794},0).wait(1).to({scaleX:0.2146,scaleY:0.2146,x:520.0831,y:162.6623},0).wait(1).to({scaleX:0.2201,scaleY:0.2201,x:536.777,y:158.0453},0).wait(1).to({scaleX:0.2256,scaleY:0.2256,x:553.4709,y:153.4282},0).wait(1).to({scaleX:0.231,scaleY:0.231,x:570.1648,y:148.8111},0).wait(1).to({scaleX:0.2365,scaleY:0.2365,x:586.8587,y:144.1941},0).wait(1).to({scaleX:0.242,scaleY:0.242,x:603.5527,y:139.577},0).wait(1).to({scaleX:0.2475,scaleY:0.2475,x:620.2466,y:134.9599},0).wait(1).to({scaleX:0.253,scaleY:0.253,x:636.9405,y:130.3429},0).wait(1).to({scaleX:0.2585,scaleY:0.2585,x:653.6344,y:125.7258},0).wait(1).to({scaleX:0.264,scaleY:0.264,x:670.3283,y:121.1088},0).wait(1).to({scaleX:0.2695,scaleY:0.2695,x:687.0222,y:116.4917},0).wait(1).to({scaleX:0.275,scaleY:0.275,x:703.7162,y:111.8746},0).wait(1).to({scaleX:0.2805,scaleY:0.2805,x:720.4101,y:107.2576},0).wait(1).to({scaleX:0.286,scaleY:0.286,x:737.104,y:102.6405},0).wait(1).to({scaleX:0.2915,scaleY:0.2915,x:753.7979,y:98.0234},0).wait(1).to({scaleX:0.297,scaleY:0.297,x:770.4918,y:93.4064},0).wait(1).to({scaleX:0.3025,scaleY:0.3025,x:787.1857,y:88.7893},0).wait(1).to({scaleX:0.308,scaleY:0.308,x:791.7241,y:90.6426},0).wait(1).to({scaleX:0.3135,scaleY:0.3135,x:796.2625,y:92.4959},0).wait(1).to({scaleX:0.3189,scaleY:0.3189,x:800.8008,y:94.3492},0).wait(1).to({scaleX:0.3244,scaleY:0.3244,x:805.3392,y:96.2026},0).wait(1).to({scaleX:0.3299,scaleY:0.3299,x:809.8775,y:98.0559},0).wait(1).to({scaleX:0.3354,scaleY:0.3354,x:814.4159,y:99.9092},0).wait(1).to({scaleX:0.3409,scaleY:0.3409,x:818.9543,y:101.7625},0).wait(1).to({scaleX:0.3464,scaleY:0.3464,x:823.4926,y:103.6158},0).wait(1).to({scaleX:0.3519,scaleY:0.3519,x:828.031,y:105.4691},0).wait(1).to({scaleX:0.3574,scaleY:0.3574,x:832.5693,y:107.3224},0).wait(1).to({scaleX:0.3629,scaleY:0.3629,x:837.1077,y:109.1757},0).wait(1).to({scaleX:0.3684,scaleY:0.3684,x:841.6461,y:111.029},0).wait(1).to({scaleX:0.3739,scaleY:0.3739,x:846.1844,y:112.8823},0).wait(1).to({scaleX:0.3794,scaleY:0.3794,x:850.7228,y:114.7356},0).wait(1).to({scaleX:0.3849,scaleY:0.3849,x:855.2612,y:116.5889},0).wait(1).to({scaleX:0.3904,scaleY:0.3904,x:859.7995,y:118.4423},0).wait(1).to({scaleX:0.3959,scaleY:0.3959,x:864.3379,y:120.2956},0).wait(1).to({scaleX:0.4014,scaleY:0.4014,x:868.8762,y:122.1489},0).wait(1).to({scaleX:0.4069,scaleY:0.4069,x:873.4146,y:124.0022},0).wait(1).to({scaleX:0.4123,scaleY:0.4123,x:877.953,y:125.8555},0).wait(1).to({scaleX:0.4178,scaleY:0.4178,x:882.4913,y:127.7088},0).wait(1).to({scaleX:0.4233,scaleY:0.4233,x:887.0297,y:129.5621},0).wait(1).to({scaleX:0.4288,scaleY:0.4288,x:891.568,y:131.4154},0).wait(1).to({scaleX:0.4343,scaleY:0.4343,x:896.1064,y:133.2687},0).wait(1).to({scaleX:0.4398,scaleY:0.4398,x:900.6448,y:135.122},0).wait(1).to({scaleX:0.4453,scaleY:0.4453,x:905.1831,y:136.9753},0).wait(1).to({scaleX:0.4508,scaleY:0.4508,x:909.7215,y:138.8286},0).to({_off:true},1).wait(6));

	// action_obj_
	this.action = new lib.Scene_1_action();
	this.action.name = "action";
	this.action.setTransform(632.4,185,1,1,0,0,0,632.4,185);
	this.action.depth = 0;
	this.action.isAttachedToCamera = 0
	this.action.isAttachedToMask = 0
	this.action.layerDepth = 0
	this.action.layerIndex = 0
	this.action.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.action).wait(499).to({regX:906.2,regY:60,scaleX:2.2183,scaleY:2.2183,x:632.35,y:185.1},0).to({_off:true},1).wait(6));

	// end_obj_
	this.end = new lib.Scene_1_end();
	this.end.name = "end";
	this.end.depth = 0;
	this.end.isAttachedToCamera = 0
	this.end.isAttachedToMask = 0
	this.end.layerDepth = 0
	this.end.layerIndex = 1
	this.end.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.end).wait(479).to({regX:600.7,regY:-20.9,scaleX:2.9334,scaleY:2.9334,y:0.15},0).to({_off:true},20).wait(7));

	// alien_woman_obj_
	this.alien_woman = new lib.Scene_1_alien_woman();
	this.alien_woman.name = "alien_woman";
	this.alien_woman.depth = 0;
	this.alien_woman.isAttachedToCamera = 0
	this.alien_woman.isAttachedToMask = 0
	this.alien_woman.layerDepth = 0
	this.alien_woman.layerIndex = 2
	this.alien_woman.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.alien_woman).wait(357).to({regX:91.4,regY:102,scaleX:2.6068,scaleY:2.6068,x:0.15,y:-0.1},0).wait(12).to({regX:817.3,regY:145.1,scaleX:1,scaleY:1,x:726,y:43.1},0).wait(28).to({regX:158.3,regY:141.8,scaleX:4.5663,scaleY:4.5663,x:-0.2,y:0.25},0).wait(26).to({y:0},0).wait(22).to({regX:237.8,regY:158,scaleX:6.4887,scaleY:6.4887,x:0,y:0.35},0).wait(1).to({regX:817.3,regY:145.1,scaleX:1,scaleY:1,x:579.55,y:-12.8},0).wait(53).to({_off:true},1).wait(6));

	// ALIEN_s_obj_
	this.ALIEN_s = new lib.Scene_1_ALIEN_s();
	this.ALIEN_s.name = "ALIEN_s";
	this.ALIEN_s.depth = 0;
	this.ALIEN_s.isAttachedToCamera = 0
	this.ALIEN_s.isAttachedToMask = 0
	this.ALIEN_s.layerDepth = 0
	this.ALIEN_s.layerIndex = 3
	this.ALIEN_s.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ALIEN_s).wait(145).to({regX:122.5,regY:64.6,scaleX:1.4448,scaleY:1.4448,x:-0.05,y:0.05},0).wait(3).to({regX:119.9,regY:58,scaleX:1.4727,scaleY:1.4727,x:0.1,y:-0.05},0).wait(2).to({regX:118,regY:53.7,scaleX:1.4919,scaleY:1.4919,x:-0.05,y:0},0).wait(2).to({regX:116.2,regY:49.3,scaleX:1.5117,scaleY:1.5117},0).wait(2).to({regX:114.5,regY:45,scaleX:1.5319,scaleY:1.5319,x:0.1,y:0.1},0).wait(3).to({regX:111.8,regY:38.4,scaleX:1.5634,scaleY:1.5634},0).wait(3).to({regX:109,regY:31.8,scaleX:1.5961,scaleY:1.5961,x:-0.1,y:0},0).wait(3).to({regX:106.4,regY:25.2,scaleX:1.6302,scaleY:1.6302,x:0.1,y:0.05},0).wait(3).to({regX:103.7,regY:18.6,scaleX:1.6659,scaleY:1.6659},0).wait(3).to({regX:101,regY:12.1,scaleX:1.7031,scaleY:1.7031,y:0.1},0).wait(3).to({regX:100.2,regY:10.6,scaleX:1.7615,scaleY:1.7615,x:-0.05,y:0},0).wait(5).to({regX:105.5,regY:25.4,scaleX:1.9451,scaleY:1.9451,x:-0.1,y:0.1},0).wait(2).to({regX:107.7,regY:31.2,scaleX:2.0297,scaleY:2.0297,x:0.1,y:0.05},0).wait(2).to({regX:109.9,regY:37.1,scaleX:2.1221,scaleY:2.1221},0).wait(2).to({regX:112,regY:43,scaleX:2.2232,scaleY:2.2232,x:0.15},0).wait(2).to({regX:114,regY:48.9,scaleX:2.3344,scaleY:2.3344,x:-0.1,y:0.15},0).wait(2).to({regX:116.2,regY:54.8,scaleX:2.4574,scaleY:2.4574,x:0.05,y:0},0).wait(2).to({regX:120.8,regY:64.9,scaleX:2.6288,scaleY:2.6288,x:0.15},0).wait(2).to({regX:127.7,regY:79.2,scaleX:2.8672,scaleY:2.8672,x:0.05,y:0.05},0).wait(2).to({regX:134.7,regY:93.6,scaleX:3.1532,scaleY:3.1532,x:0.2},0).wait(2).to({regX:141.6,regY:108,scaleX:3.5025,scaleY:3.5025,x:0,y:0.2},0).wait(5).to({regX:159,regY:143.8,scaleX:4.8445,scaleY:4.8445,x:0.25,y:0.05},0).wait(1).to({regX:416.6,regY:202.1,scaleX:1,scaleY:1,x:257.7,y:58.35},0).wait(10).to({regX:164.2,regY:151.3,scaleX:5.2669,scaleY:5.2669,x:0,y:0.05},0).wait(40).to({regX:53.1,regY:525.1,scaleX:3.288,scaleY:3.288,x:-0.15,y:0},0).wait(63).to({regX:171.5,regY:322.2,scaleX:3.2185,scaleY:3.2185,x:0.05,y:0.15},0).to({_off:true},43).wait(149));

	// light_obj_
	this.light = new lib.Scene_1_light();
	this.light.name = "light";
	this.light.depth = 0;
	this.light.isAttachedToCamera = 0
	this.light.isAttachedToMask = 0
	this.light.layerDepth = 0
	this.light.layerIndex = 4
	this.light.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.light).wait(251).to({regX:53.1,regY:525.1,scaleX:3.288,scaleY:3.288,x:-0.15},0).wait(2).to({regX:62.5,regY:524.8,scaleX:3.2729,scaleY:3.2729,x:0.2,y:0.2},0).wait(2).to({regX:71.8,regY:524.4,scaleX:3.2579,scaleY:3.2579,x:0},0).wait(2).to({regX:81.1,regY:524,scaleX:3.2431,scaleY:3.2431,y:0},0).wait(2).to({regX:90.5,regY:523.6,scaleX:3.2284,scaleY:3.2284,x:0.15,y:-0.15},0).wait(2).to({regX:99.7,regY:523.2,scaleX:3.2138,scaleY:3.2138,x:0},0).wait(2).to({regX:109,regY:522.9,scaleX:3.1994,scaleY:3.1994,x:-0.1,y:0},0).wait(2).to({regX:118.4,regY:522.5,scaleX:3.1852,scaleY:3.1852,x:0.2,y:-0.15},0).wait(2).to({regX:127.7,regY:522.1,scaleX:3.171,scaleY:3.171,x:0.05,y:0},0).wait(2).to({regX:137,regY:521.8,scaleX:3.157,scaleY:3.157,x:0.15},0).wait(2).to({regX:146.3,regY:521.5,scaleX:3.1431,scaleY:3.1431,x:-0.1,y:0.15},0).wait(2).to({regX:155.6,regY:521,scaleX:3.1292,scaleY:3.1292,x:0,y:-0.1},0).wait(2).to({regX:164.9,regY:520.8,scaleX:3.1156,scaleY:3.1156,y:0.2},0).wait(2).to({regX:174.2,regY:520.4,scaleX:3.102,scaleY:3.102,x:-0.15},0).wait(2).to({regX:161.1,regY:515.9,scaleX:3.012,scaleY:3.012,x:0.05,y:0.15},0).wait(8).to({_off:true},70).wait(149));

	// woman_obj_
	this.woman = new lib.Scene_1_woman();
	this.woman.name = "woman";
	this.woman.depth = 0;
	this.woman.isAttachedToCamera = 0
	this.woman.isAttachedToMask = 0
	this.woman.layerDepth = 0
	this.woman.layerIndex = 5
	this.woman.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.woman).wait(250).to({regX:48.5,regY:525.3,scaleX:3.2952,scaleY:3.2952,y:0.05},0).wait(1).to({regX:317.8,regY:520,scaleX:1,scaleY:1,x:269.35,y:-5.25},0).wait(37).to({regX:161.1,regY:515.9,scaleX:3.012,scaleY:3.012,x:0.05,y:0.15},0).wait(10).to({regX:317.8,regY:520,scaleX:1,scaleY:1,x:156.75,y:4.2},0).wait(30).to({regX:196.3,regY:206.8,scaleX:3.7209,scaleY:3.7209,x:-0.15,y:-0.15},0).to({_off:true},29).wait(149));

	// ribua_obj_
	this.ribua = new lib.Scene_1_ribua();
	this.ribua.name = "ribua";
	this.ribua.setTransform(218.3,231.2,1,1,0,0,0,218.3,231.2);
	this.ribua.depth = 0;
	this.ribua.isAttachedToCamera = 0
	this.ribua.isAttachedToMask = 0
	this.ribua.layerDepth = 0
	this.ribua.layerIndex = 6
	this.ribua.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ribua).to({_off:true},180).wait(326));

	// man_obj_
	this.man = new lib.Scene_1_man();
	this.man.name = "man";
	this.man.depth = 0;
	this.man.isAttachedToCamera = 0
	this.man.isAttachedToMask = 0
	this.man.layerDepth = 0
	this.man.layerIndex = 7
	this.man.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.man).wait(180).to({regX:108.8,regY:34.1,scaleX:2.0749,scaleY:2.0749,y:-0.1},0).to({_off:true},320).wait(6));

	// spaceship_obj_
	this.spaceship = new lib.Scene_1_spaceship();
	this.spaceship.name = "spaceship";
	this.spaceship.depth = 0;
	this.spaceship.isAttachedToCamera = 0
	this.spaceship.isAttachedToMask = 0
	this.spaceship.layerDepth = 0
	this.spaceship.layerIndex = 8
	this.spaceship.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.spaceship).wait(64).to({regX:903.3,regY:132.5,x:903.3,y:132.5},0).wait(80).to({_off:true},1).wait(361));

	// play_idn_obj_
	this.play_idn = new lib.Scene_1_play_idn();
	this.play_idn.name = "play_idn";
	this.play_idn.setTransform(554.6,97.9,1,1,0,0,0,554.6,97.9);
	this.play_idn.depth = 0;
	this.play_idn.isAttachedToCamera = 0
	this.play_idn.isAttachedToMask = 0
	this.play_idn.layerDepth = 0
	this.play_idn.layerIndex = 9
	this.play_idn.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.play_idn).to({_off:true},500).wait(6));

	// back_obj_
	this.back = new lib.Scene_1_back();
	this.back.name = "back";
	this.back.setTransform(734.1,376.3,1,1,0,0,0,734.1,376.3);
	this.back.depth = 0;
	this.back.isAttachedToCamera = 0
	this.back.isAttachedToMask = 0
	this.back.layerDepth = 0
	this.back.layerIndex = 10
	this.back.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.back).wait(506));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(552.3,326,1003.8,460.70000000000005);
// library properties:
lib.properties = {
	id: '1459B46117BC42089D52C6DB2A042A4E',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/end.mp3?1629050180945", id:"end"},
		{src:"sounds/start.mp3?1629050180945", id:"start"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1459B46117BC42089D52C6DB2A042A4E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;