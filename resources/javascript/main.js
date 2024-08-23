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


const images = document.querySelectorAll('.hover-enlarge');
        const overlay = document.querySelector('.enlarged-image-overlay');
        const enlargedImage = document.querySelector('.enlarged-image');
        const closeButton = document.getElementById('close-button');

        images.forEach((image) => {
            image.addEventListener('click', (event) => {
                // Show the overlay and set the enlarged image source
                overlay.style.display = 'flex';
                enlargedImage.src = event.target.src;

                setTimeout(() => {
                    overlay.style.opacity = 1;
                    enlargedImage.style.transform = 'scale(1)';
                }, 20);
            });
        });

        closeButton.addEventListener('click', () => {
            // Hide the overlay when the close button is clicked
            overlay.style.opacity = 0;
            enlargedImage.style.transform = 'scale(0.9)';
            setTimeout(() => {
                overlay.style.display = "none";
            }, 600);
        });

        // Close the overlay when clicking outside the image
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                overlay.style.opacity = "0";
                enlargedImage.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    overlay.style.display = "none";
                }, 600);
            }
        });