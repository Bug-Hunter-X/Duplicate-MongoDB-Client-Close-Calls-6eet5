```javascript
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');
    // some operations
    await client.close();
  } finally {
    // Ensures that the client will close when you finish/
    await client.close();
  }
}
run().catch(console.dir);
```