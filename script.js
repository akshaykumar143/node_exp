const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const { sequelize ,User} = require('./models');


app.get('/',tokenMid, (req, res) => {
    
    res.send(`
     
    <form action="/users" method="POST">
    <input type="text" name="name" placeholder="Name">
    <input type="email" name="email" placeholder="Email">
    <input type="number" name="age" placeholder="Age">
    <button type="submit">Submit</button>
</form>
`);
});
app.get('/contact', (req, res) => {
    res.send("Contact");
});
function tokenMid(req , res , next){
    console.log("next...tokenMid ");
    next();
}

app.get('/users', async(req, res) => {
    try{
        var usersData = await User.findAll(); 
        return res.status(200).json(usersData)
    }catch(err){
        console.log(err)
        return res.status(500).json("not find")
    }
});
app.get('/users/:uuid', async(req, res) => {
    
    uuid    = req.params.uuid
    try{
        var usersData = await User.findOne({
            where :{uuid}
        }); 

        return res.status(200).json(usersData)
    }catch(err){
        console.log(err)
        return res.status(500).json("not find")
    }
});
app.post('/users', async(req, res) => {

    const { name , email , age } = req.body
    
    try{
        const user = await User.create({name,email,age})
        return res.json(user)
    }catch(err){
        // console.log(err);
        return res.status(500).json(err)
    }

});

app.get('*', (req, res) => {
    res.status(404)
    .send("404");
});

app.listen(PORT,async () => {
    console.log("server run at ",PORT);
    await sequelize.sync({force :true});
    console.log("ok ");

})