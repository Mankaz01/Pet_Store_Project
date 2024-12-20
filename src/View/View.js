import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa"; // Importing icons
import Pets from "../assets/Images/Pets.jpg"

const PetList = ({ pets, deletePet, setSelectedPet }) => {

  return (
    <ul className="pet-list">
      {pets.map((pet) => (
        <li key={pet.id}>
          <div className="pet-info">
            <img
              src={pet.image || Pets}
              alt={pet.name || "Pet"}
              className="pet-image"
            />
            <div>
              <h3>{pet.name}</h3>
              <p>
                <strong>Species:</strong> {pet.species}
              </p>
              <p>
                <strong>Breed:</strong> {pet.breed}
              </p>
              <p>
                <strong>Age:</strong> {pet.age}
              </p>
              <p>
                <strong>Price:</strong> ${pet.price}
              </p>
            </div>
          </div>
          <div className="action-buttons">
            <button onClick={() => setSelectedPet(pet)}>
              <FaEdit /> Update
            </button>
            <button onClick={() => deletePet(pet._id)}>
              <FaTrash /> Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PetList;
