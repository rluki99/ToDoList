class Task {
	constructor(description, dueDate, priority, project) {
		this.description = description
		this.dueDate = dueDate
		this.priority = priority
		this.project = project
	}
}

const createInfoArea = (displayTask, task) => {
	const infoPanel = document.createElement('div')
	infoPanel.classList.add('todo__info')
	displayTask.appendChild(infoPanel)

	const priorityInfo = document.createElement('span')
	priorityInfo.classList.add('todo__info-priority')
	const star = document.createElement('i')
	star.classList.add('fa-solid','fa-star','star')
	if(task.priority.checked) {
		star.classList.add('star--checked')
	}
	infoPanel.appendChild(priorityInfo)
	priorityInfo.appendChild(star)

	const dateInfo = document.createElement('span')
	dateInfo.classList.add('todo__info-date')
	dateInfo.innerText = task.dueDate
	infoPanel.appendChild(dateInfo)
}

const createToolsArea = (displayTask) => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('todo__tools')
	displayTask.appendChild(toolsPanel)

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('todo__btn', 'todo__btn--complete')
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'

	const editBtn = document.createElement('button')
	editBtn.classList.add('todo__btn', 'todo__btn--edit')
	editBtn.innerHTML = 'EDIT'

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('todo__btn', 'todo__btn--delete')
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

	toolsPanel.append(completeBtn, editBtn, deleteBtn)
}

const displayingTask = (task) => {
	const todoUl = document.querySelector('.todo__ul')
	const displayTask = document.createElement('li')
    displayTask.classList.add('todo__li')
    displayTask.innerHTML = task.description
    todoUl.appendChild(displayTask)
	
	createInfoArea(displayTask, task)
	createToolsArea(displayTask)
}

export default Task
export { displayingTask }
