$js.config({
	alias:{
		'jstack':'vendor/bower-asset/jstack/jstack',
		'jquery':'vendor/bower-asset/jquery/dist/jquery',
		'jquery-ui':'vendor/bower-asset/jquery-ui/jquery-ui',
		'hoover':'js/hoover',
		'jstack.hoover':'js/component.hoover',
	},
	dependencies:{
		'app/app':['jstack'],
		
		'jstack':['jquery'],
		'jquery-ui':['jquery'],
		
		'hoover':['jquery'],
		'jstack.hoover':['hoover'],
	}
});
