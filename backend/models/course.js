const mongoose = require('mongoose');
module.exports = mongoose.model('Course',
  {
    title: {
      type: String,
      required: true
    },


    stream: {
      type: String,
      required: true
    },

    address:{
      type:String,
      required: true
    }  });