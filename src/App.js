import React, { useState, useEffect } from "react";
import PetList from "./View/View";
import AddPet from "./Add/Add";
import UpdatePet from "./Update/Update";
import petsupplies from "./assets/Images/petsupplies.jpg"
import BackgroundImg from "./assets/Images/BackgroundImg.jpg"
import "./App.css";

const App = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [showAddPet, setShowAddPet] = useState(false);

  // Fetch all pets from the backend
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch("http://localhost:8000/pets");
        if (!response.ok) {
          throw new Error("Failed to fetch pets");
        }
        const data = await response.json();
        setPets(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPets();
  }, []);

  // Add a new pet
  const addPet = (newPet) => {
    setPets([...pets, newPet]);
    setShowAddPet(false); // Hide AddPet after adding
  };

  // Update an existing pet
  const updatePet = (updatedPet) => {
    setPets(pets.map((pet) => (pet._id === updatedPet._id ? updatedPet : pet)));
    setSelectedPet(null);
  };

  // Delete a pet
  const deletePet = async (id) => {
    console.log(id,"id")
    try {
      const response = await fetch(`http://localhost:8000/pets/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete pet");
      }
      setPets(pets.filter((pet) => pet._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>🐾 PETOPIA 🐾</h1>
      </header>

      <main className="content">
        {!showAddPet && !selectedPet && (
          <>
          <div className="desc">
          <div>
            <h2>🐾 PETOPIA 🐾</h2>
            <p>
              Welcome to Petopia, your one-stop destination for adopting, caring
              for, and celebrating pets. Our platform connects pet lovers with
              adorable animals looking for a forever home. Whether you're
              looking for a playful puppy, a friendly kitten, or other furry
              friends, Petopia is here to help you find your perfect companion.
            </p>
            <button className="add-button" onClick={() => setShowAddPet(true)}>
              + Add New Pet
            </button></div>
            <div><img src={petsupplies} className="img"/></div></div>
            <PetList
              pets={pets}
              deletePet={deletePet}
              setSelectedPet={setSelectedPet}
            />
          </>
        )}

        {showAddPet && <AddPet addPet={addPet} />}
        {selectedPet && <UpdatePet pet={selectedPet} updatePet={updatePet} />}
      </main>
    </div>
  );
};

export default App;
