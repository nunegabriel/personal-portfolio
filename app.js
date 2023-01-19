const hamburger = document.getElementById('menu-bars');
const curtain = document.getElementById('overlay');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const navItems = [nav1, nav2, nav3];
const body = document.querySelector('body');

function trigger() {
  hamburger.classList.toggle('change');
  curtain.classList.toggle('overlay-active');
  if (curtain.classList.contains('overlay-active')) {
    curtain.classList.replace('overlay-slide-left', 'curtain-out');
  } else {
    curtain.classList.replace('curtain-out', 'overlay-slide-left');
  }
  body.classList.toggle('overflow');
}

hamburger.addEventListener('click', trigger);
navItems.forEach((trig) => {
  trig.addEventListener('click', trigger);
});

const portfolioSection = document.getElementById('portfolio');

const portfolio = [
    {
    cardClass: 'tile card-2 card-5',
    cardTitle: 'coinX',
    desktopImage: './img/coinx.png',
    skillpost: 'Frontend Dev',
    year: '2022',
    cardDetails: 'coinX is a web application that provides latest rates of crypto currencies. This aplication includes various details of crypto currencies. It was built with the coincap API',
    portfolioStack: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    btnInfo: 'See More',
    popUpinfo: 'coinX is a web application that provides latest rates of crypto currencies. This aplication includes various details of crypto currencies. It was built with the coincap API',
    popupSeebtnInfo: 'See Live',
    popupIcon: '',
    mobileImage: 'img/coinx.png',
    company: 'COINX',
    popupDetails: 'See Source',
    popupbtnIcon: '',
    popupLive: 'https://splendorous-tulumba-d36d87.netlify.app/',
    gitLink: 'https://github.com/nunegabriel/XCoin'
  },
  {
    cardClass: 'tile card-3',
    cardTitle: 'BOOKSTORE',
    year: '2022',
    cardDetails: 'Bookstore is a simple web app that allows you to keep track of books.',
    portfolioStack: ['html', 'css', 'javascript', 'github', 'react', 'bootstrap'],
    btnInfo: 'See More',
    popUpinfo: 'Bookstore is a simple web app that allows you to keep track of books',
    popupSeebtnInfo: 'See Live',
    popupIcon: '',
    popupDetails: 'See Source',
    popupbtnIcon: '',
    desktopImage: 'img/bookstore.png',
    mobileImage: 'img/bookstore.png',
    company: 'BOOKSTORE',
    skillpost: 'Back End Dev',
    popupLive: 'https://bhookstore.netlify.app/',
    gitLink: 'https://github.com/nunegabriel/Bookstore'
  },
  {
    cardClass: 'tile card-4 card-5',
    cardTitle: 'PRIME MOVIES',
    desktopImage: 'img/movied.png',
    mobileImage: 'img/movied.png',
    company: 'PRIME MOVIES',
    skillpost: 'Back End Dev',
    year: '2022',
    cardDetails: 'This is a web application based on an external API. The external API provides data about TV shows..',
    portfolioStack: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    btnInfo: 'See More',
    popUpinfo: 'This is a web application based on an external API. The external API provides data about TV shows.',
    popupSeebtnInfo: 'See Live',
    popupIcon: '',
    popupDetails: 'See Source',
    popupbtnIcon: '',
    popupLive: 'https://myaserkhan.github.io/JavaScript-API-based-webapp/dist/',
    gitLink: 'https://github.com/myaserkhan/JavaScript-API-based-webapp'
  },
  {
    cardClass: 'tile card-1',
    cardTitle: 'Todo List',
    desktopImage: 'img/todo1.png',
    mobileImage: 'img/todo.png',
    cardDetails: 'This is a simple app to keep track of activities.',
    portfolioStack: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    btnInfo: 'See More',
    popUpinfo: 'This is a simple app to keep track of activities.',
    popupSeebtnInfo: 'See Live',
    popupIcon: '',
    popupDetails: 'See Source',
    company: 'CANOPY',
    skillpost: 'Back End Dev',
    year: '2015',
    popupbtnIcon: '',
    popupLive: 'https://nunegabriel.github.io/toDo-list-app/dist/',
    gitLink: 'https://github.com/nunegabriel/toDo-list-app'
  },
];

