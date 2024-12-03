import React, { useState, useEffect } from "react";

const UpdatePet = ({ pet, updatePet }) => {
  const [updatedPet, setUpdatedPet] = useState(pet);

  useEffect(() => {
    setUpdatedPet(pet);
  }, [pet]);

  const handleChange = (e) => {
    setUpdatedPet({ ...updatedPet, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePet(updatedPet);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Pet</h2>
      <input
        name="name"
        value={updatedPet.name}
        onChange={handleChange}
        required
      />
      <input
        name="species"
        value={updatedPet.species}
        onChange={handleChange}
        required
      />
      <input
        name="breed"
        value={updatedPet.breed}
        onChange={handleChange}
        required
      />
      <input
        name="age"
        type="number"
        value={updatedPet.age}
        onChange={handleChange}
        required
      />
      <input
        name="price"
        type="number"
        value={updatedPet.price}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        value={updatedPet.description}
        onChange={handleChange}
        required
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default UpdatePet;
