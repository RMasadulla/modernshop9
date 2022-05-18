const express = require("express")
const hbs = require("hbs")
const path = require("path")

const app = express();
const Port = process.env.PORT || 9090

//path set
 const static_Path = path.join(__dirname,"../public");
 const view_path = path.join(__dirname,"../Template/views");
 const partials_path = path.join(__dirname,"../Template/partials");

//set handlebars
 app.set("view engine","hbs");
 app.set("views",view_path);

 //connect partials
hbs.registerPartials(partials_path)

 //buildin middleware
 app.use(express.json());
 app.use(express.urlencoded({extended: false}));
 app.use(express.static(static_Path))

    app.get('/',(req,res)=>{
        res.render("index")
    })
    app.get('/login',(req,res)=>{
        res.render("login")
    })
    app.get('/register',(req,res)=>{
        res.render("register")
    })
    app.get('*',(req,res)=>{
        res.render("notFound")
    })



app.listen(Port, (err)=>{
    console.log(`The port is ready with ${Port}`)
})