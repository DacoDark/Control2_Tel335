import "./App.css";

import { useState } from "react";
import useAxios from "./components/useAxios";

function App() {
  const { response, error, loading, fetchData } = useAxios();
  const [queryInput, setQueryInput] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [MostrarFavorites, setShowFavorites] = useState(false); //Controlador favoritos

  const addToFavorites = (fact) => {
    setFavorites([...favorites, fact]);
  };

  const toggleFavorites = () => {
    setShowFavorites(!MostrarFavorites);
  };

  const fecthGETall = () => {
    fetchData({ url: "/jokes/random", method: "GET" });
  };

  const fecthGET = () => {
    if (queryInput.trim() !== "") {
      fetchData({ url: `/jokes/search?query=${queryInput}`, method: "GET" });
    }
  };

  return (
    <div className="App">
      <h1>TEL 335 Desarrollo aplicaciones Web</h1>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      
      <button className="buttonx" onClick={fecthGET}> Hacer GET </button>
      <input
        className="inputclass"
        type="text"
        value={queryInput}
        onChange={(e) => setQueryInput(e.target.value)}
        placeholder="Añadir texto para buscar broma"
      />
      <br></br>
       <div>
        {response ? (
          Array.isArray(response.result) ? (
            response.result.map((joke, index) => (
              <div key={joke.id} style={{ marginBottom: '20px' }}>
                <h2>Hecho increible {index + 1}:</h2>
                <p><strong>Categorias encontradas:</strong> {joke.categories.join(', ')}</p>
                <p><strong>Hito de chuck norris en el dia:</strong> {joke.created_at}</p>
                <p><strong>Acontenciomiento Increible:</strong> {joke.value}</p>
                <button className="like-button" onClick={() => addToFavorites(joke)}>Me gusta</button>  
              </div>
            ))
          ) : (
            <pre style={{ textAlign: 'left', overflow: 'auto', whiteSpace: 'pre-wrap' }}>
              {JSON.stringify(response, null, 2)}
            </pre>
          )
        ) : (
          <p></p>
        )}
        </div>
      <button className="favoritebutton"onClick={toggleFavorites}>Ver Favoritos</button>
      {MostrarFavorites && (
        <div>
          <h2>Favoritos:</h2>
          {favorites.map((favorite, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h2>Fact {index + 1}:</h2>
              <p>
                <strong>Categorias encontradas:</strong> {favorite.categories.join(", ")}
              </p>
              <p>
                <strong>Hito de chuck norris en el dia:</strong> {favorite.created_at}
              </p>
              <p>
                <strong>Acontenciomiento Increible:</strong> {favorite.value}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;