const Stores = require('../models/Store');

exports.getStores= async (req,res,next)=>{
  try {
    const stores =await Stores.find();

    return res.status(200).json({
     success:true,
     count:stores.length,
     data: stores
    });
  } catch (error) {
    console.error(err);
    res.status(500).json({error:'Server error'});
  }
};