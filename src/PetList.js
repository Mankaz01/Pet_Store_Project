import React from "react";

const PetList = ({ pets, deletePet, setSelectedPet }) => {
  return (
    <div>
      <h2>Pet List</h2>
      {pets.length === 0 ? (
        <p>No pets available. Add some pets!</p>
      ) : (
        <ul>
          {pets.map((pet) => (
            <li key={pet.id}>
              <h3>{pet.name}</h3>
              <p>
                {pet.species} - {pet.breed}
              </p>
              <p>Age: {pet.age} | Price: ${pet.price}</p>
              <p>{pet.description}</p>
              <button onClick={() => deletePet(pet.id)}>Delete</button>
              <button onClick={() => setSelectedPet(pet)}>Update</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PetList;
