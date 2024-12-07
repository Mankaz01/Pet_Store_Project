import React, { useState, useEffect } from "react";

const UpdatePet = ({ pet, updatePet }) => {
  const [updatedPet, setUpdatedPet] = useState(pet);

  useEffect(() => {
    setUpdatedPet(pet);
  }, [pet]);

  const handleChange = (e) => {
    setUpdatedPet({ ...updatedPet, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/pets/${updatedPet._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPet),
      });

      if (!response.ok) {
        throw new Error("Failed to update pet");
      }

      const updatedData = await response.json();
      updatePet(updatedData); // Update the state in App component
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Pet</h2>
      <input
        name="name"
        value={updatedPet.name || ""}
        onChange={handleChange}
        required
      />
      <input
        name="species"
        value={updatedPet.species || ""}
        onChange={handleChange}
        required
      />
      <input
        name="breed"
        value={updatedPet.breed || ""}
        onChange={handleChange}
        required
      />
      <input
        name="age"
        type="number"
        value={updatedPet.age || ""}
        onChange={handleChange}
        required
      />
      <input
        name="price"
        type="number"
        value={updatedPet.price || ""}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        value={updatedPet.description || ""}
        onChange={handleChange}
        required
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default UpdatePet;
