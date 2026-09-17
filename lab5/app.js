import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1> Hello Express</h1>");
});

app.get('/about',(req,res)=>{
  res.send("WE are FSD Developer")
})

app.post('/login',(req,res)=>{
  res.send({msg:'user login'})
})

app.put('/user/update/1',(req,res)=>{
  res.send({msg:'user update'})
})

app.delete('/users/1',(req,res)=>{
  res.send({msg:'remove user 1'})
})


app.use((req,res)=>{
  res.status(404).send("Not found")
})


app.listen(3333, () => console.log("Server is running at 3333"));

// server.on("error", (err) => {
//   console.error("Server listen error:", err);
// });
