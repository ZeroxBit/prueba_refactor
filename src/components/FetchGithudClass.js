import React from 'react';
import { getUser } from '../services/githubServices';

class FetchGithudClass extends React.Component {

    // ya no es necesario usar el constructor
    state = {
        name: '',
        location: ''
    }
    
    // aqui se llama a una funcion que realiza la peticion a un api
    componentDidMount() {
      this.handleGetUser();   
    }

    // Aqui solo se necesita llamar el ultimo path de la url 
    // a la que se esta apuntando, ya que todo lo de mas esta en la configuracion
    // y si se cambia algo, solo se cambia una sola vez
    async handleGetUser () {
      const result = await getUser("workshopsjsmvd");
      this.setState({
          name: result.name,
          location: result.location
        })
    }
    
    render() {
      const { name, location } = this.state; // se destructura para que sea mas facil acceder
      
      // cuando se hace una peticion, tarda en traer la data
      // y mientras se optienen los datos, hay que mostrar algo, a demas de que si intentamos
      // mostrar una variable que no esta definida, tendriamos un error!!
      return !name ? <p>Cargando...</p> : ( 
        <>
            <h2>Componente de clase</h2>
            <p>{`Nombre: ${name}`}</p>
            <p>{`País: ${location}`}</p>
        </>
      )
    }
  }

  export default FetchGithudClass;