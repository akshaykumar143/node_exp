const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();

app.get('/',tokenMid, (req, res) => {
    res.send("Home");
});
app.get('/contact', (req, res) => {
    res.send("Contact");
});
app.get('*', (req, res) => {
    res.status(404)
    .send("404");
});
function tokenMid(req , res , next){
    console.log("next...tokenMid ");
    next();
}
app.listen(PORT, () => {
    console.log(3000);
})