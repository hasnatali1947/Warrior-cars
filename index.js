/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */

const Speakers = document.getElementById('Speakers');
const MoreSpeakers = document.getElementById('MoreSpeakers');
const otherSpeaker = document.getElementById('otherSpeakers');
const about = document.getElementById('about-item');
const desktop = document.getElementById('desktop-main');
const AboutMain = document.getElementById('AboutMain');
const MoreLessBtn = document.getElementById('ArrowDownButton');
const mobileMenu = document.getElementById('mobileMenu');
const PopupMobileMenu = document.getElementById('PopupMobileMenu');
const aboutitemMob = document.getElementById('about-item-mob');
const footerHome = document.getElementById('footerHome');
const footerAbout = document.getElementById('footerAbout');
const X = document.getElementById('X');

const mustSpeaker = [
  {
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
    image: './Icons/TariqMasood.jpg',
    name: 'Mufti Tariq Masood',
    role: 'Speaker',
    description: 'A speaker presenting some stuff',
  },
  {
    image: './Icons/raja.jpg',
    name: 'Mufti Raja',
    role: 'Speaker',
    description: 'A speaker presenting some stuff',
  },
  {
    image: './Icons/khalid-bin-waleed.png',
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

window.addEventListener('load', () => {
  let toAdd = '';

  mustSpeaker.forEach((speaker) => {
    toAdd += `
      <div class="speaker">
        <div class="image">
          <img src="${speaker.image}" alt="Image of an Islamic speaker">
        </div>
        <span>
          <h4>${speaker.name}</h4>
          <p>${speaker.role}</p>
          <p>${speaker.description}</p>            
        </span>
      </div>
    `;
  });

  Speakers.innerHTML = toAdd;

  toAdd = '';

  otherSpeakers.forEach((speaker) => {
    toAdd += `
      <div class="speaker">
        <div class="image">
          <img src="${speaker.image}" alt="Image of an Islamic speaker">
        </div>
        <span>
          <h4>${speaker.name}</h4>
          <p>${speaker.role}</p>
          <p>${speaker.description}</p>
        </span>
      </div>
    `;
  });

  otherSpeaker.innerHTML = toAdd;
});

about.addEventListener('click', (e) => {
  if (desktop.style.display === 'none') {
    desktop.style.display = 'block';
    AboutMain.style.display = 'none';
    footerHome.style.display = 'flex';
    footerAbout.style.display = 'none';
    e.target.innerText = 'About';
  } else {
    desktop.style.display = 'none';
    AboutMain.style.display = 'grid';
    footerHome.style.display = 'none';
    footerAbout.style.display = 'flex';
    e.target.innerText = 'Home';
  }
});

mobileMenu.addEventListener('click', () => {
  X.style.display = 'flex';
  PopupMobileMenu.style.display = 'flex';
  mobileMenu.style.display = 'none';
});

X.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  PopupMobileMenu.style.display = 'none';
  X.style.display = 'none';
});

aboutitemMob.addEventListener('click', (e) => {
  if (desktop.style.display === 'none') {
    AboutMain.style.display = 'none';
    desktop.style.display = 'block';
    PopupMobileMenu.style.display = 'none';
    X.style.display = 'block';
    mobileMenu.style.display = 'block';
    footerHome.style.display = 'flex';
    footerAbout.style.display = 'none';
    e.target.innerText = 'About';
  } else {
    AboutMain.style.display = 'grid';
    desktop.style.display = 'none';
    PopupMobileMenu.style.display = 'none';
    e.target.innerText = 'Home';
    X.style.display = 'none';
    footerHome.style.display = 'none';
    footerAbout.style.display = 'flex';
    mobileMenu.style.display = 'flex';
  }
});

window.addEventListener('resize', (e) => {
  if (e.target.screen.availWidth > 768) {
    Speakers.style.display = 'grid';
    MoreSpeakers.style.display = 'grid';
  } else {
    Speakers.style.display = 'block';
    MoreSpeakers.style.display = 'none';
  }
});

MoreLessBtn.addEventListener('click', (e) => {
  if (MoreSpeakers.style.display === 'none') {
    Speakers.style.display = 'block';
    MoreSpeakers.style.display = 'block';
    e.target.childNodes[0].data = 'Less';
    e.target.children[0].classList.add('rotateArrow');
  } else {
    MoreSpeakers.style.display = 'none';
    Speakers.style.display = 'grid';
    e.target.childNodes[0].data = 'More';
    e.target.children[0].classList.remove('rotateArrow');
  }
});
