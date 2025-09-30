const todolistId_1 = 1
const todolistId_2 = 2

let todolists = [
    {
        id: todolistId_1,
        title: "What to learn",

        filter: 'all'
    },
    {
        id: todolistId_2,
        title: "What to buy",
        filter: 'all'
    }
]

// const name = 'Bob'

let tasks = {

    [todolistId_1]: [
        {id: crypto.randomUUID(), title: 'HTML', isDone: false},
        {id: crypto.randomUUID(), title: 'CSS', isDone: false},
        {id: crypto.randomUUID(), title: 'JS/TS', isDone: false},
    ],

    [todolistId_2]: [{id: crypto.randomUUID(), title: 'Beer', isDone: false},
        {id: crypto.randomUUID(), title: 'Meat', isDone: false},
        {id: crypto.randomUUID(), title: 'Milk', isDone: false},
    ],
    [todolistId_3] : []
    // "12user": [],
    // [24 + 12]: {},
    // ['user_' + name]: {},
}

// console.log(tasks['12user'])


// CRUD операции

const createTodolist = (title) => {
    const newTodo = {
        id: crypto.randomUUID(),
        title: title,
        filter: 'all',
    }

    todolists = [...todolists, newTodo]
    tasks = {...tasks, [newTodo.id]: []}
}

createTodolist('Тудулист')
console.log(todolists)
console.log(tasks)

const changeTodolistFilter = (todolistId, filter) => {
    todolists = todolists.map(tl => tl.id === todolistId ? {...tl, filter: filter} : tl)
}

const deleteTodolist = (todolistId) => {
    todolists = todolists.filter(tl => tl.id !== todolistId)
    delete tasks[todolistId]
}

const collection = new Map()
collection.set(todolists, tasks)
collection.set(123, 'even')
console.log(collection)
console.log(collection.get(todolists))

//

const array = [1,2,34,2,3,1,2]

const uniqValueSet = new Set(array)
const arrayFromSet = [...uniqValueSet]
console.log(uniqValueSet)