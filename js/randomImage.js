const myButton = document.querySelector("button");
const image = document.querySelector("img");
const images = ["image1.1.jpg", "image1.2.jpg", "image1.3.jpg", "image1.4.jpg"];

myButton.addEventListener ("click", changeImage);

function changeImage () {

    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = "Images/" + images[randomIndex];
}