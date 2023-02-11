const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://paniaish:Jhargram98@cluster0.cnpiwkr.mongodb.net/ExpenseTrackerMERN', {useNewUrlParser: true, useUnifiedTopology: true})
const connection=mongoose.connection
connection.on('error',err=>console.log(err))
connection.on('connected',()=>console.log('Mongodb connection successful'))

