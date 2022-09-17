const portfolioSection = document.getElementById('portfolio');
const body = document.querySelector('body');

const portfolio = [
  {
    cardClass: 'tile card-1',
    cardTitle: 'Tonic',
    desktopImage: 'img/1.png',
    mobileImage: 'img/1m.png',
    cardDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    portfolioStack: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    btnInfo: 'See More',
    popUpinfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    popupSeebtnInfo: 'See Live',
    popupIcon: '',
    popupDetails: 'See Source',
    company: 'CANOPY',
    skillPost: 'Back End Dev',
    year: '2015',
    popupbtnIcon: '',
  },
  {
    cardClass: 'tile card-2 card-5',
    cardTitle: 'Multi-Post Stories',
    desktopImage: './img/2.png',
    skillPost: 'Back End Dev',
    year: '2015',
    cardDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    portfolioStack: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    btnInfo: 'See More',
    popUpinfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    popupSeebtnInfo: 'See Live',
    popupIcon: '',
    mobileImage: 'img/2m.png',
    company: 'CANOPY',
    popupDetails: 'See Source',
    popupbtnIcon: '',
  },
  {
    cardClass: 'tile card-3',
    cardTitle: 'Tonic',
    year: '2015',
    cardDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    portfolioStack: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    btnInfo: 'See More',
    popUpinfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    popupSeebtnInfo: 'See Live',
    popupIcon: '',
    popupDetails: 'See Source',
    popupbtnIcon: '',
    desktopImage: 'img/3.png',
    mobileImage: 'img/3m.png',
    company: 'CANOPY',
    skillPost: 'Back End Dev',  
  },
  {
    cardClass: 'tile card-4 card-5',
    cardTitle: 'Multi-Post Stories',
    desktopImage: 'img/4.png',
    mobileImage: 'img/4m.png',
    company: 'CANOPY',
    skillPost: 'Back End Dev',
    year: '2015',
    cardDetails: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    portfolioStack: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    btnInfo: 'See More',
    popUpinfo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    popupSeebtnInfo: 'See Live',
    popupIcon: '',
    popupDetails: 'See Source',
    popupbtnIcon: '',
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
        <li class="skillPost">${portfolio[num].skillPost}</li>
        <li class="circle"><img src="img/circle.png" alt="circle"></li>
        <li class="year">${portfolio[num].year}</li>
      </ul>
      <p class="card-info">${portfolio[num].cardDetails}</p>
      <ul class="tags">
        <li class="tag">${portfolio[num].portfolioStack[0]}</li>
        <li class="tag">${portfolio[num].portfolioStack[1]}</li>
        <li class="tag">${portfolio[num].portfolioStack[2]}</li>
      </ul>
      <button class="btn btn-card" id="${[num]}">${portfolio[num].btnInfo}</button>
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
          <li class="skillPost">${portfolio[element.id].skillPost}</li>
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
                <button class="btn">See Live <img src="img/live-icon.svg" alt="live"></button>
                <button class="btn">See Source <img src="img/github-icon.svg" alt="github"></button>
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
