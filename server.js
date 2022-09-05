const express = require('express');

const log = console.log;
const app = express();
const path = require('path')

const PORT = 8080;

app.use(express.urlencoded({
    extended : false
}));    
app.use(express.json());

app.post('/email' , (req , res) => {


    console.log('data :' , req.body);
    res.json({message : 'Message Receive'});

})

app.get('/' , (req , res) => {
    res.sendFile(path.join(__dirname , 'public' , 'sample.html'));
})

app.listen(PORT , () => {
    log('server is starting on PORT , ' , 8080);
})

