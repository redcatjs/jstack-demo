(function(){
	
	const main = ['app/app'];
	
	const dev = APP_DEV_MODE;
	
	
	require.config({
		paths   : {
			'jstack':'vendor/bower-asset/jstack/jstack',
			'jquery':'vendor/bower-asset/jquery/dist/jquery',
			'jquery-ui':'vendor/bower-asset/jquery-ui/jquery-ui',
			'hoover':'app/directive/hoover',
		},
		shim    : {
		
		},
		urlArgs : dev?'_='+(new Date()).getTime():'',
	});
	
	require(main);
	
})();
