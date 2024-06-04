/* Archivo usado para desarrollo ignorar
import React, {useState} from 'react'


export const Primercomponente = () => {

    //let nombre = "David";
    let web = "Davidweb.cl";

    let cursos = [
        "Master en JavaScript",
        "Master en PHP",
        "Master en React",
        "Master en CSS"
    ];

    const [nombre, setNombre] = useState("David")

    const cambiarNombre = (nuevoNombre) =>{
        setNombre(nuevoNombre)
    }

  return (
    <div>
        <h1>Hola mundo</h1>
        <p>Mi nombre es: <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong></p>
        <p>Mi web es: {web}</p>

        <input type='text' onChange={ e => cambiarNombre(e.target.value)}></input>

        <button onClick={ e => cambiarNombre("David Carrasco")}> Cambiar Nombre</button>
        <button onClick={ e =>
            console.log("El valor guardado en tu estado es: ",nombre)
        }>Mostrar el valor de estado</button>

        <h2>Cursos:</h2>
        <ul>
            {
                cursos.map((curso,indice) => {
                    return (<li key={indice}> 
                        {curso}
                    </li>)
                })
            }
        </ul>
    </div>
  )
}

/*
export {DataFromAPI}
axios.get('https://api.chucknorris.io/jokes/search?query=David')
  .then(response => {
    //Accedemos a los datos de la respuesta.
    console.log(response.data);

    //Procesamos los datos
    const responseData = response.data;

    const dataCointainer = document.getElementById('data-container');
    //Mostrar los datos en el contenedor
    dataCointainer.innerHTML = <p>${responseData}</p>;
  })
  .catch(error => {
    // Manejar errores
    console.error(error);
  });
*/