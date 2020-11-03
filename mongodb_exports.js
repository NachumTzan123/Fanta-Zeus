
//jshint esversion:8
const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
    _id: {
      type:Number,
      required:true
    },
    name: {
      type: String,
      required:true
    },
    date_added:{
      type:Date,
      required:true
    },
    meta:{
      likes:Number,
      comments:[

      ]
    },
    size:{
      low:"",
      medium:"",
      high:"",
      ultra:"",
    }
  });

const ProductSchema = new mongoose.Schema({
  _id: {
    type:Number,
    required:true
  },
  image_id:{
    type:Number,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  meta:{
    description:{
      type:String,
      required:true
    }
  }
});

const UserSchema = new mongoose.Schema({
  _id: {
    type:Number,
    required:true
  },
  registeration:{
    type:Date,
    required:true
  },
  name: {
    first:{
      type: String,
      required:true
    },
    last:{
      type: String,
      required:true
    }
  },
  email:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  credentials:{
    username:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    },
    past_passwords:[]
  },
  isVerifyed:false,
  payment:[
    {
      payment_id:{
        type:Number,
        required:true
      },
      payment_type:{
        type:String,
        required:true
      },
      meta:{
        card_number:{
          type:Number,
          required:true
        },
        expires:{
          month:{
            type:Number,
            required:true
          },
          year:{
            type:Number,
            required:true
          }
        },
        code:{
          type:Number,
          required:true
        }
      }
    }
  ]
});

const OrderSchema = new mongoose.Schema({
  _id: {
    type:Number,
    required:true
  },
  user:{
    user_id:{
      type:Number,
      required:true
    },
    payment_id:{
      type:Number,
      required:true
    }
  },
  items:[
    {
      product_id:{
        type:Number,
        required:true
      },
      quantity:{
        type:Number,
        required:true
      },
    }
  ],
  dates:{
    created:{
      type:Date,
      required:true
    },
    reviewed:Date,
    prepared:Date,
    shipped:Date,
    delivered:Date
  },
  support:[
    {
      message_id:{
        type:Number,
        required:true
      },
      message:{
        type:String,
        required:true
      }
    }
  ]
});


const Image = mongoose.model("Image",ImageSchema);
exports.addImage=(img)=>{
  try{
    const modeledImage = new Image(img);
    modeledImage.save();
  }
  catch(err){
    console.error("dev error 1: "+err);
  }
};
