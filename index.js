const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
 
//routes
app.use("/api/products", productRoute);





 app.get('/', (req, res)=>{
    res.send("hello word from Node js")
 });


 mongoose.connect("mongodb+srv://Adeolu007:Treasurer15@backenddb.kdpqjq2.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
 
  .then(()=>{
    console.log("connected to the DB");
    app.listen(3000, ()=>{
        console.log('server is running')
    });
  })
  .catch(()=> {
    console.log("connection failed");
  });