const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js');
const app = express()

app.use(express.json());


 app.get('/', (req, res)=>{
    res.send("hello word from Node js")
 });

//get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
} )


//get single product
app.get('/api/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
} )

//create product
 app.post('/api/products', async (req, res) =>{
   try{
    const product = await Product.create(req.body)
    res.status(200).json(product)
   } catch (error){
    res.status(500).json({message: error.message})
   }
 })

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