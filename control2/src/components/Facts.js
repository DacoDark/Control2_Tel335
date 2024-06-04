import React, {useState} from 'react'
import axios from 'axios';

//Realizamos una solicitud GET a una API
const DataFromAPI = async () => {
    try {  
        //Luego tenemos que cambiar para que en query reciba un parametro.
        const response = await axios.get('https://api.chucknorris.io/jokes/search?query=David')
        return response.data;
    } catch (error){
        console.error(error);
        return null;
    }
};

DataFromAPI()
  .then(response => {
    const objectList = response.result; //Aquí obtenemos la respuesta del get
    
    
    const categoria = objectList[0].categories
    const fechaCreada = objectList[0].created_at
    const Facto = objectList[0].value
    
    console.log(categoria)
    console.log(fechaCreada)
    console.log(Facto)

   
  })
  .catch(error => {
    console.error(error)
  })

export const Facts = (data) => {

    //Definimos un nombre, en este caso el fact que va a ser usado en la query posteriormente
    const [fact, setFacts] = useState("David")

    const cambiarFacts = (nuevoNombre) =>{
        setFacts(nuevoNombre)
    }


  return (
    <div>
        <h1>Consulte el Facts</h1>
        <p> <strong className={fact.length >= 4 ? 'verde' : 'rojo'}>{fact}</strong></p>

        <input type='text' onChange={ e => cambiarFacts(e.target.value)}></input>

        <button onClick={ e => cambiarFacts("David Carrasco")}> Buscar Facts</button>
        <button onClick={ e =>
            console.log("El valor guardado en tu estado es: ",fact)
        }>Mostrar el valor de estado</button>
    </div>
  )
}


export {DataFromAPI}
