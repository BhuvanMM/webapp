const express = require("express")
const cors = require('cors')


const app = express();
const port = process.env.port || 3001;
app.use(cors())
let notes=[
    {
      "id": "1",
      "content": "HTML is easy",
      "important": true
    },
    {
      "id": "2",
      "content": "Browser can execute only JavaScript",
      "important": false
    },
    {
      "id": "3",
      "content": "GET and POST are the most important methods of HTTP protocol",
      "important": true
    },
    {
      "id": "4",
      "content": "I have used the POST method",
      "important": false
    }
  ]

app.get('/',(req,res)=>{
    res.send('<h1>Hello world</h1>');
})

app.get('/api/notes',(req,res)=>{
    res.json(notes)
})

app.get('/api/notes/:id',(req,res)=>{
   const id = req.params.id
   const note = notes.find(note => note.id === id)
   res.json(note);
})

app.delete('/api/notes/:id',(req,res)=>{
  const id = req.params.id
  notes = notes.filter(note => note.id!== id)
  res.status(204).end()
})

app.listen(port,()=>{console.log(`server started at port ${port}`)})