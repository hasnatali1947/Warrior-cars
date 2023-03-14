const Speakers = document.getElementById('Speakers');
const otherSpeaker = document.getElementById('otherSpeakers');

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
