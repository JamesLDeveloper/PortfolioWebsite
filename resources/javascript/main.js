/*const imagesOne = ["What-I-Think-I-Look-Like-Image"];

const imagesTwo = ["What-I-Actually-Look-Like-Image"];

const imagesOneArray = [];

imagesOne.forEach(function (image) {
    imagesOneArray.push(document.getElementById(image));
});

const imagesTwoArray = [];

imagesTwo.forEach(function (image) {
    imagesTwoArray.push(document.getElementById(image));
});

imagesOneArray.forEach(function (image) {
    image.addEventListener("mousedown", changeImageOne);
    image.addEventListener("mouseup", revertImageOne);
});

imagesTwoArray.forEach(function (image) {
    image.addEventListener("mousedown", changeImageTwo);
    image.addEventListener("mouseup", revertImageTwo);
});
*/

const imageToChangeOne = document.getElementById("What-I-Think-I-Look-Like-Image");

const imageToChangeTwo = document.getElementById("What-I-Actually-Look-Like-Image");

const changeImageOne = (event) => {
event.target.style.backgroundImage = "url('resources/img/Superman-Flying/res-mipmap/mipmap-xxxhdpi/SupermanInAction.jpg')";
console.log("Mouse down on image one");
event.target.style.transition = "background-image 0.75s ease-in-out";
};

const revertImageOne = (event) => {
event.target.style.backgroundImage = "url('resources/img/Me/res-mipmap/mipmap-xxxhdpi/What-I-Look-Like-In-My-Head.jpg')";
console.log("Mouse up on image one");
event.target.style.transition = "background-image 0.75s ease-in-out";
};

const changeImageTwo = (event) => {
    event.target.style.backgroundImage = "url('resources/img/Playing-Playstation/res-mipmap/mipmap-xxxhdpi/PlayingPlaystation.jpg')";
    console.log("Mouse down on image two");
    event.target.style.transition = "background-image 0.75s ease-in-out";
};

const revertImageTwo = (event) => {
    event.target.style.backgroundImage = "url('resources/img/Actual-Me/res-mipmap/mipmap-xxxhdpi/Actual Me Anon.jpg')";
    console.log("Mouse up on image two");
    event.target.style.transition = "background-image 0.75s ease-in-out";
};

imageToChangeOne.addEventListener("mousedown", changeImageOne);
imageToChangeOne.addEventListener("mouseup", revertImageOne);

imageToChangeTwo.addEventListener("mousedown", changeImageTwo);
imageToChangeTwo.addEventListener("mouseup", revertImageTwo);