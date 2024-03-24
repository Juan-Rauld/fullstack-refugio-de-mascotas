import PetsModel from '../models/petsModel.js';

// crear una mascota
const createPet = async (req, res) => {
    try {
        const { petName, petType, petDescription, skills } = req.body;
        const newPet = new PetsModel({ petName, petType, petDescription, skills });
        await newPet.save();
        res.status(201).json(newPet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// traer y consultar todas las mascotas
const getAllPets = async (req, res) => {
    try {
        const pets = await PetsModel.find();
        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// traer mascota según su Id
const getPetById = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await PetsModel.findById(id);
        if (!pet) {
            return res.status(404).json({ message: 'Pet not found' });
        }
        res.status(200).json(pet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// actualizar mascota según su Id
const updatePetById = async (req, res) => {
    try {
        const { id } = req.params;
        const { petName, petType, petDescription, skills } = req.body;
        const updatedPet = await PetsModel.findByIdAndUpdate(
            id,
            { petName, petType, petDescription, skills },
            { new: true }
        );
        if (!updatedPet) {
            return res.status(404).json({ message: 'Mascota no encontrada' });
        }
        res.status(200).json(updatedPet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// eliminar mascota según su Id
const deletePetById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPet = await PetsModel.findByIdAndDelete(id);
        if (!deletedPet) {
            return res.status(404).json({ message: 'Mascota no encontrado' });
        }
        res.status(200).json({ message: deletedPet.petName + ' está muy feliz!'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { createPet, getAllPets, getPetById, updatePetById, deletePetById };