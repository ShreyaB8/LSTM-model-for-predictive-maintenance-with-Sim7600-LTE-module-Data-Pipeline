var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
router.use(bodyParser.json());
const _sensor = require('../schema/mongo_schema');

// Post request function
const storeSensorData = async (req, res) => {
  // Change the default value into the  data's getting from the sensor. Fields should mention in the schema file
  const sensor_data = {
    thermistor: {
      therm_1: 10,
      therm_2: 15,
      therm_3: 30,
      therm_4: 40
    },
    dht_batterypack: 60,
    dht_ambient: 50,
    gyroscope: {
      gy_x: 30,
      gy_y: 60,
      gy_z: 20
    },
    acceleration: {
      acc_x: 3000,
      acc_y: -500,
      acc_z: 10
    },
    pressure: 20,
    altitude: 5,
    gas_sensor: {
      sensor_1: 15,
      sensor_2: 20
    }
  };
  // Store the Data in the DB
  const response = await _sensor.create({ ...sensor_data });
  console.log(response)
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
  res.send("test success get request");
});
router.post('/post', function(req, res, next){
  console.log(req.body);
  res.send("post request done");
})
//router.post('/post', storeSensorData);


module.exports = router;
