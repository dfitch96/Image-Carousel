
const imagePaths = [
    "images/mtg.png",
    "images/mtg-collectibles.png",
    "images/mtg-trading-cards.png"
]


const carouselImgDiv = document.querySelector(".carousel-image");
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#previous')
const carouselSelectionsDiv = document.querySelector(".carousel-selections");
let currentIndex = 0;
let currentSelected = carouselSelectionsDiv.children[0];
currentSelected.classList.add('active');



window.addEventListener("DOMContentLoaded", () => {

    const carouselImg = document.createElement("img");
    carouselImg.src = imagePaths[0];
    carouselImgDiv.appendChild(carouselImg);

    for(let i = 0; i < carouselSelectionsDiv.children.length; i++){
        carouselSelectionsDiv.children[i].dataset.index = i;
        carouselSelectionsDiv.children[i].addEventListener("click", selectionHandler);

    }

})

nextButton.addEventListener("click", next);
prevButton.addEventListener("click", prev);


function selectionHandler(event){

    currentSelected.classList.remove('active');

    currentIndex = event.target.dataset.index;
    event.target.classList.add('active');
    currentSelected = event.target;
    carouselImgDiv.textContent = '';
    const carouselImg = document.createElement("img");
    carouselImg.src = imagePaths[currentIndex];
    carouselImgDiv.appendChild(carouselImg);
}


function next(){

    currentSelected.classList.remove('active');
    

    currentIndex = (currentIndex + 1) % imagePaths.length;
    currentSelected = carouselSelectionsDiv.children[currentIndex];
    currentSelected.classList.add('active');
    carouselImgDiv.textContent = '';
    const carouselImg = document.createElement("img");
    carouselImg.src = imagePaths[currentIndex];
    carouselImgDiv.appendChild(carouselImg);

    

}

function prev(){
    currentSelected.classList.remove('active');
    currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
    currentSelected = carouselSelectionsDiv.children[currentIndex];
    currentSelected.classList.add('active');
    carouselImgDiv.textContent = '';
    const carouselImg = document.createElement("img");
    carouselImg.src = imagePaths[currentIndex];
    carouselImgDiv.appendChild(carouselImg);

    
}
