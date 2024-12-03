import React, { useState } from "react";

const AddPet = ({ addPet }) => {
  const [pet, setPet] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPet(pet);
    setPet({ name: "", species: "", breed: "", age: "", price: "", description: "" }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Pet</h2>
      <input name="name" placeholder="Name" value={pet.name} onChange={handleChange} required />
      <input name="species" placeholder="Species" value={pet.species} onChange={handleChange} required />
      <input name="breed" placeholder="Breed" value={pet.breed} onChange={handleChange} required />
      <input name="age" placeholder="Age" type="number" value={pet.age} onChange={handleChange} required />
      <input name="price" placeholder="Price" type="number" value={pet.price} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={pet.description} onChange={handleChange} required />
      <button type="submit">Add Pet</button>
    </form>
  );
};

export default AddPet;
