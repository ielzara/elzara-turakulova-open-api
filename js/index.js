// Global variables
let allBreeds = [];
let currentBreedIndex = 0;

// Function to set the current year in the footer
function setCurrentYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').textContent = currentYear;
}

// Function to fetch all cat breeds
async function fetchBreeds() {
  try {
    const response = await fetch(
      'https://api.thecatapi.com/v1/breeds',
      {
        headers: {
          'x-api-key': config.API_KEY,
        },
      },
    );
    if (!response.ok) {
      throw new Error('Failed to fetch breeds');
    }
    allBreeds = await response.json();
    displayBreed(allBreeds[0]); // Display the first breed by default
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('breed-info').innerHTML =
      '<p>Failed to load cat breeds. Please try again later.</p>';
  }
}

// Function to display a breed
async function displayBreed(breed) {
  const breedImage = document.getElementById('breed-image');
  const breedName = document.getElementById('breed-name');
  const breedDescription = document.getElementById(
    'breed-description',
  );
  const breedCharacteristics = document.getElementById(
    'breed-characteristics',
  );

  // Clear previous content
  breedImage.innerHTML = '';
  breedCharacteristics.innerHTML = '';

  // Set new content
  breedName.textContent = breed.name;
  breedDescription.textContent = breed.description;

  // Fetch and add image
  try {
    const imageResponse = await fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breed.id}`,
      {
        headers: {
          'x-api-key': config.API_KEY,
        },
      },
    );
    if (!imageResponse.ok)
      throw new Error('Failed to fetch breed image');
    const imageData = await imageResponse.json();
    if (imageData.length > 0) {
      const img = document.createElement('img');
      img.src = imageData[0].url;
      img.alt = breed.name;
      breedImage.appendChild(img);
    }
  } catch (error) {
    console.error('Error fetching breed image:', error);
    breedImage.innerHTML = '<p>Image not available</p>';
  }

  // Add other characteristics
  const characteristics = [
    { label: 'Temperament', value: breed.temperament },
    { label: 'Origin', value: breed.origin },
    { label: 'Life Span', value: breed.life_span },
    { label: 'Weight', value: breed.weight.metric + ' kg' },
  ];

  characteristics.forEach((char) => {
    if (char.value) {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${char.label}:</strong> ${char.value}`;
      breedCharacteristics.appendChild(li);
    }
  });
}

// Function to handle breed search
function handleSearch(event) {
  event.preventDefault();
  const searchTerm = document
    .getElementById('breed-search')
    .value.toLowerCase();
  const foundBreed = allBreeds.find((breed) =>
    breed.name.toLowerCase().includes(searchTerm),
  );

  if (foundBreed) {
    currentBreedIndex = allBreeds.indexOf(foundBreed);
    displayBreed(foundBreed);
  } else {
    document.getElementById('breed-info').innerHTML =
      '<p>No breed found. Please try another search.</p>';
  }
}

// Function to navigate to the previous breed
function previousBreed() {
  currentBreedIndex =
    (currentBreedIndex - 1 + allBreeds.length) % allBreeds.length;
  displayBreed(allBreeds[currentBreedIndex]);
}

// Function to navigate to the next breed
function nextBreed() {
  currentBreedIndex = (currentBreedIndex + 1) % allBreeds.length;
  displayBreed(allBreeds[currentBreedIndex]);
}

// Function to fetch and display a random cat image
async function fetchRandomCat() {
  try {
    const response = await fetch(
      'https://api.thecatapi.com/v1/images/search',
      {
        headers: {
          'x-api-key': config.API_KEY,
        },
      },
    );
    if (!response.ok) {
      throw new Error('Failed to fetch random cat');
    }
    const [data] = await response.json();
    const randomCatContainer = document.getElementById(
      'random-cat-image',
    );
    randomCatContainer.innerHTML = `<img src="${data.url}" alt="Random Cat">`;
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('random-cat-image').innerHTML =
      '<p>Failed to load random cat image.</p>';
  }
}

// Function to initialize all JavaScript functionality
function initializeApp() {
  setCurrentYear();
  fetchBreeds();
  fetchRandomCat();

  // Event listeners
  document
    .getElementById('search-form')
    .addEventListener('submit', handleSearch);
  document
    .getElementById('prev-breed')
    .addEventListener('click', previousBreed);
  document
    .getElementById('next-breed')
    .addEventListener('click', nextBreed);
}

// Call the initialize function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Refresh random cat image every 5 minutes
setInterval(fetchRandomCat, 5 * 60 * 1000);
