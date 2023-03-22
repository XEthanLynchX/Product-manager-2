const mongoose = require("mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/product_manager`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log(`Connected to product_manager database!`))
.catch((err)=>console.log(err));