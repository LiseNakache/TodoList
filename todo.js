let list = ['Create a Pen', 'Go for a walk'];
/*
let todo = `
<li class='todo-item'>
	<span class='task-text'>${text}</span>
	<button class='complete-button'>Complete</button>
	<button class='delete-button'>Delete</button>
</li>
`;
*/

document.getElementById('add-button').onclick = function() {
	let todotext = document.getElementById('todo-input').value;
	let completeButton = document.createElement('button');
	let deleteButton = document.createElement('button');
	deleteButton.classList.add('delete-button');
	completeButton.classList.add('complete-button');
	let listItem = document.createElement('li');
	listItem.classList.add('todo-item');
	deleteButton.innerText = 'Delete';
	completeButton.innerText = 'Complete';
	let taskText = document.createElement('span');
	taskText.classList.add('task-text');
	taskText.innerText = todotext;
	listItem.appendChild(taskText);
	listItem.appendChild(completeButton);
	listItem.appendChild(deleteButton);
	document.getElementById('todo-list').appendChild(listItem);
	deleteButton.onclick = function() {
		element.parentElement.remove();
	};
};

document.querySelectorAll('.delete-button').forEach(function (element) {
	element.onclick = function() {
		element.parentElement.remove();
	};
});
