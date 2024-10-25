const mongoose=require('mongoose');

const connection=async()=>{
    await mongoose.connect("mongodb+srv://rachnarajak040:rachna1234@cluster1.mehbt5n.mongodb.net/?retryWrites=true&w=majority&appName=cluster1");
}

module.exports=connection;