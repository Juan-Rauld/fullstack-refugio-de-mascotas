/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
    // variables de todos los atirbutos de la mascota
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const [petDescription, setPetDescription] = useState('');
    const [skillOne, setSkillOne] = useState('');
    const [skillTwo, setSkillTwo] = useState('');
    const [skillThree, setSkillThree] = useState('');

    const params = useParams()
    const [mascota, setMascota] = useState({}) // inicializamos el estado de la mascota como un objeto vacío
    const navigate = useNavigate()

    const getMascota = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/pets/${params.id}`)
            console.log(response.data)
            // Almacenar los datos de la mascota en el estado
            setMascota(response.data)

            setPetName(response.data.petName)
            setPetType(response.data.petType)
            setPetDescription(response.data.petDescription)
            setSkillOne(response.data.skills.skillOne)
            setSkillTwo(response.data.skills.skillTwo)
            setSkillThree(response.data.skills.skillThree)

        }
        catch (error) {
            console.error('Error:', error)
        }
    }

    useEffect(() => {
        getMascota()
    }, [])

    const editarMascota = async () => {
        if (petName.length > 2 && petType.length > 2 && petDescription.length > 2) {

            console.log(params.id + 'este es el id de la mascota a Editar.')
            const response = await axios.put(`http://localhost:8080/pets/${params.id}`, {
                //nota https://masteringjs.io/tutorials/axios/put
                petName: petName,
                petType: petType,
                petDescription: petDescription,
                skills: {
                    skillOne: skillOne,
                    skillTwo: skillTwo,
                    skillThree: skillThree
                }
            })
            alert('Mascota editada con éxito! 🎉')
            navigate('/')
        } else {
            alert('Son mínimo 3 caractéres')
        }
    }

    return (
        <div className=''>
            <h2 className='mb-5'>Edita a <span className='underline'>{mascota.petName}</span></h2>
            <form className='gap-6'>
                <div className=' flex w-full gap-4'>
                    <div className='w-full'>
                        <div className='flex flex-col'>
                            <label htmlFor='petName'>Nombre:</label>
                            <input
                                placeholder="Nombre de la mascota"
                                type='text'
                                id='petName'
                                value={petName}
                                onChange={(e) => setPetName(e.target.value)}
                            />
                            {petName.length < 3 ? <p className='text-orange-700'>* campo obligatorio (min: 3)</p> : <br />}

                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='petType' >Tipo:</label>
                            <input
                                placeholder="ej: gato, perro, caballo, etc..."
                                type='text'
                                id='petType'
                                value={petType}
                                onChange={(e) => setPetType(e.target.value)}
                            />
                            {petType.length < 3 ? <p className='text-orange-700'>* campo obligatorio (min: 3)</p> : <br />}

                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='petDescription' >Descripción:</label>
                            <input
                                value={petDescription}
                                placeholder={params.petDescription}
                                type='text'
                                id='petDescription'
                                onChange={(e) => setPetDescription(e.target.value)}
                            />
                            {petDescription.length < 3 ? <p className='text-orange-700'>* campo obligatorio (min: 3)</p> : <br />}

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
                        editarMascota();
                    }}
                >
                    Editar a <span className='underline'>{mascota.petName}</span>
                </button>
            </form>
        </div>
    )
}

export default Edit;