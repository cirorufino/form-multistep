const express = require('express');
const path = require ('path');
const app = express();
const handle = require('express-handlebars');
const bodyParser = require ('body-parser');
const dotenv = require('dotenv');
const User = require('./models/users');

app.engine('.hbs', handle.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use("/public", express.static(path.join(__dirname, "public"))); 
app.use(bodyParser.json());


const connectDB = require('./config/db');
dotenv.config({ path: './config/config.env' });
connectDB();

app.get('/', (req,res) => {
    res.render('index')
});
app.post('/signin', async (req,res)=>{
    try{
        const {firstName, lastName, age, gender, email, password} = req.body;
        console.log(firstName, lastName, age, gender, email, password);
        const response = await User.create({ firstName, lastName, age, gender, email, password });
    }catch(err){
        return res.json({ status: 'error', error: err });
    }
    res.json({status: 'ok'})
});

app.listen(2000, () => { 
    console.log('Server starting at port: ', 2000)
});