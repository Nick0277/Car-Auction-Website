const slideLeftButton = document.querySelector(".slideLeftImage");
const slideRightButton = document.querySelector(".slideRightImage");
const carLogoPics = document.querySelectorAll(".erti");
let logoStorage = ['ToyotaP.png', 'Nissan.png', 'Honda.png',
   'Mercedes.png', 'Bmw.png', 'Ford.png', 'volkswagen.png', 'Porsche.png', 'Subaru.png',
   'Tesla.png', 'Mitsubishi.png', 'Audi.png', 'Lexus.png', 'Hyundai.png', 'Dodge.png',
   'Mazda.png', 'Jeep.png', 'Ferrari.png', 'Fiat.png', 'Skoda.png', 'Suzuki.png', 'Volvo.png',
   'AlfaRomeo.png', 'Renault.png'];

let imageIndex = 6;
let sourceCounter;
//    *************       Image Slider working only for desktop computers   *********  //  
let desktop = window.matchMedia("(min-width: 1201px)");
if (desktop.matches) {
   sourceCounter = 5;
   function slideRight() {
      if (sourceCounter !== logoStorage.length - 1) {
         for (let i = 0; i < imageIndex; i++) {
            sourceCounter++;
            carLogoPics[i].src = `/Car photos/Car Brand Logos/${logoStorage[sourceCounter]}`;
            carLogoPics[i].classList.add('slide-left');
            setTimeout(() => {
               carLogoPics[i].classList.remove('slide-left');
            }, 400);
         }
      }
   }
   slideRightButton.addEventListener('click', slideRight);

   function slideLeft() {
      if (sourceCounter > 5) {
         for (let i = 5; i > -1; i--) {
            sourceCounter--;
            carLogoPics[i].src = `/Car photos/Car Brand Logos/${logoStorage[sourceCounter - 5]}`;
            carLogoPics[i].classList.add('slide-right');
            setTimeout(() => {
               carLogoPics[i].classList.remove('slide-right');
            }, 400);
         }
      }
   }
   slideLeftButton.addEventListener('click', slideLeft);
}
//    *************       Image Slider working only for smartphones    *********  // 
let smartphone = window.matchMedia("(max-width: 489px)");
if (smartphone.matches) {
   sourceCounter = 0;
   function slideLeft() {
      if (sourceCounter > 0) {
         sourceCounter--;
         carLogoPics[0].src = `/Car photos/Car Brand Logos/${logoStorage[sourceCounter]}`;
         carLogoPics[0].classList.add('slide-right');
         setTimeout(() => {
            carLogoPics[0].classList.remove('slide-right');
         }, 400);
      }
   }
   slideLeftButton.addEventListener('click', slideLeft);
   function slideRight() {
      if (sourceCounter !== logoStorage.length - 1) {
         sourceCounter++;
         carLogoPics[0].src = `/Car photos/Car Brand Logos/${logoStorage[sourceCounter]}`;
         carLogoPics[0].classList.add('slide-left');
         setTimeout(() => {
            carLogoPics[0].classList.remove('slide-left');
         }, 400);
      }
   }
   slideRightButton.addEventListener('click', slideRight);
}
