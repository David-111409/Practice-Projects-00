const response = await fetch(
    "https://learnwebcode.github.io/pet-adoption-data/pets.json"
);
const dat = await response.json();
const animals = document.querySelector(".animals");
const categories = document.querySelectorAll(".filter-nav a");

let category = categories[0].textContent
    .split(" ")[1]
    .toLowerCase()
    .slice(0, -1);

let localCat = sessionStorage.getItem("categoryLocal");

categories.forEach((element) => {
    if (element.textContent.toLowerCase().indexOf(localCat) > -1)
        element.classList.add("chosen");
    else element.classList.remove("chosen");
});

if (!localCat) categories[0].classList.add("chosen");

function createCard(animal) {
    const animalCard = document.createElement("div");
    const animalCardText = document.createElement("div");
    const head = document.createElement("div");
    const headh3 = document.createElement("h3");
    const small = document.createElement("small");
    const ageSpan = document.createElement("span");
    const speciesSpan = document.createElement("span");
    const description = document.createElement("p");
    const but = document.createElement("a");
    const animalCardPhoto = document.createElement("div");
    const photo = document.createElement("img");
    const age = new Date().getFullYear() - animal.birthYear;
    photo.src = animal.photo;
    photo.title = `A ${animal.species} named ${animal.name}`;
    headh3.textContent = animal.name;
    ageSpan.textContent =
        age > 1
            ? `${age} ${age > 1 ? "Years" : "Year"} old `
            : "less than 1 Year old ";
    speciesSpan.textContent = animal.species;
    description.textContent = animal.description;
    but.textContent = `Adopt ${animal.name}`;
    but.className = "primary-btn";
    but.href = `https://learnwebcode.github.io/pet-adoption-data/pets/${animal.id}`;
    description.className = "description";
    animalCard.className = "animal-card";
    animalCardText.className = "animal-card-text";
    head.className = "head";
    ageSpan.className = "age";
    speciesSpan.className = "species";
    animalCardPhoto.className = "animal-card-photo";
    small.append(ageSpan, speciesSpan);
    head.append(headh3, small);
    animalCardPhoto.appendChild(photo);
    animalCardText.append(head, description, but);
    animalCard.append(animalCardText, animalCardPhoto);
    animals.append(animalCard);
}

if (localCat === "animal" || !localCat) {
    for (let animal of dat) {
        createCard(animal);
    }
} else {
    animals.innerHTML = "";
    for (let animal of dat) {
        if (animal.species === localCat) createCard(animal);
    }
}

categories.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        categories.forEach((el) => el.classList.remove("chosen"));
        e.target.classList.toggle("chosen");
        category = e.target.textContent
            .split(" ")[1]
            .toLowerCase()
            .slice(0, -1);
        sessionStorage.setItem("categoryLocal", category);

        if (category === "animal") {
            animals.innerHTML = "";
            for (let animal of dat) {
                createCard(animal);
            }
        } else {
            animals.innerHTML = "";

            for (let animal of dat) {
                if (animal.species === category) {
                    createCard(animal);
                }
            }
        }
    });
});
