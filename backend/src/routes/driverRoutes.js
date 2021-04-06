const express = require('express');
const bodyParser = require('body-parser')
const Driver = require('../models/Drivers');

const router = express.Router();

// Create a new Driver profile
router.post('/drivers', async (req, res) => {
    
    const driverData=req.body;
 // console.log('create new driver');

    try {
        const driver = new Driver (req.body);
        await driver.save();
        return res.status(201).send(driver);
    } catch (error) {
        res.status(400).send(error);
    }
});

// fetch all driver profiles
router.get("/drivers",(req,res)=>{
    Driver.find({})
    .then((driver)=>{
        return res.status(200).send(driver);
    })
    .catch((error)=>{
        return res.status(400).send(error);
    });
});


//Getting single driver profile

router.get("/drivers/:id", async(req,res)=>{
    const id=req.params.id;
    
    //console.log(req.params);
    try{
        const driver=await Driver.findById(id);
            if(!driver){
                return res.status(404).send({error: "Driver not found"});
            }
            return res.status(200).send(driver);
    }catch(error){
           return res.status(400).send(error);
     };
});


// editing a driver profile
router.patch("/drivers/:id", async(req,res)=>{
    const {bodastage}=req.body;
    const{id}=req.params;
    try{
        const driver=await Driver.findById(id);
        if(!driver){
            return res.status(404).send({error: "Driver not found"});
        }
        driver.bodastage=bodastage
        await driver.save();     
    }catch(error){
        res.status(400).send(error);   
    }
});

// Deleting a driver profile
router.delete("/drivers/:id", async(req,res)=>{
    const{id}=req.params;
    try{
        const response=await Drivers.findByIdAndDelete(id);
        res.status(200).send({message:"Driver deleted successfully"});
    }catch(error){
        res.status(400).send(error); 
    }
});


module.exports = router;