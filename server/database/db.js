const mongoose=require('mongoose')
const CONNECTION_STRING='mongodb+srv://ticket-user:ticket123@ticket-app-cluster.qepnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


const connectDB =async()=>{
    try{
        await mongoose.connect(CONNECTION_STRING,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("db connection success")

    }catch(err){

        console.log("err" ,err)

    }


}


module.exports=connectDB;