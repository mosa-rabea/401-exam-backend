'use strict';
const mongoose=require('mongoose')



const fruitSchema=new mongoose.Schema({
      email:String,
      fruits:[{

            name:String,
            image:String,
            price:Number
      }]
})


const FruitModel=mongoose.model('fruit',fruitSchema)


module.exports=FruitModel