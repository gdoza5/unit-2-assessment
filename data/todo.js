const todos = [];

module.exports = {
    getAll,
    create,
    deleteOne,
};

function getAll() {
    return todos;
};

function create(todo) {
    console.log(todos)
    todos.push(todo)
}

function deleteOne(id) {
    todos.splice(id, 1)
}



 