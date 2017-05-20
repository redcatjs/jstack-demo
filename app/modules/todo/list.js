import 'jquery-ui';

export default class extends jstack.Component {
	
	templateUrl(){
		return 'modules/todo/list';
	}
	
	getData(){
		return [
			$.getJSON('data/controller.php?method=load'),
		];
	}
	
	setData(json){
		this.data.tasks = json;
	}
	
	domReady(){
		let data = this.data;
		$('.datepicker').datepicker();
		
	}
	
	createTask(event,element){
		event.preventDefault();
		
		let self = this;
		let el = this.element;
		let data = this.data;
		
		let newTask = $.extend(true, {}, data.newTask); //clone newTask, so the new element is detached from dom newTask input model
		
		data.tasks.modelPush(newTask, function(){ //push newTask in data.users (like data.users.push(newTask) ), and then run callback when dom is async updated
			
			$(el)
				.find('.datepicker') //get all new datepicker in dom
				.not(':data(datepicker)') //filter out all that allready have a datepicker attached
				.datepicker() //launch a datepicker on them
			;
		
		});
		
		data.newTask = {}; //clear add task inputs
		
		this.store( data );
		
	}
	
	deleteTask(event,element){
		let id = $(element).closest('[data-id]').attr('data-id');
		let data = this.data;
		
		delete data.tasks[id];
		//if you need to do some when dom is updated, instead of using "delete data.tasks[id];" you can do :
		/*
			data.tasks.modelDelete(id,function(){
				
				//dom some stuff after the dom has been updated
				
			});
		*/
		
		this.store( data );
	}
	
	store(data){
		return $.post('data/controller.php',{
			method: 'store',
			data: data.tasks,
			dataType: 'json',
		});
	}
};
