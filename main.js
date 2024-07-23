const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/green-cat",
    },
    {
      id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://loremflickr.com/320/240/brown-dinosaur",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://loremflickr.com/320/240/yellow-dinosaur"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "https://loremflickr.com/320/240/black-dog"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/brown-cat"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://loremflickr.com/320/240/black-dog"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/yellow-cat"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://loremflickr.com/320/240/grey-dinosaur"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/brown-cat"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/blue-cat"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://loremflickr.com/320/240/orange-dinosaur"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://loremflickr.com/320/240/green-dog"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://loremflickr.com/320/240/red-dog"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/brown-cat"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/red-cat"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://loremflickr.com/320/240/brown-dinosaur"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/yellow-cat"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://loremflickr.com/320/240/brown-dinosaur"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://loremflickr.com/320/240/blue-dog"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/black-cat"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://loremflickr.com/320/240/red-dinosaur"
    },
    {
      id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/orange-cat"
    },
    {
      id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "https://loremflickr.com/320/240/red-dog"
    },
    {
      id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://loremflickr.com/320/240/brown-dog"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/red-cat"
    },
    {
      id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://loremflickr.com/320/240/yellow-dog"
    },
    {
      id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://loremflickr.com/320/240/green-dinosaur"
    },
    {
      id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/purple-cat"
    },
    {
      id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/green-cat"
    },
    {
      id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn't get weirded out by the word \"moist\".",
      type: "dino",
      imageUrl: "https://loremflickr.com/320/240/red-dinosaur"
    }
  ];

/*
  ============== Utils ==============
*/

const renderToDom = (divID, content) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = content;
};

/*
  ============== Render Pets, filter/create/delete pets ==============
*/
const renderPets = (array) => {
  let domString = "";
  const targetFooter = document.querySelector('footer');
  const catColor = 'rgb(255, 201, 40)';
  const dogColor = 'rgb(189, 45, 59)';
  const dinoColor = 'rgb(49, 210, 242)';

  array.forEach(pet => {
    if (pet.type === 'cat' || pet.type === 'Cat') {
    domString += `
    <div class="row">
      <div class="card container col mx-4" style="width: 14rem">
        <div class="card-body">
          <header class="text-center">
            <h2 class="card-title">${pet.name}</h2>
          </header>

          <img src="${pet.imageUrl}" class="card-img-top" alt="picture of ${pet.type}">
          
          <h4 class="card-text mt-2">${pet.color}</h4>

          <p class="card-text" style="height: 72px">${pet.specialSkill}</p>

          <div class="container text-center">
            <button id="edit-pet-card-btn--${pet.id}">Edit</button>
            <button id="delete-pet-card-btn--${pet.id}">Delete</button>
          </div>

          <footer class="pet-card-footer mt-3 text-center" style="background-color: ${catColor}">
            <p style="font-weight: bold;">${pet.type}</p>
          </footer>
        </div>
      </div> <!-- ./card -->
    </div>`;
    } else if (pet.type === 'dog' || pet.type === 'Dog') {
      domString += `
      <div class="row">
        <div class="card container col mx-4" style="width: 14rem">
          <div class="card-body">
            <header class="text-center">
              <h2 class="card-title">${pet.name}</h2>
            </header>

            <img src="${pet.imageUrl}" class="card-img-top" alt="picture of ${pet.type}">
            
            <h4 class="card-text mt-2">${pet.color}</h4>

            <p class="card-text" style="height: 72px">${pet.specialSkill}</p>
            
            <div class="container text-center">
              <button id="edit-pet-card-btn--${pet.id}">Edit</button>
              <button id="delete-pet-card-btn--${pet.id}">Delete</button>
            </div>

            <footer class="pet-card-footer mt-3 text-center" style="background-color: ${dogColor}">
              <p style="font-weight: bold;">${pet.type}</p>
            </footer>
          </div>
        </div> <!-- ./card -->
      </div>`;
    } else if (pet.type === 'dino' || pet.type === 'Dino') {
      domString += `
      <div class="row">
        <div class="card container col mx-4" style="width: 14rem">
          <div class="card-body">
            <header class="text-center">
              <h2 class="card-title">${pet.name}</h2>
            </header>

            <img src="${pet.imageUrl}" class="card-img-top" alt="picture of ${pet.type}">
            
            <h4 class="card-text mt-2">${pet.color}</h4>

            <p class="card-text" style="height: 72px">${pet.specialSkill}</p>
            <div class="container text-center">
              <button id="edit-pet-card-btn--${pet.id}">Edit</button>
              <button id="delete-pet-card-btn--${pet.id}">Delete</button>
            </div>
            <footer class="pet-card-footer mt-3 text-center" style="background-color: ${dinoColor}">
              <p style="font-weight: bold;">${pet.type}</p>
            </footer>
          </div>
        </div> <!-- ./card -->
      </div>`;
    }

  });
  renderToDom('.render-cards-here', domString);
};

