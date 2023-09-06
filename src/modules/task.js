class Task {
	constructor(description, date, importance) {
		this.description = description
		this.date = date
		this.importance = importance
	}
}

const createToolsArea = () => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('todo__tools')
	// .appendChild(toolsPanel)

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

export default Task
export { createToolsArea }
