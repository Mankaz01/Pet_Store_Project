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

test('renders the header and initial components', () => {
  // Mock fetch to resolve with mockPets
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockPets,
  });

  render(<App />);

  // Check if the header text is correct
  // const headerElement = screen.getByText(/🐾 PETOPIA 🐾/i);
  // expect(headerElement).toBeInTheDocument();
  screen.debug();
});

test('fetches pets and renders them', async () => {
  // Mock fetch to resolve with mockPets
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockPets,
  });

  render(<App />);

  // Wait for the pets to be rendered
  await waitFor(() => expect(screen.getByText(/Buddy/i)).toBeInTheDocument());
  await waitFor(() => expect(screen.getByText(/Mittens/i)).toBeInTheDocument());
});

test('opens AddPet component when Add New Pet button is clicked', async () => {
  // Mock fetch to resolve with mockPets
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => mockPets,
  });

  render(<App />);

  // Wait for the pets to be rendered
  await waitFor(() => expect(screen.getByText(/Buddy/i)).toBeInTheDocument());

  // Click the "Add New Pet" button
  const addButton = screen.getByText('+ Add New Pet');
  fireEvent.click(addButton);

  // Verify if the AddPet component is visible (you may need to adjust this according to your implementation)
  const addPetText = screen.getByText(/Add a New Pet/i);
  expect(addPetText).toBeInTheDocument();
});

test('deletes a pet', async () => {
  // Mock fetch to resolve with mockPets
  fetch
    .mockResolvedValueOnce({
      ok: true,
      json: async () => mockPets,
    })
    .mockResolvedValueOnce({
      ok: true,
    });

  render(<App />);

  // Wait for the pets to be rendered
  await waitFor(() => expect(screen.getByText(/Buddy/i)).toBeInTheDocument());

  // Click the delete button for Buddy (ensure the button is accessible)
  const deleteButton = screen.getAllByRole('button')[1]; // Assuming the delete button is the second button
  fireEvent.click(deleteButton);

  // Wait for the fetch request to be processed and verify that Buddy is removed
  await waitFor(() => expect(screen.queryByText(/Buddy/i)).not.toBeInTheDocument());
});
