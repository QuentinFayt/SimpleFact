let animals = ["cat", "dog", "horse"];
let current = 0;
document.querySelector("body").addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        document.querySelectorAll(".animals").forEach((el) => {
            el.style.display = "none"
        })
        if (e.key === "ArrowLeft") {
            if (current === 0) {
                current = 2;
            }
            else {
                current--;
            }
        }
        else {
            if (current === 2) {
                current = 0;
            }
            else {
                current++;
            }
        }
        displayAnimal(animals[current]);
        document.querySelector("#bubble").style.display = "none";
    }
    if (e.key === "Enter") {
        $.get(`https://cat-fact.herokuapp.com/facts/random/?animal_type=${animals[current]}`, (data) => {
            document.querySelector("#api").innerHTML        = data.text;
            document.querySelector("#bubble").style.display = "block";
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    displayAnimal(animals[current]);
})

function displayAnimal(animal) {
    document.querySelector(`#${animal}`).style.display = "block";
    factTitle(animal);
}

function factTitle(animal) {
    document.querySelector("h1").innerHTML = "Simple " + animal + " facts!";
}