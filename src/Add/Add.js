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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/pets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add pet");
      }

      const newPet = await response.json();
      addPet(newPet); // Update the local state
      setFormData({
        name: "",
        species: "",
        breed: "",
        age: "",
        price: "",
        description: "",
        image: "",
      });
    } catch (err) {
      console.error(err);
    }
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
        data-testId="name"
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
      <input
        type="text"
        name="image"
        placeholder="Image"
        value={formData.image}
        onChange={handleChange}
      />
      <button type="submit">Add Pet</button>
    </form>
  );
};

export default AddPet;
