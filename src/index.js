const textbox = document.getElementById("create-task-form");
textbox.addEventListener("submit", (e) => {
	e.preventDefault();
	buildToDo(e.target.new_task_description.value);
});

function buildToDo(todo) {
	const paragraph = document.createElement("p");
	const button = document.createElement("button");
	button.textContent = "x";
	paragraph.textContent = `${todo} `;

	document.getElementById("main-content").append(paragraph);
	paragraph.appendChild(button);

	button.addEventListener("click", deleteAction);
}

function deleteAction(paragraph) {
	return paragraph.target.parentNode.remove();
}
