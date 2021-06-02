const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
  thermistor: {
    therm_1: {
      type: String
    },
    therm_2: {
      type: String
    },
    therm_3: {
      type: String
    },
    therm_4: {
      type: String
    }
  },
  dht_batterypack: {
    type: String
  },
  dht_ambient: {
    type: String
  },
  gyroscope: {
    gy_x: {
      type: String
    },
    gy_y: {
      type: String
    },
    gy_z: {
      type: String
    }
  },
  acceleration: {
    acc_x: {
      type: String
    },
    acc_y: {
      type: String
    },
    acc_z: {
      type: String
    }
  },
  pressure: {
    type: String
  },
  altitude: {
    type: String
  },
  gas_sensor: {
    sensor_1: {
      type: String
    },
    sensor_2: {
      type: String
    }
  }
});

_sensor = mongoose.model( 'sensorData', sensorSchema );

module.exports = _sensor;