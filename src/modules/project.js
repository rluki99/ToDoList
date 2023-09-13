class Project {
    constructor(name) {
        this.name = name
        this.tasks = []
    }

	addTask(task) {
		this.tasks.push(task);
	}

    getTasks() {
        return this.tasks
    }
}

const createProject = () => {
    const projectName = prompt('Type project name')
    const newProject = new Project(projectName)
    console.log(newProject);

    const projectSpan = document.createElement('span')
    projectSpan.classList.add('side__span')
    projectSpan.innerHTML = `
    <button class="side__item side__item-projects">${newProject.name}</button><button class="side__item side__item-delete">X</button>
    `
    addProjectBtn.insertAdjacentElement('afterend',projectSpan)
}

const deleteProject = () => {
    
}

export default Project


const addProjectBtn = document.querySelector('.side__add-btn')
addProjectBtn.addEventListener('click', createProject)