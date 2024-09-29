import superheroes from 'superheroes';
import express from "express";

const app = express();

app.get("/", (req,res)=>{
    var name = superheroes.random();
    res.render("index.ejs", {data:name});
})

app.listen(3000, ()=>{
    console.log("The server's up and runnin");
});
