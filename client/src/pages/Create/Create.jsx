/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import './Create.css';

const Create = () => {
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const [petDescription, setPetDescription] = useState('');
    const [skillOne, setSkillOne] = useState('');
    const [skillTwo, setSkillTwo] = useState('');
    const [skillThree, setSkillThree] = useState('');

    const crearMascota = async () => {
        // recordatorio de revisar bien las condiciones de los if... creo que pasé demasiado tiempo en esto...
        if (petName !== '' || petType !== '' || petDescription !== '') {
            const data = {
                petName: petName,
                petType: petType,
                petDescription: petDescription,
                skills: {
                    skillOne: skillOne,
                    skillTwo: skillTwo,
                    skillThree: skillThree
                }
            };
            console.log(data);

            try {
                const response = await axios.post('http://localhost:8080/pets/create',
                    data, {
                });
                console.log(response.data);
            } catch (error) {
                console.error('¡Ups! Algo salió mal: ' + error);
            }
        } else {
            alert('Por favor, llena todos los campos obligatorios.');
            alertaInputsVacios();
        }
    };

    return (
        <div>
            <form className='flex flex-col gap-3'>
                <div className='flex flex-col'>
                    <label htmlFor='petName' >Nombre:</label>
                    <input
                        placeholder="Nombre de la mascota"
                        type='text'
                        id='petName'
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                    />
                    {petName === '' ? <p className='text-orange-700'>* campo obligatorio</p> : null}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='petType' value={petType}>Tipo:</label>
                    <input
                        placeholder="ej: gato, perro, caballo, etc..."
                        type='text'
                        id='petType'
                        onChange={(e) => setPetType(e.target.value)}
                    />
                    {petType === '' ? <p className='text-orange-700'>* campo obligatorio</p> : null}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='petDescription' value={petDescription}>Descripción:</label>
                    <input
                        placeholder="ej: perrito muy juguetón, gatito chistoso, etc..."
                        type='text'
                        id='petDescription'
                        onChange={(e) => setPetDescription(e.target.value)}
                    />
                    {petDescription === '' ? <p className='text-orange-700'>* campo obligatorio</p> : null}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='skillOne' >Habilidad 1:</label>
                    <input type='text' id='skillOne' value={skillOne} onChange={(e) => setSkillOne(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='skillTwo' >Habilidad 2:</label>
                    <input type='text' id='skillTwo' value={skillTwo} onChange={(e) => setSkillTwo(e.target.value)} />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='skillThree' >Habilidad 3:</label>
                    <input type='text' id='skillThree' value={skillThree} onChange={(e) => setSkillThree(e.target.value)} />
                </div>
                <button
                    className='mt-2'
                    onClick={crearMascota}>
                    Crear mascota
                </button>
            </form>
        </div>
    );
};

export default Create;
