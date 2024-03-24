import * as petsController from '../controller/petsController.js';
import express from 'express';

const router = express.Router();

router.get('/pets', petsController.getAllPets); // Cambiado de getPets a getAllPets
router.get('/pets/:id', petsController.getPetById);
router.put('/pets/:id', petsController.updatePetById);
router.post('/pets/create', petsController.createPet);
router.delete('/pets/:id', petsController.deletePetById);

export default router;