const express = require("express")
const app = express()
const cors = require("cors")
const {MongoClient} = require("mongodb") 
const { get } = require("http")
const e = require("express")


const port = 8000
const url = "very very secret key"




app.use(cors())
app.use(express.json())



app.post('/',(req,res)=>{
    const data = req.body
    //send to the data base
    saveItemDatas(data)
    console.log(data)
})

//save data into database
async function saveItemDatas(datas={}){
    const client = new MongoClient(url)
    try{
        const database = client.db("ecommercal")
        const coll = database.collection("items")

        await coll.insertOne(datas)

    }finally{
        await client.close()
    }
}

// get datas from database
async function getItemData(){
    const client = new MongoClient(url)
    let datas = []

    try{
        const database = client.db("ecommercal")
        const coll = database.collection("items")

        const data = await (await coll.find({}).toArray()).forEach((el)=>{
            datas.push(el)
        })
    }finally{
        client.close()
    }
    return datas
}


// send data into frontend
app.get('/',(req,res)=>{
    //take data from database an send
    getItemData().then( (datas) => {
        res.send(datas)
    } )
})



app.listen(port,()=>{
    console.log(`on ${port}`)
})




