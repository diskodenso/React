import React, { useState, useEffect } from 'react'
import Character from "./Character.js";

function Home() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

  const fetchApi = () => {
    fetch("https://rickandmortyapi.com/api/character/")
        .then((response) => {
            console.log(response)
          return response.json()
        })
        .then((data) => {
            console.log(data)
            setCharacters(data.results)
            setLoading(false)
        });
      
  };

  useEffect(() => {
    fetchApi();
  });
return (
    <div>
        {!loading ? (
            characters.map((character, index) => {
                return <Character key={character.id} character={character}/>;
            })
        ) : (
            <p>loading..</p>
        )}
    </div>
);
        }
export default Home;
