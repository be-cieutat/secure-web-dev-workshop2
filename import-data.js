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

async function main() {
    mongoose.connect(process.env.MONGO_URI).then(()=>console.log('yes !')
        )
        .catch(error => console.log(error))

}

const filmingLocations = require('./lieux-de-tournage-a-paris.json')


main()
