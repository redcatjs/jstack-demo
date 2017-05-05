$js.module(class extends jstack.Component{
	
	templateUrl(){
		return 'modules/todo/item';
	}
	
	dependencies(){
		return [
			'app/directive/hoover',
		];
	}

	dependenciesData(){
		let id = this.route.params[0];
		this.data.id = id;
		return [
			$.getJSON('data/controller.php?method=load'),
		];
	}
	
	setData(json){
		let data = this.data;
		data.task = json[data.id];
		
		let date = new Date();
		data.today = date.toLocaleDateString();
		
		data.bezierColor = '#f00';
	}
	
	domReady(){
		
	}
});
