import React from 'react';
import { getUser } from '../services/githubServices';

class FetchGithudClass extends React.Component {

    state = {
        name: '',
        location: ''
    }
    
    async componentDidMount() {
        const result = await getUser("workshopsjsmvd");
        this.setState({
            name: result.name,
            location: result.location
          })
    }
    
    render() {
      const { name, location } = this.state;
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