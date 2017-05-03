$js(['jstack'],function(){
	
	jstack.directive('hoover', require('./directive/hoover').default );
	
	//jstack.on('load','.toto',function(){
		//$(this).text('OK');
	//});
	
	jstack.config.templatesPath = 'app/';
	jstack.config.controllersPath = 'app/';
	
	
	let spinnerOn = function(){
		
	};
	let spinnerOff = function(){
		
	};
	$(document).on('j:route:load',spinnerOn);
	$(document).on('j:route:loaded',spinnerOff);
	
	const router = new jstack.Router({
		el: '#app',
		routes: [
			{
				path: '',
				component: require('./modules/home/home').default,
				/* jstack feature in dev
				children: [
					{
						path: '',
						component: MySubRouteComponent
					},
				]
				*/
			},
			
			{
				path: 'todo',
				component: require('./modules/todo/list').default,
			},
			
			{
				path: 'todo/:id',
				component: require('./modules/todo/item').default,
			},
			
			{
				path: '*',
				component: require('./modules/error/404').default,
			},
		]
	});
	
	router.run();
	
	
});
