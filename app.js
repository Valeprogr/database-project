const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const usersRouter = require ('./routes/usersRouter')


app.use(express.json());
app.use('/users',usersRouter);

app.get("/")


app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})