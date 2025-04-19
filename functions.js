const pets = [
    {
        id: 1,
        name: "Zoe",
        gender: "female",
        type: "Dog",
        breed: "Australian Shepherd",
        color: "Blue Merle",
        age: "2 Years",
        spayed: true,
        image: "images/zoe.jpg",
        microchip: "982000371234567",
        animalId: "71234",
        about: "Meet Zoe, an energetic and intelligent Australian Shepherd with stunning blue merle markings. Zoe was surrendered by a family who couldn't keep up with her high energy levels. She excels at agility training and loves learning new tricks. Zoe is great with older children and other dogs but may try to herd them! She thrives in an active home where she can get plenty of exercise and mental stimulation."
    },
    {
        id: 2,
        name: "Leo",
        gender: "male",
        type: "Cat",
        breed: "Scottish Fold",
        color: "Cream",
        age: "1 Year",
        spayed: true,
        image: "images/leo.jpeg",
        animalId: "72345",
        microchip: "981120037654321",
        about: "Leo is an adorable Scottish Fold with a sweet, round face and folded ears. He was rescued from a breeder and has since become a loving and curious companion. Leo enjoys playing with feather toys and snuggling under blankets. He's gentle and gets along well with other cats. Leo would be perfect for someone looking for a laid-back yet playful feline friend."
    },
    {
        id: 3,
        name: "Teddy",
        gender: "male",
        type: "Dog",
        breed: "Miniature Poodle",
        color: "Apricot",
        age: "4 Years",
        spayed: true,
        image: "images/teddy.jpg",
        animalId: "73456",
        microchip: "985120032345678",
        about: "Teddy is a charming Miniature Poodle with a fluffy apricot coat. He was found wandering the streets and has since shown his affectionate and intelligent nature. Teddy loves learning tricks and enjoys being groomed. He's great with children and other pets. His ideal home would be with a family who can give him plenty of love and attention."
    },
    {
        id: 4,
        name: "Mia",
        gender: "female",
        type: "Cat",
        breed: "Bengal",
        color: "Spotted (Brown)",
        age: "2 Years",
        spayed: true,
        image: "images/mia.jpg",
        animalId: "74567",
        microchip: "981120038765432",
        about: "Mia is a striking Bengal cat with a wild-looking spotted coat and a playful personality. She was surrendered by an owner who couldn't keep up with her energy. Mia loves climbing cat trees and playing with water. She's highly intelligent and enjoys puzzle toys. Mia would thrive in a home where she can explore and stay active."
    },
    {
        id: 5,
        name: "Rosie",
        gender: "female",
        type: "Dog",
        breed: "Pitbull",
        color: "White with Brindle Patches",
        age: "5 Years",
        spayed: true,
        image: "images/rosie.jpg",
        animalId: "75678",
        microchip: "982000372345678",
        about: "Rosie is a sweet Bulldog with a gentle and laid-back personality. She was rescued from a shelter and has since become a favorite among staff. Rosie enjoys short walks and lounging on the couch. She's great with kids and other pets. Her ideal home would be with a family who appreciates her calm and loving nature."
    },
    {
        id: 6,
        name: "Gizmo",
        gender: "male",
        type: "Cat",
        breed: "Sphynx",
        color: "Pink",
        age: "3 Years",
        spayed: true,
        image: "images/gizmo.jpg",
        animalId: "76789",
        microchip: "985112009876543",
        about: "Gizmo is a unique Sphynx cat with a warm, hairless body and big ears. He was surrendered by an owner who couldn't care for his special needs. Gizmo loves snuggling under blankets and basking in the sun. He's affectionate and gets along well with other pets. Gizmo would do best in a warm and loving home."
    },
    {
        id: 7,
        name: "Max",
        gender: "male",
        type: "Dog",
        breed: "Golden Retriever",
        color: "Golden",
        age: "3 Years",
        spayed: true,
        image: "images/max.jpg",
        animalId: "77890",
        microchip: "985112004567890",
        about: "Max is a friendly Golden Retriever with a heart of gold. He was surrendered when his family moved overseas. Max loves playing fetch and swimming. He's great with children and other dogs. His ideal home would be with an active family who enjoys outdoor activities."
    },
    {
        id: 8,
        name: "Luna",
        gender: "female",
        type: "Cat",
        breed: "Siamese",
        color: "Seal Point",
        age: "2 Years",
        spayed: true,
        image: "images/luna.jpg",
        animalId: "78901",
        microchip: "981120045678901",
        about: "Luna is a beautiful Siamese cat with striking blue eyes. She was found as a stray and has since shown her affectionate nature. Luna loves chatting with her humans and perching on high places. She would do best in a quiet home where she can be the center of attention."
    },
    {
        id: 9,
        name: "Rocky",
        gender: "male",
        type: "Dog",
        breed: "Boxer",
        color: "Brindle",
        age: "4 Years",
        spayed: true,
        image: "images/rocky.jpg",
        animalId: "79012",
        microchip: "982000374567890",
        about: "Rocky is an energetic Boxer with a playful personality. He was surrendered due to his previous owner's health issues. Rocky loves going for runs and playing with toys. He's strong but gentle, and would do best with an experienced owner who can provide consistent training and exercise."
    },
    {
        id: 10,
        name: "Bella",
        gender: "female",
        type: "Cat",
        breed: "Maine Coon",
        color: "Tabby",
        age: "5 Years",
        spayed: true,
        image: "images/bella.jpg",
        animalId: "70123",
        microchip: "981120056789012",
        about: "Bella is a majestic Maine Coon with a luxurious coat. She was surrendered when her owner developed allergies. Bella is gentle and enjoys being brushed. She's independent but affectionate, and would do well in a calm home where she can lounge in sunny spots."
    },
    {
        id: 11,
        name: "Charlie",
        gender: "male",
        type: "Dog",
        breed: "Beagle",
        color: "Tri-color",
        age: "2 Years",
        spayed: true,
        image: "images/charlie.jpg",
        animalId: "71234",
        microchip: "985112005678901",
        about: "Charlie is a curious Beagle with a great nose. He was found as a stray and loves following scents. Charlie is friendly and gets along with everyone. He would thrive in a home with a secure yard where he can explore safely."
    },
    {
        id: 12,
        name: "Sophie",
        gender: "female",
        type: "Cat",
        breed: "Ragdoll",
        color: "Blue Point",
        age: "3 Years",
        spayed: true,
        image: "images/sophie.jpg",
        animalId: "72345",
        microchip: "981120067890123",
        about: "Sophie is a gentle Ragdoll who lives up to her breed's name. She was surrendered when her owner passed away. Sophie goes limp when picked up and loves being cuddled. She would be perfect for someone looking for a lap cat."
    },
    {
        id: 13,
        name: "Duke",
        gender: "male",
        type: "Dog",
        breed: "German Shepherd",
        color: "Black and Tan",
        age: "5 Years",
        spayed: true,
        image: "images/duke.jpg",
        animalId: "73456",
        microchip: "982000375678901",
        about: "Duke is a loyal German Shepherd with protective instincts. He was surrendered when his owner joined the military. Duke is intelligent and responds well to training. He would do best with an experienced owner who can provide structure and activity."
    },
    {
        id: 14,
        name: "Misty",
        gender: "female",
        type: "Cat",
        breed: "Persian",
        color: "Silver",
        age: "4 Years",
        spayed: true,
        image: "images/misty.jpg",
        animalId: "74567",
        microchip: "981120078901234",
        about: "Misty is a regal Persian with a beautiful flowing coat. She was surrendered by a breeder. Misty is calm and enjoys a quiet environment. She would thrive in a home where she can be pampered and groomed regularly."
    },
    {
        id: 15,
        name: "Cooper",
        gender: "male",
        type: "Dog",
        breed: "Labrador Retriever",
        color: "Chocolate",
        age: "1 Year",
        spayed: true,
        image: "images/cooper.jpg",
        animalId: "75678",
        microchip: "985112006789012",
        about: "Cooper is an enthusiastic Labrador puppy full of energy. He was surrendered when his family underestimated his needs. Cooper loves playing and learning new things. He would be perfect for an active family who can continue his training."
    },
    {
        id: 16,
        name: "Olive",
        gender: "female",
        type: "Cat",
        breed: "Tabby",
        color: "Brown Tabby",
        age: "2 Years",
        spayed: true,
        image: "images/olive.jpg",
        animalId: "76789",
        microchip: "981120089012345",
        about: "Olive is a playful tabby with striking markings. She was found as a stray kitten. Olive loves chasing toys and climbing cat trees. She's friendly and would do well in most home environments."
    },
    {
        id: 17,
        name: "Bear",
        gender: "male",
        type: "Dog",
        breed: "Siberian Husky",
        color: "Gray and White",
        age: "3 Years",
        spayed: true,
        image: "images/bear.jpg",
        animalId: "77890",
        microchip: "982000376789012",
        about: "Bear is a stunning Husky with piercing blue eyes. He was surrendered when his owner couldn't meet his exercise needs. Bear loves running and would be perfect for someone who enjoys jogging or hiking. He would do best in a cooler climate."
    },
    {
        id: 18,
        name: "Willow",
        gender: "female",
        type: "Cat",
        breed: "Russian Blue",
        color: "Gray",
        age: "4 Years",
        spayed: true,
        image: "images/willow.jpg",
        animalId: "78901",
        microchip: "981120090123456",
        about: "Willow is a elegant Russian Blue with a plush gray coat. She was surrendered due to a family's financial difficulties. Willow is shy at first but forms strong bonds. She would thrive in a quiet home where she can feel secure."
    }
];

