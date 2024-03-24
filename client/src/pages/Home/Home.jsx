/* eslint-disable no-unused-vars */

/* El objetivo de esta página es mostrar una página de inicio 
con la lista de los perritos que buscan hogar.
Es decir todos los que ya están en la base de datos. */

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import React from 'react'

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
        <div>
            <div>Aquí va el header</div>
            <div>
                <div>
                    <div>
                        {mascota.length > 0 ? (
                            mascota.map((pet, index) => (
                                <div key={index}>
                                    <h2>{pet.petName}</h2>
                                    <p>{pet.petDescription}</p>
                                    {/* Renderiza cualquier otra propiedad que necesites */}
                                </div>
                            ))
                        ) : (
                            <p>{todosFueronAdoptados}</p>
                        )}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home;