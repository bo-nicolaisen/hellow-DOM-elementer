
// app element required



const myApp = document.getElementById("app");


// make a gallery card
buildCard("hej", "http://placekitten.com/200/300", "sød kat");

buildCard("wow", "https://i.guim.co.uk/img/media/67f70805c64b8bdc45175068c5ec37f7d743987d/0_250_4255_2553/master/4255.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=265bdd10b9ee876d2e404c5631fbbaf3", "grim  kat");


function buildCard(myHtwo, myUrl, myDescription) {
    // card elements



    const myCard = document.createElement("figure");
    const cardHeadline = document.createElement("h2");
    const cardImage = document.createElement("img");
    const cardDescription = document.createElement("p");



    // modular method
    console.log(cardImage);


    cardHeadline.innerText = myHtwo;
    cardImage.src = myUrl;

    cardDescription.innerText = myDescription;




    myCard.appendChild(cardHeadline);
    myCard.appendChild(cardImage);
    myCard.appendChild(cardDescription);


    // append card
    myApp.appendChild(myCard);
}
