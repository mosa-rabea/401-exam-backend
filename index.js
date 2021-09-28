const express = require('express');

const cors = require('cors');

const axios = require('axios');

require('dotenv').config();

const server = express();

server.use(cors());

server.use(express.json());
const FruitModel=require('./model/Fruit.model')

const mongoose = require('mongoose');
const { application } = require('express');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE_CS);
}

const PORT =process.env.PORT




async function seedData() {
      let fruitData=new FruitModel({

            email:'mnnnnn305@gmail.com',
            fruits:[{
                  name: "Apple",
                  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
                  price: 35

            }] 
      })
     let resulte=await fruitData.save()
     console.log(resulte);
}
// seedData()


const {home,apiData,postData,getFav,deleteData,updateData}=require('./controller/crud.controller')

server.get('/',home)
server.get('/fruit',apiData)
server.post('/add-fav/:email',postData)
server.get('/get-fav/:email',getFav)
server.delete('/delete/:id/:email',deleteData)

server.put('/update/:id/:email',updateData)
server.listen(PORT,console.log(`hello ${PORT}`))