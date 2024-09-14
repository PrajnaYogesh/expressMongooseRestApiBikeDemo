const express= require('express');
const router = express.Router();
const bikeController = require('../controllers/bikeController')

router.get('/bike',bikeController.getAllBikeDetails);
router.get('/bike/:id',bikeController.getOneBikeDetails );
router.post('/bike/add',bikeController.createBike);
router.put('/bike/:id',bikeController.updateBike);
router.delete('/bike/delete/:id',bikeController.deleteBike)

module.exports=router;