Array.from(portfolioSection.children).forEach((child, num) => {
  child.innerHTML = `
  <div class="${portfolio[num].cardClass}">
    <div class="tile-image card-1">
      <img class="tile-image-2 mobile" src="${portfolio[num].mobileImage}" alt="">
      <img class="tile-image-2 desktop" src="${portfolio[num].desktopImage}" alt="">
    </div>
    <div class="title-desc">
      <h2 class="card-title">${portfolio[num].cardTitle}</h2>
      <ul class="card-details">
        <li class="company">${portfolio[num].company}</li>
        <li class="circle"><img src="img/circle.png" alt="circle"></li>
        <li class="skillpost">${portfolio[num].skillpost}</li>
        <li class="circle"><img src="img/circle.png" alt="circle"></li>
        <li class="year">${portfolio[num].year}</li>
      </ul>
      <p class="card-info">${portfolio[num].cardDetails}</p>
      <ul class="tags">
        <li class="tag">${portfolio[num].portfolioStack[0]}</li>
        <li class="tag">${portfolio[num].portfolioStack[1]}</li>
        <li class="tag">${portfolio[num].portfolioStack[2]}</li>
      </ul>
      <button class="btn btn-card" id="${[num]}">${portfolio[num].btnInfo} </button>
    </div>
  </div>
 `;
});

const openmodal = document.querySelectorAll('.btn-card');
openmodal.forEach((element) => {
  element.addEventListener('click', () => {
    body.classList.toggle('overflow');
    const modalWindow = document.createElement('section');
    modalWindow.classList.add('modal-window');
    modalWindow.innerHTML = `
    <div class="modal">
        <div class="modal-header">
          <h2 class="modal-title">${portfolio[element.id].cardTitle}</h2>
          <img class="close" src="img/x-icon.png" alt="close">
        </div>
        <ul class="card-details">
          <li class="company">${portfolio[element.id].company}</li>
          <li class="circle"><img src="img/circle.png" alt="circle"></li>
          <li class="skillpost">${portfolio[element.id].skillpost}</li>
          <li class="circle"><img src="img/circle.png" alt="circle"></li>
          <li class="year">${portfolio[element.id].year}</li>
        </ul>
        <div class="modal-image">
        <img class="modal-img mobile" src="${portfolio[element.id].mobileImage}" alt="">
        <img class="modal-img desktop" src="${portfolio[element.id].desktopImage}" alt="">
      </div>
        <div class="modal-texts">
          <p class="modal-info">${portfolio[element.id].popUpinfo}</p>
          <div class="tag-btns">
            <ul class="modal-tags">
              <li class="tag">${portfolio[element.id].portfolioStack[0]}</li>
              <li class="tag">${portfolio[element.id].portfolioStack[1]}</li>
              <li class="tag">${portfolio[element.id].portfolioStack[2]}</li>
            </ul>
            <ul class="modal-tags">
              <li class="github-tag tag">${portfolio[element.id].portfolioStack[3]}</li>
              <li class="ruby-tag tag">${portfolio[element.id].portfolioStack[4]}</li>
              <li class="bootstrap-tag tag">${portfolio[element.id].portfolioStack[5]}</li>
            </ul>
            <div class="modal-btns">
              <div class="modal-hr">
              <a href="${portfolio[element.id].popupLive}" target="_blank">
                  <button class="btn">See Live <img src="img/live-icon.svg" alt="live"></button>
                </a>
                <a href = "${portfolio[element.id].gitLink}">
                <button class="btn">See Source <img src="img/github-icon.svg" alt="github"></button></a>
              </div>
            </div>  
          <div>
        </div>
    </div>
    `;
    document.body.appendChild(modalWindow);
    window.addEventListener('click', (act) => (act.target === modalWindow ? (modalWindow.classList.add('hidden'), body.classList.toggle('overflow')) : false));
    const closePopup = document.querySelectorAll('.close');
    closePopup.forEach((hb) => {
      hb.addEventListener('click', () => {
        body.classList.toggle('overflow');
        modalWindow.classList.add('hidden');
      });
    });
  });
});