const API_BASE_URL = 'http://localhost:3000/api';
const BLOB_ID = 'pets';

let pets = [];
let currentIndex = 0;
const petCardsContainer = document.getElementById('petCardsContainer');
const petModal = new bootstrap.Modal(document.getElementById('petModal'));
const createModal = new bootstrap.Modal(document.getElementById('createModal'));

async function fetchPets() {
    try {
        const response = await fetch(`${API_BASE_URL}/${BLOB_ID}?_=${Date.now()}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();

        if (!Array.isArray(data)) {
            throw new Error("Expected array but got:", typeof data);
        }

        if (data.length > 0 && !data[0].id) {
            throw new Error("Malformed pet data - missing required fields");
        }

        return data;
    } catch (error) {
        console.error("[fetchPets] Error:", error);
        return [];
    }
}

async function updatePetsData() {
    try {
        const response = await fetch(`${API_BASE_URL}/${BLOB_ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pets)
        });

        if (!response.ok) {
            throw new Error('Failed to update pets data');
        }
    } catch (error) {
        console.error('Error updating pets data:', error);
    }
}

function renderPetCard(pet, index) {
    const genderIcon = pet.gender === 'female' ? '&#9792;' : '&#9794;';
    const card = document.createElement('div');
    card.className = 'col';
    card.innerHTML = `
    <div class="card" data-index="${index}">
      <img src="${pet.image}" class="card-img-top pet-image" alt="${pet.name}">
      <div class="card-body">
        <h5 class="card-title">${pet.name} <span class="gender-${pet.gender}">${genderIcon}</span></h5>
        <span class="badge bg-info text-dark">${pet.type}</span>
        <span class="badge bg-info text-dark">${pet.age}</span>
        <button class="btn btn-sm btn-danger mt-2 delete-btn">Delete</button>
      </div>
    </div>`;

    card.querySelector('.card').addEventListener('click', (e) => {
        if (!e.target.classList.contains('delete-btn')) {
            showPetModal(pet);
        }
    });

    card.querySelector('.delete-btn').addEventListener('click', async (e) => {
        e.stopPropagation();
        pets.splice(index, 1);
        try {
            await updatePetsData();
            refreshCards();
        } catch (error) {
            console.error("Failed to update pets:", error);
        }
    });

    petCardsContainer.appendChild(card);
}

async function loadPets(count = 9) {
    if (currentIndex === 0) {
        pets = await fetchPets();
    }


    for (let i = currentIndex; i < currentIndex + count && i < pets.length; i++) {
        renderPetCard(pets[i], i);
    }
    currentIndex += count;
}

async function refreshCards() {
    petCardsContainer.innerHTML = '';
    currentIndex = 0;
    pets = await fetchPets();
    loadPets(9);
}

function showPetModal(pet) {
    document.getElementById('modal-pet-image').src = pet.image;
    document.getElementById('modal-pet-name').innerText = pet.name;
    document.getElementById('modal-pet-type').innerText = pet.species;
    document.getElementById('modal-pet-breed').innerText = pet.breed;
    document.getElementById('modal-pet-color').innerText = pet.color;
    document.getElementById('modal-pet-age').innerText = pet.age;
    document.getElementById('modal-pet-spayed').innerText = pet.spayed ? "Yes" : "No";
    document.getElementById('modal-pet-animalId').innerText = pet.animalId;
    document.getElementById('modal-pet-microchip').innerText = pet.microchip;

    document.getElementById('modal-pet-about').innerText = pet.about;

    const petModal = new bootstrap.Modal(document.getElementById('petModal'));
    petModal.show();
}

function getNextId() {
    if (pets.length === 0) return 1;
    const maxId = Math.max(...pets.map(pet => pet.id));
    return maxId + 1;
}

document.getElementById('loadMoreBtn').addEventListener('click', () => {
    loadPets(9);
});

document.getElementById('createBtn').addEventListener('click', () => {
    createModal.show();
});

document.getElementById('createPetForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const imageFile = formData.get("imageFile");

    const newPet = {
        id: getNextId(),
        name: formData.get("name"),
        type: formData.get("species"),
        breed: formData.get("breed") || "Unknown",
        color: formData.get("color") || "Unknown",
        age: formData.get("age"),
        gender: formData.get("gender"),
        spayed: formData.get("spayed") === "on",
        animalId: formData.get("animalId"),
        microchip: formData.get("microchip") || "N/A",
        about: formData.get("about") || "No information provided.",
        image: imageFile,
    };

    pets.push(newPet);
    await updatePetsData();

    createModal.hide();
    form.reset();
    refreshCards();
});

document.addEventListener('DOMContentLoaded', () => {
    loadPets(9);
});