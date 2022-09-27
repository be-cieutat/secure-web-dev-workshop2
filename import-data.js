const mongoose = require('mongoose');
require('dotenv').config();
//console.log(process.env); //Debug for .env
const { Schema } = mongoose;

const LocationSchema = new Schema({
    filmType: String, // String is shorthand for {type: String}
    filmProducerName: String,
    endDate: {type: Date},
    filmName: String,
    district: String,
    geolocation: {coordinates : [Number],type :String},
    sourceLocationId: String,
    filmDirectorName: String,
    address: String,
    startDate: {type: Date},
    year: Number,
});

const Locations = mongoose.model('Locations',LocationSchema);