const filterPets = (array, filter) => {
  const filteredPetArray = [];

  array.forEach(pet => {
    if (pet.type === filter) {
      filteredPetArray.push(pet);
    }
  });
  // console.log(filteredPetArray);
  renderPets(filteredPetArray);
  return filteredPetArray;
};

const createPet = () => {
  const pet = {
    id: pets.length + 1,
    name: document.querySelector('.pet-name').value,
    color: document.querySelector('.pet-color').value,
    imageUrl: document.querySelector('.pet-image').value,
    specialSkill: document.querySelector('.pet-special-skill').value,
    type: document.querySelector('.pet-type').value
  };

  pets.push(pet);
  // console.log(pets)
  petForm.reset();
  renderPets(pets);
};

const updatePet = () => {
  const targetCards = document.querySelector('.render-cards-here');
  
  targetCards.addEventListener('click', (e) => {
    if(e.target.id.includes('edit')) {
      const [ , id] = e.target.id.split('--');
      const index = pets.findIndex(pet => pet.id === Number(id));
      console.log(e.target.id);

      // Render the form with the current data already filled.
      openModal();
      document.querySelector('.pet-name').value = pets[index].name;
      document.querySelector('.pet-color').value = pets[index].color;
      document.querySelector('.pet-image').value = pets[index].imageUrl;
      document.querySelector('.pet-special-skill').value = pets[index].specialSkill;
      document.querySelector('.pet-type').value = pets[index].type;

      // Update the object in the pets array.

      // Render the objects.
    }
  });
};

const deletePet = () => {
  // Step 1: Targt the container
  const targetCards = document.querySelector('.render-cards-here');

  // Step 2: Capture clicks.
  targetCards.addEventListener('click', (e) => {
    // console.log(e.target.id);

    // Step 3: Check e.target.id includes the string 'delete'. If so, use destructuring to find the index and delete the object from the array using its index.
    if (e.target.id.includes('delete')) {
      // array.split() returns an array. In this case, we're using destructuring to only save what would be the pet id.
      const [ , id] = e.target.id.split('--');
      // console.log(id); // This should show the id of the element we clicked the delete button on in the console.

      // Make sure the const 'id' is a number. Store the returned index number from pets array.
      const index = pets.findIndex(e => e.id === Number(id));

      // Modify the original array using splice. We want to remove one element from the pet's array using the provided position (index).
      pets.splice(index, 1);

      // Render pets
      renderPets(pets);
    }
  });
};
/*
  ============== Modal ==============
*/
const targetModal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".add-a-pet-btn");
const closeModalBtn = document.querySelector(".btn-close");

// OPEN MODAL
const openModal = () => {
  targetModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
openModalBtn.addEventListener("click", openModal);

// ClOSE MODAL
const closeModal = () => {
  targetModal.classList.add("hidden");
  overlay.classList.add("hidden");
};
/*
  ============== Filter Buttons, Create/Delete Pet Button, form ==============
*/
const catFilterButton = document.querySelector('.cat-filter');
const dogFilterButton = document.querySelector('.dog-filter');
const dinoFilterButton = document.querySelector('.dino-filter');
const allFilterButton = document.querySelector('.all-filter');

const addAPetButton = document.querySelector('.add-a-pet-btn');
const createAPetButton = document.querySelector('.submit-btn'); // Inside the modal
const petForm = document.querySelector('#pet-form');

/*
  ============== Function calls ==============
*/
renderPets(pets);
// createPet();
deletePet();
updatePet();
/*
  ============== Event Listeners ==============
*/

catFilterButton.addEventListener('click', () => {
  filterPets(pets, 'cat');
});
dogFilterButton.addEventListener('click', () => {
  filterPets(pets, 'dog');
});
dinoFilterButton.addEventListener('click', () => {
  filterPets(pets, 'dino');
});
allFilterButton.addEventListener('click', () => {
  renderPets(pets);
});

addAPetButton.addEventListener('click', () => {
  openModal();
});

petForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // createPet();
  updatePet();
  closeModal();
  renderPets(pets);
});

// FOR MODALS
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
