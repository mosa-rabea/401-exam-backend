'use strict';
const axios=require('axios')


const FruitModel=require('../model/Fruit.model')
const home=(req,res)=>{

      res.send('hello my frind')
}


const apiData=(req,res)=>{
axios.get('https://fruit-api-301.herokuapp.com/getFruit').then((response)=>{
      res.send(response.data)
})

}
const postData=(req,res)=>{

     const {name,image,price}=req.body
let addData={
      name:name,
      image:image,
      price:price
}
FruitModel.find({email:req.params.email},(error,data)=>{

      if (error) {
            console.log(error);
      } else {
            data[0].fruits.push(addData)
            data[0].save()
            res.send(addData)
      }
})


}
const getFav=(req,res)=>{
      FruitModel.findOne({email:req.params.email},(error,data)=>{
            if (error) {
                  console.log(error);
            } else {
                  res.send(data)
            }
      })
}

const deleteData=(req,res)=>{

      FruitModel.findOne({email:req.params.email},(error,data)=>{

            if (error) {
                  console.log(error);
            } else {
                  data.fruits.splice(req.params.id,1)
                  data.save()
                  res.send(data)
            }
      })
}


const updateData=(req,res)=>{
      const{name,image,price}=req.body
      let updateData={
            name:name,
            image:image,
            price:price
      }

      FruitModel.findOne({email:req.params.email},(error,data)=>{

            if (error) {
                  console.log(error);
            } else {
                  data.fruits.splice(req.params.id,1,updateData)
                  data.save()
                  res.send(data)
            }
      })
}

module.exports={home,apiData,postData,getFav,deleteData,updateData}