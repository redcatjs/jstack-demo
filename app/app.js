define(['jstack','hoover'],function(){

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
			component: 'modules/home/home',
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
			component: 'modules/todo/list',
		},
		
		{
			path: 'todo/:id',
			component: 'modules/todo/item',
		},
		
		{
			path: '*',
			component: 'modules/error/404',
		},
	]
});

router.run();


});
