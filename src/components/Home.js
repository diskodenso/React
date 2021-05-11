import React, { useState, useEffect } from 'react'
import Character from "./Character.js";
import "./Card.css";


function Home() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    
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
  },[]);
    function handleOnChange(e) {
        setSearchTerm(e.target.value)
    } console.log(characters.filter((character) => {
               return character.name.includes(searchTerm)
            }));
    return (
    <div> 
        <input type="text" placeholder="Search..." onChange={handleOnChange} value={searchTerm}/>
    <div className='characters-container'>
        {!loading ? (
            characters.filter((character) => {
               return character.name.toLowerCase().includes(searchTerm.toLowerCase())
            })
                .map((character, index) => {
                    return <Character key={character.id} character={character} />;

            })
        ) : (
            <h2>loading..</h2>
        )}
    </div>
        </div>
);
        }
export default Home;
