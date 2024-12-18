const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();



const app = express()
const port = process.env.PORT || 5000

const corsOptions = {
  origin: ['http://localhost:5173', 'https://sports-horizon-b10a10.web.app'], // Add trusted origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};
app.use(cors(corsOptions))
app.use(express.json())
app.use(cors(corsOptions));


app.get("/", (req, res) => {
    res.send("server running")
})


const uri = process.env.DB_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    const itemCollection = client.db("itemsDB").collection("items")
    const userCollection = client.db("userDB").collection("users")
    // item add to db 
    app.post("/item", async(req, res) => {
        const item = req.body
        const result = await itemCollection.insertOne(item)
        res.send(result)
    })

    // all item from db 
    app.get("/items", async( req, res) => {
        const cursor = itemCollection.find()
        const result = await cursor.toArray()
        res.send(result)
    })

    // find item by id 
    app.get("/item/:id", async(req, res) => {
        const id = req.params.id
        // console.log(id);
        const query = {_id: new ObjectId(id)}
        const result = await itemCollection.findOne(query)
        res.send(result)
    })

    // find item by user email 
    app.get("/user-items/:email", async(req, res) => {
        const email = req.params.email
        const query = {userEmail: email}
        const cursor = itemCollection.find(query)
        const result = await cursor.toArray()
        res.send(result)
    } )

    // delete item form db 
    app.delete("/item/:id", async(req, res) => {
        const id = req.params.id
        const filter = {_id: new ObjectId(id)}
        const result = await itemCollection.deleteOne(filter)
        res.send(result)
    })

    // update item in db 
    app.put("/item/:id", async(req, res) => {
        const id = req.params.id
        const query = {_id: new ObjectId(id)}
        const updatedData = req.body
        const updatedDoc = {
            $set: {
                title: updatedData.title,
                price: updatedData.price,
                imageUrl: updatedData.imageUrl,
                category: updatedData.category,
                rating: updatedData.rating,
                processingTime: updatedData.processingTime,
                stockStatus: updatedData.stockStatus,
                customization: updatedData.customization,
                description: updatedData.description,
                userName: updatedData.userName,
                userEmail: updatedData.userEmail,
                mainAdmin: updatedData.mainAdmin,
            }
        }
        const result = await itemCollection.updateOne(query, updatedDoc)
        res.send(result)
    })

    // items sorted api 
    app.get("/sorted-items", async(req, res) => {
      const cursor = itemCollection.find().sort({price: 1})
      const result = await cursor.toArray()
      res.send(result)
    })

    //user api
    app.post("/user", async(req, res) => {
      const user = req.body
      console.log(user);
      const result = await userCollection.insertOne(user)
      res.send(result)
    })

    app.get("/users", async(req, res) => {
      const result = await userCollection.find().toArray()
      res.send(result)
    })
    //Limited all item get api
    app.get("/limited-items", async(req, res) => {
      const cursor = itemCollection.find().limit(6)
      const result = await cursor.toArray()
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})