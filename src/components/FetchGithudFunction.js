import React, {useEffect, useState} from 'react'
import { getUser } from '../services/githubServices';


// Ejemplo de el Refactor con un componente funcional
const FetchGithudFunction = () => {

    // este hook {useState} reemplaza el state, de los componentes con clase
    // y nos permite tener un estado en nuestro componente
    const [user, setUser] = useState(null);

    // con este hook {useEffect}, podemos emular los ciclos de vida de los componentes con clase
    // este por ejemplo esta emulando el {componentDidMount}
    useEffect(() => {
        handleGetUser()
    }, [])

    const handleGetUser = async () => {
        // como mencione en el ejemplo de componente con clase,
        // si se quiere reutizar una peticion, la manera de tenerlo todo junto
        // como en el componente de ejemplo, no es la mejor manera
        const { name, location } =  await getUser("workshopsjsmvd");
        
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
