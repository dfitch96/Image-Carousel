
const imagePaths = [
    "images/mtg.png",
    "images/mtg-collectibles.png",
    "images/mtg-trading-cards.png"
]

let currentIndex = 0;
const carouselImgDiv = document.querySelector(".carousel-image");
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#previous')


window.addEventListener("DOMContentLoaded", () => {

    const carouselImg = document.createElement("img");
    carouselImg.src = imagePaths[0];
    carouselImgDiv.appendChild(carouselImg);

})

nextButton.addEventListener("click", next);
prevButton.addEventListener("click", prev);



function next(){

    currentIndex = (currentIndex + 1) % imagePaths.length;
    carouselImgDiv.textContent = '';
    const carouselImg = document.createElement("img");
    carouselImg.src = imagePaths[currentIndex];
    carouselImgDiv.appendChild(carouselImg);

    

}

function prev(){
    currentIndex = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
    carouselImgDiv.textContent = '';
    const carouselImg = document.createElement("img");
    carouselImg.src = imagePaths[currentIndex];
    carouselImgDiv.appendChild(carouselImg);

    
}
