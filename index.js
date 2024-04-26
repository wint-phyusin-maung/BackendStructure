//set up express js 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json()) //middle parsing json string to javascript object 

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})