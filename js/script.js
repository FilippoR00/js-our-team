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


function addCard(array){
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

addCard(people);