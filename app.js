document.addEventListener('DOMContentLoaded',function () {

	const dbUrl = 'https://jsonplaceholder.typicode.com/todos';
	let list = document.getElementById('base');
	let id_arr = [];

	function getAllTodos() {
        return new Promise(resolve => {
            fetch(new Request(dbUrl))
                .then(res => { return res.json(); })
                .then(data => { resolve(data); });
        });
    }

	function appendTextToList(todo) {
        list.innerHTML += `
			<input type="checkbox" id ="${todo.id}">
			${todo.title}
			<br>	
		`;
		if (todo.completed){
			id_arr.push(todo.id);
		} 
    }

	async function asyncall(){
		const result = await getAllTodos().then(todos => {
			todos.forEach(todo => { appendTextToList(todo); });
		})
	}
	
	asyncall();
	
})

