const express = require('express')
const app = express()
const port = 8000



const name =[
        {id:1 ,names: 'vaishnavi1'},

        {id:2 ,names: 'jyoti2'},

        {id:3 ,names: 'nandani3'},

]
//const Collegename =[
  //  {name:1 ,names: 'iics'},
   // {name:2 ,names: 'IIT'},
   // {name:3 ,names: 'AU3'},

////]
//const location =[
   // {name:1 ,names: 'Allahabd1'},
    //{name:2 ,names: 'Delhi'},
    //{name:3 ,names: 'patna'},

//]


app.get('/', (req, res) =>
 res.send('Hello World!'));

 app.post('/api/name', (req, res) =>
 res.send([name]));

 app.get('/api/id/:names/:collegename/:location', (req, res) =>{
 
 // res.send(req.query)
// res.send(`
// <p>${sucess}</p>`)

res.send(req.params);

 
});


app.listen(port, () => console.log(`Example app listening on port ${port}`))