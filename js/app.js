'use strict';

const carouselBox = document.getElementById('primary-cont');
const thumbnails = document.getElementById('thumbnails-cont');
const btnBefore = document.getElementById('before');
const btnNext = document.getElementById('next');
const allCard = [];
const allThumbnails = [];
let i = 0;

console.log(carouselBox, btnBefore, btnNext);

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];






function generateCarouselCards() {

    for (let element of images) {
        const box = document.createElement('div');
        box.className = 'card-box';

        box.innerHTML = `
            <img src="${element.url}" alt="${element.title}">
            <div class="card-info">
                <h1>${element.title}</h1>
                <h2>${element.description}</h2>
            </div>
        `;

        carouselBox.prepend(box);

        allCard.push(box);
    }

}


function nextCard() {
    if (allCard[i].classList.contains('active')) {
        allCard[i].classList.remove('active');
    }

    if (i == 4) {
        i = -1;
    }
    ++i;
    change(i);
}



function beforeCard() {
    if (allCard[i].classList.contains('active')) {
        allCard[i].classList.remove('active');
    }

    if (i == 0) {
        i = 5;
    }
    --i;
    change(i);
}

function change(index) {
    allCard[index].classList.add('active');
}


function generateThumbnails() {
    for (let element of images) {
        const thumbnailsBox = document.createElement('div');
        thumbnailsBox.innerHTML = `<img src="${element.url}" alt="${element.title}">`;
        thumbnailsBox.classList.add('thumbnails-img');
        thumbnails.appendChild(thumbnailsBox);
        allThumbnails.push(thumbnailsBox);
    }
}


setInterval(nextCard, 3000);



generateCarouselCards();
generateThumbnails();
allCard[0].classList.add('active');
btnBefore.addEventListener('click', beforeCard);
btnNext.addEventListener('click', nextCard);




