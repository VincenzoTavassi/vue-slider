const { createApp } = Vue;

createApp({
  data() {
    return {
      games: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
      activeImage: 2,
    };
  },
}).mount("#app");

console.log(Vue);

// // HTML ELEMENTS

// const carouselEl = document.getElementById('carousel-container');
// const leftArrowEl = document.getElementById('arrow-left');
// const rightArrowEl = document.getElementById('arrow-right');
// const stopButton = document.getElementById('stop-btn');
// const reverseButton = document.getElementById('reverse-btn');
// const sideThumbsEl = document.getElementById('side-container');

// // ARRAY

// const images = [
//     {
//         image: 'img/01.webp',
//         title: 'Marvel\'s Spiderman Miles Morale',
//         text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//     }, {
//         image: 'img/02.webp',
//         title: 'Ratchet & Clank: Rift Apart',
//         text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//     }, {
//         image: 'img/03.webp',
//         title: 'Fortnite',
//         text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//     }, {
//         image: 'img/04.webp',
//         title: 'Stray',
//         text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//     }, {
//         image: 'img/05.webp',
//         title: "Marvel's Avengers",
//         text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
//     }
// ];

// // EVENT LISTENERS

// leftArrowEl.addEventListener('click', moveLeft);
// rightArrowEl.addEventListener('click', moveRight);
// stopButton.addEventListener('click', stopStartSlider);
// reverseButton.addEventListener('click', reverseSlider);

// // ON LOAD

// let activeImage = 0;
// updateImage();
// generateThumbs();
// let sliderWorking = true;
// let sliderDirection = 'left'
// let moveSlider = setInterval(moveRight, 2000);

// /*********************************************
// *
// *                FUNZIONI
// *
// **********************************************/

// // AGGIORNA L'IMMAGINE ATTUALE
// function updateImage() {
//     images.forEach((immagine, numeroImmagine) => {
//         if (activeImage == numeroImmagine) {
//             carouselEl.innerHTML = `<img src="./${immagine.image}" alt="" srcset="">
// 			<div id="carousel-text">
//             <h2 id="img-title" class="display-3 fw-bold">${immagine.title}</h2>
//             <p>${immagine.text}
//             </p>
// 			</div>`
//         }
//     })
//     // AGGIORNA LE THUMBNAILS IN BASE ALL'IMMAGINE ATTIVA
//     let allThumbs = document.querySelectorAll('.js-div');
//     allThumbs.forEach((thumb, numeroThumb) => {
//         if (numeroThumb == activeImage) {
//             thumb.classList.add('active');
//         } else {
//             thumb.classList.remove('active');
//         }
//     })
// }

// // MUOVI A DESTRA
// function moveRight() {
//     activeImage++
//     if (activeImage >= images.length) {
//         activeImage = 0;
//     }
//     console.log(activeImage);
//     updateImage()
// }

// // MUOVI A SINISTRA
// function moveLeft() {
//     activeImage--
//     if (activeImage < 0) {
//         activeImage = images.length - 1;
//     }
//     console.log(activeImage);
//     updateImage()
// }

// // MUOVE LO SLIDER IN UNA DIREZIONE SE DICHIARATA, ALTRIMENTI LO FERMA
// function autoMove(direction) {
//     clearInterval(moveSlider);
//     if (direction == 'left') {
//         moveSlider = setInterval(moveLeft, 2000);
//     } else if (direction == 'right') {
//         moveSlider = setInterval(moveRight, 2000);
//     }
// }

// // SE LO SLIDER E' FERMO LO INIZIALIZZA, ALTRIMENTI LO FERMA
// function stopStartSlider() {
//     autoMove();
//     if (!sliderWorking) {
//         sliderWorking = true;
//         stopButton.innerHTML = 'STOP';
//         autoMove('left');
//     }
//     else {
//         sliderWorking = false;
//         clearInterval(autoMove);
//         stopButton.innerHTML = 'START';
//     }
// }

// // CAMBIA LA DIREZIONE DELLO SCORRIMENTO IMMAGINI
// function reverseSlider() {
//     if (sliderWorking) {
//         if (sliderDirection == 'left') {
//             autoMove('right')
//             sliderDirection = 'right'
//         } else {
//             autoMove('left')
//             sliderDirection = 'left'
//         }
//     }
// }

// // GENERA THUMBNAILS
// function generateThumbs() {
//     images.forEach((immagine, numeroIndice) => {
//         let nuovaImmagine = document.createElement('div');
//         nuovaImmagine.classList.add('js-div');
//         nuovaImmagine.innerHTML = `<img src="./${immagine.image}">`;
//         nuovaImmagine.addEventListener('click', function () {
//             activeImage = numeroIndice;
//             updateImage();
//         })
//         sideThumbsEl.append(nuovaImmagine);
//     })
// }
