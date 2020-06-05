const Stores = require('../models/Store');

//get all store
//route get api/v1/stores
//access public
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

//add a store
//route Post api/v1/stores
//access public
exports.addStore= async (req,res,next)=>{
  try {
  const store = await Stores.create(req.body);

   return res.status(200).json({
    success: true,
    data: store
   });

  } catch (error) {
    console.error(err);
    res.status(500).json({error:'Server error'});
  }
};