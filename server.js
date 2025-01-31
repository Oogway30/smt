const express = require('express');
const path = require('path');
const createUser  = require('./database.sql');
const app = express();
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); 

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index1.html'))
})

app.post('/logged',async (req,res)=>{
    let email = req.body.Email
    let password = req.body.Password
    let a = await createUser(email,password)
    if (a=='User creation succesfull!'){
        res.render(path.join(__dirname, 'views', 'index2.ejs'),{email:email, password:password}) 
    }
    else{
        res.sendFile(path.join(__dirname,'public','404.html'))
    }
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
 