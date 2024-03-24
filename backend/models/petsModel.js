import { Schema, model } from 'mongoose';

const petSchema = new Schema({
    petName: {
        type: String,
        required: true,
        unique: true
    },
    petType: {
        type: String,
        required: true
    },
    petDescription: {
        type: String,
        required: true
    },
    skills: {
        skillOne: {
            type: String
        },
        skillTwo: {
            type: String
        },
        skillThree: {
            type: String
        }
    }
});

const PetsModel = model('PetsModel', petSchema);

export default PetsModel;