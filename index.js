/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */

const Speakers = document.getElementById('Speakers');
const otherSpeaker = document.getElementById('otherSpeakers');
const about = document.getElementById('about-item');
const desktop = document.getElementById('desktop-main');
const AboutMain = document.getElementById('AboutMain');
const MoreLessBtn = document.getElementById('ArrowDownButton');
const MoreSpeakers = document.getElementById('MoreSpeakers');
const mobileMenu = document.getElementById('mobileMenu');
const PopupMobileMenu = document.getElementById('PopupMobileMenu');
const aboutitemMob = document.getElementById('about-item-mob');
const X = document.getElementById('X');

const mustSpeaker = [{
  image: './Icons/mufti-menk.jpeg',
  name: 'Mufti Menk',
  role: 'Speaker',
  description: 'A speaker presenting some stuff',
},
{
  image: './Icons/Dr zakir naik.jpeg',
  name: 'Dr zakir Naik',
  role: 'Speaker',
  description: 'A speaker presenting some stuff',
},
];

const otherSpeakers = [
  {
    image: './Icons/TariqMasood.JPG',
    name: 'Musti Tariq Masood',
    role: 'Speaker',
    description: 'A speaker presenting some stuff',
  },
  {
    image: './Icons/raja.JPG',
    name: 'Musti Tariq Masood',
    role: 'Speaker',
    description: 'A speaker presenting some stuff',
  },
  {
    image: './Icons/khalid-bin-waleed.PNG',
    name: 'Khalid Bin Waleed(RA)',
    role: 'Speaker',
    description: 'A speaker presenting some stuff',
  },
  {
    image: './Icons/nouman.jpg',
    name: 'Nouman',
    role: 'Speaker',
    description: 'A speaker presenting some stuff',
  },
];

window.addEventListener('load', (() => {
  let toAdd = '';
  mustSpeaker.forEach((speaker) => {
    toAdd += `<div class="speaker">
                    <div class="image">
                        <img src='${speaker.image}' alt"Image of an Islamic speaker">
                    </div>
                    <span>
                        <h4>${speaker.name}</h4>
                        <p>${speaker.role}</p>
                        <p>${speaker.description}</p>            
                    </span>
                </div>`;
  });
  Speakers.innerHTML = toAdd;

  toAdd = '';
  otherSpeakers.forEach((speaker) => {
    toAdd += `<div class="speaker">
            <div class="image">
                <img src="${speaker.image}" alt="Image of an Islamic speaker">
            </div>
            <span>
                <h4>${speaker.name}</h4>
                <p>${speaker.role}</p>
                <p>${speaker.description}</p>
            </span>
            </div>`;
  });
  otherSpeaker.innerHTML = toAdd;
}));

/// ////////about///////////

about.addEventListener('click', ((e) => {
  if (desktop.style.display === 'none') {
    desktop.style.display = 'block';
    AboutMain.style.display = 'none';
    e.target.innerText = 'About';
  } else {
    desktop.style.display = 'none';
    AboutMain.style.display = 'grid';
    e.target.innerText = 'Home';
  }
}));

/// ////////mobile/////////////

mobileMenu.addEventListener('click', (() => {
  X.style.display = 'flex';
  PopupMobileMenu.style.display = 'flex';
  mobileMenu.style.display = 'none';
}
));

X.addEventListener('click', (() => {
  mobileMenu.style.display = 'flex';
  PopupMobileMenu.style.display = 'none';
  X.style.display = 'none';
  console.log(1);
}));

aboutitemMob.addEventListener('click', ((e) => {
  if (desktop.style.display === 'none') {
    AboutMain.style.display = 'none';
    desktop.style.display = 'block';
    PopupMobileMenu.style.display = 'none';
    X.style.display = 'block';
    mobileMenu.style.display = 'block';
    e.target.innerText = 'About';
  } else {
    AboutMain.style.display = 'grid';
    desktop.style.display = 'none';
    PopupMobileMenu.style.display = 'none';
    e.target.innerText = 'Home';
    X.style.display = 'none';
    mobileMenu.style.display = 'flex';
  }
}));

MoreLessBtn.addEventListener('click', ((e) => {
  if (MoreSpeakers.style.display === 'none') {
    MoreSpeakers.style.display = 'block';
    Speakers.style.display = 'block';
    e.target.childNodes[0].data = 'Less';
    e.target.children[0].classList.add('rotateArrow');
  } else {
    MoreSpeakers.style.display = 'none';
    Speakers.style.display = 'grid';
    e.target.childNodes[0].data = 'More';
    e.target.children[0].classList.remove('rotateArrow');
  }
}));
