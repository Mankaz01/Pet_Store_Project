// Got this from React testing library with Jest

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// Mock the fetch API
global.fetch = jest.fn();

const mockPets = [
  {
    _id: '1',
    name: 'Buddy',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: 3,
    price: 500,
    description: 'Friendly and playful',
    image: '',
  },
  {
    _id: '2',
    name: 'Mittens',
    species: 'Cat',
    breed: 'Siamese',
    age: 2,
    price: 300,
    description: 'Loves cuddles',
    image: '',
  },
];

beforeEach(() => {
  fetch.mockClear();
});

test('renders and fetches pets', async () => {
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockPets,
  });

  render(<App />);

  // Check header
  expect(screen.getByTestId("title")).toBeInTheDocument();

  // Wait for pets to render
  await waitFor(() => expect(screen.getByText(/Buddy/i)).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText(/Mittens/i)).toBeInTheDocument());
});

test('adds a new pet', async () => {
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockPets,
  });

  render(<App />);

  // Wait for initial pets to render
  await waitFor(() => expect(screen.getByText(/Buddy/i)).toBeInTheDocument());

  // Click "Add New Pet" button
  const addButton = screen.getByText('+ Add New Pet');
  fireEvent.click(addButton);

  // Fill the AddPet form
  const nameInput = screen.getByPlaceholderText(/Pet Name/i);
  fireEvent.change(nameInput, { target: { value: 'Charlie' } });

  const speciesInput = screen.getByPlaceholderText(/Species/i);
  fireEvent.change(speciesInput, { target: { value: 'Dog' } });

  const submitButton = screen.getByText(/Add Pet/i);
  fireEvent.click(submitButton);

  // Mock POST request
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({
      _id: '3',
      name: 'Charlie',
      species: 'Dog',
      breed: 'Beagle',
      age: 2,
      price: 400,
      description: 'Friendly and active',
    }),
  });

  screen.debug()

  // // Check if the new pet is rendered
  await waitFor(() => expect(screen.getByTestId("name")).toBeInTheDocument());
  // screen.debug()

});

test('updates an existing pet', async () => {
  fetch
    .mockResolvedValueOnce({
      ok: true,
      json: async () => mockPets,
    })
    .mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        _id: '1',
        name: 'Buddy',
        species: 'Dog',
        breed: 'Golden Retriever',
        age: 4,
        price: 500,
        description: 'Friendly and playful',
      }),
    });

  render(<App />);

  // Wait for pets to render
  await waitFor(() => expect(screen.getByText(/Buddy/i)).toBeInTheDocument());

  // Click "Update" button for Buddy
  const updateButton = screen.getAllByText(/Update/i)[0];
  fireEvent.click(updateButton);

  // Update the form
  const ageInput = screen.getByDisplayValue('3');
  fireEvent.change(ageInput, { target: { value: '4' } });

  const saveButton = screen.getByText(/Save Changes/i);
  fireEvent.click(saveButton);

  // Check if Buddy's age is updated
  await waitFor(() => expect(screen.getByText(/4/i)).toBeInTheDocument());
});

test('deletes a pet', async () => {
  fetch
    .mockResolvedValueOnce({
      ok: true,
      json: async () => mockPets,
    })
    .mockResolvedValueOnce({
      ok: true,
    });

  render(<App />);

  // Wait for pets to render
  await waitFor(() => expect(screen.getByText(/Buddy/i)).toBeInTheDocument());

  // Click delete button for Buddy
  const deleteButton = screen.getAllByText(/Delete/i)[0];
  fireEvent.click(deleteButton);

  // Check if Buddy is removed
  await waitFor(() => expect(screen.queryByText(/Buddy/i)).not.toBeInTheDocument());
});
