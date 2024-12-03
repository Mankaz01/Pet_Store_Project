import React, { useState } from "react";

const AddPet = ({ addPet }) => {
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPet(formData);
    setFormData({
      name: "",
      species: "",
      breed: "",
      age: "",
      price: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Pet</h2>
      <input
        type="text"
        name="name"
        placeholder="Pet Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="species"
        placeholder="Species"
        value={formData.species}
        onChange={handleChange}
      />
      <input
        type="text"
        name="breed"
        placeholder="Breed"
        value={formData.breed}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <button type="submit">Add Pet</button>
    </form>
  );
};

export default AddPet;
