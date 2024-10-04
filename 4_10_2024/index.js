
let cards = [
    {
        "name": "flower",
        "price": 500,
        "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZly4t3rdIz5XDJa4QIVwkNjkIEU3bRJVYbQ&s"
    },
    {
        "name": "computer",
        "price": 5000,
        "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Desktop_computer_clipart_-_Yellow_theme.svg/640px-Desktop_computer_clipart_-_Yellow_theme.svg.png"
    },
    {
        "name": "duck",
        "price": 2000,
        "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Anas_platyrhynchos_male_female_quadrat.jpg/800px-Anas_platyrhynchos_male_female_quadrat.jpg"
    }
]

function displayCards(cards) {
    let container = document.getElementById("container");

    for (let card of cards) {
        container.innerHTML += `<div class='card'> 
        ${card.name} <h4>Price: 
        ${card.price} </h4> 
        <img class='img' src='${card.imgUrl}'>
        </div>`
    }
}


displayCards(cards);