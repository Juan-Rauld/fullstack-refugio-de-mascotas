/* eslint-disable no-unused-vars */

/* El objetivo de esta página es mostrar una página de inicio 
con la lista de los perritos que buscan hogar.
Es decir todos los que ya están en la base de datos. */

import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Home.css'

const Home = () => {

    //genera la variable navigate que permite navegar con botones.
    const navigate = useNavigate()

    // necesitamos generar la variable que contendrá la lista de perritos (el array inicialmente parte vacío)
    const [mascota, setMascota] = useState(['Afortunadamente todos han sido adoptados!']) // esto ya no es necesario ya que agregué el mensaje en la línea 54


    // necesitamos generar la función que obtendrá la lista de perritos (con axios)
    const getMascotas = async () => {
        try {
            const response = await axios.get('http://localhost:8080/pets')
            console.log(response.data)
            setMascota(response.data)
        } catch (error) {
            console.error('cresta! no funcionó' + error)
        }
    }

    useEffect(() => {
        getMascotas();
    }, []);

    const todosFueronAdoptados = 'Afortunadamente todos han sido adoptados!'

    return (
        <div className='w-full'>
            <div>
                <div>
                    <div>
                        <table className='table-fixed w-full '>
                            <thead className=''>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Tipo</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mascota.length > 0 ? (
                                    mascota.map((pet, index) => (
                                        <tr key={index}>
                                            <td className=' '>{pet.petName}</td>
                                            <td>{pet.petType}</td>
                                            <td className='flex justify-around'>
                                                <button onClick={() => navigate(`/pets/detail/${pet._id}`)}>Ver más</button>
                                                <button onClick={() => navigate(`/pets/edit/${pet._id}`)}>Editar</button>
                                            </td>

                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className='text-center'>{todosFueronAdoptados}</td>
                                    </tr>

                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;