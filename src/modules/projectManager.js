import Project from "./project"

class ProjectManager {
    constructor() {
        this.projects = []
    }

    addProject(name) {
        const project = new Project(name)
        this.projects.push(project)
        return project
    }

    addTaskToProject(project,task) {
		const foundProject = this.projects.find(p => p === project);
		if (foundProject) {
			foundProject.addTask(task);
		}
    }

    getTasksForProject(project) {
		const foundProject = this.projects.find(p => p === project);
		if (foundProject) {
			return foundProject.getTasks();
		}
		return [];
	}
}

const createProject = () => {
    
}

export default ProjectManager