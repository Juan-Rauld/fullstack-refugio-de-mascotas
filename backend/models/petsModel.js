import { Schema, model } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';


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

petSchema.plugin(uniqueValidator, { message: 'Error, el nombre de la mascota {VALUE} ya existe.' });


const PetsModel = model('PetsModel', petSchema);

export default PetsModel;