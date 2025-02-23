import express from 'express'
import { request } from 'http'

const app = express()

console.log(app)

// const a = 5
// const b = 10

// console.log(a + b)


app.listen(7000,()=>{
    console.log("server is running on localhost:7000")
})

app.get("/", (request,response)=>{
    response.send([{
        name:"ashar",
        age:"18",
        city:"karachi",
    },
    {
        name:"taha",
        age:"18",
        city:"lahore",
    }]
)
});
app.get("/users", (request,response)=>{
    response.send("Server is Runingggggggggg on /users")
})
// app.post()
// app.put()
// app.delete()