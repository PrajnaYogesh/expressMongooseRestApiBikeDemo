const Bike = require('../model/bike')


const getAllBikeDetails = async(req,res) =>{
    const bikes =await Bike.find();
res.json({bikes:bikes});
}


const getOneBikeDetails = async(req,res) =>{
    // res.send("Bike controller");
    const bikeId = req.params.id;
    const oneBike = await Bike.findById(bikeId);
res.json({bike:oneBike});
    }


    const createBike = async(req,res) =>{
        const {bikeName,noOfWheels,color,pedals} = req.body;
     const newBike = await Bike.create({
        bikeName:bikeName,noOfWheels:noOfWheels,color:color,pedals:pedals
        })
console.log("New bike added");
res.json({Bike:newBike})

        // return newBike;


    }

    const updateBike = async(req,res)=>{
const id = req.params.id  
const {bikeName,noOfWheels,color,pedals} = req.body;

const bikeToUpdate =await Bike.findByIdAndUpdate(id,{
    bikeName:bikeName,noOfWheels:noOfWheels,color:color,pedals:pedals
})

const newBike = await Bike.findById(id);
res.json({bike:newBike})

}


const deleteBike =  async(req,res)=>{
    const bikeId = req.params.id
    await Bike.deleteOne({
      id: bikeId
    }) 
res.json({success: " record deleted!"})
}

    

module.exports = {getAllBikeDetails,getOneBikeDetails,createBike,updateBike,deleteBike};