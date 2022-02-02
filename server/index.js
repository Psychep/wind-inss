const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://admin:Console.neo1@cluster0.oomay.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// connect mangodb and get data

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MongoDB");
  }
});
const db = client.db("myFirstDatabase");
const collection = db.collection("customers");
collection.insertMany([
  {
    name: "John",
    address: "Highway 71",
  },
  {
    name: "Peter",
    address: "Lowstreet 4",
  },
  {
    name: "Amy",
    address: "Apple st 652",
  },
  {
    name: "Hannah",
    address: "Mountain 21",
  },
  {
    name: "Michael",
    address: "Valley 345",
  },
  {
    name: "Sandy",
    address: "Ocean blvd 2",
  },
  {
    name: "Betty",
    address: "Green Grass 1",
  },
]);
// get data from mango db
collection.find({}).toArray((err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});
