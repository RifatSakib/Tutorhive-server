// https://expressjs.com/en/starter/basic-routing.html





const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 7000;






async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        //   await client.connect();
        // Send a ping to confirm a successful connection
        //   await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");






    } finally {
        // Ensures that the client will close when you finish/error
        //   await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Yaaaa!,TutorHive ')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})