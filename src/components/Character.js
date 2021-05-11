import React, {useState, useEffect} from 'react'
import "./Card.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Character(props) {
    const character = props.character;
     const [activeModal, setActiveModal] = useState(false);

  const handleClose = () => setActiveModal(false);
  const handleShow = (characterId) => setActiveModal(characterId);
    return (
        <div className='flip-card'>
            <div className="flip-card-inner">
            <div className="image-container">
                <img src={character.image} alt=" " />
            </div> 
                <div className="flip-card-back">
                    <h3>{props.character.name}</h3>
                     <Button variant="primary" onClick={() => handleShow(character.id)}>
                Launch demo modal
              </Button>

              <Modal show={character.id === activeModal} onHide={handleClose}>
                        <Modal.Body>
                            <h3>{character.name}</h3>
                            <h4>{character.location.name}</h4>
                        <img src={character.image} alt=" "/>
                        </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
        </div>
            {/* <img src={character.image} alt=" " /> */}
            {/* <p>{props.character.name}</p> */}
            </div>
    )
}
export default Character;