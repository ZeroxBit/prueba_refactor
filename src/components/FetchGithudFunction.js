import React, {useEffect, useState} from 'react'
import { getUser } from '../services/githubServices';

const FetchGithudFunction = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        handleGetUser()
    }, [])

    const handleGetUser = async () => {
        const {name, location} =  await getUser("workshopsjsmvd");
        
        setUser({ name, location })
    }

    return !user ? <p>Cargando...</p> : (
        <>
            <h2>Componente funcional</h2>
            <p>{`Nombre: ${user.name}`}</p>
            <p>{`País: ${user.location}`}</p>
        </>
    )
}

export default FetchGithudFunction;
