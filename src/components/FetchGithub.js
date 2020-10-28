import React, { Component } from 'react'// destructuramos el Component

/**
 * Componente base a ser refactorizado
 * Nota: es muy mala practica colocar un componente directo en el index, ya que este deberia de estar
 * lo mas limpio posible y solo importar un componente que contine todo lo necesario
 */

 
// cuando se crea un componenete con clase, tardar mas en transpilar babel y tambien una funcion es mucho mas rapida de ejecutar
// a demas de que es mas legible, para evitar {React.Component} podemos importar el Component
export default class FetchGithub extends Component {

    constructor(props) {// no es necesario crear un constructor para definir el estado del componente
        super(props);
        this.state = {
            name: '',
            location: ''
        }
    }
    
    // tener una peticion en este ciclo de vida esta bien, ya que cuando se monta el componente la puede realizar !!
    componentDidMount() {
        // lo que no esta bien, es tener las peticiones de esta manera, ya que es muy poco escalable
      // y si queremos repetir esto mismo es muy tedioso y se vuelve aun peor si ya tenemos
      // esto en otros componentes y la url del api llega a cambiar, seria un dolor de cabeza
        fetch()
            .then(res => {
                this.setState({
                    name: res.name,
                    location: res.location
                })
            });
    }

    // El render deberia de ser una etiqueta wrapper que envuelva todo lo que queremos regresar
    // tambien se puede destructurar el state dentro del render para acceder a las propiedades mas facil
    // los ejemplos de mejora de este componente son: 
    // FetchGithudClass : este mismo es un componente con clases
    // FetchGithudFunction: este componente es una componente funcional usando hooks
    render() {
        return [
            <h1 key="name">{`${this.state.name}`}</h1>,
            <h1 key="location">{`${this.state.local}`}</h1>// la key {local} no existe en el state, es {location}
        ]
    }
}
