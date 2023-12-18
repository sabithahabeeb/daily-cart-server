const mongoose = require('mongoose')
const connection_string = process.env.DB_CONNECTION_STRING

mongoose.connect(connection_string).then((res)=>{
    console.log(`MongoDb Connected Succesfully with DC_Srver`);
}).catch((err)=>{
    console.log(err);
})