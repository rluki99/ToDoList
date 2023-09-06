import Task from './modules/task'
import { displayingTask } from './modules/task'
import './styles/main.scss'

const taskDescription = document.querySelector('.header__input-txt')
const taskDate = document.querySelector('.header__input-date')
const taskProjectSelect = document.querySelector('.header__select')
const taskPriority = document.querySelector('.header__input-importance')
const addTask = document.querySelector('.header__btn')
const todoUl = document.querySelector('.todo__ul')

const creatingTask = () => {
	if (taskDescription.value && taskDate.value) {
		const newTask = new Task(taskDescription, taskDate, taskPriority)
		displayingTask(newTask)

		taskDescription.value = ''
		taskDate.value = ''
		taskPriority.checked = false
	} else return
}

const checkClick = e => {
	if (e.target.classList.value !== '') {
		if (e.target.closest('button').classList.contains('todo__btn--complete')) {
			e.target.closest('li').classList.toggle('todo__li--complete')
			e.target.closest('button').classList.toggle('todo__li--complete')
		} else if (e.target.closest('button').classList.contains('edit')) {
			editTask(e)
		} else if (e.target.closest('button').classList.contains('delete')) {
			deleteTask(e)
		}
	}
}

addTask.addEventListener('click', creatingTask)
todoUl.addEventListener('click', checkClick)