let currentIndex = 0;
const petCardsContainer = document.getElementById('petCardsContainer');
const petModal = new bootstrap.Modal(document.getElementById('petModal'));
const createModal = new bootstrap.Modal(document.getElementById('createModal'));

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

  card.querySelector('.delete-btn').addEventListener('click', (e) => {
    e.stopPropagation(); // prevent modal from opening
    pets.splice(index, 1);
    refreshCards();
  });

  petCardsContainer.appendChild(card);
}

function loadPets(count = 9) {
  for (let i = currentIndex; i < currentIndex + count && i < pets.length; i++) {
    renderPetCard(pets[i], i);
  }
  currentIndex += count;
}

function refreshCards() {
  petCardsContainer.innerHTML = '';
  currentIndex = 0;
  loadPets(currentIndex + 9);
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

document.getElementById('loadMoreBtn').addEventListener('click', () => {
  loadPets(9);
});

document.getElementById('createBtn').addEventListener('click', () => {
  createModal.show();
});

document.getElementById('createPetForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newPet = {
    name: formData.get('name'),
    species: formData.get('species'),
    age: formData.get('age'),
    gender: formData.get('gender'),
    image: formData.get('image')
  };
  pets.push(newPet);
  createModal.hide();
  e.target.reset();
  refreshCards();
});

document.getElementById("createPetForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
  
    const imageFile = formData.get("imageFile");
    const imageUrl = imageFile ? URL.createObjectURL(imageFile) : "placeholder.jpg";
  
    const newPet = {
      name: formData.get("name"),
      species: formData.get("species"),
      breed: formData.get("breed") || "Unknown",
      color: formData.get("color") || "Unknown",
      age: formData.get("age"),
      gender: formData.get("gender"),
      spayed: formData.get("spayed") === "on",
      animalId: formData.get("animalId"),
      microchip: formData.get("microchip") || "N/A",
      about: formData.get("about") || "No information provided.",
      image: imageUrl,
    };
  
    pets.push(newPet);
    displayPets();
  
    const createModalElement = document.getElementById("createModal");
    const createModal = bootstrap.Modal.getInstance(createModalElement);
    createModal.hide();
    form.reset();
  });
  

loadPets(9);