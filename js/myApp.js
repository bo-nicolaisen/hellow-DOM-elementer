
// app element required
const myApp = document.getElementById("app");


// make a gallery card
buildCard();


function buildCard() {
    // card elements
    const myCard = document.createElement("figure");

    /*
        const cardHeadline = document.createElement("h2");
        const cardImage = document.createElement("img");
        const cardDescription = document.createElement("p");
    
    
    
        // modular method
        // console.log(cardImage);
         cardHeadline.innerText = "MITTEKAAAAT!";
        cardImage.src = "http://placekitten.com/200/300";
        cardDescription.innerText = "søøøde missser";
        
        myCard.appendChild(cardHeadline);
        myCard.appendChild(cardImage);
        myCard.appendChild(cardDescription); */


    // brute force method
    myCard.innerHTML = '<h2>mittekat<h2><img src="http://placekitten.com/200/300"><p>søøød mitte</p>';


    // append card
    myApp.appendChild(myCard);
}
