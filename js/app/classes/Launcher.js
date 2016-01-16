define(['Class'], function(Class){
	var Launcher = Class.extend({
		init:function(_title){
			document.title = _title;
		}
	});
	//var Launcher = function(){};
	return Launcher;

});