

	const dbUrl = 'https://jsonplaceholder.typicode.com/todos';
	let list = document.getElementById('base');
	

	function getAllTodos() {
        return new Promise(resolve => {
            fetch(new Request(dbUrl))
                .then(res => { return res.json(); })
                .then(data => { resolve(data); });
        });
    }

	function appendTextToList(todo) {
		if(todo.completed){
			list.innerHTML += `
			<input type="checkbox" id ="${todo.id}" checked disabled>
			<label style="padding-left : 20px; opacity : 0.5; text-decoration: line-through;">${todo.title}</label>
			<hr>	
		`;
		}
		else{
			list.innerHTML += `
			<input type="checkbox" id ="${todo.id}" onChange ="cbChange();">
			<label style="padding-left : 20px">${todo.title}</label>
			<hr>	
		`;
		}
    }

	async function asyncall(){
		const result = await getAllTodos().then(todos => {
			todos.forEach(todo => { appendTextToList(todo); });
		})
	}
	
	asyncall();

	var count = 0;
	function cbChange(){
			if(this.checked == true)
			{
				count +=1;
			}
			if (count === 5)
			{
				alert("Congrats. 5 Tasks have been Successfully Completed !");
			}	
		}





