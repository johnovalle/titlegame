requirejs.config({
	baseUrl: 'js',
	paths: {
		//Libraries
		"Jquery": 'libs/jquery',
		"Class": 'libs/class',
		"Launcher": 'app/classes/Launcher'
	}
});

require(['app/main']);