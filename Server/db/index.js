const mongoose = require('mongoose');
// JrDWapuituas3BJg
const liveLink = 'mongodb+srv://Akshay_28:JrDWapuituas3BJg@cluster0.jje0x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
// Local Setup
mongoose
  .connect("mongodb+srv://Akshay_28:JrDWapuituas3BJg@cluster0.jje0x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
  .then((res) => {
    console.log('MongoDB Connected')
  });

module.exports = mongoose;