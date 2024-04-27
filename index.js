//set up express js 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()) //middle parsing json string to javascript object 


//connectiong to mongodb 
const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:1234@cluster0.18i6drc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
async function connect() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
connect();


const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes)



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})