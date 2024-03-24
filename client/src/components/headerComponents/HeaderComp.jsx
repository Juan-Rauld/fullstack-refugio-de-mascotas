/* eslint-disable no-unused-vars */
/* 
Genera la constante la función del mensaje que se puede actualizar según la página donde se esté. 
Llegué a esta solución una vez que volviendo desde las otras páginas, el mensaje no se actualizaba
quedaba guardada la variable de mensaje con el mensaje anterior), o sea no refrescaba).
*/
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const HeaderComp = () => {
    const [message, setMessage] = useState('');
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if (path === '/' || path === '/Home') {
            setMessage('Agregar una mascota al refugio');
        } else {
            setMessage('Volver al inicio');
        }
    }, [location]);

    const handleButtonClick = () => {
        if (location.pathname === '/' || location.pathname === '/Home') {
            window.location = '/pets/create';
        } else {
            window.location = '/';
        }
    };

    return (
        <>
            <div className='flex justify-between pb-8'>
                <h1 className='text-2xl'>Pet Shelter</h1>
                <button className='btn' onClick={handleButtonClick}>
                    {message}
                </button>
            </div>
        </>
    );
};

export default HeaderComp;