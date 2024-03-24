/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Detail.css'

const PetDetail = () => {

    // generar una función que vaya a buscar con axios el detalle de un perrito en particular según el id que se le pase
    // y mostrarlo en pantalla
    // para esto necesitamos un useEffect que se ejecute al cargar la página
    // y una función que se ejecute al cargar la página

    // primero debemos generar una constante con todos los parametros que se le pasan a la página
    const params = useParams()
    console.log(params.id + 'este es el id') // confirma que llega el id

    const [mascota, setMascota] = useState({}) // inicializamos el estado de la mascota como un objeto vacío

    const navigate = useNavigate()

    const getMascota = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/pets/${params.id}`)
            console.log(response.data)
            // Almacenar los datos de la mascota en el estado
            setMascota(response.data)
        } catch (error) {
            console.error('cresta! no funcionó, un 404!' + error)
        }
    }

    // llama a getMascota cuando el componente se carga
    useEffect(() => {
        getMascota()
    }, [])

    // función para adoptar a la mascota
    const adoptarMascota = async () => {
        console.log(params.id + 'este es el id de la mascota a ELIMINAR!')
        const response = await axios.delete(`http://localhost:8080/pets/delete/${params.id}`)
        alert(mascota.petName + ' adoptada con éxito! 🎉')
        navigate('/')

    }


    return (
        <div>
            <div className='flex w-full justify-between align-middle mb-5'>
                <h2>Información sobre: {mascota.petName}</h2>
                <button onClick={adoptarMascota} className='bg-red-500 hover:bg-red-600'>
                    Adopta a <span className='underline bold'>{mascota.petName}</span>
                </button>
            </div>
            <table className='table-fixed w-full'>
                <tbody>
                    <tr>
                        <th>Tipo</th>
                        <td>{mascota.petType}</td>
                    </tr>
                    <tr>

                        <th>Descripción</th>
                        <td>{mascota.petDescription}</td>
                    </tr>
                    <tr>
                        <th>Habilidades</th>
                        <td>
                        {mascota.skills && (mascota.skills.skillOne || mascota.skills.skillTwo || mascota.skills.skillThree) ? (
                                <ul>
                                    <li>{mascota.skills.skillOne}</li>
                                    <li>{mascota.skills.skillTwo}</li>
                                    <li>{mascota.skills.skillThree}</li>
                                </ul>
                            ) : (
                                <p>No registradas</p>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PetDetail;