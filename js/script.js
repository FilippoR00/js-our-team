// array dati 
const people = [
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
];

let team = document.querySelector(".team-container");

// Creo un ciclo che inzializzi in modo dinamico la pagina una volta richiamato
function printCard(array){
    for (let i = 0; i < array.length; i++) {
        team.innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img src="img/${array[i].image}" alt="${array[i].name}"/>
            </div>
            <div class="card-text">
                <h3>${array[i].name}</h3>
                <p>${array[i].role}</p>
            </div>
        </div>
        `;
    }
}

printCard(people);


// ***** BONUS *****

const button = document.getElementById("addMemberButton");

// creo il comando in modo che il bottone una volta premuto registri i valori inseriti e li inserisca nell'array. poi inserisco l'ultimo elemento dell'array all'interno dell'HTML
button.addEventListener("click", function(){
    const addName = document.getElementById("name").value;
    const addRole = document.getElementById("role").value;
    const addImage = document.getElementById("image").value;
    people.push({
        name: addName,
        role: addRole,
        image: addImage
    });
    team.innerHTML += `
        <div class="team-card">
            <div class="card-image">
                <img src="img/${people[people.length - 1].image}" alt="${people[people.length - 1].name}"/>
            </div>
            <div class="card-text">
                <h3>${people[people.length - 1].name}</h3>
                <p>${people[people.length - 1].role}</p>
            </div>
        </div>
        `;
    console.log(addName, addRole, addImage);
});