const { todolist_tb } = require('../../models')

exports.showTodos = async (req, res) => {
    try {
        const todos = await todolist_tb.findAll()

        res.send({
            status: 'success',
            todos
        })
    } catch (err) {
        res.send({
            status: 'failed',
            message: 'server error'
        })
    }
}

exports.showTodo = async (req, res) => {
    try {
        const id = req.params
        console.log(id)

        const todo = await todolist_tb.findOne({ where: { id } })

        if (todo === null) {
            console.log('Data Not found!');
        }

        res.send({
            status: 'success',
            todo
        })
    } catch (err) {
        console.log(err)
        res.send({
            status: 'failed get todo',
            message: 'server error'
        })
    }
}

exports.addTodo = async (req, res) => {
    try {
        const data = req.body.todo
        console.log(data)
        const todo = await todolist_tb.create({
            todo: data
        })

        res.send({
            status: 'success',
            todo
        })
    } catch (err) {
        res.send({
            status: 'failed',
            message: 'server error'
        })
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params
        await todolist_tb.destroy({
            where: {
                id
            }
        })

        res.send({
            status: 'success'
        })
    } catch (err) {
        res.send({
            status: 'failed',
            message: 'server error'
        })
    }
}

exports.edit = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body.todo
        await todolist_tb.update(
            {
                todo: data
            }, {
            where: {
                id
            }
        }
        )

        const todo = await todolist_tb.findOne({
            where: {
                id
            }
        })

        res.send({
            status: 'success',
            todo
        })
    } catch (err) {
        res.send({
            status: 'failed',
            message: 'server error'
        })
    }
}

exports.complete = async (req, res) => {
    try {
        const { id } = req.params
        await todolist_tb.update(
            {
                isComplete: true
            }, {
            where: {
                id
            }
        })
        const todo = await todolist_tb.findOne({
            where: {
                id
            }
        })

        res.send({
            status: 'success',
            todo
        })
    } catch (err) {
        res.send({
            status: 'failed',
            message: 'server error'
        })
    }
}

exports.inComplete = async (req, res) => {
    try {
        const { id } = req.params
        await todolist_tb.update(
            {
                isComplete: false
            }, {
            where: {
                id
            }
        })
        const todo = await todolist_tb.findOne({
            where: {
                id
            }
        })

        res.send({
            status: 'success',
            todo
        })
    } catch (err) {
        res.send({
            status: 'failed',
            message: 'server error'
        })
    }
}