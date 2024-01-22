function changeLocation() {
    var button = document.querySelector('.noButton');
    
    // Calculate new top and left positions
    var newTop = Math.floor(Math.random() * window.innerHeight);
    var newLeft = Math.floor(Math.random() * window.innerWidth);
    
    // Apply the new positions
    button.style.top = newTop + 'px';
    button.style.left = newLeft + 'px';
}

const images = [
    "IMAGE1.jpg",
    "IMAGE2.jpg",
    "IMAGE3.jpg",
    "IMAGE4.jpg",
    "IMAGE5.jpg",


];



function changeImage() {
    const currentIndex = 0;
const imageElement = document.querySelector('.IMAGE1');
    // Increment the index and reset to 0 if it exceeds the number of images
    currentIndex = (currentIndex + 1) % images.length;

    // Change the source of the image
    imageElement.src = images[currentIndex];
}


const noButton = document.querySelector('.noButton');
    
const images5 = document.querySelector('.IMAGE3');

const images2 = document.querySelector('.IMAGE4');

const images3 = document.querySelector('.IMAGE5');

const toggle = true;

const yesButton = document.querySelector('.yesButton');
    const images54 = document.querySelector('.IMAGE1');
function changeYes(){
    

    if(yesButton.onclick){
        images54.style.opacity = "1";
        images5.style.opacity = "0";
        images3.style.opacity = "0";
        images2.style.opacity = "0";
    }
    
}

var currentImage = 1; // Initial state

    function changeNo() {

      // Reset all images to initial state
      images54.style.opacity = "0";
      images3.style.opacity = "0";
      images2.style.opacity = "0";

      // Toggle to the next image
      currentImage = (currentImage % 3) + 1;

      // Set the opacity for the current image
      if (currentImage === 1) {
        images5.style.opacity = "1";
      } else if (currentImage === 2) {
        images3.style.opacity = "1";
      } else if (currentImage === 3) {
        images2.style.opacity = "1";
      }
    }