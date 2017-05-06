(function(){
	
	const main = ['app/app'];
	
	const dev = APP_DEV_MODE;
	
	//alias map
	const alias = {
		'jstack':'vendor/bower-asset/jstack/jstack',
		'jquery':'vendor/bower-asset/jquery/dist/jquery',
		'jquery-ui':'vendor/bower-asset/jquery-ui/jquery-ui',
		'hoover':'js/hoover',
		'jstack.hoover':'js/component.hoover',
	};
	
	//combined dependencies
	const combined = {
		
	};
	
	//dependencies map
	const dependencies = {
		
		'app/app':['jstack'],
		
		'jstack':['jquery'],
		'jquery-ui':['jquery'],
		
		'hoover':['jquery'],
		'jstack.hoover':['hoover'],
		
	};
	
	
	if(!dev){
		
		//don't add min suffix for
		const dontMin = [
			'app',
			'test',
			'test2',
		];
		
		Object.keys(paths).forEach(function(name){
			if(dontMin.indexOf(name)===-1&&dontMin.indexOf(paths[name])===-1){
				paths[name] += '.min';
			}
		});
		
	}
	
	require.config({
		paths   : alias,
		shim    : dependencies,
		urlArgs : dev?'_='+(new Date()).getTime():'',
	});
	
	Object.keys(combined).forEach(function(name){
		define(name, combined[name], function(){
			return arguments;
		});
	});
	
	require(main);
	
})();
