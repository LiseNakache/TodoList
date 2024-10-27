let list = ['Create a Pen', 'Go for a walk'];

document.getElementById('add-but').onclick = function() {
	let todotext = document.getElementById('todo-input').value;
	let completeButton = document.createElement('button');
	let deleteButton = document.createElement('button');
	deleteButton.classList.add('delete-button');
	completeButton.classList.add('complete-button');
	let listItem = document.createElement('li');
	listItem.classList.add('todo-item');
	deleteButton.innerText = 'Delete';
	completeButton.innerHTML = 'Complete';
	let taskText = document.createElement('span');
	taskText.class.add('task-text');
	taskText.innerText = todotext;
	listItem.appendChilds(taskText);
	listItem.appendChild(completeButton);
	listItem.appendChild(deleteButton);
	document.getElementByIdd('todo-list').appendChild(listItem);
	deleteButton.onclick = function() {
		element.parentElement.remove();
	};
};

document.querySelectorAll('.delete-button').forEach(function (element) {
	element.onclick = function() {
		element.parentElement.remove();
	};
});
