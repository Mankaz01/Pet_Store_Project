import React, { useState } from "react";
import PetList from "./View/View";
import AddPet from "./Add/Add";
import UpdatePet from "./Update/Update";
import "./App.css"; // Import the CSS

const App = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);

  const addPet = (newPet) => {
    setPets([...pets, { ...newPet, id: Date.now() }]);
  };

  const updatePet = (updatedPet) => {
    setPets(pets.map((pet) => (pet.id === updatedPet.id ? updatedPet : pet)));
    setSelectedPet(null);
  };

  const deletePet = (id) => {
    setPets(pets.filter((pet) => pet.id !== id));
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>🐾 PETOPIA 🐾</h1>
      </header>

      <main className="content">
        <AddPet addPet={addPet} />
        <PetList
          pets={pets}
          deletePet={deletePet}
          setSelectedPet={setSelectedPet}
        />
        {selectedPet && <UpdatePet pet={selectedPet} updatePet={updatePet} />}
      </main>

      <footer className="footer">
        <p>&copy; 2024 Petopia. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
