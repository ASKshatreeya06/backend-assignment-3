const express = require('express')
const app = express();

const Port = 8000;
const Todo = require('./routes/todo')



// require('./db/db')
// const dotenv = require('dotenv')


// dotenv.config();
// const Port = process.env.Port ;


const cors = require('cors')
app.use(cors());
app.use(express.json());
app.use('/',Todo);

app.listen(Port, () => {
    console.log(`server started http://localhost:${Port}`);
})