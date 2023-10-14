const mongoose = require("mongoose")
const { v4: uuidv4 } = require('uuid');

mongoose.connect("mongodb://localhost/testdb");

const userSchema = new mongoose.Schema({
    name: String, 
    age: Number,
    id: String
})

const User = mongoose.model("User", userSchema);



run();
async function run(){
    var identification = uuidv4();
    const user = new User({name: "Kyle", age : 26, id:identification});
    await user.save();
    console.log(user)
    console.log()

}




