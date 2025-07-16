const express = require("express")
const cors = require("cors")

const app=express()
const port=6004 //any port ur choice

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
res.send("Running test")});

const bcrypt = require("bcrypt");
const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');
const uri = "mongodb+srv://Vishnu:vishnu123@cluster0.qkk1kvv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
    await client.connect();

    const db = client.db("animemerch");
    const userCollection = db.collection("register");



    app.post("/upload", async (req, res) => {
        try {
          const { name, email, password } = req.body;
          console.log(name, email,password," inside upload")

          if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
          }

          const existingUser = await userCollection.findOne({ email });
          if (existingUser) {
            return res.status(409).json({ success: false, message: "User already exists" });
          }

          // 🔐 Hash the password
          const hashedPassword = await bcrypt.hash(password, 10);

          const result = await userCollection.insertOne({
          name,
          email,
          password: hashedPassword,
          address: "",
          phone: "",
          memberSince: new Date().toISOString()
        });


          res.status(201).json({ success: true, message: "User registered", userId: result.insertedId });

        } catch (error) {
          console.error("Error in /upload:", error);
          res.status(500).json({ success: false, message: "Server error" });
        }
      });

      
      app.post("/login", async (req, res) => {
        try {
          const { email, password } = req.body;
          if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password required" });
          }

          const user = await userCollection.findOne({ email });
          if (!user) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
          }

          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
          }

          res.status(200).json({ success: true, message: "Login successful", user: { name: user.name, email: user.email,_id:user._id } });

        } catch (error) {
          console.error("Error in /login:", error);
          res.status(500).json({ success: false, message: "Server error" });
        }
      });

      app.put("/update-profile/:id", async (req, res) => {
        try {
          const { address, phone } = req.body;
          const { id } = req.params;

          const result = await userCollection.updateOne(
          { _id: new ObjectId(id) },
          { $set: { address, phone } }
          );

          if (result.modifiedCount === 1) {
          res.json({ success: true, message: "Profile updated" });
          } else {
            res.status(404).json({ success: false, message: "User not found or no change made" });
          }
        } catch (error) {
          console.error("Error in /update-profile:", error);
          res.status(500).json({ success: false, message: "Server error" });
        }
      });

      app.put("/reset-password", async (req, res) => {
        const { email, newPassword } = req.body;

        if (!email || !newPassword) {
          return res.status(400).json({ message: "Email and new password are required." });
        }

        const user = await userCollection.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found." });

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await userCollection.updateOne(
              { email },
              { $set: { password: hashedPassword } }
            );

        res.json({ message: "Password reset successful" });
      });



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close(); //comment this line
  }
}
run().catch(console.dir);


//to run
app.listen(
    port,()=>{
        console.log(`Port is running ${port}`)
    }
)