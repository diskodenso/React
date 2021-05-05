import React, { useState, useEffect } from 'react'

function Home() {
    const [characters, setCharacters] = useState([]);

  const fetchApi = () => {
    fetch("https://rickandmortyapi.com/api/character/")
        .then((response) => {
            console.log(response)
          return response.json()
        })
        .then((data) => {
            console.log(data)
            setCharacters(data.results)
        });
      
  };

  useEffect(() => {
    fetchApi();
  });
return (
    <div>
        {characters.length !== 0 ? (
            characters.map((character) => {
                return <p>{character.name}</p>;
            })
        ) : (
            <p>loading..</p>
        )}
    </div>
);
        }
export default Home;
