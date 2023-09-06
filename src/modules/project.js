class Project {
    constructor(name) {
        this.name = name
        this.tasks = []
    }

    setTasks(tasks) {
        this.tasks = tasks
    }

    getTasks() {
        return this.tasks
    }
}