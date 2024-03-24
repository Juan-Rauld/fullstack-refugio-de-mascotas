/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Create.css';

const Create = () => {
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const [petDescription, setPetDescription] = useState('');
    const [skillOne, setSkillOne] = useState('');
    const [skillTwo, setSkillTwo] = useState('');
    const [skillThree, setSkillThree] = useState('');

    const navigate = useNavigate();

    const crearMascota = async () => {
        // recordatorio de revisar bien las condiciones de los if... creo que pasé demasiado tiempo en esto...
        if (petName.length > 3 || petType.length > 3 || petDescription.length > 3) {
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
                alert('Mascota creada con éxito! 🎉')
                navigate('/');
            } catch (error) {
                console.error('¡Ups! Algo salió mal ' + error);
            }
        } else {
            alert('Por favor, llena todos los campos obligatorios.');
            alertaInputsVacios();
        }
    };


    return (
        <div className=''>
            <h2 className='mb-5'>¿Conoces a una mascota que necesita un nuevo hogar?</h2>
            <form className='gap-6'>
                <div className=' flex w-full gap-4'>
                    <div className='w-full'>
                        <div className='flex flex-col'>
                            <label htmlFor='petName' >Nombre:</label>
                            <input
                                placeholder="Nombre de la mascota"
                                type='text'
                                id='petName'
                                value={petName}
                                onChange={(e) => setPetName(e.target.value)}
                            />
                            {petName.length < 3 ? <p className='text-orange-700'>* campo obligatorio (min: 3)</p> : <br/>}
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='petType' >Tipo:</label>
                            <input
                                value={petType}
                                placeholder="ej: gato, perro, caballo, etc..."
                                type='text'
                                id='petType'
                                onChange={(e) => setPetType(e.target.value)}
                            />
                            {petType.length < 3 ? <p className='text-orange-700'>* campo obligatorio (min: 3)</p> : <br/>}
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='petDescription' >Descripción:</label>
                            <input
                                value={petDescription}
                                placeholder="ej: perrito muy juguetón, gatito chistoso, etc..."
                                type='text'
                                id='petDescription'
                                onChange={(e) => setPetDescription(e.target.value)}
                            />
                            {petDescription.length < 3 ? <p className='text-orange-700'>* campo obligatorio (min: 3)</p> : <br/>}
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <h3 className='mb-1'>Habilidades (opcional)</h3>
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
                    </div>
                </div>
                <button
                    className='mt-5 bg-red-500 hover:bg-red-600 display-block  py-2 px-4 rounded text-white text-center font-semibold'
                    onClick={(event) => {
                        event.preventDefault(); // evita que al enviar el formulario se recargue la página, eso le da tiempo a las funciones de alerta y navigate de accionar.
                        crearMascota();
                    }}
                >
                    Crear mascota
                </button>

            </form>
        </div>
    );
};

export default Create;
