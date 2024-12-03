import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa"; // Importing icons

const PetList = ({ pets, deletePet, setSelectedPet }) => {
  return (
    <ul className="pet-list">
      {pets.map((pet) => (
        <li key={pet.id}>
          <div className="pet-info">
            <img
              src={pet.image || "https://via.placeholder.com/100"} // Placeholder for no image
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
            <button onClick={() => deletePet(pet.id)}>
              <FaTrash /> Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PetList;
