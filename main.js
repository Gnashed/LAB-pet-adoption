const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/cat",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://loremflickr.com/320/240/dinosaur",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://loremflickr.com/320/240/dinosaur"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "https://loremflickr.com/320/240/dog"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/cat"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://loremflickr.com/320/240/dog"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/cat"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://loremflickr.com/320/240/dinosaur"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/cat"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/cat"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://loremflickr.com/320/240/dinosaur"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://loremflickr.com/320/240/dog"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://loremflickr.com/320/240/dog"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/cat"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/cat"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://loremflickr.com/320/240/dinosaur"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/cat"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://loremflickr.com/320/240/dinosaur"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://loremflickr.com/320/240/dog"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/cat"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://loremflickr.com/320/240/dinosaur"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/cat"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "https://loremflickr.com/320/240/dog"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://loremflickr.com/320/240/dog"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/cat"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://loremflickr.com/320/240/dog"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://loremflickr.com/320/240/dinosaur"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/cat"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "https://loremflickr.com/320/240/cat"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn't get weirded out by the word \"moist.\"",
      type: "dino",
      imageUrl: "https://loremflickr.com/320/240/dinosaur"
    }
  ];

// Func that renders the array to the DOM
const renderAppToDOM = (array) => {

  // Empty string. Will use later to add pet objects to.
  let domString = "";

  //loop through pets values.
  for(let pet of pets) {
    // store the html into domString
    domString += `<div class="card">
    <header>
        <h2>${pet.name}</h2>
    </header>
    
    <img src="${pet.imageUrl}" alt="placeholder">
    
    <div class="description">
        <p id="color">${pet.color}</p>
        <p id="skill">
            ${pet.specialSkill}
        </p>
    </div> <!-- ./description-->
    
    <div class="animal">
        <footer>
            <h4>${pet.type}</h4>
        </footer>
    </div>
    </div> <!-- card -->`
  }
  // Target the app.
  const app = document.querySelector('#app');

  // Set the pets to the app div.
  app.innerHTML = domString;
}

// Render the pets object to the DOM
renderAppToDOM(pets);

/*
================================= Filter buttons =================================
*/

// Target the buttons.
const catFilter = document.querySelector('#cat-filter');
const dogFilter = document.querySelector('#dog-filter');
const dinoFilter = document.querySelector('#dino-filter');

// Func that filters the pets.
const filter = () => {
  // To hold the filtered pets
  let filteredPetArray = [];

  // Iterate through pets to filter.
  for(let pet of pets) {
    // Check if value exists. If so, push it to the array!
    if (pet.type === "cat") {
      filteredPetArray.push(pet);
    } else if (pet.type === "dog") {
      filteredPetArray.push(pet);
    } else if (pet.type === "dino") {
      filteredPetArray.push(pet);
    }
  }
  // Render filtered array the DOM
  renderAppToDOM(filteredPetArray);
}

// Invoke func once clicked.
catFilter.addEventListener('click', filter);
dogFilter.addEventListener('click', filter);
dinoFilter.addEventListener('click', filter);
