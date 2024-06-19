const express = require('express')
const app = express()
const {createTodo} = require("./type")


app.use(express.json());

app.post("/todo", async function(){
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    resizeBy.status(411).json({
        msg: "You send the wrong inputs"
    })
    return;
}
})

createTodo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
})
// put it in mongodb
await res.json({
    msg: "Todo created"
})

app.get("/todos", async function(res, req){
    const todos = await todo.find({});
        // console.log(todos) // promise
    res.json({todos})
})

app.put("/complete", async function(res, req){
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You send the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        
            completed: true
        })
        res.json({

        msg: "Todo marked as completed"
    })
})

app.listen(3000);
